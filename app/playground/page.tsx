"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Play, RotateCcw, Save, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function PlaygroundPage() {
    const [code, setCode] = useState(`# Welcome to the AI Playground
# Try writing some Python-like pseudocode here

def train_model(epochs):
    print("Initializing model...")
    accuracy = 0.1
    
    for i in range(epochs):
        accuracy += 0.15
        print(f"Epoch {i+1}: Accuracy = {min(accuracy, 0.99):.2f}")
        
    return accuracy

final_acc = train_model(5)
print(f"Training complete! Final Accuracy: {final_acc:.2f}")
`);
    const [output, setOutput] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    const runCode = async () => {
        setIsRunning(true);
        setOutput([]);

        // Simulate execution
        const lines = [
            "Initializing model...",
            "Epoch 1: Accuracy = 0.25",
            "Epoch 2: Accuracy = 0.40",
            "Epoch 3: Accuracy = 0.55",
            "Epoch 4: Accuracy = 0.70",
            "Epoch 5: Accuracy = 0.85",
            "Training complete! Final Accuracy: 0.85"
        ];

        for (const line of lines) {
            await new Promise(r => setTimeout(r, 500));
            setOutput(prev => [...prev, line]);
        }

        setIsRunning(false);
    };

    return (
        <main className="min-h-screen bg-deep-black text-white pt-16 flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)]">
                {/* Editor Section */}
                <div className="flex-1 flex flex-col border-r border-white/10">
                    <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-black/20">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-neon-blue" />
                            <span className="text-sm font-medium">main.py</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" onClick={() => setCode("")}><RotateCcw className="w-4 h-4" /></Button>
                            <Button size="sm" variant="ghost"><Save className="w-4 h-4" /></Button>
                            <Button size="sm" onClick={runCode} disabled={isRunning} className="gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                {isRunning ? "Running..." : "Run Code"}
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="absolute inset-0 w-full h-full bg-[#0a0a0a] text-gray-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                            spellCheck={false}
                        />
                    </div>
                </div>

                {/* Output Section */}
                <div className="w-full md:w-[400px] flex flex-col bg-[#050505]">
                    <div className="h-12 border-b border-white/10 flex items-center px-4 bg-black/20">
                        <span className="text-sm font-medium text-gray-400">Console Output</span>
                    </div>
                    <div className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2">
                        {output.length === 0 && !isRunning && (
                            <div className="text-gray-600 italic">Ready to execute...</div>
                        )}
                        {output.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-green-400"
                            >
                                {">"} {line}
                            </motion.div>
                        ))}
                        {isRunning && (
                            <div className="animate-pulse text-neon-blue">_</div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
