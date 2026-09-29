# Changelog

## 2026-09-29 — SEO foundations

- New `/robots.txt` (allow all) and `/sitemap.xml` (all 11 pages) so search engines can discover and crawl the site.
- Homepage `<head>` gains JSON-LD structured data (Organization + WebSite schema) to help Google recognize ScribNet as a distinct entity from scribnet.com.

## 2026-09-29 — Book page bug fixes

- Fixed the book pages' stylesheet link: it was copied from the homepage as a relative `styles.css` path, which 404'd under `/guides/` — the header, footer, and GitHub icon were rendering unstyled (including a viewport-sized octocat in the footer). Now root-relative.
- Fixed the book-page script running before the footer existed: the `#year` lookup threw and killed the whole script block (no checklist, no copy buttons, no progress bar, blank year). The script now runs at the end of `<body>` with a guarded lookup.

## 2026-09-29 — Book pages redesigned ("Paper" reading theme)

- All four Zero to Dangerous books restyled as a proper reading experience: warm paper background, Newsreader serif body type, JetBrains Mono code, title-page hero, numbered contents card, reading progress bar, copy buttons on code blocks, redesigned tip/footgun/takeaway callouts, and an interactive "dangerous checklist" (tap to check off, remembered per book). Print stylesheet included.
- Header and footer now sit in dark bands matching the site chrome exactly; the book content keeps its own paper theme between them.
- Theme lives in `~/workspace/guides/book-theme.css`, read by `assemble-books.py` at build time.

## 2026-09-29 — Guides index reveal fix

- Fixed invisible book cards on `/guides.html`: the cards reuse the site's `.card` style (which starts at `opacity: 0` until JS adds `.in`), but the page shipped without the scroll-reveal script — the books were in the HTML but never faded in. Added the same tiny IntersectionObserver reveal the homepage uses.

## 2026-09-29 — Guides mobile hardening

- Guides pages now set the footer copyright year via a tiny inline script (the book pages don't load app.js, so the year was rendering blank).
- Added a mobile fallback so the 5-link topnav wraps instead of squeezing on narrow phone screens.

## 2026-09-29 — "Zero to Dangerous" book series

- New `/guides.html`: a four-book beginner series — Kubernetes, Terraform, APIs, GitHub — six chapters each, in the site's design language (hero, chapter TOC, tip/footgun callouts, TL;DR takeaways, prev/next book nav).
- New pages `/guides/kubernetes.html`, `/guides/terraform.html`, `/guides/apis.html`, `/guides/github.html`.
- Site nav (topnav + footer) on Apps, Podcast, Uses, and Homelab now links Guides; the homepage gains a "Zero to Dangerous" project card.

## 2026-09-28 — Podcast page redesign (launcher theme)

- Rebuilt podcast.html in the app-launcher design language: hero, now-playing card with cover art + play/pause overlay, searchable episode tile grid (3D tilt, cursor spotlight, shine sweep), episode count, shared footer, and the fleet feedback widget (previously missing here).
- Added `podcast-cover.webp` — AI-generated show art (play button + sound-wave pulse, violet-to-cyan aurora).
- Episode tiles load into the now-playing card on click (scroll + autoplay attempt); Copy MP3 link button; latest episode auto-loads; honors prefers-reduced-motion.
## 2026-09-28 — Build log expander + faster typewriter

- Build log now shows the latest 4 entries with a "Show all N" ghost button that expands the rest with a staggered fade-in (frozen under prefers-reduced-motion).
- Typewriter sped up: quicker typing/deleting and shorter pauses between words.
## 2026-09-28 — Branded social cards (lab direction C)

- Real 1200×630 OG images generated from the actual fleet PWA icons (Direction C, "the fleet"): og-home.png ("ScribNet — Building AI in Public") and og-apps.png ("Ten apps. One tap.").
- og:* + twitter:* meta tags wired on all five public pages (home, apps, podcast, uses, homelab); link shares now unfurl with branded art.
## 2026-09-28 — Homepage motion pass + visual lab

- Tab title is now "ScribNet: Building AI in Public".
- Added a demure animated aurora: three slow-drifting, heavily blurred violet/cyan blobs at low opacity (disabled under prefers-reduced-motion).
- Hero stats now count up when scrolled into view (the ∞ stays ∞).
- Hero line got a typewriter rotator: "Building with AI / agents / code / in public by night", with a blinking caret.
- New unlinked /lab.html playground with live demos of five more visual ideas: site-wide cursor glow, timeline build log, 3D tilt cards, branded link-preview mockups, animated gradient text.
## 2026-09-28 — App Launcher page
- New `/apps.html`: an app-store-style launcher for the whole 10-app fleet —
  live search, category filters, 3D tilt + cursor spotlight + shine sweep on
  hover, and each app's real PWA icon pulled from its subdomain. Same design
  language as the homepage (Inter, glass cards, violet→cyan gradient).
- Homepage hero gains an "App Launcher" button next to SE Command Center and
  the podcast; footer nav on all pages links it too.

## 2026-09-28 — Build log, Uses, Homelab diary
- New Build log section on the homepage, compiled from the fleet's changelogs (fleet-wide rollouts collapsed to single lines).
- Hero stats strip updated: live sites, changes shipped, podcast episodes.
- New /uses.html: the gear behind the builds — homelab, desk, software.
- New /homelab.html: homelab build diary with the bring-up timeline and k3s learning track.
- About section links the homelab diary; footer gains Uses/Homelab links.

## 2026-09-28 — Canonical subdomain links
- Replaced legacy `scribnetai.github.io/<repo>/` links with canonical
  `https://<repo>.scribnet.io/` URLs (the old URLs 301-redirect, but docs and
  on-page links should point at the real address).

## 2026-09-28
- Added Umami website analytics (cookieless, no consent banner): pageview tracking plus custom events for ad-slot impression/click reporting.

## 2026-09-28
- Added a floating Feedback button (bottom-right) that opens a dialog to send feedback via email — topic chips, optional name, and message, addressed to the site owner with the app name in the subject.

## 2026-09-28
- Migrated legacy `scribnetai.github.io` links to `https://<app>.scribnet.io` for the HTTPS-enforced apps (se-command-center, server-sizer, network-sizer); links to the remaining apps left on the legacy URLs until their TLS certs are issued. Touched: index.html.

## 2026-09-27
- Redesigned the favicon: full-bleed purple-to-blue gradient badge with a large bold 'S' (the old PWA icon rendered tiny with white padding at bookmark size).

## 2026-09-28

- **New site top navigation on sub-pages.** Replaced the `← scribnet.io` backlink on apps, podcast, uses, and homelab with a proper nav bar: gradient "S" brand badge linking home plus pill links to Apps / Podcast / Uses / Homelab, with the current page marked (`aria-current`). Brand text collapses to the badge alone on narrow screens. Also removed the redundant decorative "scribnet.io" hero pill on apps and podcast — the nav now owns the brand, so the top of the page isn't saying the same thing twice.
- Stylesheet cache-buster bumped to `styles.css?v=nav2` so the new top-nav CSS reaches cached browsers (the nav markup shipped before the CSS in some caches).
