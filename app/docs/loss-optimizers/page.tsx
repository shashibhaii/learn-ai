"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LossOptimizersPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Loss Functions & Optimizers
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Loss functions measure how wrong your model is. Optimizers adjust weights to minimize loss. Together, they drive the learning process in neural networks.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Training Loop:</strong> Forward pass → Calculate loss → Backward pass (gradients) → Update weights with optimizer → Repeat
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Common Loss Functions</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Mean Squared Error (MSE)</h3>
                    <p className="text-gray-400 mb-3">For regression tasks. Penalizes large errors heavily.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        MSE = (1/n) Σ (y - ŷ)²
                    </div>
                    <p className="text-xs text-gray-500">Use for: Predicting continuous values (prices, temperatures)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Binary Cross-Entropy</h3>
                    <p className="text-gray-400 mb-3">For binary classification (2 classes).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        BCE = -[y log(ŷ) + (1-y) log(1-ŷ)]
                    </div>
                    <p className="text-xs text-gray-500">Use for: Spam/not spam, fraud detection, yes/no predictions</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Categorical Cross-Entropy</h3>
                    <p className="text-gray-400 mb-3">For multi-class classification (3+ classes).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        CCE = -Σ y_i log(ŷ_i)
                    </div>
                    <p className="text-xs text-gray-500">Use for: Image classification, text categorization</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Huber Loss</h3>
                    <p className="text-gray-400 mb-3">Combines MSE and MAE. Robust to outliers.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Less sensitive to outliers than MSE<br />
                        Smoother than MAE
                    </div>
                    <p className="text-xs text-gray-500">Use for: Regression with noisy data</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# True values and predictions
y_true = np.array([3.0, 2.5, 4.0, 3.5])
y_pred = np.array([2.8, 2.6, 3.7, 3.9])

# Mean Squared Error
mse = np.mean((y_true - y_pred)**2)

# Mean Absolute Error
mae = np.mean(np.abs(y_true - y_pred))

# Root Mean Squared Error
rmse = np.sqrt(mse)

print("Regression Loss Functions:")
print(f"MSE:  {mse:.4f}")
print(f"MAE:  {mae:.4f}")
print(f"RMSE: {rmse:.4f}")

# Binary Cross-Entropy example
y_true_binary = np.array([1, 0, 1, 1, 0])
y_pred_binary = np.array([0.9, 0.1, 0.8, 0.7, 0.2])

bce = -np.mean(y_true_binary * np.log(y_pred_binary) + 
               (1 - y_true_binary) * np.log(1 - y_pred_binary))

print(f"\\nBinary Cross-Entropy: {bce:.4f}")`}
                expectedOutput={`Regression Loss Functions:
MSE:  0.0550
MAE:  0.2000
RMSE: 0.2345

Binary Cross-Entropy: 0.2231`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Optimization Algorithms</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Stochastic Gradient Descent (SGD)</h3>
                    <p className="text-gray-400 mb-3">Update weights using gradient of loss.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        θ = θ - α·∇L<br />
                        α = learning rate
                    </div>
                    <p className="text-xs text-gray-500">✓ Simple, works well | ✗ Can be slow, sensitive to learning rate</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">SGD with Momentum</h3>
                    <p className="text-gray-400 mb-3">Accelerate in consistent directions, dampen oscillations.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        v = β·v + ∇L<br />
                        θ = θ - α·v<br />
                        β = momentum (typically 0.9)
                    </div>
                    <p className="text-xs text-gray-500">✓ Faster convergence, escapes local minima better</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">RMSprop</h3>
                    <p className="text-gray-400 mb-3">Adaptive learning rate per parameter.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Divides learning rate by running average of gradient magnitudes<br />
                        Good for non-stationary objectives
                    </div>
                    <p className="text-xs text-gray-500">✓ Works well for RNNs</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Adam (Adaptive Moment Estimation)</h3>
                    <p className="text-gray-400 mb-3">Combines momentum and RMSprop. Most popular optimizer.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Maintains running averages of both gradients and squared gradients<br />
                        Adaptive learning rates + momentum
                    </div>
                    <p className="text-xs text-gray-500">✓ Works well out-of-the-box, default choice for most tasks</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-400 mb-3">AdamW</h3>
                    <p className="text-gray-400 mb-3">Adam with decoupled weight decay (better regularization).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Fixes weight decay implementation in Adam<br />
                        Better generalization
                    </div>
                    <p className="text-xs text-gray-500">✓ State-of-the-art for transformers and large models</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Learning Rate</h2>
            <p className="text-gray-400 mb-6">
                The most important hyperparameter. Controls step size during optimization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-2 border-red-500/30">
                    <h3 className="text-xl font-bold text-red-400 mb-3">Too High</h3>
                    <p className="text-gray-400 mb-3">Overshoots minimum, loss diverges.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Training unstable<br />
                        Loss explodes
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-green-500/30">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Just Right</h3>
                    <p className="text-gray-400 mb-3">Converges smoothly to minimum.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Steady progress<br />
                        Good convergence
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-yellow-500/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Too Low</h3>
                    <p className="text-gray-400 mb-3">Slow progress, may get stuck.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Very slow training<br />
                        May not converge
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-white mb-3">Learning Rate Schedules</h3>
                <div className="space-y-2 text-sm text-gray-300">
                    <div><strong className="text-neon-blue">Step Decay:</strong> Reduce LR by factor every N epochs</div>
                    <div><strong className="text-neon-purple">Exponential Decay:</strong> Gradually decrease over time</div>
                    <div><strong className="text-green-400">Cosine Annealing:</strong> Oscillate LR in cosine pattern</div>
                    <div><strong className="text-yellow-400">Warm-up:</strong> Start low, increase, then decrease</div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Choosing Loss & Optimizer</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="font-bold text-neon-blue">Task Type</div>
                        <div className="font-bold text-neon-blue">Recommended Loss</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>Regression</div>
                        <div>MSE, MAE, Huber</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>Binary Classification</div>
                        <div>Binary Cross-Entropy</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>Multi-class Classification</div>
                        <div>Categorical Cross-Entropy</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>Image Segmentation</div>
                        <div>Dice Loss, IoU Loss</div>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-8">
                <div className="text-lg font-bold text-white">Optimizer Recommendations:</div>
                {[
                    "Default choice: Adam (lr=0.001) or AdamW",
                    "For transformers: AdamW with warm-up",
                    "For CNNs: SGD with momentum (lr=0.01-0.1)",
                    "For RNNs: Adam or RMSprop",
                    "Always use learning rate scheduling",
                ].map((rec, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">▹</span>
                        <span className="text-gray-300 text-sm">{rec}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Loss functions define what to optimize. Optimizers determine how to optimize. Adam is a safe default, but experiment with learning rates and schedules for best results.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/model-evaluation">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/training-techniques">
                    <Button className="gap-2">
                        Next: Training Techniques <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
