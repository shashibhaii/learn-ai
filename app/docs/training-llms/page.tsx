"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrainingLLMsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Training LLMs
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Training Large Language Models is a multi-stage process involving pre-training on massive datasets, fine-tuning for specific tasks, and alignment with human preferences. It requires significant computational resources and careful engineering.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Cost:</strong> Training GPT-3 cost ~$4.6M. GPT-4 likely cost tens of millions. Most practitioners use pre-trained models and fine-tune them.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Training Pipeline</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">1. Pre-training</h3>
                    <p className="text-gray-400 mb-3">Train on massive unlabeled text corpus to learn language patterns.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Objective: Next token prediction<br />
                        Data: Trillions of tokens (web pages, books, code)<br />
                        Duration: Weeks to months on thousands of GPUs<br />
                        Cost: Millions of dollars
                    </div>
                    <p className="text-xs text-gray-500">Result: Base model with general language understanding</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">2. Supervised Fine-Tuning (SFT)</h3>
                    <p className="text-gray-400 mb-3">Fine-tune on high-quality instruction-response pairs.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Objective: Follow instructions, answer questions<br />
                        Data: Thousands of curated examples<br />
                        Duration: Hours to days<br />
                        Cost: Much cheaper than pre-training
                    </div>
                    <p className="text-xs text-gray-500">Result: Model that follows instructions</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">3. RLHF (Reinforcement Learning from Human Feedback)</h3>
                    <p className="text-gray-400 mb-3">Align model with human preferences using RL.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        1. Collect human preference data (A vs B comparisons)<br />
                        2. Train reward model to predict preferences<br />
                        3. Use PPO to optimize policy against reward model<br />
                        Duration: Days to weeks
                    </div>
                    <p className="text-xs text-gray-500">Result: Helpful, harmless, honest assistant</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Fine-Tuning Approaches</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Full Fine-Tuning</h3>
                    <p className="text-gray-400 mb-3">Update all model parameters.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        ✓ Best performance<br />
                        ✗ Expensive, requires lots of memory
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">LoRA (Low-Rank Adaptation)</h3>
                    <p className="text-gray-400 mb-3">Train small adapter matrices, freeze base model.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        ✓ 10-100x fewer parameters<br />
                        ✓ Much faster and cheaper
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">QLoRA</h3>
                    <p className="text-gray-400 mb-3">LoRA + quantization for even more efficiency.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        ✓ Fine-tune 70B model on single GPU<br />
                        ✓ Minimal performance loss
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Prompt Tuning</h3>
                    <p className="text-gray-400 mb-3">Learn soft prompts, freeze model entirely.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        ✓ Extremely parameter-efficient<br />
                        ✗ Lower performance than LoRA
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Training Challenges</h2>

            <div className="space-y-3 mb-8">
                {[
                    { challenge: "Computational Cost", solution: "Use smaller models, LoRA, quantization" },
                    { challenge: "Memory Requirements", solution: "Gradient checkpointing, mixed precision, DeepSpeed" },
                    { challenge: "Data Quality", solution: "Careful curation, filtering, deduplication" },
                    { challenge: "Catastrophic Forgetting", solution: "Mix in pre-training data during fine-tuning" },
                    { challenge: "Overfitting", solution: "Early stopping, regularization, more data" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-red-400 mb-1">⚠️ {item.challenge}</div>
                        <div className="text-sm text-gray-300">→ {item.solution}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Practical Tips</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Start with a pre-trained model (Llama, Mistral, Phi)",
                    "Use LoRA or QLoRA for efficiency",
                    "Curate high-quality training data (quality > quantity)",
                    "Monitor validation loss to prevent overfitting",
                    "Use gradient accumulation for larger effective batch sizes",
                    "Experiment with learning rate schedules",
                    "Consider using cloud platforms (AWS, GCP, Azure) for GPUs",
                ].map((tip, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-gray-300 text-sm">{tip}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Training LLMs from scratch is expensive. Most practitioners fine-tune pre-trained models using efficient methods like LoRA. RLHF aligns models with human preferences.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/intro-llms">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/llm-apis">
                    <Button className="gap-2">
                        Next: Using LLM APIs <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
