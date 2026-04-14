# Information Architecture Proposal — Kronteq

## Site Goal

Convert B2B prospects (purchasing managers, R&D engineers, production managers) into qualified leads via the contact form. Secondary goal: establish Kronteq as a credible, expert supplier of industrial adhesive systems in the Czech Republic and broader European market.

---

## Navigation structure

```
Kronteq
├── Úvod / Home
├── Řešení / Solutions          (product categories)
│   ├── Strukturální lepidla
│   ├── Reaktivní lepidla
│   ├── Tavná lepidla
│   ├── Kyanoakrylátová lepidla
│   ├── Anaerobní lepidla
│   └── Tmeliva a utěsňovače
├── Odvětví / Industries        (use-case landing pages)
│   ├── Automobilový průmysl
│   ├── Elektronika
│   ├── Stavebnictví
│   └── Průmyslová výroba
├── O nás / About
└── Kontakt / Contact
```

---

## Page-by-page breakdown

### Homepage `/` + `/en/`
**Goal:** Instant clarity on what Kronteq does + CTA to contact/solutions.
- Hero: strong headline, subheadline, 2 CTAs (Řešení / Kontakt)
- Product categories strip (6 icons)
- Industries served (4 cards)
- Why Kronteq (3 USPs: European engineer, fast delivery, custom solutions)
- Contact CTA band

### Řešení / Solutions
**Goal:** Help engineers/buyers find the right product type.
- Product category grid with descriptions
- Each category: use cases, typical applications, brands
- TODO: full product datasheets from presentation

### Odvětví / Industries
**Goal:** Speak directly to specific buyer segments.
- Automotive, Electronics, Construction, Manufacturing
- Each: specific challenges + how Kronteq solves them
- TODO: case studies from presentation

### O nás / About
**Goal:** Build trust, show expertise.
- Company story (founding, focus, European coverage)
- Team (Kristýna Ondráčková as visible expert)
- Certifications, quality standards
- TODO: full team info from presentation

### Kontakt / Contact
**Goal:** Convert to lead.
- Contact form (name, company, email, phone, message)
- Direct contact info (Kristýna Ondráčková)
- Address + map embed
- Response time promise ("Do 24 hodin")

---

## i18n routing

| Czech | English |
|-------|---------|
| `/` | `/en/` |
| `/reseni/` | `/en/solutions/` |
| `/odvtvi/` | `/en/industries/` |
| `/o-nas/` | `/en/about/` |
| `/kontakt/` | `/en/contact/` |

Default language: Czech (no prefix). English at `/en/` prefix.
Language switcher in header showing current language with toggle.

---

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| `--brand` | `#2D1B55` | Logo background purple |
| `--accent` | `#8B5CF6` | Violet (interactive elements) |
| `--accent-light` | `#A78BFA` | Lighter violet (hover) |
| `--bg-dark` | `#100B1E` | Page hero/header |
| `--bg-base` | `#FAFAF9` | Page body (light) |
| `--text-dark` | `#1A0E35` | Headings on light bg |

Site uses alternating dark hero / light body sections for premium B2B feel.
