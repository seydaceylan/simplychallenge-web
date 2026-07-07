# simplychallenge-web

Official website for [Simply Challenge](https://simplychallenge.app) — a habit tracker iOS app.

## Quick Start

Open `index.html` directly in your browser. No build step required.

```bash
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Structure

```
/
├── index.html          Landing page
├── privacy.html        Privacy Policy
├── terms.html          Terms of Service
├── css/style.css       Styles & design system
├── js/main.js          Navigation, carousel, animations
└── assets/
    ├── icons/          App icon, feature icons, App Store badge
    ├── images/         OG image
    └── screenshots/    App screenshot mockups
```

## Configuration

Update the App Store URL in `index.html` when your app is live:

```
https://apps.apple.com/app/simply-challenge
```

Replace with your actual App Store link (e.g. `https://apps.apple.com/app/idXXXXXXXXX`).

## Tech Stack

- Pure HTML, CSS, and JavaScript
- No frameworks, no build tools
- Inter font via Google Fonts
- SVG assets for crisp rendering at any resolution
