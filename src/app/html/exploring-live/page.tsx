// src/app/html/exploring-live/page.tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code, ExternalLink, Search, Terminal, Eye } from "lucide-react";

export default function ExploringLiveWebpagesPage() {
    const browserTools = [
        {
            name: "Inspect Element",
            description: "Right-click on any element and select 'Inspect' to see its HTML structure",
            icon: <Eye className="text-primary-dark" size={20} />,
            steps: [
                "Right-click on any webpage element you're curious about",
                "Select 'Inspect' or 'Inspect Element' from the context menu",
                "The developer tools will open, highlighting the element's HTML code",
                "Explore parent and child elements by expanding/collapsing the tree view"
            ]
        },
        {
            name: "View Page Source",
            description: "See the complete HTML structure of any webpage",
            icon: <Code className="text-primary-dark" size={20} />,
            steps: [
                "Right-click anywhere on a webpage",
                "Select 'View Page Source' from the context menu",
                "A new tab will open showing the full HTML document",
                "Search for specific elements using Ctrl+F (or Cmd+F on Mac)"
            ]
        },
        {
            name: "Developer Tools",
            description: "Access comprehensive browser tools for deep HTML inspection",
            icon: <Terminal className="text-primary-dark" size={20} />,
            steps: [
                "Press F12 or Ctrl+Shift+I (Cmd+Option+I on Mac) to open Developer Tools",
                "Navigate to the 'Elements' tab to see the HTML structure",
                "Use the selector tool (cursor icon) to click on page elements",
                "Modify HTML directly in the Elements panel to see live changes"
            ]
        }
    ];

    const exampleWebsites = [
        {
            name: "Mozilla Developer Network (MDN)",
            url: "https://developer.mozilla.org",
            why: "Clean, semantic HTML with excellent structure and accessibility practices"
        },
        {
            name: "CSS-Tricks",
            url: "https://css-tricks.com",
            why: "Creative implementation of HTML elements with modern design patterns"
        },
        {
            name: "Gov.uk",
            url: "https://www.gov.uk",
            why: "Example of highly accessible, standards-compliant HTML structure"
        },
        {
            name: "The New York Times",
            url: "https://www.nytimes.com",
            why: "Complex content organization with semantic HTML for article structure"
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
                        Exploring HTML on <span className="text-primary-dark">Live Webpages</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-3xl">
                        Learn how to examine and understand the HTML structure of any website using built-in browser tools. This is one of the best ways to improve your HTML skills by seeing real-world examples.
                    </p>
                </div>

                {/* Browser Tools Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Browser Developer Tools</h2>
                    <p className="text-text-secondary mb-8">
                        Modern web browsers come with powerful developer tools that let you inspect the HTML of any webpage. Here are the main ways to explore HTML on live websites:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {browserTools.map((tool) => (
                            <div
                                key={tool.name}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all"
                            >
                                <div className="flex items-center mb-4">
                                    {tool.icon}
                                    <h3 className="text-xl font-bold ml-2">{tool.name}</h3>
                                </div>
                                <p className="text-text-secondary mb-4">{tool.description}</p>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h4 className="font-medium text-dark mb-2">How to use it:</h4>
                                    <ol className="list-decimal list-inside text-text-light text-sm space-y-1">
                                        {tool.steps.map((step, index) => (
                                            <li key={index}>{step}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Techniques Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Learning from Live Websites</h2>
                    <div className="bg-primary-light/30 rounded-xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-dark mb-4">What to Look For</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-5 shadow-sm">
                                <h4 className="font-bold text-dark mb-2 flex items-center">
                                    <Search size={18} className="text-primary-dark mr-2" />
                                    Structure and Organization
                                </h4>
                                <ul className="text-text-secondary space-y-2">
                                    <li>• How content is divided into sections</li>
                                    <li>• Use of semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;</li>
                                    <li>• Nesting patterns for related content</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg p-5 shadow-sm">
                                <h4 className="font-bold text-dark mb-2 flex items-center">
                                    <Search size={18} className="text-primary-dark mr-2" />
                                    Element Attributes
                                </h4>
                                <ul className="text-text-secondary space-y-2">
                                    <li>• Classes and IDs for styling and JavaScript</li>
                                    <li>• Accessibility attributes (aria-*, role, etc.)</li>
                                    <li>• Custom data attributes (data-*)</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg p-5 shadow-sm">
                                <h4 className="font-bold text-dark mb-2 flex items-center">
                                    <Search size={18} className="text-primary-dark mr-2" />
                                    Layout Techniques
                                </h4>
                                <ul className="text-text-secondary space-y-2">
                                    <li>• How flexbox and grid containers are structured</li>
                                    <li>• Responsive design patterns</li>
                                    <li>• Container and wrapper elements</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg p-5 shadow-sm">
                                <h4 className="font-bold text-dark mb-2 flex items-center">
                                    <Search size={18} className="text-primary-dark mr-2" />
                                    Interactive Elements
                                </h4>
                                <ul className="text-text-secondary space-y-2">
                                    <li>• Form structure and validation attributes</li>
                                    <li>• Button and link implementations</li>
                                    <li>• Custom components (dropdown menus, modals, etc.)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Example Websites Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Websites with Good HTML to Study</h2>
                    <p className="text-text-secondary mb-8">
                        These websites are known for their well-structured, semantic HTML and make excellent learning examples:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {exampleWebsites.map((site) => (
                            <div
                                key={site.name}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all"
                            >
                                <h3 className="text-xl font-bold text-dark mb-2">{site.name}</h3>
                                <p className="text-primary-dark mb-4 flex items-center">
                                    <ExternalLink size={16} className="mr-1" />
                                    {site.url}
                                </p>
                                <p className="text-text-secondary">
                                    <span className="font-medium text-dark">Why study it:</span> {site.why}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Practice Exercise */}
                <div className="bg-gradient-to-br from-primary-light/40 to-white p-8 rounded-2xl shadow-soft mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-4">Practice Exercise</h2>
                    <p className="text-text-secondary mb-6">
                        Try this exercise to improve your HTML inspection skills:
                    </p>
                    <ol className="list-decimal list-inside text-text-secondary space-y-3 mb-6">
                        <li>Pick a website you use frequently</li>
                        <li>Open the developer tools and inspect the main navigation menu</li>
                        <li>Note how it's structured - Is it using &lt;nav&gt;? &lt;ul&gt; and &lt;li&gt;? Something else?</li>
                        <li>Try to identify any accessibility features (aria attributes, role values)</li>
                        <li>Look at how the mobile menu might differ from the desktop version</li>
                    </ol>
                    <p className="text-text-secondary">
                        By regularly examining how professional websites are built, you'll develop a better understanding of HTML best practices and common patterns.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                    <Link
                        href="/html/element-types"
                        className="flex items-center text-primary-dark hover:text-dark transition-colors mb-4 sm:mb-0"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Previous: Block-level, Inline, and Organizational Elements
                    </Link>
                    <Link
                        href="/html/resources"
                        className="flex items-center text-primary-dark hover:text-dark transition-colors"
                    >
                        Next: More HTML Resources
                        <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}