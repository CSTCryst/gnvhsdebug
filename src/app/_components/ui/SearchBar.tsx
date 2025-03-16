// src/components/ui/SearchBar.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
    className?: string;
    placeholder?: string;
}

export default function SearchBar({
                                      className = "",
                                      placeholder = "Search tutorials...",
                                  }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className={`relative ${className}`}
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-2.5 pl-10 rounded-xl text-text-primary bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-DEFAULT"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light">
                <Search size={18} />
            </div>
        </form>
    );
}