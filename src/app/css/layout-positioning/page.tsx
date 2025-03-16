// src/app/css/layout-positioning/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function LayoutPositioningPage() {
    return (
        <>
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

                            <CodeBlock language={"css"}
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

                                <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
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
                            </div>
                        </section>

                        {/* Positioning */}
                        <section id="positioning" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
        <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
            2
        </span>
                                Positioning
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS positioning allows you to precisely control the placement of elements on your page. The <code>position</code> property determines how an element is positioned in the document flow.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* CSS Positioning */

/* Default positioning in normal document flow */
.static {
  position: static;
}

/* Positioned relative to its normal position */
.relative {
  position: relative;
  top: 20px;
  left: 30px;
}

/* Positioned relative to nearest positioned ancestor */
.absolute {
  position: absolute;
  top: 50px;
  right: 10px;
}

/* Positioned relative to the viewport */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Toggles between relative and fixed based on scroll position */
.sticky {
  position: sticky;
  top: 0;
}

/* Z-index controls stacking order of positioned elements */
.stacked {
  position: relative;
  z-index: 10;
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Positioning Examples:</h3>
                                <div className="space-y-8">
                                    <div>
                                        <p className="font-semibold text-dark mb-2">Relative vs. Absolute:</p>
                                        <div className="bg-gray-100 p-4 rounded-md relative h-48">
                                            <div className="bg-yellow-100 p-2 rounded-md text-text-secondary w-40 mb-4">
                                                Parent (relative position)
                                            </div>
                                            <div className="bg-red-100 p-2 rounded-md text-text-secondary w-32 absolute top-16 left-16">
                                                Absolute child
                                            </div>
                                            <div className="bg-blue-100 p-2 rounded-md text-text-secondary w-32 relative top-8 left-8">
                                                Relative child
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark mb-2">Fixed & Sticky Examples:</p>
                                        <div className="bg-gray-100 p-4 rounded-md relative h-24">
                                            <div className="bg-purple-100 p-2 rounded-md text-text-secondary w-40 mb-4">
                                                Fixed elements stay in place during scroll
                                            </div>
                                            <div className="bg-green-100 p-2 rounded-md text-text-secondary w-40">
                                                Sticky elements stick after reaching threshold
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                    <div className="mr-4 text-primary-dark">
                                        <Lightbulb size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark mb-2">Remember:</h3>
                                        <p className="text-text-secondary">
                                            When using absolute positioning, the element is positioned relative to its nearest positioned ancestor (an element with position value other than static). If no positioned ancestor exists, it positions relative to the document body.
                                        </p>
                                    </div>
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
                                    Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for arranging items in rows or columns. It's perfect for creating responsive components like navigation bars, card layouts, and centering elements.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Basic Flexbox Container Properties */
.flex-container {
  display: flex;
  
  /* Direction: row (default), row-reverse, column, column-reverse */
  flex-direction: row;
  
  /* Wrapping: nowrap (default), wrap, wrap-reverse */
  flex-wrap: wrap;
  
  /* Shorthand for direction + wrap */
  flex-flow: row wrap;
  
  /* Main axis alignment: flex-start, flex-end, center, space-between, space-around, space-evenly */
  justify-content: space-between;
  
  /* Cross axis alignment: stretch (default), flex-start, flex-end, center, baseline */
  align-items: center;
  
  /* Multi-line alignment: stretch (default), flex-start, flex-end, center, space-between, space-around */
  align-content: stretch;
}

/* Flexbox Item Properties */
.flex-item {
  /* Growth factor (default: 0) */
  flex-grow: 1;
  
  /* Shrink factor (default: 1) */
  flex-shrink: 1;
  
  /* Base size (default: auto) */
  flex-basis: 200px;
  
  /* Shorthand for grow, shrink, basis */
  flex: 1 1 auto;
  
  /* Individual alignment overriding container's align-items */
  align-self: flex-start;
  
  /* Controls order (default: 0) */
  order: 2;
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Flexbox Examples:</h3>
                                <div className="space-y-8">
                                    <div>
                                        <p className="font-semibold text-dark mb-2">Basic Row (justify-content):</p>
                                        <div className="p-4 rounded-md bg-gray-100">
                                            <div className="flex justify-between mb-2">
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary">Item 1</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary">Item 2</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary">Item 3</div>
                                            </div>
                                            <div className="flex justify-center mb-2">
                                                <div className="bg-green-100 p-2 rounded-md text-text-secondary mr-2">Centered 1</div>
                                                <div className="bg-green-100 p-2 rounded-md text-text-secondary">Centered 2</div>
                                            </div>
                                            <div className="flex justify-evenly">
                                                <div className="bg-purple-100 p-2 rounded-md text-text-secondary">Evenly 1</div>
                                                <div className="bg-purple-100 p-2 rounded-md text-text-secondary">Evenly 2</div>
                                                <div className="bg-purple-100 p-2 rounded-md text-text-secondary">Evenly 3</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark mb-2">Flex Direction & Alignment:</p>
                                        <div className="p-4 rounded-md bg-gray-100">
                                            <div className="flex flex-col h-40 justify-between mb-4">
                                                <div className="bg-yellow-100 p-2 rounded-md text-text-secondary">Top</div>
                                                <div className="bg-yellow-100 p-2 rounded-md text-text-secondary">Middle</div>
                                                <div className="bg-yellow-100 p-2 rounded-md text-text-secondary">Bottom</div>
                                            </div>
                                            <div className="flex items-center h-20 bg-gray-200 rounded-md p-2">
                                                <div className="bg-red-100 p-2 rounded-md text-text-secondary h-8">Short</div>
                                                <div className="bg-red-100 p-2 rounded-md text-text-secondary h-12 ml-2">Medium</div>
                                                <div className="bg-red-100 p-2 rounded-md text-text-secondary h-16 ml-2">Tall</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                    <div className="mr-4 text-primary-dark">
                                        <Info size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark mb-2">Flexbox Use Cases:</h3>
                                        <p className="text-text-secondary">
                                            Flexbox excels at handling one-dimensional layouts where you need alignment control. It's ideal for navigation bars, form controls, card layouts, and centering content both horizontally and vertically.
                                        </p>
                                    </div>
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
                                    CSS Grid Layout is a two-dimensional layout system designed for creating complex grid-based layouts with rows and columns. It provides powerful control over both dimensions simultaneously.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Basic Grid Container Properties */
.grid-container {
  display: grid;
  
  /* Define columns (3 columns of 1fr each) */
  grid-template-columns: 1fr 1fr 1fr;
  
  /* Alternative using repeat() */
  grid-template-columns: repeat(3, 1fr);
  
  /* Define rows */
  grid-template-rows: 100px auto 100px;
  
  /* Gap between grid items */
  gap: 20px;
  /* Or individually: */
  column-gap: 20px;
  row-gap: 10px;
  
  /* Named grid areas */
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  
  /* Auto-fit and minmax for responsive grids */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  /* Alignment of all items within cells */
  justify-items: center;
  align-items: center;
  
  /* Alignment of the grid within container */
  justify-content: center;
  align-content: center;
}

/* Grid Item Properties */
.grid-item {
  /* Span multiple columns */
  grid-column: 1 / 3;
  /* Shorthand for grid-column-start / grid-column-end */
  
  /* Span multiple rows */
  grid-row: 2 / 4;
  
  /* Using named lines or span keyword */
  grid-column: span 2;
  
  /* Placing item in a named area */
  grid-area: header;
  
  /* Aligning individual item within its cell */
  justify-self: end;
  align-self: center;
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Grid Examples:</h3>
                                <div className="space-y-8">
                                    <div>
                                        <p className="font-semibold text-dark mb-2">Basic Grid Layout:</p>
                                        <div className="p-4 rounded-md bg-gray-100">
                                            <div className="grid grid-cols-3 gap-2 mb-4">
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary text-center">1</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary text-center">2</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary text-center">3</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary text-center">4</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary text-center">5</div>
                                                <div className="bg-blue-100 p-2 rounded-md text-text-secondary text-center">6</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark mb-2">Complex Grid Layout:</p>
                                        <div className="p-4 rounded-md bg-gray-100">
                                            <div className="grid grid-cols-4 gap-2 h-48">
                                                <div className="bg-red-100 p-2 rounded-md text-text-secondary col-span-4">Header (span 4)</div>
                                                <div className="bg-yellow-100 p-2 rounded-md text-text-secondary row-span-2">Sidebar</div>
                                                <div className="bg-green-100 p-2 rounded-md text-text-secondary col-span-3">Content Top</div>
                                                <div className="bg-green-100 p-2 rounded-md text-text-secondary col-span-3">Content Bottom</div>
                                                <div className="bg-purple-100 p-2 rounded-md text-text-secondary col-span-4">Footer (span 4)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                    <div className="mr-4 text-primary-dark">
                                        <Lightbulb size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark mb-2">Grid vs. Flexbox:</h3>
                                        <p className="text-text-secondary">
                                            Use Grid for two-dimensional layouts where you need control over both rows and columns simultaneously. Use Flexbox for one-dimensional layouts where you need alignment in a single direction. Many complex designs use both: Grid for the overall page layout and Flexbox for component-level layouts.
                                        </p>
                                    </div>
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
                                    Responsive web design ensures your layouts look good on all devices, from desktop computers to mobile phones. CSS provides several tools to create responsive designs.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Responsive Design Techniques */

/* Media Queries */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
  }
}

/* Mobile-first approach */
.card {
  width: 100%; /* Default for small screens */
}

@media screen and (min-width: 576px) {
  .card {
    width: 48%; /* Medium screens */
  }
}

@media screen and (min-width: 992px) {
  .card {
    width: 30%; /* Large screens */
  }
}

/* Fluid Typography */
html {
  font-size: calc(14px + 0.25vw);
}

/* Viewport Units */
.hero {
  height: 80vh;
  padding: 2vw;
}

/* Container Queries (modern browsers) */
@container (min-width: 400px) {
  .card-content {
    display: flex;
  }
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Responsive Design Examples:</h3>
                                <div className="space-y-8">
                                    <div>
                                        <p className="font-semibold text-dark mb-2">Responsive Grid:</p>
                                        <div className="p-4 rounded-md bg-gray-100">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                                <div className="bg-blue-100 p-3 rounded-md text-text-secondary text-center">Card 1</div>
                                                <div className="bg-blue-100 p-3 rounded-md text-text-secondary text-center">Card 2</div>
                                                <div className="bg-blue-100 p-3 rounded-md text-text-secondary text-center">Card 3</div>
                                                <div className="bg-blue-100 p-3 rounded-md text-text-secondary text-center">Card 4</div>
                                                <div className="bg-blue-100 p-3 rounded-md text-text-secondary text-center">Card 5</div>
                                                <div className="bg-blue-100 p-3 rounded-md text-text-secondary text-center">Card 6</div>
                                            </div>
                                        </div>
                                        <p className="text-text-secondary text-sm mt-2">
                                            This grid adjusts from 1 column on mobile to 2 columns on tablets and 3 columns on desktops.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-dark mb-2">Responsive Navigation:</p>
                                        <div className="p-4 rounded-md bg-gray-100">
                                            <div className="hidden md:flex justify-between bg-white p-3 rounded-md">
                                                <div className="font-bold text-dark">Logo</div>
                                                <div className="flex space-x-4">
                                                    <div className="text-primary-dark">Home</div>
                                                    <div className="text-primary-dark">About</div>
                                                    <div className="text-primary-dark">Services</div>
                                                    <div className="text-primary-dark">Contact</div>
                                                </div>
                                            </div>
                                            <div className="md:hidden bg-white p-3 rounded-md flex justify-between items-center">
                                                <div className="font-bold text-dark">Logo</div>
                                                <div className="text-primary-dark">≡</div>
                                            </div>
                                        </div>
                                        <p className="text-text-secondary text-sm mt-2">
                                            This navigation shows a mobile hamburger menu on small screens and a full navigation bar on larger screens.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                    <div className="mr-4 text-primary-dark">
                                        <Info size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-dark mb-2">Responsive Best Practices:</h3>
                                        <ul className="text-text-secondary list-disc ml-4 space-y-1">
                                            <li>Use relative units (%, em, rem, vh, vw) instead of fixed pixels</li>
                                            <li>Design for mobile first, then enhance for larger screens</li>
                                            <li>Test your layouts on multiple devices and screen sizes</li>
                                            <li>Use responsive images with srcset or picture elements</li>
                                            <li>Keep performance in mind, especially for mobile users</li>
                                        </ul>
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
                            <div className="prose max-w-none mb-6">
                                <p className="text-text-secondary">
                                    Practice is essential for mastering CSS layout. Try these exercises to improve your skills with different layout techniques.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-semibold text-dark mb-3">Exercise 1: Create a Card Layout</h3>
                                    <p className="text-text-secondary mb-4">
                                        Build a responsive card layout that displays 1 card per row on mobile, 2 cards per row on tablets, and 3 cards per row on desktops.
                                    </p>
                                    <div className="bg-gray-100 p-4 rounded-md">
                                        <CodeBlock
                                            code={`<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>

<style>
  /* Add your CSS here */
  .card-container {
    /* Use Grid or Flexbox */
  }
  
  .card {
    /* Style your cards */
  }
  
  /* Add media queries for responsiveness */
  @media (min-width: 768px) {
    /* Tablet styles */
  }
  
  @media (min-width: 1024px) {
    /* Desktop styles */
  }
</style>`}
                                        />
                                    </div>
                                </div>

                                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-semibold text-dark mb-3">Exercise 2: Holy Grail Layout</h3>
                                    <p className="text-text-secondary mb-4">
                                        Create the classic "Holy Grail" layout with a header, footer, main content area, and two sidebars. Make it responsive so that on mobile devices, the layout stacks vertically.
                                    </p>
                                    <div className="bg-gray-100 p-4 rounded-md">
                                        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-60">
                                            <div className="bg-blue-100 p-2 rounded-md text-text-secondary flex items-center justify-center col-span-1 md:col-span-5">
                                                Header
                                            </div>
                                            <div className="bg-green-100 p-2 rounded-md text-text-secondary flex items-center justify-center">
                                                Left<br />Sidebar
                                            </div>
                                            <div className="bg-yellow-100 p-2 rounded-md text-text-secondary flex items-center justify-center col-span-1 md:col-span-3">
                                                Main Content
                                            </div>
                                            <div className="bg-green-100 p-2 rounded-md text-text-secondary flex items-center justify-center">
                                                Right<br />Sidebar
                                            </div>
                                            <div className="bg-blue-100 p-2 rounded-md text-text-secondary flex items-center justify-center col-span-1 md:col-span-5">
                                                Footer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-primary-light/20 rounded-xl border border-primary-light/40">
                                <h3 className="font-semibold text-dark mb-2 flex items-center">
                                    <Lightbulb size={18} className="text-primary-dark mr-2" />
                                    Challenge:
                                </h3>
                                <p className="text-text-secondary">
                                    Try implementing the same layout using different techniques: Grid, Flexbox, and traditional positioning. Compare the implementations and consider the advantages and limitations of each approach.
                                </p>
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
        </>
    );
}