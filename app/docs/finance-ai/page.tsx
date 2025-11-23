"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinanceAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Finance AI
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                AI is transforming finance through algorithmic trading, fraud detection, credit scoring, and risk management. Financial institutions leverage AI for competitive advantage and regulatory compliance.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Scale:</strong> High-frequency trading firms execute millions of trades per day using AI algorithms.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Applications</h2>

            <div className="space-y-4 mb-8">
                {[
                    { icon: "📈", title: "Algorithmic Trading", desc: "Execute trades based on market signals, predict price movements" },
                    { icon: "🛡️", title: "Fraud Detection", desc: "Identify suspicious transactions, prevent credit card fraud" },
                    { icon: "💳", title: "Credit Scoring", desc: "Assess creditworthiness, approve loans faster" },
                    { icon: "⚖️", title: "Risk Management", desc: "Predict defaults, assess portfolio risk, stress testing" },
                    { icon: "🤖", title: "Robo-Advisors", desc: "Automated investment advice, portfolio management" },
                    { icon: "📊", title: "Market Analysis", desc: "Sentiment analysis, news impact prediction" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-start gap-4"
                    >
                        <div className="text-3xl">{app.icon}</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">{app.title}</div>
                            <div className="text-sm text-gray-400">{app.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Finance AI powers trading, fraud detection, and risk management. Explainability and regulatory compliance are critical in this domain.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/healthcare-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/game-ai">
                    <Button className="gap-2">
                        Next: Game AI <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
