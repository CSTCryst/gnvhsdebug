// src/app/css/page.tsx
import Link from "next/link";
import { ArrowRight, Palette, Layout, Box, Zap } from "lucide-react";

export default function CSSPage() {
    const cssTopics = [
        {
            category: "Getting Started",
            icon: <Palette className="text-secondary-dark" size={20} />,
            topics: [
                { title: "Introduction to CSS", href: "/css/introduction" },
                { title: "Adding CSS to HTML", href: "/css/adding-css" }
            ]
        },
        {
            category: "CSS Fundamentals",
            icon: <Box className="text-secondary-dark" size={20} />,
            topics: [
                { title: "Selectors and Properties", href: "/css/selectors-properties" },
                { title: "Colors and Backgrounds", href: "/css/colors-backgrounds" },
                { title: "Box Model", href: "/css/box-model" },
                { title: "Typography", href: "/css/typography" },
                { title: "Layout and Positioning", href: "/css/layout-positioning" }
            ]
        },
        {
            category: "Advanced CSS",
            icon: <Zap className="text-secondary-dark" size={20} />,
            topics: [
                { title: "Flexbox", href: "/css/flexbox" },
                { title: "CSS Grid", href: "/css/grid" },
                { title: "Responsive Design", href: "/css/responsive-design" },
                { title: "Animations and Transitions", href: "/css/animations" }
            ]
        }
    ];

    return (
        <div className="bg-background min-h-screen py-16">
            {/* Hero section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                        CSS <span className="text-secondary-dark">Tutorials</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-8 max-w-2xl">
                        Master the styling of web pages with our comprehensive guides to Cascading Style Sheets
                    </p>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="/css/introduction"
                            className="px-4 py-2.5 rounded-xl bg-secondary-dark text-white hover:bg-dark transition-colors shadow-sm"
                        >
                            Start Learning
                        </Link>
                        <Link
                            href="#topics"
                            className="text-secondary-dark hover:text-dark transition-colors font-medium flex items-center"
                        >
                            Browse All Topics <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Topics section */}
            <div id="topics" className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cssTopics.map((category) => (
                        <div
                            key={category.category}
                            className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-card transition-all"
                        >
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex items-center mb-1">
                                    {category.icon}
                                    <h2 className="text-xl font-bold ml-2">{category.category}</h2>
                                </div>
                                <p className="text-text-light text-sm">
                                    {category.category === "Getting Started" && "Begin your CSS journey"}
                                    {category.category === "CSS Fundamentals" && "Core CSS concepts and properties"}
                                    {category.category === "Advanced CSS" && "Modern layout and design techniques"}
                                </p>
                            </div>
                            <div className="p-4">
                                <ul className="space-y-1">
                                    {category.topics.map((topic) => (
                                        <li key={topic.href}>
                                            <Link
                                                href={topic.href}
                                                className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-secondary-light/20 hover:text-secondary-dark transition-colors"
                                            >
                                                <ArrowRight size={16} className="mr-2 text-secondary-dark/70" />
                                                {topic.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Learn CSS section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="bg-gradient-to-br from-secondary-light/40 to-white p-8 rounded-2xl shadow-soft">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-dark mb-4">Why Learn CSS?</h2>
                            <div className="space-y-4 text-text-secondary">
                                <p>
                                    CSS (Cascading Style Sheets) is what transforms plain HTML into visually appealing websites. It controls layout, colors, fonts, animations, and responsive design.
                                </p>
                                <p>
                                    While HTML provides structure, CSS brings your web pages to life with style and design. Without CSS, websites would be plain text documents with basic formatting.
                                </p>
                                <p>
                                    Our CSS tutorials take you from the basics to advanced concepts, helping you create modern, responsive websites that look great on any device.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mb-3">
                                    <Palette size={24} className="text-secondary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Visual Design</h3>
                                <p className="text-sm text-text-light">Transform plain HTML into beautiful, engaging interfaces</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mb-3">
                                    <Layout size={24} className="text-secondary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Responsive Design</h3>
                                <p className="text-sm text-text-light">Create sites that look great on any screen size</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mb-3">
                                    <Box size={24} className="text-secondary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Layout Control</h3>
                                <p className="text-sm text-text-light">Position elements precisely where you want them</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center mb-3">
                                    <Zap size={24} className="text-secondary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Animations</h3>
                                <p className="text-sm text-text-light">Add motion and interactivity to enhance user experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Example Preview */}
            <div className="container mx-auto px-4 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-dark mb-4">See CSS in Action</h2>
                            <p className="text-text-secondary mb-6">
                                Explore how CSS transforms plain HTML elements into visually appealing designs. The example on the right shows the same content with and without CSS styling.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-secondary-light flex items-center justify-center mr-3 text-secondary-dark font-bold">1</div>
                                    <span className="text-text-secondary">HTML defines structure</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-secondary-light flex items-center justify-center mr-3 text-secondary-dark font-bold">2</div>
                                    <span className="text-text-secondary">CSS adds visual styling</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-secondary-light flex items-center justify-center mr-3 text-secondary-dark font-bold">3</div>
                                    <span className="text-text-secondary">Together they create beautiful web pages</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link
                                    href="/css/introduction"
                                    className="px-4 py-2.5 rounded-xl bg-secondary-dark text-white hover:bg-dark transition-colors shadow-sm inline-flex items-center"
                                >
                                    Learn CSS Basics <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <div className="bg-gray-100 p-2 text-xs font-medium text-center border-b border-gray-200">
                                    Without CSS
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    <h1>Page Title</h1>
                                    <p>This is a paragraph with some text content.</p>
                                    <button>Click Me</button>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
                                <div className="bg-gray-100 p-2 text-xs font-medium text-center border-b border-gray-200">
                                    With CSS
                                </div>
                                <div className="p-4">
                                    <h1 className="text-xl font-bold text-secondary-dark mb-2">Page Title</h1>
                                    <p className="text-gray-700 mb-4">This is a paragraph with some text content.</p>
                                    <button className="bg-secondary-dark text-white px-4 py-2 rounded-lg">Click Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Getting Started CTA */}
            <div className="container mx-auto px-4">
                <div className="text-center bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                    <h2 className="text-2xl font-bold text-dark mb-4">Ready to Style Your Web Pages?</h2>
                    <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                        Start with our introduction to CSS and learn how to add style to your HTML content!
                    </p>
                    <Link
                        href="/css/introduction"
                        className="px-4 py-2.5 rounded-xl bg-secondary-dark text-white hover:bg-dark transition-colors shadow-sm inline-flex items-center"
                    >
                        Begin First CSS Tutorial <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>


            </div>
        </div>
    );
}