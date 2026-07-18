#!/bin/bash
# Auto-rebuild AllYonoPatti when promo-code.txt changes, so editing the
# file (e.g. via aaPanel's File Manager) is enough on its own — no manual
# `npm run build` / `pm2 restart` needed. Intended to run on a schedule via
# cron (see the setup instructions given alongside this file); only does
# work when the file actually changed since the last successful build, so
# it's safe to run every few minutes without unnecessary rebuild/restart
# hiccups.
set -euo pipefail

SITE_DIR="/www/wwwroot/allyonopatti.com"
STAMP_FILE="$SITE_DIR/.last-promo-build"
LOG_FILE="/var/log/allyonopatti-rebuild.log"

cd "$SITE_DIR"

if [ ! -f "$STAMP_FILE" ] || [ "promo-code.txt" -nt "$STAMP_FILE" ]; then
  {
    echo "=== $(date -Is) rebuilding (promo-code.txt changed) ==="
    npm run build
    pm2 restart allyonopatti
    echo "=== $(date -Is) done ==="
  } >> "$LOG_FILE" 2>&1
  touch "$STAMP_FILE"
fi
