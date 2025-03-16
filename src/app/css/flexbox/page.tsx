// src/app/css/flexbox/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function FlexboxPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Flexbox</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Flexbox Layout
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>CSS Advanced</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 6 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Flexbox (Flexible Box Module) is a one-dimensional layout method designed for arranging items in rows or columns, providing space distribution and powerful alignment capabilities.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn how to use Flexbox to create flexible layouts that work across different screen sizes and devices.
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
                                        Flexbox Basics
                                    </a>
                                </li>
                                <li>
                                    <a href="#container" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Flex Container Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#items" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Flex Item Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#examples" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Common Flexbox Patterns
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

                        {/* Flexbox Basics */}
                        <section id="basics" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    1
                                </span>
                                Flexbox Basics
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Flexbox consists of a parent element (the flex container) and its immediate children (flex items). Setting <code>display: flex</code> on an element makes it a flex container.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<style>
.container {
  display: flex;
  /* Flex container properties go here */
}

.item {
  /* Flex item properties go here */
}
</style>`}
                            />

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Flexbox Terminology:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><strong>Main Axis:</strong> The primary axis along which flex items are placed (horizontal for row, vertical for column)</li>
                                        <li><strong>Cross Axis:</strong> The axis perpendicular to the main axis</li>
                                        <li><strong>Flex Container:</strong> The parent element with <code>display: flex</code></li>
                                        <li><strong>Flex Items:</strong> The direct children of the flex container</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div className="flex bg-white p-3 rounded border border-gray-200">
                                        <div className="bg-primary-light text-primary-dark p-4 rounded">Item 1</div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded ml-3">Item 2</div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded ml-3">Item 3</div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light mt-2">A basic flex container with items arranged in a row (default)</p>
                            </div>
                        </section>

                        {/* Flex Container Properties */}
                        <section id="container" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    2
                                </span>
                                Flex Container Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Several properties control how the flex container behaves and how its items are arranged.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">flex-direction</h3>
                                    <CodeBlock language={"css"}
                                        code={`.container {
  display: flex;
  flex-direction: row; /* default */
  /* Other options:
     flex-direction: column;
     flex-direction: row-reverse;
     flex-direction: column-reverse;
  */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Establishes the main axis, determining the direction flex items are placed.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">flex-wrap</h3>
                                    <CodeBlock language={"css"}
                                        code={`.container {
  display: flex;
  flex-wrap: nowrap; /* default */
  /* Other options:
     flex-wrap: wrap;
     flex-wrap: wrap-reverse;
  */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Controls whether items are forced onto a single line or can wrap onto multiple lines.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">justify-content</h3>
                                    <CodeBlock language={"css"}
                                        code={`.container {
  display: flex;
  justify-content: flex-start; /* default */
  /* Other options:
     justify-content: flex-end;
     justify-content: center;
     justify-content: space-between;
     justify-content: space-around;
     justify-content: space-evenly;
  */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Aligns items along the main axis.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">align-items</h3>
                                    <CodeBlock language={"css"}
                                        code={`.container {
  display: flex;
  align-items: stretch; /* default */
  /* Other options:
     align-items: flex-start;
     align-items: flex-end;
     align-items: center;
     align-items: baseline;
  */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Aligns items along the cross axis.</p>
                                </div>
                            </div>

                            {/* Visual Examples */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Examples:</h3>

                                <h4 className="font-medium text-dark mt-4 mb-2">justify-content: space-between</h4>
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <div className="flex justify-between bg-white p-3 rounded border border-gray-200">
                                        <div className="bg-primary-light text-primary-dark p-4 rounded">Item 1</div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded">Item 2</div>
                                        <div className="bg-primary-light text-primary-dark p-4 rounded">Item 3</div>
                                    </div>
                                </div>

                                <h4 className="font-medium text-dark mt-4 mb-2">align-items: center</h4>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div className="flex items-center bg-white p-3 h-24 rounded border border-gray-200">
                                        <div className="bg-primary-light text-primary-dark p-4 rounded ml-3">Item 1</div>
                                        <div className="bg-primary-light text-primary-dark p-6 rounded ml-3">Item 2</div>
                                        <div className="bg-primary-light text-primary-dark p-2 rounded ml-3">Item 3</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Flex Item Properties */}
                        <section id="items" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    3
                                </span>
                                Flex Item Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Individual flex items can be controlled with their own set of properties.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">flex-grow</h3>
                                    <CodeBlock language={"css"}
                                        code={`.item {
  flex-grow: 0; /* default */
  /* Higher values grow more */
}

.item-2 {
  flex-grow: 1; /* This item will grow */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Determines how much an item can grow relative to other flex items.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">flex-shrink</h3>
                                    <CodeBlock language={"css"}
                                        code={`.item {
  flex-shrink: 1; /* default */
  /* Higher values shrink more */
}

.item-2 {
  flex-shrink: 0; /* This item won't shrink */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Defines how much an item will shrink relative to other items.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">flex-basis</h3>
                                    <CodeBlock language={"css"}
                                        code={`.item {
  flex-basis: auto; /* default */
  /* Can be a length: 200px, 10rem, etc. */
}

.item-2 {
  flex-basis: 250px; /* Initial size */
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Sets the initial size of a flex item before growing or shrinking.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">flex (shorthand)</h3>
                                    <CodeBlock language={"css"}
                                        code={`.item {
  /* flex: grow shrink basis */
  flex: 0 1 auto; /* default */
}

.item-2 {
  flex: 1; /* flex: 1 1 0% */
}

.item-3 {
  flex: 2 0 300px;
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">Shorthand for flex-grow, flex-shrink, and flex-basis.</p>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div className="flex bg-white p-3 rounded border border-gray-200">
                                        <div className="bg-primary-light text-primary-dark p-4 rounded w-24">Fixed</div>
                                        <div className="bg-primary-dark text-white p-4 rounded ml-3 flex-1">flex: 1</div>
                                        <div className="bg-primary-dark text-white p-4 rounded ml-3 flex-2">flex: 2</div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-light mt-2">The first item has a fixed width, while the other two use flex to take up remaining space at a 1:2 ratio.</p>
                            </div>
                        </section>

                        {/* Common Flexbox Patterns */}
                        <section id="examples" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    4
                                </span>
                                Common Flexbox Patterns
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Here are some common layout patterns that Flexbox makes easy to implement.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Navigation Bar</h3>
                                    <CodeBlock language={"css"}
                                        code={`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-brand {
  font-weight: bold;
}

.nav-menu {
  display: flex;
  gap: 1rem;
}`}
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Card Layout</h3>
                                    <CodeBlock language={"css"}
                                        code={`.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, basis */
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1; /* Fill available space */
}`}
                                    />
                                </div>
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Examples:</h3>

                                <h4 className="font-medium text-dark mt-4 mb-2">Navigation Bar</h4>
                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    <div className="flex justify-between items-center bg-white p-4 rounded border border-gray-200">
                                        <div className="font-bold text-primary-dark">Brand Logo</div>
                                        <div className="flex gap-4">
                                            <span className="text-primary-dark">Home</span>
                                            <span className="text-primary-dark">About</span>
                                            <span className="text-primary-dark">Contact</span>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="font-medium text-dark mt-4 mb-2">Centering Content</h4>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <div className="flex justify-center items-center bg-white p-4 h-32 rounded border border-gray-200">
                                        <div className="bg-primary-dark text-white p-4 rounded">Perfectly Centered</div>
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
                                    Create a simple card layout using Flexbox. The design should have a header, content area, and footer with different alignment needs.
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
                                        <span className="text-xs font-mono">flexbox-cards.css</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock language={"css"}
                                    code={`.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f0f0f0;
  padding: 15px;
  font-weight: bold;
}

.card-body {
  flex: 1;
  padding: 15px;
  background-color: white;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #f8f8f8;
}

.btn {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  cursor: pointer;
}

.card-meta {
  color: #666;
  font-size: 0.9em;
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
                                        Use the Flexbox shorthand <code>flex: 1</code> to make elements expand and fill available space, which is especially useful for creating equal-height columns or making card layouts where content areas should stretch.
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
                                    <span className="text-text-secondary">Flexbox provides a one-dimensional layout system for rows or columns</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Container properties control overall layout (justify-content, align-items)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Item properties control individual element behavior (flex-grow, flex-shrink)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Flexbox is ideal for navigation bars, card layouts, and centering content</span>
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
                                Previous: CSS Box Model
                            </Link>
                            <Link
                                href="/css/grid"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: CSS Grid
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}