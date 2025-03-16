"use client"
// src/components/layout/Header.tsx
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    // Close mobile menu when window resizes to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
                setSearchOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
            {/* Top Bar with Logo, Search, Sign In/Login */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Logo />

                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Desktop Search */}
                    <div className="hidden md:flex items-center w-64">
                        <SearchBar placeholder="Search..." />
                    </div>

                    {/* Mobile Search Button */}
                    <button
                        className="md:hidden p-2 text-text-secondary hover:text-primary-dark"
                        onClick={() => setSearchOpen(!searchOpen)}
                    >
                        <Search size={20} />
                    </button>

                    {/* Authentication Links - Hide on smaller screens */}
                    <div className="hidden sm:flex items-center space-x-3">
                        <Link
                            href="/sign-in"
                            className="px-4 py-2 rounded-xl border border-primary-DEFAULT text-primary-dark hover:bg-primary-light/50 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded-xl bg-primary-dark text-white hover:bg-dark transition-colors shadow-sm"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text-secondary hover:text-primary-dark"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {searchOpen && (
                <div className="md:hidden px-4 py-2 border-t border-gray-100">
                    <SearchBar placeholder="Search..." className="w-full" />
                </div>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:block border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <NavLinks />
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <nav className="container mx-auto px-4 py-4">
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col space-y-4">
                            <NavLinks mobile={true} />
                        </div>

                        {/* Mobile Auth Buttons */}
                        <div className="mt-6 sm:hidden flex flex-col space-y-3">
                            <Link
                                href="/sign-in"
                                className="w-full py-2 text-center rounded-xl border border-primary-DEFAULT text-primary-dark hover:bg-primary-light/50 transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/login"
                                className="w-full py-2 text-center rounded-xl bg-primary-dark text-white hover:bg-dark transition-colors shadow-sm"
                            >
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}