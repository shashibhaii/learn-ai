"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BackpropagationPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Backpropagation</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Backpropagation is the algorithm used to train neural networks. It calculates the gradient of the loss function with respect to the weights, allowing us to update the weights to minimize error.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How it Works</h2>
            <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Forward Pass:</strong> Input data flows through the network to generate a prediction.</li>
                <li><strong>Calculate Error:</strong> Compare prediction with actual target (Loss).</li>
                <li><strong>Backward Pass:</strong> Propagate the error backwards to calculate gradients.</li>
                <li><strong>Update Weights:</strong> Adjust weights using Gradient Descent.</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simulating Weight Updates</h3>
            <p className="text-gray-400 mb-4">
                This is a simplified view of how a single weight gets updated to reduce error.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Simple Gradient Descent Step
weight = 0.5
goal_prediction = 0.8
input_val = 2.0
learning_rate = 0.1

for i in range(5):
    prediction = input_val * weight
    error = (prediction - goal_prediction) ** 2
    
    # Derivative of error w.r.t weight (simplified)
    delta = prediction - goal_prediction
    weight_delta = delta * input_val
    
    # Update weight
    weight = weight - (learning_rate * weight_delta)
    
    print(f"Step {i+1}: Pred={prediction:.2f}, Error={error:.4f}, New Weight={weight:.2f}")`}
                expectedOutput={`Step 1: Pred=1.00, Error=0.0400, New Weight=0.46
Step 2: Pred=0.92, Error=0.0144, New Weight=0.44
Step 3: Pred=0.87, Error=0.0052, New Weight=0.42
Step 4: Pred=0.84, Error=0.0019, New Weight=0.41
Step 5: Pred=0.83, Error=0.0007, New Weight=0.41`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/activation-functions">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/courses">
                    <Button className="gap-2">
                        Start a Course <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
