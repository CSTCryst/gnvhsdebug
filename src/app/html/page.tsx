// src/app/html/page.tsx
import Link from "next/link";
import { ArrowRight, BookOpen, Code, Layers, Lightbulb } from "lucide-react";

export default function HTMLPage() {
    const htmlTopics = [
        {
            category: "Getting Started",
            icon: <BookOpen className="text-primary-dark" size={20} />,
            topics: [
                { title: "About HTML", href: "/html/about" },
                { title: "Create a Webpage", href: "/html/create-webpage" }
            ]
        },
        {
            category: "Writing HTML",
            icon: <Code className="text-primary-dark" size={20} />,
            topics: [
                { title: "Text Elements in HTML", href: "/html/text-elements" },
                { title: "Lists in HTML", href: "/html/lists" },
                { title: "Links and Images in HTML", href: "/html/links-images" },
                { title: "Interactive Elements in HTML", href: "/html/interactive-elements" },
                { title: "Block-level, Inline, and Organizational Elements", href: "/html/element-types" },
                { title: "Metadata and the Head Element", href: "/html/metadata-head" }
            ]
        },
        {
            category: "Extras",
            icon: <Lightbulb className="text-primary-dark" size={20} />,
            topics: [
                { title: "Exploring HTML on Live Webpages", href: "/html/exploring-live" },
                { title: "More HTML Resources", href: "/html/resources" }
            ]
        }
    ];

    return (
        <div className="bg-background min-h-screen py-16">
            {/* Hero section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                        HTML <span className="text-primary-dark">Tutorials</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-8 max-w-2xl">
                        Master the structure of the web with our comprehensive, step-by-step HTML guides
                    </p>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="/html/about"
                            className="btn-primary"
                        >
                            Start Learning
                        </Link>
                        <Link
                            href="#topics"
                            className="text-primary-dark hover:text-dark transition-colors font-medium flex items-center"
                        >
                            Browse All Topics <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Topics section */}
            <div id="topics" className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {htmlTopics.map((category) => (
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
                                    {category.category === "Getting Started" && "Begin your HTML journey"}
                                    {category.category === "Writing HTML" && "Core HTML elements and structure"}
                                    {category.category === "Extras" && "Additional resources and tips"}
                                </p>
                            </div>
                            <div className="p-4">
                                <ul className="space-y-1">
                                    {category.topics.map((topic) => (
                                        <li key={topic.href}>
                                            <Link
                                                href={topic.href}
                                                className="flex items-center p-2 rounded-lg text-text-secondary hover:bg-primary-light/20 hover:text-primary-dark transition-colors"
                                            >
                                                <ArrowRight size={16} className="mr-2 text-primary-dark/70" />
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

            {/* Why Learn HTML section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="bg-gradient-to-br from-primary-light/40 to-white p-8 rounded-2xl shadow-soft">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-dark mb-4">Why Learn HTML?</h2>
                            <div className="space-y-4 text-text-secondary">
                                <p>
                                    HTML (HyperText Markup Language) is the backbone of every webpage you visit. It provides the structure that holds all content on the web, from simple text to complex applications.
                                </p>
                                <p>
                                    Learning HTML is the first step to becoming a web developer. It's relatively easy to learn, but mastering it opens countless doors in the digital world.
                                </p>
                                <p>
                                    Our tutorials are designed to take you from complete beginner to confident HTML developer through practical, hands-on lessons.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-primary-light/50 rounded-lg flex items-center justify-center mb-3">
                                    <Layers size={24} className="text-primary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Foundation Skill</h3>
                                <p className="text-sm text-text-light">The essential building block of all websites and web applications</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-primary-light/50 rounded-lg flex items-center justify-center mb-3">
                                    <Code size={24} className="text-primary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Easy to Learn</h3>
                                <p className="text-sm text-text-light">Simple syntax that's beginner-friendly and quick to pick up</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-primary-light/50 rounded-lg flex items-center justify-center mb-3">
                                    <Lightbulb size={24} className="text-primary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Universal</h3>
                                <p className="text-sm text-text-light">Works in all browsers and platforms without additional tools</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-soft">
                                <div className="w-12 h-12 bg-primary-light/50 rounded-lg flex items-center justify-center mb-3">
                                    <BookOpen size={24} className="text-primary-dark" />
                                </div>
                                <h3 className="font-bold text-dark mb-2">Future-Proof</h3>
                                <p className="text-sm text-text-light">HTML continues to evolve with web standards and technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Getting Started CTA */}
            <div className="container mx-auto px-4">
                <div className="text-center bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                    <h2 className="text-2xl font-bold text-dark mb-4">Ready to Start Your HTML Journey?</h2>
                    <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                        Begin with our step-by-step introduction and create your first webpage today!
                    </p>
                    <Link
                        href="/html/about"
                        className="btn-primary inline-flex items-center"
                    >
                        Begin First Tutorial <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}