# Pahari Global Sisterhood

## Overview

Pahari Global Sisterhood (PGS) is a youth-led South Asian climate and education initiative founded by high schooler Rimmal Sheikh. The project connects young women across Pakistan, Nepal, India, and Bangladesh through virtual "sister circles," STEM workshops, legal literacy discussions, and peer mentorship programs conducted in 5+ languages. The platform serves as both an informational website and a community hub showcasing the organization's mission to empower mountain girls through education, climate advocacy, and cross-border sisterhood.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based Single Page Application (SPA) architecture built with TypeScript and Vite for optimal development experience and build performance. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements. The design system implements a dark theme with purple/violet gradients, custom CSS variables for theming, and responsive design using Tailwind CSS.

The component structure follows a modular approach with reusable UI components and page-specific components. Navigation is handled client-side using Wouter for lightweight routing. The application includes smooth scrolling, intersection observer-based scroll reveal animations, and interactive elements like carousels and typewriter effects.

### Backend Architecture
The backend follows a minimal Express.js architecture configured for both development and production environments. The server structure includes route registration, middleware setup, and error handling. In development, it integrates with Vite's middleware for hot module replacement and development tooling. The production build process uses esbuild for server bundling and Vite for client-side bundling.

The storage layer is abstracted through an interface-based approach, currently implementing an in-memory storage solution but designed to easily swap for database implementations. The API structure is set up to handle RESTful endpoints with proper error handling and logging.

### Data Storage Solutions
The application is configured for PostgreSQL database integration using Drizzle ORM with Neon Database serverless connection. The database schema includes user management with UUID primary keys and unique constraints. Drizzle provides type-safe database operations and migration management through drizzle-kit.

Session management is configured using connect-pg-simple for PostgreSQL-backed sessions. The storage interface supports CRUD operations and is designed to scale from the current in-memory implementation to full database persistence.

### Authentication and Authorization
While the current implementation includes user schema and storage interfaces, the authentication system appears to be in a foundational state. The user model includes username and password fields with proper constraints, suggesting preparation for traditional authentication flows.

## External Dependencies

### Third-party Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Vercel/Production Hosting**: Configured for Node.js deployment with proper build processes

### UI and Component Libraries
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-styled components built on Radix UI with consistent design tokens
- **Lucide React**: Icon library providing consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design

### Development and Build Tools
- **Vite**: Build tool and development server with fast HMR and optimized builds
- **TypeScript**: Type safety and enhanced developer experience
- **React Query (@tanstack/react-query)**: Server state management and data fetching
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **esbuild**: Fast bundler for server-side code in production builds

### Fonts and Assets
- **Google Fonts**: Poppins for display text and Nunito for body text
- **Font Awesome**: Additional icon library for extended icon needs
- **Unsplash**: Image source for hero carousel and component imagery

### Replit Integration
- **Replit Dev Tools**: Development environment enhancements including error overlay, cartographer for code mapping, and dev banner for development feedback