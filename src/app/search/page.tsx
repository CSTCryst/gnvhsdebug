// src/app/search/page.tsx
import Link from "next/link";
import SearchBar from "../_components/ui/SearchBar";
import { FileText, Code, ArrowRight } from "lucide-react";
import { Metadata } from "next";

// Mock search results - in a real app, this would come from a database
const mockResults = [
    {
        title: "Text Elements in HTML",
        description: "Learn about headings, paragraphs, emphasis, and other text elements in HTML.",
        url: "/html/text-elements",
        type: "HTML",
        category: "tutorial"
    },
    {
        title: "Lists in HTML",
        description: "Discover how to create ordered, unordered, and description lists in HTML.",
        url: "/html/lists",
        type: "HTML",
        category: "tutorial"
    },
    {
        title: "Links and Images in HTML",
        description: "Learn to add links and images to your web pages using HTML.",
        url: "/html/links-images",
        type: "HTML",
        category: "tutorial"
    },
    {
        title: "Introduction to CSS",
        description: "Get started with Cascading Style Sheets and learn how to style your HTML content.",
        url: "/css/introduction",
        type: "CSS",
        category: "tutorial"
    },
    {
        title: "Box Model in CSS",
        description: "Understanding the CSS box model and how it affects layout and design.",
        url: "/css/box-model",
        type: "CSS",
        category: "tutorial"
    }
];

export const metadata = {
    title: 'Search Tutorials',
    description: 'Search for HTML and CSS tutorials',
};

// Use @ts-expect-error to bypass TypeScript checking for this component
export default function SearchPage(props) {
    // Safely extract the query parameter
    const searchParams = props.searchParams || {};
    const queryParam = searchParams.q;
    const query = typeof queryParam === 'string'
        ? queryParam
        : Array.isArray(queryParam)
            ? queryParam[0]
            : "";

    // Filter results based on query (case-insensitive)
    const filteredResults = query
        ? mockResults.filter(
            result =>
                result.title.toLowerCase().includes(query.toLowerCase()) ||
                result.description.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (
        <div className="bg-background min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-3xl font-bold text-dark mb-8">
                    Search Results
                </h1>

                {/* Search Bar */}
                <div className="mb-10">
                    <SearchBar
                        placeholder="Search tutorials..."
                        className="max-w-2xl"
                    />
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
                    {query ? (
                        <>
                            <div className="flex items-center mb-8">
                                <h2 className="text-xl font-semibold text-dark">
                                    {filteredResults.length > 0
                                        ? `Found ${filteredResults.length} results for "${query}"`
                                        : `No results found for "${query}"`
                                    }
                                </h2>
                                <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
                            </div>

                            <div className="space-y-6">
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((result) => (
                                        <div key={result.url} className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                                            <div className="flex items-start">
                                                <div className="mr-4 mt-1">
                                                    {result.type === "HTML" ? (
                                                        <div className="w-10 h-10 bg-primary-light/30 rounded-lg flex items-center justify-center text-primary-dark">
                                                            <Code size={20} />
                                                        </div>
                                                    ) : (
                                                        <div className="w-10 h-10 bg-secondary-light rounded-lg flex items-center justify-center text-secondary-dark">
                                                            <FileText size={20} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex items-center mb-1">
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                result.type === "HTML"
                                    ? "bg-primary-light/30 text-primary-dark"
                                    : "bg-secondary-light text-secondary-dark"
                            }`}>
                              {result.type}
                            </span>
                                                        <span className="mx-2 text-gray-300">•</span>
                                                        <span className="text-text-light text-sm">Tutorial</span>
                                                    </div>
                                                    <Link href={result.url}>
                                                        <h3 className="text-lg font-semibold text-dark hover:text-primary-dark transition-colors">
                                                            {result.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="text-text-secondary mt-1 mb-2">{result.description}</p>
                                                    <Link
                                                        href={result.url}
                                                        className={`text-sm font-medium flex items-center ${
                                                            result.type === "HTML"
                                                                ? "text-primary-dark hover:text-dark"
                                                                : "text-secondary-dark hover:text-dark"
                                                        } transition-colors`}
                                                    >
                                                        Read tutorial <ArrowRight size={14} className="ml-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                                        <p className="text-text-light mb-4">No tutorials match your search term</p>
                                        <p className="text-text-secondary mb-6">Try different keywords or browse our tutorial categories</p>
                                        <div className="flex justify-center space-x-4">
                                            <Link
                                                href="/html"
                                                className="px-4 py-2 rounded-xl bg-primary-dark text-white hover:bg-dark transition-colors"
                                            >
                                                HTML Tutorials
                                            </Link>
                                            <Link
                                                href="/css"
                                                className="px-4 py-2 rounded-xl bg-secondary-dark text-white hover:bg-dark transition-colors"
                                            >
                                                CSS Tutorials
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16 bg-gray-50 rounded-xl">
                            <p className="text-xl text-text-secondary mb-4">Enter a search term to find tutorials</p>
                            <p className="text-text-light mb-8">Search for topics like &quot;headings&quot;, &quot;CSS box model&quot;, or &quot;flexbox&quot;</p>
                            <div className="flex justify-center space-x-4">
                                <Link
                                    href="/html"
                                    className="px-4 py-2 rounded-xl bg-primary-light/50 text-primary-dark hover:bg-primary-light transition-colors"
                                >
                                    Browse HTML Tutorials
                                </Link>
                                <Link
                                    href="/css"
                                    className="px-4 py-2 rounded-xl bg-secondary-light text-secondary-dark hover:bg-secondary-light/70 transition-colors"
                                >
                                    Browse CSS Tutorials
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}