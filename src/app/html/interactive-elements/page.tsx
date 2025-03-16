// src/app/html/interactive-elements/page.tsx
import Link from "next/link";
import CodeBlock from "../../_components/ui/CodeBlock";
import { ArrowLeft, ArrowRight, BookOpen, Info, Lightbulb } from "lucide-react";

export default function InteractiveElementsPage() {
    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb Navigation */}
                <div className="text-sm mb-8 text-text-light flex items-center">
                    <Link href="/public" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/html" className="hover:text-primary-dark transition-colors">HTML</Link>
                    <span className="mx-2">/</span>
                    <span className="text-text-secondary">Interactive Elements</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                    Interactive Elements in HTML
                </h1>

                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 bg-gray-50/50 p-4">
                        <div className="flex items-center text-sm">
                            <BookOpen size={16} className="text-primary-dark mr-2" />
                            <span>HTML Basics</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-text-light">Reading time: 8 min</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="prose max-w-none">
                                <p className="text-lg text-text-secondary mb-4">
                                    Interactive elements make web pages dynamic and allow users to input data, make selections, and trigger actions.
                                </p>
                                <p className="text-text-secondary">
                                    In this tutorial, you'll learn about forms, buttons, and various input controls that enable user interaction with your web pages.
                                </p>
                            </div>
                        </section>

                        {/* Table of Contents */}
                        <section className="mb-12 p-4 bg-background rounded-xl border border-gray-100">
                            <h2 className="text-lg font-bold text-dark mb-4">In this tutorial</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#forms" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Forms
                                    </a>
                                </li>
                                <li>
                                    <a href="#input-types" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Input Types
                                    </a>
                                </li>
                                <li>
                                    <a href="#buttons" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Buttons
                                    </a>
                                </li>
                                <li>
                                    <a href="#form-structure" className="text-primary-dark hover:text-dark transition-colors flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-dark mr-2"></div>
                                        Form Structure
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

                        {/* Forms */}
                        <section id="forms" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  1
                                </span>
                                Forms
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Forms are containers for interactive controls that allow users to submit information to a web server. The <code>&lt;form&gt;</code> element is used to create an HTML form.
                                </p>
                            </div>

                            <CodeBlock
                                code={`<form action="/submit-form" method="post">
  <!-- Form controls will go here -->
  <input type="text" name="username" placeholder="Enter your username">
  <input type="password" name="password" placeholder="Enter your password">
  <button type="submit">Login</button>
</form>`}
                            />

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Important Form Attributes:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>action</code> - Specifies where to send the form data when submitted</li>
                                        <li><code>method</code> - Specifies the HTTP method to use (get or post)</li>
                                        <li><code>name</code> - Provides a name for the form (important for referencing)</li>
                                        <li><code>autocomplete</code> - Specifies if form should have autocomplete on/off</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Input Types */}
                        <section id="input-types" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  2
                                </span>
                                Input Types
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    The <code>&lt;input&gt;</code> element is the most common form control. It can be displayed in several ways, depending on the <code>type</code> attribute.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Text Inputs</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Text:</p>
                                            <CodeBlock code={`<input type="text" name="username" placeholder="Enter username">`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50">
                                                <input type="text" placeholder="Enter username" className="border p-1 w-full rounded text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Password:</p>
                                            <CodeBlock code={`<input type="password" name="password">`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50">
                                                <input type="password" placeholder="Password" className="border p-1 w-full rounded text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Email:</p>
                                            <CodeBlock code={`<input type="email" name="email">`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50">
                                                <input type="email" placeholder="email@example.com" className="border p-1 w-full rounded text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Selection Inputs</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Checkbox:</p>
                                            <CodeBlock code={`<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50 flex items-center">
                                                <input type="checkbox" id="demo-checkbox" className="mr-2" />
                                                <label htmlFor="demo-checkbox" className="text-sm text-text-secondary">Subscribe to newsletter</label>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Radio buttons:</p>
                                            <CodeBlock code={`<input type="radio" name="plan" id="basic" value="basic">
<label for="basic">Basic</label>
<input type="radio" name="plan" id="premium" value="premium">
<label for="premium">Premium</label>`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50 flex items-center space-x-4">
                                                <div className="flex items-center">
                                                    <input type="radio" name="demo-plan" id="demo-basic" className="mr-2" />
                                                    <label htmlFor="demo-basic" className="text-sm text-text-secondary">Basic</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="radio" name="demo-plan" id="demo-premium" className="mr-2" />
                                                    <label htmlFor="demo-premium" className="text-sm text-text-secondary">Premium</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Date and Time Inputs</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Date:</p>
                                            <CodeBlock code={`<input type="date" name="birthday">`} />
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Time:</p>
                                            <CodeBlock code={`<input type="time" name="meeting-time">`} />
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Date and Time:</p>
                                            <CodeBlock code={`<input type="datetime-local" name="event-time">`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Other Input Types</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Number:</p>
                                            <CodeBlock code={`<input type="number" name="quantity" min="1" max="100">`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50">
                                                <input type="number" min="1" max="100" defaultValue="1" className="border p-1 w-full rounded text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">Range:</p>
                                            <CodeBlock code={`<input type="range" name="volume" min="0" max="100">`} />
                                            <div className="mt-2 p-2 border rounded bg-gray-50">
                                                <input type="range" min="0" max="100" className="w-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-text-secondary text-sm mb-1">File:</p>
                                            <CodeBlock code={`<input type="file" name="document">`} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Lightbulb size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Input Attributes:</h3>
                                    <p className="text-text-secondary mb-2">
                                        Common attributes used with input elements:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>name</code> - Specifies the name of an input element (used when submitting)</li>
                                        <li><code>value</code> - Specifies the initial value</li>
                                        <li><code>placeholder</code> - Provides a hint about the expected value</li>
                                        <li><code>required</code> - Specifies that the input field must be filled out</li>
                                        <li><code>disabled</code> - Disables the input field</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Buttons */}
                        <section id="buttons" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  3
                                </span>
                                Buttons
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Buttons allow users to trigger actions or submit forms. HTML provides different ways to create buttons.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Button Element</h3>
                                    <p className="text-text-secondary text-sm mb-2">
                                        The <code>&lt;button&gt;</code> element creates a clickable button:
                                    </p>
                                    <CodeBlock code={`<button type="button">Click Me</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>`} />
                                    <div className="mt-3 p-2 border rounded bg-gray-50 flex space-x-2">
                                        <button className="px-3 py-1 bg-primary-dark text-white rounded text-sm">Click Me</button>
                                        <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">Submit</button>
                                        <button className="px-3 py-1 bg-gray-500 text-white rounded text-sm">Reset</button>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Input Buttons</h3>
                                    <p className="text-text-secondary text-sm mb-2">
                                        You can also create buttons using the <code>&lt;input&gt;</code> element:
                                    </p>
                                    <CodeBlock code={`<input type="button" value="Click Me">
<input type="submit" value="Submit">
<input type="reset" value="Reset">`} />
                                    <div className="mt-3 p-2 border rounded bg-gray-50 flex space-x-2">
                                        <input type="button" value="Click Me" className="px-3 py-1 bg-primary-dark text-white rounded text-sm cursor-pointer" />
                                        <input type="submit" value="Submit" className="px-3 py-1 bg-green-600 text-white rounded text-sm cursor-pointer" />
                                        <input type="reset" value="Reset" className="px-3 py-1 bg-gray-500 text-white rounded text-sm cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Button Types:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li><code>type="button"</code> - Regular button that doesn't submit the form</li>
                                        <li><code>type="submit"</code> - Submits the form data to the server</li>
                                        <li><code>type="reset"</code> - Resets all form values to their default values</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Form Structure */}
                        <section id="form-structure" className="mb-12 scroll-mt-20">
                            <h2 className="text-2xl font-bold text-dark mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center mr-3 text-primary-dark">
                                  4
                                </span>
                                Form Structure
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-text-secondary mb-4">
                                    Forms can be structured with various elements to improve organization and accessibility.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Labels</h3>
                                    <p className="text-text-secondary text-sm mb-2">
                                        The <code>&lt;label&gt;</code> element associates text with an input element:
                                    </p>
                                    <CodeBlock code={`<label for="username">Username:</label>
<input type="text" id="username" name="username">`} />
                                    <div className="mt-3 p-2 border rounded bg-gray-50">
                                        <div className="mb-2">
                                            <label htmlFor="demo-username" className="block mb-1 text-sm text-text-secondary">Username:</label>
                                            <input type="text" id="demo-username" className="border p-1 w-full rounded text-sm" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Fieldset and Legend</h3>
                                    <p className="text-text-secondary text-sm mb-2">
                                        The <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements group related form controls:
                                    </p>
                                    <CodeBlock code={`<fieldset>
  <legend>Personal Information</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>`} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Select Dropdown</h3>
                                    <p className="text-text-secondary text-sm mb-2">
                                        The <code>&lt;select&gt;</code> element creates a dropdown list:
                                    </p>
                                    <CodeBlock code={`<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">--Please select--</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>`} />
                                    <div className="mt-3 p-2 border rounded bg-gray-50">
                                        <label htmlFor="demo-country" className="block mb-1 text-sm text-text-secondary">Country:</label>
                                        <select id="demo-country" className="border p-1 w-full rounded text-sm">
                                            <option value="">--Please select--</option>
                                            <option value="us">United States</option>
                                            <option value="ca">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-dark mb-3">Textarea</h3>
                                    <p className="text-text-secondary text-sm mb-2">
                                        The <code>&lt;textarea&gt;</code> element creates a multi-line text input:
                                    </p>
                                    <CodeBlock code={`<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50">
  Enter your message here...
</textarea>`} />
                                    <div className="mt-3 p-2 border rounded bg-gray-50">
                                        <label htmlFor="demo-message" className="block mb-1 text-sm text-text-secondary">Message:</label>
                                        <textarea id="demo-message" className="border p-1 w-full rounded text-sm" defaultValue="Enter your message here..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary-light/20 border border-primary-light/40 flex">
                                <div className="mr-4 text-primary-dark">
                                    <Lightbulb size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Accessibility Tips:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                        <li>Always use <code>&lt;label&gt;</code> elements to associate text with form controls</li>
                                        <li>Use <code>fieldset</code> and <code>legend</code> to group related form elements</li>
                                        <li>Add appropriate <code>aria-</code> attributes for enhanced accessibility</li>
                                        <li>Include clear instructions and error messages</li>
                                        <li>Ensure keyboard navigation works properly</li>
                                    </ul>
                                </div>
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
                                    Create a registration form that incorporates various form elements and controls.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <div className="bg-dark text-white p-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex space-x-1.5 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono">registration-form.html</span>
                                    </div>
                                    <span className="text-xs text-gray-400">Example Code</span>
                                </div>

                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Form</title>
</head>
<body>
  <h1>Create an Account</h1>
  
  <form action="/register" method="post">
    <fieldset>
      <legend>Personal Information</legend>
      
      <div>
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required>
      </div>
      
      <div>
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">
      </div>
    </fieldset>
    
    <fieldset>
      <legend>Account Details</legend>
      
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      
      <div>
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
      </div>
    </fieldset>
    
    <fieldset>
      <legend>Preferences</legend>
      
      <div>
        <label for="country">Country:</label>
        <select id="country" name="country">
          <option value="">--Select Country--</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
        </select>
      </div>
      
      <div>
        <p>Interests (check all that apply):</p>
        <input type="checkbox" id="tech" name="interests" value="technology">
        <label for="tech">Technology</label>
        
        <input type="checkbox" id="sports" name="interests" value="sports">
        <label for="sports">Sports</label>
        
        <input type="checkbox" id="music" name="interests" value="music">
        <label for="music">Music</label>
        
        <input type="checkbox" id="art" name="interests" value="art">
        <label for="art">Art</label>
      </div>
      
      <div>
        <p>How did you hear about us?</p>
        <input type="radio" id="search" name="referral" value="search">
        <label for="search">Search Engine</label>
        
        <input type="radio" id="social" name="referral" value="social">
        <label for="social">Social Media</label>
        
        <input type="radio" id="friend" name="referral" value="friend">
        <label for="friend">Friend/Family</label>
        
        <input type="radio" id="other" name="referral" value="other">
        <label for="other">Other</label>
      </div>
    </fieldset>
    
    <div>
      <label for="bio">About You:</label>
      <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Tell us about yourself..."></textarea>
    </div>
    
    <div>
      <input type="checkbox" id="terms" name="terms" required>
      <label for="terms">I agree to the Terms and Conditions</label>
    </div>
    
    <div>
      <button type="submit">Register</button>
      <button type="reset">Clear Form</button>
    </div>
  </form>
</body>
</html>`}
                                />
                            </div>

                            <div className="bg-primary-light/20 rounded-xl p-6 border border-primary-light/30 flex">
                                <div className="text-primary-dark mr-4 mt-1">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-2">Pro Tip</h3>
                                    <p className="text-text-secondary">
                                        While HTML provides the structure for form elements, you'll typically use CSS to style them and JavaScript to add dynamic behaviors like form validation. This combination creates a better user experience with immediate feedback and more attractive interfaces.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h2 className="text-xl font-bold text-dark mb-4">Summary</h2>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Use the <code>&lt;form&gt;</code> element to create interactive forms</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Choose appropriate <code>&lt;input&gt;</code> types based on the data you need to collect</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Use <code>&lt;button&gt;</code> elements to create interactive buttons</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Structure forms with <code>&lt;label&gt;</code>, <code>&lt;fieldset&gt;</code>, and <code>&lt;legend&gt;</code> for better accessibility</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-2 mt-0.5 text-primary-dark font-bold text-xs">✓</div>
                                    <span className="text-text-secondary">Use <code>&lt;select&gt;</code> and <code>&lt;textarea&gt;</code> for more complex input types</span>
                                </li>
                            </ul>
                        </section>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            <Link
                                href="/html/links-images"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-2" />
                                Previous: Links and Images
                            </Link>
                            <Link
                                href="/html/block-inline-elements"
                                className="flex items-center text-primary-dark hover:text-dark transition-colors sm:justify-end"
                            >
                                Next: Block and Inline Elements
                                <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }