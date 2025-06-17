# austinorth.com

Personal website built with React and TypeScript, deployed on GitHub Pages.

## About

This is Austin Orth's personal website featuring:
- Professional resume and work experience
- Recipe collection
- Links to GitHub and LinkedIn profiles

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS with responsive design
- **Deployment**: GitHub Pages via GitHub Actions

## Development

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/austinorth/austinorth.com.git
cd austinorth.com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions workflow in `.github/workflows/gh-pages.yaml`.

## Project Structure

```
src/
  components/
    Home.tsx      # Homepage component
    Resume.tsx    # Resume/CV component
    Recipes.tsx   # Recipe collection component
  App.tsx         # Main app component with routing
  main.tsx        # React entry point
  index.css       # Global styles
  App.css         # Component styles
```

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode**: Automatically adapts to user's system preference
- **Fast Loading**: Optimized with Vite bundling
- **SEO Friendly**: Proper meta tags and semantic HTML

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.