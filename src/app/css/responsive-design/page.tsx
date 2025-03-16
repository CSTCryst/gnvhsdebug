// src/app/css/responsive-design/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function ResponsiveDesignPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Responsive Design</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Responsive Design
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>CSS Advanced</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 7 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Responsive design is an approach to web design that makes websites look good on all devices and screen sizes, from desktop monitors to mobile phones.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn techniques for creating flexible layouts that adapt to different viewport sizes, ensuring a consistent user experience across all devices.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#basics" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Responsive Design Basics
                                    </a>
                                </li>
                                <li>
                                    <a href="#media-queries" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Media Queries
                                    </a>
                                </li>
                                <li>
                                    <a href="#fluid" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Fluid Layouts
                                    </a>
                                </li>
                                <li>
                                    <a href="#mobile-first" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Mobile-First Approach
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

                        {/* Responsive Design Basics */}
                        <section id="basics" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    1
                                </span>
                                Responsive Design Basics
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Responsive design is built on three core principles: flexible layouts, flexible media, and media queries. Together, these allow your website to adapt to any screen size.
                                </p>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Core Principles:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><strong>Flexible Layouts:</strong> Using relative units and flexible grid systems</li>
                                        <li><strong>Flexible Media:</strong> Images and videos that scale with their containers</li>
                                        <li><strong>Media Queries:</strong> CSS conditions that apply styles based on device characteristics</li>
                                        <li><strong>Viewport Meta Tag:</strong> Ensuring proper scaling on mobile devices</li>
                                    </ul>
                                </div>
                            </div>

                            <CodeBlock
                                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Viewport meta tag for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <!-- Your responsive content here -->
  </div>
</body>
</html>`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Why Responsive Design Matters:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-dark mb-2">Better User Experience</h4>
                                        <p className="text-sm text-text-secondary">Users can access your content on any device without pinching, zooming, or horizontal scrolling</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-dark mb-2">SEO Benefits</h4>
                                        <p className="text-sm text-text-secondary">Search engines favor mobile-friendly websites in their rankings</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-dark mb-2">Cost Effective</h4>
                                        <p className="text-sm text-text-secondary">Maintain one website instead of separate desktop and mobile versions</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Media Queries */}
                        <section id="media-queries" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    2
                                </span>
                                Media Queries
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Media queries allow you to apply different styles based on device characteristics like screen width, height, orientation, and resolution.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Base styles (applied to all devices) */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

/* Small devices (phones, 576px and up) */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  
  .col-md-6 {
    width: 50%;
    float: left;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}`}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Common Media Query Features</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>min-width</code> / <code>max-width</code>: Screen width thresholds</li>
                                        <li><code>min-height</code> / <code>max-height</code>: Screen height thresholds</li>
                                        <li><code>orientation</code>: Portrait or landscape</li>
                                        <li><code>aspect-ratio</code>: Width-to-height ratio</li>
                                        <li><code>resolution</code>: Pixel density (useful for high-DPI displays)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Media Query Examples</h3>
                                    <CodeBlock language={"css"}
                                        code={`/* Change layout for landscape mode */
@media (orientation: landscape) {
  .sidebar {
    width: 30%;
    float: left;
  }
  .content {
    width: 70%;
    float: right;
  }
}

/* High resolution screens */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url('logo@2x.png');
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none;
  }
  body {
    font-size: 12pt;
  }
}`}
                                    />
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Media Query Breakpoints:</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                        <tr className="bg-gray-50">
                                            <th className="border px-4 py-2 text-left">Name</th>
                                            <th className="border px-4 py-2 text-left">Width</th>
                                            <th className="border px-4 py-2 text-left">Typical Devices</th>
                                            <th className="border px-4 py-2 text-left">Media Query</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">Extra Small</td>
                                            <td className="border px-4 py-2">&lt; 576px</td>
                                            <td className="border px-4 py-2">Phone (portrait)</td>
                                            <td className="border px-4 py-2 font-mono text-sm">@media (max-width: 575.98px)</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Small</td>
                                            <td className="border px-4 py-2">≥ 576px</td>
                                            <td className="border px-4 py-2">Phone (landscape)</td>
                                            <td className="border px-4 py-2 font-mono text-sm">@media (min-width: 576px)</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Medium</td>
                                            <td className="border px-4 py-2">≥ 768px</td>
                                            <td className="border px-4 py-2">Tablet</td>
                                            <td className="border px-4 py-2 font-mono text-sm">@media (min-width: 768px) </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Large</td>
                                            <td className="border px-4 py-2">≥ 992px</td>
                                            <td className="border px-4 py-2">Desktop</td>
                                            <td className="border px-4 py-2 font-mono text-sm">@media (min-width: 992px)</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Extra Large</td>
                                            <td className="border px-4 py-2">≥ 1200px</td>
                                            <td className="border px-4 py-2">Large Desktop</td>
                                            <td className="border px-4 py-2 font-mono text-sm">@media (min-width: 1200px)</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Fluid Layouts */}
                        <section id="fluid" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    3
                                </span>
                                Fluid Layouts
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Fluid layouts use relative units instead of fixed pixels, allowing content to adapt naturally to different screen sizes.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Relative Units</h3>
                                    <CodeBlock language={"css"}
                                        code={`.container {
  width: 90%; /* Percentage of parent */
  max-width: 1200px; /* Maximum width */
  margin: 0 auto; /* Center the container */
}

h1 {
  font-size: 2rem; /* Relative to root font size */
}

p {
  font-size: 1em; /* Relative to parent font size */
  line-height: 1.5; /* Relative to element's font size */
  margin-bottom: 1.5em;
}

.sidebar {
  width: 30%; /* Percentage of parent */
}

.hero-section {
  height: 50vh; /* 50% of viewport height */
}`}
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Viewport Units</h3>
                                    <CodeBlock language={"css"}
                                        code={`/* Viewport units */
.full-height {
  height: 100vh; /* 100% of viewport height */
}

.half-width {
  width: 50vw; /* 50% of viewport width */
}

/* Modern sizing: clamp() */
.responsive-text {
  /* Min, preferred, max */
  font-size: clamp(1rem, 2vw, 2rem);
  padding: clamp(1rem, 5%, 3rem);
}

/* Using calc() for flexible calculations */
.flexible-width {
  width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
}`}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Relative Units Comparison:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><strong>%</strong> - Relative to parent element's size</li>
                                        <li><strong>em</strong> - Relative to the font-size of the element</li>
                                        <li><strong>rem</strong> - Relative to the font-size of the root (html) element</li>
                                        <li><strong>vw/vh</strong> - Relative to viewport width/height (1vw = 1% of viewport width)</li>
                                        <li><strong>vmin/vmax</strong> - Relative to viewport's smaller/larger dimension</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Fluid Images */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-dark mb-3">Fluid Images and Media</h3>
                                <CodeBlock language={"css"}
                                    code={`/* Make all images fluid by default */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive video container */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`}
                                />
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Fluid Grid Example:</h3>

                                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                                            <div className="bg-primary-light p-4 rounded text-center text-primary-dark">
                                                Column 1
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                                            <div className="bg-primary-light p-4 rounded text-center text-primary-dark">
                                                Column 2
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3 px-2">
                                            <div className="bg-primary-light p-4 rounded text-center text-primary-dark">
                                                Column 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light">Resize your browser to see how the columns stack on smaller screens</p>
                            </div>
                        </section>

                        {/* Mobile-First Approach */}
                        <section id="mobile-first" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    4
                                </span>
                                Mobile-First Approach
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    The mobile-first approach means designing for mobile devices first, then progressively enhancing the design for larger screens. This strategy focuses on essential content and features from the beginning.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Desktop-First CSS</h3>
                                    <CodeBlock language={"css"}
                                        code={`/* Desktop design (default) */
.container {
  width: 1200px;
  margin: 0 auto;
}

.navigation {
  display: flex;
}

.nav-item {
  margin-right: 20px;
}

/* Then adapt for smaller screens */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
  
  .navigation {
    flex-direction: column;
  }
  
  .nav-item {
    margin-right: 0;
    margin-bottom: 10px;
  }
}`}
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Mobile-First CSS</h3>
                                    <CodeBlock language={"css"}
                                        code={`/* Mobile design (default) */
.container {
  width: 100%;
  padding: 0 15px;
}

.navigation {
  display: flex;
  flex-direction: column;
}

.nav-item {
  margin-bottom: 10px;
}

/* Then enhance for larger screens */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
  
  .navigation {
    flex-direction: row;
  }
  
  .nav-item {
    margin-right: 20px;
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}`}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Benefits of Mobile-First:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Forces prioritization of essential content and features</li>
                                        <li>Typically results in cleaner, more efficient CSS</li>
                                        <li>Better performance on mobile devices (where bandwidth might be limited)</li>
                                        <li>Aligns with current web usage trends (mobile traffic often exceeds desktop)</li>
                                        <li>Easier to progressively enhance than to retroactively simplify</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Mobile-First Development:</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg">
                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <h4 className="font-medium text-dark mb-2">1. Mobile Design</h4>
                                        <div className="border border-dashed border-gray-300 p-3 rounded">
                                            <div className="w-12 h-2 bg-primary-light rounded mb-3"></div>
                                            <div className="w-full h-24 bg-gray-100 rounded mb-3"></div>
                                            <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <h4 className="font-medium text-dark mb-2">2. Tablet Design</h4>
                                        <div className="border border-dashed border-gray-300 p-3 rounded">
                                            <div className="flex justify-between mb-3">
                                                <div className="w-12 h-2 bg-primary-light rounded"></div>
                                                <div className="flex gap-1">
                                                    <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                                    <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="w-full h-24 bg-gray-100 rounded mb-3"></div>
                                            <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <h4 className="font-medium text-dark mb-2">3. Desktop Design</h4>
                                        <div className="border border-dashed border-gray-300 p-3 rounded">
                                            <div className="flex justify-between mb-3">
                                                <div className="w-12 h-2 bg-primary-light rounded"></div>
                                                <div className="flex gap-2">
                                                    <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                                    <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                                    <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                                    <div className="w-6 h-2 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-2/3 h-24 bg-gray-100 rounded"></div>
                                                <div className="w-1/3">
                                                    <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                                                    <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                                                    <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Try It Yourself */}
                        <section id="try-it" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    5
                                </span>
                                Try It Yourself
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Create a responsive navigation menu that transforms from a horizontal menu on desktop to a hamburger menu on mobile devices.
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
                                        <span className="text-xs font-mono">responsive-nav.css</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock language={"css"}
                                    code={`/* Base styles (mobile first) */
.nav-container {
  background-color: #333;
  padding: 1rem;
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Hamburger menu icon */
.menu-toggle {
  display: block;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  border: none;
}

.menu-toggle .bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: white;
  transition: all 0.3s ease;
}

/* Navigation menu (hidden by default on mobile) */
.nav-menu {
  display: none;
  width: 100%;
  padding-top: 1rem;
}

/* When menu is active */
.nav-menu.active {
  display: block;
}

/* Navigation items */
.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  margin-bottom: 0.5rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
}

.nav-menu a:hover {
  color: #ddd;
}

/* Desktop styles */
@media (min-width: 768px) {
  .menu-toggle {
    display: none; /* Hide hamburger on desktop */
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
  }

  .nav-menu {
    display: block !important; /* Always visible on desktop */
    width: auto;
    padding-top: 0;
  }

  .nav-menu ul {
    display: flex;
  }

  .nav-menu li {
    margin-bottom: 0;
    margin-left: 1.5rem;
  }
}`}
                                />
                            </div>

                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mt-6 mb-6">
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
  <title>Responsive Navigation Menu</title>
  <link rel="stylesheet" href="responsive-nav.css">
</head>
<body>
  <nav class="nav-container">
    <div class="nav-wrapper">
      <div class="logo">Your Brand</div>
      <button class="menu-toggle" aria-label="Toggle navigation menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div class="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div style="padding: 20px;">
    <h1>Responsive Navigation Demo</h1>
    <p>Resize your browser window to see the menu change from mobile to desktop layout.</p>
  </div>
</body>
</html>`}
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-dark mb-3">JavaScript for Toggle Menu</h3>
                                <CodeBlock language={"javascript"}
                                    code={`// JavaScript to toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
  
  // Optional: Animate the hamburger icon to an X
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('active'));
});`}
                                />
                            </div>

                            <div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex mt-6">
                                <div className="text-primary-dark mr-4 mt-1">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
                                    <p className="text-text-secondary">
                                        When implementing responsive designs, use browser developer tools to test how your layout behaves at different screen sizes. Most browsers include a responsive design mode or device emulation feature that lets you preview your site on various device sizes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/css/grid"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2"/>
                                Previous: CSS Grid
                            </Link>
                            <Link
                                href="/css/animations"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Animations And Transitions
                                <ArrowRight size={16} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}