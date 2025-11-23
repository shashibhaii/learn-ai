"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CNNsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Convolutional Neural Networks (CNNs)</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                CNNs are specialized neural networks designed for processing grid-like data, such as images. They use convolution operations to automatically learn spatial hierarchies of features.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Key Components</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-neon-blue mb-2">Convolution Layer</h3>
                    <p className="text-xs text-gray-400">Applies filters to detect features like edges, textures, and patterns.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-neon-purple mb-2">Pooling Layer</h3>
                    <p className="text-xs text-gray-400">Reduces spatial dimensions while retaining important information.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h3 className="font-bold text-green-400 mb-2">Fully Connected</h3>
                    <p className="text-xs text-gray-400">Final layers that perform classification based on extracted features.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simple Convolution Example</h3>
            <p className="text-gray-400 mb-4">
                This demonstrates how a 3x3 filter slides over an image to detect features.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# Simple 5x5 image
image = np.array([
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5]
])

# 3x3 edge detection filter
filter = np.array([
    [-1, -1, -1],
    [ 0,  0,  0],
    [ 1,  1,  1]
])

# Convolution operation (simplified)
output = np.zeros((3, 3))
for i in range(3):
    for j in range(3):
        output[i, j] = np.sum(image[i:i+3, j:j+3] * filter)

print("Original Image (5x5):")
print(image)
print("\\nConvolved Output (3x3):")
print(output.astype(int))`}
                expectedOutput={`Original Image (5x5):
[[1 2 3 4 5]
 [5 4 3 2 1]
 [1 2 3 4 5]
 [5 4 3 2 1]
 [1 2 3 4 5]]

Convolved Output (3x3):
[[ 0  0  0]
 [ 0  0  0]
 [ 0  0  0]]`}
            />

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Why CNNs for Images?</strong> They preserve spatial relationships and are translation-invariant, meaning they can detect features regardless of position.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/backpropagation">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/rnns">
                    <Button className="gap-2">
                        Next: RNNs <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
