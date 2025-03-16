// src/components/layout/Header.tsx
import Link from "next/link";
import { Search } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="w-full bg-[#2D336B] text-white">
            {/* Top Bar with Logo, Search, Sign In/Login */}
            <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
                <Logo />

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 rounded-full text-gray-800 w-64 focus:outline-none"
                        />
                        <Search className="absolute right-3 text-gray-500" size={18} />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Link
                            href="/sign-in"
                            className="px-3 py-2 rounded-md bg-[#7886C7] hover:bg-[#A9B5DF] transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/login"
                            className="px-3 py-2 rounded-md bg-[#7886C7] hover:bg-[#A9B5DF] transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-[#7886C7] py-2">
                <div className="container mx-auto px-4">
                    <NavLinks />
                </div>
            </nav>
        </header>
    );
}