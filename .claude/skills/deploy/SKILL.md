---
name: deploy
description: Deploy langkilde.se to production. Use this skill after pushing changes to git, when the user mentions deploying, releasing, or going live, or after completing a feature that should be published.
allowed-tools: Bash(ssh:*), Bash(git:*)
---

# Deploy langkilde.se to Production

## When to use this skill
- After pushing commits to main
- When the user says "deploy", "release", "publish", or "go live"
- After completing changes the user wants published

## Pre-deployment checklist
1. Verify all changes are committed: `git status`
2. Verify changes are pushed to origin/main: `git log origin/main..HEAD`

If there are unpushed commits, push them first:
```bash
git push
```

## Deploy command
SSH into the production server and run the deploy script:

```bash
ssh -i ~/.ssh/id_ed25519 daniel.langkilde@35.217.49.95 "cd /home/daniel.langkilde/langkilde && ./deploy.sh"
```

## What the deploy script does
1. Pulls latest from git (hard resets to origin/main)
2. Clears build cache
3. Runs `npm install`
4. Builds Astro static site (`npm run build`)
5. Syncs `dist/` to `/srv/astro/`
6. Tests and reloads nginx
7. Purges Cloudflare cache

## Post-deployment
After successful deployment, the site is live at https://langkilde.se

The deployment summary will show:
- Git commit deployed
- Build duration
- Cloudflare cache purge status
