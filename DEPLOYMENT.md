# Free Cloudflare deployment: portfolio + chatbot together

This project now deploys the React portfolio and the protected chatbot API together as one Cloudflare Worker. It works from the same HTTPS URL on mobile and laptop; no `localhost`, Vercel, or Render URL is required.

## First deployment

1. Create a free Cloudflare account and log in through the browser when Wrangler opens it.
2. In this project folder, add the Gemini key as a Cloudflare secret. Do not commit it:

   `npx wrangler secret put GEMINI_API_KEY`

3. Deploy the portfolio and chatbot:

   `npm.cmd run deploy`

4. Wrangler prints a `https://hassan-portfolio.<account>.workers.dev` URL. Open it on a laptop or phone and send a chatbot message.

Cloudflare stores the Gemini key as an encrypted Worker secret; the React browser bundle never receives it. The same deployment serves the static site and `/api/chat` API.

## Later updates

After editing the website:

`npm.cmd run deploy`

## Local Cloudflare test

Create a `.dev.vars` file in the repository root with `GEMINI_API_KEY=...`, then run:

`npx wrangler dev`

`.dev.vars` is ignored by Git.

## Important

The old `server/` folder and `render.yaml` can stay for local Express development, but Cloudflare deployment uses `worker/index.js` and `wrangler.jsonc`. Do not configure `VITE_API_URL` for the Cloudflare deployment: the frontend calls its own `/api/chat` URL.