// src/app/html/text-elements/page.tsx
import Link from "next/link";
import CodeBlock from "../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function TextElementsPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/html" className="hover:text-primary-dark transition-colors">HTML</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Text Elements</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Text Elements in HTML
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>HTML Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 6 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Text elements are the building blocks of content on the web. HTML provides various elements to structure and format text in meaningful ways.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn about headings, paragraphs, emphasis, and other text elements that will help you create well-structured, semantic HTML documents.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#headings" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Headings
                                    </a>
                                </li>
                                <li>
                                    <a href="#paragraphs" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Paragraphs
                                    </a>
                                </li>
                                <li>
                                    <a href="#text-formatting" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Text Formatting
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

                        {/* Headings */}
                        <section id="headings" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                  1
                </span>
                                Headings
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    HTML offers six levels of headings, from <code>h1</code> (most important) to <code>h6</code> (least important). Headings help organize your content hierarchically.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>`}
                            />

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Best Practices:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Use only one <code>h1</code> per page</li>
                                        <li>Don't skip heading levels (e.g., don't go from h2 to h4)</li>
                                        <li>Use headings to create a logical document outline</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-primary-dark pl-4 py-1">
                                        <h1 className="text-2xl font-bold">This is a Heading 1</h1>
                                    </div>
                                    <div className="border-l-4 border-primary-light pl-4 py-1">
                                        <h2 className="text-xl font-bold">This is a Heading 2</h2>
                                    </div>
                                    <div className="border-l-4 border-primary-light/70 pl-4 py-1">
                                        <h3 className="text-lg font-bold">This is a Heading 3</h3>
                                    </div>
                                    <div className="border-l-4 border-primary-light/50 pl-4 py-1">
                                        <h4 className="text-base font-bold">This is a Heading 4</h4>
                                    </div>
                                    <div className="border-l-4 border-primary-light/30 pl-4 py-1">
                                        <h5 className="text-sm font-bold">This is a Heading 5</h5>
                                    </div>
                                    <div className="border-l-4 border-primary-light/20 pl-4 py-1">
                                        <h6 className="text-xs font-bold">This is a Heading 6</h6>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Paragraphs */}
                        <section id="paragraphs" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                  2
                </span>
                                Paragraphs
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    The paragraph element <code>p</code> is used to group related sentences and thoughts.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<p>This is a paragraph. It contains multiple sentences and represents a block of text. Browsers automatically add space before and after paragraphs.</p>

<p>This is another paragraph. Notice the space between this paragraph and the one above.</p>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="space-y-4">
                                    <p className="text-text-secondary">This is a paragraph. It contains multiple sentences and represents a block of text. Browsers automatically add space before and after paragraphs.</p>
                                    <p className="text-text-secondary">This is another paragraph. Notice the space between this paragraph and the one above.</p>
                                </div>
                            </div>
                        </section>

                        {/* Text Formatting */}
                        <section id="text-formatting" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                  3
                </span>
                                Text Formatting
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    HTML provides several elements for emphasizing or highlighting text:
                                </p>
                            </div>

                            <CodeBlock
                                code={`<p>This text is <strong>bold</strong> and this is <em>italic</em>.</p>

<p>This text is <mark>highlighted</mark> with a yellow background.</p>

<p>This is <small>smaller text</small> often used for fine print.</p>

<p>This text contains a <sub>subscript</sub> and a <sup>superscript</sup>.</p>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="space-y-4 text-text-secondary">
                                    <p>This text is <strong>bold</strong> and this is <em>italic</em>.</p>
                                    <p>This text is <mark className="bg-yellow-200 px-1 rounded">highlighted</mark> with a yellow background.</p>
                                    <p>This is <small>smaller text</small> often used for fine print.</p>
                                    <p>This text contains a <sub>subscript</sub> and a <sup>superscript</sup>.</p>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Semantic Elements:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>strong</code> - indicates importance</li>
                                        <li><code>em</code> - indicates emphasis</li>
                                        <li><code>mark</code> - indicates relevance</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Presentational Elements:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>b</code> - bold text without importance</li>
                                        <li><code>i</code> - italic text without emphasis</li>
                                        <li><code>u</code> - underlined text</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Try It Yourself */}
                        <section id="try-it" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                  4
                </span>
                                Try It Yourself
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Create an HTML document with various text elements to see how they work. Experiment with different combinations!
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
  <title>Text Elements Practice</title>
</head>
<body>
  <h1>My First Web Page</h1>
  
  <h2>About Me</h2>
  <p>Hello! My name is <strong>Your Name</strong> and I'm learning <em>HTML</em>.</p>
  
  <h2>My Hobbies</h2>
  <p>I enjoy reading, especially books about <mark>web development</mark>.</p>
  
  <h3>Chemical Formula</h3>
  <p>Water is H<sub>2</sub>O and the equation is E=mc<sup>2</sup>.</p>
</body>
</html>`}
                                />
                            </div>

                            <div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex">
                                <div className="text-primary-dark mr-4 mt-1">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
                                    <p className="text-text-secondary">
                                        When working with text elements, focus on semantics first. Choose elements that best describe the purpose of the content, not just how it should look. This improves accessibility and makes your HTML more meaningful.
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
                                    <span className="text-text-secondary">Use <code>h1</code> through <code>h6</code> to create a hierarchical document structure</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Group related text in <code>p</code> elements</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Apply semantic text formatting with <code>strong</code>, <code>em</code>, and other appropriate elements</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Choose elements based on meaning, not just appearance</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/html/create-webpage"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Previous: Create a Webpage
                            </Link>
                            <Link
                                href="/html/lists"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Lists in HTML
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}