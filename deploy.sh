#!/bin/bash

# Langkilde.se deployment script (Astro → Nginx)
# - Runs inside: ~/langkilde
# - Builds Astro locally and syncs ./dist to /srv/astro
# - Reloads the existing nginx container to pick up new files

set -euo pipefail

# Colors for log output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

log_info()    { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $1"; }
log_step()    { echo -e "${BLUE}[STEP]${NC} $1"; }

# Summary tracking
DEPLOY_START=$(date +%s)
SUMMARY_WARNINGS=()
SUMMARY_ERRORS=()

add_warning() { SUMMARY_WARNINGS+=("$1"); log_warn "$1"; }
add_error()   { SUMMARY_ERRORS+=("$1"); log_error "$1"; }

# Ensure we are in the langkilde repo root
if [ ! -f "package.json" ] || [ ! -f "astro.config.mjs" ]; then
  log_error "This does not look like the langkilde repo root (missing package.json or astro.config.mjs)."
  log_error "Run this script from: ~/langkilde"
  exit 1
fi

echo ""
log_step "1/7 Checking git status..."
BEFORE_COMMIT=$(git rev-parse --short HEAD)

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  add_warning "Uncommitted changes detected! Resetting to clean state."
  git status --short
  git reset --hard HEAD
  git clean -fd
fi

echo ""
log_step "2/7 Pulling latest changes from git..."
git fetch origin
git reset --hard origin/main
AFTER_COMMIT=$(git rev-parse --short HEAD)

if [ "$BEFORE_COMMIT" = "$AFTER_COMMIT" ]; then
  log_info "Already at latest commit: $AFTER_COMMIT"
else
  log_info "Updated: $BEFORE_COMMIT → $AFTER_COMMIT"
fi

echo ""
log_step "3/7 Clearing build cache..."
rm -rf dist .astro node_modules/.cache 2>/dev/null || true
log_info "Build cache cleared"

echo ""
log_step "4/7 Installing/updating npm dependencies..."
npm install --silent

echo ""
log_step "5/7 Building Astro static site..."
npm run build

# Capture CSS filename for summary
CSS_FILE=$(ls dist/_astro/*.css 2>/dev/null | head -1 | xargs basename 2>/dev/null || echo "none")

echo ""
log_step "6/7 Syncing ./dist → /srv/astro ..."
RSYNC_OUTPUT=$(sudo rsync -av --delete dist/ /srv/astro/ 2>&1)
RSYNC_FILES=$(echo "$RSYNC_OUTPUT" | grep -c "^[^d].*" || echo "0")
log_info "Synced files to /srv/astro/"

log_info "Testing nginx configuration..."
docker exec nginx nginx -t

log_info "Reloading nginx..."
docker exec nginx nginx -s reload

echo ""
log_step "7/7 Purging Cloudflare cache..."
if [ ! -f ~/.cloudflare ]; then
  add_error "~/.cloudflare not found! Create it with zone ID on line 1 and API token on line 2."
  CF_SUCCESS=false
else
  CF_ZONE_ID=$(sed -n '1p' ~/.cloudflare)
  CF_TOKEN=$(sed -n '2p' ~/.cloudflare)
  CF_RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/purge_cache" \
    -H "Authorization: Bearer ${CF_TOKEN}" \
    -H "Content-Type: application/json" \
    --data '{"purge_everything":true}')

  if echo "$CF_RESPONSE" | grep -q '"success": true'; then
    CF_SUCCESS=true
    log_info "Cache purged successfully"
  else
    CF_SUCCESS=false
    add_warning "Cache purge may have failed"
    echo "$CF_RESPONSE"
  fi
fi

# Calculate duration
DEPLOY_END=$(date +%s)
DURATION=$((DEPLOY_END - DEPLOY_START))

# Print summary report
echo ""
echo -e "${BOLD}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BOLD}                    DEPLOYMENT SUMMARY                      ${NC}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "  ${BOLD}Git Commit:${NC}      $AFTER_COMMIT"
echo -e "  ${BOLD}Commit Message:${NC}  $(git log -1 --format='%s' | head -c 50)"
echo -e "  ${BOLD}CSS File:${NC}        $CSS_FILE"
echo -e "  ${BOLD}Duration:${NC}        ${DURATION}s"
echo -e "  ${BOLD}Cloudflare:${NC}      $([ "$CF_SUCCESS" = true ] && echo '✓ Purged' || echo '✗ Failed')"
echo ""

if [ ${#SUMMARY_WARNINGS[@]} -gt 0 ]; then
  echo -e "  ${YELLOW}Warnings (${#SUMMARY_WARNINGS[@]}):${NC}"
  for w in "${SUMMARY_WARNINGS[@]}"; do
    echo -e "    - $w"
  done
  echo ""
fi

if [ ${#SUMMARY_ERRORS[@]} -gt 0 ]; then
  echo -e "  ${RED}Errors (${#SUMMARY_ERRORS[@]}):${NC}"
  for e in "${SUMMARY_ERRORS[@]}"; do
    echo -e "    - $e"
  done
  echo ""
fi

if [ ${#SUMMARY_ERRORS[@]} -eq 0 ] && [ ${#SUMMARY_WARNINGS[@]} -eq 0 ]; then
  echo -e "  ${GREEN}✓ No warnings or errors${NC}"
  echo ""
fi

echo -e "${BOLD}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  ✅ Deployment complete!${NC}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════${NC}"
echo ""
