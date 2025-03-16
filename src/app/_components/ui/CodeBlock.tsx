"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
    code: string;
    language?: string;
}

export default function CodeBlock({ code, language = "html" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="relative mb-6 group">
            {/* Copy Button */}
            <button
                onClick={copyToClipboard}
                className="absolute right-3 top-3 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md transition-all shadow-md opacity-90 hover:opacity-100"
                aria-label="Copy code"
                title="Copy to clipboard"
            >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>

            {/* Code Block */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                {/* Header */}
                <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-800 flex items-center">
                    <span className="mr-2 uppercase">{language}</span>
                    {copied && <span className="text-green-400 text-xs">Copied!</span>}
                </div>

                {/* Syntax Highlighted Code */}
                <SyntaxHighlighter
                    language={language}
                    style={oneDark}
                    customStyle={{
                        padding: "16px",
                        fontSize: "0.875rem",
                        background: "transparent",
                        margin: 0,
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
