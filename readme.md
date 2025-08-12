# Supabase Login (Magic Link) — Minimal Starter

Use this tiny static page to create your first user in your Supabase project.

## 1) Configure
- Copy `config.example.js` to `config.js`
- Fill in your **Project URL** and **Anon public key** (Supabase → Project Settings → API)

## 2) Host online (no install)
- **Netlify Drop**: https://app.netlify.com/drop (drag & drop this folder)
- **Vercel / GitHub Pages / CodeSandbox / StackBlitz**: also fine

> Opening `index.html` directly from the file system may block ES module imports in some browsers. Prefer a static host.

## 3) Test
- Open the site, enter your email, click **Send magic link**
- Click the link in your inbox
- Refresh the page — you should see “Logged in as <email>”
- In Supabase Dashboard → Authentication → Users: your user should now appear
