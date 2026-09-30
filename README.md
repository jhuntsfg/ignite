# Hunt Agency — IGNITE

A static onboarding hub that takes new agents from "new agent" to "new writer": welcome video, a step-by-step roadmap with saved progress, IGNITE conference session replays, a weekly small-group Q&A schedule, a resource library, and an FAQ.

## Editing content

Everything you'll want to change lives in **`content.js`**: agency name, contact email, welcome video, roadmap steps, session videos, Q&A days/time/booking link, resource links, and FAQ. Search for `TODO` and `"#"` to find placeholders.

Videos take a YouTube (`https://www.youtube.com/embed/ID`) or Vimeo (`https://player.vimeo.com/video/ID`) embed URL. An empty value shows a "Video coming soon" card.

## Running locally

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploying

Upload the folder to any static host (GitHub Pages, Netlify, Vercel, or an existing site builder that accepts custom HTML).
