# SunSet Metal Forming Website

A comprehensive Next.js 14 website for SunSet Metal Forming, a Canadian metal roofing company specializing in premium metal roofing solutions.

## 🏗️ Project Overview

This website showcases SunSet Metal Forming's complete range of metal roofing products, colors, and services. Built with modern web technologies to provide an exceptional user experience across all devices.

### Key Features

- **3D Product Visualization** - Interactive 3D models of metal roofing profiles
- **Video Hero Sections** - Engaging video backgrounds showcasing installations
- **Comprehensive Product Catalog** - Detailed product pages with specifications
- **Color Selection System** - Interactive color grid with detailed information
- **Project Gallery** - Showcase of completed installations across Canada
- **Technical Resources** - Installation guides, maintenance manuals, and documentation
- **Quote Request System** - Comprehensive project estimation forms
- **Search Functionality** - Advanced search across products, colors, and resources

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Models**: Google Model Viewer
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🎨 Design System

### Brand Colors
- **SunSet Orange**: `#ef4444` - Primary brand color
- **Forest Green**: `#22c55e` - Secondary color
- **Metal Dark**: `#374151` - Dark accents
- **Metal Light**: `#f9fafb` - Light backgrounds

### Typography
- **Font**: Geist (Vercel's optimized font family)
- **Weights**: Regular (400), Medium (500), Bold (700)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── about/             # About page
│   ├── colours/           # Color showcase
│   ├── contact/           # Contact form
│   ├── gallery/           # Project gallery
│   ├── products/          # Product catalog
│   │   └── profiles/      # Product detail pages
│   ├── quote/             # Quote request
│   ├── resources/         # Technical resources
│   └── search/            # Search functionality
├── components/
│   ├── 3d/                # 3D model components
│   ├── layout/            # Header, footer, navigation
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── data/                  # Static data and content
├── types/                 # TypeScript definitions
└── lib/                   # Utility functions

public/
├── images/                # Image assets
├── models/                # 3D model files
└── videos/                # Video assets
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sunset-metal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - If port 3000 is busy, Next.js will use the next available port

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📱 Pages & Features

### Core Pages
- **Homepage** (`/`) - Hero video, featured products, company overview
- **Products** (`/products`) - Complete product catalog with categories
- **Colors** (`/colours`) - Interactive color selection system
- **Gallery** (`/gallery`) - Project showcase with filtering
- **About** (`/about`) - Company story, team, values
- **Contact** (`/contact`) - Contact form and company information
- **Quote** (`/quote`) - Comprehensive project estimation
- **Resources** (`/resources`) - Technical guides and documentation
- **Search** (`/search`) - Site-wide search functionality

### Product Categories
- **Profiles**: Standing Seam, Corrugated, Snaplock, Architectural
- **Flashings**: Roof flashings, Wall flashings, Custom solutions
- **Accessories**: Clips, Closures, Fasteners
- **Materials**: Extra materials and components

### Interactive Features
- 3D model visualization toggle
- Video backgrounds with parallax effects
- Color grid with modal details
- Project gallery with lightbox
- Advanced search with filtering
- Mobile-responsive navigation

## 🎯 Content Management

### Product Data
Product information is managed in `src/data/index.ts`:
- Product specifications
- Color definitions
- Navigation structure
- Company information

### Media Assets
- **Images**: Stored in `public/images/` with organized subdirectories
- **Videos**: Stored in `public/videos/` for hero sections
- **3D Models**: Stored in `public/models/` (.glb format recommended)

### Adding New Products
1. Add product data to `src/data/index.ts`
2. Create product images in appropriate directories
3. Add 3D models if available
4. Update navigation structure if needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables if needed
4. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
npm run start
```

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with App Router
- **Font Optimization**: Optimized font loading with `next/font`
- **SEO Optimization**: Comprehensive meta tags and structured data
- **Mobile Performance**: Responsive design with touch-friendly interactions

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  'sunset-orange': '#ef4444',
  'forest-green': '#22c55e',
  'metal-dark': '#374151',
  'metal-light': '#f9fafb',
}
```

### Company Information
Update company details in `src/data/index.ts`:
```typescript
export const companyInfo = {
  name: 'SunSet Metal Forming',
  contact: { ... },
  services: [ ... ]
}
```

## 📝 Content Guidelines

### Product Descriptions
- Focus on benefits and applications
- Include technical specifications
- Highlight Canadian climate suitability
- Use consistent terminology

### Image Requirements
- **Products**: High-resolution, consistent lighting
- **Gallery**: Before/after shots, multiple angles
- **Team**: Professional headshots
- **Technical**: Clear diagrams and close-ups

### SEO Best Practices
- Descriptive page titles
- Meta descriptions under 160 characters
- Alt text for all images
- Structured data markup

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
- Next.js will automatically use the next available port
- Check terminal output for the correct URL

**Images not loading**
- Ensure images are in the correct `public/` directory
- Check file paths and extensions
- Verify image file permissions

**3D models not displaying**
- Ensure `.glb` files are properly formatted
- Check browser console for errors
- Verify model file paths

### Development Tips
- Use browser dev tools for responsive testing
- Check console for any JavaScript errors
- Use Next.js built-in debugging features
- Test on multiple devices and browsers

## 📞 Support

For technical support or questions about the website:
- **Email**: jonatonu@gmail.com
- **Phone**: 780-554-7475
- **Website**: www.sunsetmetal.com

## 📄 License

This project is proprietary software for SunSet Metal Forming. All rights reserved.

---

Built with ❤️ for Canadian metal roofing excellence.
