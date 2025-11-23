"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LLMEvaluationPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">LLM Evaluation</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Evaluating LLMs is challenging because outputs are subjective and open-ended. Here are the key metrics and methods used in practice.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Evaluation Metrics</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Perplexity</h3>
                    <p className="text-sm text-gray-400 mb-2">Measures how well the model predicts text. Lower is better.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded">PPL = exp(average negative log-likelihood)</code>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">BLEU Score</h3>
                    <p className="text-sm text-gray-400">Compares generated text to reference translations. Used for MT tasks.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">ROUGE Score</h3>
                    <p className="text-sm text-gray-400">Measures overlap with reference summaries. Used for summarization.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">Human Evaluation</h3>
                    <p className="text-sm text-gray-400">Gold standard. Rate outputs on helpfulness, accuracy, safety.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Benchmark Datasets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">MMLU</h3>
                    <p className="text-sm text-gray-400">Massive Multitask Language Understanding. 57 subjects from elementary to professional.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">HumanEval</h3>
                    <p className="text-sm text-gray-400">Code generation benchmark. 164 programming problems.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">TruthfulQA</h3>
                    <p className="text-sm text-gray-400">Tests if models generate truthful answers to questions.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">MT-Bench</h3>
                    <p className="text-sm text-gray-400">Multi-turn conversation benchmark. Tests instruction following.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">LLM-as-Judge</h2>
            <p className="text-gray-400 mb-6">
                Use a powerful LLM (like GPT-4) to evaluate other models' outputs. Fast and scalable alternative to human eval.
            </p>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <h4 className="text-md font-bold text-white mb-3">Evaluation Criteria</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>✓ <strong>Relevance:</strong> Does it answer the question?</li>
                    <li>✓ <strong>Accuracy:</strong> Is the information correct?</li>
                    <li>✓ <strong>Coherence:</strong> Is it well-structured?</li>
                    <li>✓ <strong>Helpfulness:</strong> Is it useful to the user?</li>
                    <li>✓ <strong>Safety:</strong> No harmful/biased content?</li>
                </ul>
            </div>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Best Practice:</strong> Combine automated metrics with human evaluation for comprehensive assessment.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/fine-tuning">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/rag-intro">
                    <Button className="gap-2">
                        Next: Introduction to RAG <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
