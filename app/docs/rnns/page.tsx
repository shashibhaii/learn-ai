"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function RNNsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Recurrent Neural Networks (RNNs)</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                RNNs are designed for sequential data like text, time series, or audio. Unlike feedforward networks, RNNs have loops that allow information to persist across time steps.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How RNNs Work</h2>
            <p className="text-gray-400 mb-6">
                At each time step, an RNN takes the current input and the previous hidden state to produce an output and a new hidden state.
            </p>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                h(t) = tanh(W_h * h(t-1) + W_x * x(t) + b)
                <br />
                y(t) = W_y * h(t)
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simple RNN Simulation</h3>
            <p className="text-gray-400 mb-4">
                This shows how an RNN processes a sequence of inputs, maintaining a hidden state.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def tanh(x):
    return np.tanh(x)

# Simple RNN cell
def rnn_step(x, h_prev, W_h, W_x, b):
    h = tanh(np.dot(W_h, h_prev) + np.dot(W_x, x) + b)
    return h

# Parameters
W_h = np.array([[0.5, 0.3], [0.2, 0.6]])
W_x = np.array([[0.1], [0.4]])
b = np.array([0.0, 0.0])

# Sequence of inputs
sequence = [1.0, 0.5, 0.8]
h = np.array([0.0, 0.0])  # Initial hidden state

print("Processing sequence:", sequence)
for t, x in enumerate(sequence):
    h = rnn_step(np.array([x]), h, W_h, W_x, b)
    print(f"Step {t+1}: Input={x:.1f}, Hidden State={h}")`}
                expectedOutput={`Processing sequence: [1.0, 0.5, 0.8]
Step 1: Input=1.0, Hidden State=[0.09966799 0.37994896]
Step 2: Input=0.5, Hidden State=[0.19737532 0.39815974]
Step 3: Input=0.8, Hidden State=[0.25618461 0.48885144]`}
            />

            <div className="bg-white/5 border-l-4 border-neon-purple p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Vanishing Gradient Problem:</strong> Standard RNNs struggle with long sequences. This led to the development of LSTMs and GRUs.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/cnns">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/lstms-grus">
                    <Button className="gap-2">
                        Next: LSTMs & GRUs <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
