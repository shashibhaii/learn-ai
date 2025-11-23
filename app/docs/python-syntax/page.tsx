"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PythonSyntaxPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Python Syntax for AI</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Python is the lingua franca of AI. Its simple, readable syntax makes it perfect for expressing complex mathematical ideas.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Variables & Types</h2>
            <p className="text-gray-400 mb-4">
                Python is dynamically typed, meaning you don't need to declare types explicitly.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Variables
learning_rate = 0.01  # Float
epochs = 100          # Integer
model_name = "GPT-4"  # String
is_trained = False    # Boolean

print(f"Model: {model_name}")
print(f"Learning Rate: {learning_rate}")
print(f"Type of epochs: {type(epochs)}")`}
                expectedOutput={`Model: GPT-4
Learning Rate: 0.01
Type of epochs: <class 'int'>`}
            />

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Lists & Loops</h2>
            <p className="text-gray-400 mb-4">
                Lists are essential for storing datasets, and loops help iterate through them.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# A list of accuracy scores
scores = [0.85, 0.92, 0.78, 0.95]

# List comprehension (very common in AI)
normalized_scores = [s * 100 for s in scores]

print(f"Original: {scores}")
print(f"Normalized: {normalized_scores}")

# Finding the best score
best_score = max(scores)
print(f"Best Accuracy: {best_score}")`}
                expectedOutput={`Original: [0.85, 0.92, 0.78, 0.95]
Normalized: [85.0, 92.0, 78.0, 95.0]
Best Accuracy: 0.95`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/deep-learning-basics">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/numpy-arrays">
                    <Button className="gap-2">
                        Next: NumPy Arrays <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
