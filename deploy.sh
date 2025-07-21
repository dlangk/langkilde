#!/bin/bash

# Langkilde.se Deployment Script
# This script pulls the latest code, builds and restarts the application

set -e  # Exit on any error

echo "🚀 Starting deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "docker-compose.yml" ]; then
    print_error "This doesn't appear to be the langkilde repository directory"
    print_error "Please run this script from the root of the repository"
    exit 1
fi

print_status "Checking current git status..."
git status --porcelain

# Handle any conflicting files before pulling
if [ -f "package-lock.json" ]; then
    print_warning "Removing existing package-lock.json to avoid conflicts..."
    rm package-lock.json
fi

print_status "Pulling latest changes from git..."
git pull

print_status "Installing/updating dependencies..."
npm install

print_status "Building the application..."
npm run build

print_status "Stopping existing containers..."
docker-compose down

print_status "Building new Docker image..."
docker-compose build --no-cache

print_status "Starting containers..."
docker-compose up -d

print_status "Waiting for application to start..."
sleep 10

# Check if the container is running
if docker-compose ps | grep -q "Up"; then
    print_status "✅ Deployment successful!"
    print_status "Application is running on port 8000"
    
    # Show container status
    echo ""
    print_status "Container status:"
    docker-compose ps
    
    # Show recent logs
    echo ""
    print_status "Recent logs:"
    docker-compose logs --tail=20
else
    print_error "❌ Deployment failed - container is not running"
    print_error "Check logs with: docker-compose logs"
    exit 1
fi

print_status "🎉 Deployment completed successfully!"