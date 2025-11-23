"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LinearAlgebraPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Linear Algebra for AI
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Linear algebra is the backbone of AI and machine learning. Neural networks, image processing, and data transformations all rely heavily on linear algebra operations.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Why it matters:</strong> Every neural network layer is essentially a matrix multiplication. Understanding linear algebra helps you understand how AI models work internally.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Core Concepts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-neon-blue mb-3">Scalar</h3>
                    <p className="text-gray-400 mb-3">A single number.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        x = 5
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: learning rates, temperatures, single values</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-neon-purple mb-3">Vector</h3>
                    <p className="text-gray-400 mb-3">An ordered array of numbers.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        v = [1, 2, 3, 4]
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: embeddings, features, activations</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-green-400 mb-3">Matrix</h3>
                    <p className="text-gray-400 mb-3">A 2D array of numbers.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        M = [[1, 2],<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3, 4]]
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: weights, images, transformations</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Tensor</h3>
                    <p className="text-gray-400 mb-3">A multi-dimensional array.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        T = [[[1,2],[3,4]],<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[5,6],[7,8]]]
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: batches of images, video, 3D data</p>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Matrix Operations</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Matrix Multiplication</h3>
            <p className="text-gray-400 mb-4">
                The most important operation in neural networks. Each layer performs matrix multiplication.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# Matrix multiplication
A = np.array([[1, 2],
              [3, 4]])

B = np.array([[5, 6],
              [7, 8]])

# Dot product (matrix multiplication)
C = np.dot(A, B)

print("Matrix A:")
print(A)
print("\\nMatrix B:")
print(B)
print("\\nA × B =")
print(C)

# Verify dimensions
print(f"\\nShape: ({A.shape[0]}, {A.shape[1]}) × ({B.shape[0]}, {B.shape[1]}) = ({C.shape[0]}, {C.shape[1]})")`}
                expectedOutput={`Matrix A:
[[1 2]
 [3 4]]

Matrix B:
[[5 6]
 [7 8]]

A × B =
[[19 22]
 [43 50]]

Shape: (2, 2) × (2, 2) = (2, 2)`}
            />

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Neural Network Connection:</strong> When data flows through a layer, it's multiplied by the weight matrix: output = input × weights + bias
                </p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Transpose</h3>
            <p className="text-gray-400 mb-4">
                Flipping a matrix over its diagonal. Rows become columns and vice versa.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# Original matrix
M = np.array([[1, 2, 3],
              [4, 5, 6]])

# Transpose
M_T = M.T

print("Original (2×3):")
print(M)
print("\\nTransposed (3×2):")
print(M_T)

# Verify
print(f"\\nOriginal shape: {M.shape}")
print(f"Transposed shape: {M_T.shape}")`}
                expectedOutput={`Original (2×3):
[[1 2 3]
 [4 5 6]]

Transposed (3×2):
[[1 4]
 [2 5]
 [3 6]]

Original shape: (2, 3)
Transposed shape: (3, 2)`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Advanced Concepts</h2>

            <div className="space-y-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Eigenvalues & Eigenvectors</h3>
                    <p className="text-gray-400 mb-3">
                        Special vectors that only get scaled (not rotated) when a matrix is applied to them.
                    </p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        A × v = λ × v<br />
                        <span className="text-xs text-gray-500">where v is eigenvector, λ is eigenvalue</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Used in: PCA, spectral clustering, graph analysis</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Singular Value Decomposition (SVD)</h3>
                    <p className="text-gray-400 mb-3">
                        Factorizes a matrix into three matrices: A = U Σ V^T
                    </p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Any matrix = (rotation) × (scaling) × (rotation)
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Used in: dimensionality reduction, recommender systems, image compression</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">AI Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Neural Networks", desc: "Every layer is matrix multiplication" },
                    { title: "Image Processing", desc: "Images are matrices of pixels" },
                    { title: "Word Embeddings", desc: "Words as vectors in high-dimensional space" },
                    { title: "PCA", desc: "Dimensionality reduction using eigenvectors" },
                    { title: "Transformers", desc: "Attention is matrix operations" },
                    { title: "Convolutions", desc: "Sliding window matrix operations" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-terminologies">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/calculus-ai">
                    <Button className="gap-2">
                        Next: Calculus for AI <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
