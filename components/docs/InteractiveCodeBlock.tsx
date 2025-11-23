"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Play, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface InteractiveCodeBlockProps {
    initialCode: string;
    expectedOutput?: string;
    language?: string;
}

export function InteractiveCodeBlock({ initialCode, expectedOutput = "Hello, AI World!", language = "python" }: InteractiveCodeBlockProps) {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput(null);

        // Simulate execution delay
        await new Promise(r => setTimeout(r, 800));

        // For demo purposes, we just show the expected output
        // In a real app, this would send code to a backend sandbox
        setOutput(expectedOutput);
        setIsRunning(false);
    };

    return (
        <div className="my-8 border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a]">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase">{language}</span>
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => { setCode(initialCode); setOutput(null); }}
                        className="h-8 px-2 text-xs"
                    >
                        <RotateCcw className="w-3 h-3 mr-1" /> Reset
                    </Button>
                    <Button
                        size="sm"
                        onClick={handleRun}
                        disabled={isRunning}
                        className="h-8 px-3 text-xs bg-green-600 hover:bg-green-700 text-white border-none shadow-none"
                    >
                        <Play className="w-3 h-3 mr-1 fill-current" />
                        {isRunning ? "Running..." : "Run Code"}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="relative">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 bg-transparent p-4 font-mono text-sm text-gray-300 focus:outline-none resize-none leading-relaxed"
                        spellCheck={false}
                    />
                </div>

                <div className="bg-black/40 p-4 font-mono text-sm h-64 overflow-y-auto">
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Output:</div>
                    {output ? (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-400 whitespace-pre-wrap"
                        >
                            {output}
                        </motion.div>
                    ) : isRunning ? (
                        <div className="text-gray-500 animate-pulse">Executing...</div>
                    ) : (
                        <div className="text-gray-600 italic">Click "Run Code" to see output</div>
                    )}
                </div>
            </div>
        </div>
    );
}
