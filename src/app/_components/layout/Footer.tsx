// src/components/layout/Footer.tsx
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-primary-light to-background pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and Site Info */}
                    <div>
                        <Logo />
                        <p className="mt-6 text-text-light">
                            A comprehensive guide to learning HTML and CSS for beginners and advanced developers alike.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-dark">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-text-light hover:text-primary-dark transition-colors">Home</Link></li>
                            <li><Link href="/html" className="text-text-light hover:text-primary-dark transition-colors">HTML</Link></li>
                            <li><Link href="/css" className="text-text-light hover:text-primary-dark transition-colors">CSS</Link></li>
                            <li><Link href="/extras" className="text-text-light hover:text-primary-dark transition-colors">Extras</Link></li>
                        </ul>
                    </div>

                    {/* Privacy */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-dark">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/privacy-policy" className="text-text-light hover:text-primary-dark transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="text-text-light hover:text-primary-dark transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="text-text-light hover:text-primary-dark transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-primary-light/50 text-center">
                    <div className="text-text-light text-sm">
                        All Rights Reserved © {currentYear} | Inspired by <a href="https://www.w3schools.com" className="text-emerald-600 hover:text-primary-dark transition-colors">W3SCHOOLS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}