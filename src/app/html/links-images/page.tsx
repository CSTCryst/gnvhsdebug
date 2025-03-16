// src/app/html/links-images/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function LinksImagesPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/html" className="hover:text-primary-dark transition-colors">HTML</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Links and Images</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Links and Images in HTML
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
                                    Links and images are fundamental components that transform plain HTML documents into
                                    rich, interactive web pages.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn how to create hyperlinks to connect web pages and how
                                    to add images to enhance your content.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#hyperlinks"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Hyperlinks
                                    </a>
                                </li>
                                <li>
                                    <a href="#link-types"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Types of Links
                                    </a>
                                </li>
                                <li>
                                    <a href="#images"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Adding Images
                                    </a>
                                </li>
                                <li>
                                    <a href="#image-attributes"
                                       className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Image Attributes
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

                        {/* Hyperlinks */}
                        <section id="hyperlinks" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Hyperlinks
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Hyperlinks, created with the <code>&lt;a&gt;</code> (anchor) element, allow users to
                                    navigate between web pages. The <code>href</code> attribute specifies the
                                    destination URL.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<a href="https://www.example.com">Visit Example.com</a>`}
                            />

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div>
                                    <a href="#" className="text-primary-dark hover:underline">Visit Example.com</a>
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Important Attributes:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>href</code> - Specifies the URL of the page the link goes to</li>
                                        <li><code>target</code> - Specifies where to open the linked document</li>
                                        <li><code>title</code> - Provides additional information about the link (shown
                                            as a tooltip)
                                        </li>
                                        <li><code>rel</code> - Specifies the relationship between the current document
                                            and the linked document
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Types of Links */}
                        <section id="link-types" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Types of Links
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    HTML links can point to different types of resources and use different URL formats.
                                </p>
                            </div>

                            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-2">Absolute URLs</h3>
                                    <p className="text-text-secondary mb-2">
                                        Points to a location defined by its absolute location on the web, including
                                        protocol and domain name.
                                    </p>
                                    <CodeBlock
                                        code={`<a href="https://www.example.com/path/page.html">Link</a>`}
                                    />
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-2">Relative URLs</h3>
                                    <p className="text-text-secondary mb-2">
                                        Points to a location that is relative to the current page.
                                    </p>
                                    <CodeBlock
                                        code={`<a href="about.html">About</a>
<a href="../products/index.html">Products</a>`}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-2">Email Links</h3>
                                    <p className="text-text-secondary mb-2">
                                        Opens the user's email client with a pre-filled recipient.
                                    </p>
                                    <CodeBlock
                                        code={`<a href="mailto:contact@example.com">Send Email</a>`}
                                    />
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-2">Page Anchors</h3>
                                    <p className="text-text-secondary mb-2">
                                        Links to a specific section within the same page.
                                    </p>
                                    <CodeBlock
                                        code={`<a href="#section-id">Jump to Section</a>

<!-- Later in the page -->
<h2 id="section-id">Section Title</h2>`}
                                    />
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Lightbulb size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Link Target Attribute:</h3>
                                    <p className="text-text-secondary mb-2">
                                        Use the <code>target</code> attribute to control how the link opens:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>_self</code> - Default. Opens in the same tab/window</li>
                                        <li><code>_blank</code> - Opens in a new tab/window</li>
                                        <li><code>_parent</code> - Opens in the parent frame</li>
                                        <li><code>_top</code> - Opens in the full body of the window</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Images */}
                        <section id="images" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Adding Images
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    The <code>&lt;img&gt;</code> element is used to embed images in an HTML page. It is
                                    a self-closing tag, which means it doesn't need a closing tag.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<img src="images/example.jpg" alt="Example image">`}
                            />

                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Visual Example:</h3>
                                <div className="flex justify-center">
                                    <div
                                        className="bg-gray-200 rounded w-64 h-48 flex items-center justify-center text-gray-500">
                                        Example Image (300×200)
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24}/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Required Attributes:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>src</code> - Specifies the path to the image</li>
                                        <li><code>alt</code> - Provides alternative text for the image (important for
                                            accessibility)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Image Attributes */}
                        <section id="image-attributes" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Image Attributes
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Images can be customized with various attributes to control their appearance and
                                    behavior.
                                </p>
                            </div>

                            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-2">Size Attributes</h3>
                                    <p className="text-text-secondary mb-2">
                                        Control the dimensions of the image:
                                    </p>
                                    <CodeBlock
                                        code={`<img src="example.jpg" alt="Example" width="300" height="200">`}
                                    />
                                    <p className="text-text-secondary mt-2 text-sm">
                                        Note: Modern best practice is to control size with CSS, but these attributes
                                        help the browser allocate space before the image loads.
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-2">Additional Attributes</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>title</code> - Shows a tooltip when hovering over the image</li>
                                        <li><code>loading="lazy"</code> - Defers loading images until they enter the
                                            viewport
                                        </li>
                                        <li><code>srcset</code> - Provides multiple image sources for different screen
                                            sizes/resolutions
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Linking Images</h3>
                                <p className="text-text-secondary mb-4">
                                    Images can also be wrapped in <code>&lt;a&gt;</code> tags to create clickable
                                    images:
                                </p>
                                <CodeBlock
                                    code={`<a href="https://www.example.com">
  <img src="button.jpg" alt="Visit our website">
</a>`}
                                />
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
                                    Create an HTML document with links and images to practice what you've learned.
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
                                        <span className="text-xs font-mono">links-images-example.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Links and Images Example</title>
</head>
<body>
  <h1>My Portfolio</h1>
  
  <h2 id="about">About Me</h2>
  <p>Hello! I'm a web developer learning HTML. Feel free to <a href="mailto:me@example.com" title="Send me an email">contact me</a>.</p>
  
  <h2 id="projects">My Projects</h2>
  <p>Check out my <a href="projects.html">projects page</a> to see my work.</p>
  
  <h2 id="gallery">Gallery</h2>
  <p>Here are some of my favorite photos:</p>
  
  <a href="images/large-photo1.jpg">
    <img src="images/thumbnail1.jpg" alt="Mountain landscape" width="200" height="150">
  </a>
  
  <img src="images/photo2.jpg" alt="City skyline" width="200" height="150" loading="lazy">
  
  <h2>Navigation</h2>
  <ul>
    <li><a href="#about">About Me</a></li>
    <li><a href="#projects">My Projects</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="https://github.com" target="_blank">My GitHub</a></li>
  </ul>
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
                                        Always provide meaningful alternative text for images that describes the content
                                        or function of the image. This helps users with screen readers understand your
                                        content and is also valuable if the image cannot be loaded. For decorative
                                        images that don't add meaning, use an empty alt attribute (<code>alt=""</code>)
                                        so screen readers will skip them.
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
                                    <span className="text-text-secondary">Use the <code>&lt;a&gt;</code> element to create hyperlinks between pages</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Understand different types of URLs and link destinations</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Use the <code>&lt;img&gt;</code> element to embed images in your pages</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Always include <code>alt</code> text for accessibility</span>
                                </li>
                                <li className="flex items-start">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓
                                    </div>
                                    <span className="text-text-secondary">Combine links and images to create interactive elements</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/html/lists"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2"/>
                                Previous: Lists in HTML
                            </Link>
                            <Link
                                href="/html/interactive-elements"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Interactive Elements
                                <ArrowRight size={16} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}