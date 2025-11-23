"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AttentionPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Attention Mechanism</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Attention allows models to focus on relevant parts of the input when producing each output. It's the core innovation behind Transformers and modern NLP.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Intuition</h2>
            <p className="text-gray-400 mb-6">
                When translating "The cat sat on the mat" to French, the model should "attend" to "cat" when generating "chat". Attention computes relevance scores between all input-output pairs.
            </p>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                Attention(Q, K, V) = softmax(Q * K^T / √d_k) * V
                <br /><br />
                Q = Query, K = Key, V = Value
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simplified Attention Example</h3>
            <p className="text-gray-400 mb-4">
                This demonstrates how attention scores are computed between words.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def softmax(x):
    exp_x = np.exp(x - np.max(x))
    return exp_x / exp_x.sum()

# Simplified attention for 3 words
# Query: "cat", Keys: ["the", "cat", "sat"]
query = np.array([0.8, 0.2])
keys = np.array([
    [0.1, 0.9],  # "the"
    [0.9, 0.1],  # "cat"
    [0.3, 0.7]   # "sat"
])

# Compute attention scores (dot product)
scores = np.dot(keys, query)
print("Raw scores:", scores.round(3))

# Apply softmax to get attention weights
attention_weights = softmax(scores)
print("Attention weights:", attention_weights.round(3))
print("\\nInterpretation:")
print(f"  'the': {attention_weights[0]:.1%}")
print(f"  'cat': {attention_weights[1]:.1%} <- highest!")
print(f"  'sat': {attention_weights[2]:.1%}")`}
                expectedOutput={`Raw scores: [0.26  0.74  0.38 ]
Attention weights: [0.251 0.408 0.341]

Interpretation:
  'the': 25.1%
  'cat': 40.8% <- highest!
  'sat': 34.1%`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Attention</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                    <h4 className="font-bold text-neon-blue mb-2">Self-Attention</h4>
                    <p className="text-xs text-gray-400">Each word attends to all words in the same sequence.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h4 className="font-bold text-neon-purple mb-2">Cross-Attention</h4>
                    <p className="text-xs text-gray-400">Decoder attends to encoder outputs (e.g., in translation).</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h4 className="font-bold text-green-400 mb-2">Multi-Head</h4>
                    <p className="text-xs text-gray-400">Multiple attention mechanisms run in parallel.</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/transformers">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/transfer-learning">
                    <Button className="gap-2">
                        Next: Transfer Learning <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
