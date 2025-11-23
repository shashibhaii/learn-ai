"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIEthicsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI Ethics
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                As AI becomes more powerful and pervasive, ethical considerations are critical. From bias in algorithms to privacy concerns, AI practitioners must understand and address the ethical implications of their work.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Responsibility:</strong> With great power comes great responsibility. AI can amplify both good and harm.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Ethical Issues</h2>

            <div className="space-y-4 mb-8">
                {[
                    { icon: "⚖️", title: "Bias & Fairness", desc: "AI systems can perpetuate or amplify societal biases in training data", example: "Facial recognition less accurate for minorities, hiring algorithms favoring certain demographics" },
                    { icon: "🔒", title: "Privacy", desc: "AI often requires vast amounts of personal data", example: "Surveillance systems, data collection without consent, re-identification risks" },
                    { icon: "👁️", title: "Transparency", desc: "Black-box models make decisions we can't explain", example: "Loan denials, medical diagnoses without clear reasoning" },
                    { icon: "🎯", title: "Accountability", desc: "Who is responsible when AI makes mistakes?", example: "Autonomous vehicle accidents, algorithmic trading losses" },
                    { icon: "💼", title: "Job Displacement", desc: "Automation may eliminate jobs faster than new ones are created", example: "Manufacturing, customer service, transportation" },
                    { icon: "🌍", title: "Environmental Impact", desc: "Training large models consumes massive energy", example: "GPT-3 training: ~1,300 MWh, equivalent to 120 US homes for a year" },
                ].map((issue, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">{issue.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-2">{issue.title}</h3>
                                <p className="text-sm text-gray-400 mb-2">{issue.desc}</p>
                                <div className="text-xs text-gray-500">Example: {issue.example}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Ethical Principles</h2>

            <div className="space-y-3 mb-8">
                {[
                    { principle: "Beneficence", desc: "AI should benefit humanity and promote well-being" },
                    { principle: "Non-maleficence", desc: "Do no harm - avoid creating systems that cause damage" },
                    { principle: "Autonomy", desc: "Respect human agency and decision-making" },
                    { principle: "Justice", desc: "Ensure fair distribution of benefits and burdens" },
                    { principle: "Explicability", desc: "Make AI decisions understandable and transparent" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-neon-blue mb-1">{item.principle}</div>
                        <div className="text-sm text-gray-300">{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Audit training data for bias and representativeness",
                    "Test models across diverse demographics",
                    "Provide explanations for AI decisions (XAI)",
                    "Implement human oversight for critical decisions",
                    "Be transparent about AI use and limitations",
                    "Protect user privacy and data security",
                    "Consider environmental impact of training",
                    "Establish clear accountability and governance",
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
                    <strong className="text-neon-purple">Key Takeaway:</strong> AI ethics isn't optional—it's essential. Consider bias, privacy, transparency, and accountability in every AI system you build.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/game-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/ai-safety">
                    <Button className="gap-2">
                        Next: AI Safety <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
