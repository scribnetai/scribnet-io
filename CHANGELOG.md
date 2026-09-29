# Changelog

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
