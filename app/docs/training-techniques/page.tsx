"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrainingTechniquesPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Training Techniques
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Training deep neural networks requires more than just choosing a loss and optimizer. These techniques help models train faster, generalize better, and avoid common pitfalls.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Goal:</strong> Train models that generalize well to unseen data, not just memorize training data.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Regularization Techniques</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Dropout</h3>
                    <p className="text-gray-400 mb-3">Randomly drop neurons during training to prevent co-adaptation.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        During training: randomly set neurons to 0 with probability p (typically 0.5)<br />
                        During inference: use all neurons, scale by (1-p)
                    </div>
                    <p className="text-xs text-gray-500">✓ Simple, effective, widely used | Typical: p=0.5 for hidden layers, p=0.2 for input</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">L1/L2 Regularization (Weight Decay)</h3>
                    <p className="text-gray-400 mb-3">Add penalty for large weights to loss function.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        L1: Loss + λ Σ|w| (sparse weights)<br />
                        L2: Loss + λ Σw² (small weights, most common)
                    </div>
                    <p className="text-xs text-gray-500">Prevents overfitting by keeping weights small</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Early Stopping</h3>
                    <p className="text-gray-400 mb-3">Stop training when validation loss stops improving.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Monitor validation loss each epoch<br />
                        Stop if no improvement for N epochs (patience)
                    </div>
                    <p className="text-xs text-gray-500">Simple, effective, prevents overfitting</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Data Augmentation</h3>
                    <p className="text-gray-400 mb-3">Artificially expand training data with transformations.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Images: rotation, flip, crop, color jitter<br />
                        Text: synonym replacement, back-translation<br />
                        Audio: pitch shift, time stretch, noise
                    </div>
                    <p className="text-xs text-gray-500">Increases effective dataset size, improves generalization</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Normalization Techniques</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Batch Normalization</h3>
                    <p className="text-gray-400 mb-3">Normalize activations within each mini-batch.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        For each layer: normalize to mean=0, std=1<br />
                        Then scale and shift with learnable parameters
                    </div>
                    <p className="text-xs text-gray-500">✓ Faster training, higher learning rates, acts as regularization</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Layer Normalization</h3>
                    <p className="text-gray-400 mb-3">Normalize across features (not batch).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Works with any batch size<br />
                        Better for RNNs and transformers
                    </div>
                    <p className="text-xs text-gray-500">Used in: Transformers, language models</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Training Strategies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { title: "Mini-batch Training", desc: "Update weights after small batch (32-256 samples)" },
                    { title: "Learning Rate Warm-up", desc: "Gradually increase LR at start of training" },
                    { title: "Gradient Clipping", desc: "Prevent exploding gradients by capping magnitude" },
                    { title: "Mixed Precision Training", desc: "Use FP16 for speed, FP32 for stability" },
                    { title: "Transfer Learning", desc: "Start with pre-trained weights, fine-tune" },
                    { title: "Curriculum Learning", desc: "Train on easy examples first, then harder ones" },
                ].map((strategy, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{strategy.title}</div>
                        <div className="text-sm text-gray-400">{strategy.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Debugging Training</h2>

            <div className="space-y-3 mb-8">
                {[
                    { problem: "Loss not decreasing", solution: "Check learning rate, verify data loading, check gradients" },
                    { problem: "Loss exploding (NaN)", solution: "Lower learning rate, use gradient clipping, check for bugs" },
                    { problem: "Overfitting", solution: "Add dropout, use data augmentation, get more data" },
                    { problem: "Underfitting", solution: "Increase model capacity, train longer, reduce regularization" },
                    { problem: "Slow convergence", solution: "Increase learning rate, use batch normalization, check initialization" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-red-400 mb-1">⚠️ {item.problem}</div>
                        <div className="text-sm text-gray-300">→ {item.solution}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Always shuffle training data",
                    "Use batch normalization after conv/dense layers",
                    "Apply dropout before final layers",
                    "Monitor both training and validation metrics",
                    "Save checkpoints regularly",
                    "Use early stopping to prevent overfitting",
                    "Visualize training curves (loss, accuracy)",
                    "Start with small learning rate, increase if stable",
                ].map((practice, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-gray-300 text-sm">{practice}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Successful training combines regularization (dropout, weight decay), normalization (batch norm), and smart strategies (early stopping, data augmentation). Monitor metrics and iterate!
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/loss-optimizers">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/image-classification">
                    <Button className="gap-2">
                        Next: Image Classification <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
