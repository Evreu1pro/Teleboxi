# Teleboxi

Landing page for **[@teleboxi_bot](https://t.me/teleboxi_bot)**, a Telegram bot that downloads videos from TikTok, Instagram (Reels, Stories), YouTube (incl. Shorts), Pinterest and similar platforms. Static HTML/CSS/JS, deployed on Vercel.

| | |
|:--|:--|
| **What** | One-page landing for the Telegram video-downloader bot |
| **Stack** | HTML · CSS (glassmorphism cards) · vanilla JS (IntersectionObserver reveal) |
| **Language** | Russian UI |
| **Deploy** | [teleboxi.vercel.app](https://teleboxi.vercel.app) |
| **Status** | Experimental |

**RU:** Лендинг Telegram-бота для скачивания видео из TikTok, Instagram, YouTube и Pinterest.
**DE:** Landingpage für einen Telegram-Bot, der Videos von TikTok, Instagram, YouTube und Pinterest herunterlädt.

## Files

- `index.html` — page markup (hero + three feature cards + footer)
- `style.css` — layout, glass cards, entrance animations; respects `prefers-reduced-motion`
- `script.js` — reveals the cards on scroll; shows them right away if `IntersectionObserver` isn't available

## Local

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Note

The page only links to the bot; the bot itself is not in this repo. Downloading content is subject to each platform's terms and the uploader's rights.

## Author

[Evreu1pro](https://github.com/Evreu1pro) · Leipzig
