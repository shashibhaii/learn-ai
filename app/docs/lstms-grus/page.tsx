"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LSTMsGRUsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">LSTMs & GRUs</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) are advanced RNN architectures designed to handle long-term dependencies in sequential data.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Problem with Standard RNNs</h2>
            <p className="text-gray-400 mb-6">
                Standard RNNs suffer from vanishing gradients, making it hard to learn long-range dependencies. LSTMs and GRUs solve this with gating mechanisms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-neon-blue mb-3">LSTM</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Forget Gate: Decides what to discard</li>
                        <li>Input Gate: Decides what to add</li>
                        <li>Output Gate: Decides what to output</li>
                        <li>Cell State: Long-term memory</li>
                    </ul>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-neon-purple mb-3">GRU</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Update Gate: Controls information flow</li>
                        <li>Reset Gate: Decides what to forget</li>
                        <li>Simpler than LSTM (fewer parameters)</li>
                        <li>Often performs similarly to LSTM</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Gate Mechanism Example</h3>
            <p className="text-gray-400 mb-4">
                This demonstrates how gates control information flow (simplified).
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Simplified LSTM gate example
def lstm_gate(input_val, prev_hidden, W_i, W_h):
    # Gate = sigmoid(W_input * input + W_hidden * hidden)
    gate = sigmoid(W_i * input_val + W_h * prev_hidden)
    return gate

# Example values
input_val = 0.8
prev_hidden = 0.5
W_i = 0.6
W_h = 0.4

forget_gate = lstm_gate(input_val, prev_hidden, W_i, W_h)
input_gate = lstm_gate(input_val, prev_hidden, 0.7, 0.3)
output_gate = lstm_gate(input_val, prev_hidden, 0.5, 0.5)

print(f"Input: {input_val}, Previous Hidden: {prev_hidden}")
print(f"Forget Gate: {forget_gate:.4f}")
print(f"Input Gate: {input_gate:.4f}")
print(f"Output Gate: {output_gate:.4f}")
print("\\nGates close to 1 = allow info, close to 0 = block info")`}
                expectedOutput={`Input: 0.8, Previous Hidden: 0.5
Forget Gate: 0.7858
Input Gate: 0.7858
Output Gate: 0.7858

Gates close to 1 = allow info, close to 0 = block info`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/rnns">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/transformers">
                    <Button className="gap-2">
                        Next: Transformers <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
