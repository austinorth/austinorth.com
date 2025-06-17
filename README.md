# austinorth.com

Personal website built with React and TypeScript, featuring a minimalist design with gruvbox color scheme.

## About

This is Austin Orth's personal website featuring:
- Professional resume with print-optimized layout
- Recipe collection
- Clean, minimalist design
- Links to GitHub and LinkedIn profiles

## Design Philosophy

The website follows minimalist design principles while maintaining the beloved gruvbox color scheme:
- **Clean Typography**: Simple, readable fonts with proper hierarchy
- **Minimal Visual Clutter**: Reduced animations, shadows, and unnecessary decorations
- **Focus on Content**: Content takes precedence over visual effects
- **Print-Friendly**: Optimized for printing, especially the resume page
- **Responsive**: Works seamlessly on all device sizes

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Pure CSS with gruvbox color palette
- **Deployment**: GitHub Pages via GitHub Actions

## Features

### Print-Optimized Resume
- Click "Print Resume" button for clean, professional printout
- Automatic color adjustment for print (dark-on-light)
- Proper page breaks and margins
- Hidden navigation and UI elements when printing
- Professional typography sizing for print media

### Minimalist Design
- Clean navigation without excessive styling
- Simple content sections with adequate white space
- Subtle color accents using gruvbox palette
- No distracting animations or effects
- Focus on readability and usability

### Responsive Layout
- Works on desktop, tablet, and mobile devices
- Flexible navigation that adapts to screen size
- Optimized content layout for different viewports

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

## Project Structure

```
src/
  components/
    Home.tsx      # Homepage with intro and about sections
    Resume.tsx    # Resume/CV with print functionality
    Recipes.tsx   # Recipe collection
  App.tsx         # Main app component with routing
  main.tsx        # React entry point
  index.css       # Global styles with gruvbox theme
  App.css         # Minimalist component styles
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions workflow in `.github/workflows/gh-pages.yaml`.

## Color Scheme

The website uses a carefully selected gruvbox color palette:
- **Background**: Dark warm grays (#282828, #3c3836)
- **Text**: Light warm tones (#ebdbb2, #d5c4a1)
- **Accents**: Orange (#fe8019), Blue (#83a598), Green (#b8bb26), Yellow (#fabd2f)

## Print Functionality

The resume page includes special print styles:
- Converts dark theme to light for printing
- Optimizes typography for print media
- Ensures proper margins and spacing
- Hides interactive elements
- Maintains professional appearance

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.