# 🗺️ D&D Helper

A small toolbox for fantasy tabletop RPGs (D&D & co.): a **procedural map generator**, a **hero card generator**, and an **enemy card generator**, all running in the browser with no framework and no build step.

> ## 🤖 Note
> **This project is 100% AI-generated.**
> Not a single line of code was written by hand. I'm just doing this for fun, so don't expect production-grade quality, but plenty of fantasy flair. 🎲

---

## 🚀 Try it

**👉 [Open the live version](https://mcg1mlg2.github.io/D-D-Map-generator/)**

No installation, no dependencies. Just open the link in your browser.

---

## ✨ Features

### 🗺️ Map generator (`MAP.html`)
- **700+ Voronoi fields**, numbered top-left to bottom-right, with cell size scaling dynamically
- **Castles & outposts**: a central main castle plus configurable outposts in a star pattern — or place every castle yourself by clicking directly on the map, and optionally assign each one a specific field number
- **Terrain regions**: mountains, sea, forest and desert, each positionable via dropdown or switched off
- **Rivers & bridges**: the river always flows into the sea, wooden bridges connect bank to bank
- **Flow arrows**: toggleable routes leading to the outposts first, then to the main castle
- **Markers**: action fields (red circles, every 500 fields) and a merchant marker (a gold medallion with a coin pouch icon) on a field of your choice
- **Reproducible**: seeded RNG (Mulberry32), same seed, same map
- **Fullscreen view** and **PNG export** at 2× resolution
- **Share links**: a compact, highly condensed code captures every setting (including custom castle placement) so a whole map config can be shared as a short link
- Collapsible settings panel with a visible, editable seed

### 🛡️ Hero card generator (`player.html`)
- Individual character cards with name, epithet, rank, emoji icon or an uploaded portrait photo, and a special ability
- **15 classes** (Mage, Knight, Goblin, Elf, Dwarf, Barbarian, Rogue, Cleric, Paladin, Ranger, Druid, Bard, Monk, Warlock, Necromancer), each with its own perk
- Numbered trackers for **strength and willpower points** (up to 30)
- Optional **hero backstory** field
- **Equipment slots** (main hand, off hand, helmet, chest, belt, pants, shoes) with hand-drawn medieval-style icons, laid out like a paper doll
- **Inventory** slots for gold & gems (1–6, configurable)
- 24 selectable accent colors
- **Fullscreen view**, **PNG export** via html2canvas, and shareable links

### ⚔️ Enemy card generator (`gegner.html`)
- Character cards for monsters and NPCs: name, epithet, threat level, type, special ability, HP, armor and movement
- Damage can be shown as numbered pip boxes, a single badge, or hidden entirely
- Built-in enemy types (undead, beast, demon, dragon, goblin, giant, elemental, construct, bandit) each with flavor text and a random-generator button for names and abilities

### 🌍 Languages
- **48 languages** across all four pages, with a language picker and automatic browser language detection
- RTL support for right-to-left languages
- All translations live in a single shared file, `languages.js`, so adding a new language never requires touching the HTML pages

---

## 📁 Structure

| File | Purpose |
|---|---|
| `index.html` | Landing page with links to all three generators |
| `MAP.html` | The map generator |
| `player.html` | The hero card generator |
| `gegner.html` | The enemy card generator |
| `languages.js` | Shared translations for all pages (48 languages) |

## 🛠️ Tech

- Plain HTML, CSS and JavaScript (SVG + Canvas)
- Voronoi tessellation for the map fields
- Mulberry32 as the seeded random number generator
- html2canvas for card export
- Compact custom encodings for shareable links (map and hero settings packed into short URL-safe codes, with automatic fallback to a longer JSON format for anything that doesn't fit)

## 🤝 Contributing

Since this is just a fun project: issues and ideas are welcome, but there is no guarantee of support or further development. Happy rolling! 🐉
