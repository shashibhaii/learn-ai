"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AISafetyPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI Safety
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                AI safety ensures that AI systems behave as intended and don't cause unintended harm. As AI becomes more capable, safety becomes increasingly critical—especially for autonomous systems and AGI.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Challenge:</strong> How do we ensure AI systems remain safe and aligned with human values as they become more powerful?
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Safety Concerns</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Alignment Problem", desc: "Ensuring AI goals align with human values", risk: "AI optimizing wrong objective" },
                    { title: "Robustness", desc: "AI performs reliably in diverse conditions", risk: "Failure in edge cases, adversarial attacks" },
                    { title: "Interpretability", desc: "Understanding why AI makes decisions", risk: "Can't debug or trust black boxes" },
                    { title: "Scalable Oversight", desc: "Supervising superhuman AI", risk: "Can't verify correctness of advanced AI" },
                    { title: "Value Learning", desc: "Learning human preferences correctly", risk: "Misspecified rewards, reward hacking" },
                ].map((concern, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{concern.title}</div>
                        <div className="text-sm text-gray-400 mb-1">{concern.desc}</div>
                        <div className="text-xs text-red-400">⚠️ Risk: {concern.risk}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Safety Techniques</h2>

            <div className="space-y-3 mb-8">
                {[
                    "RLHF (Reinforcement Learning from Human Feedback) for alignment",
                    "Red teaming to find failure modes",
                    "Adversarial training for robustness",
                    "Constitutional AI for value alignment",
                    "Interpretability tools (attention visualization, probing)",
                    "Formal verification for critical systems",
                    "Human-in-the-loop for high-stakes decisions",
                    "Sandboxing and capability limitations",
                ].map((technique, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-gray-300 text-sm">{technique}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> AI safety is about ensuring systems behave as intended. Use RLHF, red teaming, and interpretability tools. Safety is not optional for powerful AI.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-ethics">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/ai-regulations">
                    <Button className="gap-2">
                        Next: AI Regulations <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
