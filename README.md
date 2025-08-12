
# Essentie Tool — RESET build (12 Aug 2025, Europe/Amsterdam)

Deze versie is **in lijn met je database-schema** dat we eerder aanmaakten:
- `question_sets` / `question_groups` / `questions` (met `group_id`, `question`, `help_text`, `position`)
- `sessions` (met `set_id` + `user_id`)
- `answers` (met `answer` tekstveld)

## Bestanden
- `index.html` – login, sessie aanmaken, lijst, link naar `vragen.html?session=<uuid>`
- `vragen.html` – haalt **groups → questions** op en slaat op in **answers**
- `supabaseClient.js` – al gevuld met jouw project:
  - URL: https://lhubynidwlzpsdqrpavs.supabase.co
  - Anon key: ***ingevuld***
- `style.css` – simpele stijl
- `_redirects` – voor Netlify SPA

## Herstel in 3 stappen
1) **Upload** deze map naar Netlify (Deploy manually) of commit naar GitHub (waar Netlify aan hangt).
2) In Supabase → **Authentication → URL Configuration**:
   - **Site URL** = je Netlify-domein
   - **Redirect URLs** = hetzelfde domein
3) Open je site → login → maak sessie → klik **Start vragen** → antwoorden opslaan.

### Veel voorkomende fouten
- 404 na magic link → `_redirects` ontbreekt → voeg toe.
- Vragen zijn leeg → check of `question_sets` + `question_groups` + `questions` init-seed aanwezig zijn en `is_active=true`.
- Insert answers faalt → controleer RLS: policies voor `answers` staan op “owner only” en je frontend stuurt `user_id` automatisch mee.

Succes! 🎯
