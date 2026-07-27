# STAY — Apni Dhun Mein Raho

Vernacular AI life companion. Core prototype, 16 screens — implemented as a
Next.js app from the Claude Design project (`STAY App.dc.html`).

A screen-free pendant, a quiet app: the prototype canvas shows a navigation
rail (every screen state), the app inside an iOS 26 device frame, and a
live-switches panel (language EN / Hinglish / ગુજરાતી, tone, Today layout,
appearance, Ask answer style).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build && npm start` for production.

## Try this

- Home is the session feed — open a session for Summary / Analysis /
  Transcript / Actions, and Share → WhatsApp with a real message preview.
- Tap the waveform button — the listen → synthesize → sense hero moment.
- In Ask, type “vendor”, “Ba”, “investor” or “promise” — answers come back
  cited to the moment they came from.
- Deep-link any screen: `/?screen=welcome`, `/?screen=cosmos`,
  `/?screen=tarot`, `/?screen=journal`, …

## Structure

| Path | What it is |
| --- | --- |
| `app/stay-app.jsx` | All prototype state + `renderVals()` (ported from the design's logic class) |
| `lib/data.js` | Content: translations, sessions, guide script, tarot, kundli, personas |
| `lib/css.js` | Cached CSS-string → style-object helper (keeps markup 1:1 with the design source) |
| `components/canvas.jsx` | Rail · device frame · live switches · FAB · tab bar |
| `components/screens/*` | The 46 screen states, transcribed 1:1 from the dc template |
| `components/ios-frame.jsx` | iOS 26 (Liquid Glass) device frame |
| `app/globals.css` | Nocturne design-system tokens, keyframes, hover utilities |

Design notes carried over from the source: Nocturne's dark ground with the
accent used only as a line, a dot and a glow — the amber record light is the
one warm colour in the system. Every claim in the UI is sourced to a moment;
transcripts stay code-mixed (Hinglish, Gujarati) as spoken.
