// src/app/html/about/page.tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe, Code, BookOpen, Clock, Layers } from "lucide-react";

export default function AboutHTMLPage() {
    const htmlFeatures = [
        {
            title: "Easy to Learn",
            description: "HTML uses a simple, readable tag syntax that's intuitive and beginner-friendly",
            icon: <Clock className="text-primary-dark" size={24} />
        },
        {
            title: "Universal Compatibility",
            description: "HTML works across all browsers, devices, and operating systems",
            icon: <Globe className="text-primary-dark" size={24} />
        },
        {
            title: "Foundation of the Web",
            description: "Every website starts with HTML, regardless of what other technologies are used",
            icon: <Layers className="text-primary-dark" size={24} />
        },
        {
            title: "Constantly Evolving",
            description: "HTML5 introduced powerful features for modern web applications",
            icon: <Code className="text-primary-dark" size={24} />
        }
    ];

    return (
        <div className="bg-background min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Back to HTML Tutorials Link */}
                <div className="mb-8">
                    <Link
                        href="/html"
                        className="inline-flex items-center text-primary-dark hover:text-dark transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" /> Back to HTML Tutorials
                    </Link>
                </div>

                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        About <span className="text-primary-dark">HTML</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-3xl">
                        HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and content of your web pages and is the fundamental building block of the World Wide Web.
                    </p>
                </div>

                {/* What is HTML Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">What is HTML?</h2>
                    <div className="bg-white rounded-xl shadow-soft p-8 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-text-secondary mb-4">
                                    HTML stands for <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup language, which means it uses a system of tags to define elements within a document.
                                </p>
                                <p className="text-text-secondary mb-4">
                                    These elements tell the web browser how to display the content. Think of HTML as the skeleton of a webpage — it provides structure but not style or interactivity.
                                </p>
                                <p className="text-text-secondary mb-4">
                                    Web browsers like Chrome, Firefox, Safari, and Edge read HTML documents and render them into visible or audible web pages. HTML elements are represented by tags that label pieces of content such as "heading", "paragraph", "table", and so on.
                                </p>
                                <div className="bg-primary-light/20 rounded-lg p-4 mb-4">
                                    <h4 className="font-bold text-dark mb-2">Key Characteristics:</h4>
                                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                                        <li>HTML documents have a <code>.html</code> or <code>.htm</code> file extension</li>
                                        <li>HTML tags are surrounded by angle brackets: <code>&lt;tagname&gt;</code></li>
                                        <li>Most tags come in pairs: <code>&lt;tagname&gt;content&lt;/tagname&gt;</code></li>
                                        <li>Tags can contain attributes: <code>&lt;tagname attribute="value"&gt;</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <h3 className="font-bold text-dark mb-3">A Simple HTML Example:</h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://example.com">This is a link</a>
  </body>
</html>`}
                                    </pre>
                                </div>
                                <div className="bg-primary-light/30 p-5 rounded-lg">
                                    <h3 className="font-bold text-dark mb-2">What This Produces:</h3>
                                    <div className="bg-white border border-gray-200 p-4 rounded-md">
                                        <h1 className="text-xl font-bold mb-2">Welcome to HTML</h1>
                                        <p className="mb-2">This is a paragraph of text.</p>
                                        <a href="#" className="text-primary-dark hover:underline">This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HTML Features Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Why Learn HTML?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {htmlFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all"
                            >
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-light/50 rounded-lg flex items-center justify-center mr-4">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                                        <p className="text-text-secondary">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HTML History Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Brief History of HTML</h2>
                    <div className="bg-gradient-to-br from-primary-light/40 to-white p-8 rounded-2xl shadow-soft">
                        <div className="space-y-8">
                            <div className="flex">
                                <div className="w-24 md:w-32 flex-shrink-0">
                                    <div className="font-bold text-primary-dark text-lg">1993</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark mb-1">HTML 1.0</h3>
                                    <p className="text-text-secondary">The first version of HTML was created by Tim Berners-Lee, consisting of just 18 elements</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-24 md:w-32 flex-shrink-0">
                                    <div className="font-bold text-primary-dark text-lg">1995-1997</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark mb-1">HTML 2.0 - 3.2</h3>
                                    <p className="text-text-secondary">Added features like tables, text flow around images, and form elements</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-24 md:w-32 flex-shrink-0">
                                    <div className="font-bold text-primary-dark text-lg">1997-1999</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark mb-1">HTML 4.0</h3>
                                    <p className="text-text-secondary">Introduced stylesheets (CSS), scripting, frames, and better accessibility features</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-24 md:w-32 flex-shrink-0">
                                    <div className="font-bold text-primary-dark text-lg">2000-2008</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark mb-1">XHTML</h3>
                                    <p className="text-text-secondary">Reformulated HTML as an XML application, bringing stricter rules and better compatibility</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-24 md:w-32 flex-shrink-0">
                                    <div className="font-bold text-primary-dark text-lg">2008-Present</div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark mb-1">HTML5</h3>
                                    <p className="text-text-secondary">The current standard, adding semantic elements, video/audio support, canvas for drawing, and many APIs for advanced web applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HTML and Other Technologies Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">HTML and Related Technologies</h2>
                    <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                        <p className="text-text-secondary mb-6">
                            HTML rarely works alone in modern web development. It's usually combined with these complementary technologies:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-5 rounded-lg">
                                <h3 className="font-bold text-dark mb-3">HTML</h3>
                                <p className="text-text-secondary mb-3">Provides structure and content</p>
                                <div className="bg-primary-light/30 text-text-secondary p-3 rounded-md text-sm">
                                    <code>&lt;h1&gt;This is a heading&lt;/h1&gt;</code>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg">
                                <h3 className="font-bold text-dark mb-3">CSS</h3>
                                <p className="text-text-secondary mb-3">Controls presentation and styling</p>
                                <div className="bg-primary-light/30 text-text-secondary p-3 rounded-md text-sm">
                                    <code>h1 {`{`} color: blue; font-size: 24px; {`}`}</code>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg">
                                <h3 className="font-bold text-dark mb-3">JavaScript</h3>
                                <p className="text-text-secondary mb-3">Adds behavior and interactivity</p>
                                <div className="bg-primary-light/30 text-text-secondary p-3 rounded-md text-sm">
                                    <code>document.querySelector('h1').addEventListener('click', function() {`{`} alert('Clicked!'); {`}`});</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Getting Started CTA */}
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 text-center mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-4">Ready to Write Your First HTML?</h2>
                    <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                        Now that you understand what HTML is and why it matters, let's create your first webpage!
                    </p>
                    <Link
                        href="/html/create-webpage"
                        className="btn-primary inline-flex items-center"
                    >
                        Create Your First Webpage <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                    <div></div> {/* Empty div to push Next link to the right */}
                    <Link
                        href="/html/create-webpage"
                        className="flex items-center text-primary-dark hover:text-dark transition-colors"
                    >
                        Next: Create a Webpage
                        <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}