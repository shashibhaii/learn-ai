"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LLMAPIsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Using LLM APIs
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                LLM APIs provide easy access to powerful language models without managing infrastructure. Simply send text prompts and receive AI-generated responses via HTTP requests.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Advantage:</strong> No GPUs needed! Pay per token, scale instantly, access latest models.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular LLM APIs</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">OpenAI API</h3>
                    <p className="text-gray-400 mb-3">GPT-4, GPT-3.5-turbo, DALL-E, Whisper.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Models: gpt-4, gpt-3.5-turbo<br />
                        Pricing: ~$0.01-0.06 per 1K tokens<br />
                        Features: Function calling, vision, audio
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Anthropic API</h3>
                    <p className="text-gray-400 mb-3">Claude 3 (Opus, Sonnet, Haiku).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        200K context window<br />
                        Strong reasoning and analysis<br />
                        Constitutional AI for safety
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Google AI (Gemini)</h3>
                    <p className="text-gray-400 mb-3">Gemini Pro, Gemini Ultra.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Multimodal capabilities<br />
                        Free tier available<br />
                        Integrated with Google Cloud
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Basic API Usage</h2>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Example: OpenAI API (requires: pip install openai)
from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

# Simple completion
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms"}
    ],
    temperature=0.7,
    max_tokens=150
)

print(response.choices[0].message.content)`}
                expectedOutput={`Quantum computing uses quantum mechanics principles like superposition and entanglement to process information. Unlike classical computers that use bits (0 or 1), quantum computers use qubits that can be both 0 and 1 simultaneously. This allows them to solve certain complex problems much faster than traditional computers.`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Parameters</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">temperature</h3>
                    <p className="text-gray-400 mb-3">Controls randomness (0-2).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        0: Deterministic, focused<br />
                        0.7: Balanced<br />
                        1.5+: Creative, diverse
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">max_tokens</h3>
                    <p className="text-gray-400 mb-3">Maximum response length.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Limits output size<br />
                        Affects cost<br />
                        ~4 chars per token
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">top_p</h3>
                    <p className="text-gray-400 mb-3">Nucleus sampling (0-1).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Alternative to temperature<br />
                        0.9: Consider top 90% probability mass
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">presence_penalty</h3>
                    <p className="text-gray-400 mb-3">Encourage new topics (-2 to 2).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Positive: More diverse topics<br />
                        Negative: Stay on topic
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Prompt Engineering</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Be Specific</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-xs text-red-400 mb-2">✗ Vague</div>
                            <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                                "Tell me about AI"
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-green-400 mb-2">✓ Specific</div>
                            <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                                "Explain 3 key differences between supervised and unsupervised learning"
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Provide Context</h3>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        "You are an expert Python developer. Review this code for bugs and suggest improvements: [code]"
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Use Examples (Few-Shot)</h3>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        "Classify sentiment:<br />
                        Text: 'I love this!' → Positive<br />
                        Text: 'Terrible experience' → Negative<br />
                        Text: 'It was okay' → ?"
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Use system messages to set behavior and context",
                    "Start with lower temperature for factual tasks",
                    "Implement rate limiting and error handling",
                    "Cache responses when possible to save costs",
                    "Monitor token usage to control expenses",
                    "Use streaming for better UX on long responses",
                    "Validate and sanitize user inputs",
                    "Never expose API keys in client-side code",
                ].map((practice, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-gray-300 text-sm">{practice}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> LLM APIs make powerful AI accessible. Focus on prompt engineering, manage costs with token limits, and always handle errors gracefully.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/training-llms">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/ml-frameworks">
                    <Button className="gap-2">
                        Next: ML Frameworks <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
