"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function WhatIsMLPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">What is Machine Learning?</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Machine Learning (ML) is a subset of artificial intelligence that focuses on building systems that learn from data, rather than being explicitly programmed for a specific task.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Supervised vs. Unsupervised Learning</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-neon-blue mb-2">Supervised Learning</h3>
                    <p className="text-sm text-gray-400">
                        The model learns from labeled data. It's like a teacher supervising the learning process.
                        <br /><br />
                        <em>Examples: Spam detection, Image classification.</em>
                    </p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-neon-purple mb-2">Unsupervised Learning</h3>
                    <p className="text-sm text-gray-400">
                        The model learns from unlabeled data, finding hidden patterns or structures.
                        <br /><br />
                        <em>Examples: Customer segmentation, Anomaly detection.</em>
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simple Classification Logic</h3>
            <p className="text-gray-400 mb-4">
                Here's a very simplified example of how a model might classify data points based on features.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`def classify_fruit(weight, texture_smoothness):
    # Features: Weight (grams), Texture (0=rough, 10=smooth)
    
    if weight > 150 and texture_smoothness > 5:
        return "Apple"
    elif weight > 150 and texture_smoothness <= 5:
        return "Orange"
    else:
        return "Unknown Fruit"

print(classify_fruit(160, 8))  # Heavy and smooth
print(classify_fruit(170, 2))  # Heavy and rough`}
                expectedOutput={`Apple
Orange`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/intro-to-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/deep-learning-basics">
                    <Button className="gap-2">
                        Next: Deep Learning Basics <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
