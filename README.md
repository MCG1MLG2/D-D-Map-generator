# 🗺️ D&D Helper

A small toolbox for fantasy tabletop RPGs (D&D & co.): a **procedural map generator** and a **hero card generator**, all running in the browser with no framework and no build step.

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
- **700+ Voronoi fields**, numbered from top-left to bottom-right, with cell size scaling dynamically
- **Castles & outposts**: a central main castle plus a configurable number of outposts in a star pattern
- **Terrain regions**: mountains, sea, forest and desert, each positionable via dropdown or switched off
- **Rivers & bridges**: the river always flows into the sea, wooden bridges connect bank to bank
- **Flow arrows**: routes lead to the outposts first, then to the main castle
- **Markers**: action fields (red circles, every 500 fields) and a merchant ("H") on a field of your choice
- **Reproducible**: seeded RNG (Mulberry32), same seed, same map
- **PNG export** at 2× resolution
- Collapsible settings panel with a visible, editable seed

### 🛡️ Hero card generator (`player.html`)
- Individual character cards with name, epithet, rank, emoji icon and special ability
- **8 classes** (Mage, Knight, Goblin, Elf, Dwarf, Barbarian, Rogue, Cleric), each with a mini perk
- Numbered trackers for **strength and willpower points** (up to 30)
- Storage for **gold & gems** (up to 6 slots)
- Selectable accent color (Gold, Crimson, Forest, Azure, Purple)
- **PNG export** via html2canvas

### 🌍 Languages
- **48 languages**, including a language picker and automatic browser language detection
- RTL support for right-to-left languages
- All translations live in a single shared file, `languages.js`, so adding a new language never requires touching the HTML pages

---

## 📁 Structure

| File | Purpose |
|---|---|
| `index.html` | Landing page with links to the map and the hero card |
| `MAP.html` | The map generator |
| `player.html` | The hero card generator |
| `languages.js` | Shared translations for all pages (48 languages) |

## 🛠️ Tech

- Plain HTML, CSS and JavaScript (SVG + Canvas)
- Voronoi tessellation for the map fields
- Mulberry32 as the seeded random number generator
- html2canvas for hero card export

## 🤝 Contributing

Since this is just a fun project: issues and ideas are welcome, but there is no guarantee of support or further development. Happy rolling! 🐉
