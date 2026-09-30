# Hunt Agency — IGNITE 2027

A one-page event site inviting Hunt Agency agents to IGNITE 2027 (March 1–3, 2027, Dallas, Texas): event banner, ticket and hotel room-block cards, an FAQ, and a video message from agency leadership.

## Editing content

Everything lives in **`content.js`**: agency name, event details, card prices/bullets/links, the video, and FAQs. Search for `TODO` to find what still needs a real value (currently just the ticket purchase link; until it is set, the "Get Your Ticket" button shows a "coming soon" note).

- **Banner image:** to use the official event graphic, drop it in `assets/` and set `event.bannerImage` (e.g. `"assets/ignite-banner.jpg"`). Otherwise a built-in text banner is shown.
- **Video:** set `video` to a Wistia embed URL or bare Wistia ID, a YouTube/Vimeo embed URL, or a local `.mp4` in `assets/` (currently `assets/ignite27-teaser.mp4`).

## Running locally

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploying

Upload the folder to any static host (GitHub Pages, Netlify, Vercel), or paste the HTML/CSS/JS into a custom-code page on your site builder.
