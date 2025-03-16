// src/app/html/lists/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function ListsPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/html" className="hover:text-primary-dark transition-colors">HTML</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Lists</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Lists in HTML
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>HTML Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 5 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Lists are essential elements for structuring content on web pages. They allow you to group related items together in a clear, organized way.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn about the different types of lists in HTML and how to use them effectively in your web pages.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#unordered-lists" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Unordered Lists
                                    </a>
                                </li>
                                <li>
                                    <a href="#ordered-lists" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Ordered Lists
                                    </a>
                                </li>
                                <li>
                                    <a href="#description-lists" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Description Lists
                                    </a>
                                </li>
                                <li>
                                    <a href="#nested-lists" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Nested Lists
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

                        {/* Unordered Lists */}
                        <section id="unordered-lists" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Unordered Lists
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Unordered lists (<code>ul</code>) are used when the order of the items doesn't matter. Each item in the list is marked with a bullet point by default.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div>
                                    <ul className="list-disc list-inside text-text-secondary">
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">When to Use:</h3>
                                    <p className="text-text-secondary">
                                        Use unordered lists for groups of related items where the sequence doesn't matter, such as shopping lists, feature lists, or navigation menus.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Ordered Lists */}
                        <section id="ordered-lists" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Ordered Lists
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Ordered lists (<code>ol</code>) are used when the sequence of items is important. Each item is automatically numbered.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div>
                                    <ol className="list-decimal list-inside text-text-secondary">
                                        <li>First step</li>
                                        <li>Second step</li>
                                        <li>Third step</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Ordered List Attributes:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>type</code> - specifies the numbering type (1, A, a, I, i)</li>
                                        <li><code>start</code> - specifies the starting number</li>
                                        <li><code>reversed</code> - reverses the numbering</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Examples:
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>&lt;ol type="A"&gt;</code> - Uses uppercase letters</li>
                                        <li><code>&lt;ol start="5"&gt;</code> - Starts at number 5</li>
                                        <li><code>&lt;ol reversed&gt;</code> - Counts down instead of up</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Description Lists */}
                        <section id="description-lists" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Description Lists
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Description lists (<code>dl</code>) are used to display name-value pairs, like terms and their definitions. Each description list contains:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary mb-4">
                                    <li><code>dt</code> - Description term</li>
                                    <li><code>dd</code> - Description details (the definition)</li>
                                </ul>
                            </div>

                            <CodeBlock
                                code={`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used for styling HTML elements.</dd>
  
  <dt>JavaScript</dt>
  <dd>A programming language that enables interactive web pages.</dd>
</dl>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="space-y-4">
                                    <div>
                                        <dt className="font-semibold text-dark">HTML</dt>
                                        <dd className="pl-4 text-text-secondary">HyperText Markup Language, the standard language for creating web pages.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-dark">CSS</dt>
                                        <dd className="pl-4 text-text-secondary">Cascading Style Sheets, used for styling HTML elements.</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-dark">JavaScript</dt>
                                        <dd className="pl-4 text-text-secondary">A programming language that enables interactive web pages.</dd>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">When to Use:</h3>
                                    <p className="text-text-secondary">
                                        Description lists are perfect for glossaries, metadata, key-value pairs, or any content that has a term and corresponding explanation.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Nested Lists */}
                        <section id="nested-lists" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Nested Lists
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Lists can be nested inside one another to create hierarchical structures. This is useful for outlines, navigation menus, or any content with multiple levels.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Oranges</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div>
                                    <ul className="list-disc list-outside text-text-secondary pl-5">
                                        <li>Fruits
                                            <ul className="list-circle list-outside pl-5 mt-2">
                                                <li>Apples</li>
                                                <li>Bananas</li>
                                                <li>Oranges</li>
                                            </ul>
                                        </li>
                                        <li className="mt-2">Vegetables
                                            <ul className="list-circle list-outside pl-5 mt-2">
                                                <li>Carrots</li>
                                                <li>Broccoli</li>
                                                <li>Spinach</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Best Practices:</h3>
                                    <p className="text-text-secondary">
                                        Avoid nesting lists too deeply as it can make the content harder to read. Usually, two or three levels of nesting is sufficient for most purposes.
                                    </p>
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
                                    Create an HTML document that incorporates different types of lists to organize content effectively.
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
                                        <span className="text-xs font-mono">lists-example.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Lists Practice</title>
</head>
<body>
  <h1>My Travel Bucket List</h1>
  
  <h2>Top Destinations</h2>
  <ol>
    <li>Japan
      <ul>
        <li>Tokyo</li>
        <li>Kyoto</li>
        <li>Osaka</li>
      </ul>
    </li>
    <li>Italy
      <ul>
        <li>Rome</li>
        <li>Florence</li>
        <li>Venice</li>
      </ul>
    </li>
    <li>New Zealand</li>
  </ol>
  
  <h2>Travel Essentials</h2>
  <ul>
    <li>Passport</li>
    <li>Phone and charger</li>
    <li>Comfortable shoes</li>
    <li>Camera</li>
  </ul>
  
  <h2>Travel Terms</h2>
  <dl>
    <dt>Layover</dt>
    <dd>A period of time between connecting flights.</dd>
    
    <dt>All-inclusive</dt>
    <dd>A vacation package that includes accommodations, meals, and activities.</dd>
    
    <dt>Red-eye</dt>
    <dd>A flight that departs at night and arrives the next morning.</dd>
  </dl>
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
                                        Lists are not just for displaying bullet points or numbers. They are semantic elements that help structure your content and improve accessibility. Screen readers use list markup to provide context to users, allowing them to navigate between lists, count items, and understand the relationship between nested elements.
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
                                    <span className="text-text-secondary">Use <code>ul</code> for unordered lists when the sequence doesn't matter</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Use <code>ol</code> for ordered lists when the sequence is important</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Use <code>dl</code>, <code>dt</code>, and <code>dd</code> for term-definition pairs</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Nest lists to create hierarchical structures, but avoid excessive nesting</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/html/text-elements"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Previous: Text Elements
                            </Link>
                            <Link
                                href="/html/links-images"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Links and Images
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}