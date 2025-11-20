# Troubleshooting Guide

## Issue: Nothing is Displaying After `npm run dev`

### Step 1: Check Browser Console
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Look for any red error messages
4. Share the error messages if you see any

### Step 2: Verify Server is Running
1. Check the terminal output - you should see something like:
   ```
   VITE v5.x.x  ready in xxx ms
   ➜  Local:   http://localhost:5173/
   ```
2. Make sure you're visiting the correct URL (usually http://localhost:5173 or http://localhost:3000)

### Step 3: Check if Dependencies are Installed
Run:
```bash
npm install
```

### Step 4: Clear Cache and Reinstall
```bash
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install

# Restart dev server
npm run dev
```

### Step 5: Check Browser
1. Try a different browser (Chrome, Firefox, Edge)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode

### Step 6: Verify Files
Make sure these files exist:
- `src/main.jsx`
- `src/App.jsx`
- `src/components/` (all component files)
- `index.html`

### Step 7: Check Port Conflicts
If port 5173 is in use, Vite will try another port. Check the terminal output for the actual URL.

### Step 8: Common Issues

**Blank white page:**
- Check browser console for JavaScript errors
- Verify all imports are correct
- Make sure framer-motion is installed: `npm install framer-motion`

**Images not showing:**
- Images will show gradient backgrounds if missing (this is expected)
- Add your images to `public/images/` and `public/logos/` folders

**Styling issues:**
- Make sure CSS files are imported correctly
- Check that Google Fonts are loading (check Network tab in DevTools)

### Step 9: Debug Mode
I've added a red "App Rendered" box at the top left. If you see this, React is working but there might be a styling issue.

### Step 10: Manual Test
Create a simple test file `test.html` in the root:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>If you see this, the server is working</h1>
</body>
</html>
```
Visit `http://localhost:5173/test.html` - if this works, the issue is with React.

### Still Not Working?
1. Share the browser console errors
2. Share the terminal output from `npm run dev`
3. Check Node.js version: `node --version` (should be 16+)

