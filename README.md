# 🗺️ D&D Helper

A small toolbox for fantasy tabletop RPGs (D&D & co.): a **procedural map generator**, a **hero card generator**, an **enemy card generator**, a **shop generator**, a **text card**, a **campaign timeline tracker**, and a **daily progress tracker** — all running in the browser with no framework and no build step.

> ## 🤖 Note
> **This project is 100% AI-generated.**
> Not a single line of code was written by hand. I'm just doing this for fun, so don't expect production-grade quality, but plenty of fantasy flair. 🎲

---

## 🚀 Try it

**👉 [Open the live version](https://mcg1mlg2.github.io/D-D-Map-generator/)**

No installation, no dependencies. Just open the link in your browser. The source lives in this repo: [github.com/MCG1MLG2/D-D-Map-generator](https://github.com/MCG1MLG2/D-D-Map-generator) (also linked from the 🐙 icon on the landing page).

---

## ✨ Features

All tools share the same parchment-and-stone look, a language picker, PNG export, and (almost everywhere) **share links** that pack the whole configuration into a URL. On desktop the card or map always stays centered in the preview area while you scroll through the settings.

### 🗺️ Map generator (`map.html`)
- **100–10,000 Voronoi fields** (700 by default), numbered row by row or column by column
- **Castles**: the map is always built around a stable automatic layout for a given seed, or place every castle yourself by clicking directly on the map — including as many extra castles as you like, beyond the default outposts
- **Terrain regions**: mountains, sea, forest and desert, each either auto-placed or freely positionable
- **Terrain brush**: paint individual fields by hand (grass, forest, desert, mountain, sea, river) with an adjustable brush size — smooth even on 5,000-field maps
- **Rivers & bridges**: meandering, braided rivers on larger maps that always flow into the sea, with automatic bridges or hand-placed ones — including bridges across hand-painted water
- **Villages, harbors, merchants & action fields**: freely placeable markers, each with their own icon
- **Flow arrows**: toggleable routes leading to the outposts first, then to the main castle
- **Reproducible**: seeded RNG (Mulberry32), same seed, same map
- Individually collapsible setting groups (Buildings, Terrain, River, Map)
- **Fullscreen view**, **PNG export** at 2× resolution, and compact **share links** that capture the entire configuration (hand-placed castles, terrain, villages, harbors, bridges) in a short URL-safe code

### 🛡️ Hero card generator (`player.html`)
- Individual character cards with name, epithet, rank, emoji icon or an uploaded portrait photo (with adjustable border color and width), species, class, and a special ability
- **13 species** (Human, Halfling, Gnome, Half-Elf, Half-Orc, Dragonborn, Tiefling, Aasimar, Goliath, Tabaxi, Goblin, Elf, Dwarf) and **13 classes** (Mage, Knight, Barbarian, Rogue, Cleric, Paladin, Ranger, Druid, Bard, Monk, Warlock, Necromancer, Alchemist), each with its own perk
- Numbered trackers for **strength and willpower points** (up to 30)
- Optional **hero backstory** field
- **Equipment slots** (main hand, off hand, helmet, chest, belt, pants, shoes) with hand-drawn medieval-style icons, laid out like a paper doll — optionally placed beside the stats for a wider card
- **Inventory** slots for gold & gems (1–6, configurable)
- 24 selectable accent colors, sorted by hue
- Collapsible setting groups (Hero, Species & Class, Story, Stats & Color, Inventory & Gear)
- **Fullscreen view**, **PNG export** and shareable links

### ⚔️ Enemy card generator (`gegner.html`)
- Character cards for monsters and NPCs: name, epithet, threat level, type, special ability, passive ability, HP, armor and movement
- Damage shown as numbered pip boxes, a single badge, or hidden entirely
- Built-in enemy types (undead, beast, demon, dragon, goblin, giant, elemental, construct, bandit) and 8 passive abilities (regeneration, thick skin, fear, flying, thorns, pack tactics, magic resistance, berserk), each with flavor text, plus a random-generator button for names and abilities
- Adjustable portrait border, matching the hero card

### 🛒 Shop generator (`shop.html`)
- Shop cards with name, shopkeeper, shop type, description, accent color and a trader number
- Multiple **displays** per shop (up to 6), each shown as an **armor stand**, a **shelf** or a plain **list** — side by side (up to 3 columns) or stacked
- Per-item icon picker (helmet, chest, belt, hands, pants, shoes, generic item), price, coin type and optional quantity; numbered shelf slots that match the price list
- Collapsible displays, **PNG export** and shareable links

### 📜 Text card (`textfeld.html`)
- A parchment card with an optional title, subtitle, numbered seal, and body text (up to 3,000 characters), plus an optional **second text section** with its own heading
- Basic text formatting (bold, italic, underline, strikethrough) via toolbar buttons or keyboard shortcuts
- Title, subtitle, body, seal number and second section can each be shown or hidden independently
- 24 accent colors, **PNG export** and shareable links

### ⏳ Timeline tracker (`zeitstreifen.html`)
- A vertical progress strip for tracking the hours of an in-game session or campaign day, filling up field by field as time passes
- Configurable number of hours and "free" hours (up to 24 each), with overtime fields that can be picked individually — just click the hour in the strip
- 24 accent colors, **PNG export**, fullscreen view and shareable links

### 🌅 Day strip (`tagesstreifen.html`)
- A strip of lettered or numbered fields, styled as dark-green tiles, with symbols you can toggle per field by clicking it — handy for tracking the stages of a single day
- Vertical or horizontal layout, up to 60 fields, configurable wrap length and reversible counting direction
- 24 accent colors, **PNG export**, fullscreen view and shareable links

### 🌍 Languages
- **48 languages** across all pages, with a language picker and automatic browser language detection
- The chosen language is remembered and carried over between pages (`langsync.js`)
- RTL support for right-to-left languages
- All translations live in a single shared file, `languages.js`, so adding a new language never requires touching the HTML pages

---

## 📁 Structure

| File | Purpose |
|---|---|
| `index.html` | Landing page with links to all tools |
| `map.html` | The map generator |
| `player.html` | The hero card generator |
| `gegner.html` | The enemy card generator |
| `shop.html` | The shop generator |
| `textfeld.html` | The text card |
| `zeitstreifen.html` | The campaign timeline tracker |
| `tagesstreifen.html` | The daily progress tracker |
| `languages.js` | Shared translations for all pages (48 languages) |
| `langsync.js` | Keeps the selected language in sync across pages and tabs |

## 🛠️ Tech

- Plain HTML, CSS and JavaScript (SVG + Canvas)
- Voronoi tessellation for the map fields (`d3-delaunay`)
- Mulberry32 as the seeded random number generator
- html2canvas for card export
- Compact custom encodings for share links (settings packed into short URL-safe codes, with automatic fallback to a longer JSON format for anything that doesn't fit; old links keep working)

## 🤝 Contributing

Since this is just a fun project: issues and ideas are welcome, but there is no guarantee of support or further development. Happy rolling! 🐉
