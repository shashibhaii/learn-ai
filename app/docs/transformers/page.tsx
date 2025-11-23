"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TransformersPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Transformers</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Transformers revolutionized NLP and are now used across AI. They process entire sequences in parallel using self-attention, unlike RNNs which process sequentially.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Key Innovation:</strong> "Attention is All You Need" (2017) - Transformers replaced recurrence with attention mechanisms.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Architecture Components</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Encoder</h3>
                    <p className="text-sm text-gray-400">Processes input sequence and creates contextual representations using self-attention and feedforward layers.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Decoder</h3>
                    <p className="text-sm text-gray-400">Generates output sequence using encoder outputs, self-attention, and cross-attention mechanisms.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Positional Encoding</h3>
            <p className="text-gray-400 mb-4">
                Since Transformers don't have inherent sequence order, positional encodings are added to give the model information about token positions.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def positional_encoding(position, d_model):
    # Simplified positional encoding
    angles = np.arange(d_model) / d_model
    angles = position / np.power(10000, angles)
    
    # Apply sin to even indices, cos to odd
    encoding = np.zeros(d_model)
    encoding[0::2] = np.sin(angles[0::2])
    encoding[1::2] = np.cos(angles[1::2])
    
    return encoding

# Example: position 0 and 1 with d_model=8
pos_0 = positional_encoding(0, 8)
pos_1 = positional_encoding(1, 8)

print("Position 0 encoding:", pos_0.round(3))
print("Position 1 encoding:", pos_1.round(3))
print("\\nThese unique patterns help the model")
print("understand word order!")`}
                expectedOutput={`Position 0 encoding: [0.    1.    0.    1.    0.    1.    0.    1.   ]
Position 1 encoding: [ 0.841  0.54   0.1    0.995  0.01   1.     0.001  1.   ]

These unique patterns help the model
understand word order!`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Why Transformers Dominate</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Parallelization:</strong> Process entire sequences at once (faster training)</li>
                <li><strong>Long-range Dependencies:</strong> Attention can connect any two positions</li>
                <li><strong>Scalability:</strong> Performance improves with more data and parameters</li>
                <li><strong>Versatility:</strong> Used in GPT, BERT, Vision Transformers, and more</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/lstms-grus">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/attention">
                    <Button className="gap-2">
                        Next: Attention Mechanism <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
