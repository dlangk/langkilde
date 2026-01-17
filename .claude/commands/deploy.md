---
allowed-tools: Bash(ssh:*)
description: Deploy the site to production after pushing to git
---

# Deploy to Production

Run the deployment script on the remote server via SSH.

## Pre-flight checks
- Ensure all changes are committed and pushed to `main`
- The remote server will pull from origin/main

## Deploy command
```bash
ssh -i ~/.ssh/id_ed25519 daniel.langkilde@35.217.49.95 "cd /home/daniel.langkilde/langkilde && ./deploy.sh"
```

## What the deploy script does
1. Pulls latest from git (resets to origin/main)
2. Runs `npm install`
3. Builds Astro static site
4. Syncs dist/ to /srv/astro/
5. Reloads nginx
6. Purges Cloudflare cache

After deployment, verify the site at https://langkilde.se
