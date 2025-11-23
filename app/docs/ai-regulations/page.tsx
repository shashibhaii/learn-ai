"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIRegulationsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI Regulations
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Governments worldwide are creating regulations to govern AI development and deployment. Understanding these rules is essential for building compliant AI systems.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Trend:</strong> Regulations are evolving rapidly. Stay informed about rules in your jurisdiction.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Major Regulations</h2>

            <div className="space-y-4 mb-8">
                {[
                    { name: "EU AI Act", region: "European Union", desc: "Risk-based approach: prohibited, high-risk, limited-risk, minimal-risk AI", status: "Approved 2024" },
                    { name: "GDPR", region: "European Union", desc: "Data protection and privacy. Affects AI using personal data", status: "In effect since 2018" },
                    { name: "AI Executive Order", region: "United States", desc: "Federal guidance on AI safety, security, and trustworthiness", status: "Issued 2023" },
                    { name: "AI Safety Institute", region: "United Kingdom", desc: "Government body for AI safety research and standards", status: "Established 2023" },
                    { name: "Personal Information Protection Law", region: "China", desc: "Data privacy law affecting AI systems", status: "In effect since 2021" },
                ].map((reg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-white">{reg.name}</div>
                            <div className="text-xs text-gray-500">{reg.region}</div>
                        </div>
                        <div className="text-sm text-gray-400 mb-1">{reg.desc}</div>
                        <div className="text-xs text-neon-blue">{reg.status}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Compliance Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Document AI system purpose, capabilities, and limitations",
                    "Conduct impact assessments for high-risk applications",
                    "Implement data protection and privacy measures",
                    "Ensure transparency and explainability",
                    "Establish human oversight mechanisms",
                    "Maintain audit trails and logs",
                    "Regular testing for bias and fairness",
                    "Stay updated on evolving regulations",
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
                    <strong className="text-neon-purple">Key Takeaway:</strong> AI regulations vary by region. EU AI Act and GDPR are most comprehensive. Document systems, assess risks, and ensure transparency for compliance.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-safety">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/project-ideas">
                    <Button className="gap-2">
                        Next: Project Ideas <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
