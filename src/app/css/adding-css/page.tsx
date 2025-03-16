// src/app/css/adding-css/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function AddingCSSToHTMLPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Adding CSS to HTML</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Adding CSS to HTML
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>CSS Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 6 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Now that you understand what CSS is, it's time to learn how to add it to your HTML documents. There are three different methods to include CSS in your web pages, each with its own advantages and use cases.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn the different ways to add CSS to HTML, understand when to use each method, and see practical examples of each approach.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#inline-css" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Inline CSS
                                    </a>
                                </li>
                                <li>
                                    <a href="#internal-css" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Internal CSS
                                    </a>
                                </li>
                                <li>
                                    <a href="#external-css" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        External CSS
                                    </a>
                                </li>
                                <li>
                                    <a href="#comparison" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Method Comparison
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

                        {/* Inline CSS */}
                        <section id="inline-css" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Inline CSS
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Inline CSS is applied directly to individual HTML elements using the <code>style</code> attribute. The CSS declarations are written as the attribute's value.
                                </p>
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">Syntax</h3>
                                <CodeBlock
                                    code={`<element style="property: value; property: value;">Content</element>`}
                                />
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">Example</h3>
                                <CodeBlock
                                    code={`<h1 style="color: blue; text-align: center;">This is a Blue Centered Heading</h1>

<p style="font-size: 18px; color: #333; line-height: 1.5;">
  This paragraph has custom font size, color, and line height.
</p>

<div style="background-color: #f0f0f0; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
  This div has a light gray background, padding, and a border.
</div>`}
                                />
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h1 style={{ color: "blue", textAlign: "center" }} className="text-xl font-bold">This is a Blue Centered Heading</h1>
                                    </div>

                                    <div>
                                        <p style={{ fontSize: "18px", color: "#333", lineHeight: 1.5 }}>
                                            This paragraph has custom font size, color, and line height.
                                        </p>
                                    </div>

                                    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
                                        This div has a light gray background, padding, and a border.
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Advantages:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Quickly apply styles to a single element</li>
                                        <li>Useful for testing or small, one-time style changes</li>
                                        <li>No need for separate CSS files</li>
                                        <li>Styles are directly tied to the element</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Disadvantages:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Mixes content with presentation</li>
                                        <li>Cannot be reused for other elements</li>
                                        <li>Increases HTML file size</li>
                                        <li>Difficult to maintain on large websites</li>
                                        <li>Highest specificity, can be hard to override</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Internal CSS */}
                        <section id="internal-css" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Internal CSS
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Internal CSS (also called embedded CSS) is placed within a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section of an HTML document. This method allows you to define styles for multiple elements on a single page.
                                </p>
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">Syntax</h3>
                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <style>
    selector {
      property: value;
      property: value;
    }
    
    selector {
      property: value;
    }
  </style>
</head>
<body>
  <!-- HTML content -->
</body>
</html>`}
                                />
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">Example</h3>
                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    h1 {
      color: #0066cc;
      text-align: center;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #333;
      margin-bottom: 15px;
    }
    
    .highlight {
      background-color: #fffde7;
      padding: 15px;
      border-left: 4px solid #ffd600;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</h1>
  
  <p>This is a paragraph with styles defined in the internal stylesheet.</p>
  
  <p class="highlight">This paragraph has a special highlight class applied to it.</p>
</body>
</html>`}
                                />
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Result:</h3>
                                <div className="p-5 bg-gray-50 rounded-lg">
                                    <div style={{ fontFamily: "Arial, sans-serif" }}>
                                        <h1 style={{ color: "#0066cc", textAlign: "center", borderBottom: "2px solid #eee", paddingBottom: "10px" }} className="text-xl font-bold">Welcome to My Website</h1>

                                        <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#333", marginBottom: "15px" }}>
                                            This is a paragraph with styles defined in the internal stylesheet.
                                        </p>

                                        <p style={{ backgroundColor: "#fffde7", padding: "15px", borderLeft: "4px solid #ffd600", fontSize: "16px", lineHeight: 1.6, color: "#333", marginBottom: "15px" }}>
                                            This paragraph has a special highlight class applied to it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Advantages:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>No need for external files</li>
                                        <li>Styles apply to multiple elements on the page</li>
                                        <li>Can use classes and IDs for reusability</li>
                                        <li>Good for single-page websites</li>
                                        <li>Changes only affect the current page</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Disadvantages:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Increases page size and loading time</li>
                                        <li>Styles cannot be reused on other pages</li>
                                        <li>Mixing HTML structure with CSS presentation</li>
                                        <li>Less maintainable for multi-page websites</li>
                                        <li>No caching benefits for repeat visitors</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* External CSS */}
                        <section id="external-css" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                External CSS
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    External CSS involves creating a separate CSS file with all your styles and linking it to your HTML documents. This is the most common and recommended approach for most websites.
                                </p>
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">Linking to External CSS</h3>
                                <p className="text-text-secondary mb-3">
                                    To link an external CSS file to your HTML document, use the <code>&lt;link&gt;</code> element in the <code>&lt;head&gt;</code> section:
                                </p>
                                <CodeBlock
                                    code={`<head>
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">
</head>`}
                                />
                                <p className="text-text-secondary mt-3">
                                    The <code>href</code> attribute specifies the path to the CSS file, which can be a relative or absolute URL.
                                </p>
                            </div>

                            <div className="mt-4 mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">Example</h3>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-dark mb-2">HTML File (index.html):</h4>
                                    <CodeBlock
                                        code={`<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <h2>Welcome to my site</h2>
    <p>This is a paragraph styled with an external CSS file.</p>
    <p class="highlight">This paragraph has a special highlight class.</p>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
</html>`}
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-dark mb-2">CSS File (styles.css):</h4>
                                    <CodeBlock
                                        code={`/* Global Styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  color: #333;
  background-color: #f9f9f9;
}

/* Header Styles */
header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

/* Main Content */
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.highlight {
  background-color: #fffde7;
  padding: 1rem;
  border-left: 4px solid #ffd600;
}

/* Footer */
footer {
  background-color: #34495e;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}`}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Advantages:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Complete separation of content and presentation</li>
                                        <li>Styles can be used across multiple pages</li>
                                        <li>Reduces file size of individual HTML pages</li>
                                        <li>Browsers can cache the CSS file</li>
                                        <li>Easier to maintain and update styles</li>
                                        <li>Better for teams (developers can work separately on HTML and CSS)</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Disadvantages:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Requires an additional HTTP request</li>
                                        <li>Page may display without styles until CSS loads</li>
                                        <li>More files to manage</li>
                                        <li>Not suitable for email templates (where external files aren't supported)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Multiple Stylesheets</h3>
                                    <p className="text-text-secondary">
                                        You can link multiple CSS files to a single HTML document. This is useful for organizing styles into logical groups (e.g., layout.css, typography.css, colors.css) or when using CSS frameworks alongside custom styles.
                                    </p>
                                    <CodeBlock
                                        code={`<head>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="framework.css">
  <link rel="stylesheet" href="main.css">
</head>`}
                                    />
                                    <p className="text-text-secondary mt-2">
                                        The order matters: styles in later files can override earlier ones.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Method Comparison */}
                        <section id="comparison" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Method Comparison
                            </h2>
                            <div className="prose max-w-none mb-6">
                                <p className="text-text-secondary">
                                    Each method has its place in web development. Here's a comparison to help you choose the right approach for different situations:
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                    <tr className="bg-primary-light/10">
                                        <th className="border border-gray-200 p-3 text-left">Feature</th>
                                        <th className="border border-gray-200 p-3 text-left">Inline CSS</th>
                                        <th className="border border-gray-200 p-3 text-left">Internal CSS</th>
                                        <th className="border border-gray-200 p-3 text-left">External CSS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-medium">Best for</td>
                                        <td className="border border-gray-200 p-3">Single element styling, overrides, testing</td>
                                        <td className="border border-gray-200 p-3">Single-page websites, prototypes</td>
                                        <td className="border border-gray-200 p-3">Multi-page websites, production sites</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-200 p-3 font-medium">Reusability</td>
                                        <td className="border border-gray-200 p-3">None</td>
                                        <td className="border border-gray-200 p-3">Within the same page</td>
                                        <td className="border border-gray-200 p-3">Across multiple pages</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-medium">Maintenance</td>
                                        <td className="border border-gray-200 p-3">Difficult</td>
                                        <td className="border border-gray-200 p-3">Moderate</td>
                                        <td className="border border-gray-200 p-3">Easy</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-200 p-3 font-medium">Page Load Impact</td>
                                        <td className="border border-gray-200 p-3">Increases HTML size</td>
                                        <td className="border border-gray-200 p-3">Increases initial page size</td>
                                        <td className="border border-gray-200 p-3">Additional HTTP request but can be cached</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-medium">Caching</td>
                                        <td className="border border-gray-200 p-3">No benefits</td>
                                        <td className="border border-gray-200 p-3">No benefits</td>
                                        <td className="border border-gray-200 p-3">Can be cached by browser</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-200 p-3 font-medium">Specificity</td>
                                        <td className="border border-gray-200 p-3">Highest (hardest to override)</td>
                                        <td className="border border-gray-200 p-3">Normal CSS specificity rules</td>
                                        <td className="border border-gray-200 p-3">Normal CSS specificity rules</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Best Practice</h3>
                                    <p className="text-text-secondary">
                                        For most websites, external CSS is the recommended approach. It provides the best separation of concerns, maintainability, and performance benefits. However, you may occasionally use inline CSS for quick fixes or testing, and internal CSS for single-page applications or demos.
                                    </p>
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
                                    Practice adding CSS to HTML using all three methods. Create a simple HTML document and style it three different ways:
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
  <title>CSS Methods Practice</title>
  
  <!-- Internal CSS -->
  <style>
    /* Internal CSS styles */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      color: #2c3e50;
      text-align: center;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    
    .info-box {
      background-color: #e8f4fd;
      border-left: 4px solid #2196f3;
      padding: 15px;
      margin: 20px 0;
    }
  </style>
  
  <!-- External CSS (uncomment to use) -->
  <!-- <link rel="stylesheet" href="styles.css"> -->
</head>
<body>
  <div class="container">
    <h1>CSS Methods Practice</h1>
    
    <!-- Using Internal CSS -->
    <h2>Internal CSS Example</h2>
    <p>This paragraph is styled using the internal CSS defined in the head section.</p>
    <div class="info-box">
      <p>This is an info box styled with a class from the internal stylesheet.</p>
    </div>
    
    <!-- Using Inline CSS -->
    <h2 style="color: #e91e63; border-bottom: 2px solid #e91e63; padding-bottom: 5px;">
      Inline CSS Example
    </h2>
    <p style="font-size: 18px; color: #555; font-style: italic;">
      This paragraph is styled using inline CSS with the style attribute.
    </p>
    
    <!-- Area for External CSS (would be styled if the external stylesheet was linked) -->
    <h2>External CSS Example</h2>
    <p>If the external stylesheet was linked, this section would be styled according to those rules.</p>
    <div class="external-box">
      <p>This box has a class that would be styled by the external CSS file.</p>
    </div>
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
        <span className="text-xs text-gray-400">External CSS File</span>
    </div>

    <CodeBlock
        code={`/* External CSS styles */
h2 {
  color: #8e44ad;
  margin-top: 30px;
}

.external-box {
  background-color: #f9edf9;
  border: 2px dashed #8e44ad;
  border-radius: 5px;
  padding: 15px;
  margin: 20px 0;
}

/* These styles would override the internal ones if linked */
.info-box {
  background-color: #edf9ed;
  border-left: 4px solid #27ae60;
}`}
    />

</div>

<div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex">
    <div className="text-primary-dark mr-4 mt-1">
        <Info size={24} />
    </div>
    <div>
        <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
        <p className="text-text-secondary">
            In real-world projects, you'll often use a combination of these methods. External CSS is your main approach, internal CSS might be used for page-specific styles, and inline CSS for dynamic styles applied through JavaScript or for quick overrides.
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
            <span className="text-text-secondary">Inline CSS is applied directly to HTML elements using the style attribute</span>
        </li>
        <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
            <span className="text-text-secondary">Internal CSS is placed within a style tag in the head section of an HTML document</span>
        </li>
        <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
            <span className="text-text-secondary">External CSS is stored in separate .css files and linked to HTML documents</span>
        </li>
        <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
            <span className="text-text-secondary">External CSS is generally the best approach for multi-page websites and production environments</span>
        </li>
        <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
            <span className="text-text-secondary">Each method has advantages and appropriate use cases</span>
        </li>
    </ul>
</section>

{/* Navigation */}
<div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
    <Link
        href="/css/introduction"
        className="flex items-center text-primary-dark hover:text-dark transition-colors"
    >
        <ArrowLeft size={16} className="mr-2" />
        Previous: Introduction to CSS
    </Link>
    <Link
        href="/css/selectors"
        className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
    >
        Next: CSS Selectors
        <ArrowRight size={16} className="ml-2" />
    </Link>
</div>
</div>
</div>
</div>
</div>
);
}