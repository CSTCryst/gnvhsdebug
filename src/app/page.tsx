// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./_components/ui/SearchBar";
import { ArrowRight, Code, Layout, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/40 to-background z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-light/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">
                Learn to <span className="text-primary-dark">Code</span> the Web
              </h1>
              <p className="text-xl mb-10 text-text-secondary max-w-2xl mx-auto">
                Master HTML & CSS with our comprehensive, beginner-friendly tutorials and interactive examples
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <SearchBar placeholder="Search tutorials..." className="w-full" />
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="/html"
                    className="btn-primary flex items-center gap-2"
                >
                  Start Learning <ArrowRight size={18} />
                </Link>
                <Link
                    href="/examples"
                    className="btn-outline flex items-center gap-2"
                >
                  Browse Examples <Code size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-dark mb-4">Why Learn With Us</h2>
              <p className="text-text-light max-w-2xl mx-auto">Our tutorials are designed to make learning web development accessible, practical, and enjoyable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-background border border-gray-100 shadow-soft hover:shadow-card card-hover">
                <div className="w-14 h-14 bg-primary-light/50 rounded-xl flex items-center justify-center mb-6">
                  <Code size={24} className="text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Beginner Friendly</h3>
                <p className="text-text-light">
                  Clear explanations and step-by-step tutorials make learning HTML easy for complete beginners.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-background border border-gray-100 shadow-soft hover:shadow-card card-hover">
                <div className="w-14 h-14 bg-secondary-light rounded-xl flex items-center justify-center mb-6">
                  <Layout size={24} className="text-secondary-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Interactive Examples</h3>
                <p className="text-text-light">
                  Learn by doing with interactive code examples and exercises that reinforce each concept.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-background border border-gray-100 shadow-soft hover:shadow-card card-hover">
                <div className="w-14 h-14 bg-primary-light/50 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles size={24} className="text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Modern Techniques</h3>
                <p className="text-text-light">
                  Stay up-to-date with the latest HTML and CSS practices used by professional developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-dark mb-6">
                  Getting Started with HTML
                </h2>
                <p className="text-text-secondary mb-8">
                  Begin your web development journey with these essential HTML tutorials. Learn the fundamentals and build your first webpage in minutes.
                </p>

                <div className="space-y-4">
                  <Link
                      href="/html/about"
                      className="flex items-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-card transition-all"
                  >
                    <div className="mr-4 w-10 h-10 bg-primary-light/30 rounded-lg flex items-center justify-center text-primary-dark">
                      01
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">About HTML</h3>
                      <p className="text-sm text-text-light">Learn what HTML is and why it matters</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-primary-dark" />
                  </Link>

                  <Link
                      href="/html/create-webpage"
                      className="flex items-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-card transition-all"
                  >
                    <div className="mr-4 w-10 h-10 bg-primary-light/30 rounded-lg flex items-center justify-center text-primary-dark">
                      02
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Create a Webpage</h3>
                      <p className="text-sm text-text-light">Build your first HTML page from scratch</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-primary-dark" />
                  </Link>

                  <Link
                      href="/html/text-elements"
                      className="flex items-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-card transition-all"
                  >
                    <div className="mr-4 w-10 h-10 bg-primary-light/30 rounded-lg flex items-center justify-center text-primary-dark">
                      03
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Text Elements</h3>
                      <p className="text-sm text-text-light">Format and structure text content</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-primary-dark" />
                  </Link>
                </div>

                <Link
                    href="/html"
                    className="inline-flex items-center mt-8 text-primary-dark font-medium hover:text-dark"
                >
                  View all HTML tutorials <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>

              <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gray-900 text-white p-4 flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">index.html</div>
                </div>
                <div className="bg-gray-800 p-5 text-white font-mono text-sm leading-relaxed">
                  <p className="text-blue-300">&lt;!DOCTYPE html&gt;</p>
                  <p className="text-blue-300">&lt;html lang="en"&gt;</p>
                  <p className="text-blue-300">&lt;head&gt;</p>
                  <p className="ml-4 text-blue-300">&lt;meta charset="UTF-8"&gt;</p>
                  <p className="ml-4 text-blue-300">&lt;title&gt;<span className="text-green-300">My First Webpage</span>&lt;/title&gt;</p>
                  <p className="text-blue-300">&lt;/head&gt;</p>
                  <p className="text-blue-300">&lt;body&gt;</p>
                  <p className="ml-4 text-blue-300">&lt;h1&gt;<span className="text-green-300">Hello, World!</span>&lt;/h1&gt;</p>
                  <p className="ml-4 text-blue-300">&lt;p&gt;<span className="text-green-300">Welcome to my first webpage.</span>&lt;/p&gt;</p>
                  <p className="text-blue-300">&lt;/body&gt;</p>
                  <p className="text-blue-300">&lt;/html&gt;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light/40 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dark mb-4 text-center">
              Choose Your Learning Path
            </h2>
            <p className="text-text-light max-w-2xl mx-auto text-center mb-16">
              Whether you're starting with HTML or ready to add style with CSS, we have the perfect track for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* HTML Path */}
              <div className="rounded-2xl bg-white border border-gray-100 shadow-card overflow-hidden">
                <div className="h-3 bg-primary-dark"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                    <Code size={32} className="text-primary-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">HTML Basics</h3>
                  <p className="text-text-light mb-6">
                    Start your journey with HTML - the backbone of every webpage. Learn to structure content semantically.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-primary-light/50 flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-primary-dark"></div>
                      </div>
                      Document structure
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-primary-light/50 flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-primary-dark"></div>
                      </div>
                      Text formatting
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-primary-light/50 flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-primary-dark"></div>
                      </div>
                      Links and images
                    </li>
                  </ul>
                  <Link
                      href="/html"
                      className="btn-primary w-full justify-center"
                  >
                    Explore HTML
                  </Link>
                </div>
              </div>

              {/* CSS Path */}
              <div className="rounded-2xl bg-white border border-gray-100 shadow-card overflow-hidden">
                <div className="h-3 bg-secondary-dark"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-light flex items-center justify-center mb-6">
                    <Layout size={32} className="text-secondary-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">CSS Styling</h3>
                  <p className="text-text-light mb-6">
                    Add style and design to your HTML with CSS. Create beautiful, responsive layouts that work on any device.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-secondary-light flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-secondary-dark"></div>
                      </div>
                      Selectors and properties
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-secondary-light flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-secondary-dark"></div>
                      </div>
                      Layouts and positioning
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-secondary-light flex items-center justify-center mr-2">
                        <div className="w-2 h-2 rounded-full bg-secondary-dark"></div>
                      </div>
                      Responsive design
                    </li>
                  </ul>
                  <Link
                      href="/css"
                      className="btn-secondary w-full justify-center"
                  >
                    Explore CSS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}