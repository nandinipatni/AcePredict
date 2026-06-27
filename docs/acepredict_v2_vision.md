# AcePredict — Product Vision Document v2
### The Single Source of Truth for All Future Development

> **Document Status:** Approved Architecture · Design-Complete · Ready for Implementation  
> **Last Updated:** June 2025  
> **Classification:** Internal · Founding Product Document

---

## Table of Contents

1. [Executive Vision](#1-executive-vision)
2. [Product Mission](#2-product-mission)
3. [Problem Statement](#3-problem-statement)
4. [Target Users](#4-target-users)
5. [Product Positioning](#5-product-positioning)
6. [Core Product Pillars](#6-core-product-pillars)
7. [Information Architecture](#7-information-architecture)
8. [Navigation Architecture](#8-navigation-architecture)
9. [Complete Screen Specifications](#9-complete-screen-specifications)
10. [Surface Theme System](#10-surface-theme-system)
11. [Design Language](#11-design-language)
12. [Visual Identity](#12-visual-identity)
13. [Animation Principles](#13-animation-principles)
14. [Tennis Metaphor System](#14-tennis-metaphor-system)
15. [MVP Scope](#15-mvp-scope)
16. [Post-MVP Scope](#16-post-mvp-scope)
17. [Technical Architecture](#17-technical-architecture)
18. [Data Architecture](#18-data-architecture)
19. [Model Architecture](#19-model-architecture)
20. [Recommended Folder Structure](#20-recommended-folder-structure)
21. [Build Roadmap](#21-build-roadmap)
22. [Success Criteria](#22-success-criteria)
23. [Non-Negotiable Rules](#23-non-negotiable-rules)

---

## 1. Executive Vision

AcePredict is an **AI Tennis Intelligence Platform**. It is not a match predictor. It is not a statistics dashboard. It is not a machine learning demo.

AcePredict is to tennis analytics what The Athletic is to sports journalism — a product that respects its audience's intelligence, presents information with editorial conviction, and makes the act of consuming sports data feel like a premium experience.

The product exists at the intersection of three worlds: the visual vocabulary of professional tennis broadcasting (ATP Tour, Wimbledon), the information density of elite sports analytics (Sofascore, Formula 1 Data), and the interaction craft of consumer technology at its best (Apple motion design, editorial digital media).

Every screen should make the user feel one thing: **"This platform understands professional tennis."**

This is a portfolio-quality, deployable product designed to stand out to recruiters, hiring managers, hackathon judges, startup founders, and engineering teams. It should be the kind of product people demo to other people unprompted — not because of what it does, but because of how it feels to use it.

The governing design ratio: **70% visual experience, 30% technical complexity.**

---

## 2. Product Mission

> **To make tennis intelligence feel as compelling as tennis itself.**

AcePredict gives fantasy tennis players and tennis analysts the tools to understand professional matches with the depth of an ATP Tour analyst and the immediacy of a live broadcast. It translates complex historical data and machine learning outputs into experiences that feel human, editorial, and unmistakably tennis.

---

## 3. Problem Statement

### What exists today

Existing tennis analytics tools fall into two categories:

1. **Raw data repositories** — Jeff Sackmann's datasets, ATP/WTA stat pages, Tennis Abstract. Powerful but inaccessible. Require domain expertise and data literacy to extract value.

2. **Generic sports dashboards** — Flashscore, Sofascore for tennis. Functional, real-time, but visually undifferentiated from every other sport on the platform. No editorial voice. No intelligence layer.

### What is missing

There is no product that combines:
- The **visual identity** of professional tennis broadcasting
- The **analytical depth** of historical match data
- The **intelligence layer** of modern ML and AI
- The **editorial voice** of premium sports journalism

This gap is the product opportunity. AcePredict fills it.

### The cost of the status quo

Fantasy tennis players make decisions based on gut instinct and fragmented data from multiple sources. Tennis analysts spend hours manually cross-referencing historical CSVs. Neither group has a tool that thinks the way they think — in terms of surfaces, head-to-head history, form cycles, and contextual match dynamics.

---

## 4. Target Users

### 4.1 Fantasy Tennis Players

#### Profile
Recreational to semi-serious tennis fans who participate in fantasy leagues, prediction competitions, or informal match betting. They follow ATP/WTA tours actively. They watch matches. They have opinions. They lack data-backed confidence.

#### Goals
- Identify which player has the statistical edge in an upcoming match
- Understand how surface affects their fantasy picks
- Simulate tournament draws to identify optimal selections
- Find value in non-obvious matchups (dark horse picks, upset potential)
- Track player form across a season to time fantasy decisions

#### Pain Points
- Current tools require data literacy they don't have
- No platform synthesises surface performance, form, and H2H into a single view
- Tournament bracket tools feel generic — not tennis-specific
- No product gives them an "expert opinion" they can trust and understand
- The gap between watching tennis and analysing tennis is too large

#### Primary Workflows
1. **Pre-match research** → Match Intelligence → surface-aware prediction → Story Mode narrative
2. **Tournament preparation** → Tournament Predictor → bracket simulation → dark horse identification
3. **Form tracking** → Player Intelligence → recent form timeline → surface performance
4. **Rivalry context** → Head-to-Head → H2H timeline → momentum indicators

---

### 4.2 Tennis Analysts

#### Profile
Serious tennis followers: journalists, coaches, advanced fantasy players, ATP/WTA staff, betting analysts, and enthusiasts with statistical backgrounds. They understand the sport deeply. They are sceptical of tools that oversimplify. They want depth and accuracy.

#### Goals
- Access surface-specific performance data quickly and clearly
- Cross-reference head-to-head history against current form
- Identify statistical trends across seasons and surfaces
- Generate evidence-based narratives for writing, coaching, or analysis
- Use AI to surface insights they wouldn't find manually

#### Pain Points
- Raw CSV data is powerful but requires significant setup to query
- Existing tools visualise data generically — not tennis-specifically
- No tool surfaces the *why* behind a statistical pattern
- Head-to-head analysis is fragmented across multiple data sources
- Surface splits are rarely presented with the granularity needed for serious analysis

#### Primary Workflows
1. **Deep player research** → Player Intelligence → radar chart → career arc → AI insight
2. **Match preparation** → Match Intelligence → prediction drivers → Story Mode → AI Analyst
3. **Historical analysis** → Head-to-Head → full H2H timeline → surface splits → match log
4. **Natural language research** → AI Analyst → complex query → structured analysis card
5. **Surface intelligence** → Surface Intelligence page → surface-specific rankings and data

---

## 5. Product Positioning

### What AcePredict is

| Dimension | AcePredict |
|---|---|
| Category | AI Tennis Intelligence Platform |
| Audience | Fantasy players + Tennis analysts |
| Voice | Expert broadcaster meets editorial journalist |
| Visual identity | ATP Tour × Formula 1 broadcast × Apple motion |
| Data philosophy | Historical depth + AI narrative layer |
| Interaction model | Investigation, not consumption |

### What AcePredict is not

| It is NOT | Why this matters |
|---|---|
| A match predictor | Predictions are one feature, not the product |
| An ML dashboard | Technical outputs need editorial context |
| A SaaS admin panel | The design language must be sports-first |
| A generic analytics site | Every pixel must speak the language of tennis |
| A chatbot | The AI layer is an analyst, not an assistant |
| A real-time scores app | The product is intelligence, not live data |

### Competitive reference points

**Visual inspiration:** ATP Tour digital, Wimbledon website, Formula 1 broadcast graphics, Apple product videos

**Editorial inspiration:** The Athletic, Bleacher Report long-form, ESPN FC

**Data inspiration:** Sofascore, Tennis Abstract, FiveThirtyEight sports

**Interaction inspiration:** Apple Maps, Robinhood reveal animations, Opta Stats

---

## 6. Core Product Pillars

### 6.1 Match Intelligence

The core prediction experience. Given two players and a surface, the system delivers a probability-based prediction wrapped in a four-act broadcast narrative (Story Mode). This is the signature feature of the product.

**What it delivers:**
- Win probability with confidence rating (Very High / High / Medium / Low)
- Surface-specific context
- Recent form comparison
- Head-to-head summary
- AI-generated deciding factor
- Key statistical drivers

**What it is not:** A simple percentage. The prediction is the beginning of the intelligence, not the end.

---

### 6.2 Player Intelligence

A full player profile that reads like a long-form sports biography. Surface radar chart, career statistics, recent form timeline, and AI-generated insight. The user should leave knowing a player as a performer.

**What it delivers:**
- Surface radar (Hard / Clay / Grass / Indoor / vs Top-10 / Recent Form)
- Career win rate and Grand Slam record
- Surface-specific win rate with sample size
- Rolling form timeline (last 40 matches)
- AI analyst insight sentence
- Bridge to Match Intelligence and Head-to-Head

---

### 6.3 Head-to-Head Intelligence

The rivalry screen. The most emotionally resonant page in the product. A complete competitive history between two players visualised as an editorial document.

**What it delivers:**
- All-time H2H record (the scoreline — the emotional center)
- Surface-split records (Hard / Clay / Grass)
- Chronological H2H timeline with trend line
- Filterable match history with scores and surface tags
- Momentum indicator
- Direct prediction CTA

---

### 6.4 Tournament Intelligence

The fantasy tennis anchor feature. Users build a draw, the engine simulates 1,000 scenarios, and the results surface the probability-driven path to the championship — including dark horse picks and upset alerts.

**What it delivers:**
- Configurable draw builder (8 / 16 / 32 players)
- Animated bracket visualisation
- Champion probability leaderboard
- Dark horse identification
- Upset alert system
- Shareable bracket output

---

### 6.5 Surface Intelligence

A dedicated educational and analytical space for each of the three major court surfaces. When the user switches surfaces, the entire platform re-atmospheres. The Surface Intelligence page contextualises why surfaces matter and how they affect play style and prediction outcomes.

**What it delivers:**
- Surface-specific player performance rankings
- How surface affects the current featured matchups
- Educational context (rally length, serve importance, net play frequency)
- Visual identity shift that makes the surface tangible

---

### 6.6 AI Analyst

A persistent, context-aware analysis layer available on every page. Not a chatbot. Not a generative AI demo. An ATP-style broadcast analyst that takes natural language questions and returns structured, specific, statistically-grounded responses.

**What it delivers:**
- Natural language query input
- Context injection from the current page state (active players, surface, prediction result)
- Structured analysis cards with key statistics
- Suggested questions relevant to the current context
- Broadcast-style response voice

---

## 7. Information Architecture

```
AcePredict
│
├── Centre Court (/)
│   ├── Cinematic hero + surface selector
│   ├── Natural language search bar
│   ├── Today's Centre Court (featured match)
│   ├── Surface of the Week (editorial strip)
│   ├── Rivalry Watch (2 curated rivalries)
│   ├── Player in Form (surface-computed leader)
│   └── Tournament Spotlight (conditional, config-driven)
│
├── Match Intelligence (/match)
│   ├── VS Arena (dual player autocomplete)
│   ├── Prediction Reveal (probability + confidence)
│   ├── Story Mode
│   │   ├── Act 1: Recent Form
│   │   ├── Act 2: Surface Verdict
│   │   ├── Act 3: Rivalry Thread
│   │   └── Act 4: The Deciding Factor (AI)
│   ├── Prediction Drivers (stat grid)
│   └── Surface sidebar
│
├── Player Intelligence (/player/:name)
│   ├── Player search bar
│   ├── Player hero band (rank + name + silhouette)
│   ├── Surface radar chart
│   ├── Career stats grid (2×3)
│   ├── Surface performance bars (3 surfaces)
│   ├── Recent form timeline (Recharts AreaChart)
│   ├── AI Analyst insight
│   └── Bridge CTAs (predict / H2H)
│
├── Head-to-Head (/h2h/:playerA/:playerB)
│   ├── Dual player selector
│   ├── Rivalry cinematic header (names + scoreline)
│   ├── Surface split cards (3)
│   ├── H2H timeline (axis + ticks + trend line)
│   ├── Match history list (filterable)
│   ├── Momentum indicator
│   └── Predict CTA (full-width primary)
│
├── Tournament Predictor (/tournament)
│   ├── Tournament setup (name + draw size)
│   ├── Draw builder (player slots grid)
│   ├── Bracket visualisation (animated)
│   ├── Champion probability leaderboard
│   ├── Dark horse card
│   ├── Upset alerts
│   └── Share + re-simulate CTAs
│
└── AI Analyst (persistent overlay, all pages)
    ├── Natural language input
    ├── Context from active page
    ├── Suggested questions (3 chips)
    ├── Streaming response
    └── Previous query history (3 chips)
```

---

## 8. Navigation Architecture

### Global Navigation (desktop — top bar, sticky)

```
[AcePredict]    Centre Court · Match Intelligence · Player Intelligence · Head-to-Head · Tournament    [HARD | CLAY | GRASS]  [Ask the Analyst]
```

- Height: 56px
- Background: `--ap-bg-base` at 92% opacity with `backdrop-filter: blur(12px)`
- Active item: `--ap-text-primary` + 2px accent underline in `--ap-surface-primary`
- Inactive items: `--ap-text-secondary`
- Surface selector: three pills (Hard / Clay / Grass), active pill filled with `--ap-surface-primary`
- AI Analyst: icon button (36×36px), `--ap-bg-elevated` background

### Mobile Navigation (bottom bar, sticky)

```
[Court] [Match] [Player] [H2H] [Tournament]
```

- Height: 60px
- Five items: icon + label (11px)
- Active: `--ap-surface-primary` icon + label
- Inactive: `--ap-text-tertiary`

### Surface selector (mobile)
- Collapses to three pills in the top-right of the mobile header
- Pill size: 48×28px

---

## 9. Complete Screen Specifications

---

### Screen 1 — Centre Court (`/`)

**Purpose:** The emotional entry point. This is not a dashboard. It is the front page of a tennis intelligence newspaper. Every section is editorially chosen, not algorithmically generated. The page establishes atmosphere, surface identity, and routes users toward the features most relevant to them.

**User Goal:** Feel oriented, feel inspired, find an immediate entry path.

---

#### Layout Structure

**Above the fold (100vh, non-scrollable)**

Left two-thirds (typographic zone):
- Platform name: "AcePredict" in Clash Display 700 at 18px (nav wordmark)
- Headline: "The intelligence behind every match." — Clash Display 700, Display L (56px), white, two-line break so "every match." lands alone on the second line
- Surface pills: `HARD · CLAY · GRASS` — three pills, flush left, 32px height, 4px radius, active fill in `--ap-surface-primary`
- Natural language search bar: 520px wide, 48px height, 8px radius, left tennis ball icon, placeholder: "Ask anything — 'Alcaraz on clay vs top 10'"

Right one-third (atmospheric zone):
- SERVE silhouette SVG at 320px height, `--ap-surface-primary` colour
- Background layer: 10% opacity, 20px left and 10px down from foreground
- Foreground layer: 90% opacity
- No animation on silhouette after initial entry (it holds)

**Section 2 — Today's Centre Court**

No card chrome. No borders. Pure editorial layout with generous whitespace.

- Player A name: Clash Display, Display M (40px), left-aligned
- × divider: Clash Display, Display S (28px), centered, `--ap-text-tertiary`
- Player B name: Clash Display, Display M (40px), right-aligned
- Below: tournament metadata in Body M, `--ap-text-secondary` — "Hard court · Miami Open · Quarter-final"
- Probability preview bar: 6px height, filled to approximate split, no numerical labels
- Below bar: `87% · Very High` in Mono M, right-aligned
- CTA: "Full Match Intelligence →" — primary button

Controlled by: `featuredMatch.json` config file. Updated manually or via daily schedule.

**Section 3 — Surface of the Week**

Full-width editorial strip. 1px `--ap-surface-primary` accent line across the top — the only visible chrome.

- Heading: "Hard court season." in Heading 1, `--ap-text-primary`
- Body: pre-written editorial paragraph (Body L), max 3 sentences. Source: `surfaceEditorial.json` per surface.
- Player chips: 3 horizontal chips (player name + surface win rate), source: highest win rate in the active surface dataset this season

**Section 4 — Rivalry Watch**

Two editorial cards, 308px each, side by side. From `rivalries.json` (8–10 curated rivalries, rotating pair).

Each card:
- Player A name + H2H record (Mono L, center) + Player B name — the scoreline is the card's centerpiece
- One editorial sentence below the record
- W/L mini strip: last 5 meetings as W/L chips
- CTA: "Explore Rivalry →"

**Section 5 — Player in Form (left, 7/12 cols) + Tournament Spotlight (right, 5/12 cols)**

Player in Form:
- Player name: Clash Display, Display M
- Surface win rate: Mono M
- Last 10 results: W/L chip strip
- AI one-liner: generated via AI Analyst with player + surface context
- CTA: "Full Player Intelligence →"

Tournament Spotlight (conditional — only renders when `tournaments.json` has an active tournament):
- Tournament name + surface tag
- 3 upcoming matches as compact match cards (opponent + round only)
- CTA: "Simulate the Draw →"

---

#### Motion Behaviour

- **First load:** SERVE_SWEEP fires once per session. Hero content fades up sequentially: headline (0ms) → surface pills (60ms) → search bar (120ms) → silhouette slides from right (300ms).
- **Surface switch:** COURT_LINE_SWEEP (800ms). Court lines draw across hero left-to-right. Background transitions to new theme (400ms). Player chips re-render (fade out 150ms → data update → fade in 150ms).
- **Scroll:** No scroll-triggered animations. No scroll-jacking. Content is visible at natural scroll position.
- **Navigation hover:** Nav item transitions to `--ap-text-primary` at 150ms, `--ap-ease-snap`.

---

#### Key Data Sources
- `featuredMatch.json` — today's featured matchup
- `rivalries.json` — curated rivalry pairs (8–10 entries)
- `surfaceEditorial.json` — pre-written copy per surface
- `tournaments.json` — active tournament config
- `/player/<name>` — Player in Form statistics
- AI Analyst endpoint — one-liner insight for Player in Form

---

#### Mobile Experience

- Headline reduces to Display M (40px)
- Silhouette moves below the headline at 160px height, centered, single layer
- Surface pills reposition below headline
- Search bar: full-width, 16px side padding
- Featured match: player names stack vertically, × removed, probability bar thickens to 10px
- Rivalry cards: full-width, stacked vertically
- Player in Form + Tournament Spotlight: full-width blocks, stacked

---

### Screen 2 — Match Intelligence (`/match`)

**Purpose:** The core prediction experience. The journey from two empty player slots to a fully-rendered Story Mode should feel like watching a match analyst prepare and deliver a live broadcast report. This is the product's signature feature.

**User Goal:** Select two players, receive a confident and contextualised prediction, understand why the model predicts what it predicts.

---

#### Layout Structure

**VS Arena — pre-selection state**

Full content width, 130px height. Two dashed-border player slots facing each other across a centered × divider.

- Player slot interaction: click to activate input inline. Dashed border → solid `--ap-surface-primary` border. Tennis ball icon appears left of cursor.
- Autocomplete: results emerge below the active slot. Each result: player name (Body M) + ranking (Mono S, right-aligned). Max 6 results before scroll.
- When both players are filled: player names render in Display M, ranking in Mono M below. × divider glows with `--ap-surface-glow`.
- "Serve It Up" primary button fades in (200ms) when both slots are filled.

**Prediction Reveal — four-phase sequence**

*Phase 1 (0ms — click)* VS Arena locks. SERVE_LOAD animation begins. Copy cycles: "Preparing For First Serve..." → "Reading the court conditions..." → "The model is ready."

*Phase 2 (300ms)* Player A name slides in from left. Player B name slides in from right. Both settle at Display M. The probability bar track appears (empty, `--ap-border-default`, 0.5px). SERVE_LOAD continues.

*Phase 3 (API returns)* Both ends of the bar fill simultaneously toward the split point. Spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`), 600ms. Probability numbers count up from 0 on both sides simultaneously, timed to finish with the bar.

*Phase 4 (API + 600ms)* Confidence badge slides up 8px and fades in (200ms). Page below unfolds — Story Mode acts appear sequentially (see timing table below).

**Prediction reveal component anatomy:**
- Player A name: Clash Display, Display M, hard left, `--ap-surface-primary`
- Player B name: Clash Display, Display M, hard right, `--ap-text-secondary` (shifts to `--ap-text-primary` if Player B wins)
- Probability numbers: JetBrains Mono, 48px (Mono XL), one per side
- Probability bar: 6px height, Player A fills from left in `--ap-surface-primary`, Player B from right in `rgba(surface-primary, 0.35)`
- Confidence badge: pill, 4px radius, surface-aware colour (Very High = `--ap-gold`, High = `--ap-positive`, Medium = `--ap-warning`, Low = `--ap-negative`), Label text
- Surface tag + tournament context below the bar

**Story Mode — four acts (scrolling editorial document)**

No card containers. Continuous vertical document. Each act separated by a 1px horizontal rule in `--ap-border-subtle`. Act labels in 12px Inter, `letter-spacing: 0.12em`, `text-transform: uppercase`, `--ap-text-tertiary`.

*Act 1 — Recent Form*

Two parallel W/L chip strips: Player A above, Player B below. 24px vertical gap between strips. Each chip: 28×28px, 4px radius. W chips: `--ap-positive` background, Mono M "W". L chips: `--ap-bg-elevated` background, `--ap-text-tertiary` "L". Wins over Top-5 opponents: 1px `--ap-gold` border. Player name left of strip (Body S, `--ap-text-secondary`). Win percentage right of strip (Mono M, `--ap-text-primary`).

*Act 2 — On This Surface*

Two-column split with 1px vertical divider at center. Each column: player's primary surface stat in Mono XL (48px) — the largest and most emotionally dominant number in the act. Below: four Stat Cells (win rate, matches played, average sets needed, vs Top-20 win rate). The dominant player's primary number renders in `--ap-surface-primary`.

*Act 3 — All-Time Head to Head*

Horizontal axis line (full content width, 1px, `--ap-border-default`). Above axis: Player A wins as 2×16px vertical ticks in `--ap-surface-primary`. Below axis: Player B wins in `--ap-text-secondary`. Tick position = chronological. Tick colour encodes surface (hard blue, clay terracotta, grass green). A smoothed trend line overlays the last 6 meetings in `--ap-surface-secondary` as a 1.5px dashed path. Year labels at axis ends in Mono S. If no meetings: axis renders empty with copy "First meeting on record. No data precedes this match."

*Act 4 — The Deciding Factor*

Single AI-generated sentence, Body L, centered, max 52ch. Centered alignment used only here — a visual signal that this is the conclusion. Below the sentence: the supporting statistic in Mono M, `--ap-surface-primary`. If AI generation fails, a template fallback renders silently. The user never knows.

**Prediction Drivers — stat evidence grid**

Below Story Mode. 4-cell grid of Stat Cells. Each cell: stat label (Body S, `--ap-text-tertiary`, uppercase), compared values for both players (e.g., "74 vs 63"). The higher value in each relevant stat renders in `--ap-surface-primary`; the lower in `--ap-text-secondary`.

Standard driver stats: 1st Sv % · Ace/Gm · H2H · Break Pts

Ghost button below: "Ask the Analyst about this match →" — opens AI Analyst panel with this match pre-loaded as context.

**Surface sidebar (desktop, 280px right column)**

- Mini radar chart for each player (120px diameter)
- Surface win rates as two horizontal bars (Player A above, Player B below)
- "How surface affects this match" — one editorial sentence
- Not sticky (scrolls with page)

---

#### Story Mode Reveal Timing

| Event | Time |
|---|---|
| "Serve It Up" clicked | 0ms |
| Player names slide in | 300ms |
| API returns | Variable |
| Probability bar fill begins | API + 0ms |
| Numbers begin counting | API + 200ms |
| Bar + numbers finish | API + 600ms |
| Confidence badge arrives | API + 800ms |
| Act 1 slides up | API + 1000ms |
| Act 2 slides up | API + 1100ms |
| Act 3 slides up | API + 1200ms |
| Act 4 fades in | API + 2000ms |

Minimum API animation duration: 1200ms. If the API returns faster, the SERVE_LOAD continues until the minimum is reached. Instant results feel accidental, not intelligent.

---

#### Key Data Sources
- `POST /predict` — probability + confidence
- `GET /player/<name>` — both players' stats for Story Mode Acts 1 + 2
- `GET /head-to-head/<a>/<b>` — Act 3 data
- `POST /ai-analyst` — Act 4 deciding factor
- `players.json` — autocomplete source (Fuse.js)

---

#### Mobile Experience

- VS Arena: Player A slot full-width, × on centered line, Player B slot full-width below
- "Serve It Up" button: full-width
- Probability numbers: reduce to Mono L (24px)
- Probability bar: 10px height
- Player names: Display S
- Story Mode: each act collapses to preview (label + one-line summary) with chevron expand. Tap to expand. Only one act expanded at a time.
- Form chip strips: horizontally scrollable containers

---

### Screen 3 — Player Intelligence (`/player/:name`)

**Purpose:** A biography and performance record that reads like a long-form sports profile, not a statistics page. The user should leave knowing the player as a performer — their surface identity, current form, career arc, and what the data says is distinctive about them.

**User Goal:** Understand a player's strengths, surface profile, recent form, and comparative standing.

---

#### Layout Structure

**Player Search Bar (sticky below nav)**

Full-width, 48px height, 8px radius. Left icon: tennis ball SVG (12px), `--ap-text-tertiary`. Placeholder: "Search for a player...". Fuzzy search via Fuse.js against `players.json`, 250ms debounce. Selecting a new player triggers WALKOUT_LOAD, then full page content re-renders.

**Player Hero Band (full-width, no card chrome)**

1px `--ap-surface-primary` accent line across top. No other borders.

Left zone:
- Player ranking: JetBrains Mono, Mono L (24px). For world #1 on grass theme: rendered in `--ap-gold`.
- Player name: Clash Display, Display L (56px), white. This is the most important text on the page — it should feel like a name on a championship trophy.
- Metadata strip below name: Body S, `--ap-text-secondary` — "🇪🇸 Spain · Born 2003 · Pro 2018 · Right-handed · 4 Grand Slams"

Right zone:
- Player's characteristic silhouette SVG at full hero height (determined by `players.json` `dominantShot` field)
- Rendered in `--ap-surface-primary` at 80% opacity

**Surface Radar + Career Stats (two-column split)**

Left (300px): Recharts RadarChart, 200px diameter. Six axes: Hard, Clay, Grass, Indoor, vs Top-10, Recent Form. Values normalised 0–100 from historical win rates. Fill: `--ap-surface-primary` at 15% opacity, 1px stroke. Axis labels: Body S, outside radar boundary. Draws from center outward on page enter (600ms).

Right (320px): 2×3 Stat Cell grid. Six statistics.
- Always top-two: Career Win Rate, Grand Slam count
- Remaining four: surface-specific, ordered by active theme (clay theme surfaces Clay WR and Clay Slams first)

**Surface Performance Bars (three bars)**

One per surface. Each bar: 6px track height (active surface: 10px, stronger opacity). Track: `--ap-border-subtle`. Fill: surface-specific colour. Inline labels: surface name (Label) + win rate % (Mono M) + W/L record (Mono S, `--ap-text-tertiary`).

**Recent Form Timeline (Recharts AreaChart)**

520px wide, 100px height. x-axis: last 40 matches (no labels). y-axis: 0–100% win rate (no visible axis, implied by shape). Rolling 10-match win percentage. Area fill: `--ap-surface-primary` at 15%. Line: 1.5px, `--ap-surface-secondary`. Animates: line draws left to right on enter (500ms). Below chart: last 10 results as W/L chip strip + trailing "Last 10: 80%" in Mono M, right-aligned.

**AI Analyst Insight**

Left-bordered block: 2px `--ap-surface-primary` accent bar (the only left-border element in the product). Body L copy, max 3 sentences. Generated by AI Analyst with player + active surface as context. Below: "Ask the Analyst →" ghost button.

**Bridge CTAs**

Two secondary buttons:
- "Predict vs a player →" → routes to Match Intelligence with this player as Player A
- "View Head-to-Head rivals →" → routes to H2H with this player pre-filled

---

#### Motion Behaviour

- WALKOUT_LOAD on player selection: silhouette walks in from left, stops at center, spotlight expands (200ms). Hero content fades in from right as silhouette arrives. Minimum 1200ms total.
- Radar: draws from center outward on enter (600ms, `--ap-ease-out`)
- Stat cells: stagger fade-up, 80ms between each. Numbers count up from 0 (400ms)
- Form timeline: line draws left to right (500ms, `--ap-ease-out`). Area fill fades in behind line.

---

#### Mobile Experience

- Hero: rank + name full-width, silhouette below metadata strip (80px centered)
- Radar: full-width (260px centered)
- Career stats: 2×3 grid with abbreviated mobile labels
- Form timeline: full-width, 200px height
- AI insight: 2 sentence maximum

---

### Screen 4 — Head-to-Head (`/h2h/:playerA/:playerB`)

**Purpose:** The rivalry screen. Tennis rivalries carry decades of narrative — momentum shifts, surface preferences, defining matches, psychological dynamics. This screen makes that history feel lived, not merely catalogued.

**User Goal:** Understand the complete competitive history between two players and form a view on their next meeting.

---

#### Layout Structure

**Player Selector Row (sticky below nav)**

Two search inputs, side by side, 300px each. Separated by the × symbol centered between them. When both are filled, page content below fades in (200ms). Sticky positioning — remains visible while scrolling the match history, allowing quick player swaps.

**Rivalry Cinematic Header (full-width, no card chrome)**

1px `--ap-surface-primary` accent line across top.

- Player A name: Clash Display, Display L, hard left, `--ap-surface-primary`
- Player B name: Clash Display, Display L, hard right, `--ap-text-secondary`
- Centered: H2H scoreline in Mono XL (48px) — "14 – 12" with en-dash. This is the emotional center of the entire page.
- Metadata strip: "ATP rivalry · 26 matches · 2021–2024" in Body S, `--ap-text-secondary`
- Leader badge: "Alcaraz leads" pill in `--ap-surface-primary`
- Surface summary: "clay: 3–1 · hard: 8–6 · grass: 3–5" in Body S

**Surface Split Cards (three equal-width cards)**

Each card: surface label (Mono S, `--ap-text-tertiary`, uppercase), H2H record for that surface (Mono L), leader identification (Body S). Active surface theme card: `--ap-bg-elevated` background, 1px `--ap-surface-primary` top accent.

**H2H Timeline (the visual centerpiece)**

Full content width. 1px horizontal axis in `--ap-border-default`.

- Above axis: Player A wins. Each win = 2px × 16px vertical tick, `--ap-surface-primary`
- Below axis: Player B wins. Each loss = 2px × 16px vertical tick, `--ap-text-secondary`
- Tick position: chronological, spacing proportional to time between meetings
- Tick colour: encodes surface. Hard = `--ap-surface-primary` of hard theme. Clay = terracotta. Grass = green. Consistent regardless of active theme.
- Trend line: 1.5px dashed path in `--ap-surface-secondary`, smoothed across last 6 meetings, shows momentum direction
- Year labels: Mono S at axis ends, `--ap-text-tertiary`
- Desktop hover: hovering a tick highlights it (scale 1→1.5, spring) and highlights corresponding match history row
- Mobile tap: tapping a tick highlights the corresponding row below

**Match History List**

Filter pills: "All · Hard · Clay · Grass" as ghost pills, left-aligned.

Each row:
- W/L chip (28×20px, green fill for W, coral for L) — from Player A perspective
- Tournament name + round (Body M, `--ap-text-secondary`)
- Surface tag pill (surface-specific colour)
- Score in Mono S, right-aligned
- Date in Body S, `--ap-text-tertiary`, far right

Most recent meeting: first. First row: `--ap-text-primary`. Subsequent rows: `--ap-text-secondary`. 1px `--ap-border-subtle` horizontal rule between rows.

Filter switch animation: non-matching rows dim to 20% opacity (200ms) rather than disappearing. Visible rows' surface tags pulse once in their surface colour.

**Momentum Bar**

Single-line prose below the match history: "Alcaraz has won 4 of the last 5 meetings. Current streak: Djokovic 2." Body M, `--ap-text-secondary`. Not a graphic — a sentence.

**Predict CTA (full-width primary button)**

"Predict their next meeting →" — routes to Match Intelligence with both players pre-filled, active surface selected.

---

#### Motion Behaviour

- BALL_WIPE transition from previous page
- Player names slide in from their respective sides on load (300ms, `--ap-ease-out`) — same motion as Match Intelligence reveal but in the header, immediately
- H2H timeline ticks draw in chronologically, left to right, 30ms between each tick
- Surface split cards fade up with 80ms stagger

---

### Screen 5 — Tournament Predictor (`/tournament`)

**Purpose:** The fantasy tennis anchor feature. Bracket visualisation meets probability engine. The experience should feel like being in a draw ceremony — anticipation, revelation, and the statistical drama of who the data says should win.

**User Goal:** Build a custom draw, simulate it, and understand who is most likely to lift the trophy and why.

---

#### Layout Structure

**Tournament Setup Bar**

Full-width, 60px. Inputs: tournament name (optional text field, 160px), draw size toggle (8 / 16 / 32 — three pills). Primary button: "Begin the Draw" (activates only when minimum required player slots are filled).

**Draw Builder (player slots grid)**

Grid of dashed-border slots matching the selected draw size. Each slot: 136×44px, 6px radius, dashed border. Clicking a slot activates autocomplete inline. Filled slots show player name + ranking.

When all slots are filled, "Begin the Draw" button activates and glows. Players can be removed (×) and replaced at any time.

**Bracket Visualisation**

Standard single-elimination bracket tree. 8-player draw is the reference case (expandable to 16 and 32 with horizontal scrolling).

Pre-simulation: structural shape visible (all match lines, round labels), all player slots show names, no probabilities yet.

Post-simulation: Each match result fills in round-by-round with animation (150ms delay between rounds). Winner slots glow with `--ap-surface-primary`. Eliminated player names dim to 30% opacity. Win probability percentage appears below each advancing player's name (Mono S, `--ap-text-tertiary`).

Final winner slot: elevated treatment — `--ap-bg-elevated` background, 1px `--ap-surface-primary` border, CELEBRATION silhouette at 60px inside the slot. Trophy moment.

**Champion Probability Leaderboard**

Left column (60% width), below bracket. Ranked list of all players by overall tournament win probability.

Each row: rank (Mono M) + player name (Body M) + probability % (Mono M) + horizontal probability bar (fill width proportional to % value, `--ap-surface-primary` fill, decreasing opacity by rank). Clicking a row highlights that player's complete path through the bracket.

Bars animate in sequentially with 80ms stagger, filling left to right (400ms each, `--ap-ease-out`).

**Dark Horse Card + Upset Alerts (right column, 40% width)**

Dark horse card: `--ap-warning` accent border. Player name in Display S. Win probability + ranking. One-line explanation of why they are the dark horse pick (template-generated from the simulation data).

Upset Alerts (2–3): each alert = one match where the predicted win probability for the lower-ranked player exceeds a threshold. Match + reason in Body M. Generated from pairwise simulation results.

**Action Row**

Two secondary buttons: "Share bracket →" + "Run simulation again →". Re-simulation reshuffles the stochastic outcomes while holding the same draw.

---

#### Simulation Engine Logic

1. Collect all players in the draw
2. Precompute pairwise win probabilities via `POST /predict` for all unique pairs — cached in a Map (for an 8-player draw: 28 unique pairs; for 32-player: 496 unique pairs)
3. Run 1,000 full tournament simulations using weighted random outcomes per match
4. Aggregate: champion win% per player, path probabilities per round, upset frequency per match
5. Identify dark horse (highest win% among players ranked outside the top half of the draw)
6. Identify upset alerts (matches where P(lower-ranked wins) > 35%)

No additional ML model required. Uses only the existing `/predict` endpoint.

---

#### Mobile Experience

- Draw builder: player slots in a 2-column grid
- Bracket: horizontally scrollable within its container (fixed height)
- Leaderboard: full-width, stacked below bracket
- Dark horse + upset alerts: full-width, stacked below leaderboard

---

## 10. Surface Theme System

The three surface themes are not colour palettes. They are **complete atmospheric identities** that re-atmosphere the entire product. When the user switches surfaces, they are not changing a colour scheme. They are switching courts.

---

### 10.1 Hard Court Theme

**Reference:** ATP Tour, US Open, Australian Open night sessions

**Emotional tone:** Electric. Stadium lights. Broadcast blue. The anticipation of a night session at Arthur Ashe.

**Visual identity:**
- Background base: `#09090E` (near-black with cool blue cast — not pure black)
- Background raised: `#0F1520` (blue-shifted dark)
- Surface primary: `#0057A8` (ATP Tour blue)
- Surface secondary: `#1E90FF` (electric, for live data highlights)
- Surface tertiary: `#0A3066` (deep navy)
- Glow ambient: `rgba(0, 87, 168, 0.08)` — stadium floodlight bleed behind hero numbers
- Border character: `rgba(30, 144, 255, 0.12)` — subtly blue-tinted borders

**Motion style:** Fastest. All durations at 1× baseline. Transitions: `ease-in` exits, `ease-out` entrances. Sharp and snappy.

**Stats emphasis:** Serve speed, Aces, First-serve win %, Hard court W/L record

**Surface tag label:** "HARD"

---

### 10.2 Clay Court Theme

**Reference:** Roland Garros, Monte Carlo, Madrid. A Sunday final on Philippe-Chatrier. The late afternoon light on terracotta.

**Emotional tone:** Warm. Patient. The craft of a five-set clay court battle. Unhurried intelligence.

**Visual identity:**
- Background base: `#0F0A08` (near-black with red-orange warmth)
- Background raised: `#1A0D09` (warm dark)
- Surface primary: `#C2593A` (Roland Garros terracotta)
- Surface secondary: `#E8673A` (warm accent)
- Surface tertiary: `#3D1A0E` (deep clay shadow)
- Glow ambient: `rgba(194, 89, 58, 0.10)` — warm campfire bloom
- Border character: `rgba(232, 103, 58, 0.12)` — terracotta-tinted, nearly invisible

**Motion style:** 15% longer durations than hard. `ease-in-out` throughout. The clay theme breathes.

**Stats emphasis:** Rally length, Clay win rate, Break point conversion on clay, Clay H2H records

**Surface tag label:** "CLAY"

---

### 10.3 Grass Court Theme

**Reference:** Wimbledon. Centre Court. The particular green that exists nowhere else. Restrained ceremony.

**Emotional tone:** Tradition. Prestige. The most elegant of the three. Deliberate and composed.

**Visual identity:**
- Background base: `#050C07` (near-black with green undercurrent)
- Background raised: `#0C1810` (deep forest)
- Surface primary: `#2C5C3A` (championship lawn)
- Surface secondary: `#4A8B5A` (lighter grass)
- Surface tertiary: `#0E2415` (deep forest shadow)
- Gold accent: `#B8973B` — Wimbledon championship gold. Used for world #1 ranking on this theme, highest confidence badge, tournament winner reveal. Grass theme only.
- Glow ambient: `rgba(44, 92, 58, 0.10)` — subtle green bloom
- Border character: `rgba(74, 139, 90, 0.10)` — just enough green to feel grown

**Motion style:** 25% longer durations than hard for cinematic/ceremonial transitions. Micro and fast durations unchanged — restrained in ceremony, not sluggish in interaction.

**Stats emphasis:** Net points won, Serve + 1 win %, First serve %, Grass court W/L record

**Surface tag label:** "GRASS"

---

### Theme Switching Implementation

`data-surface="hard|clay|grass"` attribute set on `<body>`. All CSS custom properties keyed to this attribute. The Zustand `useSurfaceStore` is the only JavaScript that reads or sets the theme — all components inherit via CSS vars. No component has hardcoded surface colours.

Transition: `body { transition: background-color 500ms ease-in-out, color 200ms ease; }`

On switch, COURT_LINE_SWEEP plays (800ms) while the background transitions. Components do not individually animate — they inherit the root change.

---

## 11. Design Language

### Typography System

Three families. No exceptions. Never use a fourth.

**Clash Display** — display face
- Used for: hero player names, tournament titles, probability numbers, headline moments
- Weights: 600, 700
- Fallback: Plus Jakarta Sans at 800 weight (CDN failure only)
- Never fall back to system sans for display roles

**Inter** — body and UI face
- Used for: all body copy, navigation, stat labels, metadata, form inputs, supporting text
- Weights: 400, 500, 600
- Source: Google Fonts

**JetBrains Mono** — data face
- Used exclusively for: live or computed numbers (probability %, match scores, rankings, win rates, W/L records)
- Weight: 400
- Signals "computed output" — when a user sees monospace, they know they are reading a calculated result

### Type Scale

| Token | Family | Weight | Size | Use |
|---|---|---|---|---|
| Display XL | Clash Display | 700 | 80px (5rem) | Hero probability numbers, hero player names |
| Display L | Clash Display | 700 | 56px (3.5rem) | Section hero headings, tournament names |
| Display M | Clash Display | 600 | 40px (2.5rem) | Page titles, prediction player names |
| Display S | Clash Display | 600 | 28px (1.75rem) | Card headlines, rivalry scoreline |
| Heading 1 | Inter | 600 | 20px (1.25rem) | Section titles, stat group headers |
| Heading 2 | Inter | 500 | 16px (1rem) | Card titles, subsection labels |
| Body L | Inter | 400 | 16px (1rem) | Editorial copy, AI Analyst responses |
| Body M | Inter | 400 | 14px (0.875rem) | Supporting text, metadata |
| Body S | Inter | 400 | 12px (0.75rem) | Captions, timestamps, secondary labels |
| Label | Inter | 500 | 12px (0.75rem) | Form labels, pill text, surface tags |
| Mono XL | JetBrains Mono | 400 | 48px (3rem) | Large probability numbers, score displays |
| Mono L | JetBrains Mono | 400 | 24px (1.5rem) | Stat values in broadcast grids |
| Mono M | JetBrains Mono | 400 | 16px (1rem) | Inline stats, form results |
| Mono S | JetBrains Mono | 400 | 12px (0.75rem) | Timestamps, match duration, rankings |

### Typographic Rules

- Display sizes: `letter-spacing: -0.02em` — tight tracking reads as confident at large scale
- Body sizes: default tracking (0)
- Tournament names: `letter-spacing: 0.08em`, `text-transform: uppercase` in Label size
- Story Mode act labels: `letter-spacing: 0.12em`, `text-transform: uppercase`
- Player names in prediction contexts: always Clash Display — a hard rule
- Editorial copy max-width: `65ch`
- Line heights: Display = 1.05 · Heading = 1.2 · Body = 1.65 · Mono = 1.4

### Colour Tokens (Global)

**Base tokens (dark mode primary):**
```
--ap-bg-base:         #09090E
--ap-bg-raised:       #111118
--ap-bg-elevated:     #1A1A24
--ap-bg-overlay:      #21212E

--ap-text-primary:    #F0EFE8
--ap-text-secondary:  #9A9899
--ap-text-tertiary:   #5C5B5A
--ap-text-inverse:    #0F0F12

--ap-border-subtle:   rgba(255,255,255,0.06)
--ap-border-default:  rgba(255,255,255,0.10)
--ap-border-strong:   rgba(255,255,255,0.18)
```

**Semantic tokens (surface-independent):**
```
--ap-positive:  #22C55E
--ap-negative:  #EF4444
--ap-warning:   #F59E0B
--ap-neutral:   #6B7280
--ap-gold:      #B8973B
```

### Spacing System

4-point base. Every spacing value is a multiple of 4px.

| Token | Value | Use |
|---|---|---|
| xs | 4px | Icon-to-label gap, chip internal padding |
| sm | 8px | Between related elements in a group |
| md-sm | 12px | Default internal padding (small) |
| md | 16px | Standard component padding, card internal gap |
| lg | 24px | Between card sections, paragraph spacing |
| xl | 32px | Between major sections within a page |
| 2xl | 48px | Between page-level sections |
| 3xl | 64px | Section breathing room, hero internal spacing |
| 4xl | 96px | Page hero top padding, between major sections |
| 5xl | 128px | Hero section top padding |

**Non-negotiable spacing rules:**
- Between major page sections: 96px minimum
- Within a section (header to content): 48px
- Hero top padding: 128px
- Card internal padding: 24px all sides

### Elevation System

Elevation is communicated through background colour steps, never box shadows. Box shadows are prohibited as decoration.

| Level | Token | Use |
|---|---|---|
| 0 | `--ap-bg-base` | Page background |
| 1 | `--ap-bg-raised` | Cards, panels |
| 2 | `--ap-bg-elevated` | Stat blocks within cards |
| 3 | `--ap-bg-overlay` | Modals, AI Analyst panel, Hawkeye overlay |

Card border: `0.5px solid --ap-border-subtle` at Level 1. No border at Level 2 (background differential creates separation). Stronger border at Level 3: `0.5px solid --ap-border-default`.

### Border Radius System

```
2px   — pill inner stripe, score chip corner
4px   — tags, surface labels, W/L chips
6px   — small cards, stat cells
8px   — buttons, inputs, standard cards
12px  — large cards, panels
16px  — hero panels
24px  — modals, AI Analyst panel
0px   — elements using single-side border only
```

---

## 12. Visual Identity

### Silhouette Design System

Five canonical player silhouettes. Pure SVG `<path>` elements. Single-colour fills. No outlines. No photographic references. Designed on a 100×200px grid using only cubic bezier curves. Recognisable by body shape alone, without the racket.

| Silhouette | Description | Primary Use |
|---|---|---|
| SERVE | Trophy position — back arched, tossing arm full height, racket reaching back | Centre Court hero, SERVE_LOAD animation, Match Intelligence header |
| FOREHAND | Shoulder rotation complete, contact point forward, non-dominant arm extended | Player Intelligence (forehand-dominant players) |
| BACKHAND | Two-handed — both hands visible, body side-on, weight transferring. OR one-handed — outstretched arm at shoulder height | Head-to-Head page header |
| VOLLEY | At net, compact, racket punched forward at chest height, weight forward | Tournament Predictor header |
| CELEBRATION | Arms raised, fist pump, head back | Tournament winner reveal, Very High confidence results, Centre Court hero (dominant player featured) |

**Silhouette colour rules:**
- Always single flat colour — `--ap-surface-primary` at 15% opacity (background) or 80–90% opacity (feature use)
- Never outlined — fill only
- Never combined with text inside silhouette bounds
- May be mirrored horizontally (`transform: scaleX(-1)`) for left-handed players or layout balance
- Scale: 40px (icon use) → 400px (hero background use)
- At hero scale: layered — foreground at 90% opacity, background at 10% opacity, 20px lateral offset

**Component:** `<PlayerSilhouette shot="serve|forehand|backhand|volley|celebration" size={n} />` — reads active surface theme, applies `--ap-surface-primary` automatically. No colour props needed.

### Tennis Motion System — Loading States

Five canonical loading states. All are pure CSS animations on SVG paths. No canvas, no WebGL, no animation libraries required. All respect `prefers-reduced-motion` — reduced motion fallback is static silhouette + pulsing opacity only.

**`SERVE_LOAD` — Prediction loading**
Silhouette at baseline bouncing ball. 3 bounces (ball compresses at ground contact with spring physics), then freezes in trophy position — held in pre-serve tension. Ball stops mid-air. Copy cycles. This freeze is intentional: it creates anticipation. Minimum duration: as long as needed, never shorter than 1200ms.

**`WALKOUT_LOAD` — Player profile loading**
Silhouette walks in from left edge. 4-frame walk cycle at `steps(4)` timing (choppy, athletic — not smooth). Stops at center. Spotlight circle expands at feet (200ms). Copy: "Calling the Player to Court..."

**`BALL_MACHINE_LOAD` — Tournament simulation**
Squat mechanical silhouette (ball machine) at baseline. Balls feed, travel parabolic arcs, bounce. Multiple balls in flight simultaneously, varying angles. Conveys: the system is testing many scenarios. Copy cycles through simulation progress.

**`NOTEBOOK_LOAD` — AI Analyst thinking**
Seated figure in coach posture. Pen traces across notepad lines. Occasional pause — figure "looks up" then resumes. Plays only for initial API latency before streaming begins.

**`COURT_SWEEP_LOAD` — Surface change / general page transition**
Court lines draw themselves across the screen. Sequence: center service line → both baselines simultaneously → sidelines → service boxes. Each at 60px/100ms. Total: 600ms.

**Loading container rules:**
- All loaders share the same container: panel that replaces the content area it belongs to
- Minimum height = content it replaces (prevents layout shift)
- Loader vertically and horizontally centered within panel
- Background: `--ap-bg-elevated`

### Hawkeye Error System

Errors are not software events. They are Hawkeye reviews. The same three-act sequence plays for every error state.

**Act 1 — Court zoom (0–700ms)**
Aerial court SVG scales from 1× to 2.2×, with overshoot to 2.4× at 500ms settling to 2.2× at 700ms. `transform-origin: center center`. The court renders as white line structure on `--ap-surface-tertiary` background — no fill on playing surface.

**Act 2 — Ball mark appears (700–900ms)**
Oval (24×12px) springs onto the court near a service line. Scale 0 → 1 with spring easing. Slight blur via `filter: blur(0.5px)` — simulates clay/grass compression. Always positioned near but not exactly on a service line.

**Act 3 — Verdict (900ms+)**
Large Clash Display text slides up from below the court panel (40px travel, 200ms, `ease-out`).

| Verdict | Trigger | Visual treatment | Recovery CTA |
|---|---|---|---|
| IN | Empty state (no data) | White text on `--ap-surface-primary` band. Scale pulse (1→1.03→1, 300ms). | Search prompt |
| OUT | API failure (5xx), 404 | White text on `#991B1B` band. Horizontal shake (±3px, 400ms). | "Request Second Opinion" (retry) |
| REVIEW REQUIRED | Network timeout, loading | `--ap-warning` text on `--ap-bg-overlay`. Slow pulse loop (2s). Auto-retry after 5 seconds. | "Re-examining the mark..." |

**Special states:**

| Scenario | Verdict | Copy |
|---|---|---|
| API failure | OUT | "Challenge successful. Server-side fault. We're reviewing the replay." |
| Network timeout | REVIEW REQUIRED | "Hawkeye Review In Progress. Awaiting signal from the court." |
| No data / empty | IN | "The ball was in. But the court is empty. Players yet to take the court." |
| 404 | OUT | "Out! This page has landed beyond the baseline." |
| Low confidence | IN (asterisk) | "In — but the margin was close. Confidence: Low." |

---

## 13. Animation Principles

### Duration Scale

| Token | Duration | Use |
|---|---|---|
| instant | 0ms | State changes with no transition (text content updates) |
| micro | 80ms | Active/press states, toggle clicks |
| fast | 150ms | Hover states, tooltip appearance |
| standard | 250ms | Page enter, panel show |
| deliberate | 400ms | Prediction reveal components, act-level transitions |
| cinematic | 600ms | Probability bar fill, Hawkeye zoom |
| ceremonial | 800ms+ | Surface change, bracket fills |

### Easing Lexicon

| Token | Curve | Use |
|---|---|---|
| `--ap-ease-snap` | `cubic-bezier(0.25, 0, 0, 1)` | UI controls, snappy dismissals |
| `--ap-ease-out` | `cubic-bezier(0, 0, 0.3, 1)` | Elements arriving (page enters, reveals) |
| `--ap-ease-in` | `cubic-bezier(0.7, 0, 1, 1)` | Elements leaving (page exits) |
| `--ap-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Branded moments only |
| `--ap-ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |

**Spring easing** (`--ap-ease-spring`) is the product's most distinctive motion signature. It overshoots and settles. It appears in exactly five contexts: confidence badge entry, Hawkeye verdict text, player walkout stop, Hawkeye court zoom settle, bracket winner reveal. Using it elsewhere dilutes its impact — it must remain special.

### Surface-specific Duration Adjustments

| Surface | Multiplier | Applies to |
|---|---|---|
| Hard | 1× | All durations (baseline) |
| Clay | 1.15× | All durations |
| Grass | 1.25× | Cinematic and ceremonial durations only; micro and fast unchanged |

### Page Transition System

Four transition types. One per context. Never mixed.

**`BALL_WIPE` — primary navigation clicks**
Tennis ball enters from left edge at a realistic arc (slight bounce on court line). Ball rolls across the screen. New page reveals behind it. Duration: 500ms. Ball movement: enters at 0ms, crosses center at 250ms, exits at 450ms, new page fully revealed at 500ms.

**`COURT_LINE_SWEEP` — surface theme changes**
Court lines draw across screen from left to right. Sequence: center service T → both baselines → sidelines → service boxes. Each line: SVG `stroke-dashoffset` animating to 0. New surface theme reveals as final line completes. Total: 800ms.

**`SERVE_SWEEP` — hero section first load**
Player silhouette serves. Ball strikes and travels in a fast arc. Where the ball lands, below-the-fold content reveals upward. Plays exactly once per session on first arrival at Centre Court.

**`BALL_KID_TOSS` — modal and overlay opens**
Small ball kid silhouette tosses ball toward screen center. Ball rises (arcs), hangs 40ms at peak, falls into the modal below. Panel opens as ball "lands." Duration: 350ms. Used for: AI Analyst panel, prediction result overlay, player card expansion.

**Transition management:**
A `useTennisTransition` hook wraps React Router navigation events. Determines transition type from `from → to` route pair. Plays exit on current page, then entry on next page. Reduced motion fallback: 150ms opacity cross-fade only.

### Empty States

| Context | Copy | Visual |
|---|---|---|
| No players selected (Match Intel) | "Players yet to take the court." | SERVE silhouette × 2 (one per slot), 10% opacity, centered |
| No H2H history | "These two players have never met on tour. / A first meeting awaits." | Empty timeline axis. 48px whitespace above and below copy. |
| No search results | "Net cord — no results for '[query]'. / Try searching by last name." | Dropdown stays open inviting refinement. |
| Empty tournament bracket | Structural bracket shape with dashed placeholder slots | "Add players to begin the draw." Scaffolding makes emptiness feel temporary. |

---

## 14. Tennis Metaphor System

Every system state is expressed in the language of professional tennis. No generic software copy. This is a non-negotiable product rule.

### Loading States

| Context | Primary copy | Secondary copy (cycles in) |
|---|---|---|
| Prediction loading | "Preparing For First Serve..." | "Reading the court conditions..." → "The model is ready." |
| Player profile loading | "Calling the Player to Court..." | "Reviewing the career file..." |
| Tournament simulation | "Simulating the Draw..." | "Running 1,000 scenarios..." → "Computing the path to the Final." |
| AI Analyst thinking | "The Analyst Is Reviewing..." | "Consulting the match notes..." → "Drafting your insight." |
| Surface change | "Switching Surfaces..." | (plays with COURT_SWEEP visual, no secondary copy) |
| General page load | "Setting the Court..." | "Preparing the environment..." |

### Error States

| Error type | Verdict | Headline | Body copy |
|---|---|---|---|
| API failure (5xx) | OUT | "Challenge Successful." | "Server-side fault. We're reviewing the replay." |
| Network timeout | REVIEW REQUIRED | "Hawkeye Review In Progress." | "Awaiting signal from the court. Retrying in 5 seconds." |
| 404 Not Found | OUT | "Out!" | "This page has landed beyond the baseline." |
| Low confidence result | IN (asterisk) | "In — but close." | "Confidence: Low. The margin was within the review threshold." |
| Empty state (no data match) | IN | "The ball was in." | "But the court is empty. Players yet to take the court." |

### Empty States

| Context | Headline | Sub-copy |
|---|---|---|
| No players selected | "Players yet to take the court." | "Search for two players to begin." |
| No H2H data | "A first meeting awaits." | "These two players have never met on tour." |
| No search results | "Net cord." | "No results for '[query]'. Try a different spelling." |
| Empty bracket | "The draw is open." | "Add players to build your tournament." |

### Success States

| Context | Copy |
|---|---|
| Prediction complete (Very High) | "Match Point Confirmed." |
| Prediction complete (High) | "Strong read on this one." |
| Tournament simulation complete | "The draw is decided." |
| AI response ready | "The Analyst has reviewed the match." |
| Player found | "On court." |

### CTA Copy

| Action | Copy |
|---|---|
| Run prediction | "Serve It Up" |
| Open player profile | "Study the Player" |
| Start tournament | "Begin the Draw" |
| Open AI Analyst | "Ask the Analyst" |
| View head-to-head | "Explore the Rivalry" |
| Simulate match | "Simulate This Match" |
| Share bracket | "Share Your Draw" |
| Retry after error | "Request Second Opinion" |

### Navigation Labels

| Destination | Label |
|---|---|
| Homepage | Centre Court |
| Prediction page | Match Intelligence |
| Player page | Player Intelligence |
| H2H page | Head-to-Head |
| Tournament page | Tournament Predictor |
| AI chat | AI Analyst |

### Number Presentation Rules

- Probabilities: integers only. "87%" not "87.3%". The model does not have decimal precision.
- Win-loss records: en-dash always. "14–8" not "14-8".
- Rankings: `#` prefix, Mono face. "#4" not "Rank 4".
- Match scores: full score always. "6–3 4–6 7–6(5)" — tiebreak score in parentheses, smaller.
- Surface win rates: fraction + percentage. "47/62 (75.8%)".
- Versus symbol: always "×" — not "vs", not "v", not "V".

---

## 15. MVP Scope

The following features are required for the first public release. Everything not listed here is post-MVP.

### MVP Features

**Centre Court (homepage)**
- Cinematic hero with surface selector (3 themes)
- Natural language search bar (with regex-based routing, Phase 1 parser)
- Today's Centre Court featured match (config-driven)
- Surface of the Week editorial strip (pre-written copy)
- Rivalry Watch (2 curated rivalries from JSON)
- Player in Form (computed from dataset)
- Surface theme switching (Hard / Clay / Grass)

**Match Intelligence**
- Dual player autocomplete (Fuse.js against players.json)
- Surface selector
- Prediction reveal animation (full SERVE_LOAD + probability reveal sequence)
- Confidence badge
- Story Mode: Acts 1, 2, 3 (data-driven, no AI required)
- Story Mode: Act 4 (AI-generated with template fallback)
- Prediction Drivers stat grid
- Bridge to AI Analyst

**Player Intelligence**
- Player search (Fuse.js)
- Player hero band (rank + name + silhouette)
- Surface radar chart (Recharts)
- Career stats grid (2×3)
- Surface performance bars
- Recent form timeline (Recharts AreaChart)
- AI Analyst insight (one sentence)
- Bridge CTAs

**Head-to-Head**
- Dual player selector
- Rivalry cinematic header with H2H scoreline
- Surface split cards (3)
- H2H timeline with ticks and trend line
- Match history list with surface filter
- Momentum indicator
- Predict CTA

**Tournament Predictor**
- Draw builder (8-player minimum)
- Monte Carlo simulation engine (1000 runs, uses /predict endpoint)
- Bracket visualisation with round-by-round animation
- Champion probability leaderboard
- Dark horse identification
- Upset alert (≥2 alerts per simulation)

**AI Analyst**
- Slide-in panel (BALL_KID_TOSS entry)
- Natural language input
- Context injection from active page
- Streaming response display
- Suggested questions (3 context-aware chips)
- NOTEBOOK_LOAD animation while waiting

**Global Systems**
- All five Tennis Motion System loading states
- Hawkeye Error System (3 verdicts: IN / OUT / REVIEW REQUIRED)
- All four page transitions (BALL_WIPE / COURT_LINE_SWEEP / SERVE_SWEEP / BALL_KID_TOSS)
- All five player silhouettes (SERVE / FOREHAND / BACKHAND / VOLLEY / CELEBRATION)
- Complete tennis metaphor copy system
- Full three-surface theme system
- Reduced motion support throughout
- Mobile responsive experience

**Deployment**
- Frontend: Vercel
- Backend: Railway or Render (Flask)
- Anthropic API key configured as environment variable
- `players.json` preprocessed from Sackmann CSV

---

## 16. Post-MVP Scope

Features that would meaningfully improve the product but are deferred past the initial public release.

### Near-term (Version 1.1)

**WTA full integration**
- The WTA Sackmann dataset is available. Current prediction model is ATP-only.
- Requires: model retraining or separate WTA model, WTA player name normalisation, WTA-specific stat labels
- UI: toggle between ATP and WTA at the nav level

**Live rankings integration**
- Lightweight daily scraper of ATP/WTA ranking pages
- Store as `rankings.json`, served as static file
- Enriches player chips with current ranking rather than historical peak

**Match simulation visual playback**
- Frame-by-frame match simulation using Markov chain tennis math
- Set-by-set reveal (score digits appear one set at a time, 500ms delay)
- Game flow sparkline showing momentum
- "Key moments" computed from simulation (break in game 4 of set 2)

**32-player tournament draws**
- Horizontal scrolling bracket
- 496 pairwise predictions precomputed at draw start
- Increased simulation detail at the per-round level

### Medium-term (Version 2.0)

**User accounts + saved predictions**
- Prediction history per user
- Saved tournament brackets
- Requires: auth system, database, session management

**Ranking Impact Calculator**
- What happens to a player's ranking if they win/lose this tournament
- Requires: ranking point data per tournament tier

**Player comparison tool**
- Side-by-side comparison of two players across all stats
- Not H2H (historical meetings) — a statistical comparison
- Radar chart overlay showing both players on the same axes

**Grand Slam bracket tracking**
- Follow a live Grand Slam draw in real time
- Requires: reliable live draw data source

**Surface season leaderboard**
- Ranked view of all players by surface win rate this season
- Filterable by surface, year, tour
- The "who is dominating clay this year?" question answered at a glance

### Long-term (Version 3.0)

**Live match data**
- WebSocket integration with live data provider
- In-match probability updates
- Requires: data provider agreement (not free)

**Video highlight integration**
- Surface-matched player highlight clips
- Requires: licensing arrangement

**Mobile app**
- React Native port of core flows (Match Intelligence + Player Intelligence)
- Push notifications for match predictions of followed players

---

## 17. Technical Architecture

### Frontend

**Framework:** React + Vite

**Rationale:** Already implemented. Vite provides fast development experience and optimal build output. React's component model aligns with the atomic design system.

**State management:** Zustand

- `useSurfaceStore` — active surface (`hard|clay|grass`), applied to `<body data-surface>` attribute
- `useAIAnalystStore` — panel open/closed, query history, current context
- `useTournamentStore` — draw state, simulation results, bracket state
- `usePredictionStore` — current prediction result, loading state, Story Mode reveal progress

**Routing:** React Router v6
- Route-level code splitting via `React.lazy()` for each page
- Custom `useTennisTransition` hook intercepts navigation events and plays appropriate transition before route change commits

**Data fetching:** Native `fetch` with custom hooks per feature (`usePrediction`, `usePlayerSearch`, `useTournamentSim`)

**Visualisation:** Recharts for all chart components (RadarChart, AreaChart, custom probability bar)

**Search:** Fuse.js (3KB gzipped) for all player autocomplete — loaded once at app init against `players.json`

**Animation:** CSS custom properties + `@keyframes` for all motion. No animation library required. Framer Motion may be added for complex sequences if CSS-only becomes unwieldy, but CSS-first is the default.

**Styling:** Tailwind CSS as utility layer. CSS custom properties for all theme tokens — Tailwind does not override tokens. No component library (Material UI, Chakra, etc.) — these produce generic results. All UI is custom.

---

### Backend

**Framework:** Flask (Python) — preserve existing structure completely

**Existing endpoints (DO NOT MODIFY):**
```
GET  /              — health check
POST /predict       — prediction model inference
GET  /player/<name> — player statistics
GET  /head-to-head/<a>/<b> — H2H record
```

**New endpoints (additive only):**
```
GET  /players       — full player list for autocomplete (derived from players.json)
POST /ai-analyst    — Anthropic API proxy with context injection
POST /parse-query   — NL query intent parsing (Phase 2, optional)
```

`POST /ai-analyst` payload:
```json
{
  "query": "Why does Alcaraz struggle on grass?",
  "context": {
    "type": "player|match|h2h|tournament",
    "playerA": { "name": "...", "stats": { ... } },
    "playerB": { "name": "...", "stats": { ... } },
    "surface": "grass",
    "prediction": { "probability": 87, "confidence": "Very High" }
  }
}
```

System prompt for AI Analyst:
> You are AcePredict's AI Tennis Analyst. You have access to professional tennis statistics and prediction data. Respond in the style of a broadcast tennis analyst — insightful, specific, confident. Always reference specific statistics or historical patterns. Keep responses under 150 words. Format key numbers prominently. Do not speculate beyond the data provided.

**Deployment:**
- Backend: Railway or Render (free tier, Flask-compatible)
- Environment variables: `ANTHROPIC_API_KEY`
- No database required for MVP
- All data served from JSON files loaded at Flask startup

---

## 18. Data Architecture

### Data Strategy — Three Tiers

**Tier 1 — Static Historical (immediate availability, zero cost)**

Source: Jeff Sackmann ATP Dataset + Jeff Sackmann WTA Dataset (CSV files)

Preprocessing: A one-time Python script (`scripts/preprocess_players.py`) converts the CSV files into two JSON structures:
- `players.json` — canonical player list with name variants, ranking, nationality, Grand Slam count, dominant shot type
- Surface-aggregated win rates per player per surface, loaded into Flask memory at startup

The preprocessing script handles:
- Player name normalisation (canonical map: "Carlos Alcaraz" / "C. Alcaraz" / "Alcaraz C." all → "Carlos Alcaraz")
- Surface aggregation (hard / clay / grass win rates computed from `surface` column)
- Top-10 / Top-50 win rates (computed from opponent ranking columns)
- Recent form (last N matches for each player)

**Tier 2 — Computed on Demand (Flask backend)**

The existing prediction model and data endpoints. All existing behavior preserved exactly.

```
/predict           — model inference
/player/<name>     — assembled from Tier 1 JSON
/head-to-head/<a>/<b> — assembled from match records in Tier 1
```

**Tier 3 — Lightweight Live Information (deferred to Post-MVP)**

ATP/WTA ranking pages are publicly accessible. A lightweight Python scraper (BeautifulSoup) runs on a daily schedule (cron job) and writes `rankings.json`. Flask reads this at startup. Wikipedia infoboxes cover nationality and biography gaps. No paid API required.

### Key Data Files

| File | Contents | Source |
|---|---|---|
| `players.json` | Canonical player list, name variants, nationality, ranking, dominant shot | Preprocessed from Sackmann CSV |
| `rivalries.json` | 8–10 curated rivalry pairs for Centre Court | Hand-curated |
| `surfaceEditorial.json` | Pre-written editorial paragraphs per surface | Hand-written |
| `tournaments.json` | Active/upcoming tournament schedule | Hand-maintained |
| `featuredMatch.json` | Today's featured matchup | Updated daily (manual or scheduled) |
| `rankings.json` | Current ATP/WTA rankings | Scraper (Post-MVP) |

### Player Name Normalisation

A `nameMap` in `players.json` handles variant forms:
```json
{
  "canonical": "Carlos Alcaraz",
  "variants": ["C. Alcaraz", "Alcaraz C.", "ALCARAZ C", "Carlos Alcaraz Garfia"],
  "dominantShot": "forehand",
  "nationality": "ESP"
}
```

All lookups — autocomplete, API calls to `/predict`, H2H queries — pass through the canonical name resolver before hitting the model.

---

## 19. Model Architecture

### Current Prediction System

The existing trained model accepts two player names and returns win probabilities. This system is preserved completely without modification.

**Input:** Player A name (string), Player B name (string), Surface (optional context)  
**Output:** Player A probability (%), Player B probability (%), Confidence level

**Data the model was trained on:** Jeff Sackmann historical ATP match data. Features include: historical win rates, head-to-head records, surface performance, ranking differential, recent form indicators.

**Accuracy framing:** The model provides historical-data-backed predictions, not live match intelligence. Results should be presented as "based on career data and historical matchups" — this is both honest and compelling.

**Important limitation:** The model returns a probability based on overall historical performance. It does not account for current tournament round, player injury status, weather, or live form signals. This limitation is acknowledged in the UI via confidence levels and the Story Mode narrative context.

### Tournament Simulation System

No new ML model required. Built on top of the existing `/predict` endpoint.

**Method:**
1. Precompute all pairwise probabilities for the draw (N × N-1 / 2 unique pairs)
2. Cache results in a JavaScript Map
3. Run 1,000 Monte Carlo simulations: for each match, resolve outcome using `Math.random()` weighted by precomputed probability
4. Aggregate: champion count per player → win probability leaderboard

**Bracket resolution per match:** `Math.random() < pA_probability` → Player A advances; else Player B advances.

**Output:** Per-player tournament win probability (%), per-round advancement probability, upset frequency per matchup.

### Match Simulation System (Post-MVP)

Full set simulation using Markov chain tennis mathematics — a well-documented approach that computes set and match win probabilities from point-level win probabilities.

**Method:**
1. Derive point win probability from the `/predict` match probability (via established tennis probability formulas — Barnett & Clarke, 2005)
2. Run game-by-game simulation using Markov chain state machine
3. Produce scoreline: "6–3 4–6 7–6(5) 3–6 6–4"
4. Identify "key moments" (break points, tiebreaks) from simulation state

**Why this is recruiter-impressive:** The output looks like a real match simulation. The underlying math is well-understood and implementable in pure JavaScript — no new model training required.

### AI Analyst System

**Model:** Claude (`claude-sonnet-4-6`) via Anthropic API

**Architecture:** Flask proxy endpoint (`POST /ai-analyst`) receives query + page context from frontend, assembles a structured prompt with embedded statistics, calls the Anthropic API, and streams the response back to the frontend.

**Prompt engineering strategy:**
- System prompt establishes broadcast analyst persona and output constraints
- Context injection: active players, surface, prediction result, relevant statistics
- Structured output request for Act 4 (deciding factor): returns JSON `{ factor, stat, sentence }`
- General queries: returns prose under 150 words

**Fallback strategy:** If the AI call fails, Story Mode Act 4 falls back to a template sentence generated from the largest statistical difference between the two players' surface win rates. The user never sees an error on Act 4 — it always renders.

---

## 20. Recommended Folder Structure

```
acepredict/
│
├── frontend/
│   ├── public/
│   │   └── fonts/                    ← Clash Display (self-hosted fallback)
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── SurfaceTag/       ← Hard/Clay/Grass pill
│   │   │   │   ├── ConfidenceBadge/  ← Very High / High / Medium / Low
│   │   │   │   ├── ProbabilityBar/   ← animated fill bar
│   │   │   │   ├── PlayerChip/       ← name + ranking + flag
│   │   │   │   ├── StatCell/         ← label + value + trend
│   │   │   │   └── WLChip/           ← W/L result chip
│   │   │   │
│   │   │   ├── organisms/
│   │   │   │   ├── MatchCard/        ← full prediction card
│   │   │   │   ├── PlayerProfile/    ← identity header + stats
│   │   │   │   ├── H2HScoreboard/    ← rivalry banner + splits
│   │   │   │   ├── TournamentBracket/← bracket tree
│   │   │   │   └── StoryMode/        ← four-act post-prediction narrative
│   │   │   │       ├── FormReport/   ← Act 1
│   │   │   │       ├── SurfaceVerdict/  ← Act 2
│   │   │   │       ├── RivalryThread/   ← Act 3
│   │   │   │       └── DecidingFactor/  ← Act 4 + AI + fallback
│   │   │   │
│   │   │   ├── motion/
│   │   │   │   ├── TennisLoader/     ← 5 variants (serve/walkout/ballmachine/notebook/sweep)
│   │   │   │   ├── HawkeyeError/     ← 3 verdict states (IN/OUT/REVIEW REQUIRED)
│   │   │   │   └── PageTransition/   ← 4 transition types
│   │   │   │
│   │   │   ├── silhouettes/
│   │   │   │   ├── PlayerSilhouette/ ← 5 shots + surface-aware colour
│   │   │   │   └── paths/            ← SVG path constants per shot
│   │   │   │
│   │   │   └── layout/
│   │   │       ├── SurfaceShell/     ← wraps every page, applies surface context
│   │   │       ├── GlobalNav/        ← top bar with surface selector
│   │   │       └── AIAnalystPanel/   ← slide-in overlay, all pages
│   │   │
│   │   ├── pages/
│   │   │   ├── CentreCourt/
│   │   │   │   ├── sections/
│   │   │   │   │   ├── EditorialHero/
│   │   │   │   │   ├── TodaysCourt/
│   │   │   │   │   ├── RivalryWatch/
│   │   │   │   │   ├── SurfaceOfTheWeek/
│   │   │   │   │   ├── PlayerInForm/
│   │   │   │   │   └── TournamentSpotlight/
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── MatchIntelligence/
│   │   │   │   ├── VSArena/
│   │   │   │   ├── PredictionReveal/
│   │   │   │   ├── PredictionDrivers/
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── PlayerIntelligence/
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── HeadToHead/
│   │   │   │   ├── H2HTimeline/
│   │   │   │   ├── MatchHistory/
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   └── TournamentPredictor/
│   │   │       ├── DrawBuilder/
│   │   │       ├── BracketView/
│   │   │       ├── ProbabilityLeaderboard/
│   │   │       └── index.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── usePrediction.js          ← POST /predict + reveal timing
│   │   │   ├── usePlayerSearch.js        ← Fuse.js autocomplete
│   │   │   ├── useTournamentSim.js       ← Monte Carlo engine
│   │   │   ├── useAIAnalyst.js           ← POST /ai-analyst + streaming
│   │   │   ├── useTennisTransition.js    ← page transition orchestration
│   │   │   └── useH2H.js                 ← GET /head-to-head
│   │   │
│   │   ├── store/
│   │   │   ├── useSurfaceStore.js        ← Zustand: active surface + body attribute
│   │   │   ├── useAIAnalystStore.js      ← Zustand: panel state + history
│   │   │   ├── useTournamentStore.js     ← Zustand: draw + simulation results
│   │   │   └── usePredictionStore.js     ← Zustand: current prediction + reveal state
│   │   │
│   │   ├── styles/
│   │   │   ├── tokens.css                ← ALL CSS custom properties, all three themes
│   │   │   ├── typography.css            ← font imports + type scale utilities
│   │   │   └── global.css                ← reset, base, body styles
│   │   │
│   │   ├── data/
│   │   │   ├── players.json              ← preprocessed from Sackmann CSV
│   │   │   ├── rivalries.json            ← curated rivalry pairs
│   │   │   ├── surfaceEditorial.json     ← pre-written surface copy
│   │   │   ├── tournaments.json          ← active tournament config
│   │   │   └── featuredMatch.json        ← today's featured matchup
│   │   │
│   │   └── utils/
│   │       ├── tennisMarkov.js           ← match simulation probability math (Post-MVP)
│   │       ├── queryParser.js            ← NL search regex router
│   │       └── nameResolver.js           ← player name canonical lookup
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── app.py                            ← Flask app, preserve existing structure
│   ├── routes/
│   │   ├── predict.py                    ← existing (DO NOT MODIFY)
│   │   ├── player.py                     ← existing (DO NOT MODIFY)
│   │   ├── h2h.py                        ← existing (DO NOT MODIFY)
│   │   ├── players_list.py               ← new: GET /players
│   │   └── analyst.py                    ← new: POST /ai-analyst
│   ├── data/                             ← Sackmann CSV files
│   └── models/                           ← existing trained model
│
├── scripts/
│   └── preprocess_players.py             ← one-time: CSV → players.json
│
└── docs/
    └── acepredict_v2_vision.md           ← this document
```

---

## 21. Build Roadmap

### Sprint 1 — Design System + Core Shell (Hours 0–8)

**Goal:** The product looks like AcePredict before a single feature works.

**Deliverables:**
- `tokens.css` — complete CSS custom property system for all three surface themes
- `typography.css` — font imports (Clash Display, Inter, JetBrains Mono) + scale utilities
- `global.css` — reset, base styles
- `GlobalNav` — full navigation bar, surface selector, AI Analyst button
- `SurfaceShell` — wraps every page, applies `data-surface` to body
- `useSurfaceStore` — Zustand store + body attribute management
- All five `PlayerSilhouette` SVG path constants designed + component built
- `TennisLoader` shell component with SERVE_LOAD variant working
- `HawkeyeError` component with all three verdict states
- Centre Court hero section (`EditorialHero`) — static content, surface-aware

**Recruiter impact:** The product has a distinctive visual identity before any data is connected. Screenshot-worthy from hour 8.

---

### Sprint 2 — Match Intelligence + Player Intelligence (Hours 8–18)

**Goal:** The core product loop works end-to-end.

**Deliverables:**
- `VSArena` — dual player autocomplete, Fuse.js integration, filled slot states
- `usePlayerSearch` hook — Fuse.js against `players.json`
- `PredictionReveal` — full four-phase animation sequence
- `ConfidenceBadge`, `ProbabilityBar` atoms
- Story Mode: Acts 1–3 (data-driven, using `/player` + `/head-to-head` endpoints)
- `PredictionDrivers` stat grid
- `preprocess_players.py` — CSV to `players.json` script run once
- `Player Intelligence` page — hero band, surface radar (Recharts), career stats grid, surface bars, form timeline (Recharts), AI insight block
- WALKOUT_LOAD animation
- Bridge CTAs between pages

**Recruiter impact:** The product's two most important pages are fully functional. The prediction reveal animation is the shareable moment.

---

### Sprint 3 — Head-to-Head + Tournament Predictor (Hours 18–26)

**Goal:** The emotionally resonant and fantasy-anchor features are complete.

**Deliverables:**
- `Head-to-Head` page — rivalry header, surface splits, H2H timeline with ticks + trend line, filterable match history, momentum bar, predict CTA
- `H2HTimeline` component — SVG axis + chronological ticks + trend path
- `Tournament Predictor` page — draw builder, bracket visualisation, Monte Carlo engine
- `useTournamentSim` hook — pairwise precomputation + 1000-run simulation
- `BracketView` — animated round-by-round reveal
- `ProbabilityLeaderboard` — bars animate with stagger
- Dark horse + upset alert logic
- BALL_MACHINE_LOAD animation
- Bracket bracket winner CELEBRATION silhouette reveal

**Recruiter impact:** The tournament predictor is the fantasy player's product. Shareable bracket output is a viral moment.

---

### Sprint 4 — AI Analyst + Natural Language Search (Hours 26–33)

**Goal:** The AI differentiator is live.

**Deliverables:**
- `analyst.py` Flask route — Anthropic API proxy with context injection
- `AIAnalystPanel` — slide-in overlay, BALL_KID_TOSS open, query input, streaming response
- `useAIAnalyst` hook — POST /ai-analyst + streaming display
- Suggested questions system — 3 context-aware chips per page
- Story Mode Act 4 fully wired (AI + fallback)
- Natural language search routing — `queryParser.js` with regex intent matching
- NOTEBOOK_LOAD animation
- Centre Court NL search bar fully functional

**Recruiter impact:** The AI layer is genuinely novel. Natural language tennis queries that route to the right page are impressive to any technical evaluator.

---

### Sprint 5 — Polish + Deploy (Hours 33–36)

**Goal:** The product is live, mobile-responsive, and ready for sharing.

**Deliverables:**
- All four page transitions wired (BALL_WIPE / COURT_LINE_SWEEP / SERVE_SWEEP / BALL_KID_TOSS)
- Complete mobile responsive pass — all five pages + AI panel
- `prefers-reduced-motion` pass — all animations
- All Hawkeye error states wired to actual API failure + 404 routes
- Complete tennis metaphor copy audit — every loading, error, empty state
- `rivalries.json`, `surfaceEditorial.json`, `tournaments.json`, `featuredMatch.json` populated
- Centre Court all six sections rendering correctly
- Frontend deployed to Vercel
- Backend deployed to Railway/Render
- Environment variables configured
- Smoke test: end-to-end prediction + tournament simulation live

---

## 22. Success Criteria

### Product-level Success

The product is successful when:

1. **A person who watches tennis** uses the platform for the first time and says "this feels like it was built by someone who actually understands the sport" — not "this is a cool data project."

2. **A recruiter or hiring manager** sees a screenshot or a live demo and immediately asks for more context — because the product looks like something a real company would ship, not a portfolio side project.

3. **A non-technical user** can navigate from the homepage to a full match prediction to a tournament simulation without any instruction — because the UX is self-narrating.

4. **A tennis analyst** opens the Player Intelligence page for a player they follow and finds at least one insight they hadn't seen presented this clearly before.

### Feature-level Success Metrics

| Feature | Success definition |
|---|---|
| Centre Court | Users spend 45+ seconds on the homepage before navigating away |
| Match Intelligence | Prediction reveal completes in under 3 seconds, all four Story Mode acts render |
| Player Intelligence | Radar chart + form timeline visible without scrolling on desktop |
| Head-to-Head | H2H timeline ticks animate in correctly for players with 10+ meetings |
| Tournament Predictor | 8-player simulation completes and renders bracket in under 5 seconds |
| AI Analyst | Responses are specific (reference a statistic) and under 150 words |
| Surface themes | All three themes are visually distinct and atmosphere-appropriate |

### Technical Success Criteria

- Lighthouse performance score ≥ 85 on desktop
- No layout shift visible during loading states
- All animations play at 60fps on a mid-range laptop
- Mobile experience is usable on an iPhone SE (375px viewport)
- The product deploys without errors to Vercel + Railway on a clean environment
- No hardcoded player names, colours, or content — all driven by data and config files

---

## 23. Non-Negotiable Rules

The following rules govern all future development of AcePredict. Any proposed feature, design decision, or code change that violates these rules requires explicit product review before proceeding.

---

### Product Rules

**Rule 1 — The product is a tennis platform, not a machine learning demo.**
The prediction model is a tool, not the product. Never present the model's existence as a headline feature. The experience is the product.

**Rule 2 — Every system state speaks the language of tennis.**
Loading, error, empty, success — every state has tennis-specific copy. Generic software copy ("Loading...", "Error 500", "No results") is prohibited. See Section 14 for the complete copy system.

**Rule 3 — Numbers are the hero.**
When a page has a key number (probability, H2H record, win rate), that number must be the visually dominant element on the page. Do not subordinate data to decorative graphics.

**Rule 4 — Predictions include context.**
A bare probability percentage is never an acceptable final output. Every prediction is accompanied by Story Mode (or a minimum of surface record and H2H summary). Users need to understand why, not just what.

**Rule 5 — Surface themes are atmospheric identities, not colour swaps.**
When adding any new component, it must be fully surface-aware — inheriting from CSS custom properties, never with hardcoded colours. Test every new component in all three themes before considering it complete.

---

### Design Rules

**Rule 6 — 96px between major sections. No exceptions.**
The product needs air. Dashboard-density page layouts are prohibited. If a page feels busy, remove content — do not reduce spacing.

**Rule 7 — No decorative shadows.**
CSS `box-shadow` is used for functional purposes only (focus rings). Elevation is communicated through background colour steps (`--ap-bg-base` → `--ap-bg-raised` → `--ap-bg-elevated` → `--ap-bg-overlay`). Decorative shadows make the product look generic.

**Rule 8 — No generic UI component libraries.**
Material UI, Chakra UI, Ant Design, and equivalents are prohibited. They produce generic results. All UI is custom, built from the design system tokens in this document.

**Rule 9 — The × symbol, not "vs".**
Player-versus-player contexts always use "×" (multiplication sign). Not "vs", not "v", not "VS". This is a product identity decision.

**Rule 10 — Spring easing in exactly five places.**
`cubic-bezier(0.34, 1.56, 0.64, 1)` appears only in: confidence badge entry, Hawkeye verdict text, player walkout stop, Hawkeye zoom settle, bracket winner reveal. Using it elsewhere dilutes its impact.

**Rule 11 — Three typefaces only.**
Clash Display + Inter + JetBrains Mono. No additions. The constraint is the identity.

**Rule 12 — Player names in prediction contexts always use Clash Display.**
A player's name on a prediction, profile, or rivalry screen is always rendered in the display face at appropriate scale. Inter is for supporting information only in these contexts.

---

### Technical Rules

**Rule 13 — Do not modify existing Flask endpoints.**
The `/predict`, `/player/<name>`, and `/head-to-head/<a>/<b>` endpoints are preserved exactly as implemented. New functionality is additive — new routes only.

**Rule 14 — No database for MVP.**
JSON files + Flask in-memory data + React state. Adding a database adds deployment complexity for zero user-visible benefit in the MVP scope.

**Rule 15 — All animations respect prefers-reduced-motion.**
Every `@keyframes` animation has a `@media (prefers-reduced-motion: reduce)` override. The fallback is always opacity transition only, at the same duration. No exceptions.

**Rule 16 — Probabilities display as integers.**
The model does not have sub-percentage precision. Displaying "87.3%" implies false accuracy. Always `Math.round()` before display.

**Rule 17 — Minimum animation duration of 1200ms for prediction reveals.**
If the API returns faster than 1200ms, the SERVE_LOAD continues until the minimum is reached. Instant results feel accidental. The minimum delay creates the sense that the system is working on something meaningful.

**Rule 18 — The AI Analyst response is always specific.**
The AI Analyst system prompt requires the model to reference at least one specific statistic. Vague affirmations ("Alcaraz is a strong player on clay") are not acceptable outputs. If the AI returns a non-specific response, display the template fallback instead.

---

### Scope Rules

**Rule 19 — Do not build what impresses engineers instead of what impresses users.**
A perfectly typed TypeScript codebase is less valuable for this product than a prediction reveal animation that makes someone gasp. Optimise for user impact, then code quality.

**Rule 20 — Postpone live data until the core experience is complete.**
Real-time scores, live ranking updates, and live match data require infrastructure that does not yet exist. These features are explicitly Post-MVP. Do not allow live data discussions to distract from completing the core intelligence features.

**Rule 21 — One AI call per Deciding Factor per prediction.**
The AI Analyst is called once per Story Mode render for Act 4. Do not make additional AI calls for supporting information in Acts 1–3 — these are data-driven and must not have AI dependencies. AI failure must never block Story Mode rendering.

---

*This document represents the complete and approved product vision for AcePredict v2. All future development, design decisions, and scope discussions should reference this document as the single source of truth. Modifications to this document require explicit review against the Non-Negotiable Rules in Section 23.*

---

**Document version:** 2.0  
**Status:** Approved · Ready for implementation  
**Next step:** Sprint 1 — Design System + Core Shell
