# View Google Analytics stats for langkilde.se

## When to use this skill
- When the user asks about traffic, views, stats, analytics, or visitors
- When the user wants to know how a post is performing
- After deploying, if the user wants to check impact

## How to run

The GA4 stats script lives at the project root. Always use the dedicated venv:

```bash
/Users/langkilde/dev/langkilde/.venv-ga4/bin/python /Users/langkilde/dev/langkilde/ga-stats.py [OPTIONS] COMMAND
```

## Available commands

| Command | Description |
|---------|-------------|
| `overview` | Sessions, users, pageviews, avg duration, bounce rate |
| `pages` | Top pages by pageviews |
| `referrers` | Top traffic sources |
| `countries` | Top countries by users |
| `trend` | Daily sessions/users/pageviews breakdown |
| `devices` | Device category breakdown |
| `json` | Raw JSON output (use `--dimensions` and `--metrics`) |

## Common options

- `--start` - Start date (`YYYY-MM-DD` or `NdaysAgo`). Default: `30daysAgo`
- `--end` - End date (`YYYY-MM-DD` or `today`). Default: `today`
- `--limit` - Max rows returned. Default: `20`

## Common usage patterns

**Last 48 hours overview:**
```bash
.venv-ga4/bin/python ga-stats.py --start 2daysAgo overview
```

**Last week top pages:**
```bash
.venv-ga4/bin/python ga-stats.py --start 7daysAgo pages
```

**Daily trend for the month:**
```bash
.venv-ga4/bin/python ga-stats.py --start 30daysAgo trend
```

## Presenting results

- Summarize key numbers in a table
- Highlight the top-performing page
- Convert avg session duration from seconds to minutes
- Note notable traffic sources
