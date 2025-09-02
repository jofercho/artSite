# Art Site

A responsive web application for showcasing and exploring art pieces with an interactive user interface.

## 🎨 Overview

Art Site is a client-side web application built with HTML, CSS, and JavaScript that provides an elegant platform for displaying artwork. The site features a clean, modern design with interactive elements that enhance the user experience when browsing art collections.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Gallery**: Dynamic image gallery with smooth transitions
- **Art Filtering**: Filter artworks by category, style, or artist
- **Lightbox View**: Click on any artwork to view in full-screen mode
- **Smooth Animations**: CSS and JavaScript animations for enhanced user experience
- **Fast Loading**: Optimized images and efficient JavaScript for quick page loads

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox/Grid layouts
- **Vanilla JavaScript**: Interactive functionality without external frameworks
- **Responsive Design**: CSS media queries for mobile-first approach

## 📁 Project Structure

```
artSite/
├── index.html          # Main HTML page
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Mobile responsive styles
├── js/
│   ├── main.js         # Core JavaScript functionality
│   ├── gallery.js      # Gallery interactions
│   └── animations.js   # Animation effects
├── images/
│   ├── artworks/       # Art piece images
│   └── icons/          # UI icons and graphics
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jofercho/artSite.git
```

2. Navigate to the project directory:
```bash
cd artSite
```

3. Open `index.html` in your web browser, or serve it using a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Visit `http://localhost:8000` in your browser

## 💻 Usage

- **Browse Gallery**: Navigate through the art collection using the main gallery view
- **Filter Artworks**: Use the filter controls to find specific types of art
- **View Details**: Click on any artwork to see it in full resolution
- **Mobile Navigation**: Use touch gestures on mobile devices for smooth browsing

## 🎯 Key JavaScript Functions

- `initializeGallery()`: Sets up the main gallery display
- `filterArtworks(category)`: Filters displayed artworks by category
- `openLightbox(imageUrl)`: Opens selected artwork in lightbox view
- `handleResponsiveMenu()`: Manages mobile navigation menu

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

To customize the art site for your needs:

1. **Add New Artworks**: Place images in `/images/artworks/` and update the artwork data in `js/main.js`
2. **Modify Styling**: Edit `css/style.css` for visual customizations
3. **Change Layout**: Update HTML structure in `index.html`
4. **Add Features**: Extend functionality in the JavaScript files

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 To-Do

- [ ] Add search functionality
- [ ] Implement artwork favoriting
- [ ] Add artist information pages
- [ ] Include social sharing features
- [ ] Add loading animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**jofercho**

- GitHub: [@jofercho](https://github.com/jofercho)

## 🙏 Acknowledgments

- Thanks to all the artists whose work is featured
- Inspiration from modern art gallery websites
- Community feedback and suggestions

---

⭐ Star this repo if you found it helpful!
