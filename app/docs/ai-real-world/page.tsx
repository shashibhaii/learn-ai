"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIRealWorldPage() {
    const applications = [
        {
            icon: "🏥",
            title: "Healthcare",
            color: "from-red-500 to-pink-500",
            examples: [
                "Disease diagnosis from medical images",
                "Drug discovery and development",
                "Personalized treatment plans",
                "Robotic surgery assistance"
            ]
        },
        {
            icon: "💰",
            title: "Finance",
            color: "from-green-500 to-emerald-500",
            examples: [
                "Fraud detection in real-time",
                "Algorithmic trading",
                "Credit scoring and risk assessment",
                "Chatbots for customer service"
            ]
        },
        {
            icon: "🎓",
            title: "Education",
            color: "from-blue-500 to-cyan-500",
            examples: [
                "Personalized learning paths",
                "Automated grading and feedback",
                "Intelligent tutoring systems",
                "Content recommendation"
            ]
        },
        {
            icon: "🤖",
            title: "Robotics",
            color: "from-purple-500 to-violet-500",
            examples: [
                "Autonomous vehicles",
                "Warehouse automation",
                "Manufacturing robots",
                "Delivery drones"
            ]
        },
        {
            icon: "🎮",
            title: "Entertainment",
            color: "from-orange-500 to-amber-500",
            examples: [
                "Game AI opponents",
                "Content recommendation (Netflix, Spotify)",
                "Procedural content generation",
                "Deepfake and special effects"
            ]
        },
        {
            icon: "🛒",
            title: "E-Commerce",
            color: "from-yellow-500 to-orange-500",
            examples: [
                "Product recommendations",
                "Dynamic pricing",
                "Visual search",
                "Chatbots and virtual assistants"
            ]
        }
    ];

    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI in the Real World
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Artificial Intelligence is no longer science fiction—it's embedded in our daily lives. From the moment you wake up to when you sleep, AI systems are working behind the scenes.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-white/10 p-6 mb-12 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Daily AI Interactions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-300">
                    <div>📱 Phone unlock (Face ID)</div>
                    <div>🗣️ Voice assistants</div>
                    <div>📧 Email spam filters</div>
                    <div>🎵 Music recommendations</div>
                    <div>🚗 GPS navigation</div>
                    <div>📸 Photo organization</div>
                    <div>🛍️ Shopping suggestions</div>
                    <div>🎬 Video recommendations</div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-8">Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {applications.map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${app.color} flex items-center justify-center text-3xl mb-4`}>
                            {app.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                        <ul className="space-y-2">
                            {app.examples.map((example, i) => (
                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-neon-blue mt-1">▹</span>
                                    <span>{example}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Case Studies</h2>

            <div className="space-y-6 mb-12">
                <div className="glass-panel p-8 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-green-400 mb-3">AlphaFold: Protein Structure Prediction</h3>
                    <p className="text-gray-400 mb-4">
                        DeepMind's AlphaFold solved a 50-year-old challenge in biology by predicting protein structures with atomic accuracy. This breakthrough accelerates drug discovery and disease understanding.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded">Healthcare</span>
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded">Deep Learning</span>
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded">2020</span>
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">Tesla Autopilot: Self-Driving Cars</h3>
                    <p className="text-gray-400 mb-4">
                        Tesla's Full Self-Driving uses computer vision and neural networks to navigate roads, recognize objects, and make driving decisions in real-time.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded">Robotics</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded">Computer Vision</span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded">Ongoing</span>
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-purple-400 mb-3">ChatGPT: Conversational AI</h3>
                    <p className="text-gray-400 mb-4">
                        OpenAI's ChatGPT demonstrated that LLMs can engage in human-like conversations, write code, explain concepts, and assist with creative tasks, reaching 100M users in 2 months.
                    </p>
                    <div className="flex gap-4 text-sm">
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded">NLP</span>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded">LLMs</span>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded">2022</span>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Impact & Statistics</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                    { value: "$15.7T", label: "AI contribution to global economy by 2030" },
                    { value: "97M", label: "New AI jobs created by 2025" },
                    { value: "80%", label: "Businesses using AI in some form" },
                    { value: "37%", label: "Average productivity increase with AI" }
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel p-6 rounded-xl text-center"
                    >
                        <div className="text-3xl font-bold text-neon-blue mb-2">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-purple">The Future:</strong> AI is expected to transform every industry. Understanding AI is becoming as essential as computer literacy was in the 1990s.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/what-is-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/ai-terminologies">
                    <Button className="gap-2">
                        Next: AI Terminologies <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
