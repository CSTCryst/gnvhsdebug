// src/app/css/typography/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function TypographyPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Typography</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    CSS Typography
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>CSS Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 7 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Typography is the art of arranging text to make it legible, readable, and visually appealing. CSS provides powerful tools to control typography on the web.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn how to use CSS to style text, specify fonts, control text layout, and create visually engaging typography for your web pages.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#font-properties" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Font Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#text-properties" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Text Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#web-fonts" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Web Fonts
                                    </a>
                                </li>
                                <li>
                                    <a href="#responsiveness" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Responsive Typography
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

                        {/* Font Properties */}
                        <section id="font-properties" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Font Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS provides several properties to control how text is rendered, from the typeface and size to style and weight.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Font Properties */

/* Font family */
p {
  font-family: Arial, Helvetica, sans-serif;  /* Fallback system */
}

h1 {
  font-family: 'Times New Roman', Times, serif;
}

/* Font size */
body {
  font-size: 16px;  /* Base font size */
}

h1 {
  font-size: 2em;  /* 2 times the parent element's font size */
}

h2 {
  font-size: 1.5rem;  /* 1.5 times the root element's font size */
}

/* Font weight */
p {
  font-weight: normal;  /* or 400 */
}

h1 {
  font-weight: bold;  /* or 700 */
}

strong {
  font-weight: 800;  /* Extra-bold */
}

/* Font style */
em {
  font-style: italic;
}

.normal {
  font-style: normal;
}

/* Font variant */
.small-caps {
  font-variant: small-caps;
}

/* Line height */
p {
  line-height: 1.5;  /* 1.5 times the font size */
}

.tight {
  line-height: 1.2;
}

.spacious {
  line-height: 2;
}

/* Font shorthand */
body {
  font: italic bold 16px/1.5 Arial, sans-serif;
  /* font-style font-weight font-size/line-height font-family */
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Font Properties Examples:</h3>
                                <div className="space-y-5">
                                    <div>
                                        <p className="font-semibold text-dark">Font Family:</p>
                                        <div className="mt-2 space-y-2">
                                            <p style={{fontFamily: "Arial, sans-serif"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                Arial, sans-serif - Sans-serif font family
                                            </p>
                                            <p style={{fontFamily: "Georgia, serif"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                Georgia, serif - Serif font family
                                            </p>
                                            <p style={{fontFamily: "monospace"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                Monospace - Fixed-width characters
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark">Font Size:</p>
                                        <div className="mt-2 space-y-2">
                                            <p style={{fontSize: "12px"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                12px - Small text
                                            </p>
                                            <p style={{fontSize: "16px"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                16px - Base text (common default)
                                            </p>
                                            <p style={{fontSize: "24px"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                24px - Larger text
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark">Font Weight:</p>
                                        <div className="mt-2 space-y-2">
                                            <p style={{fontWeight: "300"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                font-weight: 300 - Light
                                            </p>
                                            <p style={{fontWeight: "normal"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                font-weight: normal (400) - Regular
                                            </p>
                                            <p style={{fontWeight: "700"}} className="border-l-4 border-primary-light pl-3 py-1">
                                                font-weight: 700 - Bold
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark">Line Height:</p>
                                        <div className="mt-2 space-y-4">
                                            <div style={{lineHeight: "1"}} className="border-l-4 border-primary-light pl-3 py-1 bg-gray-50">
                                                Line height: 1 - This text has a very tight line spacing. This text has a very tight line spacing. This text has a very tight line spacing.
                                            </div>
                                            <div style={{lineHeight: "1.5"}} className="border-l-4 border-primary-light pl-3 py-1 bg-gray-50">
                                                Line height: 1.5 - This text has a comfortable line spacing for reading. This text has a comfortable line spacing for reading. This text has a comfortable line spacing for reading.
                                            </div>
                                            <div style={{lineHeight: "2"}} className="border-l-4 border-primary-light pl-3 py-1 bg-gray-50">
                                                Line height: 2 - This text has a very spacious line spacing. This text has a very spacious line spacing. This text has a very spacious line spacing.
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
                                    <h3 className="font-semibold text-dark mb-2">Font Stacks:</h3>
                                    <p className="text-text-secondary mb-2">
                                        Always use a "font stack" when specifying font families to provide fallbacks if a font isn't available on the user's device.
                                    </p>
                                    <pre className="bg-white p-2 rounded text-sm overflow-x-auto">
                                        <code className="text-text-secondary">font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;</code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Text Properties */}
                        <section id="text-properties" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Text Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS offers several properties to control the alignment, decoration, spacing, and transformation of text.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Text Properties */

/* Text alignment */
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.justify {
  text-align: justify;
}

/* Text decoration */
a {
  text-decoration: none;  /* Remove underline */
}

.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}

/* Text decoration styling */
.fancy-underline {
  text-decoration: underline wavy red;  /* style, type, color */
}

/* Text transformation */
.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;  /* Capitalize first letter of each word */
}

/* Text indentation */
.indented {
  text-indent: 2em;
}

/* Letter spacing */
.expanded {
  letter-spacing: 2px;
}

.condensed {
  letter-spacing: -1px;
}

/* Word spacing */
.word-spaced {
  word-spacing: 5px;
}

/* Text shadow */
.shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* White space handling */
.nowrap {
  white-space: nowrap;
}

.pre {
  white-space: pre;
}

/* Text overflow */
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`}
                            />

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Responsive Units:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>px</code> - Fixed size, doesn't scale</li>
                                        <li><code>em</code> - Relative to parent element's font size</li>
                                        <li><code>rem</code> - Relative to root element's font size</li>
                                        <li><code>vw</code> - Relative to viewport width (1vw = 1% of viewport width)</li>
                                        <li><code>vh</code> - Relative to viewport height</li>
                                        <li><code>%</code> - Percentage of parent element's font size</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Modern Responsive Techniques:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>calc()</code> - Calculate values (e.g., <code>calc(1rem + 1vw)</code>)</li>
                                        <li><code>clamp(min, preferred, max)</code> - Sets a value between a minimum and maximum</li>
                                        <li><code>min()</code> - Uses the smallest of multiple values</li>
                                        <li><code>max()</code> - Uses the largest of multiple values</li>
                                        <li>Media queries for breakpoint-specific adjustments</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Example of Fluid Typography:</h3>
                                <div className="text-text-secondary">
                                    <p><strong>Fixed Size:</strong> Always 16px regardless of screen size</p>
                                    <p className="mt-1"><strong>Fluid Size:</strong> Scales between 16px and 24px based on viewport width</p>
                                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                                        <pre className="text-sm overflow-x-auto">
{`h1 {
  /* Minimum 20px, scales with viewport width, maximum 32px */
  font-size: clamp(1.25rem, 4vw, 2rem);
  
  /* Alternative with calc() */
  /* font-size: calc(1.25rem + 1vw); */
}`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="mt-6 mb-4 border-t border-gray-200 pt-4">
                                    <p className="text-text-secondary mb-2">Resize your browser window to see how these headings would scale:</p>
                                    <h3 className="text-xl" style={{fontSize: "16px"}}>Fixed Size Heading (16px)</h3>
                                    <h3 className="text-xl mt-3" style={{fontSize: "clamp(16px, 4vw, 24px)"}}>Fluid Heading (clamp(16px, 4vw, 24px))</h3>
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
                                    Experiment with typography properties to style this HTML example. Copy the code and apply different font and text properties to see how they affect the appearance.
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
  <title>CSS Typography Practice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1 class="title">CSS Typography</h1>
      <p class="subtitle">Mastering text styling on the web</p>
    </header>
    
    <main>
      <section class="intro">
        <h2>Introduction to Typography</h2>
        <p class="lead">Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.</p>
        <p>Good typography enhances the user experience, establishes hierarchy, and conveys meaning. CSS provides powerful tools to control typography on the web.</p>
      </section>
      
      <section class="examples">
        <h2>Text Styling Examples</h2>
        
        <div class="example-card font-family">
          <h3>Font Families</h3>
          <p class="sans-serif">This text uses a sans-serif font.</p>
          <p class="serif">This text uses a serif font.</p>
          <p class="monospace">This text uses a monospace font.</p>
        </div>
        
        <div class="example-card text-decoration">
          <h3>Text Decoration</h3>
          <p class="underline">This text has an underline.</p>
          <p class="line-through">This text has a line through it.</p>
          <p class="overline">This text has an overline.</p>
          <p class="fancy-underline">This text has a fancy underline.</p>
        </div>
        
        <div class="example-card text-transform">
          <h3>Text Transformation</h3>
          <p class="uppercase">This text is uppercase.</p>
          <p class="lowercase">THIS TEXT IS LOWERCASE.</p>
          <p class="capitalize">this text is capitalized.</p>
        </div>
        
        <div class="example-card text-align">
          <h3>Text Alignment</h3>
          <p class="align-left">This text is left-aligned.</p>
          <p class="align-center">This text is center-aligned.</p>
          <p class="align-right">This text is right-aligned.</p>
          <p class="align-justify">This text is justified. This creates even spacing between words to align with both left and right margins. It works best for longer paragraphs of text.</p>
        </div>
        
        <div class="example-card spacing">
          <h3>Spacing</h3>
          <p class="letter-spacing">This text has increased letter spacing.</p>
          <p class="word-spacing">This text has increased word spacing.</p>
          <p class="line-height">This paragraph has increased line height, which improves readability for longer blocks of text. Notice how the lines have more space between them, making it easier to scan.</p>
        </div>
      </section>
      
      <section class="responsive">
        <h2>Responsive Typography</h2>
        <p>This section demonstrates responsive typography that adjusts based on screen size.</p>
        <p class="fluid-text">This text uses fluid sizing that scales with the viewport.</p>
        <h3 class="clamp-heading">This heading uses clamp() for responsive sizing</h3>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2025 Typography Example</p>
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

                                <CodeBlock language={"css"}
                                    code={`/* Base styles */
:root {
  /* Define root font size for rem units */
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f8f8;
  padding: 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Header Typography */
header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  font-weight: 300;
}

/* Section Typography */
section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #34495e;
}

/* Example Cards */
.example-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.example-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #3498db;
}

/* Font Family Examples */
.sans-serif {
  font-family: Arial, Helvetica, sans-serif;
}

.serif {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.monospace {
  font-family: 'Courier New', Courier, monospace;
}

/* Text Decoration Examples */
.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}

.fancy-underline {
  text-decoration: underline wavy #e74c3c;
}

/* Text Transform Examples */
.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}

/* Text Alignment Examples */
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.align-justify {
  text-align: justify;
}

/* Spacing Examples */
.letter-spacing {
  letter-spacing: 2px;
}

.word-spacing {
  word-spacing: 5px;
}

.line-height {
  line-height: 2;
}

/* Responsive Typography */
.fluid-text {
  font-size: calc(1rem + 1vw);
  margin-bottom: 1rem;
}

.clamp-heading {
  font-size: clamp(1.2rem, 5vw, 2rem);
  color: #3498db;
  margin-bottom: 1rem;
}

/* Footer */
footer {
  margin-top: 40px;
  text-align: center;
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Media Queries for Responsive Typography */
@media screen and (min-width: 768px) {
  body {
    font-size: 17px;
  }
  
  .title {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 480px) {
  body {
    font-size: 15px;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .container {
    padding: 15px;
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
                                        Typography is a fundamental aspect of good web design. Focus on readability first, then aesthetics. Consider line length (45-75 characters per line is ideal), contrast, and hierarchy. Use a limited number of fonts (2-3 maximum) for a cohesive design.
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
                                    <span className="text-text-secondary">Font properties control typeface, size, weight, and style</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Text properties affect alignment, decoration, spacing, and transformation</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Web fonts expand typography options beyond system fonts</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Responsive typography ensures readability across different devices</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/css/box-model"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Previous: Box Model
                            </Link>
                            <Link
                                href="/css/layout-positioning"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Layout and Positioning
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}