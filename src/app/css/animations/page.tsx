// src/app/css/animations/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function AnimationsPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/css" className="hover:text-primary-dark transition-colors">CSS</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Animations and Transitions</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Animations and Transitions
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>CSS Advanced</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 7 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    CSS animations and transitions bring web pages to life by adding movement, enhancing user interactions, and improving the overall user experience.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn how to create smooth transitions between states and build complex animations using pure CSS.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#transitions" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        CSS Transitions
                                    </a>
                                </li>
                                <li>
                                    <a href="#keyframes" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        CSS Animations with @keyframes
                                    </a>
                                </li>
                                <li>
                                    <a href="#properties" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Animatable Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#best-practices" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Best Practices
                                    </a>
                                </li>
                                <li>
                                    <a href="#try-it" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Try It Yourself
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* CSS Transitions */}
                        <section id="transitions" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    1
                                </span>
                                CSS Transitions
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Transitions provide a smooth change from one property value to another over a specified duration. They're perfect for hover effects, form interactions, and simple state changes.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`.button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  /* Transition syntax: property duration timing-function delay */
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
}

/* Individual transition properties */
.card {
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-delay: 0s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}`}
                            />

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Transition Properties:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>transition-property</code>: Which properties to animate (e.g., color, opacity, transform)</li>
                                        <li><code>transition-duration</code>: How long the transition takes (e.g., 0.3s, 300ms)</li>
                                        <li><code>transition-timing-function</code>: The acceleration curve (e.g., ease, linear, cubic-bezier)</li>
                                        <li><code>transition-delay</code>: Delay before the transition starts (e.g., 0.1s)</li>
                                        <li><code>transition</code>: Shorthand for all the above properties</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Common Timing Functions:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white p-3 rounded mb-2 transition-all duration-500 ease-linear">
                                            ease-linear
                                        </div>
                                        <p className="text-xs text-text-light">Consistent speed</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white p-3 rounded mb-2 transition-all duration-500 ease-in">
                                            ease-in
                                        </div>
                                        <p className="text-xs text-text-light">Starts slow, ends fast</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white p-3 rounded mb-2 transition-all duration-500 ease-out">
                                            ease-out
                                        </div>
                                        <p className="text-xs text-text-light">Starts fast, ends slow</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white p-3 rounded mb-2 transition-all duration-500 ease-in-out">
                                            ease-in-out
                                        </div>
                                        <p className="text-xs text-text-light">Starts and ends slow</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white p-3 rounded mb-2 transition-all duration-500" style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' }}>
                                            cubic-bezier
                                        </div>
                                        <p className="text-xs text-text-light">Custom curve with overshoot</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white p-3 rounded mb-2 transition-all duration-500 ease-[steps(5,end)]">
                                            steps(5, end)
                                        </div>
                                        <p className="text-xs text-text-light">Step-by-step transition</p>
                                    </div>
                                </div>
                                <p className="text-sm text-center mt-4 text-text-light">Hover over each element to see the transition effect</p>
                            </div>
                        </section>

                        {/* CSS Animations with @keyframes */}
                        <section id="keyframes" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    2
                                </span>
                                CSS Animations with @keyframes
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    CSS animations allow you to create more complex and controlled animations using keyframes. Unlike transitions, animations can run automatically, repeat, and have multiple steps.
                                </p>
                            </div>

                            <CodeBlock language={"css"}
                                code={`/* Define the keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Define the keyframes with multiple steps */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Apply animation to an element */
.element {
  /* animation: name duration timing-function delay iteration-count direction fill-mode play-state */
  animation: fadeIn 1s ease-out forwards;
}

.logo {
  animation: pulse 2s ease-in-out infinite;
}

/* Individual animation properties */
.notification {
  animation-name: shake;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
}`}
                            />

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Animation Properties:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>animation-name</code>: References the @keyframes name</li>
                                        <li><code>animation-duration</code>: How long the animation takes to complete one cycle</li>
                                        <li><code>animation-timing-function</code>: The acceleration curve</li>
                                        <li><code>animation-delay</code>: Delay before the animation starts</li>
                                        <li><code>animation-iteration-count</code>: How many times to run (number or infinite)</li>
                                        <li><code>animation-direction</code>: Whether to alternate direction (normal, reverse, alternate, alternate-reverse)</li>
                                        <li><code>animation-fill-mode</code>: How styles are applied before/after the animation (none, forwards, backwards, both)</li>
                                        <li><code>animation-play-state</code>: Whether the animation is running or paused</li>
                                        <li><code>animation</code>: Shorthand for all the above properties</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Example */}
                            <div className="mt-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-dark mb-4">Common Animation Examples:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="bg-primary-light p-4 rounded mb-2 animate-pulse">
                                            Pulse
                                        </div>
                                        <p className="text-xs text-text-light">Creates a pulsing effect</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light p-4 rounded mb-2 animate-bounce">
                                            Bounce
                                        </div>
                                        <p className="text-xs text-text-light">Creates a bouncing effect</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light p-4 rounded mb-2 animate-spin">
                                            Spin
                                        </div>
                                        <p className="text-xs text-text-light">Creates a spinning effect</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light p-4 rounded mb-2" style={{ animation: 'fadeIn 2s ease-out infinite alternate' }}>
                                            Fade In/Out
                                        </div>
                                        <p className="text-xs text-text-light">Alternates between fading in and out</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light p-4 rounded mb-2" style={{ animation: 'shake 0.5s ease-in-out infinite' }}>
                                            Shake
                                        </div>
                                        <p className="text-xs text-text-light">Creates a shaking effect</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-primary-light p-4 rounded mb-2" style={{ animation: 'slideIn 2s ease-out forwards' }}>
                                            Slide In
                                        </div>
                                        <p className="text-xs text-text-light">Slides in from the side</p>
                                    </div>
                                </div>
                                <p className="text-sm text-center mt-4 text-text-light">These animations run automatically without user interaction</p>
                            </div>
                        </section>

                        {/* Animatable Properties */}
                        <section id="properties" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    3
                                </span>
                                Animatable Properties
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Not all CSS properties can be animated. Here's a list of commonly animated properties and how to optimize them for performance.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Performant Properties</h3>
                                    <CodeBlock language={"css"}
                                        code={`/* These properties are optimized for animation */

/* Transform animations */
.scale {
  transform: scale(1);
  transition: transform 0.3s ease;
}
.scale:hover {
  transform: scale(1.1);
}

/* Opacity animations */
.fade {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
.fade:hover {
  opacity: 1;
}

/* Combined transforms */
.move-and-scale {
  transform: translateX(0) scale(1);
  transition: transform 0.3s ease;
}
.move-and-scale:hover {
  transform: translateX(10px) scale(1.05);
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">These properties use the GPU for rendering and don't cause reflows.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-dark mb-3">Less Performant Properties</h3>
                                    <CodeBlock language={"css"}
                                        code={`/* These properties may cause performance 
   issues when animated */

/* Layout animations */
.width-change {
  width: 200px;
  transition: width 0.3s ease;
}
.width-change:hover {
  width: 300px;
}

/* Position animations */
.position-change {
  top: 0;
  transition: top 0.3s ease;
  position: relative;
}
.position-change:hover {
  top: -10px;
}

/* Better alternatives */
.use-transform-instead {
  transform: scaleX(1); /* instead of width */
  transform: translateY(0); /* instead of top */
  transition: transform 0.3s ease;
}
.use-transform-instead:hover {
  transform: scaleX(1.5);
  /* or */
  transform: translateY(-10px);
}`}
                                    />
                                    <p className="text-sm text-text-secondary mt-2">These properties trigger browser reflows and should be avoided in animations when possible.</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40">
                                <h3 className="font-semibold text-dark mb-3">Commonly Animated Properties:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="font-medium text-dark mb-2">Transform Properties:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                            <li><code>transform: translateX/Y/Z()</code></li>
                                            <li><code>transform: scale()</code></li>
                                            <li><code>transform: rotate()</code></li>
                                            <li><code>transform: skew()</code></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-dark mb-2">Color Properties:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                            <li><code>color</code></li>
                                            <li><code>background-color</code></li>
                                            <li><code>border-color</code></li>
                                            <li><code>outline-color</code></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-dark mb-2">Other Properties:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                            <li><code>opacity</code></li>
                                            <li><code>box-shadow</code></li>
                                            <li><code>text-shadow</code></li>
                                            <li><code>filter</code></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section id="best-practices" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    4
                                </span>
                                Best Practices
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Follow these guidelines to create smooth, accessible, and performant animations.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Performance Tips
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Prioritize animating <code>transform</code> and <code>opacity</code></li>
                                        <li>Avoid animating properties that trigger layout recalculation</li>
                                        <li>Use <code>will-change</code> property for complex animations</li>
                                        <li>Keep animations short and purposeful</li>
                                        <li>Limit the number of animated elements on screen</li>
                                        <li>Test performance on lower-end devices</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-primary-light/10 border border-primary-light/30">
                                    <h3 className="font-semibold text-dark mb-2 flex items-center">
                                        <Lightbulb size={18} className="text-primary-dark mr-2" />
                                        Accessibility Considerations
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Respect user preferences with <code>prefers-reduced-motion</code></li>
                                        <li>Avoid animations that flash or pulse rapidly</li>
                                        <li>Don't rely solely on animation to convey information</li>
                                        <li>Keep motion subtle and meaningful</li>
                                        <li>Provide ways to pause or stop animations</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-semibold text-dark mb-3">Respecting User Preferences</h3>
                                <CodeBlock language={"css"}
                                    code={`/* Base animation for all users */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

/* Respect prefers-reduced-motion setting */
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
  
  .card:hover {
    transform: none;
  }
  
  /* Disable all animations site-wide */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`}
                                />
                            </div>
                        </section>

                        {/* Try It Yourself */}
                        <section id="try-it" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                    5
                                </span>
                                Try It Yourself
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Now that you've learned the basics of CSS animations and transitions, it's time to put your skills to the test. Try creating your own animations and experiment with different properties and timing functions.
                                </p>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40">
                                <h3 className="font-semibold text-dark mb-2">Challenge:</h3>
                                <p className="text-text-secondary">
                                    Create a button that changes color and size on hover. Add a subtle shadow and a smooth transition effect.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
);
}