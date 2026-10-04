# code.allyonopatti.com — admin panel setup

The admin panel is part of this same Next.js app (PM2 `allyonopatti`, port 3002).
Requests whose Host is `code.allyonopatti.com` are routed to `src/app/admin`
by `src/proxy.ts`; on allyonopatti.com `/admin` returns 404. Single admin
account, no sign-up.

## One-time server setup

1. **DNS**: A record `code` -> same server IP as allyonopatti.com.
2. **aaPanel**: add site `code.allyonopatti.com` as a *reverse proxy* to
   `http://127.0.0.1:3002`, issue a Let's Encrypt cert, force HTTPS.
   Make sure the proxy passes the Host header (aaPanel's "Send domain" =
   `$host`, or `proxy_set_header Host $host;`) plus
   `X-Real-IP` / `X-Forwarded-For` (used for login throttling).
3. **Credentials** — on the server, in the app folder:
   ```
   npm run admin:hash -- "a long unique password"
   ```
   Put the printed `ADMIN_PASSWORD_HASH` and `ADMIN_SESSION_SECRET` into
   `.env.local` together with `ADMIN_USERNAME=<your login name>`
   (see `.env.example`).
4. **Keep the live codes outside git**: create a data folder, e.g.
   `/www/wwwroot/allyonopatti-data/`, and set
   `PROMO_FILE=/www/wwwroot/allyonopatti-data/promo-code.txt` in `.env.local`
   (created automatically from the repo copy on first use). Without this the
   file lives in the repo folder and `git reset --hard` on deploy would reset it.
5. Deploy as usual: `git fetch origin && git reset --hard origin/main`,
   `rm -rf .next`, `npm run build`, `pm2 restart allyonopatti --update-env`.

## Daily use

Log in at https://code.allyonopatti.com -> Promo codes. Type codes into the
Morning / Afternoon / Evening boxes, press **Save changes** — live instantly on
every `/promo-codes` page, no rebuild. Press **Start new day** each morning to
clear yesterday's codes and stamp today's date.

## Security notes

- Passwords are scrypt-hashed; the session is a signed HttpOnly, SameSite=Strict,
  Secure cookie valid 8 h. Changing `ADMIN_SESSION_SECRET` logs everyone out.
- 5 failed logins from one IP locks that IP out for 15 minutes.
- The admin host is `noindex` and its robots.txt disallows everything.
- Code cells reject links/domains and `|` characters.
- The previous sheet is kept as `promo-code.txt.bak` on every save.
