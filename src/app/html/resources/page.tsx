// src/app/html/resources/page.tsx
import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink, FileCode, Globe, Layers, Video, Code, Star } from "lucide-react";

export default function HTMLResourcesPage() {
    const officialResources = [
        {
            name: "MDN Web Docs - HTML",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            description: "Mozilla's comprehensive documentation on HTML elements, attributes, and best practices",
            icon: <BookOpen className="text-primary-dark" size={20}/>
        },
        {
            name: "W3C HTML Specification",
            url: "https://html.spec.whatwg.org/",
            description: "The official HTML Living Standard from the WHATWG",
            icon: <FileCode className="text-primary-dark" size={20}/>
        },
        {
            name: "HTML Living Standard (WHATWG)",
            url: "https://html.spec.whatwg.org/multipage/",
            description: "The multipage version of the HTML specification, easier for reference",
            icon: <Layers className="text-primary-dark" size={20}/>
        }
    ];

    const learningPlatforms = [
        {
            name: "freeCodeCamp - Responsive Web Design",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/",
            description: "Free, interactive curriculum covering HTML fundamentals and beyond",
            features: ["Interactive exercises", "Project-based learning", "Free certification"]
        },
        {
            name: "Codecademy - Learn HTML",
            url: "https://www.codecademy.com/learn/learn-html",
            description: "Step-by-step HTML course with hands-on practice",
            features: ["Interactive lessons", "Immediate feedback", "Progress tracking"]
        },
        {
            name: "W3Schools - HTML Tutorial",
            url: "https://www.w3schools.com/html/",
            description: "Comprehensive reference with examples and try-it-yourself editors",
            features: ["Simple explanations", "Live code editors", "Reference guides"]
        },
        {
            name: "Khan Academy - Intro to HTML/CSS",
            url: "https://www.khanacademy.org/computing/computer-programming/html-css",
            description: "Visual, project-based introduction to HTML fundamentals",
            features: ["Video tutorials", "Guided projects", "Challenge exercises"]
        }
    ];

    const tools = [
        {
            name: "HTML5 Validator",
            url: "https://validator.w3.org/",
            description: "Official W3C service to validate HTML and check for errors",
            icon: <Code className="text-primary-dark" size={20}/>
        },
        {
            name: "Can I Use",
            url: "https://caniuse.com/",
            description: "Check browser support for HTML features across different browsers",
            icon: <Globe className="text-primary-dark" size={20}/>
        },
        {
            name: "CodePen",
            url: "https://codepen.io/",
            description: "Online code editor for testing and sharing HTML, CSS, and JavaScript",
            icon: <FileCode className="text-primary-dark" size={20}/>
        },
        {
            name: "HTML Entity Reference",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Character_entity_reference",
            description: "Complete reference of HTML character entities for special symbols",
            icon: <Star className="text-primary-dark" size={20}/>
        }
    ];

    const youtubeChannels = [
        {
            name: "Traversy Media",
            url: "https://www.youtube.com/user/TechGuyWeb",
            topics: "HTML basics, project-based tutorials, and web development crash courses"
        },
        {
            name: "Kevin Powell",
            url: "https://www.youtube.com/kevinpowell",
            topics: "HTML structure, semantic HTML, and CSS styling techniques"
        },
        {
            name: "Web Dev Simplified",
            url: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw",
            topics: "HTML concepts explained simply with practical examples"
        },
        {
            name: "The Net Ninja",
            url: "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",
            topics: "Step-by-step HTML tutorials and complete web development courses"
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
                        <ArrowLeft size={16} className="mr-2"/> Back to HTML Tutorials
                    </Link>
                </div>

                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        More HTML <span className="text-primary-dark">Resources</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-3xl">
                        Continue your HTML learning journey with these carefully selected resources, tools, and
                        communities. From official documentation to interactive courses, find everything you need to
                        master HTML.
                    </p>
                </div>

                {/* Official Documentation Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Official Documentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {officialResources.map((resource) => (
                            <div
                                key={resource.name}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all"
                            >
                                <div className="flex items-center mb-4">
                                    {resource.icon}
                                    <h3 className="text-xl font-bold ml-2">{resource.name}</h3>
                                </div>
                                <p className="text-text-secondary mb-4">{resource.description}</p>
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-dark hover:text-dark transition-colors font-medium"
                                >
                                    Visit Resource <ExternalLink size={16} className="ml-1"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Platforms Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Interactive Learning Platforms</h2>
                    <p className="text-text-secondary mb-8">
                        These platforms offer structured, hands-on learning experiences to help you master HTML:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {learningPlatforms.map((platform) => (
                            <div
                                key={platform.name}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-card transition-all"
                            >
                                <div className="p-6 border-b border-gray-100">
                                    <h3 className="text-xl font-bold text-dark mb-2">{platform.name}</h3>
                                    <p className="text-text-secondary">{platform.description}</p>
                                </div>
                                <div className="p-6 bg-gray-50">
                                    <h4 className="font-medium text-dark mb-2">Key Features:</h4>
                                    <ul className="mb-4">
                                        {platform.features.map((feature, index) => (
                                            <li key={index} className="flex items-start mb-1">
                                                <span className="text-primary-dark mr-2">•</span>
                                                <span className="text-text-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary-dark hover:text-dark transition-colors font-medium"
                                    >
                                        Start Learning <ExternalLink size={16} className="ml-1"/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* YouTube Channels Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">YouTube Channels for HTML Learning</h2>
                    <div className="bg-gradient-to-br from-primary-light/40 to-white p-8 rounded-2xl shadow-soft">
                        <div className="flex items-center mb-6">
                            <Video className="text-primary-dark" size={24}/>
                            <h3 className="text-xl font-bold ml-2">Video Tutorials</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {youtubeChannels.map((channel) => (
                                <div
                                    key={channel.name}
                                    className="bg-white rounded-lg p-5 shadow-sm"
                                >
                                    <h4 className="font-bold text-dark mb-2">{channel.name}</h4>
                                    <p className="text-text-light text-sm mb-3">
                                        <span className="font-medium">Focus:</span> {channel.topics}
                                    </p>
                                    <a
                                        href={channel.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary-dark hover:text-dark transition-colors text-sm font-medium"
                                    >
                                        Visit Channel <ExternalLink size={14} className="ml-1"/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Useful HTML Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all"
                            >
                                <div className="flex items-center mb-4">
                                    {tool.icon}
                                    <h3 className="text-xl font-bold ml-2">{tool.name}</h3>
                                </div>
                                <p className="text-text-secondary mb-4">{tool.description}</p>
                                <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-dark hover:text-dark transition-colors font-medium"
                                >
                                    Open Tool <ExternalLink size={16} className="ml-1"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Books Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">Recommended Books</h2>
                    <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div
                                    className="aspect-w-2 aspect-h-3 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <BookOpen className="text-gray-400" size={48}/>
                                </div>
                                <h3 className="font-bold text-dark mb-1">HTML and CSS: Design and Build Websites</h3>
                                <p className="text-text-light text-sm mb-2">by Jon Duckett</p>
                                <p className="text-text-secondary text-sm">Visually engaging introduction to HTML with
                                    clear examples and illustrations</p>
                            </div>
                            <div>
                                <div
                                    className="aspect-w-2 aspect-h-3 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <BookOpen className="text-gray-400" size={48}/>
                                </div>
                                <h3 className="font-bold text-dark mb-1">Learning Web Design</h3>
                                <p className="text-text-light text-sm mb-2">by Jennifer Niederst Robbins</p>
                                <p className="text-text-secondary text-sm">Comprehensive guide covering HTML, CSS,
                                    JavaScript, and responsive design principles</p>
                            </div>
                            <div>
                                <div
                                    className="aspect-w-2 aspect-h-3 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <BookOpen className="text-gray-400" size={48}/>
                                </div>
                                <h3 className="font-bold text-dark mb-1">HTML5: The Missing Manual</h3>
                                <p className="text-text-light text-sm mb-2">by Matthew MacDonald</p>
                                <p className="text-text-secondary text-sm">Practical guide to the latest HTML features
                                    with real-world examples and techniques</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-6">HTML Communities</h2>
                    <p className="text-text-secondary mb-8">
                        Connect with other HTML learners and professionals to share knowledge and get help:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all">
                            <h3 className="text-xl font-bold text-dark mb-4">Stack Overflow</h3>
                            <p className="text-text-secondary mb-4">
                                Ask questions and find answers from the largest programming community online.
                            </p>
                            <a
                                href="https://stackoverflow.com/questions/tagged/html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary-dark hover:text-dark transition-colors font-medium"
                            >
                                Browse HTML Questions <ExternalLink size={16} className="ml-1"/>
                            </a>
                        </div>
                        <div
                            className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all">
                            <h3 className="text-xl font-bold text-dark mb-4">Reddit - r/HTML</h3>
                            <p className="text-text-secondary mb-4">
                                Community subreddit dedicated to HTML discussions, help, and resources.
                            </p>
                            <a
                                href="https://www.reddit.com/r/html/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary-dark hover:text-dark transition-colors font-medium"
                            >
                                Join Subreddit <ExternalLink size={16} className="ml-1"/>
                            </a>
                        </div>
                        <div
                            className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 hover:shadow-card transition-all">
                            <h3 className="text-xl font-bold text-dark mb-4">MDN Community</h3>
                            <p className="text-text-secondary mb-4">
                                Connect with Mozilla's web documentation community for discussions and help.
                            </p>
                            <a
                                href="https://discourse.mozilla.org/c/mdn/236"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary-dark hover:text-dark transition-colors font-medium"
                            >
                                Visit Forum <ExternalLink size={16} className="ml-1"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Next Steps Section */}
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 text-center mb-16">
                    <h2 className="text-2xl font-bold text-dark mb-4">Ready to Take Your Skills Further?</h2>
                    <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                        Now that you've explored HTML resources, it's time to expand your knowledge with CSS and
                        JavaScript to build complete web experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/css"
                            className="btn-primary"
                        >
                            Learn CSS
                        </Link>
                        <Link
                            href="/"
                            className="btn-secondary"
                        >
                            Go Back
                        </Link>
                    </div>
                </div>

                {/* Navigation Links */}
                <div
                    className="flex justify-start items-center bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                    <Link
                        href="/html/exploring-live"
                        className="flex items-center text-primary-dark hover:text-dark transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2"/>
                        Previous: Exploring HTML on Live Webpages
                    </Link>
                </div>
            </div>
        </div>
    );
}