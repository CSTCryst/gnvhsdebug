// src/app/html/metadata-head/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function MetadataHeadPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
<Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
<span className="mx-2">/</span>
<Link href="/html" className="hover:text-primary-dark transition-colors">HTML</Link>
<span className="mx-2">/</span>
<span className="text-text-secondary">Metadata and the Head Element</span>
</div>

<h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
    Metadata and the Head Element
</h1>

<div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
        <div className="flex items-center text-sm">
            <BookOpen size={16} className="text-primary-dark mr-2" />
            <span>HTML Basics</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-text-light">Reading time: 6 min</span>
        </div>
    </div>

    <div className="p-6 md:p-8">
        {/* Introduction */}
        <section className="mb-12">
            <div className="prose max-w-none">
                <p className="text-lg text-text-secondary mb-4">
                    The <code>&lt;head&gt;</code> section of an HTML document contains metadata that is not displayed on the page but provides crucial information about the document.
                </p>
                <p className="text-text-secondary">
                    In this tutorial, you'll learn about the various metadata elements and how they influence document behavior, search engine optimization, and browser display.
                </p>
            </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
            <ul className="space-y-2">
                <li>
                    <a href="#head-element" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                        The Head Element
                    </a>
                </li>
                <li>
                    <a href="#essential-meta-tags" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                        Essential Meta Tags
                    </a>
                </li>
                <li>
                    <a href="#linking-resources" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                        Linking External Resources
                    </a>
                </li>
                <li>
                    <a href="#seo-social" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                        SEO and Social Media Tags
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

        {/* The Head Element */}
        <section id="head-element" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                The Head Element
            </h2>
            <div className="prose max-w-none">
                <p className="text-text-secondary mb-4">
                    The <code>&lt;head&gt;</code> element is a container for metadata (information about the document) and is placed between the <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag.
                </p>
                <p className="text-text-secondary mb-4">
                    Metadata typically defines document title, character set, styles, scripts, and other meta information.
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
                        <span className="text-xs font-mono">basic-head.html</span>
                    </div>
                    <span className="text-xs text-gray-400">Example Code</span>
                </div>

                <CodeBlock
                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
<body>
  <!-- The content of the document goes here -->
</body>
</html>`}
                />
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                <div className="mr-4 text-primary-dark">
                    <Info size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-dark mb-2">Important Notes:</h3>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                        <li>The <code>&lt;head&gt;</code> element is not displayed on the page</li>
                        <li>Content in the <code>&lt;head&gt;</code> provides information to browsers and search engines</li>
                        <li>Well-structured metadata improves accessibility, SEO, and user experience</li>
                        <li>Some metadata tags are essential for proper page rendering</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Essential Meta Tags */}
        <section id="essential-meta-tags" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                Essential Meta Tags
            </h2>
            <div className="prose max-w-none">
                <p className="text-text-secondary mb-4">
                    Certain metadata elements are essential for proper rendering and functionality of web pages. Let's explore the most important ones:
                </p>
            </div>

            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Document Title</h3>
                    <p className="text-text-secondary mb-2">
                        The <code>&lt;title&gt;</code> element defines the title of the document, which appears in the browser tab and search results.
                    </p>
                    <CodeBlock code={`<title>My Website | Homepage</title>`} />
                    <p className="text-text-secondary mt-2 text-sm">
                        <strong>Best practices:</strong> Keep titles concise (50-60 characters), unique for each page, and include key terms.
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Character Encoding</h3>
                    <p className="text-text-secondary mb-2">
                        The charset meta tag defines the character encoding for the document, ensuring text displays correctly.
                    </p>
                    <CodeBlock code={`<meta charset="UTF-8">`} />
                    <p className="text-text-secondary mt-2 text-sm">
                        <strong>Best practices:</strong> Always include this tag and place it as the first element in the <code>&lt;head&gt;</code> section. UTF-8 is the recommended encoding for most websites.
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Viewport Settings</h3>
                    <p className="text-text-secondary mb-2">
                        The viewport meta tag controls how the page is displayed on mobile devices, making it essential for responsive design.
                    </p>
                    <CodeBlock code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`} />
                    <p className="text-text-secondary mt-2 text-sm">
                        <strong>What it does:</strong> Sets the viewport width to match the device width and sets the initial zoom level to 1.0, ensuring proper display on mobile devices.
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Page Description</h3>
                    <p className="text-text-secondary mb-2">
                        The description meta tag provides a summary of the page content, which often appears in search engine results.
                    </p>
                    <CodeBlock code={`<meta name="description" content="Learn about HTML metadata and the head element in this comprehensive tutorial for beginners.">`} />
                    <p className="text-text-secondary mt-2 text-sm">
                        <strong>Best practices:</strong> Keep descriptions between 150-160 characters and include relevant keywords naturally.
                    </p>
                </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                <div className="mr-4 text-primary-dark">
                    <Lightbulb size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-dark mb-2">Meta Tag Structure</h3>
                    <p className="text-text-secondary">
                        The <code>&lt;meta&gt;</code> tag uses different attributes based on what information it's providing:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary mt-2">
                        <li><code>charset</code> - for character encoding</li>
                        <li><code>name</code> and <code>content</code> - for named metadata like description and viewport</li>
                        <li><code>http-equiv</code> and <code>content</code> - for HTTP header equivalents</li>
                        <li><code>property</code> and <code>content</code> - commonly used for social media metadata</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Linking External Resources */}
        <section id="linking-resources" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                Linking External Resources
            </h2>
            <div className="prose max-w-none">
                <p className="text-text-secondary mb-4">
                    The <code>&lt;head&gt;</code> section is where you link to external resources like stylesheets, scripts, fonts, and icons that enhance your webpage.
                </p>
            </div>

            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">CSS Stylesheets</h3>
                    <p className="text-text-secondary mb-2">
                        Link to external CSS files to style your HTML document:
                    </p>
                    <CodeBlock code={`<!-- External stylesheet -->
<link rel="stylesheet" href="styles.css">

<!-- External stylesheet with media query -->
<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 600px)">

<!-- Alternative method using @import (not recommended for performance) -->
<style>
  @import url('styles.css');
</style>`} />
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">JavaScript Files</h3>
                    <p className="text-text-secondary mb-2">
                        Link to external JavaScript files to add interactivity:
                    </p>
                    <CodeBlock code={`<!-- Basic script inclusion -->
<script src="script.js"></script>

<!-- With async attribute (loads asynchronously) -->
<script src="analytics.js" async></script>

<!-- With defer attribute (executes after HTML is parsed) -->
<script src="app.js" defer></script>`} />
                    <p className="text-text-secondary mt-2 text-sm">
                        <strong>Note:</strong> <code>async</code> and <code>defer</code> attributes help improve page loading performance by controlling when scripts load and execute.
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Fonts and Icons</h3>
                    <p className="text-text-secondary mb-2">
                        Link to external fonts and favicon icons:
                    </p>
                    <CodeBlock code={`<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<!-- Favicon (website icon) -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Apple Touch Icon (for iOS devices) -->
<link rel="apple-touch-icon" href="apple-touch-icon.png">`} />
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Preloading and Prefetching</h3>
                    <p className="text-text-secondary mb-2">
                        Optimize resource loading with preload, prefetch, and preconnect:
                    </p>
                    <CodeBlock code={`<!-- Preload critical resources -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="banner.jpg" as="image">

<!-- Prefetch resources for future navigation -->
<link rel="prefetch" href="next-page.html">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">`} />
                    <p className="text-text-secondary mt-2 text-sm">
                        <strong>Performance tip:</strong> Use these resource hints strategically to improve page load times and user experience.
                    </p>
                </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                <div className="mr-4 text-primary-dark">
                    <Info size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-dark mb-2">Resource Loading Best Practices</h3>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                        <li>Place CSS links in the head to prevent flash of unstyled content (FOUC)</li>
                        <li>Use <code>defer</code> for scripts that don't need to run immediately</li>
                        <li>Only include resources that are necessary for the current page</li>
                        <li>Consider using resource hints like preload and preconnect for critical assets</li>
                        <li>Minimize the number of external resources to improve loading performance</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* SEO and Social Media Tags */}
        <section id="seo-social" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                SEO and Social Media Tags
            </h2>
            <div className="prose max-w-none">
                <p className="text-text-secondary mb-4">
                    Additional metadata can significantly improve your website's visibility in search engines and appearance when shared on social media platforms.
                </p>
            </div>

            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">SEO Meta Tags</h3>
                    <p className="text-text-secondary mb-2">
                        These tags help search engines understand and index your content:
                    </p>
                    <CodeBlock code={`<!-- Basic SEO tags -->
<meta name="description" content="A comprehensive guide to HTML metadata and the head element.">
<meta name="keywords" content="HTML, metadata, head element, web development">
<meta name="author" content="Your Name">

<!-- Robots directive -->
<meta name="robots" content="index, follow">

<!-- Canonical URL (prevents duplicate content issues) -->
<link rel="canonical" href="https://example.com/metadata-tutorial">`} />
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Open Graph Protocol</h3>
                    <p className="text-text-secondary mb-2">
                        These tags control how your content appears when shared on Facebook and other platforms that support Open Graph:
                    </p>
                    <CodeBlock code={`<meta property="og:title" content="Metadata and the Head Element Tutorial">
<meta property="og:description" content="Learn all about HTML metadata and the head element in this comprehensive guide.">
<meta property="og:image" content="https://example.com/images/metadata-tutorial.jpg">
<meta property="og:url" content="https://example.com/metadata-tutorial">
<meta property="og:type" content="article">`} />
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Twitter Card Tags</h3>
                    <p className="text-text-secondary mb-2">
                        These tags control how your content appears when shared on Twitter:
                    </p>
                    <CodeBlock code={`<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourusername">
<meta name="twitter:title" content="Metadata and the Head Element Tutorial">
<meta name="twitter:description" content="Learn all about HTML metadata and the head element in this comprehensive guide.">
<meta name="twitter:image" content="https://example.com/images/metadata-tutorial.jpg">`} />
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-dark mb-2">Schema.org Structured Data</h3>
                    <p className="text-text-secondary mb-2">
                        Add structured data to help search engines understand your content better and potentially display rich results:
                    </p>
                    <CodeBlock code={`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Metadata and the Head Element Tutorial",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "datePublished": "2023-09-20",
  "description": "Learn all about HTML metadata and the head element in this comprehensive guide."
}
</script>`} />
                </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                <div className="mr-4 text-primary-dark">
                    <Lightbulb size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-dark mb-2">Social Media Optimization Tips</h3>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                        <li>Use high-quality images that are at least 1200×630 pixels for best display on social platforms</li>
                        <li>Write compelling, accurate descriptions that entice users to click</li>
                        <li>Test how your pages appear when shared using tools like the Facebook Sharing Debugger or Twitter Card Validator</li>
                        <li>Keep titles under 60 characters and descriptions under 160 characters for optimal display</li>
                        <li>Update metadata when the content of the page changes significantly</li>
                    </ul>
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
                    Create a complete HTML document with a well-structured <code>&lt;head&gt;</code> section that includes essential metadata and optimizations.
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
                        <span className="text-xs font-mono">complete-metadata.html</span>
                    </div>
                    <span className="text-xs text-gray-400">Example Code</span>
                </div>

                <CodeBlock
                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Viewport settings for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Page title -->
  <title>Web Development Guide | HTML Metadata Tutorial</title>
  
  <!-- Meta description -->
  <meta name="description" content="Learn how to use HTML metadata and the head element to improve your website's SEO, accessibility, and social sharing.">
  
  <!-- Keywords (less important now for SEO but still used) -->
  <meta name="keywords" content="HTML, metadata, head element, SEO, web development">
  
  <!-- Author information -->
  <meta name="author" content="Your Name">
  
  <!-- Robots directive -->
  <meta name="robots" content="index, follow">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/html-metadata-tutorial">
  
  <!-- Favicon and device-specific icons -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  
  <!-- CSS stylesheets -->
  <link rel="stylesheet" href="normalize.css">
  <link rel="stylesheet" href="styles.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  
  <!-- Open Graph tags for social sharing -->
  <meta property="og:title" content="Web Development Guide | HTML Metadata Tutorial">
  <meta property="og:description" content="Learn how to use HTML metadata and the head element to improve your website's SEO, accessibility, and social sharing.">
  <meta property="og:image" content="https://example.com/images/metadata-tutorial.jpg">
  <meta property="og:url" content="https://example.com/html-metadata-tutorial">
  <meta property="og:type" content="article">
  
  <!-- Twitter Card tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@yourusername">
  <meta name="twitter:title" content="HTML Metadata Tutorial">
  <meta name="twitter:description" content="Learn how to use HTML metadata and the head element.">
  <meta name="twitter:image" content="https://example.com/images/metadata-tutorial.jpg">
  
  <!-- Structured data with Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HTML Metadata and the Head Element Tutorial",
    "author": {
      "@type": "Person",
      "name": "Your Name"
    },
    "datePublished": "2023-09-20",
    "description": "Learn how to use HTML metadata and the head element to improve your website."
  }
  </script>
  
  <!-- JavaScript (with defer attribute) -->
  <script src="script.js" defer></script>
</head>
<body>
  <header>
    <h1>HTML Metadata and the Head Element</h1>
    <p>A comprehensive tutorial on optimizing your webpage's metadata</p>
  </header>
  
  <!-- Page content goes here -->
  
  <footer>
    <p>&copy; 2023 Web Development Guide. All rights reserved.</p>
  </footer>
</body>
</html>`}
                />
            </div>

            <div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex">
                <div className="text-primary-dark mr-4 mt-1">
                    <Info size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
                    <p className="text-text-secondary">
                        You don't need to include every possible meta tag on every page. Focus on the ones that matter most for your specific content and audience. Essential tags include charset, viewport, title, and description. Add social media tags when you want your content to be shared, and structured data for pages that can benefit from rich search results.
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
                    <span className="text-text-secondary">The <code>&lt;head&gt;</code> element contains metadata that is not visible on the page but provides crucial information</span>
                </li>
                <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                    <span className="text-text-secondary">Essential meta tags include charset, viewport, title, and description</span>
                </li>
                <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                    <span className="text-text-secondary">Link external resources like CSS, JavaScript, fonts, and icons in the head section</span>
                </li>
                <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                    <span className="text-text-secondary">SEO meta tags help search engines understand and index your content</span>
                </li>
                <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                    <span className="text-text-secondary">Social media tags control how your content appears when shared on platforms like Facebook and Twitter</span>
                </li>
            </ul>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
            <Link
                href="/html/block-inline-elements"
                className="flex items-center text-primary-dark hover:text-dark transition-colors"
            >
                <ArrowLeft size={16} className="mr-2" />
                Previous: Block and Inline Elements
            </Link>
            <Link
                href="/html"
                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
            >
                Back to HTML Tutorials
                <ArrowRight size={16} className="ml-2" />
            </Link>
        </div>
    </div>
</div>
</div>
</div>
);
}