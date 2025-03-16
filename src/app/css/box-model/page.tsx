// src/app/css/box-model/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function BoxModelPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Box Model</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    CSS Box Model
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2"/>
                            <span>CSS Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 8 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    The CSS Box Model is a fundamental concept that describes how elements are rendered
                                    on a web page. Every HTML element is treated as a rectangular box with content,
                                    padding, border, and margin areas.
                                </p>
                                <p className="text-text-secondary">
                                    Understanding the box model is crucial for creating accurate layouts and controlling
                                    the spacing between elements.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#box-model-explained"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Box Model Explained
                                    </a>
                                </li>
                                <li>
                                    <a href="#width-height"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Width and Height
                                    </a>
                                </li>
                                <li>
                                    <a href="#padding"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Padding
                                    </a>
                                </li>
                                <li>
                                    <a href="#border"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Border
                                    </a>
                                </li>
                                <li>
                                    <a href="#margin"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Margin
                                    </a>
                                </li>
                                <li>
                                    <a href="#box-sizing"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Box Sizing
                                    </a>
                                </li>
                                <li>
                                    <a href="#try-it"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Try It Yourself
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* Box Model Explained */}
                        <section id="box-model-explained" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Box Model Explained
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    In CSS, the box model consists of four layers that make up an element's dimensions:
                                </p>
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">The CSS Box Model:</h3>
                                <div className="flex justify-center">
                                    <div className="p-8 bg-gray-100 max-w-md text-center">
                                        <p className="mb-2 text-text-light">Margin</p>
                                        <div className="border-2 border-dashed border-gray-400 p-8">
                                            <p className="mb-2 text-text-light">Border</p>
                                            <div className="bg-primary-light/20 p-8">
                                                <p className="mb-2 text-text-light">Padding</p>
                                                <div className="bg-primary-light p-4">
                                                    <p className="text-primary-dark">Content</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                        <li><strong>Content</strong>: The actual content of the element (text, images,
                                            etc.)
                                        </li>
                                        <li><strong>Padding</strong>: Space between the content and the border</li>
                                        <li><strong>Border</strong>: Outline that surrounds the padding</li>
                                        <li><strong>Margin</strong>: Space outside the border, separating the element
                                            from others
                                        </li>
                                    </ul>
                                    <div className="bg-primary-light/10 p-3 rounded-md">
                                        <p className="text-text-secondary">Total element width = content width + left
                                            padding + right padding + left border + right border + left margin + right
                                            margin</p>
                                        <p className="text-text-secondary mt-2">Total element height = content height +
                                            top padding + bottom padding + top border + bottom border + top margin +
                                            bottom margin</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Developer Tools:</h3>
                                    <p className="text-text-secondary">
                                        All modern browsers include Developer Tools that provide visual box model
                                        diagrams. Right-click an element and select "Inspect" to see its box model
                                        visualization.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Width and Height */}
                        <section id="width-height" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Width and Height
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    The <code>width</code> and <code>height</code> properties control the size of an
                                    element's content area. There are several ways to define these dimensions.
                                </p>
                            </div>

                            <CodeBlock
                                code={`/* Width and Height Properties */

/* Fixed values */
.box-1 {
  width: 300px;
  height: 200px;
}

/* Percentage (relative to parent) */
.box-2 {
  width: 50%;
  height: 50%;
}

/* Minimum and maximum dimensions */
.box-3 {
  min-width: 200px;
  max-width: 800px;
  min-height: 100px;
  max-height: 400px;
}

/* Viewport-relative units */
.box-4 {
  width: 50vw;  /* 50% of viewport width */
  height: 50vh; /* 50% of viewport height */
}

/* Setting width to fill available space */
.box-5 {
  width: 100%;  /* 100% of parent width */
}

/* Auto dimensions (content-based) */
.box-6 {
  width: auto;
  height: auto;
}`}
                            />

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2"/>
                                        Width & Height Units:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>px</code> - Pixels (fixed unit)</li>
                                        <li><code>%</code> - Percentage of parent element</li>
                                        <li><code>em</code> - Relative to element's font size</li>
                                        <li><code>rem</code> - Relative to root font size</li>
                                        <li><code>vw/vh</code> - Percentage of viewport width/height</li>
                                        <li><code>auto</code> - Browser calculates based on content</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2"/>
                                        Important Notes:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Block-level elements naturally expand to fill width</li>
                                        <li>Inline elements ignore width/height properties</li>
                                        <li>Use min/max properties for responsive designs</li>
                                        <li>Overflow occurs when content exceeds dimensions</li>
                                        <li>Percentage heights require parent with defined height</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Width and Height Examples:</h3>
                                <div className="space-y-4">
                                    <div className="p-2 border border-gray-200 rounded-md">
                                        <div
                                            className="w-full h-8 bg-primary-light/20 rounded-md flex items-center justify-center text-text-secondary text-sm">
                                            width: 100%
                                        </div>
                                    </div>
                                    <div className="p-2 border border-gray-200 rounded-md">
                                        <div
                                            className="w-1/2 h-8 bg-primary-light/40 rounded-md flex items-center justify-center text-text-secondary text-sm">
                                            width: 50%
                                        </div>
                                    </div>
                                    <div className="p-2 border border-gray-200 rounded-md">
                                        <div
                                            className="w-1/4 h-8 bg-primary-light/60 rounded-md flex items-center justify-center text-text-secondary text-sm">
                                            width: 25%
                                        </div>
                                    </div>
                                    <div className="flex p-2 border border-gray-200 rounded-md gap-2">
                                        <div
                                            className="w-20 h-8 bg-primary-light/80 rounded-md flex items-center justify-center text-white text-sm">
                                            80px
                                        </div>
                                        <div
                                            className="w-40 h-8 bg-primary-light/80 rounded-md flex items-center justify-center text-white text-sm">
                                            160px
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Padding */}
                        <section id="padding" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Padding
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Padding is the space between an element's content and its border. It creates
                                    internal spacing and can be set for individual sides or all sides at once.
                                </p>
                            </div>

                            <CodeBlock
                                code={`/* Padding Properties */

/* All sides equally */
.box-1 {
  padding: 20px;
}

/* Vertical, Horizontal */
.box-2 {
  padding: 10px 20px;  /* 10px top/bottom, 20px left/right */
}

/* Top, Horizontal, Bottom */
.box-3 {
  padding: 10px 20px 15px;  /* 10px top, 20px left/right, 15px bottom */
}

/* Top, Right, Bottom, Left (clockwise) */
.box-4 {
  padding: 10px 20px 15px 5px;  /* 10px top, 20px right, 15px bottom, 5px left */
}

/* Individual sides */
.box-5 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 5px;
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Padding Visualization:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">padding: 5px</p>
                                        <div className="border border-gray-300 rounded-md">
                                            <div className="bg-primary-light/20 p-1 rounded-md m-1">
                                                <div
                                                    className="bg-primary-light px-2 py-1 rounded-sm text-center text-xs">Content
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">padding: 20px</p>
                                        <div className="border border-gray-300 rounded-md">
                                            <div className="bg-primary-light/20 p-5 rounded-md m-1">
                                                <div
                                                    className="bg-primary-light px-2 py-1 rounded-sm text-center text-xs">Content
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">padding: 10px 20px</p>
                                        <div className="border border-gray-300 rounded-md">
                                            <div className="bg-primary-light/20 px-5 py-2 rounded-md m-1">
                                                <div
                                                    className="bg-primary-light px-2 py-1 rounded-sm text-center text-xs">Content
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Padding Notes:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Padding adds to the element's dimensions in the standard box model</li>
                                        <li>Padding cannot have negative values</li>
                                        <li>Padding values can use any valid CSS unit (px, em, %, etc.)</li>
                                        <li>Padding is included in the clickable area of an element</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Border */}
                        <section id="border" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Border
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Borders add visible lines around an element. They sit between the padding and
                                    margin, and have properties for width, style, and color.
                                </p>
                            </div>

                            <CodeBlock
                                code={`/* Border Properties */

/* Shorthand for all sides */
.box-1 {
  border: 1px solid #000;  /* width, style, color */
}

/* Individual sides */
.box-2 {
  border-top: 2px dashed #3498db;
  border-right: 3px dotted #2ecc71;
  border-bottom: 4px solid #e74c3c;
  border-left: 5px double #9b59b6;
}

/* Individual properties */
.box-3 {
  border-width: 2px;
  border-style: solid;
  border-color: #3498db;
}

/* More specific properties */
.box-4 {
  border-top-width: 1px;
  border-right-style: dashed;
  border-bottom-color: #e74c3c;
}

/* Rounded corners */
.box-5 {
  border: 1px solid #3498db;
  border-radius: 8px;  /* all corners equally */
}

.box-6 {
  border: 1px solid #3498db;
  border-radius: 8px 4px 12px 2px;  /* top-left, top-right, bottom-right, bottom-left */
}

/* Circle */
.circle {
  border: 2px solid #3498db;
  border-radius: 50%;  /* creates a circle if width and height are equal */
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Border Styles:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        {style: "solid", desc: "Solid line"},
                                        {style: "dashed", desc: "Dashed line"},
                                        {style: "dotted", desc: "Dotted line"},
                                        {style: "double", desc: "Double line"},
                                        {style: "groove", desc: "3D grooved effect"},
                                        {style: "ridge", desc: "3D ridged effect"},
                                        {style: "inset", desc: "3D inset effect"},
                                        {style: "outset", desc: "3D outset effect"},
                                        {style: "none", desc: "No border"}
                                    ].map((item, index) => (
                                        <div key={index} className="p-2 bg-gray-50 rounded-md">
                                            <div className={`h-12 flex items-center justify-center rounded-sm`}
                                                 style={{border: `3px ${item.style} #3498db`}}>
                                                <span className="text-text-secondary text-sm">{item.style}</span>
                                            </div>
                                            <p className="text-text-light text-xs mt-1 text-center">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Border Radius Examples:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">4px</p>
                                        <div className="h-16 border-2 border-primary-dark rounded-sm"></div>
                                    </div>
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">8px</p>
                                        <div className="h-16 border-2 border-primary-dark rounded-md"></div>
                                    </div>
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">16px</p>
                                        <div className="h-16 border-2 border-primary-dark rounded-lg"></div>
                                    </div>
                                    <div>
                                        <p className="text-center text-text-secondary mb-2">50%</p>
                                        <div
                                            className="h-16 w-16 mx-auto border-2 border-primary-dark rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Margin */}
                        <section id="margin" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  5
                                </span>
                                Margin
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Margin is the space outside an element's border. It creates separation between
                                    elements and can be set for individual sides or all sides at once.
                                </p>
                            </div>

                            <CodeBlock
                                code={`/* Margin Properties */

/* All sides equally */
.box-1 {
  margin: 20px;
}

/* Vertical, Horizontal */
.box-2 {
  margin: 10px 20px;  /* 10px top/bottom, 20px left/right */
}

/* Top, Horizontal, Bottom */
.box-3 {
  margin: 10px 20px 15px;  /* 10px top, 20px left/right, 15px bottom */
}

/* Top, Right, Bottom, Left (clockwise) */
.box-4 {
  margin: 10px 20px 15px 5px;  /* 10px top, 20px right, 15px bottom, 5px left */
}

/* Individual sides */
.box-5 {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 5px;
}

/* Auto margins for centering */
.centered {
  width: 300px;
  margin: 0 auto;  /* Horizontal centering */
}

/* Negative margins */
.overlap {
  margin-top: -20px;  /* Pulls element up */
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Margin Examples:</h3>
                                <div className="bg-gray-100 p-6 rounded-md">
                                    <div
                                        className="bg-primary-light/10 p-2 mb-6 rounded-md text-text-secondary text-sm text-center">
                                        Element with margin: 0
                                    </div>
                                    <div className="bg-primary-light/10 p-2 mb-6 rounded-md" style={{margin: "20px"}}>
                                        <p className="text-text-secondary text-sm text-center">Element with margin:
                                            20px</p>
                                    </div>
                                    <div className="bg-primary-light/10 p-2 rounded-md" style={{margin: "10px 30px"}}>
                                        <p className="text-text-secondary text-sm text-center">Element with margin: 10px
                                            30px</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Margin Collapse:</h3>
                                    <p className="text-text-secondary mb-2">
                                        Vertical margins between adjacent elements can "collapse" into each other,
                                        meaning only the larger margin is used.
                                    </p>
                                    <div className="bg-white p-3 rounded-md">
                                        <pre className="text-xs text-text-secondary overflow-x-auto">
{`.element-1 {
  margin-bottom: 20px;
}
.element-2 {
  margin-top: 15px;
}
/* The space between will be 20px, not 35px */`}
                                        </pre>
                                    </div>
                                    <p className="text-text-secondary mt-2">
                                        Margin collapse only occurs with vertical margins, not horizontal ones.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Box Sizing */}
                        <section id="box-sizing" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  6
                                </span>
                                Box Sizing
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    The <code>box-sizing</code> property determines how the width and height of an
                                    element are calculated. It has two main values: <code>content-box</code> (default)
                                    and <code>border-box</code>.
                                </p>
                            </div>

                            <CodeBlock
                                code={`/* Box Sizing Property */

/* Default CSS box model (content-box) */
.default-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 10px solid #3498db;
  /* Total width = 300px + 40px padding + 20px border = 360px */
}

/* Alternative box model (border-box) */
.alternative-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 10px solid #3498db;
  /* Total width = 300px (content adjusts to fit padding and border) */
}

/* Common reset to use border-box for all elements */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Box Sizing Comparison:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-center text-text-secondary mb-4">
                                            <strong>content-box</strong> (Default)</p>
                                        <div className="relative bg-gray-100 p-8 rounded-md">
                                            <div className="border-2 border-primary-dark p-4 bg-white/50 relative">
                                                <div
                                                    className="h-16 bg-primary-light/30 flex items-center justify-center text-text-secondary">
                                                    Content
                                                </div>
                                                <div
                                                    className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-md">width:
                                                    100%
                                                </div>
                                            </div>
                                            <p className="text-text-light text-sm mt-3 text-center">Total width =
                                                content width + padding + border</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center text-text-secondary mb-4"><strong>border-box</strong>
                                        </p>
                                        <div className="relative bg-gray-100 p-8 rounded-md">
                                            <div className="border-2 border-primary-dark p-4 bg-white/50 relative">
                                                <div
                                                    className="h-16 bg-primary-light/30 flex items-center justify-center text-text-secondary">
                                                    Content
                                                </div>
                                                <div
                                                    className="absolute -top-px -right-px bg-green-500 text-white text-xs px-2 py-1 rounded-bl-md">width:
                                                    100%
                                                </div>
                                            </div>
                                            <p className="text-text-light text-sm mt-3 text-center">Total width = set
                                                width (padding and border inside)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Why Use border-box?</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Makes it easier to size elements accurately</li>
                                        <li>No need to calculate padding and border in dimensions</li>
                                        <li>Prevents unexpected layout shifts when adding borders/padding</li>
                                        <li>Industry standard for modern CSS development</li>
                                        <li>Works better with responsive design patterns</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Try It Yourself */}
                        <section id="try-it" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  7
                                </span>
                                Try It Yourself
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Experiment with the box model properties by styling the HTML elements below. Try
                                    adjusting dimensions, padding, border, and margin to see how they affect the layout.
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
  <title>CSS Box Model Practice</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>CSS Box Model</h1>
    
    <div class="demo-section">
      <h2>Content Box vs Border Box</h2>
      <div class="box-container">
        <div class="box content-box">
          <h3>content-box</h3>
          <p>Width: 200px</p>
          <p>Padding: 20px</p>
          <p>Border: 5px</p>
          <p>Total: 250px</p>
        </div>
        
        <div class="box border-box">
          <h3>border-box</h3>
          <p>Width: 200px</p>
          <p>Padding: 20px</p>
          <p>Border: 5px</p>
          <p>Total: 200px</p>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Margin and Padding</h2>
      <div class="box-container spacing-demo">
        <div class="box-outer">
          <p class="label">Margin</p>
          <div class="box-middle">
            <p class="label">Border</p>
            <div class="box-inner">
              <p class="label">Padding</p>
              <div class="content">
                <p>Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>Card Examples</h2>
      <div class="card-container">
        <div class="card">
          <div class="card-image"></div>
          <div class="card-content">
            <h3>Card Title</h3>
            <p>This card demonstrates the box model with realistic styling.</p>
            <button>Learn More</button>
          </div>
        </div>
        
        <div class="card card-alt">
          <div class="card-image"></div>
          <div class="card-content">
            <h3>Card Title</h3>
            <p>This card has different box model properties.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
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
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
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

h1 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;
  color: #2c3e50;
}

.demo-section {
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}

/* Content Box vs Border Box Demo */
.box-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.box {
  width: 200px;
  padding: 20px;
  border: 5px solid #3498db;
  background-color: #ecf0f1;
  text-align: center;
}

.content-box {
  box-sizing: content-box;
  background-color: #d6eaf8;
}

.border-box {
  box-sizing: border-box;
  background-color: #d1f2eb;
}

/* Margin and Padding Demo */
.spacing-demo {
  margin-top: 30px;
}

.box-outer {
  background-color: #f1f1f1;
  padding: 30px;
  border: 2px dashed #bdc3c7;
  position: relative;
}

.box-middle {
  background-color: #e8f4fc;
  border: 5px solid #3498db;
  padding: 30px;
  position: relative;
}

.box-inner {
  background-color: #d6eaf8;
  padding: 20px;
  position: relative;
}

.content {
  background-color: #3498db;
  color: white;
  padding: 15px;
  text-align: center;
}

.label {
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 12px;
  color: #7f8c8d;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  border-radius: 3px;
}

/* Card Examples */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-image {
  height: 150px;
  background-color: #3498db;
  background-image: linear-gradient(45deg, #3498db, #2980b9);
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.card-content p {
  margin-bottom: 15px;
  color: #7f8c8d;
}

.card-content button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.card-alt {
  border: 2px solid #3498db;
  box-shadow: none;
}

.card-alt .card-content {
  padding: 20px;
}

.card-alt button {
  background-color: white;
  color: #3498db;
  border: 2px solid #3498db;
}`}
                                />
                            </div>

                            <div className="p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Pro Tip:</h3>
                                    <p className="text-text-secondary">
                                        When working with the box model, use your browser's Developer Tools to inspect
                                        elements. The box model visualization shows the exact dimensions of content,
                                        padding, border, and margin, making it easier to debug layout issues.
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
                                    <span className="text-text-secondary">The CSS Box Model consists of content, padding, border, and margin</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Width and height properties control the content area dimensions</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Padding adds space inside the border, while margin adds space outside</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Border sits between padding and margin and can be styled in various ways</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Box-sizing: border-box makes width and height include padding and border</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/css/colors-backgrounds"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2"/>
                                Previous: Colors and Backgrounds
                            </Link>
                            <Link
                                href="/css/typography"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Typography
                                <ArrowRight size={16} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}