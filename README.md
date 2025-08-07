# Ankit Soni - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing skills, experience, and projects.

## Features

- 🚀 **High Performance**: Optimized with React.memo, useMemo, and useCallback
- 📱 **Responsive Design**: Mobile-first approach with modern CSS
- ♿ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- 🎨 **Modern UI**: Gradient effects, animations, and glassmorphism
- 🔧 **Error Handling**: Error boundaries and proper error states
- 📦 **Production Ready**: Optimized build configuration

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality and consistency

## Getting Started

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Asset Management

Images are stored directly in the `public/assets/` folder and served as static assets. The `getImageUrl()` utility provides consistent path handling.

### File Structure

```
src/
├── components/     # React components
├── data/          # JSON data files
├── utils.js       # Utility functions
└── ...

public/
└── assets/        # Static images (skills, projects, etc.)
```

## Performance Optimizations

- ✅ React.memo for component memoization
- ✅ useMemo for expensive calculations
- ✅ useCallback for event handlers
- ✅ Lazy loading for images
- ✅ Code splitting with Vite
- ✅ Optimized bundle size

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast mode support
- ✅ Reduced motion support

## Build Configuration

The project uses Vite with optimized settings for:
- CSS Modules with camelCase
- Manual chunk splitting
- Asset optimization
- Production-ready configuration
