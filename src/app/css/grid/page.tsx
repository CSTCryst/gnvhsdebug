// src/app/css/grid/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function CSSGridPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">CSS Grid</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    CSS Grid Layout
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2"/>
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
                                    CSS Grid Layout is a powerful two-dimensional layout system designed to handle both
                                    rows and columns simultaneously, making complex layouts more intuitive to create.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn how to use CSS Grid to create sophisticated layouts
                                    that were previously difficult to achieve with other CSS techniques.
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
                                        Grid Basics
                                    </a>
                                </li>
                                <li>
                                    <a href="#container" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Grid Container Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#items" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Grid Item Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#areas" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Grid Template Areas
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

                        {/* Grid Basics */}
                        <section id="basics" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    1
                                </span>
                                Grid Basics
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS Grid consists of a parent element (the grid container) and its child elements
                                    (grid items). Setting <code>display: grid</code> on an element makes it a grid
                                    container.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>`}
                            />

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Grid Terminology:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><strong>Grid Container:</strong> The element with <code>display: grid</code>
                                        </li>
                                        <li><strong>Grid Item:</strong> The direct children of the grid container</li>
                                        <li><strong>Grid Line:</strong> The dividing lines that make up the grid
                                            structure
                                        </li>
                                        <li><strong>Grid Cell:</strong> The space between four grid lines</li>
                                        <li><strong>Grid Track:</strong> The space between two adjacent grid lines (a
                                            row or column)
                                        </li>
                                        <li><strong>Grid Area:</strong> The space surrounded by four grid lines</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded border border-gray-200">
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            1
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            2
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            3
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            4
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            5
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            6
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light mt-2">A basic 3-column grid layout with 6
                                    items</p>
                            </div>
                        </section>

                        {/* Grid Container Properties */}
                        <section id="container" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    2
                                </span>
                                Grid Container Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    These properties define the structure of the grid and are applied to the grid
                                    container.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">grid-template-columns</h3>
                                    <CodeBlock language={"css"}
                                        code={`.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  /* Fixed widths */
  
  /* Or using fr units */
  grid-template-columns: 1fr 2fr 1fr;
  
  /* Or using repeat() */
  grid-template-columns: repeat(3, 1fr);
  
  /* Auto-fill and minmax */
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Defines the columns of the grid with
                                        their sizes.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">grid-template-rows</h3>
                                    <CodeBlock language={"css"}
                                        code={`.grid-container {
  display: grid;
  grid-template-rows: 100px auto 100px;
  /* First row 100px, second auto, 
     third 100px */
  
  /* Using fr units */
  grid-template-rows: 1fr 2fr;
  
  /* Repeat pattern */
  grid-template-rows: repeat(3, 100px);
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Defines the rows of the grid with
                                        their sizes.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">grid-gap</h3>
                                    <CodeBlock language={"css"}
                                        code={`.grid-container {
  display: grid;
  grid-gap: 20px; /* Same for rows and columns */
  
  /* Or different values */
  grid-row-gap: 20px;    /* Between rows */
  grid-column-gap: 10px; /* Between columns */
  
  /* Modern syntax */
  gap: 20px;
  row-gap: 20px;
  column-gap: 10px;
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Sets the gaps (gutters) between rows
                                        and columns.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">justify-content and align-content</h3>
                                    <CodeBlock language={"css"}
                                        code={`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  
  /* Container is wider than the grid */
  width: 500px;
  
  /* Align grid horizontally */
  justify-content: center;
  /* Options: start, end, center, 
     space-between, space-around, space-evenly */
  
  /* Align grid vertically */
  align-content: center;
  /* Same options as justify-content */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Aligns the grid within the
                                        container.</p>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Examples:</h3>

                                <h4 className="font-medium text-dark mt-4 mb-2">fr units</h4>
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <div className="grid grid-cols-4 gap-3 bg-white p-3 rounded border border-gray-200">
                                        <div
                                            className="bg-primary-light text-primary-dark p-4 rounded text-center">1fr
                                        </div>
                                        <div
                                            className="bg-primary-dark text-white p-4 rounded text-center col-span-2">2fr
                                        </div>
                                        <div
                                            className="bg-primary-light text-primary-dark p-4 rounded text-center">1fr
                                        </div>
                                    </div>
                                </div>

                                <h4 className="font-medium text-dark mt-4 mb-2">minmax and auto-fill</h4>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-white p-3 rounded border border-gray-200">
                                        <div
                                            className="bg-primary-light text-primary-dark p-4 rounded text-center">Auto-resizing
                                            item
                                        </div>
                                        <div
                                            className="bg-primary-light text-primary-dark p-4 rounded text-center">Auto-resizing
                                            item
                                        </div>
                                        <div
                                            className="bg-primary-light text-primary-dark p-4 rounded text-center">Auto-resizing
                                            item
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light mt-2">Resize your browser to see how these items
                                    reflow</p>
                            </div>
                        </section>

                        {/* Grid Item Properties */}
                        <section id="items" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    3
                                </span>
                                Grid Item Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    These properties control the placement and sizing of individual grid items.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">grid-column and grid-row</h3>
                                    <CodeBlock language={"css"}
                                        code={`.item {
  /* Start at line 1, end at line 3 */
  grid-column: 1 / 3;
  
  /* Span 2 columns from its position */
  grid-column: span 2;
  
  /* Start at line 2, end at line 4 */
  grid-row: 2 / 4;
  
  /* Shorthand for column-start/column-end */
  grid-column-start: 1;
  grid-column-end: 3;
  
  /* Shorthand for row-start/row-end */
  grid-row-start: 1;
  grid-row-end: 3;
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Controls which grid lines an item
                                        starts and ends at.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">grid-area</h3>
                                    <CodeBlock language={"css"}
                                        code={`.item {
  /* Shorthand for row-start / column-start
     / row-end / column-end */
  grid-area: 1 / 1 / 3 / 3;
  
  /* Or use with named grid areas */
  grid-area: header;
  /* (works with grid-template-areas) */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Shorthand for grid-row-start,
                                        grid-column-start, grid-row-end, grid-column-end.</p>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded border border-gray-200">
                                        <div
                                            className="bg-primary-dark text-white p-4 rounded text-center col-span-2 row-span-2">
                                            grid-column: span 2;<br/>
                                            grid-row: span 2;
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            2
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            3
                                        </div>
                                        <div
                                            className="bg-primary-light text-primary-dark p-4 rounded text-center col-span-2">
                                            grid-column: span 2;
                                        </div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded text-center">Item
                                            5
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light mt-2">A grid with items that span multiple
                                    cells</p>
                            </div>
                        </section>

                        {/* Grid Template Areas */}
                        <section id="areas" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    4
                                </span>
                                Grid Template Areas
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Grid template areas provide a more visual way to define your grid layout by naming
                                    areas and referencing them in your CSS.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<div class="grid-container">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main-content">Main Content</main>
  <footer class="footer">Footer</footer>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  min-height: 100vh;
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main-content { grid-area: content; }
.footer { grid-area: footer; }
</style>`}
                            />

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Rules for Template Areas:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Each row needs the same number of cells</li>
                                        <li>Use periods (.) for empty cells</li>
                                        <li>Area names must be surrounded by quotes</li>
                                        <li>Areas must form rectangles (no L-shapes)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div
                                        className="grid grid-cols-4 grid-rows-3 gap-3 bg-white p-3 rounded border border-gray-200">
                                        <div
                                            className="col-span-4 bg-primary-dark text-white p-4 rounded text-center">Header
                                        </div>
                                        <div
                                            className="col-span-1 row-span-1 bg-primary-light text-primary-dark p-4 rounded text-center">Sidebar
                                        </div>
                                        <div
                                            className="col-span-3 row-span-1 bg-primary-light text-primary-dark p-4 rounded text-center">Main
                                            Content
                                        </div>
                                        <div
                                            className="col-span-4 bg-primary-dark text-white p-4 rounded text-center">Footer
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light mt-2">A common page layout using
                                    grid-template-areas</p>
                            </div>
                        </section>

                        {/* Try It Yourself */}
                        <section id="try-it" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    5
                                </span>
                                Try It Yourself
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Create a responsive dashboard layout using CSS Grid. The layout should adapt to
                                    different screen sizes by changing its structure.
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
                                        <span className="text-xs font-mono">dashboard-grid.css</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock language={"css"}
                                    code={`.dashboard {
  display: grid;
  gap: 20px;
  padding: 20px;
  
  /* Mobile layout: single column */
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "stats"
    "main"
    "sidebar"
    "footer";
}

/* Tablet layout */
@media (min-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "stats stats"
      "main sidebar"
      "footer footer";
  }
}

/* Desktop layout */
@media (min-width: 1024px) {
  .dashboard {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
      "header header header"
      "sidebar main stats"
      "sidebar footer footer";
  }
}

.header { 
  grid-area: header;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.main { 
  grid-area: main;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar { 
  grid-area: sidebar;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
}

.stats { 
  grid-area: stats;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.stat-card {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.footer { 
  grid-area: footer;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}`}
                                />
                            </div>

                            <div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex">
                                <div className="text-primary-dark mr-4 mt-1">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
                                    <p className="text-text-secondary">
                                        The power of CSS Grid becomes particularly evident when combined with media
                                        queries for responsive designs. You can completely rearrange layouts based on
                                        screen size by just changing the <code>grid-template-areas</code> property,
                                        without modifying your HTML structure.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h2 className="text-xl font-bold text-dark mb-4">Summary</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">CSS Grid is a two-dimensional layout system for rows and columns</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Use <code>fr</code> units for flexible track sizes and <code>minmax()</code> for responsive layouts</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span
                                        className="text-text-secondary">Control item placement with <code>grid-column</code>, <code>grid-row</code>, and <code>grid-area</code></span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span
                                        className="text-text-secondary">Create complex layouts visually with <code>grid-template-areas</code></span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/css/flexbox"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2"/>
                                Previous: Flexbox
                            </Link>
                            <Link
                                href="/css/responsive-design"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Responsive Design
                                <ArrowRight size={16} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}