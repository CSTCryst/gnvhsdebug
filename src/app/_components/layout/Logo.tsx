// src/components/layout/Logo.tsx
import Link from "next/link";
import { Code } from "lucide-react";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <Code size={28} />
            <span className="text-xl font-bold">HTML & CSS Guide</span>
        </Link>
    );
}