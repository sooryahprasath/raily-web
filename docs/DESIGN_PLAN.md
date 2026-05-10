# Raily — Design Plan: Web Theming + App Screenshots

## raily-web Dark / Light Mode

### Strategy

- Default: **light** (Survey Paper palette)
- Toggle: sun/moon icon in nav, persisted to `localStorage`
- Implementation: CSS `[data-theme="light"]` overrides on `:root`; dark is base (existing tokens unchanged)
- No-flash: inline `<script>` in `<head>` reads `localStorage` and sets `data-theme` before paint
- React: `ThemeToggle.tsx` client component (`'use client'`), `suppressHydrationWarning` on `<html>`

### Token Mapping

| Token | Dark (default) | Light |
|---|---|---|
| `--bg` | `#0b0d12` | `#f5f0e8` |
| `--card-bg` | `#0d0f18` | `#ede8de` |
| `--ivory` | `#f3ecdc` | `#1e1a12` |
| `--muted` | `#555` | `#6b5e4a` |
| `--very-muted` | `#333` | `#8a7a68` |
| `--subtle` | `#3a3a3a` | `#d4cdc0` |
| `--border` | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.08)` |
| `--border-subtle` | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.04)` |
| `--saffron` | `#ff8a3d` | `#c45a10` |
| Nav bg | `rgba(11,13,18,0.85)` | `rgba(245,240,232,0.90)` |

### Map Color Tokens (six-token system)

| Token | Night Rail (dark) | Survey Paper (light) |
|---|---|---|
| `mapLand` | `#0e1118` | `#f0ebe0` |
| `mapWater` | `#0a1520` | `#c8dde8` |
| `mapRail` | `#ff8a3d` | `#c45a10` |
| `mapCity` | `#1a1f2e` | `#e2d9c8` |
| `mapLabel` | `#9090a0` | `#5a4e3a` |
| `mapGrid` | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.06)` |

### Implementation Steps

1. Add `[data-theme="light"]` block to `globals.css` with overriding token values
2. Add no-flash inline script to `app/layout.tsx` `<head>` (reads `localStorage.theme`, sets `document.documentElement.dataset.theme`)
3. Add `suppressHydrationWarning` to `<html>` tag
4. Create `app/components/ThemeToggle.tsx` (`'use client'`) — button that toggles `data-theme` + `localStorage`
5. Import `ThemeToggle` into `Nav()` in layout
6. Update nav bg in CSS to use a theme-aware custom property

---

## Play Store Screenshots — Full Plan

18 shots total. Primary set = dark (Night Rail). Light variants where noted.

| # | Screen | State / Content | Dark | Light | Notes |
|---|---|---|---|---|---|
| 1 | Home — live journey | EN ROUTE chip, delay badge, next station, halo map | ✅ Primary | ✅ Variant | Two versions for carousel |
| 2 | Home — upcoming | Countdown timer, timeline peeking below fold | ✅ Primary | — | |
| 3 | Home — empty state | No ticket yet, prominent add button | ✅ Primary | — | |
| 4 | Add ticket — PNR sheet | Bottom sheet open, PNR pasted | ✅ Primary | — | |
| 5 | PNR confirmed | CNF status, seat + coach auto-filled | ✅ Primary | — | |
| 6 | Journey detail — ongoing | Route timeline, current station highlighted, progress line | ✅ Primary | ✅ Variant | |
| 7 | Journey detail — insights | CO₂ saved, avg speed, distance, arrival delta | ✅ Primary | — | |
| 8 | Journey detail — past | All stations ticked, completed banner | — | ✅ Primary | Light feels warmer for nostalgia |
| 9 | Safarnama | Ongoing + upcoming + past sections, hero stat strip | ✅ Primary | ✅ Variant | |
| 10 | Stats — rank + distance | Rank card, Earth orbit progress | ✅ Primary | — | |
| 11 | Stats — delay report | Punctuality bars, delay histogram | ✅ Primary | — | |
| 12 | Stats — achievements | Achievement grid, locked + unlocked states | ✅ Primary | — | |
| 13 | Leaderboard | Top rows, your rank row highlighted | ✅ Primary | — | |
| 14 | Public profile | Rank badge, km, zones visited | — | ✅ Primary | |
| 15 | Profile | Avatar, stats summary, edit option | ✅ Primary | — | |
| 16 | Settings — display | Theme toggle visible, light mode active | — | ✅ Primary | Shows the feature exists |
| 17 | Splash / onboarding | Vande Bharat SVG + wordmark | ✅ Primary | — | |
| 18 | Home — map light | Survey Paper map tiles, train marker | — | ✅ Primary | Map showcase |

### Play Store Submission Sets

**Primary dark set (8 shots — mandatory):** 1, 2, 6, 9, 10, 13, 15, 17

**Light showcase set (6 shots — supplementary):** 1-light, 6-light, 8, 14, 16, 18

**Feature highlight slots:**
- Slot 1: Home live (dark) — hook
- Slot 2: Journey detail ongoing (dark) — depth
- Slot 3: Safarnama (dark) — breadth
- Slot 4: Stats rank (dark) — gamification
- Slot 5: Home live (light) — theme versatility
- Slot 6: Leaderboard (dark) — social

### Screenshot Spec

- Device: Pixel 8 (1080×2400) or iPhone 15 Pro (1179×2556)
- Format: PNG, no rounded corners (Play Store crops)
- Text overlay: optional caption strip at bottom (32px DM Serif Display italic, language-appropriate)
- No device frame required for Play Store; device frame optional for website feature rows
