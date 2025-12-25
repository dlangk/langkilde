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
NC='\033[0m'

log_info()    { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $1"; }

# Ensure we are in the langkilde repo root
if [ ! -f "package.json" ] || [ ! -f "astro.config.mjs" ]; then
  log_error "This does not look like the langkilde repo root (missing package.json or astro.config.mjs)."
  log_error "Run this script from: ~/langkilde"
  exit 1
fi

log_info "Current directory: $(pwd)"
log_info "Git status (before pull):"
git status --short || true

log_info "Pulling latest changes from git..."
git pull --ff-only

log_info "Installing/updating npm dependencies..."
npm install

log_info "Building Astro static site..."
npm run build

log_info "Syncing ./dist → /srv/astro ..."
sudo rsync -av --delete dist/ /srv/astro/

log_info "Testing nginx configuration inside container 'nginx'..."
docker exec nginx nginx -t

log_info "Reloading nginx inside container 'nginx'..."
docker exec nginx nginx -s reload

log_info "Purging Cloudflare cache..."
CF_ZONE_ID=$(sed -n '1p' ~/.cloudflare)
CF_TOKEN=$(sed -n '2p' ~/.cloudflare)
CF_RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/purge_cache" \
  -H "Authorization: Bearer ${CF_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}')
echo "$CF_RESPONSE"
echo "$CF_RESPONSE" | grep -q '"success":true' && \
  log_info "Cache purged successfully" || log_warn "Cache purge may have failed"

log_info "✅ Deployment complete. New Astro build is now served from /srv/astro."