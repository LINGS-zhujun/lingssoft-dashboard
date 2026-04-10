# LINGSSOFT Dashboard

Official LINGSSOFT Dashboard built with Material Dashboard 3 PRO React

## Overview
This repository hosts the official LINGSSOFT Dashboard. The project is based on a premium template from Creative Tim, featuring AI, security, and education solution management interfaces.

---

## Quick Start

### Prerequisites
- Node.js : v18+ (LTS recommended)
- Package Manager : npm

### Installation
```bash
# Install dependencies
npm install
```

### Development
```bash
# Start the development server
npm start
```
The application will be available at http://localhost:3000.

### Production Build
```bash
# Create a production bundle
npm run build
```
The output will be generated in the ./build/ directory.

---

## Deployment (GitHub Pages)

This project is configured to be hosted on GitHub Pages.

### Deployment URL
[http://LINGS-nenji.github.io/lingssoft-dashboard](http://LINGS-nenji.github.io/lingssoft-dashboard)

### How to Deploy
To update the live website, run:
```bash
npm run deploy
```
> [!NOTE]
> This command will automatically:
> 1. Run npm run build (via predeploy)
> 2. Push the contents of the build folder to the gh-pages branch.

---

## Maintenance Scripts

- Linting: npm run lint - Check and fix code style issues.
- Clean Reinstall: npm run install:clean - Remove node_modules and re-install all dependencies.

---

## License & Notices

This project uses a paid Creative Tim premium template. 
- All template sources and design assets remain under Creative Tim copyright.
- Current License: Freelancer.
- Redistribution or reselling of the template files is strictly prohibited.
- For full terms, visit: [https://www.creative-tim.com/license](https://www.creative-tim.com/license)

---

## Future Roadmap
- [ ] Migrate from CRA (Create React App) to Vite for faster builds and better development experience.
- [ ] Implement full i18n support (In progress).
- [ ] Integrate dark mode features.
