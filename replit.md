# Garuda Invest Corp - Investment Fund Website

## Overview

This is a modern investment fund website for Garuda Invest Corp, a SEBI registered Category 2 Alternative Investment Fund (AIF) focused on strategic investments in Electronics Manufacturing Services (EMS), Aerospace, and Defence sectors. **Updated August 5, 2025**: The application has been simplified to a static React website optimized for GitHub Pages deployment, removing all backend dependencies and server complexity for easier hosting and maintenance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Team, Portfolio, and Contact
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens for brand colors (navy, gold) and consistent theming
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **State Management**: TanStack React Query for server state management and API data fetching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Static Site Architecture (Updated August 5, 2025)
- **Deployment**: Static website optimized for GitHub Pages hosting
- **Contact Form**: Client-side form validation with success message display (no backend submission)
- **Data**: All content is hardcoded in React components for simplicity and reliability
- **Build Output**: Static HTML, CSS, and JavaScript files in `dist/public` directory

### Build and Development Architecture
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and development server with proxy for API routes
- **Production Build**: Separate builds for client (static assets) and server (Node.js bundle)
- **Development Tools**: TSX for TypeScript execution, ESBuild for server bundling

### Deployment Architecture (Updated August 5, 2025)
- **GitHub Pages**: Automated deployment via GitHub Actions workflow
- **Build Process**: Vite builds static assets to `dist/public` directory
- **CI/CD**: `.github/workflows/deploy.yml` handles automatic builds and deployment
- **Development**: Local development with `vite` serving from `client` directory
- **No Server Required**: Pure static site with no backend dependencies

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for smooth transitions and micro-interactions

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe ORM with excellent TypeScript integration
- **Drizzle Kit**: Database migration and schema management tools

### Development and Build Tools
- **Vite**: Next-generation frontend tooling for fast development
- **TypeScript**: Static typing for JavaScript with strict type checking
- **ESBuild**: Fast JavaScript bundler for server-side builds
- **PostCSS**: CSS post-processor for Tailwind CSS compilation

### Form Handling and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### HTTP and API
- **TanStack React Query**: Powerful data fetching and caching library
- **Express.js**: Web framework for Node.js API development

### Replit Integration
- **Replit Vite Plugins**: Development banner and error overlay for Replit environment
- **Cartographer**: Development tooling integration for Replit IDE