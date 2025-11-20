# Setup Guide for Joel Chipoya Portfolio

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Images**
   
   Place your graduation photos in `public/images/`:
   - `graduation1.jpg`
   - `graduation2.jpg`
   - `graduation3.jpg`
   
   Place company logos in `public/logos/`:
   - `deblogo.png` (DEBMARINE logo)
   - `lotslogo.png` (LOTS logo)
   - `ijglogo.png` (IJG Namibia logo)
   - `mosesmedialog.png` (Moses Media House logo)
   - `titalogo.png` (Titanium Clearing logo)
   - `touclogo.png` (Lui Heavenly Touch Spa logo)

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Image Requirements

### Graduation Photos
- Recommended size: 800x1000px or similar portrait orientation
- Format: JPG or PNG
- High quality images work best

### Company Logos
- Recommended size: At least 500x500px for best quality
- Format: PNG with transparent background (preferred)
- For white logos (DEBMARINE, LOTS), the website will automatically add dark backgrounds

## Customization

### Update Contact Information
Edit `src/components/Contact.jsx` to update:
- Email addresses
- Phone numbers
- Social media links

### Add More Projects
Edit `src/components/Projects.jsx` and add new project objects to the `projects` array.

### Modify Skills
Edit `src/components/Skills.jsx` to add, remove, or modify skills in each category.

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Images not showing?
- Make sure images are in the correct folders (`public/images/` and `public/logos/`)
- Check that file names match exactly (case-sensitive)
- Clear browser cache

### Animations not working?
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (should be 16+)

## Deployment

The website can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

After building (`npm run build`), deploy the `dist` folder.

