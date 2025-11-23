"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PerceptronsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Perceptrons</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                A <strong>Perceptron</strong> is the simplest form of a neural network. It consists of a single neuron that takes inputs, weights them, adds a bias, and passes the result through an activation function.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Math</h2>
            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                Output = Activation( (Input1 * Weight1) + (Input2 * Weight2) + ... + Bias )
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Implementing a Perceptron</h3>
            <p className="text-gray-400 mb-4">
                Let's build a simple perceptron that acts as an "AND" gate. It should only output 1 if both inputs are 1.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`def step_function(x):
    return 1 if x >= 0 else 0

def perceptron(input1, input2):
    # Weights and Bias for AND gate
    w1 = 1.0
    w2 = 1.0
    bias = -1.5
    
    weighted_sum = (input1 * w1) + (input2 * w2) + bias
    return step_function(weighted_sum)

# Testing the AND gate
print(f"0 AND 0 = {perceptron(0, 0)}")
print(f"0 AND 1 = {perceptron(0, 1)}")
print(f"1 AND 0 = {perceptron(1, 0)}")
print(f"1 AND 1 = {perceptron(1, 1)}")`}
                expectedOutput={`0 AND 0 = 0
0 AND 1 = 0
1 AND 0 = 0
1 AND 1 = 1`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/pandas-dataframes">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/activation-functions">
                    <Button className="gap-2">
                        Next: Activation Functions <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
