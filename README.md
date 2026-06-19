<<<<<<< HEAD
# ParkEase

A parking-finder &amp; reservation site, converted from a travel-booking
template while keeping the same component concepts:

| Travel app      | ParkEase equivalent              |
|-----------------|-----------------------------------|
| Navbar          | `Navbar.jsx` — same dark/login logic |
| Hero            | `Hero.jsx` — "Find Your Spot" CTA |
| Footer          | `Footer.jsx` — quick links + top locations |
| Login           | `Login.jsx` — demo driver sign-in |
| Dashboard       | `Dashboard.jsx` — nested profile / vehicle-alerts tabs |
| Places          | `ParkingSpots.jsx` — filterable garage/lot listings |
| TourDetail      | `SpotDetail.jsx` — single spot page w/ nested tabs |

## Design

Asphalt-navy + signal-amber palette, Oswald for signage-style headings,
Inter for body copy, JetBrains Mono for spot codes and prices. The
signature element is the **ticket-stub card**: a perforated divider and
barcode strip under every listing, with the spot code in an amber badge —
styled like an actual parking ticket.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Routes:

- `/` — home (hero + listings)
- `/spots` — full filterable listing
- `/spots/detail/:id` — single spot detail
- `/login`, `/dashboard`
- `/about`, `/contact`
- `/confirm` — reservation confirmation
=======
# Parking_React
>>>>>>> 45f76648c7674f959763046b6b8adac74fad19d6
