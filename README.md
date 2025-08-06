# Garuda Invest Corp - Static Website

A simple, clean static website for Garuda Invest Corp - showcasing investment opportunities in EMS, Aerospace, and Defence sectors.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading static site
- 🌐 GitHub Pages ready
- 📝 Contact form with validation
- 🎯 Focus on investment sectors

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Push to main branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://username.github.io/repository-name`

## Structure

- `client/src/pages/` - All website pages
- `client/src/components/` - Reusable UI components
- `client/src/components/ui/` - shadcn/ui components
- `client/index.html` - Main HTML template

## Customization

All content is hardcoded for simplicity. To modify:

1. **Company info**: Edit contact details in `client/src/pages/contact.tsx`
2. **Investment data**: Update portfolio information in `client/src/pages/portfolio.tsx`  
3. **Team members**: Modify team data in `client/src/pages/team.tsx`
4. **Styling**: Update colors and design in `client/src/index.css`

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (animations)
- Lucide React (icons)
- shadcn/ui (components)

## Deployment

This project is configured for GitHub Pages deployment:

1. Fork/clone this repository
2. Enable GitHub Pages in repository settings
3. Push changes to main branch
4. GitHub Actions will automatically build and deploy

The site will be available at your GitHub Pages URL.