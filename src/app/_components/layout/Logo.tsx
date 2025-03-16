// src/components/layout/Logo.tsx
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-2 group">
            <img className="h-14 w-14" src="/logo.png" alt="GNVHS" />
            <span className="text-xl font-display font-bold text-dark group-hover:text-primary-dark transition-colors">
        GNVHS<span className="text-primary-dark">DEBUG</span>
      </span>
        </Link>
    );
}