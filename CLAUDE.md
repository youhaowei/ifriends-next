# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server with Node.js debugging enabled
- `npm run build` - Build for production
- `npm start` - Start production server

## Code Quality

- ESLint is configured with Next.js and Prettier rules
- TypeScript is enabled but with `strict: false` for gradual typing
- Build process will fail on TypeScript errors (`ignoreBuildErrors: false`)

## Project Architecture

This is a Next.js-based website for Tucson International Friends built with:

**Core Framework:**
- Next.js 15.3.2 with pages directory structure (not App Router)
- React 18 with ReactN for global state management
- Bootstrap 4.6 + React Bootstrap + Tailwind CSS for styling
- SCSS with custom variables and mixins in `styles/`

**Data Layer:**
- Notion API integration via `@notionhq/client` (requires `NOTION_API_KEY` env var)
- Static page configuration in `data/pages.json` with dynamic routing via `lib/page.js`
- Page metadata and routing handled by centralized page system

**Component Structure:**
- `components/` - Reusable UI components organized by feature
- `layout/` - Main layout wrapper with navigation configuration files
- `pages/` - Next.js page components using `.jsx` extension
- `lib/` - Utility functions for Notion integration, page management, and formatting

**Key Patterns:**
- Pages use `MainLayout` wrapper component which provides navbar, footer, and meta tags
- Navigation items defined in JSON files (`layout/navbarItems.json`, `layout/footerMenuItems.json`)
- Page routing system uses `getPageByName()` and `getPageByRoute()` helpers
- Components follow React functional component pattern without explicit prop validation
- Global styles managed through SCSS with component-specific style files

**Environment:**
- Requires Node.js with debugging support in development
- Deployed via Vercel (configured in `vercel.json`)
- Master branch auto-deploys on merge

**File Extensions:**
- Pages and components use `.jsx` extension
- Mixed TypeScript/JavaScript codebase with `.js` and `.ts` files
- SCSS styling with component-specific files