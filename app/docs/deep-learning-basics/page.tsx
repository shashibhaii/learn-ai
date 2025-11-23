"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DeepLearningPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Deep Learning Basics</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Deep Learning is a specialized subset of Machine Learning inspired by the structure of the human brain. It uses multi-layered artificial neural networks to solve complex problems.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Why "Deep"?</h2>
            <p className="text-gray-400 mb-6">
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def layer_pass(input_data, weights):
    # Simple matrix multiplication
    return np.dot(input_data, weights)

# Input data (e.g., pixel values)
input_data = np.array([0.5, 0.8])

# Weights for 3 layers
w1 = np.array([[0.2, 0.4], [0.1, 0.3]])
w2 = np.array([[0.5, -0.1], [0.6, 0.2]])
w3 = np.array([0.9, 0.1])

# Forward pass
layer1 = layer_pass(input_data, w1)
layer2 = layer_pass(layer1, w2)
output = layer_pass(layer2, w3)

print(f"Input: {input_data}")
print(f"Layer 1: {layer1}")
print(f"Layer 2: {layer2}")
print(f"Final Output: {output:.4f}")`}
                expectedOutput={`Input: [0.5 0.8]
Layer 1: [0.18 0.44]
Layer 2: [0.354 0.07 ]
Final Output: 0.3256`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/what-is-ml">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/python-syntax">
                    <Button className="gap-2">
                        Next: Python Syntax <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
