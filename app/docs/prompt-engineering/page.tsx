"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PromptEngineeringPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Prompt Engineering</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Prompt engineering is the art and science of crafting inputs to get the best outputs from Large Language Models. It's become a critical skill in the age of GPT, Claude, and other LLMs.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Key Principle:</strong> Clear, specific prompts with context and examples yield better results than vague requests.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Core Techniques</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">1. Zero-Shot Prompting</h3>
                    <p className="text-sm text-gray-400 mb-2">Direct instruction without examples.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        "Translate this to French: Hello, how are you?"
                    </code>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">2. Few-Shot Prompting</h3>
                    <p className="text-sm text-gray-400 mb-2">Provide examples to guide the model.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        "Positive: Great product!<br />Negative: Terrible service.<br />Classify: The food was amazing!"
                    </code>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">3. Chain-of-Thought (CoT)</h3>
                    <p className="text-sm text-gray-400 mb-2">Ask the model to explain its reasoning step-by-step.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        "Let's think step by step: What is 15% of 80?"
                    </code>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Prompt Template Example</h3>
            <p className="text-gray-400 mb-4">
                A well-structured prompt template for consistent results.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Structured Prompt Template
def create_prompt(role, task, context, format):
    template = f"""
Role: {role}
Task: {task}
Context: {context}
Output Format: {format}
"""
    return template

# Example usage
prompt = create_prompt(
    role="You are a Python expert",
    task="Explain list comprehensions",
    context="For a beginner programmer",
    format="Simple explanation with one example"
)

print(prompt)`}
                expectedOutput={`
Role: You are a Python expert
Task: Explain list comprehensions
Context: For a beginner programmer
Output Format: Simple explanation with one example
`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Best Practices</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Be Specific:</strong> "Write a 200-word blog intro" vs "Write something"</li>
                <li><strong>Set Context:</strong> Define role, audience, and constraints</li>
                <li><strong>Use Delimiters:</strong> Triple quotes, XML tags, or markdown to separate sections</li>
                <li><strong>Iterate:</strong> Refine prompts based on outputs</li>
                <li><strong>Temperature Control:</strong> Lower (0.2) for factual, higher (0.8) for creative</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/deployment">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/fine-tuning">
                    <Button className="gap-2">
                        Next: Fine-tuning LLMs <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
