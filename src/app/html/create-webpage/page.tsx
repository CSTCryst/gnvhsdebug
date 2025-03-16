// src/app/html/create-webpage/page.tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileCode, Terminal, Save, Play, Eye, Award, Code } from "lucide-react";

export default function CreateWebpagePage() {
    const steps = [
        {
            title: "Step 1: Create an HTML File",
            content: "Create a new file in a text editor like Notepad, VS Code, or TextEdit. Save it with a .html extension, for example, 'index.html'.",
            icon: <FileCode className="text-primary-dark" size={24} />
        },
        {
            title: "Step 2: Add the Basic HTML Structure",
            content: "Every HTML document needs a specific structure. Copy the template code provided below.",
            icon: <Code className="text-primary-dark" size={24} />
        },
        {
            title: "Step 3: Save Your File",
            content: "Save your file again to make sure all your code is preserved.",
            icon: <Save className="text-primary-dark" size={24} />
        },
        {
            title: "Step 4: Open in a Web Browser",
            content: "Find your HTML file in your file explorer and double-click it. It will open in your default web browser.",
            icon: <Eye className="text-primary-dark" size={24} />
        }
    ];

    const tools = [
        {
            name: "Visual Studio Code",
            url: "https://code.visualstudio.com/",
            description: "Free, powerful code editor with HTML syntax highlighting, autocompletion, and live preview extensions.",
            features: ["Syntax highlighting", "Emmet abbreviations", "HTML validation", "Extensions for live preview"]
        },
        {
            name: "Sublime Text",
            url: "https://www.sublimetext.com/",
            description: "Lightweight, fast text editor popular among web developers for its speed and simplicity.",
            features: ["Fast performance", "Distraction-free mode", "Multiple selections", "Command palette"]
        },
        {
            name: "CodePen",
            url: "https://codepen.io/",
            description: "Online editor that lets you write HTML, CSS, and JavaScript without installing anything.",
            features: ["No installation needed", "Instant preview", "Share your code easily", "Import external libraries"]
        },
        {
            name: "Replit",
            url: "https://replit.com/",
            description: "Browser-based coding environment with HTML templates and live collaboration features.",
            features: ["Built-in hosting", "Multiplayer coding", "Complete development environment", "Templates for beginners"]
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
                        Create Your First <span className="text-primary-dark">Webpage</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-3xl">
                        Let's get started with HTML by creating a simple webpage. No prior coding experience is required!
                    </p>
                </div>

                {/* What You'll Need Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-dark mb-6">What You'll Need</h2>
                    <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="bg-primary-light/30 rounded-full p-1 mr-3 mt-1">
                                    <Terminal size={16} className="text-primary-dark" />
                                </div>
                                <div>
                                    <span className="font-medium text-dark">A text editor</span>
                                    <p className="text-text-light text-sm">Any basic text editor like Notepad (Windows), TextEdit (Mac), or VS Code will work.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-primary-light/30 rounded-full p-1 mr-3 mt-1">
                                    <Eye size={16} className="text-primary-dark" />
                                </div>
                                <div>
                                    <span className="font-medium text-dark">A web browser</span>
                                    <p className="text-text-light text-sm">Chrome, Firefox, Safari, or Edge – any modern browser will display your HTML.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Creating Your First HTML Page</h2>
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-primary-light/50 rounded-lg flex items-center justify-center mr-3">
                                                {step.icon}
                                            </div>
                                            <h3 className="font-bold text-dark">{step.title}</h3>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-text-secondary mb-4">{step.content}</p>

                                        {index === 1 && (
                                            <div className="bg-gray-50 p-5 rounded-lg">
                                                <h4 className="font-medium text-dark mb-3">HTML Template:</h4>
                                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
    
    <h2>About Me</h2>
    <p>I'm learning HTML!</p>
    
    <h2>My Favorite Things</h2>
    <ul>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item three</li>
    </ul>
    
    <p>Visit <a href="https://www.example.com">this website</a> to learn more.</p>
</body>
</html>`}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preview of Result */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Preview: What You'll See</h2>
                    <div className="bg-white rounded-xl shadow-soft p-8 border border-gray-100">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-center mb-3 border-b border-gray-200 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                                <div className="flex-grow text-center text-sm text-gray-500">Browser Preview</div>
                            </div>

                            <div className="p-4">
                                <h1 className="text-2xl font-bold mb-2">Hello, World!</h1>
                                <p className="mb-4">This is my first webpage.</p>

                                <h2 className="text-xl font-bold mb-2">About Me</h2>
                                <p className="mb-4">I'm learning HTML!</p>

                                <h2 className="text-xl font-bold mb-2">My Favorite Things</h2>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Item one</li>
                                    <li>Item two</li>
                                    <li>Item three</li>
                                </ul>

                                <p>Visit <a href="#" className="text-primary-dark hover:underline">this website</a> to learn more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Understanding the Code */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Understanding Your First HTML Code</h2>
                    <div className="bg-gradient-to-br from-primary-light/40 to-white p-8 rounded-2xl shadow-soft">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;!DOCTYPE html&gt;</h3>
                                <p className="text-text-secondary">Tells the browser you're using HTML5, the current version of HTML.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;html lang="en"&gt;...&lt;/html&gt;</h3>
                                <p className="text-text-secondary">The root element that contains all other HTML elements. The lang attribute specifies English language.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;head&gt;...&lt;/head&gt;</h3>
                                <p className="text-text-secondary">Contains meta-information about the document, like the character encoding, viewport settings, and the page title.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;body&gt;...&lt;/body&gt;</h3>
                                <p className="text-text-secondary">Contains all the content that will be visible on the page.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;h1&gt;, &lt;h2&gt;, etc.</h3>
                                <p className="text-text-secondary">Heading elements that define titles and subtitles. The number indicates the level of importance (h1 is most important).</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;p&gt;</h3>
                                <p className="text-text-secondary">Defines a paragraph of text.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;ul&gt; and &lt;li&gt;</h3>
                                <p className="text-text-secondary">Create an unordered list (bullet points) with list items.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">&lt;a href="..."&gt;</h3>
                                <p className="text-text-secondary">Creates a hyperlink to another webpage. The href attribute specifies the destination URL.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools to Help You */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Tools to Help You Code HTML</h2>
                    <p className="text-text-secondary mb-8">
                        While you can use any basic text editor to write HTML, these specialized tools can make the process easier:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-card transition-all"
                            >
                                <div className="p-6 border-b border-gray-100">
                                    <h3 className="text-xl font-bold text-dark mb-2">{tool.name}</h3>
                                    <p className="text-text-secondary">{tool.description}</p>
                                </div>
                                <div className="p-6 bg-gray-50">
                                    <h4 className="font-medium text-dark mb-2">Features:</h4>
                                    <ul className="mb-4">
                                        {tool.features.map((feature, index) => (
                                            <li key={index} className="flex items-start mb-1">
                                                <span className="text-primary-dark mr-2">•</span>
                                                <span className="text-text-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenge */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Try It Yourself Challenge</h2>
                    <div className="bg-gradient-to-br from-primary-light/40 to-white p-8 rounded-2xl shadow-soft">
                        <h3 className="font-bold text-dark mb-4">Customize Your First Webpage</h3>
                        <p className="text-text-secondary mb-6">
                            Now that you've created your first HTML page, try these modifications to make it your own:
                        </p>
                        <ol className="list-decimal list-inside text-text-secondary space-y-3 mb-6">
                            <li>Change the page title to something personal</li>
                            <li>Add your own name and information to the "About Me" section</li>
                            <li>Replace the "My Favorite Things" list with your actual favorite things</li>
                            <li>Add another section with a new heading of your choice</li>
                            <li>Change the link to point to a website you actually want to share</li>
                        </ol>
                        <p className="text-text-secondary font-medium">
                            After making these changes, save the file and refresh your browser to see your customized webpage!
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                    <Link
                        href="/html/about"
                        className="flex items-center text-primary-dark hover:text-dark transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Previous: About HTML
                    </Link>
                    <Link
                        href="/html/text-elements"
                        className="flex items-center text-primary-dark hover:text-dark transition-colors"
                    >
                        Next: Text Elements in HTML
                        <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}