# Changelog

## 2026-09-29 — Prompts page: search + tag filtering, homepage hero button

- Homepage hero now has a fourth button, "Workflow Prompts", linking to /prompts.html — sits alongside SE Command Center, App Launcher, and the podcast button.
- Prompts page is now searchable and tag-filterable: a search box matches titles, blurbs, and tags; tag filter chips are generated from each workflow's tags, so new workflows only need their tags listed in the builder.
- Each workflow card shows its tag pills — clicking a pill filters the page to that tag.
- Builder change (build-prompts-page.py): tags live in WORKFLOW_TAGS next to the workflow definitions, so future regenerations keep the search/filter UI instead of drifting.

## 2026-09-29 — Fleet SEO pass: canonicals, social tags, structured data

- All 9 app subdomains now ship full SEO head tags: canonical URL, meta description (trimmed to ~155 chars), Open Graph + Twitter Card tags, and `WebApplication` JSON-LD.
- scribnet.io: every page now carries a self-referencing canonical; regenerated Apps, Lab, Prompts, Guides, and all four book pages from the current homepage head (correct per-page og:url/og:title/canonical, inherited Organization+WebSite JSON-LD).
- Podcast, Uses, Homelab: added canonical + `WebPage` JSON-LD; promoted the hero heading to `<h1>` on Uses and Homelab (visuals unchanged).
- Sitemap now includes `/prompts.html`.
## 2026-09-29 — Sitemap: added /prompts.html

- Added `https://scribnet.io/prompts.html` to `sitemap.xml` (priority 0.9, weekly) so it's included ahead of the Google Search Console sitemap submission.
## 2026-09-29 — Prompts page rebuilt as general-purpose install prompts

- Rewrote all three install prompts (`/prompts.html`) from author-specific to stranger-ready: Daily Briefing, Podcast Script Studio, Music Discovery — no more hardcoded vendors, hosts, or music lanes.
- Every prompt now opens with a bounded first-run setup interview (max 5 questions, one at a time, "skip" escape hatch, assumptions stated aloud) so the workflow configures itself to the user's world.
- Added checkable "HARD RULES" blocks: NOT FOUND instead of guessing, never invent citations/tracks/stats, capability honesty up front ("say whether you can access current web sources").
- New "First-run setup" section per workflow lists the interview questions before you paste. Page copy, meta description, and safety checklists updated to match.
## 2026-09-29 — Removed third-party attribution from site pages

- Scrubbed all third-party brand mentions from `/prompts.html`, the homepage "Five rules" section, and `/lab.html` — the borrowed-patterns framing stays, unattributed.
## 2026-09-29 — Workflow prompts page + five rules on homepage

- New `/prompts.html`: copy-paste workflow install prompts as a standalone page (ebook-style, confined for iteration) — briefing generator, podcast pipeline, song picks. Each workflow ships with a one-click copy button, a visible safety checklist, and how-to-use; prompts are tested to install from a fresh chat. Linked in topnav + footer site-wide.
- Homepage: new "Five rules I build by" section — the five daily-agent lessons, each mapped to this fleet's pipeline (battlecard updater discipline, deployed-bytes rule, single-commit deploys, dated changelogs, midnight QA), linking through to the prompts page.
- `styles.css`: new lesson-card and prompt-pack component styles (cache-buster bumped to `?v=prompts1`).
## 2026-09-29 — Lab page: four borrowed patterns as live demos

- New "Steal-worthy patterns, on trial" section on the unlinked `/lab.html`: four borrowed patterns, rebuilt as working demos to evaluate live before anything ships to the real pages.
- Demo 6 — Install-prompt packaging: pick a workflow (briefing generator, podcast pipeline, song picks) and copy a ready-to-paste install prompt with the safety checklist built in.
- Demo 7 — Honest caveats: toggle the caveats block on a mock briefing item.
- Demo 8 — Five daily-agent lessons: the five rules, each mapped to this fleet's pipeline.
- Demo 9 — Skill safety checklist: interactive fetch → summarize → scan → install → verify walkthrough with progress bar.

## 2026-09-29 — Podcast episode pages for search indexing

- New `/episodes/<slug>.html` pages: one per published episode (6 live) with full transcript, topics, audio player, canonical URL, and PodcastEpisode JSON-LD structured data — gives Google indexable text for every episode.
- `sitemap.xml` now includes all episode URLs.
- New `build-episode-pages.py` in the podcast goal workspace: idempotent generator run by the daily link-update job, so new episodes get pages automatically (one git-db commit per run, skipped when nothing changed).
- Podcast tile grid gains a "Transcript →" link on each episode tile.

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
