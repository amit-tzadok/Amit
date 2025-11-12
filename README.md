# React Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Framer Motion**.

## 🛠️ Installation & Setup

### In Your Main Terminal (where Node.js works):

1. **Navigate to the project directory:**
   ```bash
   cd /Users/amitt/GitHub/Amit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser to:**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Run `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Technologies Used

- React 18.3
- Vite 5.1
- Framer Motion 11.0
- React Icons 5.0
- React Intersection Observer


**Built by Amit using React & Vite**
