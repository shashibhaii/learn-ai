"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function FineTuningPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Fine-tuning LLMs</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Fine-tuning adapts a pre-trained language model to your specific use case by training it on domain-specific data. It's more powerful than prompt engineering for specialized tasks.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">When to Fine-tune</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Good Use Cases</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Domain-specific language (legal, medical)</li>
                        <li>Consistent style/tone</li>
                        <li>Structured output formats</li>
                        <li>Better performance on specific tasks</li>
                    </ul>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-red-400">
                    <h3 className="text-lg font-bold text-red-400 mb-3">When NOT to Fine-tune</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Limited training data (&lt;100 examples)</li>
                        <li>Prompt engineering works well</li>
                        <li>Need frequent updates</li>
                        <li>General knowledge tasks</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Fine-tuning Methods</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Full Fine-tuning</h3>
                    <p className="text-sm text-gray-400">Update all model parameters. Most effective but expensive.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">LoRA (Low-Rank Adaptation)</h3>
                    <p className="text-sm text-gray-400">Freeze base model, train small adapter layers. 90% less memory!</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-2">QLoRA</h3>
                    <p className="text-sm text-gray-400">LoRA + quantization. Fine-tune 70B models on consumer GPUs.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Training Data Format</h3>
            <p className="text-gray-400 mb-4">
                Typical format for instruction fine-tuning (JSONL).
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import json

# Training example format
training_examples = [
    {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "What is Python?"},
            {"role": "assistant", "content": "Python is a high-level programming language..."}
        ]
    },
    {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Explain loops"},
            {"role": "assistant", "content": "Loops allow you to repeat code..."}
        ]
    }
]

# Save as JSONL
with open("training_data.jsonl", "w") as f:
    for example in training_examples:
        f.write(json.dumps(example) + "\\n")

print(f"Created {len(training_examples)} training examples")`}
                expectedOutput={`Created 2 training examples`}
            />

            <div className="bg-white/5 border-l-4 border-neon-purple p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Pro Tip:</strong> Start with 50-100 high-quality examples. Quality &gt; Quantity!
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/prompt-engineering">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/llm-evaluation">
                    <Button className="gap-2">
                        Next: LLM Evaluation <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
