// src/app/modules/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Download, ExternalLink } from "lucide-react";
import SearchBar from "../_components/ui/SearchBar";

export default function ModulesPage() {
    const modules = [
        {
            id: "html-basics",
            title: "HTML/CSS Quarter 1",
            description: "Master the essential building blocks of web pages with HTML5",
            fileUrl: "https://drive.google.com/drive/folders/1rRkP7qh1MsybH7_FNOI6uQ-oRB1NBgB9?usp=sharing",
            downloadUrl: "https://drive.google.com/uc?export=download&id=1rRkP7qh1MsybH7_FNOI6uQ-oRB1NBgB9",
            lessons: 5,
            duration: "2 hours",
            level: "Beginner",
            category: "HTML"
        },
        {
            id: "css-styling",
            title: "HTML/CSS Quarter 2",
            description: "Learn to style your HTML elements with CSS properties and selectors",
            fileUrl: "https://drive.google.com/drive/folders/13EOh077FIyCLg3ChAWfxDPf9w8xGW_hZ?usp=sharing",
            downloadUrl: "https://drive.google.com/uc?export=download&id=13EOh077FIyCLg3ChAWfxDPf9w8xGW_hZ",
            lessons: 5,
            duration: "2 hours",
            level: "Beginner",
            category: "HTML"
        },
        {
            id: "flexbox-layout",
            title: "HTML/CSS Quarter 3",
            description: "Create flexible and responsive layouts using CSS Flexbox",
            fileUrl: "https://drive.google.com/drive/folders/1GKH-2n8EEXxQ0jXvkrHUyu23-zEpp3Vw?usp=sharing",
            downloadUrl: "https://drive.google.com/uc?export=download&id=1GKH-2n8EEXxQ0jXvkrHUyu23-zEpp3Vw",
            lessons: 6,
            duration: "2.5 hours",
            level: "Intermediate",
            category: "HTML"
        },
        {
            id: "responsive-design",
            title: "HTML/CSS Quarter 4",
            description: "Build websites that look great on any device with responsive techniques",
            fileUrl: "https://drive.google.com/drive/folders/1TZK799qe7bp3M3BNT6Ia_bCEN8Byoa7M?usp=sharing",
            downloadUrl: "https://drive.google.com/uc?export=download&id=1TZK799qe7bp3M3BNT6Ia_bCEN8Byoa7M",
            lessons: 8,
            duration: "3 hours",
            level: "Intermediate",
            category: "HTML"
        },
    ];

    // Filter modules by category
    const htmlModules = modules.filter(module => module.category === "HTML");

    return (
        <div className="bg-background">
            {/* Header */}
            <section className="relative py-16 bg-gradient-to-br from-primary-light/40 to-background">
    <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4 text-dark">Learning Modules</h1>
    <p className="text-xl mb-8 text-text-secondary">
        Comprehensive learning materials to master web development at your own pace
    </p>

    {/* Search Bar */}
    <div className="max-w-md mx-auto mb-4">
    <SearchBar placeholder="Search modules..." className="w-full" />
        </div>
        </div>
        </div>
        </section>

    {/* Filter Bar */}
    <section className="py-6 border-b border-gray-200">
    <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-between gap-4">
    <div className="flex gap-4">
    <button className="px-4 py-2 rounded-full bg-primary-dark text-white font-medium">
        All Modules
    </button>
    <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-text-secondary hover:bg-gray-50">
        HTML
        </button>
        <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-text-secondary hover:bg-gray-50">
        CSS
        </button>
        </div>

        <div className="flex items-center gap-2">
    <span className="text-sm text-text-light">Level:</span>
    <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-light">
        <option>All Levels</option>
    <option>Beginner</option>
    <option>Intermediate</option>
    <option>Advanced</option>
    </select>
    </div>
    </div>
    </div>
    </section>

    {/* HTML Modules */}
    <section className="py-12">
    <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold text-dark mb-8 flex items-center">
    <span className="w-8 h-8 bg-primary-light/50 rounded-lg flex items-center justify-center text-primary-dark mr-3">
    <FileText size={18} />
    </span>
    HTML Modules
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {htmlModules.map((module) => (
                <div key={module.id} className="bg-white rounded-xl border border-gray-100 shadow-soft hover:shadow-card overflow-hidden transition-all">
            <div className="h-2 bg-primary-dark"></div>
                <div className="p-6">
            <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-dark">{module.title}</h3>
                <span className="px-3 py-1 bg-primary-light/30 text-primary-dark text-xs font-medium rounded-full">
            {module.level}
            </span>
            </div>

            <p className="text-text-light mb-6 line-clamp-2">
            {module.description}
            </p>

            <div className="flex items-center justify-between text-sm text-text-secondary mb-6">
            <span className="flex items-center">
            <FileText size={14} className="mr-1" />
            {module.lessons} lessons
                </span>
        <span>{module.duration}</span>
        </div>

        <div className="flex gap-2">
    <a
        href={module.fileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 btn-primary-sm flex items-center justify-center gap-1"
    >
    <ExternalLink size={14} />
    View Module
    </a>
    <a
    href={module.downloadUrl}
    className="btn-outline-sm flex items-center justify-center gap-1 px-3"
    >
    <Download size={14} />
    </a>
    </div>
    </div>
    </div>
))}
    </div>
    </div>
    </section>


    {/* Recommendation Section */}
    <section className="py-16 bg-gradient-to-br from-primary-light/30 to-white">
    <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-dark mb-6">
        Not Sure Where to Start?
        </h2>
        <p className="text-lg text-text-secondary mb-8">
            Follow our recommended learning path to progress from beginner to advanced web developer
    </p>
    <Link href="/learning-path" className="btn-primary flex items-center gap-2 mx-auto">
        View Learning Path <ArrowRight size={18} />
    </Link>
    </div>
    </div>
    </section>
    </div>
);
}