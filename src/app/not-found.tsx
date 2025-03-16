// src/app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-center px-4">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-light/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-xl animate-fade-in">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-primary-light/50 rounded-xl flex items-center justify-center">
                        <h1 className="text-5xl font-bold text-primary-dark">404</h1>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
                    Page Not Found
                </h2>

                <p className="text-lg mb-10 text-text-secondary">
                    The page you're looking for doesn't exist or has been moved. Let's help you find what you're looking for.
                </p>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search size={20} className="text-gray-400" />
                        </div>
                        <input
                            type="search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-primary-light focus:border-primary-dark outline-none"
                            placeholder="Search tutorials..."
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="btn-primary flex items-center gap-2"
                    >
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <Link
                        href="/html"
                        className="btn-outline flex items-center gap-2"
                    >
                        Explore Tutorials
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <h3 className="font-semibold text-dark mb-4">Popular Tutorials</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Link href="/html/about" className="px-4 py-2 rounded-full bg-primary-light/20 text-primary-dark hover:bg-primary-light/30 transition-colors">
                            HTML Basics
                        </Link>
                        <Link href="/html/create-webpage" className="px-4 py-2 rounded-full bg-primary-light/20 text-primary-dark hover:bg-primary-light/30 transition-colors">
                            Create a Webpage
                        </Link>
                        <Link href="/css" className="px-4 py-2 rounded-full bg-secondary-light/30 text-secondary-dark hover:bg-secondary-light/40 transition-colors">
                            CSS Styling
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}