"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function IntroToAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Introduction to AI</h1>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Artificial Intelligence (AI)</strong> is the simulation of human intelligence processes by machines, especially computer systems.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">What is AI?</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
                At its core, AI is about creating systems that can perform tasks that typically require human intelligence. These tasks include things like recognizing speech, making decisions, translating languages, and identifying patterns.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">A Simple Example</h3>
            <p className="text-gray-400 mb-4">
                Let's look at a very basic example of "intelligence" in code. A simple rule-based system can make decisions based on inputs.
                Try running the Python code below:
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`def greet_user(name, time_of_day):
    if time_of_day < 12:
        return f"Good morning, {name}!"
    elif time_of_day < 18:
        return f"Good afternoon, {name}!"
    else:
        return f"Good evening, {name}!"

# Try changing the time (0-24)
print(greet_user("Alice", 10))
print(greet_user("Bob", 15))
print(greet_user("Charlie", 20))`}
                expectedOutput={`Good morning, Alice!
Good afternoon, Bob!
Good evening, Charlie!`}
            />

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Key Concepts</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
                <li><strong>Machine Learning (ML):</strong> A subset of AI where computers learn from data without being explicitly programmed.</li>
                <li><strong>Deep Learning (DL):</strong> A subset of ML based on artificial neural networks.</li>
                <li><strong>Natural Language Processing (NLP):</strong> Enabling computers to understand and process human language.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Your First Neural Network</h3>
            <p className="text-gray-400 mb-4">
                Here is a sneak peek at what a simple neuron looks like in code. We will cover this in depth in later chapters.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# A single neuron
inputs = [1.2, 2.2, 3.3]
weights = [0.4, 0.5, -0.6]
bias = 2.0

output = (inputs[0]*weights[0] + 
          inputs[1]*weights[1] + 
          inputs[2]*weights[2] + bias)

print(f"Neuron Output: {output}")`}
                expectedOutput={`Neuron Output: 2.6`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <div />
                <Link href="/docs/what-is-ml">
                    <Button className="gap-2">
                        Next: What is Machine Learning? <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
