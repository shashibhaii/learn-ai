"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntroToLLMsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Introduction to LLMs
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Large Language Models (LLMs) are transformer-based neural networks trained on massive text datasets. They can understand and generate human-like text, powering applications from chatbots to code generation.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Revolution:</strong> LLMs like GPT-4, Claude, and Gemini have transformed AI, enabling natural language understanding and generation at unprecedented scale.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">What Makes LLMs Special?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { icon: "📊", title: "Scale", desc: "Billions to trillions of parameters, trained on petabytes of text" },
                    { icon: "🧠", title: "Emergent Abilities", desc: "Capabilities that emerge only at large scale (reasoning, math)" },
                    { icon: "🎯", title: "Few-Shot Learning", desc: "Learn new tasks from just a few examples" },
                    { icon: "🔄", title: "Generalization", desc: "Transfer knowledge across diverse tasks without retraining" },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-lg"
                    >
                        <div className="text-4xl mb-3">{feature.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular LLMs</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">GPT (OpenAI)</h3>
                    <p className="text-gray-400 mb-3">Generative Pre-trained Transformer series.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        GPT-3: 175B parameters<br />
                        GPT-4: Multimodal, improved reasoning<br />
                        ChatGPT: Conversational interface
                    </div>
                    <p className="text-xs text-gray-500">Best for: General tasks, coding, creative writing</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Claude (Anthropic)</h3>
                    <p className="text-gray-400 mb-3">Constitutional AI for safer, more helpful responses.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Claude 3: Opus, Sonnet, Haiku variants<br />
                        Long context window (200K tokens)<br />
                        Strong at analysis and reasoning
                    </div>
                    <p className="text-xs text-gray-500">Best for: Long documents, analysis, safety-critical apps</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Gemini (Google)</h3>
                    <p className="text-gray-400 mb-3">Multimodal model from Google DeepMind.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Gemini Ultra, Pro, Nano<br />
                        Native multimodal (text, image, audio, video)<br />
                        Integrated with Google services
                    </div>
                    <p className="text-xs text-gray-500">Best for: Multimodal tasks, Google ecosystem integration</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Open Source LLMs</h3>
                    <p className="text-gray-400 mb-3">Community-driven models you can run locally.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Llama 3 (Meta): 8B, 70B, 405B parameters<br />
                        Mistral: Efficient, high-performance<br />
                        Phi-3 (Microsoft): Small but capable
                    </div>
                    <p className="text-xs text-gray-500">Best for: Privacy, customization, on-premise deployment</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Core Capabilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Text Generation", desc: "Write articles, stories, emails, code" },
                    { title: "Question Answering", desc: "Answer questions from knowledge or context" },
                    { title: "Summarization", desc: "Condense long documents into key points" },
                    { title: "Translation", desc: "Translate between languages" },
                    { title: "Code Generation", desc: "Write, debug, and explain code" },
                    { title: "Reasoning", desc: "Solve math problems, logical puzzles" },
                    { title: "Classification", desc: "Categorize text, sentiment analysis" },
                    { title: "Extraction", desc: "Pull structured data from unstructured text" },
                ].map((capability, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{capability.title}</div>
                        <div className="text-sm text-gray-400">{capability.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">How LLMs Work</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold shrink-0">1</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Tokenization</div>
                            <div className="text-sm text-gray-400">Break text into tokens (subwords)</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold shrink-0">2</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Embedding</div>
                            <div className="text-sm text-gray-400">Convert tokens to dense vectors</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold shrink-0">3</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Transformer Layers</div>
                            <div className="text-sm text-gray-400">Self-attention captures context and relationships</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold shrink-0">4</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Prediction</div>
                            <div className="text-sm text-gray-400">Predict next token probability distribution</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center font-bold shrink-0">5</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Sampling</div>
                            <div className="text-sm text-gray-400">Select next token (greedy, top-k, nucleus sampling)</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Limitations & Challenges</h2>

            <div className="space-y-3 mb-8">
                {[
                    { issue: "Hallucinations", desc: "Generate plausible but incorrect information" },
                    { issue: "Knowledge Cutoff", desc: "Training data has a cutoff date, no real-time info" },
                    { issue: "Bias", desc: "Reflect biases present in training data" },
                    { issue: "Context Window", desc: "Limited memory (4K-200K tokens depending on model)" },
                    { issue: "Computational Cost", desc: "Expensive to train and run" },
                    { issue: "Lack of True Understanding", desc: "Pattern matching, not genuine comprehension" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-yellow-400 mb-1">⚠️ {item.issue}</div>
                        <div className="text-sm text-gray-300">{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> LLMs are powerful general-purpose AI systems trained on massive text data. They excel at language tasks but have limitations like hallucinations and knowledge cutoffs.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/text-classification">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/training-llms">
                    <Button className="gap-2">
                        Next: Training LLMs <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
