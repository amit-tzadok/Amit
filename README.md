# React Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Framer Motion**.

## 🚀 Features

- ⚛️ **React 18** with modern hooks
- ⚡ **Vite** for lightning-fast development
- 🎨 **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- 🌙 **Dark Mode** toggle
- 🎯 **Intersection Observer** for scroll animations
- 💅 **Modern CSS** with custom properties
- 📦 **Component-based** architecture
- 🔥 **React Icons** for beautiful icons

## 📁 Project Structure

```
Amit/
├── public/
│   └── assets/
│       └── images/          # Add your images here
│           ├── profile.jpg
│           ├── project1.jpg
│           ├── project2.jpg
│           └── ...
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── data/
│   │   └── projectsData.js  # Edit your projects here
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

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

## 🎨 Customization Guide

### 1. Personal Information

Edit the following files:

**Hero Section** (`src/components/Hero/Hero.jsx`):
- Change your name and title
- Update social media links

**About Section** (`src/components/About/About.jsx`):
- Update your bio and description
- Modify skills if needed

**Contact Section** (`src/components/Contact/Contact.jsx`):
- Update email, phone, and location

### 2. Projects

Edit `src/data/projectsData.js`:

```javascript
export const projectsData = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: '/assets/images/your-project.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://your-live-site.com',
    githubLink: 'https://github.com/yourusername/repo'
  },
  // Add more projects...
]
```

### 3. Images

Place your images in `public/assets/images/`:

- **profile.jpg** - Your profile picture (400x400px recommended)
- **project1.jpg to project6.jpg** - Project screenshots (1200x800px recommended)

### 4. Colors & Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;     /* Main brand color */
  --secondary-color: #8b5cf6;   /* Secondary brand color */
  --accent-color: #ec4899;      /* Accent highlights */
}
```

### 5. Contact Form Integration

To connect the contact form to a backend:

1. Edit `src/components/Contact/Contact.jsx`
2. Uncomment the fetch code in `handleSubmit`
3. Replace `'YOUR_API_ENDPOINT'` with your API URL

Or use services like:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

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

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

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

## 💡 Tips

1. **Optimize Images**: Use tools like [TinyPNG](https://tinypng.com/) to compress images
2. **Update Content Regularly**: Keep your projects and skills current
3. **Test Responsiveness**: Check on multiple devices
4. **SEO**: Update meta tags in `index.html`
5. **Performance**: Use `npm run build` to see production bundle size

## 🐛 Troubleshooting

**Issue**: Icons not showing
- **Solution**: Make sure `react-icons` is installed: `npm install react-icons`

**Issue**: Images not loading
- **Solution**: Place images in `public/assets/images/` (not `src/`)

**Issue**: Dark mode not working
- **Solution**: Check browser localStorage is enabled

## 📧 Need Help?

Feel free to reach out or open an issue!

---

**Built with ❤️ by Amit using React & Vite**
