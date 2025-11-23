"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, PlayCircle, CheckCircle, Lock, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const chapters = [
    { id: 1, title: "Introduction to AI", duration: "10 min", completed: true },
    { id: 2, title: "Setting up Environment", duration: "15 min", completed: true },
    { id: 3, title: "Your First Neural Network", duration: "25 min", completed: false, active: true },
    { id: 4, title: "Activation Functions", duration: "20 min", completed: false },
    { id: 5, title: "Backpropagation", duration: "30 min", completed: false, locked: true },
    { id: 6, title: "Optimizers", duration: "25 min", completed: false, locked: true },
];

export default function LearnPage({ params }: { params: { courseId: string } }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-deep-black text-white flex overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 300 }}
                animate={{ width: sidebarOpen ? 300 : 0 }}
                className="border-r border-white/10 bg-black/50 backdrop-blur-xl flex-shrink-0 overflow-hidden relative"
            >
                <div className="p-6 border-b border-white/10 flex items-center justify-between w-[300px]">
                    <Link href="/courses" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Courses
                    </Link>
                </div>
                <div className="p-6 w-[300px]">
                    <h2 className="text-xl font-bold mb-2">Machine Learning 101</h2>
                    <div className="w-full bg-white/10 h-2 rounded-full mb-6">
                        <div className="bg-neon-blue h-full rounded-full w-[35%]" />
                    </div>

                    <div className="space-y-2">
                        {chapters.map((chapter) => (
                            <div
                                key={chapter.id}
                                className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${chapter.active ? "bg-neon-blue/10 border border-neon-blue/30" : "hover:bg-white/5 border border-transparent"
                                    } ${chapter.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {chapter.completed ? (
                                    <CheckCircle className="w-5 h-5 text-neon-blue flex-shrink-0" />
                                ) : chapter.locked ? (
                                    <Lock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                    <PlayCircle className={`w-5 h-5 flex-shrink-0 ${chapter.active ? "text-neon-blue" : "text-gray-400"}`} />
                                )}
                                <div>
                                    <h3 className={`text-sm font-medium ${chapter.active ? "text-white" : "text-gray-300"}`}>{chapter.title}</h3>
                                    <p className="text-xs text-gray-500">{chapter.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-16 border-b border-white/10 flex items-center px-6 justify-between bg-black/20">
                    <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu className="w-5 h-5" />
                    </Button>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">Get Help</Button>
                        <Button size="sm">Next Lesson <ChevronRight className="w-4 h-4 ml-2" /></Button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="aspect-video bg-black rounded-xl border border-white/10 mb-8 relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <PlayCircle className="w-20 h-20 text-white/50 group-hover:text-neon-blue transition-colors cursor-pointer" />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                                <div className="w-full bg-white/20 h-1 rounded-full">
                                    <div className="bg-neon-blue h-full w-[0%]" />
                                </div>
                                <span className="text-xs font-mono">00:00 / 15:00</span>
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold mb-6">Your First Neural Network</h1>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                In this lesson, we will build a simple neural network from scratch using Python. We'll understand the core concepts of neurons, weights, biases, and how they come together to make predictions.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-3">Key Concepts</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                <li>Structure of a Neuron</li>
                                <li>Forward Propagation</li>
                                <li>Activation Functions (ReLU, Sigmoid)</li>
                            </ul>

                            <Card className="bg-black/40 border-neon-blue/20">
                                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                                    <span className="text-sm font-mono text-gray-400">main.py</span>
                                    <Button size="sm" variant="ghost" className="h-6 text-xs">Copy Code</Button>
                                </div>
                                <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                                    {`import numpy as np

class Neuron:
    def __init__(self, inputs):
        self.weights = np.random.rand(inputs)
        self.bias = np.random.rand()

    def forward(self, inputs):
        return np.dot(inputs, self.weights) + self.bias`}
                                </pre>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
