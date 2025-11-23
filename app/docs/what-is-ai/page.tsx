"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatIsAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                What is Artificial Intelligence?
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think, learn, and problem-solve like humans. It's the science of making machines smart.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Definition:</strong> AI is a branch of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">History & Evolution</h2>

            <div className="space-y-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-blue-500"
                >
                    <h3 className="text-xl font-bold text-blue-400 mb-2">1950s: The Birth</h3>
                    <p className="text-sm text-gray-400">Alan Turing proposes the "Turing Test". John McCarthy coins the term "Artificial Intelligence" at the Dartmouth Conference (1956).</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-purple-500"
                >
                    <h3 className="text-xl font-bold text-purple-400 mb-2">1960s-1970s: Early Enthusiasm</h3>
                    <p className="text-sm text-gray-400">Development of ELIZA (first chatbot), expert systems, and symbolic AI. High expectations but limited computing power.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-red-500"
                >
                    <h3 className="text-xl font-bold text-red-400 mb-2">1980s-1990s: AI Winter</h3>
                    <p className="text-sm text-gray-400">Funding cuts due to unmet promises. Focus shifts to specific applications rather than general AI.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-green-500"
                >
                    <h3 className="text-xl font-bold text-green-400 mb-2">2000s: Machine Learning Era</h3>
                    <p className="text-sm text-gray-400">Rise of statistical ML, big data, and increased computing power. IBM's Watson wins Jeopardy! (2011).</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-neon-blue"
                >
                    <h3 className="text-xl font-bold text-neon-blue mb-2">2010s-Present: Deep Learning Revolution</h3>
                    <p className="text-sm text-gray-400">AlexNet (2012), AlphaGo (2016), GPT models, ChatGPT (2022). AI becomes mainstream.</p>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Types of AI</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-8 rounded-xl border-2 border-neon-blue/30 hover:border-neon-blue transition-colors">
                    <h3 className="text-2xl font-bold text-neon-blue mb-4">Weak AI (Narrow AI)</h3>
                    <p className="text-gray-400 mb-4">Designed for specific tasks. Cannot generalize beyond its training.</p>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Voice assistants (Siri, Alexa)</li>
                        <li>Recommendation systems (Netflix, Spotify)</li>
                        <li>Image recognition</li>
                        <li>Chess engines</li>
                    </ul>
                    <div className="mt-4 px-3 py-1 bg-neon-blue/10 rounded text-xs text-neon-blue inline-block">
                        Current Reality
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-xl border-2 border-neon-purple/30 hover:border-neon-purple transition-colors">
                    <h3 className="text-2xl font-bold text-neon-purple mb-4">Strong AI (AGI)</h3>
                    <p className="text-gray-400 mb-4">Human-level intelligence across all domains. Can learn, understand, and apply knowledge flexibly.</p>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>General problem solving</li>
                        <li>Transfer learning across domains</li>
                        <li>Common sense reasoning</li>
                        <li>Consciousness (theoretical)</li>
                    </ul>
                    <div className="mt-4 px-3 py-1 bg-neon-purple/10 rounded text-xs text-neon-purple inline-block">
                        Future Goal
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Approaches to AI</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Symbolic AI</h3>
                    <p className="text-sm text-gray-400 mb-3">Rule-based systems using logic and knowledge representation.</p>
                    <div className="bg-black/40 p-4 rounded text-xs font-mono text-gray-300 mb-3">
                        IF patient has fever AND cough<br />
                        THEN diagnose = flu
                    </div>
                    <p className="text-xs text-gray-500">✓ Explainable, ✗ Brittle, requires manual rules</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Machine Learning</h3>
                    <p className="text-sm text-gray-400 mb-3">Learn patterns from data without explicit programming.</p>
                    <div className="bg-black/40 p-4 rounded text-xs font-mono text-gray-300 mb-3">
                        Training Data → Model → Predictions<br />
                        (learns patterns automatically)
                    </div>
                    <p className="text-xs text-gray-500">✓ Scalable, adapts to data, ✗ Less explainable</p>
                </div>
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-purple">Modern AI:</strong> Most current AI systems use Machine Learning, especially Deep Learning, which has achieved breakthrough results in vision, language, and game playing.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Capabilities</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: "🧠", label: "Learning", desc: "From data" },
                    { icon: "💭", label: "Reasoning", desc: "Logical inference" },
                    { icon: "👁️", label: "Perception", desc: "Vision, speech" },
                    { icon: "🗣️", label: "Language", desc: "Understanding" },
                    { icon: "🎯", label: "Planning", desc: "Goal-directed" },
                    { icon: "🤝", label: "Interaction", desc: "With humans" },
                    { icon: "🎨", label: "Creativity", desc: "Generate content" },
                    { icon: "⚡", label: "Adaptation", desc: "To new tasks" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-xl text-center hover:bg-white/10 transition-colors"
                    >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-sm font-bold text-white">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <div className="text-sm text-gray-500">Start of AI Fundamentals</div>
                <Link href="/docs/ai-real-world">
                    <Button className="gap-2">
                        Next: AI in the Real World <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
