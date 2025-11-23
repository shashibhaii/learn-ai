"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Cpu } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-hero-glow opacity-20 blur-[100px] rounded-full animate-pulse-slow" />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-blue text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>The Future of Learning is Here</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">Artificial Intelligence</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-xl">
                        Dive into the world of AI with interactive modules, real-time coding playgrounds, and a futuristic learning environment designed for the next generation of engineers.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="group" onClick={() => window.location.href = "/courses"}>
                            Start Learning
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.location.href = "/docs/intro-to-ai"}>
                            Read Docs
                        </Button>
                    </div>
                </motion.div>

                <div className="relative h-[400px] hidden lg:block">
                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-10 right-10 p-4 glass-panel rounded-2xl border-neon-blue/30"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Brain className="w-12 h-12 text-neon-blue" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-20 left-10 p-4 glass-panel rounded-2xl border-neon-purple/30"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Cpu className="w-12 h-12 text-neon-purple" />
                    </motion.div>

                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* Code Snippet Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md glass-panel rounded-xl p-6 border border-white/10"
                    >
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-2 font-mono text-sm">
                            <div className="text-gray-400"># Initialize AI Model</div>
                            <div className="text-neon-purple">const <span className="text-neon-blue">model</span> = <span className="text-white">new AI.Model();</span></div>
                            <div className="text-neon-purple">await <span className="text-neon-blue">model</span>.<span className="text-white">train(dataset);</span></div>
                            <div className="text-gray-400">// Training complete...</div>
                            <div className="text-green-400">Accuracy: 99.8%</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
