// src/app/css/introduction/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function IntroductionToCSSPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Introduction to CSS</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Introduction to CSS
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>CSS Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 5 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    CSS (Cascading Style Sheets) is the language used to style and enhance the visual presentation of web pages. It works alongside HTML to transform plain document structure into attractive, interactive websites.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn what CSS is, why it's important, and understand the fundamental concepts that make it work.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#what-is-css" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        What is CSS?
                                    </a>
                                </li>
                                <li>
                                    <a href="#why-use-css" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Why Use CSS?
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-css-works" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        How CSS Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#css-history" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        CSS History and Versions
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* What is CSS */}
                        <section id="what-is-css" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                What is CSS?
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS (Cascading Style Sheets) is a stylesheet language used to describe the look and formatting of a document written in HTML. CSS controls the visual presentation of web pages, including aspects like layout, colors, fonts, and spacing.
                                </p>
                                <p className="text-text-secondary mb-4">
                                    Think of HTML as the structure or skeleton of a webpage, while CSS is the skin, clothing, and styling that makes it visually appealing. Without CSS, websites would be plain text documents with basic formatting.
                                </p>
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">HTML vs. CSS</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <h4 className="font-semibold text-dark mb-3 flex items-center">
                                            <div className="w-6 h-6 rounded-lg bg-gray-200 flex items-center justify-center mr-2 text-dark font-bold text-xs">
                                                HTML
                                            </div>
                                            HTML (Structure)
                                        </h4>
                                        <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                            <li>Defines the content</li>
                                            <li>Creates the structure</li>
                                            <li>Identifies elements (headings, paragraphs, etc.)</li>
                                            <li>Provides meaning and semantics</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                        <h4 className="font-semibold text-dark mb-3 flex items-center">
                                            <div className="w-6 h-6 rounded-lg bg-primary-light flex items-center justify-center mr-2 text-primary-dark font-bold text-xs">
                                                CSS
                                            </div>
                                            CSS (Presentation)
                                        </h4>
                                        <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                            <li>Controls the appearance</li>
                                            <li>Defines the layout</li>
                                            <li>Sets colors, fonts, and spacing</li>
                                            <li>Creates visual effects and animations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <CodeBlock
                                   language={"css"} code={`/* Example of CSS styling */
h1 {
  color: navy;
  font-size: 2rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

p {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}`}
                                />
                            </div>
                        </section>

                        {/* Why Use CSS */}
                        <section id="why-use-css" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Why Use CSS?
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS offers numerous benefits that make it essential for modern web development:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">Separation of Concerns</h4>
                                    <p className="text-text-secondary">CSS allows you to separate content (HTML) from presentation (CSS), making your code more maintainable and easier to update.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">Consistency</h4>
                                    <p className="text-text-secondary">Define styles once and apply them to multiple elements across multiple pages, ensuring a consistent look throughout your website.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">Efficiency</h4>
                                    <p className="text-text-secondary">Make global changes by updating a single CSS file instead of modifying each element on every page, saving time and reducing errors.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">Responsiveness</h4>
                                    <p className="text-text-secondary">Create websites that adapt to different screen sizes and devices, providing an optimal experience for all users.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">Accessibility</h4>
                                    <p className="text-text-secondary">Improve accessibility by controlling text sizes, contrast, and spacing without changing the underlying HTML structure.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">Performance</h4>
                                    <p className="text-text-secondary">Reduce page size by replacing HTML presentational elements with CSS rules, leading to faster loading times.</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Before CSS:</h3>
                                    <p className="text-text-secondary">
                                        Before CSS became widely adopted, web developers used HTML attributes and elements like <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code>, and <code>bgcolor</code> to style pages. This approach was inefficient, hard to maintain, and limited in design possibilities.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How CSS Works */}
                        <section id="how-css-works" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                How CSS Works
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS works by targeting HTML elements and applying styles to them. This process involves three main components:
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">The CSS Rule Structure</h3>

                                <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <div className="bg-gray-50 p-4 rounded-lg overflow-hidden">
                                        <pre className="relative">
                                            <code className="block text-dark">
                                                <span className="text-primary-dark font-bold">selector</span> <span className="text-gray-400">{/* Targets HTML elements */}</span> {"{"}
                                                <br />
                                                &nbsp;&nbsp;<span className="text-blue-600">property</span>: <span className="text-green-600">value</span>; <span className="text-gray-400">{/* Style declaration */}</span>
                                                <br />
                                                {"}"}
                                            </code>
                                            <div className="absolute top-0 right-2 text-xs text-gray-400">Who to style</div>
                                            <div className="absolute top-7 right-2 text-xs text-gray-400">What to change</div>
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">1. Selectors</h4>
                                    <p className="text-text-secondary mb-2">Selectors determine which HTML elements to style.</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                                        <li><code>h1</code> - Element selector</li>
                                        <li><code>.note</code> - Class selector</li>
                                        <li><code>#header</code> - ID selector</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">2. Properties</h4>
                                    <p className="text-text-secondary mb-2">Properties define what aspect of the element to change.</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                                        <li><code>color</code> - Text color</li>
                                        <li><code>font-size</code> - Text size</li>
                                        <li><code>margin</code> - Outer spacing</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h4 className="font-semibold text-dark mb-2">3. Values</h4>
                                    <p className="text-text-secondary mb-2">Values specify how the property should be changed.</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                                        <li><code>blue</code> - Color name</li>
                                        <li><code>16px</code> - Size in pixels</li>
                                        <li><code>2em</code> - Relative size</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-xl font-semibold text-dark mb-3">The Cascade</h3>
                                <p className="text-text-secondary mb-4">
                                    The "cascading" in CSS refers to how styles are applied and how conflicts are resolved. When multiple rules target the same element, CSS uses a set of rules to determine which style takes precedence:
                                </p>

                                <ol className="space-y-4 mb-4">
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mr-3 mt-0.5 text-primary-dark font-bold text-xs">1</div>
                                        <div>
                                            <h4 className="font-semibold text-dark">Specificity</h4>
                                            <p className="text-text-secondary">More specific selectors take precedence over less specific ones. ID selectors (#header) are more specific than class selectors (.note), which are more specific than element selectors (p).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mr-3 mt-0.5 text-primary-dark font-bold text-xs">2</div>
                                        <div>
                                            <h4 className="font-semibold text-dark">Importance</h4>
                                            <p className="text-text-secondary">Rules with <code>!important</code> override other rules. Use sparingly as it breaks the natural cascade.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mr-3 mt-0.5 text-primary-dark font-bold text-xs">3</div>
                                        <div>
                                            <h4 className="font-semibold text-dark">Source Order</h4>
                                            <p className="text-text-secondary">If rules have the same specificity, the one that appears last in the CSS takes precedence.</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div className="p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Lightbulb size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">CSS Processing Model</h3>
                                    <p className="text-text-secondary">
                                        When a browser displays a document, it must combine the document's content with its style information. It processes the document in several phases:
                                    </p>
                                    <ol className="list-decimal list-inside space-y-1 text-text-secondary mt-2">
                                        <li>The browser loads the HTML</li>
                                        <li>It converts HTML into a DOM (Document Object Model)</li>
                                        <li>The browser fetches resources linked to the HTML document, including CSS</li>
                                        <li>The browser parses the CSS and sorts rules by selector types into different "buckets"</li>
                                        <li>It attaches styles to the DOM tree based on the cascade rules</li>
                                        <li>The styled document is displayed on the screen</li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* CSS History and Versions */}
                        <section id="css-history" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                CSS History and Versions
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS has evolved significantly since its introduction, with each version adding new capabilities:
                                </p>
                            </div>

                            <div className="relative border-l-2 border-primary-light/50 pl-6 ml-4 space-y-8 mb-6">
                                <div>
                                    <div className="absolute w-4 h-4 bg-primary-light rounded-full -left-[9px]"></div>
                                    <h3 className="text-xl font-semibold text-dark">CSS1 (1996)</h3>
                                    <p className="text-text-secondary mt-2">The first CSS specification included basic styling capabilities:</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary mt-2">
                                        <li>Font properties</li>
                                        <li>Text colors and backgrounds</li>
                                        <li>Text alignment</li>
                                        <li>Margins, borders, padding</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="absolute w-4 h-4 bg-primary-light rounded-full -left-[9px]"></div>
                                    <h3 className="text-xl font-semibold text-dark">CSS2 (1998)</h3>
                                    <p className="text-text-secondary mt-2">Added more advanced features:</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary mt-2">
                                        <li>Z-index positioning</li>
                                        <li>Media types</li>
                                        <li>Bidirectional text</li>
                                        <li>New font properties</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="absolute w-4 h-4 bg-primary-light rounded-full -left-[9px]"></div>
                                    <h3 className="text-xl font-semibold text-dark">CSS3 (2000s - Present)</h3>
                                    <p className="text-text-secondary mt-2">CSS3 is not a single specification but a collection of modules with significant enhancements:</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary mt-2">
                                        <li>Animations and transitions</li>
                                        <li>Multiple backgrounds</li>
                                        <li>Rounded corners and shadows</li>
                                        <li>Flexbox and Grid layouts</li>
                                        <li>Media queries for responsive design</li>
                                        <li>Custom variables (CSS Variables)</li>
                                        <li>Color gradients and opacity</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="absolute w-4 h-4 bg-primary-light rounded-full -left-[9px]"></div>
                                    <h3 className="text-xl font-semibold text-dark">Modern CSS (Today)</h3>
                                    <p className="text-text-secondary mt-2">The latest CSS features continue to expand what's possible:</p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary mt-2">
                                        <li>Container queries</li>
                                        <li>Subgrid</li>
                                        <li>Logical properties</li>
                                        <li>Improved color functions</li>
                                        <li>Scroll snap</li>
                                        <li>CSS Houdini (low-level CSS API access)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Browser Support</h3>
                                    <p className="text-text-secondary">
                                        Not all browsers support all CSS features, especially newer ones. When working with CSS, it's important to check browser compatibility using resources like <a href="https://caniuse.com" className="text-primary-dark hover:underline">caniuse.com</a> and consider using fallbacks or progressive enhancement techniques.
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
                                    <span className="text-text-secondary">CSS is a styling language that controls the visual presentation of HTML documents</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">It provides benefits like separation of content and presentation, consistency, and maintainability</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">CSS works through selectors, properties, and values to target and style HTML elements</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">The cascade determines which styles apply when multiple rules conflict</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">CSS has evolved from basic styling to powerful layout and animation capabilities</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/html/lists"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Previous: Lists in HTML
                            </Link>
                            <Link
                                href="/css/adding-css"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Adding CSS to HTML
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}