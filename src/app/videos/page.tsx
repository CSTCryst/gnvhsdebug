// src/app/videos/page.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Clock, Tag, Bookmark, ThumbsUp, Filter, ChevronDown, ChevronUp } from "lucide-react";
import SearchBar from "../_components/ui/SearchBar";
import { useState, useEffect } from "react";


interface VideoItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    duration: string;
    level: string;
    category: string;
    views: number;
    date: string;
}

export default function VideosPage() {
    // Just one video in the array for demonstration
    const allVideos: VideoItem[] = [
        {
            "id": "css-intro",
            "title": "Introduction to CSS",
            "description": "Learn the basics of CSS and understand how styling works on the web",
            "thumbnail": "https://drive.google.com/thumbnail?id=11dvQjo6i1YEyyp1-bd5nozp4r3OSDIwI&sz=w640-h360",
            "videoUrl": "https://drive.google.com/file/d/11dvQjo6i1YEyyp1-bd5nozp4r3OSDIwI/preview",
            "duration": "9:00",
            "level": "Beginner",
            "category": "CSS",
            "views": 28459,
            "date": "2023-05-24"
        },
        {
            "id": "css-intro-alt",
            "title": "Introduction to CSS (Alternative)",
            "description": "A comprehensive overview of CSS and its role in modern web development",
            "videoUrl": "https://drive.google.com/file/d/1-_XoyQsZ1MYZd-wpbFZPZn1VdWGKujGL/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-_XoyQsZ1MYZd-wpbFZPZn1VdWGKujGL&sz=w640-h360",
            "duration": "15:46",
            "level": "Beginner",
            "category": "CSS",
            "views": 15723,
            "date": "2023-05-25"
        },
        {
            "id": "css-syntax",
            "title": "CSS Syntax",
            "description": "Master the proper syntax for writing effective CSS code",
            "videoUrl": "https://drive.google.com/file/d/1m9YcCRRzHXRRlrAcTVVz64664W8xxCsL/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1m9YcCRRzHXRRlrAcTVVz64664W8xxCsL&sz=w640-h360",
            "duration": "11:49",
            "level": "Beginner",
            "category": "CSS",
            "views": 19875,
            "date": "2023-05-23"
        },
        {
            "id": "css-border-margin",
            "title": "CSS Border and Margin",
            "description": "Learn how to control spacing and borders around elements",
            "videoUrl": "https://drive.google.com/file/d/1DbcDaAI_oI-NjpGaIYhjcSWvOseBuMc1/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DbcDaAI_oI-NjpGaIYhjcSWvOseBuMc1&sz=w640-h360",
            "duration": "10:45",
            "level": "Intermediate",
            "category": "CSS",
            "views": 14568,
            "date": "2023-05-23"
        },
        {
            "id": "css-padding-outline",
            "title": "CSS Padding and Outline",
            "description": "Master internal spacing and alternative borders with padding and outline properties",
            "videoUrl": "https://drive.google.com/file/d/1aHylmHQhLdj9MNvcPbPm7tKZx8BNGsDJ/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aHylmHQhLdj9MNvcPbPm7tKZx8BNGsDJ&sz=w640-h360",
            "duration": "12:52",
            "level": "Intermediate",
            "category": "CSS",
            "views": 12743,
            "date": "2023-05-23"
        },
        {
            "id": "css-text-formatting",
            "title": "Text Formatting",
            "description": "Style text effectively with CSS typography properties",
            "videoUrl": "https://drive.google.com/file/d/1VB6pdkvi2sfyGZe6iE15aPJ9xKbGjbQ4/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VB6pdkvi2sfyGZe6iE15aPJ9xKbGjbQ4&sz=w640-h360",
            "duration": "10:07",
            "level": "Beginner",
            "category": "CSS",
            "views": 21356,
            "date": "2023-05-23"
        },
        {
            "id": "css-layout-display",
            "title": "CSS Layout Display",
            "description": "Control how elements are displayed and laid out on the page",
            "videoUrl": "https://drive.google.com/file/d/1bj-_QL2jgQLYdkgeOTU8gzJpSoW_-TrI/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1bj-_QL2jgQLYdkgeOTU8gzJpSoW_-TrI&sz=w640-h360",
            "duration": "10:02",
            "level": "Intermediate",
            "category": "CSS",
            "views": 17892,
            "date": "2023-05-23"
        },
        {
            "id": "css-pseudo-classes",
            "title": "Pseudo Classes",
            "description": "Use pseudo-classes to style elements based on state and position",
            "videoUrl": "https://drive.google.com/file/d/1G7La1dk8L9-xxfIFgH28jUrbIdtBvjIC/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1G7La1dk8L9-xxfIFgH28jUrbIdtBvjIC&sz=w640-h360",
            "duration": "9:00",
            "level": "Intermediate",
            "category": "CSS",
            "views": 16458,
            "date": "2023-05-23"
        },
        {
            "id": "css-opacity-navigation",
            "title": "Opacity, Navigation, and Tooltip",
            "description": "Create transparent elements, navigation menus, and helpful tooltips",
            "videoUrl": "https://drive.google.com/file/d/14erNjAsdMpYfLGuYKuP_DJIahb-VoAhH/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=14erNjAsdMpYfLGuYKuP_DJIahb-VoAhH&sz=w640-h360",
            "duration": "22:28",
            "level": "Intermediate",
            "category": "CSS",
            "views": 15237,
            "date": "2023-05-23"
        },
        {
            "id": "css-background-colors",
            "title": "CSS Background, Color, Gradients and Shadow",
            "description": "Add visual depth with backgrounds, gradients, and shadow effects",
            "videoUrl": "https://drive.google.com/file/d/1hchHp0K0uq5Efmq6W3mmaD4IfkK1e3Jo/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1hchHp0K0uq5Efmq6W3mmaD4IfkK1e3Jo&sz=w640-h360",
            "duration": "13:42",
            "level": "Intermediate",
            "category": "CSS",
            "views": 19428,
            "date": "2023-05-25"
        },
        {
            "id": "css-transform-methods",
            "title": "CSS Transform Methods",
            "description": "Apply 2D and 3D transformations to elements",
            "videoUrl": "https://drive.google.com/file/d/1kpiv1xRSh-PFJqLnlMOu6dM54Rj0gzO_/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1kpiv1xRSh-PFJqLnlMOu6dM54Rj0gzO_&sz=w640-h360",
            "duration": "8:29",
            "level": "Advanced",
            "category": "CSS",
            "views": 14276,
            "date": "2023-05-23"
        },
        {
            "id": "css-transition-animation",
            "title": "CSS Transition and Animation",
            "description": "Create smooth transitions and complex animations with CSS",
            "videoUrl": "https://drive.google.com/file/d/1n_GlSmhe5XsawUqk3gdOZvNjf8B_QWCE/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1n_GlSmhe5XsawUqk3gdOZvNjf8B_QWCE&sz=w640-h360",
            "duration": "12:35",
            "level": "Advanced",
            "category": "CSS",
            "views": 22149,
            "date": "2023-05-24"
        },
        {
            "id": "css-button",
            "title": "CSS Button",
            "description": "Design attractive and interactive buttons with CSS",
            "videoUrl": "https://drive.google.com/file/d/1rYMJqPwVKnXjMp7jfe0hGIwENeu6tPIL/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rYMJqPwVKnXjMp7jfe0hGIwENeu6tPIL&sz=w640-h360",
            "duration": "3:36",
            "level": "Intermediate",
            "category": "CSS",
            "views": 25783,
            "date": "2023-05-24"
        },
        {
            "id": "css-pagination",
            "title": "CSS Pagination",
            "description": "Create effective pagination controls for multi-page content",
            "videoUrl": "https://drive.google.com/file/d/1vgRmtM2aeQ3wXUFGBl-wg9CzFZ2-MWCW/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1vgRmtM2aeQ3wXUFGBl-wg9CzFZ2-MWCW&sz=w640-h360",
            "duration": "4:12",
            "level": "Intermediate",
            "category": "CSS",
            "views": 13597,
            "date": "2023-05-24"
        },
        {
            "id": "css-user-interface",
            "title": "CSS User Interface",
            "description": "Enhance user experience with CSS UI improvements",
            "videoUrl": "https://drive.google.com/file/d/1r8J7tPJWvC3SEUZy-HNjsCSlgKe8Kv13/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1r8J7tPJWvC3SEUZy-HNjsCSlgKe8Kv13&sz=w640-h360",
            "duration": "8:05",
            "level": "Advanced",
            "category": "CSS",
            "views": 18342,
            "date": "2023-05-23"
        },
        {
            "id": "css-html-box",
            "title": "Inserting Box in HTML Documents",
            "description": "Learn to work with the box model in practical HTML documents",
            "videoUrl": "https://drive.google.com/file/d/1s_p3YTMDWIlNMeohGh1ecjopSoicbh79/preview",
            "thumbnail": "https://drive.google.com/thumbnail?id=1s_p3YTMDWIlNMeohGh1ecjopSoicbh79&sz=w640-h360",
            "duration": "2:32",
            "level": "Intermediate",
            "category": "CSS",
            "views": 16791,
            "date": "2023-05-24"
        }
    ];

    // Filter states
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
    const [sortOption, setSortOption] = useState<string>("Newest");
    const [displayedVideos, setDisplayedVideos] = useState<VideoItem[]>([]);
    const [featuredVideos, setFeaturedVideos] = useState<VideoItem[]>([]);
    const [showFilters, setShowFilters] = useState<boolean>(false);

    // Format view count
    const formatViews = (views: number) => {        if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}K`;
        }
        return views;
    };

    // Apply filters and sorting
    useEffect(() => {
        let filtered = [...allVideos];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(video =>
                video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        if (selectedCategory !== "All") {
            filtered = filtered.filter(video => video.category === selectedCategory);
        }

        // Apply level filter
        if (selectedLevel !== "All Levels") {
            filtered = filtered.filter(video => video.level === selectedLevel);
        }

        // Apply sorting
        switch (sortOption) {
            case "Newest":
                filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());                break;
            case "Most Viewed":
                filtered.sort((a, b) => b.views - a.views);
                break;
            case "Duration (Shortest)":
                filtered.sort((a, b) => {
                    const getSeconds = (time: string) => {
                        const [minutes = 0, seconds = 0] = time.split(':').map(Number);
                        return minutes * 60 + seconds;
                    };
                    return getSeconds(a.duration) - getSeconds(b.duration);
                });
                break;
            case "Duration (Longest)":
                filtered.sort((a, b) => {
                    const getSeconds = (time: string) => {
                        const [minutes = 0, seconds = 0] = time.split(':').map(Number);
                        return minutes * 60 + seconds;
                    };
                    return getSeconds(b.duration) - getSeconds(a.duration);
                });
                break;
            default:
                break;
        }

        setDisplayedVideos(filtered);

        // Set featured videos - with only one video, it's just the same video
        setFeaturedVideos([...allVideos]);
    }, [searchQuery, selectedCategory, selectedLevel, sortOption]);

    // Handle search input
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="bg-background">
            {/* Header */}
            <section className="relative py-16 bg-gradient-to-br from-secondary-light/40 to-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4 text-dark">Video Tutorials</h1>
                        <p className="text-xl mb-8 text-text-secondary">
                            Watch step-by-step video tutorials to enhance your web development skills
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto mb-4">
                            <input
                                type="text"
                                placeholder="Search videos..."
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-light"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-6 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
                        >
                            <div className="flex items-center">
                                <Filter size={18} className="mr-2 text-gray-600" />
                                <span>Filters</span>
                            </div>
                            {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                    </div>

                    <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                <button
                                    className={`px-4 py-2 rounded-full ${selectedCategory === "All" ? 'bg-secondary-dark text-white' : 'bg-white border border-gray-200 text-text-secondary hover:bg-gray-50'} font-medium`}
                                    onClick={() => setSelectedCategory("All")}
                                >
                                    All Videos
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full ${selectedCategory === "HTML" ? 'bg-yellow-500 text-white' : 'bg-white border border-gray-200 text-text-secondary hover:bg-gray-50'} font-medium`}
                                    onClick={() => setSelectedCategory("HTML")}
                                >
                                    HTML
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full ${selectedCategory === "CSS" ? 'bg-yellow-500 text-white' : 'bg-white border border-gray-200 text-text-secondary hover:bg-gray-50'} font-medium`}
                                    onClick={() => setSelectedCategory("CSS")}
                                >
                                    CSS
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-text-light">Level:</span>
                                    <select
                                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-light"
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                    >
                                        <option>All Levels</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-text-light">Sort by:</span>
                                    <select
                                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-text-secondary focus:outline-none focus:ring-2 focus:ring-secondary-light"
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                    >
                                        <option>Newest</option>
                                        <option>Most Viewed</option>
                                        <option>Duration (Shortest)</option>
                                        <option>Duration (Longest)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Summary */}
            <section className="pt-8 pb-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-dark">
                            {displayedVideos.length} {displayedVideos.length === 1 ? 'tutorial' : 'tutorials'} found
                        </h2>
                        {searchQuery && (
                            <p className="text-text-secondary">
                                Search results for: <span className="font-medium">{searchQuery}</span>
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Video List */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-dark mb-8">
                        {searchQuery || selectedCategory !== "All" || selectedLevel !== "All Levels"
                            ? "Search Results"
                            : "All Tutorials"}
                    </h2>

                    {displayedVideos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedVideos.map((video) => (
                                <div key={video.id} className="bg-white rounded-xl border border-gray-100 shadow-soft hover:shadow-card overflow-hidden transition-all">
                                    <div className="relative h-48">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="object-cover"
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-yellow-500/90 flex items-center justify-center">
                                                <Play size={18} fill="white" className="text-white ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-dark/70 text-white text-xs rounded">
                                            {video.duration}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 bg-yellow-200 text-yellow-800 text-xs font-medium rounded-full">
                                                {video.level}
                                            </span>
                                            <span className="px-2 py-0.5 bg-yellow-200 text-yellow-800 text-xs font-medium rounded-full">
                                                {video.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-dark mb-2">{video.title}</h3>
                                        <p className="text-text-light text-sm mb-4 line-clamp-2">
                                            {video.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                {video.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <ThumbsUp size={12} />
                                                {formatViews(video.views)} views
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => window.open(video.videoUrl, '_blank', 'noopener,noreferrer')}
                                            className="btn-primary-sm p-2 text-sm rounded-lg justify-center bg-yellow-500 hover:bg-yellow-600 text-white"
                                        >
                                            Watch Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl shadow-soft">
                            <div className="mb-4 w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                                <Filter size={24} className="text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">No tutorials found</h3>
                            <p className="text-text-secondary mb-6">
                                Try adjusting your search or filter criteria
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All");
                                    setSelectedLevel("All Levels");
                                    setSortOption("Newest");
                                }}
                                className="btn-secondary-sm"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>


            {/* Subscribe Section */}
            <section className="py-16 bg-gradient-to-br from-secondary-light/40 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-card">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-dark mb-3">
                                Never Miss a New Tutorial
                            </h2>
                            <p className="text-text-secondary">
                                Subscribe to get notified when we release new videos and learning materials
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-light"
                            />
                            <button className="btn-secondary whitespace-nowrap">
                                Subscribe Now
                            </button>
                        </div>

                        <div className="mt-4 text-center text-sm text-text-light">
                            We respect your privacy. Unsubscribe at any time.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}