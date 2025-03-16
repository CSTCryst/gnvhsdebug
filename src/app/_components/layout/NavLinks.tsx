"use client"
// src/components/layout/NavLinks.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ mobile = false }) {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "HTML", href: "/html" },
        { name: "CSS", href: "/css" },
        { name: "Modules", href: "/modules" },
        { name: "Videos", href: "/videos" },
    ];

    return (
        <div className={mobile ? "flex flex-col space-y-4" : "flex space-x-8 py-4 overflow-x-auto"}>
            {links.map((link) => {
                const isActive = pathname === link.href ||
                    (link.href !== "/" && pathname?.startsWith(link.href));

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-text-secondary font-medium transition-colors relative group ${
                            isActive ? "text-primary-dark" : "hover:text-primary-dark"
                        } ${mobile ? "py-1" : ""}`}
                    >
                        {link.name}
                        <span
                            className={`absolute ${mobile ? "bottom-0" : "-bottom-1"} left-0 w-full h-0.5 bg-primary-dark transform origin-bottom scale-x-0 transition-transform duration-300 ${
                                isActive ? "scale-x-100" : "group-hover:scale-x-100"
                            }`}
                        />
                    </Link>
                );
            })}
        </div>
    );
}