// src/app/css/selectors-properties/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function SelectorsPropertiesPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Selectors and Properties</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    CSS Selectors and Properties
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
                                    Selectors and properties are the foundation of CSS. Selectors determine which HTML elements to style, while properties define how those elements will appear.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn about different types of selectors, how to use them effectively, and how to apply various CSS properties.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#basic-selectors" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Basic Selectors
                                    </a>
                                </li>
                                <li>
                                    <a href="#advanced-selectors" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Advanced Selectors
                                    </a>
                                </li>
                                <li>
                                    <a href="#specificity" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Specificity
                                    </a>
                                </li>
                                <li>
                                    <a href="#properties" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Common Properties
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

                        {/* Basic Selectors */}
                        <section id="basic-selectors" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Basic Selectors
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS provides several ways to select HTML elements. Here are the most fundamental selectors:
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Element Selector - Selects all <p> elements */
p {
  color: blue;
  line-height: 1.6;
}

/* Class Selector - Selects elements with class="highlight" */
.highlight {
  background-color: yellow;
  padding: 5px;
}

/* ID Selector - Selects the element with id="header" */
#header {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Universal Selector - Selects all elements */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Basic Selectors Overview:</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-primary-dark pl-4 py-1">
                                        <p className="font-semibold text-dark">Element Selector</p>
                                        <p className="text-text-secondary">Selects all instances of a specific HTML element</p>
                                        <p className="text-text-light text-sm italic">Example: <code>p</code>, <code>h1</code>, <code>div</code></p>
                                    </div>
                                    <div className="border-l-4 border-primary-dark pl-4 py-1">
                                        <p className="font-semibold text-dark">Class Selector</p>
                                        <p className="text-text-secondary">Selects elements with a specific class attribute</p>
                                        <p className="text-text-light text-sm italic">Example: <code>.highlight</code>, <code>.btn</code>, <code>.container</code></p>
                                    </div>
                                    <div className="border-l-4 border-primary-dark pl-4 py-1">
                                        <p className="font-semibold text-dark">ID Selector</p>
                                        <p className="text-text-secondary">Selects a single element with a specific id attribute</p>
                                        <p className="text-text-light text-sm italic">Example: <code>#header</code>, <code>#nav</code>, <code>#footer</code></p>
                                    </div>
                                    <div className="border-l-4 border-primary-dark pl-4 py-1">
                                        <p className="font-semibold text-dark">Universal Selector</p>
                                        <p className="text-text-secondary">Selects all elements on the page</p>
                                        <p className="text-text-light text-sm italic">Example: <code>*</code></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Advanced Selectors */}
                        <section id="advanced-selectors" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Advanced Selectors
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS provides powerful ways to select elements based on their relationships, attributes, and states.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Descendant Selector - Selects all <p> inside <div> */
div p {
  margin-left: 20px;
}

/* Child Selector - Selects <p> that are direct children of <div> */
div > p {
  font-weight: bold;
}

/* Adjacent Sibling Selector - Selects <p> that directly follows <h2> */
h2 + p {
  font-size: 18px;
}

/* Attribute Selector - Selects <a> with href containing "example.com" */
a[href*="example.com"] {
  color: green;
}

/* Pseudo-class - Selects <a> when hovered */
a:hover {
  text-decoration: underline;
}

/* Pseudo-element - Adds content after each <p> */
p::after {
  content: " ➤";
  color: blue;
}`}
                            />

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Combinators:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>space</code> - Descendant selector</li>
                                        <li><code>&gt;</code> - Child selector</li>
                                        <li><code>+</code> - Adjacent sibling selector</li>
                                        <li><code>~</code> - General sibling selector</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Pseudo-classes:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>:hover</code>, <code>:active</code>, <code>:focus</code> - User interaction</li>
                                        <li><code>:first-child</code>, <code>:last-child</code> - Element position</li>
                                        <li><code>:nth-child()</code> - Pattern-based selection</li>
                                        <li><code>:not()</code> - Negation selection</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Attribute Selectors:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>[attr]</code> - Elements with the attribute</li>
                                        <li><code>[attr="value"]</code> - Elements with exact attribute value</li>
                                        <li><code>[attr^="value"]</code> - Attribute begins with value</li>
                                        <li><code>[attr$="value"]</code> - Attribute ends with value</li>
                                        <li><code>[attr*="value"]</code> - Attribute contains value</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Specificity */}
                        <section id="specificity" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Specificity
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    When multiple selectors target the same element, the browser uses specificity to determine which CSS rule to apply. Understanding specificity is crucial for debugging and writing maintainable CSS.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Specificity calculation examples */

/* Specificity: 0,0,1 */
p {
  color: red;
}

/* Specificity: 0,1,0 */
.text {
  color: blue;
}

/* Specificity: 0,1,1 */
p.text {
  color: green;
}

/* Specificity: 1,0,0 */
#unique {
  color: purple;
}

/* Specificity: 1,0,1 */
#unique p {
  color: orange;
}

/* Inline styles have highest specificity */
<p style="color: cyan;">This text is cyan</p>`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Specificity Hierarchy (from highest to lowest):</h3>
                                <ol className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mr-3 text-white font-bold text-xs">1</div>
                                        <div>
                                            <p className="font-semibold text-dark">Inline styles</p>
                                            <p className="text-text-secondary text-sm">Using the style attribute directly on HTML elements</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mr-3 text-white font-bold text-xs">2</div>
                                        <div>
                                            <p className="font-semibold text-dark">IDs</p>
                                            <p className="text-text-secondary text-sm">Selectors with ID references (#id)</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mr-3 text-white font-bold text-xs">3</div>
                                        <div>
                                            <p className="font-semibold text-dark">Classes, attributes, and pseudo-classes</p>
                                            <p className="text-text-secondary text-sm">(.class, [attr], :hover)</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center mr-3 text-white font-bold text-xs">4</div>
                                        <div>
                                            <p className="font-semibold text-dark">Elements and pseudo-elements</p>
                                            <p className="text-text-secondary text-sm">(p, ::before)</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Important Note:</h3>
                                    <p className="text-text-secondary mb-2">
                                        The <code>!important</code> declaration overrides normal specificity rules and should be used sparingly.
                                    </p>
                                    <pre className="bg-white p-2 rounded text-sm overflow-x-auto">
                                        <code className="text-text-secondary">{`p { color: red !important; }`}</code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Common Properties */}
                        <section id="properties" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Common Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS properties define how selected elements will appear. Here are some commonly used properties grouped by category:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                    <h3 className="font-semibold text-dark mb-3 border-b pb-2">Text Properties</h3>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li><code>color</code>: Text color</li>
                                        <li><code>font-family</code>: Font typeface</li>
                                        <li><code>font-size</code>: Text size</li>
                                        <li><code>font-weight</code>: Text boldness</li>
                                        <li><code>line-height</code>: Line spacing</li>
                                        <li><code>text-align</code>: Text alignment</li>
                                        <li><code>text-decoration</code>: Underline, overline, etc.</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                    <h3 className="font-semibold text-dark mb-3 border-b pb-2">Box Properties</h3>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li><code>width</code>, <code>height</code>: Dimensions</li>
                                        <li><code>margin</code>: Outside spacing</li>
                                        <li><code>padding</code>: Inside spacing</li>
                                        <li><code>border</code>: Element border</li>
                                        <li><code>border-radius</code>: Rounded corners</li>
                                        <li><code>box-shadow</code>: Shadow effect</li>
                                        <li><code>box-sizing</code>: How dimensions are calculated</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                    <h3 className="font-semibold text-dark mb-3 border-b pb-2">Background Properties</h3>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li><code>background-color</code>: Background color</li>
                                        <li><code>background-image</code>: Background image</li>
                                        <li><code>background-repeat</code>: Image repetition</li>
                                        <li><code>background-position</code>: Image position</li>
                                        <li><code>background-size</code>: Image size</li>
                                        <li><code>background-attachment</code>: Image scrolling behavior</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                                    <h3 className="font-semibold text-dark mb-3 border-b pb-2">Layout Properties</h3>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li><code>display</code>: Element rendering type</li>
                                        <li><code>position</code>: Positioning method</li>
                                        <li><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>: Position coordinates</li>
                                        <li><code>float</code>: Element floating</li>
                                        <li><code>z-index</code>: Stacking order</li>
                                        <li><code>overflow</code>: Content overflow handling</li>
                                    </ul>
                                </div>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Example of various properties in use */
.card {
  /* Box properties */
  width: 300px;
  padding: 20px;
  margin: 15px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* Background properties */
  background-color: white;
  background-image: linear-gradient(to bottom, #f9f9f9, white);
  
  /* Text properties */
  color: #333;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  
  /* Layout properties */
  display: flex;
  flex-direction: column;
  position: relative;
}`}
                            />
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
                                    Practice using different selectors and properties by styling this HTML example:
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
  <title>CSS Selectors Practice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="container">
    <header>
      <h1>CSS Selectors and Properties</h1>
      <p class="subtitle">Learn how to select and style HTML elements</p>
    </header>
    
    <nav>
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    
    <main>
      <section>
        <h2>Basic Selectors</h2>
        <p>This paragraph will be styled using an element selector.</p>
        <p class="highlight">This paragraph uses a class selector.</p>
        <p id="special">This paragraph uses an ID selector.</p>
      </section>
      
      <section>
        <h2>Form Elements</h2>
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Your email">
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2025 CSS Practice</p>
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
                                    code={`/* Base styles using element selectors */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

#container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header styles using descendant selectors */
header h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

header .subtitle {
  font-style: italic;
  color: #7f8c8d;
}

/* Navigation styles using child selectors */
nav > ul {
  list-style: none;
  padding: 0;
  display: flex;
  background-color: #3498db;
  border-radius: 4px;
}

nav > ul > li {
  margin: 0;
}

nav a {
  display: block;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
}

/* Pseudo-class selectors */
nav a:hover {
  background-color: #2980b9;
}

nav a.active {
  background-color: #2980b9;
  font-weight: bold;
}

/* Class selector example */
.highlight {
  background-color: #ffffcc;
  padding: 10px;
  border-left: 4px solid #f1c40f;
}

/* ID selector example */
#special {
  color: #e74c3c;
  font-weight: bold;
}

/* Adjacent sibling selector */
h2 + p {
  font-size: 18px;
}

/* Attribute selectors */
input[type="text"] {
  border: 2px solid #3498db;
}

input[type="email"] {
  border: 2px solid #9b59b6;
}

/* Form styles */
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
}

button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

/* Pseudo-element */
section::after {
  content: "";
  display: block;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
}

/* Footer */
footer {
  margin-top: 20px;
  text-align: center;
  color: #7f8c8d;
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
                                        Try modifying the CSS to explore how different selectors and properties affect the appearance. Experiment with combining selectors and adding new properties to deepen your understanding.
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
                                    <span className="text-text-secondary">Element, class, ID, and universal selectors target HTML elements in different ways</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Advanced selectors like combinators and pseudo-classes provide powerful targeting options</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Specificity determines which CSS rules take precedence when conflicts arise</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">CSS properties control the appearance and behavior of selected elements</span>
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
                                href="/css/colors-backgrounds"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Colors and Backgrounds
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}