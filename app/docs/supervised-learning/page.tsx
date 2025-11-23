"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SupervisedLearningPage() {
    const algorithms = [
        { name: "Linear Regression", type: "Regression", use: "Predict continuous values", example: "House prices, temperature", color: "blue" },
        { name: "Logistic Regression", type: "Classification", use: "Binary classification", example: "Spam detection", color: "purple" },
        { name: "Decision Trees", type: "Both", use: "Rule-based decisions", example: "Loan approval", color: "green" },
        { name: "Random Forest", type: "Both", use: "Ensemble of trees", example: "Feature importance", color: "yellow" },
        { name: "SVM", type: "Classification", use: "Find optimal boundary", example: "Image classification", color: "red" },
        { name: "k-NN", type: "Both", use: "Similarity-based", example: "Recommendation", color: "cyan" }
    ];

    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-6">
                Supervised Learning
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Supervised learning is learning from labeled examples. You show the model input-output pairs, and it learns to map inputs to outputs.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Key Idea:</strong> Learn a function f(x) = y from labeled training data, then use it to predict y for new x values.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Two Main Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-8 rounded-xl border-2 border-blue-500/30">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Regression</h3>
                    <p className="text-gray-400 mb-4">Predict continuous numerical values.</p>
                    <div className="bg-black/40 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-300 mb-2">Examples:</div>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>House price: $350,000</li>
                            <li>Stock price: $142.50</li>
                            <li>Temperature: 23.5°C</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-8 rounded-xl border-2 border-purple-500/30">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Classification</h3>
                    <p className="text-gray-400 mb-4">Predict discrete categories or classes.</p>
                    <div className="bg-black/40 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-300 mb-2">Examples:</div>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>Email: Spam or Not Spam</li>
                            <li>Image: Cat, Dog, or Bird</li>
                            <li>Sentiment: Positive or Negative</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular Algorithms</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {algorithms.map((algo, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform">
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-bold text-white">{algo.name}</h3>
                            <span className={`px-2 py-1 rounded text-xs bg-${algo.color}-500/20 text-${algo.color}-400`}>{algo.type}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{algo.use}</p>
                        <div className="text-xs text-gray-500">Example: {algo.example}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Supervised learning requires labeled data. The model learns from examples and generalizes to new, unseen data.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/feature-engineering">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/unsupervised-learning">
                    <Button className="gap-2">
                        Next: Unsupervised Learning <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
