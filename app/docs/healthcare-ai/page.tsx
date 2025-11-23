"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HealthcareAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Healthcare AI
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                AI is revolutionizing healthcare through improved diagnostics, drug discovery, personalized treatment, and patient care. From detecting cancer to predicting disease outbreaks, AI saves lives.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Impact:</strong> AI can match or exceed human expert performance in many diagnostic tasks, while being faster and more consistent.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Applications</h2>

            <div className="space-y-4 mb-8">
                {[
                    { icon: "🔬", title: "Medical Imaging", desc: "Detect tumors, fractures, diseases from X-rays, CT, MRI scans" },
                    { icon: "💊", title: "Drug Discovery", desc: "Predict molecule properties, design new drugs, repurpose existing ones" },
                    { icon: "🧬", title: "Genomics", desc: "Analyze DNA sequences, predict genetic diseases, personalized medicine" },
                    { icon: "📊", title: "Clinical Decision Support", desc: "Assist doctors with diagnosis and treatment recommendations" },
                    { icon: "🏥", title: "Hospital Operations", desc: "Optimize scheduling, predict patient flow, reduce wait times" },
                    { icon: "💬", title: "Virtual Health Assistants", desc: "Chatbots for triage, symptom checking, mental health support" },
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

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Challenges</h2>

            <div className="space-y-3 mb-8">
                {[
                    { issue: "Data Privacy", desc: "HIPAA compliance, patient confidentiality" },
                    { issue: "Regulatory Approval", desc: "FDA clearance, clinical validation" },
                    { issue: "Bias & Fairness", desc: "Ensure models work across demographics" },
                    { issue: "Interpretability", desc: "Doctors need to understand AI decisions" },
                    { issue: "Integration", desc: "Fit into existing clinical workflows" },
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
                    <strong className="text-neon-purple">Key Takeaway:</strong> Healthcare AI improves diagnostics, accelerates drug discovery, and personalizes treatment. Privacy, regulation, and interpretability are critical considerations.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/robotics-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/finance-ai">
                    <Button className="gap-2">
                        Next: Finance AI <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
