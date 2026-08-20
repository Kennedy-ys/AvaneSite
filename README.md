# AVANE-WEBSITE

A modern React and Vite-based corporate website designed to showcase company services, projects, training programs, team expertise, and professional solutions across multiple domains including Software Development, Cyber Security, Data Analysis, UI/UX Design, Project Management, Research, Graphic Design, and Digital Marketing.

---

# Table of Contents

1. Project Overview
2. Technology Stack
3. Project Architecture
4. Folder Structure
5. Entry Point Flow
6. Core Features
7. Pages
8. Components
9. State Management
10. Data Management
11. Assets
12. Styling
13. Development Workflow
14. Build Process
15. Future Improvements
16. Best Practices

---

# Project Overview

AVANE-WEBSITE is a React single-page application (SPA) built using Vite. The application follows a modular architecture that separates pages, reusable components, UI elements, hooks, contexts, and static data.

The project is designed to be:

- Scalable
- Maintainable
- Reusable
- Modular
- Responsive
- Theme-aware

The architecture allows developers to easily add new pages, sections, services, and features without affecting existing functionality.

---

# Technology Stack

## Frontend

- React.js
- JavaScript (ES6+)
- JSX
- Tailwind CSS

## Build Tool

- Vite

## State Management

- React Context API
- Custom Hooks

## Development Tools

- ESLint
- npm

---

# Project Architecture

The project follows a layered component architecture.

```text
Application
│
├── Providers
│
├── Contexts
│
├── Pages
│
├── Sections
│
├── Layout Components
│
├── UI Components
│
├── Data Layer
│
└── Assets
```

### Architecture Flow

```text
main.jsx
   ↓
ThemeProviders
   ↓
App.jsx
   ↓
Pages
   ↓
Sections
   ↓
Reusable Components
   ↓
UI Components
```

---

# Folder Structure

```text
AVANE-WEBSITE/
│
├── .vscode/
│
├── dist/
│
├── node_modules/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── svgs/
│   │
│   ├── components/
│   │   │
│   │   ├── layouts/
│   │   │   ├── Footer.jsx
│   │   │   ├── MobileNavbar.jsx
│   │   │   └── NavBar.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── Call-To-Action.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── LogoMarquee.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ServiceSection.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   ├── TestimonialSection.jsx
│   │   │   └── Timeline.jsx
│   │   │
│   │   └── ui/
│   │       ├── AnimatedMenu.jsx
│   │       ├── BreadCrums.jsx
│   │       ├── Button.jsx
│   │       ├── Logo.jsx
│   │       ├── ScrollToTop.jsx
│   │       └── ThemeToggle.jsx
│   │
│   ├── contexts/
│   │   └── ThemeContext.js
│   │
│   ├── data/
│   │   ├── capabilities.js
│   │   ├── highlights.js
│   │   ├── marquee.js
│   │   ├── projects.js
│   │   └── timeline.js
│   │
│   ├── hooks/
│   │   └── useTheme.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Academy.jsx
│   │   ├── Blog.jsx
│   │   ├── ComingSoon.jsx
│   │   ├── Contact.jsx
│   │   ├── Cybersecurity.jsx
│   │   ├── DataAnalysis.jsx
│   │   ├── Development.jsx
│   │   ├── GraphicsDesign.jsx
│   │   ├── Home.jsx
│   │   ├── ProjectManagement.jsx
│   │   ├── Research.jsx
│   │   ├── SocialMediaMarketing.jsx
│   │   └── UIUXDesign.jsx
│   │
│   ├── providers/
│   │   └── ThemeProviders.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

# Entry Point Flow

## index.html

The HTML entry file used by Vite.

Contains the root container:

```html
<div id="root"></div>
```

---

## main.jsx

Application bootstrap file.

Responsibilities:

- Initializes React
- Imports global styles
- Sets up Providers
- Renders the application

Flow:

```text
main.jsx
    ↓
ThemeProviders
    ↓
App.jsx
```

---

## App.jsx

The root application component.

Responsibilities:

- Render global layouts
- Manage routes/pages
- Initialize global functionality

Flow:

```text
App
├── Navbar
├── Pages
├── Footer
└── Global Components
```

---

# Core Features

## Responsive Design

The website supports:

- Desktop screens
- Tablets
- Mobile devices

Implemented using:

- Tailwind CSS
- Responsive layouts
- Mobile navigation

---

## Theme Management

Users can switch between themes.

Features:

- Global theme state
- Theme persistence
- Light/Dark mode support

Files involved:

```text
contexts/ThemeContext.js
providers/ThemeProviders.jsx
hooks/useTheme.js
components/ui/ThemeToggle.jsx
```

---

## Reusable Component System

The application uses a reusable component architecture.

Benefits:

- Consistency
- Reduced code duplication
- Easy maintenance
- Better scalability

---

## Dynamic Data Rendering

Static content is separated from UI logic.

Benefits:

- Centralized content management
- Easier updates
- Better maintainability

---

# State Management

## ThemeContext

**File**

```text
src/contexts/ThemeContext.js
```

### Responsibilities

- Store theme state
- Provide theme state globally
- Manage theme switching

Example Concept:

```javascript
ThemeContext
├── theme
└── toggleTheme()
```

---

## ThemeProviders

**File**

```text
src/providers/ThemeProviders.jsx
```

### Responsibilities

- Wrap the application
- Inject ThemeContext globally

Flow:

```text
ThemeProviders
      ↓
ThemeContext
      ↓
All Components
```

---

## useTheme Hook

**File**

```text
src/hooks/useTheme.js
```

### Purpose

Provides a clean interface for consuming theme-related functionality.

Example Usage

```javascript
const useTheme = () => useContext(ThemeContext);
```

---

# Data Layer

The project stores content in independent data files.

## capabilities.js

Stores:

- Company capabilities
- Service offerings
- Expertise information

---

## highlights.js

Stores:

- Statistics
- Achievements
- Key business highlights

---

## marquee.js

Stores:

- Logos
- Partners
- Sponsors
- Clients

---

## projects.js

Stores:

- Project portfolio information
- Case study details
- Project metadata

---

## timeline.js

Stores:

- Company milestones
- Events
- Organizational history

---

# Pages

Pages represent standalone screens within the application.

---

## Home Page

**File**

```text
pages/Home.jsx
```

### Purpose

Landing page of the website.

### Main Sections

- Hero Section
- About Preview
- Services
- Projects
- Timeline
- Testimonials
- Call To Action

---

## About Page

**File**

```text
pages/About.jsx
```

### Purpose

Provides company information.

### Features

- Mission
- Vision
- Team Information
- Company History

---

## Contact Page

**File**

```text
pages/Contact.jsx
```

### Features

- Contact Form
- Social Links
- Company Contact Information

---

## Blog Page

**File**

```text
pages/Blog.jsx
```

### Purpose

Displays articles and company insights.

---

## Academy Page

**File**

```text
pages/Academy.jsx
```

### Purpose

Showcases learning opportunities and training programs.

---

## Development Page

**File**

```text
pages/Development.jsx
```

### Purpose

Software development services and solutions.

---

## Data Analysis Page

**File**

```text
pages/DataAnalysis.jsx
```

### Purpose

Business Intelligence and Data Analytics services.

---

## Cyber Security Page

**File**

```text
pages/Cybersecurity.jsx
```

### Purpose

Security solutions and risk management services.

---

## Graphics Design Page

**File**

```text
pages/GraphicsDesign.jsx
```

### Purpose

Graphic design and branding services.

---

## UI/UX Design Page

**File**

```text
pages/UIUXDesign.jsx
```

### Purpose

User Interface and User Experience services.

---

## Project Management Page

**File**

```text
pages/ProjectManagement.jsx
```

### Purpose

Project planning and execution services.

---

## Research Page

**File**

```text
pages/Research.jsx
```

### Purpose

Research and analytical services.

---

## Social Media Marketing Page

**File**

```text
pages/SocialMediaMarketing.jsx
```

### Purpose

Digital marketing and social media strategy services.

---

## Coming Soon Page

**File**

```text
pages/ComingSoon.jsx
```

### Purpose

Placeholder page for future content or services.

---

# Layout Components

Layout components define the global application structure.

---

## Navbar

**File**

```text
components/layouts/NavBar.jsx
```

### Responsibilities

- Primary navigation
- Route links
- Theme toggle integration

---

## MobileNavbar

**File**

```text
components/layouts/MobileNavbar.jsx
```

### Responsibilities

- Mobile menu
- Responsive navigation
- Simplified user experience

---

## Footer

**File**

```text
components/layouts/Footer.jsx
```

### Responsibilities

- Quick links
- Contact information
- Copyright notice
- Social media links

---

# Section Components

Reusable page sections.

---

## HeroSection

Landing area of key pages.

Contains:

- Main headline
- Description
- BreadCrumbs

---

## AboutSection

Displays organization overview.

---

## ServiceSection

Displays company services.

---

## Projects

Displays portfolio projects.

---

## Timeline

Displays milestones and achievements.

---

## TeamSection

Displays team members and expertise.

---

## TestimonialSection

Displays client reviews and testimonials.

---

## Courses

Displays available learning resources.

---

## Call-To-Action

Prompts users to take action.

Examples:

- Contact Us
- Start a Project
- Enroll Now

---

## LogoMarquee

Displays scrolling logo animation.

Useful for:

- Partners
- Clients
- Sponsors
- Logos

---

# UI Components

Small reusable components used throughout the application.

---

## Button

Reusable button component.

Capabilities:

- Customizable styles

---

## Logo

Centralized logo rendering component.

---

## ThemeToggle

Handles theme switching.

---

## AnimatedMenu

An animated hamburger menu for mobile navigation.

---

## ScrollToTop

Automatically scrolls page to the top after navigation.

---

## BreadCrums

Displays navigation hierarchy.

Example:

```text
Home > Services > Development
```

---

# Assets

## Images

Location:

```text
src/assets/images
```

Used for:

- Hero banners
- Team images
- Project previews
- Marketing content

---

## SVGs

Location:

```text
src/assets/svgs
```

Used for:

- Icons
- Logos
- Vector illustrations

---

# Styling

## Global Styles

**File**

```text
src/index.css
```

### Responsibilities

- Global styling
- Typography
- Layout utilities
- Theme variables

---

# Build and Deployment

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build Production Version

```bash
npm run build
```

This generates:

```text
dist/
```

which contains optimized production files.

---

## Preview Production Build

```bash
npm run preview
```

---

## Run ESLint

```bash
npm run lint
```

---

# Tooling Configuration

## vite.config.js

Configures:

- Build process
- React integration
- Performance optimization
- Development server

---

## eslint.config.js

Provides:

- Code quality rules
- React best practices
- Linting standards

---

# Best Practices

## Naming Convention

### Pages

```text
PascalCase
```

Example:

```text
Home.jsx
Blogs.jsx
Development.jsx
```

### Components

```text
PascalCase
```

Example:

```text
HeroSection.jsx
TeamSection.jsx
MobileNavbar.jsx
```

### Hooks

```text
useCamelCase
```

Example:

```text
useTheme.js
```

### Contexts

```text
PascalCaseContext
```

Example:

```text
ThemeContext.js
```

### Data Files

```text
camelCase.js
```

Example:

```text
projects.js
timeline.js
```

---

# Future Improvements

Potential enhancements include:

- React Router implementation
- CMS integration
- Backend API integration
- Authentication system
- Blog management dashboard
- SEO optimization
- Analytics integration
- Unit testing with Jest
- TypeScript migration
- Accessibility improvements (WCAG)
- Lazy loading and code splitting
- Performance optimization

---

# Conclusion

AVANE-WEBSITE is a modular React application built using Vite and modern frontend development principles. The project leverages reusable components, Context API-based theme management, custom hooks, data-driven content organization, and responsive design patterns to deliver a scalable and maintainable web application. The architecture promotes separation of concerns, code reusability, and ease of future expansion, making it suitable for corporate websites, technology agencies, consulting firms, educational platforms, and professional service organizations.