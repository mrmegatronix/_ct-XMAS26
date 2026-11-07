# Agent Memory Bank: _ct-XMAS26

> Persistent knowledge, architecture, patterns, and decisions for the Social Club Christmas Party 2026.

## 1. Project Overview & Architecture
- **Repository**: `_ct-XMAS26`
- **Type**: 1080p Digital Signage Slideshow & A4 Print Menu
- **Theme**: Tiki Beach Christmas / Hawaiian Holiday Extravaganza
- **Event Date**: Saturday, 12 December 2026 (Second Saturday Night in December 2026)
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript, SVG Vector Graphics, BroadcastChannel API
- **Entry Points**:
  - `index.html`: 1080p Digital Signage Slideshow with 7 auto-advancing slides and canvas particle FX
  - `menu.html`: A4 Printout Cocktail Menu (Tiki Beach Theme, 4 easy show-stopping cocktails + mocktail)
  - `admin.html` / `masteradmin.html`: Master Event & Signage Admin Panel
  - `remote.html`: Mobile-Friendly Display Controller

## 2. Core Operational Conventions & Protocol Rules
- **Slideshow & Signage Navigation**:
  - `ArrowLeft`: Previous slide (`prevSlide()`)
  - `ArrowRight`: Next slide (`nextSlide()`)
  - `ArrowUp`: Restart module from slide 0
  - `ArrowDown`: Skip to next module / slide
  - `Space`: Toggle Pause / Unpause
  - `a` / `A`: Open Admin page (`admin.html`)
  - `r` / `R`: Open Remote page (`remote.html`)
  - `m` / `M`: Open A4 Cocktail Menu (`menu.html`)
  - `1`-`9`: Set slide display duration (10s to 90s)
  - `0`: Toggle Lock / Unlock freeze
  - Input Guard: Shortcuts disabled when focus is in `input`, `textarea`, `select`, or `contenteditable`
- **UI/UX Requirements**:
  - **Clocks**: ALL CLOCKS MUST HAVE BLINKING COLONS (`:`).
  - **Resolution**: Optimised for 1080p viewing (1920x1080) with dynamic viewport budgeting.
  - **Layout & Overflow**: Zero clipping, zero ugly line wraps. Dynamic font auto-fit via `scripts/matrix-autofit.js`.

## 3. Cocktails Specifications (Easy & Fabulous)
1. **Mele Kalikimaka Mai Tai**: Dark Rum, White Rum, Lime Juice, Orgeat, Orange Curaçao. Garnish: Mint pine tree & umbrella.
2. **Blue Hawaiian Blizzard**: White Rum / Vodka, Blue Curaçao, Pineapple Juice, Cream of Coconut. Garnish: Coconut snow rim & cherry.
3. **Santa's Tiki Sunrise**: Island Rum, POG (Passion-Orange-Guava) juice, Grenadine sinker. Garnish: Hibiscus & candied orange.
4. **Coconut Snow Drift Colada**: Spiced Coconut Rum, Pineapple, Coconut Cream, Nutmeg dusting. Garnish: Cinnamon sugar rim & holly mint.
5. **Virgin Palm Spritz (Mocktail)**: Guava nectar, pineapple, fresh lime, topped with ginger beer.

## 4. Active Context & Operational State
- **Status**: Production Ready & GitHub Pages Enabled
- **Target Deployment**: GitHub Pages (`https://mrmegatronix.github.io/_ct-XMAS26/`)
