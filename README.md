# Joel Chipoya Kalimbwe - Portfolio Website

A modern, animated, and responsive portfolio website showcasing my work as a Software Engineer, Cloud Computing Specialist, Data Scientist, and Graphic Designer.

## Features

- 🎨 **Modern Design**: Unique and stylish design that stands out from typical portfolios
- ✨ **Smooth Animations**: Framer Motion animations for engaging user experience
- 📱 **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- 🎯 **Interactive Sections**: 
  - Hero/Landing page with personal images
  - About section with detailed information
  - Experience section with company cards and logos
  - Projects showcase
  - Comprehensive Skills section
  - Contact information with icons

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd joel-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your images:
   - Place graduation photos in `public/images/`:
     - `graduation1.jpg`
     - `graduation2.jpg`
     - `graduation3.jpg`
   - Place company logos in `public/logos/`:
     - `deblogo.png`
     - `lotslogo.png`
     - `ijglogo.png`
     - `mosesmedialog.png`
     - `titalogo.png`
     - `touclogo.png`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
joel-portfolio/
├── public/
│   ├── images/          # Personal photos
│   └── logos/           # Company and project logos
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- Update personal information in `src/components/About.jsx`
- Modify experience details in `src/components/Experience.jsx`
- Add/remove projects in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`
- Change contact information in `src/components/Contact.jsx`

## License

This project is private and personal.

## Contact

Joel Chipoya Kalimbwe
- Email: joelkalimbwe3@gmail.com
- Phone: 0812320168
- Location: Windhoek, Namibia

