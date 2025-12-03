# SnowWatch – Requirements

## Goal
Build a tool that helps me check snow conditions for my local ski mountains at a glance, so I can quickly decide where/when to ride.

## v1 Scope
- Monitor a small set of local mountains (e.g., Crystal, Stevens, Snoqualmie, Baker).
- Pull basic snow/conditions data:
  - New snow last 24h / 48h
  - Base depth
  - Temperature
  - Maybe open/closed status if available
- Store this data somewhere (file or DB).
- Display conditions in a simple, easy-to-scan view (CLI table or basic HTML page).
- Optionally: refresh on demand or on a schedule.

## Out of Scope for v1
- Fancy frontend SPA
- User accounts
- Mobile app
- Global resorts