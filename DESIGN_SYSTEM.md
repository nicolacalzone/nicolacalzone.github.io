# Design System

Dark, technical, quiet. One bright accent (teal), one secondary accent (violet) for metadata, monospace for "machine" details.
All values live in [`assets/css/tokens.css`](assets/css/tokens.css); components in [`assets/css/main.css`](assets/css/main.css) reference tokens only.

## Rules

1. **No raw values in components.** Colors, spacing, radii, durations and font sizes come from tokens. Add a token before adding a one-off.
2. **One accent per element.** Teal (`--color-accent`) marks interactive or primary things: links, CTAs, active states, indices. Violet (`--color-accent-2`) is only for secondary metadata (archive tags, certificate issuers, terminal bullets).
3. **Mono = metadata.** JetBrains Mono for dates, labels, tags, section indices, nav logo, terminal. Inter for everything people read.
4. **Muted for support text.** Body paragraphs inside cards use `--color-text-muted`; titles use `--color-text`.
5. **Hit targets ≥ 44px** for buttons, icon links and mobile nav items; chips ≥ 40px.
6. **Motion is optional.** Every transition uses `--duration-*`, which collapse to 0 under `prefers-reduced-motion`.
7. **Content lives in `assets/js/data.js`**, never hardcoded in HTML (except the `<noscript>` fallback and meta tags).

## Tokens

### Color
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0b0d10` | Page background |
| `--color-surface` | `#12151a` | Cards, timeline items, terminal |
| `--color-surface-raised` | `#181c22` | Terminal bar, large skill tags |
| `--color-border` | `#232831` | Default 1px borders, dividers, grid backdrop |
| `--color-border-strong` | `#343b47` | Hover borders, ghost buttons, dashed cards |
| `--color-text` | `#e6e8eb` | Headings, primary text |
| `--color-text-muted` | `#8b93a1` | Supporting text (≈6:1 on bg — AA) |
| `--color-accent` | `#5eead4` | Links, CTAs, active state, focus ring |
| `--color-accent-strong` | `#99f6e4` | Hover on accent |
| `--color-accent-soft` | teal @ 10% | Tag fill, glow |
| `--color-accent-ink` | `#04201c` | Text on accent fills |
| `--color-accent-2` | `#a78bfa` | Secondary metadata |
| `--color-accent-2-soft` | violet @ 10% | Alt tag fill |

### Typography
| Token | Value |
|---|---|
| `--font-sans` | Inter |
| `--font-mono` | JetBrains Mono |
| `--text-xs … --text-md` | 12 / 14 / 16 / 18 px |
| `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl` | fluid `clamp()` ≈ 20→24, 24→32, 32→48, 40→76 px |
| `--leading-tight / snug / normal` | 1.1 / 1.35 / 1.65 |

### Spacing, radius, motion
- Spacing: 4px base — `--space-1` (4) · 2 (8) · 3 (12) · 4 (16) · 5 (20) · 6 (24) · 8 (32) · 10 (40) · 12 (48) · 16 (64) · 24 (96).
- Layout: `--container-max` 72rem, `--gutter` 16px (32px ≥ 720px), `--nav-height` 64px.
- Radius: `--radius-sm` 6px (focus, small controls) · `--radius-md` 12px (cards) · `--radius-pill` (buttons, chips, tags).
- Motion: `--duration-fast` 150ms (hover), `--duration-base` 250ms (menus, cards), `--duration-slow` 600ms (scroll reveal), `--ease-out`.
- Focus: `--focus-ring` — 2px bg gap + 2px accent ring on every `:focus-visible`.

## Components

| Component | Class | Variants / states | Notes |
|---|---|---|---|
| Button | `.btn` | `--primary`, `--ghost`; sizes `--sm`, `--lg`; hover, active, focus | Primary = one per view region |
| Text link | `.link` | hover (arrow nudges) | Mono, accent, with ↗ icon |
| Icon link | `.icon-link` | hover | 44px circle, requires `aria-label` |
| Tag | `.tag` | `--alt` (violet), `--lg` (neutral) | Inside `ul.tags` |
| Filter chip | `.chip` | `aria-pressed="true"` = selected | Toolbar of toggle buttons |
| Nav | `.nav` | `.is-scrolled`, `.menu-open` (mobile), `aria-current` link | Hamburger < 880px, Esc closes |
| Section head | `.section__head` | — | Mono index `NN /` + h2 + rule |
| Timeline item | `.timeline__item` | hover border | Meta column ≥ 720px |
| Project card | `.card` | hover lift + glow | Featured projects |
| Archive row | `.archive__row` | hover surface ≥ 880px | Compact project list |
| Terminal | `.terminal` | — | Decorative facts card; labelled group |

## Adding things
- **New project:** add an object to `featured` or `archive` in `data.js` with `category` ∈ `ai | vision | web | systems`. Links with `url: "#"` are hidden automatically.
- **New category:** add it to `CATEGORIES` in `main.js`.
