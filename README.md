# The Automation Agency — Landing Page

A professional single-page website for an AI & automation agency specializing in n8n workflows. Built with pure HTML, CSS, and JavaScript — no frameworks required.

## Project Structure

```
automation-agency/
├── index.html          # Main landing page
├── css/
│   └── style.css       # All styles (responsive, animations, glassmorphism)
├── js/
│   └── main.js         # Navbar, scroll animations, form validation
├── assets/             # Placeholder directory for images/icons
├── CNAME               # Custom domain config for GitHub Pages
└── README.md
```

## Features

- Dark-mode design with glassmorphism cards and gradient accents
- Fully responsive (mobile-first with breakpoints at 768px and 1024px)
- Smooth scroll navigation with sticky navbar
- Scroll-triggered fade-in animations via Intersection Observer
- Client-side form validation with success feedback
- Mobile hamburger menu with overlay
- SEO meta tags and Open Graph properties

## Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. Go to **Settings > Pages** and set the source to the `main` branch.
3. Replace `yourdomain.com` in the `CNAME` file with your actual domain.
4. Configure your DNS provider to point to GitHub Pages (`185.199.108-111.153`).

## External Dependencies

- [Google Fonts](https://fonts.google.com/) — Inter typeface
- [Font Awesome 6](https://fontawesome.com/) — Icons (CDN)

Both are loaded over HTTPS with no mixed-content issues.
