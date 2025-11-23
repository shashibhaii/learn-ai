"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ActivationFunctionsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Activation Functions</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Activation functions decide whether a neuron should be activated or not. They introduce non-linearity into the network, allowing it to learn complex patterns.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Common Functions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-neon-blue mb-2">Sigmoid</h3>
                    <p className="text-xs text-gray-400">Squashes output between 0 and 1. Good for probability.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-neon-purple mb-2">ReLU</h3>
                    <p className="text-xs text-gray-400">Rectified Linear Unit. Returns x if x &gt; 0, else 0. Most common.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-green-400 mb-2">Tanh</h3>
                    <p className="text-xs text-gray-400">Squashes output between -1 and 1.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Code Visualization</h3>
            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def relu(x):
    return max(0, x)

# Test values
values = [-5, -1, 0, 1, 5]

print("Sigmoid Outputs:")
for v in values:
    print(f"Input {v}: {sigmoid(v):.4f}")

print("\nReLU Outputs:")
for v in values:
    print(f"Input {v}: {relu(v)}")`}
                expectedOutput={`Sigmoid Outputs:
Input -5: 0.0067
Input -1: 0.2689
Input 0: 0.5000
Input 1: 0.7311
Input 5: 0.9933

ReLU Outputs:
Input -5: 0
Input -1: 0
Input 0: 0
Input 1: 1
Input 5: 5`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/perceptrons">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/backpropagation">
                    <Button className="gap-2">
                        Next: Backpropagation <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
