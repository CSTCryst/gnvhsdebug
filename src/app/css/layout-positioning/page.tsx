// src/app/css/layout-positioning/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function LayoutPositioningPage() {
    return (
        <div className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <div className="text-sm mb-8 text-text-light flex items-center">
    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
        <span className="mx-2">/</span>
        <span className="text-text-secondary">Layout and Positioning</span>
    </div>

    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
        CSS Layout and Positioning
    </h1>

    <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
    <div className="flex items-center text-sm">
    <BookOpen size={16} className="text-primary-dark mr-2" />
        <span>CSS Basics</span>
    <span className="mx-2 text-gray-300">•</span>
    <span className="text-text-light">Reading time: 9 min</span>
    </div>
    </div>

    <div className="p-6 md:p-8">
        {/* Introduction */}
        <section className="mb-12">
    <div className="prose max-w-none">
    <p className="text-lg text-text-secondary mb-4">
        Layout and positioning are essential aspects of CSS that determine how elements are arranged on a webpage. From traditional methods to modern techniques, CSS offers various ways to create complex layouts.
    </p>
    <p className="text-text-secondary">
        In this tutorial, you'll learn about different layout models, positioning techniques, and how to create responsive designs that work across all screen sizes.
    </p>
    </div>
    </section>

    {/* Table of Contents */}
    <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
    <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
    <ul className="space-y-2">
    <li>
        <a href="#display-property" className="text-primary-dark hover:text-dark transition-colors flex items-center">
    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
    Display Property
    </a>
    </li>
    <li>
    <a href="#positioning" className="text-primary-dark hover:text-dark transition-colors flex items-center">
    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
    Positioning
    </a>
    </li>
    <li>
    <a href="#flexbox" className="text-primary-dark hover:text-dark transition-colors flex items-center">
    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
    Flexbox
    </a>
    </li>
    <li>
    <a href="#grid" className="text-primary-dark hover:text-dark transition-colors flex items-center">
    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
    CSS Grid
    </a>
    </li>
    <li>
    <a href="#responsive-layout" className="text-primary-dark hover:text-dark transition-colors flex items-center">
    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
    Responsive Layout
    </a>
    </li>
    <li>
    <a href="#try-it" className="text-primary-dark hover:text-dark transition-colors flex items-center">
    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
    Try It Yourself
    </a>
    </li>
    </ul>
    </section>

    {/* Display Property */}
    <section id="display-property" className="mb-12 scroll-mt-20">
    <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
    <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
        1
        </span>
    Display Property
    </h2>
    <div className="prose max-w-none">
    <p className="text-text-secondary mb-4">
        The <code>display</code> property determines how an element is rendered on the page and how it interacts with other elements. It's fundamental to CSS layout.
        </p>
        </div>

        <CodeBlock
    code={`/* Common display values */

/* Block elements take full width and stack vertically */
.block {
  display: block;
}

/* Inline elements flow horizontally and wrap */
.inline {
  display: inline;
}

/* Combines block and inline features */
.inline-block {
  display: inline-block;
  width: 150px;  /* Can have width/height unlike inline */
  height: 80px;
}

/* Hides the element completely */
.none {
  display: none;
}

/* Visually hidden but still takes up space */
.invisible {
  visibility: hidden;
}

/* Makes element a flex container */
.flex-container {
  display: flex;
}

/* Makes element a grid container */
.grid-container {
  display: grid;
}

/* Makes element behave like a table */
.table {
  display: table;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
}`}
    />

    <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
    <h3 className="text-lg font-semibold text-dark mb-4">Display Values Comparison:</h3>
    <div className="space-y-8">
    <div>
        <p className="font-semibold text-dark mb-2">Block vs. Inline:</p>
    <div className="bg-gray-100 p-4 rounded-md">
    <div className="bg-primary-light/40 p-2 mb-4 rounded-md text-text-secondary text-center">
        Block element (takes full width)
    </div>
    <div className="bg-primary-light/60 p-2 mb-4 rounded-md text-text-secondary text-center">
        Another block element
    </div>
    <span className="bg-green-100 p-2 rounded-md text-text-secondary">Inline element</span>
    <span className="bg-green-100 p-2 rounded-md text-text-secondary mx-2">Another inline element</span>
    <span className="bg-green-100 p-2 rounded-md text-text-secondary">Third inline element</span>
    </div>
    </div>

    <div>
    <p className="font-semibold text-dark mb-2">Inline-Block:</p>
    <div className="bg-gray-100 p-4 rounded-md">
    <div className="inline-block bg-blue-100 p-2 rounded-md text-text-secondary mr-4 w-24 h-24 align-middle text-center">
    <div className="h-full flex items-center justify-center">Inline-Block 1</div>
    </div>
    <div className="inline-block bg-blue-100 p-2 rounded-md text-text-secondary mr-4 w-24 h-16 align-middle text-center">
    <div className="h-full flex items-center justify-center">Inline-Block 2</div>
    </div>
    <div className="inline-block bg-blue-100 p-2 rounded-md text-text-secondary w-24 h-20 align-middle text-center">
    <div className="h-full flex items-center justify-center">Inline-Block 3</div>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
    <div className="mr-4 text-primary-dark">
    <Info size={24} />
    </div>
    <div>
    <h3 className="font-semibold text-dark mb-2">Block vs. Inline Elements:</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <p className="font-semibold text-text-secondary mb-1">Block Elements:</p>
    <ul className="list-disc list-inside space-y-1 text-text-secondary">
        <li>Take up full width available</li>
    <li>Start on a new line</li>
    <li>Can have width/height set</li>
    <li>Examples: div, p, h1, section</li>
    </ul>
    </div>
    <div>
    <p className="font-semibold text-text-secondary mb-1">Inline Elements:</p>
    <ul className="list-disc list-inside space-y-1 text-text-secondary">
        <li>Take only needed width</li>
    <li>Do not force new lines</li>
    <li>Ignore width/height settings</li>
    <li>Examples: span, a, strong, em</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Position Property */

        /* Default positioning in the normal flow */
    .static {
        position: static;
    }

        /* Positioned relative to its normal position */
    .relative {
        position: relative;
        top: 20px;      /* Shifted down 20px from normal position */
        left: 20px;     /* Shifted right 20px from normal position */
    }

        /* Positioned relative to nearest positioned ancestor */
    .absolute {
        position: absolute;
        top: 50px;      /* 50px from top of positioned parent */
        right: 30px;    /* 30px from right of positioned parent */
    }

        /* Positioned relative to viewport */
    .fixed {
        position: fixed;
        bottom: 20px;   /* 20px from bottom of viewport */
        right: 20px;    /* 20px from right of viewport */
    }

        /* Like fixed, but can be contained by a parent */
    .sticky {
        position: sticky;
        top: 0;         /* Sticks to top when scrolled to */
    }

        /* Control stacking order with z-index */
    .back {
        z-index: 1;     /* Lower values are more in the back */
    }

    .front {
        z-index: 2;     /* Higher values are more in the front */
    }ing */}
    <section id="positioning" className="mb-12 scroll-mt-20">
    <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
    <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
        2
        </span>
        Positioning
        </h2>
        <div className="prose max-w-none">
    <p className="text-text-secondary mb-4">
        The <code>position</code> property determines how an element is positioned in the document flow. It works with the <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties to precisely control element placement.
    </p>
    </div>

    <CodeBlock
        code={`/* Position
<div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
<h3 className="text-lg font-semibold text-dark mb-4">Responsive Layout Example:</h3>
<div className="bg-gray-50 p-4 rounded-md">
<p className="text-text-secondary mb-3">This layout changes based on screen size:</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-primary-light/40 p-4 rounded-md">
<p className="font-semibold">Column 1</p>
<p className="text-sm text-text-secondary">Full width on mobile, 1/3 width on desktop</p>
</div>
<div className="bg-primary-light/40 p-4 rounded-md">
<p className="font-semibold">Column 2</p>
<p className="text-sm text-text-secondary">Full width on mobile, 1/3 width on desktop</p>
</div>
<div className="bg-primary-light/40 p-4 rounded-md">
<p className="font-semibold">Column 3</p>
<p className="text-sm text-text-secondary">Full width on mobile, 1/3 width on desktop</p>
</div>
</div>
</div>
<p className="text-text-secondary text-sm mt-4">
    This is implemented using CSS Grid with the following CSS:
    </p>
    <pre className="bg-gray-50 p-3 rounded-md mt-2 text-sm overflow-x-auto">
<code className="text-text-secondary">{`.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}`}</code>
</pre>
</div>

<div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
<div className="mr-4 text-primary-dark">
<Info size={24} />
</div>
<div>
<h3 className="font-semibold text-dark mb-2">Mobile-First vs Desktop-First:</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
<div>
    <p className="font-semibold text-text-secondary mb-1">Mobile-First:</p>
<ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li>Base styles for mobile</li>
                        <li>Use <code>min-width</code> in media queries</li>
<li>Progressively enhance for larger screens</li>
<li>Better for performance and focus</li>
</ul>
</div>
<div>
<p className="font-semibold text-text-secondary mb-1">Desktop-First:</p>
<ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li>Base styles for desktop</li>
                        <li>Use <code>max-width</code> in media queries</li>
<li>Progressively reduce for smaller screens</li>
<li>Easier if you have a desktop-focused design</li>
</ul>
</div>
</div>
</div>
</div>
</section>

{/* Try It Yourself */}
<section id="try-it" className="mb-12 scroll-mt-20">
<h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
<span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
    6
    </span>
Try It Yourself
</h2>
<div className="prose max-w-none">
<p className="text-text-secondary mb-4">
    Practice with layout and positioning by styling this HTML example. The code creates a responsive webpage layout with a header, sidebar, main content, and footer.
</p>
</div>

<div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
<div className="bg-dark text-white p-3 flex items-center justify-between">
<div className="flex items-center">
<div className="flex space-x-1.5 mr-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span className="text-xs font-mono">index.html</span>
    </div>
    <span className="text-xs text-gray-400">Example Code</span>
</div>

<CodeBlock
code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Layout Practice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="page-container">
    <header class="header">
      <div class="logo">CSS Layout</div>
      <nav class="nav">
        <ul>
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <div class="main-content">
      <aside class="sidebar">
        <h3>Categories</h3>
        <ul>
          <li><a href="#">CSS Basics</a></li>
          <li><a href="#">Layout Techniques</a></li>
          <li><a href="#">Responsive Design</a></li>
          <li><a href="#">Advanced CSS</a></li>
        </ul>

        <div class="sidebar-widget">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
      </aside>

      <main class="content">
        <section class="hero">
          <h1>Master CSS Layout and Positioning</h1>
          <p class="lead">Learn how to create beautiful, responsive layouts for your web projects.</p>
        </section>

        <section class="card-grid">
          <div class="card">
            <div class="card-header">Display Property</div>
            <div class="card-body">
              <p>Learn about block, inline, flex, grid, and other display values.</p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Positioning</div>
            <div class="card-body">
              <p>Master static, relative, absolute, fixed, and sticky positioning.</p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Flexbox</div>
            <div class="card-body">
              <p>Create one-dimensional layouts with flexbox container and items.</p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">CSS Grid</div>
            <div class="card-body">
              <p>Design complex two-dimensional layouts with CSS Grid.</p>
            </div>
          </div>
        </section>

        <section class="feature">
          <div class="feature-content">
            <h2>Why Master Layout Techniques?</h2>
            <p>Strong layout skills are essential for any web developer. Modern CSS makes it easier than ever to create complex designs that adapt to any screen size.</p>
            <button class="btn">Learn More</button>
          </div>
          <div class="feature-image">
            <!-- Placeholder for an image -->
            <div class="image-placeholder"></div>
          </div>
        </section>
      </main>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About</h3>
          <p>Learn CSS layout techniques to improve your web development skills.</p>
        </div>

        <div class="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            <!-- Social media icons would go here -->
            <a href="#" class="social-icon">X</a>
            <a href="#" class="social-icon">F</a>
            <a href="#" class="social-icon">I</a>
            <a href="#" class="social-icon">L</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 CSS Layout Practice. All rights reserved.</p>
      </div>
    </footer>
  </div>
</body>
</html>`}
/>
</div>

<div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
<div className="bg-dark text-white p-3 flex items-center justify-between">
<div className="flex items-center">
<div className="flex space-x-1.5 mr-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span className="text-xs font-mono">styles.css</span>
    </div>
    <span className="text-xs text-gray-400">Example Code</span>
</div>

<CodeBlock
code={`/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f8f8;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #3498db;
}

a:hover {
  color: #2980b9;
}

/* Layout */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header */
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
}

.nav ul {
  display: flex;
}

.nav li {
  margin-left: 20px;
}

.nav a {
  color: #333;
  font-weight: 500;
}

.nav a.active, .nav a:hover {
  color: #3498db;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin-bottom: 5px;
  border-radius: 3px;
}

/* Main Content */
.main-content {
  display: flex;
  flex: 1;
  padding: 20px;
}

/* Sidebar */
.sidebar {
  width: 250px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 20px;
}

.sidebar h3 {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #2c3e50;
}

.sidebar ul {
  margin-bottom: 30px;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar-widget {
  margin-top: 30px;
}

/* Content */
.content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.hero {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.lead {
  font-size: 1.2rem;
  color: #7f8c8d;
}

/* Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #3498db;
  color: white;
  padding: 15px;
  font-weight: bold;
}

.card-body {
  padding: 15px;
}

/* Feature Section */
.feature {
  display: flex;
  margin-top: 30px;
  gap: 30px;
  align-items: center;
}

.feature-content {
  flex: 1;
}

.feature h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
}

.feature-image {
  flex: 1;
}

.image-placeholder {
  background-color: #ecf0f1;
  border-radius: 8px;
  height: 200px;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 20px 20px;
  margin-top: 30px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
  padding: 0 15px;
}

.footer h3 {
  border-bottom: 1px solid #3a546e;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.footer a {
  color: #ecf0f1;
}

.footer a:hover {
  color: #3498db;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: #3a546e;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #3a546e;
  font-size: 0.9rem;
  color: #bdc3c7;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .header {
    flex-wrap: wrap;
  }
  
  .nav {
    display: none; /* Hide on mobile, would be shown with JavaScript */
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .feature {
    flex-direction: column;
  }
  
  .footer-content {
    flex-direction: column;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}`}
/>
</div>

<div className="p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
<div className="mr-4 text-primary-dark">
<Info size={24} />
</div>
<div>
<h3 className="font-semibold text-dark mb-2">Pro Tip:</h3>
<p className="text-text-secondary">
    Combining different layout techniques can create powerful and flexible designs. For example, you might use CSS Grid for the overall page layout, Flexbox for navigation components, and positioning for overlays or tooltips. Choose the right tool for each specific layout challenge.
</p>
</div>
</div>
</section>

{/* Summary */}
<section className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
<h2 className="text-xl font-bold text-dark mb-4">Summary</h2>
    <ul className="space-y-2">
<li className="flex items-start">
<div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
<span className="text-text-secondary">The display property controls how elements are rendered in the layout</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
<span className="text-text-secondary">Positioning (static, relative, absolute, fixed, sticky) allows precise control of element placement</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
<span className="text-text-secondary">Flexbox is ideal for one-dimensional layouts and aligning items in rows or columns</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
<span className="text-text-secondary">CSS Grid provides powerful tools for creating complex two-dimensional layouts</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
<span className="text-text-secondary">Responsive design techniques ensure layouts adapt to different screen sizes</span>
</li>
</ul>
</section>

{/* Navigation */}
<div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
<Link
    href="/css/typography"
className="flex items-center text-primary-dark hover:text-dark transition-colors"
>
<ArrowLeft size={16} className="mr-2" />
    Previous: Typography
</Link>
<Link
href="/css/advanced-css"
className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
    >
    Next: Advanced CSS
<ArrowRight size={16} className="ml-2" />
    </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
);
}-white rounded-xl border border-gray-100 shadow-sm">
<h3 className="text-lg font-semibold text-dark mb-4">Position Values:</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
    <div className="relative bg-gray-100 h-32 p-2 rounded-md">
<div className="absolute top-0 left-0 bg-primary-light/40 p-2 rounded-md">
<span className="text-xs text-primary-dark">absolute (top-left)</span>
    </div>
    <div className="absolute bottom-0 right-0 bg-primary-light/40 p-2 rounded-md">
<span className="text-xs text-primary-dark">absolute (bottom-right)</span>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-light/80 p-2 rounded-md">
<span className="text-xs text-white">absolute (centered)</span>
    </div>
    </div>
    <p className="text-text-secondary text-sm mt-2">
<strong>Absolute</strong>: Positioned relative to nearest positioned ancestor
</p>
</div>

<div>
<div className="bg-gray-100 h-32 p-2 rounded-md">
<div className="relative bg-white h-full rounded-md p-2">
<div className="bg-green-100 p-2 mb-2 rounded-md">Normal Element</div>
<div className="relative bg-blue-100 p-2 rounded-md" style={{top: "10px", left: "20px"}}>
<span className="text-xs">relative (moved)</span>
    </div>
    </div>
    </div>
    <p className="text-text-secondary text-sm mt-2">
    <strong>Relative</strong>: Positioned relative to its normal position
    </p>
    </div>
    </div>

    <div className="mt-6">
<p className="font-semibold text-dark mb-2">Fixed & Sticky Positioning:</p>
<div className="bg-gray-100 p-4 rounded-md text-text-secondary">
    <p><strong>Fixed Position</strong>: Elements stay in the same spot on the screen, even when scrolling (like a floating chat button).</p>
<p className="mt-2"><strong>Sticky Position</strong>: Elements behave like relative until they reach a specified scroll position, then act like fixed (like a sticky header).</p>
</div>
</div>
</div>

<div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
<div className="mr-4 text-primary-dark">
<Info size={24} />
</div>
<div>
<h3 className="font-semibold text-dark mb-2">When to Use Different Position Values:</h3>
<ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li><strong>Static</strong>: Default behavior, rarely specified explicitly</li>
<li><strong>Relative</strong>: Small position adjustments or establishing a positioning context for absolute children</li>
<li><strong>Absolute</strong>: UI elements that need precise placement (tooltips, badges, overlays)</li>
<li><strong>Fixed</strong>: Elements that should stay visible while scrolling (navigation bars, chat widgets)</li>
<li><strong>Sticky</strong>: Elements that should stick to a position when scrolled to (section headers, navigation)</li>
</ul>
</div>
</div>
</section>

{/* Flexbox */}
<section id="flexbox" className="mb-12 scroll-mt-20">
<h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
<span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
    3
    </span>
Flexbox
</h2>
<div className="prose max-w-none">
<p className="text-text-secondary mb-4">
    Flexbox is a one-dimensional layout method designed for arranging items in rows or columns. It makes it easier to design flexible responsive layouts without using floats or positioning.
</p>
</div>

<CodeBlock
code={`/* Flexbox Container Properties */

/* Create a flex container */
.flex-container {
  display: flex;  /* or inline-flex */
  
  /* Direction of flex items */
  flex-direction: row;  /* Default: left to right */
  /* flex-direction: column; */  /* top to bottom */
  /* flex-direction: row-reverse; */  /* right to left */
  /* flex-direction: column-reverse; */  /* bottom to top */
  
  /* Wrapping of flex items */
  flex-wrap: nowrap;  /* Default: no wrapping */
  /* flex-wrap: wrap; */  /* wrap to multiple lines */
  /* flex-wrap: wrap-reverse; */  /* wrap in reverse order */
  
  /* Shorthand for flex-direction and flex-wrap */
  /* flex-flow: row wrap; */
  
  /* Horizontal alignment */
  justify-content: flex-start;  /* Default: items at start */
  /* justify-content: flex-end; */  /* items at end */
  /* justify-content: center; */  /* items at center */
  /* justify-content: space-between; */  /* even spacing, items at edges */
  /* justify-content: space-around; */  /* even spacing around items */
  /* justify-content: space-evenly; */  /* even spacing around items and edges */
  
  /* Vertical alignment */
  align-items: stretch;  /* Default: items stretch to fill container */
  /* align-items: flex-start; */  /* items at top */
  /* align-items: flex-end; */  /* items at bottom */
  /* align-items: center; */  /* items at vertical center */
  /* align-items: baseline; */  /* items aligned by text baseline */
  
  /* Alignment of lines when wrapped */
  align-content: flex-start;  /* Default: lines at top */
  /* align-content: flex-end; */  /* lines at bottom */
  /* align-content: center; */  /* lines at center */
  /* align-content: space-between; */  /* even spacing, lines at edges */
  /* align-content: space-around; */  /* even spacing around lines */
  /* align-content: stretch; */  /* lines stretch to fill container */
}

/* Flexbox Item Properties */
.flex-item {
  /* Control order */
  order: 0;  /* Default: as appears in source code */
  
  /* Allow item to grow */
  flex-grow: 0;  /* Default: no growing */
  /* flex-grow: 1; */  /* grow proportionally */
  
  /* Allow item to shrink */
  flex-shrink: 1;  /* Default: allow shrinking */
  /* flex-shrink: 0; */  /* prevent shrinking */
  
  /* Base size before growing/shrinking */
  flex-basis: auto;  /* Default: size based on content */
  /* flex-basis: 100px; */  /* specific base size */
  
  /* Shorthand for flex-grow, flex-shrink, flex-basis */
  flex: 0 1 auto;  /* Default */
  /* flex: 1; */  /* grow, allow shrink, auto basis */
  /* flex: auto; */  /* equivalent to 1 1 auto */
  /* flex: none; */  /* equivalent to 0 0 auto */
  
  /* Override container's align-items */
  align-self: auto;  /* Default: follow container's align-items */
  /* align-self: flex-start; */  /* align to top */
  /* align-self: flex-end; */  /* align to bottom */
  /* align-self: center; */  /* align to center */
  /* align-self: stretch; */  /* stretch to fill container */
}`}
/>

<div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
<h3 className="text-lg font-semibold text-dark mb-4">Flexbox Examples:</h3>

<p className="font-semibold text-dark mb-2">Justify Content:</p>
<div className="space-y-3 mb-6">
<div className="bg-gray-50 p-2 rounded-md">
<p className="text-text-secondary text-sm mb-1">justify-content: flex-start</p>
<div className="flex justify-start bg-gray-100 p-2 rounded-md">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 1</div>
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 2</div>
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 3</div>
</div>
</div>

<div className="bg-gray-50 p-2 rounded-md">
<p className="text-text-secondary text-sm mb-1">justify-content: center</p>
<div className="flex justify-center bg-gray-100 p-2 rounded-md">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 1</div>
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 2</div>
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 3</div>
</div>
</div>

<div className="bg-gray-50 p-2 rounded-md">
<p className="text-text-secondary text-sm mb-1">justify-content: space-between</p>
<div className="flex justify-between bg-gray-100 p-2 rounded-md">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 1</div>
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 2</div>
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Item 3</div>
</div>
</div>
</div>

<p className="font-semibold text-dark mb-2">Align Items:</p>
<div className="bg-gray-50 p-2 rounded-md mb-6">
<p className="text-text-secondary text-sm mb-1">align-items</p>
    <div className="flex h-32 bg-gray-100 p-2 rounded-md">
<div className="flex-1 flex items-start justify-center border-r border-gray-200">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Start</div>
    </div>
    <div className="flex-1 flex items-center justify-center border-r border-gray-200">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">Center</div>
    </div>
    <div className="flex-1 flex items-end justify-center">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">End</div>
    </div>
    </div>
    </div>

    <p className="font-semibold text-dark mb-2">Flex Direction:</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-gray-50 p-2 rounded-md">
<p className="text-text-secondary text-sm mb-1">flex-direction: row</p>
<div className="flex flex-row bg-gray-100 p-2 rounded-md">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">1</div>
    <div className="bg-primary-light/40 p-2 m-1 rounded-md">2</div>
    <div className="bg-primary-light/40 p-2 m-1 rounded-md">3</div>
    </div>
    </div>

    <div className="bg-gray-50 p-2 rounded-md">
<p className="text-text-secondary text-sm mb-1">flex-direction: column</p>
<div className="flex flex-col bg-gray-100 p-2 rounded-md">
<div className="bg-primary-light/40 p-2 m-1 rounded-md">1</div>
    <div className="bg-primary-light/40 p-2 m-1 rounded-md">2</div>
    <div className="bg-primary-light/40 p-2 m-1 rounded-md">3</div>
    </div>
    </div>
    </div>
    </div>

    <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
<div className="mr-4 text-primary-dark">
<Info size={24} />
</div>
<div>
<h3 className="font-semibold text-dark mb-2">When to Use Flexbox:</h3>
<ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li>One-dimensional layouts (rows OR columns)</li>
<li>Centering elements vertically and horizontally</li>
<li>Navigation menus and toolbars</li>
<li>Card layouts in a single row/column</li>
<li>Aligning items within a container</li>
<li>Creating simple responsive designs</li>
</ul>
</div>
</div>
</section>

{/* CSS Grid */}
<section id="grid" className="mb-12 scroll-mt-20">
<h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
<span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
    4
    </span>
CSS Grid
</h2>
<div className="prose max-w-none">
<p className="text-text-secondary mb-4">
    CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. It provides more control and flexibility than traditional layout methods.
</p>
</div>

<CodeBlock
code={`/* Grid Container Properties */

/* Create a grid container */
.grid-container {
  display: grid;  /* or inline-grid */
  
  /* Define columns */
  grid-template-columns: 100px 200px 100px;  /* 3 columns with fixed widths */
  /* grid-template-columns: 1fr 2fr 1fr; */  /* fraction units (proportional) */
  /* grid-template-columns: repeat(3, 1fr); */  /* 3 equal columns */
  /* grid-template-columns: minmax(100px, 1fr) 2fr; */  /* responsive columns */
  
  /* Define rows */
  grid-template-rows: 100px 200px;  /* 2 rows with fixed heights */
  /* grid-template-rows: repeat(3, auto); */  /* 3 rows with auto height */
  
  /* Gap between grid items */
  gap: 20px;  /* row and column gap */
  /* row-gap: 20px; */  /* only row gap */
  /* column-gap: 20px; */  /* only column gap */
  
  /* Named grid areas */
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  
  /* Alignment of all items horizontally */
  justify-items: stretch;  /* Default: items fill cell width */
  /* justify-items: start; */  /* items at left of cell */
  /* justify-items: end; */  /* items at right of cell */
  /* justify-items: center; */  /* items at center of cell */
  
  /* Alignment of all items vertically */
  align-items: stretch;  /* Default: items fill cell height */
  /* align-items: start; */  /* items at top of cell */
  /* align-items: end; */  /* items at bottom of cell */
  /* align-items: center; */  /* items at vertical center of cell */
  
  /* Alignment of grid tracks (columns) */
  justify-content: start;  /* Default: tracks at start */
  /* justify-content: end; */  /* tracks at end */
  /* justify-content: center; */  /* tracks at center */
  /* justify-content: space-between; */  /* even spacing, tracks at edges */
  /* justify-content: space-around; */  /* even spacing around tracks */
  /* justify-content: space-evenly; */  /* even spacing around tracks and edges */
  
  /* Alignment of grid tracks (rows) */
  align-content: start;  /* Default: tracks at top */
  /* align-content: end; */  /* tracks at bottom */
  /* align-content: center; */  /* tracks at center */
  /* align-content: space-between; */  /* even spacing, tracks at edges */
  /* align-content: space-around; */  /* even spacing around tracks */
  /* align-content: space-evenly; */  /* even spacing around tracks and edges */
  
  /* Auto-placement algorithm */
  grid-auto-flow: row;  /* Default: fill by row */
  /* grid-auto-flow: column; */  /* fill by column */
  /* grid-auto-flow: dense; */  /* attempt to fill holes */
}

/* Grid Item Properties */
.grid-item {
  /* Specify which grid area to place item in */
  grid-area: header;  /* Place in named area */
  
  /* Specify item's location by grid lines */
  grid-column: 1 / 3;  /* Start at line 1, end at line 3 */
  grid-row: 2 / 4;  /* Start at line 2, end at line 4 */
  
  /* Shorthand for grid-column-start/end, grid-row-start/end */
  /* grid-column: 1 / 3; */  /* or 1 / span 2 */
  /* grid-row: 2 / 4; */  /* or 2 / span 2 */
  
  /* Override container's justify-items */
  justify-self: start;  /* item at left of cell */
  /* justify-self: end; */  /* item at right of cell */
  /* justify-self: center; */  /* item at center of cell */
  /* justify-self: stretch; */  /* item fills cell width */
  
  /* Override container's align-items */
  align-self: start;  /* item at top of cell */
  /* align-self: end; */  /* item at bottom of cell */
  /* align-self: center; */  /* item at vertical center of cell */
  /* align-self: stretch; */  /* item fills cell height */
}`}
/>

<div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
<h3 className="text-lg font-semibold text-dark mb-4">CSS Grid Examples:</h3>

<p className="font-semibold text-dark mb-2">Basic Grid:</p>
<div className="bg-gray-50 p-2 rounded-md mb-6">
<p className="text-text-secondary text-sm mb-1">grid-template-columns: repeat(3, 1fr);</p>
<div className="grid grid-cols-3 gap-2 bg-gray-100 p-2 rounded-md">
<div className="bg-primary-light/40 p-4 rounded-md text-center">1</div>
    <div className="bg-primary-light/40 p-4 rounded-md text-center">2</div>
    <div className="bg-primary-light/40 p-4 rounded-md text-center">3</div>
    <div className="bg-primary-light/40 p-4 rounded-md text-center">4</div>
    <div className="bg-primary-light/40 p-4 rounded-md text-center">5</div>
    <div className="bg-primary-light/40 p-4 rounded-md text-center">6</div>
    </div>
    </div>

    <p className="font-semibold text-dark mb-2">Grid Areas (Layout):</p>
<div className="bg-gray-50 p-2 rounded-md">
<p className="text-text-secondary text-sm mb-1">grid-template-areas</p>
    <div className="grid gap-2 bg-gray-100 p-2 rounded-md" style={{
    gridTemplateAreas: '"header header header" "sidebar content content" "footer footer footer"',
        gridTemplateColumns: '1fr 2fr 1fr',
        gridTemplateRows: 'auto auto auto'
}}>
<div className="bg-primary-light/60 p-4 rounded-md text-center" style={{gridArea: 'header'}}>Header</div>
<div className="bg-primary-light/40 p-4 rounded-md text-center" style={{gridArea: 'sidebar'}}>Sidebar</div>
<div className="bg-primary-light/30 p-16 rounded-md text-center" style={{gridArea: 'content'}}>Content</div>
<div className="bg-primary-light/50 p-4 rounded-md text-center" style={{gridArea: 'footer'}}>Footer</div>
</div>
</div>
</div>

<div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
<div className="mr-4 text-primary-dark">
<Info size={24} />
</div>
<div>
<h3 className="font-semibold text-dark mb-2">When to Use CSS Grid:</h3>
<ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li>Two-dimensional layouts (rows AND columns)</li>
<li>Complex grid-based designs</li>
<li>Overall page layouts with headers, footers, sidebars</li>
<li>Magazine-style layouts with overlapping elements</li>
<li>Image galleries with different sized items</li>
<li>Asymmetrical layouts</li>
</ul>
</div>
</div>
</section>

{/* Responsive Layout */}
<section id="responsive-layout" className="mb-12 scroll-mt-20">
<h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
<span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
    5
    </span>
Responsive Layout
</h2>
<div className="prose max-w-none">
<p className="text-text-secondary mb-4">
    Responsive design ensures websites look good on all devices, from mobile phones to desktop monitors. CSS provides several techniques to create responsive layouts.
</p>
</div>

<CodeBlock
code={`/* Responsive Layout Techniques */

/* Media Queries */
@media screen and (max-width: 768px) {
  /* Rules that apply when viewport width <= 768px */
  .container {
    width: 100%;
    padding: 10px;
  }
  
  .column {
    width: 100%;
    float: none;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  /* Rules that apply when viewport width is between 769px and 1024px */
  .container {
    width: 90%;
    padding: 15px;
  }
}

/* Responsive Grid with CSS Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Responsive Grid with Flexbox */
.responsive-flex {
  display: flex;
  flex-wrap: wrap;
}

.responsive-flex-item {
  flex: 1 0 300px;  /* Grow, don't shrink, base width 300px */
  margin: 10px;
}

/* Fluid Images */
img {
  max-width: 100%;
  height: auto;
}

/* Viewport Units for Responsive Typography */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);  /* Minimum, preferred, maximum */
}

/* Container Queries (newer feature, check browser support) */
@container (min-width: 400px) {
  /* Rules that apply when the container is at least 400px wide */
  .card-title {
    font-size: 1.5rem;
  }
}

/* Mobile-First Approach */
.element {
  /* Base styles for mobile */
  width: 100%;
}

@media (min-width: 768px) {
  .element {
    /* Override for larger screens */
    width: 50%;
  }
}

/* Desktop-First Approach */
.element {
  /* Base styles for desktop */
  width: 50%;
}

@media (max-width: 767px) {
  .element {
    /* Override for smaller screens */
    width: 100%;
  }
}`}
/>

<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
<h3 className="font-semibold text-dark mb-2 flex items-center">
<Lightbulb size={18} className="text-primary-dark mr-2" />
    Media Query Breakpoints:
    </h3>
    <ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li><strong>Small devices</strong>: max-width: 576px</li>
<li><strong>Medium devices</strong>: max-width: 768px</li>
<li><strong>Large devices</strong>: max-width: 992px</li>
<li><strong>Extra large</strong>: max-width: 1200px</li>
<li><strong>XXL</strong>: max-width: 1400px</li>
</ul>
</div>

<div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
<h3 className="font-semibold text-dark mb-2 flex items-center">
<Lightbulb size={18} className="text-primary-dark mr-2" />
    Responsive Design Tips:
    </h3>
    <ul className="list-disc list-inside space-y-1 text-text-secondary">
    <li>Use relative units like % and rem instead of px</li>
<li>Implement a Mobile-First or Desktop-First approach consistently</li>
<li>Test on multiple devices and screen sizes</li>
<li>Use flexible images with max-width: 100%</li>
<li>Consider touch targets (at least 44px × 44px) for mobile</li>
                                                      </ul>
                                                      </div>
                                                      </div>

                                                      <div className="mt-6 p-6 bg