"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CalculusAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Calculus for AI
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Calculus is the mathematics of change. In AI, we use calculus to optimize models—finding the best parameters that minimize error. Understanding derivatives and gradients is essential for training neural networks.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Why it matters:</strong> Every time a neural network learns, it uses calculus to adjust weights. Backpropagation is just the chain rule applied repeatedly.
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
                    <h3 className="text-xl font-bold text-neon-blue mb-3">Derivative</h3>
                    <p className="text-gray-400 mb-3">Rate of change of a function. How much does output change when input changes slightly?</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        f(x) = x²<br />
                        f'(x) = 2x
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: Finding slopes, optimization</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-neon-purple mb-3">Partial Derivative</h3>
                    <p className="text-gray-400 mb-3">Derivative with respect to one variable, holding others constant.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        f(x,y) = x² + y²<br />
                        ∂f/∂x = 2x
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: Multi-variable optimization</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-green-400 mb-3">Gradient</h3>
                    <p className="text-gray-400 mb-3">Vector of all partial derivatives. Points in direction of steepest increase.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        ∇f = [∂f/∂x₁, ∂f/∂x₂, ...]
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: Gradient descent, backpropagation</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Chain Rule</h3>
                    <p className="text-gray-400 mb-3">Derivative of composite functions. Essential for backpropagation.</p>
                    <div className="bg-black/40 p-3 rounded font-mono text-sm text-gray-300">
                        d/dx[f(g(x))] = f'(g(x))·g'(x)
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Used for: Computing gradients through layers</p>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Gradient Descent</h2>
            <p className="text-gray-400 mb-4">
                The fundamental optimization algorithm in machine learning. Follow the negative gradient to find the minimum.
            </p>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold">1</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Compute Gradient</div>
                            <div className="text-sm text-gray-400">Calculate ∇L (gradient of loss function)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold">2</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Update Parameters</div>
                            <div className="text-sm text-gray-400">θ = θ - α·∇L (move opposite to gradient)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold">3</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Repeat</div>
                            <div className="text-sm text-gray-400">Until convergence (gradient ≈ 0)</div>
                        </div>
                    </div>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# Simple gradient descent example
# Minimize f(x) = (x - 3)^2

def f(x):
    return (x - 3)**2

def gradient(x):
    return 2 * (x - 3)

# Gradient descent
x = 0  # starting point
learning_rate = 0.1
iterations = 10

print("Iteration | x      | f(x)   | gradient")
print("-" * 45)

for i in range(iterations):
    grad = gradient(x)
    x = x - learning_rate * grad
    print(f"{i:9} | {x:6.3f} | {f(x):6.3f} | {grad:8.3f}")

print(f"\\nOptimal x: {x:.3f} (should be close to 3.0)")`}
                expectedOutput={`Iteration | x      | f(x)   | gradient
---------------------------------------------
        0 |  0.600 |  5.760 |   -6.000
        1 |  1.080 |  3.686 |   -4.800
        2 |  1.464 |  2.359 |   -3.840
        3 |  1.771 |  1.510 |   -3.072
        4 |  2.017 |  0.966 |   -2.458
        5 |  2.214 |  0.618 |   -1.966
        6 |  2.371 |  0.396 |   -1.573
        7 |  2.497 |  0.253 |   -1.258
        8 |  2.597 |  0.162 |   -1.007
        9 |  2.678 |  0.104 |   -0.805

Optimal x: 2.678 (should be close to 3.0)`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Advanced Concepts</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Jacobian Matrix</h3>
                    <p className="text-gray-400 mb-3">
                        Matrix of all first-order partial derivatives. Maps how a vector-valued function changes.
                    </p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        J = [∂f₁/∂x₁  ∂f₁/∂x₂]<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;[∂f₂/∂x₁  ∂f₂/∂x₂]
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Used in: Backpropagation, transformations</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Hessian Matrix</h3>
                    <p className="text-gray-400 mb-3">
                        Matrix of second-order partial derivatives. Describes curvature of the loss surface.
                    </p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        H = [∂²f/∂x₁²   ∂²f/∂x₁∂x₂]<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;[∂²f/∂x₂∂x₁  ∂²f/∂x₂²]
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Used in: Second-order optimization (Newton's method)</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">AI Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Backpropagation", desc: "Chain rule to compute gradients through network layers" },
                    { title: "Gradient Descent", desc: "Optimize model parameters to minimize loss" },
                    { title: "Learning Rate Scheduling", desc: "Adjust step size based on gradient behavior" },
                    { title: "Momentum", desc: "Use gradient history to accelerate convergence" },
                    { title: "Adam Optimizer", desc: "Adaptive learning rates using gradient moments" },
                    { title: "Loss Functions", desc: "Derivatives tell us how to reduce error" },
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

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Calculus enables learning. Every weight update in a neural network is guided by derivatives computed through backpropagation.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/linear-algebra">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/probability-statistics">
                    <Button className="gap-2">
                        Next: Probability & Statistics <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
