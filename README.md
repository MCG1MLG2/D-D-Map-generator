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

### 🗺️ Map generator (`map.html`)
- **100–10,000 Voronoi fields** (700 by default), numbered row by row or column by column
- **Castles**: the map is always built around the automatic castle layout for a given seed, or place every castle yourself by clicking directly on the map (including extra castles beyond the default outpost count)
- **Terrain regions**: mountains, sea, forest and desert, each either auto-placed or freely positionable, plus a **terrain brush** to paint individual fields (grass, forest, desert, mountain, sea, river) directly on the map
- **Rivers & bridges**: meandering, braided rivers on larger maps that always flow into the sea, with automatic or hand-placed wooden bridges (including bridges across hand-painted water)
- **Villages, harbors, merchants & action fields**: freely placeable markers, each with their own icon
- **Flow arrows**: toggleable routes leading to the outposts first, then to the main castle
- **Reproducible**: seeded RNG (Mulberry32), same seed, same map
- **Fullscreen view**, **PNG export** at 2× resolution, and compact **share links** that capture the entire configuration (including hand-placed castles, terrain and bridges) in a short URL-safe code
- Collapsible settings panel with a visible, editable seed, styled like a parchment-and-stone RPG sheet

### 🛡️ Hero card generator (`player.html`)
- Individual character cards with name, epithet, rank, emoji icon or an uploaded portrait photo, species, class, and a special ability
- **10 species** (Human, Halfling, Gnome, Half-Elf, Half-Orc, Dragonborn, Tiefling, Aasimar, Goliath, Tabaxi) and **15 classes** (Mage, Knight, Barbarian, Rogue, Cleric, Paladin, Ranger, Druid, Bard, Monk, Warlock, Necromancer, Alchemist and more), each with its own perk
- Numbered trackers for **strength and willpower points** (up to 30)
- Optional **hero backstory** field
- **Equipment slots** (main hand, off hand, helmet, chest, belt, pants, shoes) with hand-drawn medieval-style icons, laid out like a paper doll
- **Inventory** slots for gold & gems (1–6, configurable)
- 24 selectable accent colors
- **Fullscreen view**, **PNG export** via html2canvas, and shareable links

### ⚔️ Enemy card generator (`gegner.html`)
- Character cards for monsters and NPCs: name, epithet, threat level, type, special ability, HP, armor and movement
- Damage shown as numbered pip boxes, a single badge, or hidden entirely
- Built-in enemy types (undead, beast, demon, dragon, goblin, giant, elemental, construct, bandit) each with flavor text and a random-generator button for names and abilities

### 🌍 Languages
- **48 languages** across all pages, with a language picker and automatic browser language detection
- RTL support for right-to-left languages
- All translations live in a single shared file, `languages.js`, so adding a new language never requires touching the HTML pages

---

## 📁 Structure

| File | Purpose |
|---|---|
| `index.html` | Landing page with links to all generators |
| `map.html` | The map generator |
| `player.html` | The hero card generator |
| `gegner.html` | The enemy card generator |
| `languages.js` | Shared translations for all pages (48 languages) |

## 🛠️ Tech

- Plain HTML, CSS and JavaScript (SVG + Canvas)
- Voronoi tessellation for the map fields (`d3-delaunay`)
- Mulberry32 as the seeded random number generator
- html2canvas for card export
- Compact custom encodings for shareable links (map and hero settings packed into short URL-safe codes, with automatic fallback to a longer JSON format for anything that doesn't fit)

## 🤝 Contributing

Since this is just a fun project: issues and ideas are welcome, but there is no guarantee of support or further development. Happy rolling! 🐉
