"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function HyperparametersPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Hyperparameter Tuning</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Hyperparameters are configuration settings that control the learning process. Unlike model parameters (weights), they're set before training begins. Finding the right combination can dramatically improve performance.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Key Hyperparameters</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Learning Rate</h3>
                    <p className="text-sm text-gray-400 mb-2">Most important! Controls step size during optimization.</p>
                    <p className="text-xs text-gray-500">Typical range: 1e-5 to 1e-1</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Batch Size</h3>
                    <p className="text-sm text-gray-400 mb-2">Number of samples per gradient update.</p>
                    <p className="text-xs text-gray-500">Common: 32, 64, 128, 256</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Network Architecture</h3>
                    <p className="text-sm text-gray-400 mb-2">Number of layers, neurons per layer, activation functions.</p>
                    <p className="text-xs text-gray-500">Start simple, add complexity</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Regularization</h3>
                    <p className="text-sm text-gray-400 mb-2">Dropout rate, weight decay, L1/L2 penalties.</p>
                    <p className="text-xs text-gray-500">Prevents overfitting</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Tuning Strategies</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-400">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">1. Manual Tuning</h3>
                    <p className="text-sm text-gray-400">Change one parameter at a time. Good for understanding but time-consuming.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-400">
                    <h3 className="text-lg font-bold text-blue-400 mb-2">2. Grid Search</h3>
                    <p className="text-sm text-gray-400">Try all combinations of predefined values. Exhaustive but expensive.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-green-400 mb-2">3. Random Search</h3>
                    <p className="text-sm text-gray-400">Sample random combinations. Often better than grid search with same budget.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-purple">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">4. Bayesian Optimization</h3>
                    <p className="text-sm text-gray-400">Intelligently samples based on past results. Most efficient for expensive models.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Grid Search Example</h3>
            <p className="text-gray-400 mb-4">
                This shows how grid search explores hyperparameter combinations.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import itertools

# Define hyperparameter grid
learning_rates = [0.001, 0.01, 0.1]
batch_sizes = [32, 64]
dropout_rates = [0.2, 0.5]

# Generate all combinations
grid = list(itertools.product(
    learning_rates, 
    batch_sizes, 
    dropout_rates
))

print(f"Total combinations to try: {len(grid)}\\n")

# Simulate trying each combination
best_score = 0
best_params = None

for lr, bs, dr in grid[:3]:  # Show first 3
    # Simulate training (random score)
    score = 0.85 + (lr * 0.1) - (dr * 0.05)
    print(f"LR={lr}, BS={bs}, Dropout={dr}")
    print(f"  Validation Score: {score:.3f}")
    
    if score > best_score:
        best_score = score
        best_params = (lr, bs, dr)

print(f"\\nBest: LR={best_params[0]}, BS={best_params[1]}, Dropout={best_params[2]}")`}
                expectedOutput={`Total combinations to try: 12

LR=0.001, BS=32, Dropout=0.2
  Validation Score: 0.840
LR=0.001, BS=64, Dropout=0.2
  Validation Score: 0.840
LR=0.001, BS=32, Dropout=0.5
  Validation Score: 0.825

Best: LR=0.001, BS=32, Dropout=0.2`}
            />

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Pro Tip:</strong> Use coarse-to-fine search. Start with wide ranges, then zoom in on promising regions.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/training-tips">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/deployment">
                    <Button className="gap-2">
                        Next: Deployment <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
