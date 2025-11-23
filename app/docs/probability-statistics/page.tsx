"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProbabilityStatisticsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Probability & Statistics
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Probability and statistics are the foundation of machine learning. ML models learn patterns from data, quantify uncertainty, and make probabilistic predictions.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Why it matters:</strong> Every ML prediction is probabilistic. Understanding distributions, variance, and statistical inference is essential for building robust models.
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
                    <h3 className="text-xl font-bold text-neon-blue mb-3">Random Variable</h3>
                    <p className="text-gray-400 mb-3">A variable whose value is determined by chance.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        X = outcome of dice roll<br />
                        X ∈ {1, 2, 3, 4, 5, 6}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Discrete or continuous values</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-neon-purple mb-3">Probability Distribution</h3>
                    <p className="text-gray-400 mb-3">Describes how probabilities are distributed over values.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        P(X = x) for discrete<br />
                        f(x) for continuous
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Sum/integral equals 1</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-green-400 mb-3">Expected Value (Mean)</h3>
                    <p className="text-gray-400 mb-3">Average value weighted by probability.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        E[X] = Σ x·P(x)<br />
                        μ = mean
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Center of distribution</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Variance & Std Dev</h3>
                    <p className="text-gray-400 mb-3">Measure of spread around the mean.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Var(X) = E[(X - μ)²]<br />
                        σ = √Var(X)
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Quantifies uncertainty</p>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Common Distributions</h2>

            <div className="space-y-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-blue-500"
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-blue-400">Normal (Gaussian)</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Continuous</span>
                    </div>
                    <p className="text-gray-400 mb-2">Bell curve. Most common in nature and ML.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        N(μ, σ²) - defined by mean and variance
                    </div>
                    <p className="text-xs text-gray-500">Used in: Gaussian processes, noise modeling, initialization</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-purple-500"
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-purple-400">Bernoulli</h3>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Discrete</span>
                    </div>
                    <p className="text-gray-400 mb-2">Binary outcome: success (1) or failure (0).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        P(X = 1) = p, P(X = 0) = 1-p
                    </div>
                    <p className="text-xs text-gray-500">Used in: Binary classification, coin flips</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-green-500"
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-green-400">Uniform</h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs">Both</span>
                    </div>
                    <p className="text-gray-400 mb-2">All outcomes equally likely.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        P(X = x) = 1/n for all x
                    </div>
                    <p className="text-xs text-gray-500">Used in: Random initialization, sampling</p>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Bayes' Theorem</h2>
            <p className="text-gray-400 mb-4">
                The foundation of probabilistic reasoning. Update beliefs based on evidence.
            </p>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="text-center mb-6">
                    <div className="text-2xl text-neon-blue font-mono">
                        P(A|B) = P(B|A) · P(A) / P(B)
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div><strong className="text-neon-blue">P(A|B):</strong> Posterior (updated belief)</div>
                    <div><strong className="text-neon-purple">P(B|A):</strong> Likelihood (evidence)</div>
                    <div><strong className="text-green-400">P(A):</strong> Prior (initial belief)</div>
                    <div><strong className="text-yellow-400">P(B):</strong> Marginal (normalization)</div>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# Bayes Theorem Example: Medical Test
# Disease prevalence: 1%
# Test accuracy: 95% (true positive rate)
# False positive rate: 5%

# Prior probability of disease
P_disease = 0.01
P_no_disease = 0.99

# Likelihood of positive test
P_pos_given_disease = 0.95
P_pos_given_no_disease = 0.05

# Total probability of positive test
P_positive = (P_pos_given_disease * P_disease + 
              P_pos_given_no_disease * P_no_disease)

# Bayes theorem: P(disease | positive test)
P_disease_given_pos = (P_pos_given_disease * P_disease) / P_positive

print("Medical Test Analysis")
print("-" * 40)
print(f"Disease prevalence: {P_disease*100}%")
print(f"Test accuracy: {P_pos_given_disease*100}%")
print(f"\\nIf test is POSITIVE:")
print(f"Probability of disease: {P_disease_given_pos*100:.1f}%")
print(f"\\nSurprising? Most positives are false positives!")
print(f"because disease is rare.")`}
                expectedOutput={`Medical Test Analysis
----------------------------------------
Disease prevalence: 1.0%
Test accuracy: 95.0%

If test is POSITIVE:
Probability of disease: 16.1%

Surprising? Most positives are false positives!
because disease is rare.`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Statistical Concepts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Sampling", desc: "Draw subset from population to estimate properties" },
                    { title: "Hypothesis Testing", desc: "Test if observed effect is statistically significant" },
                    { title: "Confidence Intervals", desc: "Range likely to contain true parameter" },
                    { title: "P-value", desc: "Probability of observing data if null hypothesis is true" },
                    { title: "Correlation", desc: "Measure of linear relationship between variables" },
                    { title: "Regression", desc: "Model relationship between dependent and independent variables" },
                ].map((concept, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{concept.title}</div>
                        <div className="text-sm text-gray-400">{concept.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">AI Applications</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Naive Bayes classifier uses Bayes' theorem",
                    "Gaussian distributions for weight initialization",
                    "Maximum Likelihood Estimation for parameter learning",
                    "Bayesian inference for uncertainty quantification",
                    "Statistical tests for model comparison",
                    "Probability distributions in generative models",
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">▹</span>
                        <span className="text-gray-300 text-sm">{app}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> ML is fundamentally probabilistic. Models learn probability distributions, make probabilistic predictions, and quantify uncertainty.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/calculus-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/discrete-math">
                    <Button className="gap-2">
                        Next: Discrete Mathematics <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
