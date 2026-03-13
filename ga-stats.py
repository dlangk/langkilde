#!/usr/bin/env python3
"""Query Google Analytics 4 data for langkilde.se"""

import argparse
import json
import sys
from datetime import datetime, timedelta

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    FilterExpression,
    FilterExpressionList,
    Filter,
    Metric,
    OrderBy,
    RunReportRequest,
)
from google.oauth2 import service_account

PROPERTY_ID = "439339147"
KEY_PATH = "/Users/langkilde/.config/gcloud/ga4-reader-key.json"


def get_client() -> BetaAnalyticsDataClient:
    creds = service_account.Credentials.from_service_account_file(
        KEY_PATH, scopes=["https://www.googleapis.com/auth/analytics.readonly"]
    )
    return BetaAnalyticsDataClient(credentials=creds)


def run_report(
    dimensions: list[str],
    metrics: list[str],
    start_date: str = "30daysAgo",
    end_date: str = "today",
    limit: int = 20,
    order_by_metric: str | None = None,
    descending: bool = True,
) -> list[dict]:
    client = get_client()
    order = []
    if order_by_metric:
        order.append(
            OrderBy(
                metric=OrderBy.MetricOrderBy(metric_name=order_by_metric),
                desc=descending,
            )
        )

    request = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        order_bys=order,
        limit=limit,
    )
    response = client.run_report(request)

    rows = []
    for row in response.rows:
        entry = {}
        for i, dim in enumerate(dimensions):
            entry[dim] = row.dimension_values[i].value
        for i, met in enumerate(metrics):
            entry[met] = row.metric_values[i].value
        rows.append(entry)
    return rows


def cmd_overview(args):
    """Site overview: sessions, users, pageviews, avg engagement."""
    rows = run_report(
        dimensions=[],
        metrics=[
            "sessions",
            "totalUsers",
            "screenPageViews",
            "averageSessionDuration",
            "bounceRate",
        ],
        start_date=args.start,
        end_date=args.end,
    )
    if rows:
        r = rows[0]
        print(f"Period: {args.start} to {args.end}")
        print(f"Sessions:          {r['sessions']}")
        print(f"Users:             {r['totalUsers']}")
        print(f"Pageviews:         {r['screenPageViews']}")
        print(f"Avg session (sec): {float(r['averageSessionDuration']):.1f}")
        print(f"Bounce rate:       {float(r['bounceRate']):.1%}")


def cmd_pages(args):
    """Top pages by pageviews."""
    rows = run_report(
        dimensions=["pagePath"],
        metrics=["screenPageViews", "totalUsers", "averageSessionDuration"],
        start_date=args.start,
        end_date=args.end,
        limit=args.limit,
        order_by_metric="screenPageViews",
    )
    print(f"{'Page':<60} {'Views':>8} {'Users':>8} {'Avg sec':>8}")
    print("-" * 88)
    for r in rows:
        print(
            f"{r['pagePath']:<60} {r['screenPageViews']:>8} "
            f"{r['totalUsers']:>8} {float(r['averageSessionDuration']):>8.1f}"
        )


def cmd_referrers(args):
    """Top traffic sources."""
    rows = run_report(
        dimensions=["sessionSource"],
        metrics=["sessions", "totalUsers"],
        start_date=args.start,
        end_date=args.end,
        limit=args.limit,
        order_by_metric="sessions",
    )
    print(f"{'Source':<40} {'Sessions':>10} {'Users':>10}")
    print("-" * 62)
    for r in rows:
        print(
            f"{r['sessionSource']:<40} {r['sessions']:>10} {r['totalUsers']:>10}"
        )


def cmd_countries(args):
    """Top countries by users."""
    rows = run_report(
        dimensions=["country"],
        metrics=["totalUsers", "sessions"],
        start_date=args.start,
        end_date=args.end,
        limit=args.limit,
        order_by_metric="totalUsers",
    )
    print(f"{'Country':<30} {'Users':>10} {'Sessions':>10}")
    print("-" * 52)
    for r in rows:
        print(f"{r['country']:<30} {r['totalUsers']:>10} {r['sessions']:>10}")


def cmd_trend(args):
    """Daily sessions/users trend."""
    rows = run_report(
        dimensions=["date"],
        metrics=["sessions", "totalUsers", "screenPageViews"],
        start_date=args.start,
        end_date=args.end,
        limit=366,
    )
    rows.sort(key=lambda r: r["date"])
    print(f"{'Date':<12} {'Sessions':>10} {'Users':>10} {'Pageviews':>10}")
    print("-" * 44)
    for r in rows:
        d = r["date"]
        formatted = f"{d[:4]}-{d[4:6]}-{d[6:]}"
        print(
            f"{formatted:<12} {r['sessions']:>10} {r['totalUsers']:>10} "
            f"{r['screenPageViews']:>10}"
        )


def cmd_devices(args):
    """Device category breakdown."""
    rows = run_report(
        dimensions=["deviceCategory"],
        metrics=["sessions", "totalUsers"],
        start_date=args.start,
        end_date=args.end,
        limit=10,
        order_by_metric="sessions",
    )
    print(f"{'Device':<20} {'Sessions':>10} {'Users':>10}")
    print("-" * 42)
    for r in rows:
        print(
            f"{r['deviceCategory']:<20} {r['sessions']:>10} {r['totalUsers']:>10}"
        )


def cmd_json(args):
    """Raw JSON output for custom queries."""
    dims = args.dimensions.split(",") if args.dimensions else []
    mets = args.metrics.split(",") if args.metrics else ["sessions"]
    rows = run_report(
        dimensions=dims,
        metrics=mets,
        start_date=args.start,
        end_date=args.end,
        limit=args.limit,
        order_by_metric=mets[0] if mets else None,
    )
    print(json.dumps(rows, indent=2))


def main():
    parser = argparse.ArgumentParser(description="GA4 stats for langkilde.se")
    parser.add_argument(
        "--start", default="30daysAgo", help="Start date (YYYY-MM-DD or NdaysAgo)"
    )
    parser.add_argument(
        "--end", default="today", help="End date (YYYY-MM-DD or today)"
    )
    parser.add_argument("--limit", type=int, default=20, help="Max rows")

    sub = parser.add_subparsers(dest="command", required=True)

    sub.add_parser("overview", help="Site overview stats")
    sub.add_parser("pages", help="Top pages")
    sub.add_parser("referrers", help="Top traffic sources")
    sub.add_parser("countries", help="Top countries")
    sub.add_parser("trend", help="Daily trend")
    sub.add_parser("devices", help="Device breakdown")

    json_parser = sub.add_parser("json", help="Custom query as JSON")
    json_parser.add_argument("--dimensions", help="Comma-separated dimensions")
    json_parser.add_argument("--metrics", help="Comma-separated metrics")

    args = parser.parse_args()
    commands = {
        "overview": cmd_overview,
        "pages": cmd_pages,
        "referrers": cmd_referrers,
        "countries": cmd_countries,
        "trend": cmd_trend,
        "devices": cmd_devices,
        "json": cmd_json,
    }
    commands[args.command](args)


if __name__ == "__main__":
    main()
