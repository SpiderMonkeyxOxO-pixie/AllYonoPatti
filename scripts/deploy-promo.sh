#!/bin/bash
# Run this by hand, on the server, any time after editing promo-code.txt
# (or any other content change) to make it live:
#
#   bash scripts/deploy-promo.sh
#
# Just wraps the two manual steps (build + restart) into one command —
# no automation, no schedule, runs only when you run it.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Building..."
npm run build

echo "Restarting..."
pm2 restart allyonopatti

echo "Done — live now."
