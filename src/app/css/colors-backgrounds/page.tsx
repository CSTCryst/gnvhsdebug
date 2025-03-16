// src/app/css/colors-backgrounds/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function ColorsBackgroundsPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Colors and Backgrounds</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    CSS Colors and Backgrounds
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
                                    Colors and backgrounds are essential elements of web design, helping to establish mood, enhance readability, and guide user attention.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn about different color formats, color functions, and how to use various background properties to create visually appealing web pages.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#color-formats" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Color Formats
                                    </a>
                                </li>
                                <li>
                                    <a href="#color-properties" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Color Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#background-properties" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Background Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#gradients" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Gradients
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

                        {/* Color Formats */}
                        <section id="color-formats" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Color Formats
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS supports multiple ways to specify colors. Each format has its advantages and use cases.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Named Colors */
.element-1 {
  color: red;
  background-color: darkblue;
}

/* Hexadecimal Colors */
.element-2 {
  color: #ff0000;  /* Full hex - red */
  background-color: #00f;  /* Shorthand hex - blue */
}

/* RGB and RGBA Colors */
.element-3 {
  color: rgb(255, 0, 0);  /* RGB - red */
  background-color: rgba(0, 0, 255, 0.5);  /* RGBA - semi-transparent blue */
}

/* HSL and HSLA Colors */
.element-4 {
  color: hsl(0, 100%, 50%);  /* HSL - red */
  background-color: hsla(240, 100%, 50%, 0.5);  /* HSLA - semi-transparent blue */
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Color Format Examples:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold text-dark mb-2">Named Colors</p>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "red"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "blue"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "green"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "purple"}}></div>
                                        </div>
                                        <p className="text-text-secondary text-sm mt-2">Easy to read but limited selection</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark mb-2">Hexadecimal</p>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "#ff0000"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "#00ff00"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "#0000ff"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "#ff00ff"}}></div>
                                        </div>
                                        <p className="text-text-secondary text-sm mt-2">Widely used in web design</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark mb-2">RGB/RGBA</p>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "rgb(255,0,0)"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "rgb(0,255,0)"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "rgb(0,0,255)"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "rgba(0,0,255,0.5)"}}></div>
                                        </div>
                                        <p className="text-text-secondary text-sm mt-2">Good for programmatic manipulation</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark mb-2">HSL/HSLA</p>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "hsl(0,100%,50%)"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "hsl(120,100%,50%)"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "hsl(240,100%,50%)"}}></div>
                                            <div className="w-16 h-16 rounded-md" style={{backgroundColor: "hsla(240,100%,50%,0.5)"}}></div>
                                        </div>
                                        <p className="text-text-secondary text-sm mt-2">Intuitive for color adjustments</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Understanding HSL:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><strong>H (Hue)</strong>: 0-360 degrees on the color wheel (0=red, 120=green, 240=blue)</li>
                                        <li><strong>S (Saturation)</strong>: 0% (gray) to 100% (full color)</li>
                                        <li><strong>L (Lightness)</strong>: 0% (black) to 100% (white), with 50% being normal color</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Color Properties */}
                        <section id="color-properties" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Color Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS provides properties to control the color of text, borders, and other elements.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Basic Color Properties */
.element {
  /* Text color */
  color: #333;
  
  /* Background color */
  background-color: #f5f5f5;
  
  /* Border color */
  border: 2px solid #3498db;
  
  /* Outline color */
  outline: 1px dashed #e74c3c;
}

/* Transparency with opacity property */
.transparent-element {
  background-color: black;
  opacity: 0.5;  /* Makes the entire element and its contents 50% transparent */
}

/* Specific opacity with RGBA or HSLA */
.partial-transparent {
  color: rgba(0, 0, 0, 0.7);  /* Semi-transparent text */
  background-color: hsla(210, 90%, 50%, 0.3);  /* Semi-transparent background */
}`}
                            />

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Text and Border Colors:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>color</code>: Sets text color</li>
                                        <li><code>border-color</code>: Sets border color</li>
                                        <li><code>outline-color</code>: Sets outline color</li>
                                        <li><code>text-decoration-color</code>: Sets color for underlines, etc.</li>
                                        <li><code>caret-color</code>: Sets the color of the cursor in inputs</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Transparency and Opacity:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>opacity</code>: Affects the entire element (0.0-1.0)</li>
                                        <li><code>rgba()</code>: Transparency for just the color</li>
                                        <li><code>hsla()</code>: Transparency with HSL colors</li>
                                        <li><code>transparent</code>: Keyword for completely transparent</li>
                                        <li><code>currentColor</code>: Inherits from current text color</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Example Element */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Element Using Various Color Properties:</h3>
                                <div className="p-4 border-2 border-blue-500 bg-blue-100 rounded-md w-full md:w-2/3 mx-auto relative">
                                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Notice</div>
                                    <h4 className="text-blue-800 font-bold mb-2">Color Example</h4>
                                    <p className="text-blue-600">This element demonstrates several color properties:</p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-blue-700">
                                        <li><span className="text-red-600 font-semibold">Different text colors</span></li>
                                        <li>Blue background color</li>
                                        <li>Colored border</li>
                                        <li>Colored notification badge</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Background Properties */}
                        <section id="background-properties" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Background Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS offers a variety of properties to control backgrounds, from simple colors to complex image configurations.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Basic Background Properties */
.element {
  /* Background color */
  background-color: #f0f0f0;
  
  /* Background image */
  background-image: url('image.jpg');
  
  /* Background repetition */
  background-repeat: no-repeat;  /* Options: repeat, repeat-x, repeat-y, no-repeat */
  
  /* Background position */
  background-position: center center;  /* X and Y positions */
  
  /* Background size */
  background-size: cover;  /* Options: cover, contain, specific dimensions */
  
  /* Background attachment */
  background-attachment: fixed;  /* Options: scroll, fixed, local */
  
  /* Background origin and clip */
  background-origin: content-box;  /* Where the background starts */
  background-clip: padding-box;  /* Where the background is visible */
}

/* Shorthand Background Property */
.shorthand {
  background: #f0f0f0 url('image.jpg') no-repeat center / cover fixed;
}`}
                            />

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Background Shorthand Order:</h3>
                                    <p className="text-text-secondary mb-2">
                                        The <code>background</code> shorthand follows this order (all optional except for <code>background-color</code>):
                                    </p>
                                    <ol className="list-decimal list-inside space-y-1 text-text-secondary">
                                        <li><code>background-color</code></li>
                                        <li><code>background-image</code></li>
                                        <li><code>background-repeat</code></li>
                                        <li><code>background-position</code></li>
                                        <li><code>background-size</code> (must include / before size)</li>
                                        <li><code>background-attachment</code></li>
                                    </ol>
                                </div>
                            </div>

                            {/* Visual Examples */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Background-size Options:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-text-secondary mb-2"><code>background-size: cover</code></p>
                                        <div className="h-32 rounded-md border border-gray-200" style={{
                                            backgroundImage: "url('https://via.placeholder.com/400x300')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}></div>
                                        <p className="text-text-light text-sm mt-1">Covers entire element, may crop</p>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary mb-2"><code>background-size: contain</code></p>
                                        <div className="h-32 rounded-md border border-gray-200" style={{
                                            backgroundImage: "url('https://via.placeholder.com/400x300')",
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat"
                                        }}></div>
                                        <p className="text-text-light text-sm mt-1">Shows entire image, may have empty space</p>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary mb-2"><code>background-size: 100px 100px</code></p>
                                        <div className="h-32 rounded-md border border-gray-200" style={{
                                            backgroundImage: "url('https://via.placeholder.com/100x100')",
                                            backgroundSize: "100px 100px",
                                            backgroundRepeat: "repeat"
                                        }}></div>
                                        <p className="text-text-light text-sm mt-1">Exact dimensions, may repeat</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Gradients */}
                        <section id="gradients" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Gradients
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Gradients are smooth transitions between two or more colors. CSS can create linear, radial, and conic gradients.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Linear Gradient - vertical (top to bottom) */
.linear-gradient-1 {
  background-image: linear-gradient(#3498db, #2ecc71);
}

/* Linear Gradient - horizontal (left to right) */
.linear-gradient-2 {
  background-image: linear-gradient(to right, #3498db, #2ecc71);
}

/* Linear Gradient - diagonal */
.linear-gradient-3 {
  background-image: linear-gradient(to bottom right, #3498db, #2ecc71);
}

/* Linear Gradient - with angle */
.linear-gradient-4 {
  background-image: linear-gradient(45deg, #3498db, #2ecc71);
}

/* Linear Gradient - with multiple color stops */
.linear-gradient-5 {
  background-image: linear-gradient(#3498db, #8e44ad, #2ecc71);
}

/* Radial Gradient - circular */
.radial-gradient-1 {
  background-image: radial-gradient(#3498db, #2ecc71);
}

/* Radial Gradient - elliptical */
.radial-gradient-2 {
  background-image: radial-gradient(ellipse, #3498db, #2ecc71);
}

/* Conic Gradient */
.conic-gradient {
  background-image: conic-gradient(#3498db, #8e44ad, #2ecc71, #3498db);
}`}
                            />

                            {/* Visual Examples */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Gradient Examples:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-text-secondary mb-2"><strong>Linear Gradients:</strong></p>
                                        <div className="space-y-3">
                                            <div className="h-12 rounded-md" style={{backgroundImage: "linear-gradient(#3498db, #2ecc71)"}}></div>
                                            <p className="text-text-light text-sm">Top to bottom (default)</p>

                                            <div className="h-12 rounded-md" style={{backgroundImage: "linear-gradient(to right, #3498db, #2ecc71)"}}></div>
                                            <p className="text-text-light text-sm">Left to right</p>

                                            <div className="h-12 rounded-md" style={{backgroundImage: "linear-gradient(45deg, #3498db, #8e44ad, #2ecc71)"}}></div>
                                            <p className="text-text-light text-sm">45-degree angle with multiple colors</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-text-secondary mb-2"><strong>Radial & Conic Gradients:</strong></p>
                                        <div className="space-y-3">
                                            <div className="h-24 rounded-md" style={{backgroundImage: "radial-gradient(#3498db, #2ecc71)"}}></div>
                                            <p className="text-text-light text-sm">Radial gradient (circular)</p>

                                            <div className="h-24 rounded-md" style={{backgroundImage: "conic-gradient(#3498db, #8e44ad, #2ecc71, #3498db)"}}></div>
                                            <p className="text-text-light text-sm">Conic gradient</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Gradient Tips:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Use percentages to precisely control color stops</li>
                                        <li>Create sharp transitions by placing stops close together</li>
                                        <li>Combine multiple backgrounds for complex effects</li>
                                        <li>Use color functions like <code>rgba()</code> to add transparency</li>
                                        <li>Create patterns by using multiple linear gradients</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Browser Support:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Linear and radial gradients are supported in all modern browsers</li>
                                        <li>Conic gradients have good support but may need prefixes for older browsers</li>
                                        <li>Always provide a solid color fallback for older browsers</li>
                                        <li>Consider using multiple backgrounds with gradients for complex designs</li>
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
                                    Practice using colors and backgrounds with this example. Copy the code and experiment with different color formats, gradients, and background properties.
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
  <title>CSS Colors and Backgrounds</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>Colors and Backgrounds</h1>
      <p class="subtitle">Exploring CSS color and background properties</p>
    </header>
    
    <section class="color-examples">
      <h2>Color Examples</h2>
      
      <div class="card named-colors">
        <h3>Named Colors</h3>
        <p>This text uses a <span class="red">red</span> named color.</p>
      </div>
      
      <div class="card hex-colors">
        <h3>Hexadecimal Colors</h3>
        <p>This text uses a <span class="blue-hex">#0000FF</span> hex color.</p>
      </div>
      
      <div class="card rgb-colors">
        <h3>RGB Colors</h3>
        <p>This text uses <span class="green-rgb">rgb(0, 128, 0)</span> color.</p>
      </div>
      
      <div class="card rgba-colors">
        <h3>RGBA Colors with Transparency</h3>
        <p>This has an <span class="rgba-bg">rgba background</span> with 50% opacity.</p>
      </div>
    </section>
    
    <section class="gradient-examples">
      <h2>Gradient Examples</h2>
      
      <div class="gradient-card linear-gradient">
        <h3>Linear Gradient</h3>
        <p>Blue to green, top to bottom</p>
      </div>
      
      <div class="gradient-card diagonal-gradient">
        <h3>Diagonal Gradient</h3>
        <p>Purple to orange, diagonal</p>
      </div>
      
      <div class="gradient-card radial-gradient">
        <h3>Radial Gradient</h3>
        <p>Center outward</p>
      </div>
    </section>
    
    <section class="background-examples">
      <h2>Background Examples</h2>
      
      <div class="bg-card bg-repeat">
        <h3>Background Repeat</h3>
        <p>Small image repeated</p>
      </div>
      
      <div class="bg-card bg-cover">
        <h3>Background Cover</h3>
        <p>Image covers element</p>
      </div>
      
      <div class="bg-card bg-multi">
        <h3>Multiple Backgrounds</h3>
        <p>Layered backgrounds</p>
      </div>
    </section>
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
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
  /* Linear gradient as background */
  background-image: linear-gradient(to right, #e0f7fa, #b2ebf2, #80deea);
  padding: 30px;
  border-radius: 8px;
}

h1 {
  color: #01579b; /* Dark blue color */
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(1, 87, 155, 0.7); /* Semi-transparent blue */
  font-size: 18px;
  font-style: italic;
}

section {
  margin-bottom: 40px;
}

h2 {
  border-bottom: 2px solid #01579b;
  padding-bottom: 10px;
  color: #01579b;
}

/* Card styles */
.card, .gradient-card, .bg-card {
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Color section */
.named-colors {
  background-color: ivory;
}

.hex-colors {
  background-color: #f0f8ff; /* Alice Blue */
}

.rgb-colors {
  background-color: rgb(240, 255, 240); /* Honeydew */
}

.rgba-colors {
  background-color: white;
}

.red {
  color: red;
  font-weight: bold;
}

.blue-hex {
  color: #0000FF;
  font-weight: bold;
}

.green-rgb {
  color: rgb(0, 128, 0);
  font-weight: bold;
}

.rgba-bg {
  background-color: rgba(255, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 4px;
}

/* Gradient section */
.gradient-card {
  color: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.linear-gradient {
  background-image: linear-gradient(#3498db, #2ecc71);
}

.diagonal-gradient {
  background-image: linear-gradient(135deg, #9b59b6, #e67e22);
}

.radial-gradient {
  background-image: radial-gradient(circle, #3498db, #8e44ad);
}

/* Background section */
.bg-card {
  color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}

.bg-repeat {
  background-color: #333;
  background-image: url('https://via.placeholder.com/30');
  background-repeat: repeat;
}

.bg-cover {
  background-image: url('https://via.placeholder.com/800x400');
  background-size: cover;
  background-position: center;
}

.bg-multi {
  background-color: #2c3e50;
  background-image: 
    linear-gradient(rgba(52, 152, 219, 0.5), rgba(52, 152, 219, 0)),
    url('https://via.placeholder.com/800x400');
  background-size: cover;
  background-position: center;
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
                                        Try modifying the CSS to create your own color schemes and gradients. Remember that good color design considers contrast for readability, consistency across your interface, and accessibility for users with visual impairments.
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
                                    <span className="text-text-secondary">CSS supports multiple color formats: named colors, hex, RGB/RGBA, and HSL/HSLA</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Use color properties to style text, backgrounds, borders, and other element parts</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Background properties control images, colors, and how they're displayed</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Gradients create smooth color transitions that can enhance your design</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/css/selectors-properties"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Previous: Selectors and Properties
                            </Link>
                            <Link
                                href="/css/box-model"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Box Model
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}