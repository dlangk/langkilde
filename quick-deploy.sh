#!/bin/bash

# Quick deployment script - skips Docker rebuild for faster deployments
# Use this when you only have content/code changes, not dependency changes

set -e

echo "⚡ Quick deployment starting..."

# Handle package-lock conflicts
if [ -f "package-lock.json" ]; then
    rm package-lock.json
fi

# Pull latest changes
echo "📥 Pulling changes..."
git pull

# Install any new dependencies (but don't rebuild everything)
echo "📦 Updating dependencies..."
npm install

# Build the app
echo "🔨 Building..."
npm run build

# Restart containers (reuses existing image)
echo "🔄 Restarting containers..."
docker-compose restart

echo "✅ Quick deployment complete!"