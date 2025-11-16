# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Daniel Langkilde's personal website - a minimalist blog built with Astro focusing on essays about entrepreneurship, AI, technology, and business. The site features a clean design with dark mode support, responsive layout, and automatic table of contents generation.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (port 4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
langkilde/
├── src/
│   ├── content/
│   │   ├── short/         # Short writings (blog posts)
│   │   │   └── *.md       # Individual essays
│   │   ├── long/          # Long writings (essays)
│   │   │   └── *.md       # Long-form content
│   │   └── content.config.ts # Content collection schema
│   ├── pages/
│   │   ├── index.astro    # Homepage (short & long writings)
│   │   ├── about.astro    # About page
│   │   ├── investments.astro # Investment portfolio
│   │   ├── memes.astro    # Meme collection
│   │   ├── rss.xml.ts     # RSS feed generator
│   │   ├── blog/
│   │   │   └── [slug].astro # Dynamic route for short writings
│   │   └── long/
│   │       └── [slug].astro # Dynamic route for long writings
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with dark mode
│   ├── data/              # Static data files
│   └── assets/            # Images and other assets
├── public/                # Static files (favicons, etc.)
├── dist/                  # Build output (gitignored)
└── deployment scripts     # deploy.sh, quick-deploy.sh
```

## Common Development Tasks

### Adding a New Writing

**For Short Writings (blog posts):**
1. Create a new `.md` file in `src/content/short/`
2. Add required frontmatter:
```markdown
---
title: "Your Essay Title"
pubDate: "2024-01-15"
---

Your content here...
```
3. The post will automatically appear in the "Short Writings" section on the homepage

**For Long Writings (essays):**
1. Create a new `.md` file in `src/content/long/`
2. Add the same frontmatter as above
3. The essay will appear in the "Long Writings" section on the homepage

Both types auto-generate table of contents from H2 headings

### Modifying Site Navigation

Edit the sidebar links in `src/pages/index.astro:14-17`

### Updating Styles

Global styles and theme variables are in `src/layouts/BaseLayout.astro:13-295`
- CSS variables for theming: lines 17-30
- Responsive breakpoints: 800px for mobile
- Dark mode toggle: lines 372-385

## Key Features

### Dark Mode
- Toggle switch in top-right corner
- Persists user preference in localStorage
- Smooth transitions between themes
- Variables: `--bg-color`, `--text-color`, `--accent-color`

### Responsive Design
- Mobile menu (hamburger) appears < 800px
- Sidebar transforms to slidedown menu on mobile
- Content reflows for optimal reading

### Table of Contents
- Auto-generated from H2 headings in blog posts
- Smooth scroll navigation
- Active section highlighting
- Intersection Observer for scroll-spy

### RSS Feed
- Automatically generated at `/rss.xml`
- Includes all blog posts with title, date, and link
- Implementation in `src/pages/rss.xml.ts`

## Deployment

### Production Deployment (Full)
```bash
./deploy.sh
```
- Pulls latest code from git
- Installs dependencies
- Builds the application
- Rebuilds Docker container
- Restarts with docker-compose

### Quick Deployment (Content Only)
```bash
./quick-deploy.sh
```
- Faster deployment for content-only changes
- Skips Docker rebuild
- Just pulls, builds, and restarts containers

### Docker Setup
- Uses Node 18 Alpine image
- Builds to `dist/` directory
- Nginx serves static files (separate container)
- External network: `shared_network`
- Production port: 8000

## Important Implementation Details

### Content Collections
- Uses Astro's content collections defined in `src/content.config.ts`
- Two collections: `short` (blog posts) and `long` (essays)
- Schema enforces `title` and `pubDate` fields for both
- Posts sorted by date on homepage (newest first)
- Short writings accessible at `/blog/[slug]`
- Long writings accessible at `/long/[slug]`

### Analytics
- Google Analytics 4 integrated (G-5RX4PLK2Y2)
- Tracking code in BaseLayout.astro (in <head> section)
- Path normalization removes trailing slashes to prevent duplicate tracking

### Canvas Background
- Subtle canvas element for potential animations
- Currently renders solid background color
- Implementation in BaseLayout.astro:337-369

### Mobile Sidebar Behavior
- Auto-closes when link is clicked
- Transforms to full-screen overlay
- Fixed position below menu bar

## Common Gotchas

1. **Port conflicts**: Dev server runs on 4321, production on 8000
2. **Package-lock conflicts**: Deployment scripts auto-remove to prevent git conflicts
3. **Docker network**: Requires external `shared_network` to exist
4. **Frontmatter**: Blog posts MUST have `title` and `pubDate` or build fails
5. **Build output**: `dist/` folder is gitignored, created during build
6. **Mobile testing**: Use responsive mode, breakpoint at 800px

## Testing Checklist

- [ ] Blog post renders with correct TOC
- [ ] Dark mode toggle persists on reload
- [ ] Mobile menu opens/closes properly
- [ ] RSS feed generates valid XML
- [ ] All internal links work
- [ ] Images load correctly
- [ ] Build completes without errors