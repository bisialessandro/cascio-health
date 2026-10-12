# Cascio.Health

Static one-page site for Nicolas Cascella (@cascio.health). Plain HTML/CSS/JS, no build step.

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173

## Photos

All in `images/`:

- From Nicolas's Canva: `hero.jpg` (mountain, also used in "Chi sono"), `food-1.jpg`, `food-2.jpg`, `result-1..3.jpg`
- Free stock from Unsplash: `eggs.jpg`, `meat.jpg`, `fish.jpg`, `berries.jpg`, `oil.jpg`, `market.jpg`, `veg.jpg`

Replace any file with one of the same name to swap the photo. A dedicated portrait for "Chi sono" would look better than the mountain crop.

## Edit

- WhatsApp number / prefilled message: top of `script.js`
- Colors and fonts: `:root` in `styles.css`

## Deploy to Vercel

```bash
npx vercel        # preview
npx vercel --prod # production
```

Framework preset: "Other", no build command, output directory = project root.
