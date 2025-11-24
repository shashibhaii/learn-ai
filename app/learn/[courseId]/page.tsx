"use client";

import { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive sidebar
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (mobile) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-deep-black text-white flex overflow-hidden relative">
            {/* Mobile Backdrop */}
            {isMobile && sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-30 backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{
                    width: sidebarOpen ? 300 : 0,
                    x: isMobile && !sidebarOpen ? -300 : 0
                }}
                className={`border-r border-white/10 bg-black/90 backdrop-blur-xl flex-shrink-0 overflow-hidden z-40 h-full ${isMobile ? "fixed left-0 top-0 bottom-0" : "relative"
                    }`}
            >
                <div className="p-6 border-b border-white/10 flex items-center justify-between w-[300px]">
                    <Link href="/courses" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Courses
                    </Link>
                    {isMobile && (
                        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                    )}
                </div>
                <div className="p-6 w-[300px] h-[calc(100vh-80px)] overflow-y-auto">
                    <h2 className="text-xl font-bold mb-2">Machine Learning 101</h2>
                    <div className="w-full bg-white/10 h-2 rounded-full mb-6">
                        <div className="bg-neon-blue h-full rounded-full w-[35%]" />
                    </div>

                    <div className="space-y-2 pb-20">
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
            <main className="flex-1 flex flex-col h-screen overflow-hidden w-full">
                <header className="h-16 border-b border-white/10 flex items-center px-4 lg:px-6 justify-between bg-black/20 shrink-0">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu className="w-5 h-5" />
                        </Button>
                        <span className="text-sm font-medium lg:hidden truncate max-w-[150px]">
                            Machine Learning 101
                        </span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Button variant="outline" size="sm" className="hidden sm:flex">Get Help</Button>
                        <Button size="sm" className="whitespace-nowrap">
                            <span className="hidden sm:inline">Next Lesson</span>
                            <ChevronRight className="w-4 h-4 sm:ml-2" />
                        </Button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <div className="max-w-4xl mx-auto pb-20">
                        <div className="aspect-video bg-black rounded-xl border border-white/10 mb-6 lg:mb-8 relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <PlayCircle className="w-16 h-16 lg:w-20 lg:h-20 text-white/50 group-hover:text-neon-blue transition-colors cursor-pointer" />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                                <div className="w-full bg-white/20 h-1 rounded-full">
                                    <div className="bg-neon-blue h-full w-[0%]" />
                                </div>
                                <span className="text-xs font-mono">00:00 / 15:00</span>
                            </div>
                        </div>

                        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Your First Neural Network</h1>
                        <div className="prose prose-invert max-w-none prose-sm lg:prose-base">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                In this lesson, we will build a simple neural network from scratch using Python. We'll understand the core concepts of neurons, weights, biases, and how they come together to make predictions.
                            </p>
                            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">Key Concepts</h3>
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
                                <pre className="font-mono text-xs lg:text-sm text-gray-300 overflow-x-auto p-2">
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
