"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TrainingTipsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Model Training Tips</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Training deep learning models is both an art and a science. Here are battle-tested tips to improve your training process and achieve better results.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Preparation</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">1. Normalize Your Inputs</h3>
                    <p className="text-sm text-gray-400 mb-2">Scale features to similar ranges (e.g., 0-1 or mean=0, std=1)</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded">X = (X - mean) / std</code>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">2. Data Augmentation</h3>
                    <p className="text-sm text-gray-400">For images: rotation, flipping, cropping. For text: back-translation, synonym replacement.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">3. Handle Class Imbalance</h3>
                    <p className="text-sm text-gray-400">Use weighted loss, oversampling, or SMOTE for minority classes.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Training Strategies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Learning Rate Schedule</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Start with 1e-3 or 1e-4</li>
                        <li>Use warmup for first few epochs</li>
                        <li>Decay with cosine annealing</li>
                        <li>Try learning rate finder</li>
                    </ul>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Batch Size</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Larger = faster, more stable</li>
                        <li>Smaller = better generalization</li>
                        <li>Use gradient accumulation if GPU limited</li>
                        <li>Typical: 32, 64, 128, 256</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Regularization Techniques</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Dropout</h3>
                    <p className="text-sm text-gray-400">Randomly drop neurons during training. Typical: 0.2-0.5</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-400">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Early Stopping</h3>
                    <p className="text-sm text-gray-400">Stop training when validation loss stops improving. Patience: 5-10 epochs.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-400">
                    <h3 className="text-lg font-bold text-blue-400 mb-2">Weight Decay (L2)</h3>
                    <p className="text-sm text-gray-400">Penalize large weights. Typical: 1e-4 to 1e-2</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Debugging Tips</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <ul className="space-y-3 text-sm text-gray-300">
                    <li>✓ <strong>Overfit on small batch first</strong> - If you can't overfit, model/data has issues</li>
                    <li>✓ <strong>Monitor gradients</strong> - Check for vanishing/exploding gradients</li>
                    <li>✓ <strong>Visualize predictions</strong> - Look at what the model is actually predicting</li>
                    <li>✓ <strong>Check data pipeline</strong> - Ensure labels match inputs correctly</li>
                    <li>✓ <strong>Use tensorboard/wandb</strong> - Track metrics in real-time</li>
                </ul>
            </div>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Golden Rule:</strong> Start simple, get it working, then add complexity. Don't optimize prematurely!
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/diffusion-models">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/hyperparameters">
                    <Button className="gap-2">
                        Next: Hyperparameter Tuning <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
