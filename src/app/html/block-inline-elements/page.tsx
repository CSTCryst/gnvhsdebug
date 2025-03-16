// src/app/html/block-inline-elements/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function BlockInlineElementsPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/html" className="hover:text-primary-dark transition-colors">HTML</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Block and Inline Elements</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Block-level, Inline, and Organizational Elements
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2"/>
                            <span>HTML Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 7 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Understanding how elements are displayed and organized is crucial for creating
                                    well-structured HTML documents.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn about block-level and inline elements, as well as
                                    semantic organizational elements that help structure your web page content.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#block-elements"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Block-level Elements
                                    </a>
                                </li>
                                <li>
                                    <a href="#inline-elements"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Inline Elements
                                    </a>
                                </li>
                                <li>
                                    <a href="#semantic-elements"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Semantic Elements
                                    </a>
                                </li>
                                <li>
                                    <a href="#divs-spans"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Divs and Spans
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

                        {/* Block-level Elements */}
                        <section id="block-elements" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Block-level Elements
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Block-level elements always start on a new line and take up the full width
                                    available. They create a "block" in the flow of content.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Common Block Elements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>&lt;div&gt;</code> - generic container</li>
                                        <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - headings</li>
                                        <li><code>&lt;p&gt;</code> - paragraph</li>
                                        <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code> - lists</li>
                                        <li><code>&lt;li&gt;</code> - list item</li>
                                        <li><code>&lt;table&gt;</code> - table</li>
                                        <li><code>&lt;form&gt;</code> - form</li>
                                        <li><code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> - page sections
                                        </li>
                                        <li><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> - content
                                            sections
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Key Characteristics</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Always starts on a new line</li>
                                        <li>Takes up full width available</li>
                                        <li>Creates a "block" in the document flow</li>
                                        <li>Can contain other block elements and inline elements</li>
                                        <li>Can have margin and padding on all sides</li>
                                        <li>Height and width properties apply</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <div className="bg-dark text-white p-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex space-x-1.5 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono">block-elements.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<h1>This is a heading</h1>
<p>This is a paragraph. Notice how it creates a distinct block on the page.</p>
<p>This is another paragraph, which starts on a new line.</p>

<div style="border: 1px solid blue; padding: 10px;">
  <p>This paragraph is inside a div. The div is also a block element.</p>
</div>`}
                                />
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-dark p-2 bg-gray-100">This is a heading</h4>
                                    <p className="p-2 bg-gray-100 text-text-secondary">This is a paragraph. Notice how
                                        it creates a distinct block on the page.</p>
                                    <p className="p-2 bg-gray-100 text-text-secondary">This is another paragraph, which
                                        starts on a new line.</p>
                                    <div className="border border-blue-400 p-3">
                                        <p className="p-2 bg-gray-100 text-text-secondary">This paragraph is inside a
                                            div. The div is also a block element.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-500 italic">Note: Gray backgrounds added to show
                                    element boundaries</p>
                            </div>
                        </section>

                        {/* Inline Elements */}
                        <section id="inline-elements" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Inline Elements
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Inline elements do not start on a new line and only take up as much width as
                                    necessary. They flow within the content and don't break the flow of text.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Common Inline Elements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>&lt;span&gt;</code> - generic inline container</li>
                                        <li><code>&lt;a&gt;</code> - hyperlink</li>
                                        <li><code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code> - bold text</li>
                                        <li><code>&lt;em&gt;</code>, <code>&lt;i&gt;</code> - italic text</li>
                                        <li><code>&lt;mark&gt;</code> - highlighted text</li>
                                        <li><code>&lt;small&gt;</code> - smaller text</li>
                                        <li><code>&lt;img&gt;</code> - image</li>
                                        <li><code>&lt;code&gt;</code> - code snippet</li>
                                        <li><code>&lt;button&gt;</code> - clickable button</li>
                                        <li><code>&lt;input&gt;</code> - input field</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Key Characteristics</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Does not start on a new line</li>
                                        <li>Takes only as much width as necessary</li>
                                        <li>Flows with surrounding text</li>
                                        <li>Cannot contain block-level elements</li>
                                        <li>Vertical margins and paddings have limited effect</li>
                                        <li>Height and width properties have limited effect</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <div className="bg-dark text-white p-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex space-x-1.5 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono">inline-elements.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<p>
  This is a paragraph with <strong>bold text</strong>, <em>italic text</em>,
  and a <a href="#">hyperlink</a>. All of these elements are
  <span style="color: blue;">inline elements</span> that flow with the text.
</p>`}
                                />
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div>
                                    <p className="text-text-secondary leading-relaxed">
                                        This is a paragraph with <strong className="inline-block bg-yellow-100">bold
                                        text</strong>, <em className="inline-block bg-yellow-100">italic text</em>,
                                        and a <a href="#"
                                                 className="inline-block bg-yellow-100 text-primary-dark">hyperlink</a>.
                                        All of these elements are
                                        <span
                                            className="inline-block bg-yellow-100 text-blue-600"> inline elements</span> that
                                        flow with the text.
                                    </p>
                                </div>
                                <p className="mt-4 text-sm text-gray-500 italic">Note: Yellow backgrounds added to show
                                    inline element boundaries</p>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Block vs. Inline: Key Difference</h3>
                                    <p className="text-text-secondary">
                                        The fundamental difference is how they flow in the document: block elements
                                        create distinct "blocks" that stack vertically, while inline elements flow
                                        horizontally within text content. In modern web development, CSS can be used to
                                        change how elements display through the <code>display</code> property.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Semantic Elements */}
                        <section id="semantic-elements" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Semantic Elements
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Semantic elements clearly describe their meaning to both the browser and the
                                    developer. They provide information about the content they contain, improving
                                    accessibility and SEO.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Page Structure Elements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>&lt;header&gt;</code> - page or section header</li>
                                        <li><code>&lt;nav&gt;</code> - navigation links</li>
                                        <li><code>&lt;main&gt;</code> - main content</li>
                                        <li><code>&lt;article&gt;</code> - self-contained content</li>
                                        <li><code>&lt;section&gt;</code> - thematic grouping</li>
                                        <li><code>&lt;aside&gt;</code> - sidebar content</li>
                                        <li><code>&lt;footer&gt;</code> - page or section footer</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Content Elements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> - images
                                            with captions
                                        </li>
                                        <li><code>&lt;time&gt;</code> - dates and times</li>
                                        <li><code>&lt;mark&gt;</code> - highlighted text</li>
                                        <li><code>&lt;summary&gt;</code> and <code>&lt;details&gt;</code> - collapsible
                                            content
                                        </li>
                                        <li><code>&lt;address&gt;</code> - contact information</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <div className="bg-dark text-white p-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex space-x-1.5 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono">semantic-structure.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML Example</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Article Title</h2>
        <p>Posted on <time datetime="2023-05-15">May 15, 2023</time></p>
      </header>
      
      <section>
        <h3>Introduction</h3>
        <p>This is the main content of the article...</p>
      </section>
      
      <section>
        <h3>Details</h3>
        <p>More information about the topic...</p>
        
        <figure>
          <img src="image.jpg" alt="Descriptive image">
          <figcaption>Caption for the image</figcaption>
        </figure>
      </section>
    </article>
    
    <aside>
      <h3>Related Content</h3>
      <ul>
        <li><a href="#">Related link 1</a></li>
        <li><a href="#">Related link 2</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
    <address>
      Contact: <a href="mailto:info@example.com">info@example.com</a>
    </address>
  </footer>
</body>
</html>`}
                                />
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Lightbulb size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Benefits of Semantic HTML</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Improved accessibility for screen readers and assistive technologies</li>
                                        <li>Better SEO as search engines better understand page content</li>
                                        <li>Easier code maintenance and readability</li>
                                        <li>More consistent styling across browsers</li>
                                        <li>Future-proofing as browsers and technologies evolve</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Divs and Spans */}
                        <section id="divs-spans" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Divs and Spans
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    While semantic elements are preferred, sometimes you need generic containers for
                                    styling or JavaScript purposes. This is
                                    where <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> come in.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Div Element</h3>
                                    <p className="text-text-secondary mb-2">
                                        The <code>&lt;div&gt;</code> element is a block-level container with no semantic
                                        meaning. It's used to group content for styling purposes.
                                    </p>
                                    <CodeBlock code={`<div class="container">
  <h2>Section Title</h2>
  <p>Content goes here...</p>
</div>`}/>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Span Element</h3>
                                    <p className="text-text-secondary mb-2">
                                        The <code>&lt;span&gt;</code> element is an inline container with no semantic
                                        meaning. It's used to style pieces of text within larger content.
                                    </p>
                                    <CodeBlock code={`<p>
  This text has a <span class="highlight">highlighted</span> word.
</p>`}/>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <div className="bg-dark text-white p-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex space-x-1.5 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono">divs-spans.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<!-- Using divs for layout -->
<div class="card">
  <div class="card-header">
    <h3>Product Title</h3>
  </div>
  <div class="card-body">
    <p>Product description goes here...</p>
    <p>Price: <span class="price">$99.99</span></p>
    <p>Status: <span class="status-available">Available</span></p>
  </div>
  <div class="card-footer">
    <button>Add to Cart</button>
  </div>
</div>`}
                                />
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">When to Use Divs vs. Semantic
                                        Elements</h3>
                                    <p className="text-text-secondary">
                                        Always prefer semantic elements when they match your content's purpose. For
                                        example, use <code>&lt;header&gt;</code> instead of <code>&lt;div
                                        class="header"&gt;</code>. Only
                                        use <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> when no semantic
                                        element fits your need, typically for styling purposes or creating complex
                                        layouts.
                                    </p>
                                </div>
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
                                    Create an HTML document with a semantic structure that includes both block and
                                    inline elements.
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
                                        <span className="text-xs font-mono">semantic-blog.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Blog</title>
  <style>
    /* Some basic styling to visualize the structure */
    header, footer, main, aside, article, section, nav {
      padding: 10px;
      margin: 5px;
      border: 1px solid #ccc;
    }
    header, footer { background-color: #f0f0f0; }
    main { display: flex; }
    article { flex: 3; }
    aside { flex: 1; background-color: #f8f8f8; }
    .highlight { color: #0066cc; font-weight: bold; }
  </style>
</head>
<body>
  <header>
    <h1>My Personal Blog</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Understanding HTML Elements</h2>
        <p>Published on <time datetime="2023-09-15">September 15, 2023</time> by <span class="highlight">Jane Doe</span></p>
      </header>

      <section>
        <h3>Introduction</h3>
        <p>HTML elements are the building blocks of web pages. They can be categorized as <strong>block-level</strong> or <strong>inline</strong> elements based on how they display in the document flow.</p>
      </section>

      <section>
        <h3>Block vs. Inline</h3>
        <p>Block elements like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;h1&gt;</code> create new blocks in the document flow, while inline elements like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, and <code>&lt;strong&gt;</code> flow with the text.</p>
        
        <figure>
          <img src="placeholder.jpg" alt="Diagram showing block vs inline elements">
          <figcaption>Visual representation of block and inline elements</figcaption>
        </figure>
      </section>

      <footer>
        <p>Tags: <a href="#">HTML</a>, <a href="#">Web Development</a>, <a href="#">Frontend</a></p>
      </footer>
    </article>

    <aside>
      <h3>Recent Posts</h3>
      <ul>
        <li><a href="#">CSS Flexbox Explained</a></li>
        <li><a href="#">Getting Started with JavaScript</a></li>
        <li><a href="#">Responsive Design Tips</a></li>
      </ul>
      
      <h3>Categories</h3>
      <ul>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2023 My Personal Blog. All rights reserved.</p>
    <address>
      Contact: <a href="mailto:blog@example.com">blog@example.com</a>
    </address>
  </footer>
</body>
</html>`}
                                />
                            </div>

                            <div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex">
                                <div className="text-primary-dark mr-4 mt-1">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
                                    <p className="text-text-secondary">
                                        When structuring your HTML, think about the meaning of your content first, then
                                        choose the most appropriate semantic element. Only reach
                                        for <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> when there's no
                                        suitable semantic element. This practice improves accessibility, SEO, and
                                        maintainability of your code.
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
                                    <span className="text-text-secondary">Block-level elements start on new lines and take up full width (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>)</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Inline elements flow with text and only take necessary width (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>)</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Semantic elements provide meaning about their content (e.g., <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>)</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span
                                        className="text-text-secondary">Use <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> only when no semantic element is suitable</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Well-structured HTML improves accessibility, SEO, and maintainability</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/html/interactive-elements"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2"/>
                                Previous: Interactive Elements
                            </Link>
                            <Link
                                href="/html/metadata-head"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Metadata and the Head Element
                                <ArrowRight size={16} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}