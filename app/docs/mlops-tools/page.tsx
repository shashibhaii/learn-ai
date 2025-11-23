"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MLOpsToolsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                MLOps Tools
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                MLOps (Machine Learning Operations) brings DevOps practices to ML. It covers the entire ML lifecycle: data versioning, experiment tracking, model deployment, and monitoring.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Goal:</strong> Automate and streamline ML workflows from development to production.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">MLOps Lifecycle</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    {[
                        { step: "Data Management", desc: "Version datasets, track lineage" },
                        { step: "Experiment Tracking", desc: "Log metrics, hyperparameters, artifacts" },
                        { step: "Model Training", desc: "Distributed training, hyperparameter tuning" },
                        { step: "Model Registry", desc: "Store and version models" },
                        { step: "Deployment", desc: "Serve models via APIs" },
                        { step: "Monitoring", desc: "Track performance, detect drift" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center text-sm font-bold shrink-0">
                                {idx + 1}
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-white text-sm">{item.step}</div>
                                <div className="text-xs text-gray-400">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular Tools</h2>

            <div className="space-y-4 mb-8">
                {[
                    { name: "MLflow", desc: "Experiment tracking, model registry, deployment", use: "Open-source, framework-agnostic" },
                    { name: "Weights & Biases", desc: "Experiment tracking, visualization, collaboration", use: "Best-in-class UI, team features" },
                    { name: "DVC", desc: "Data version control, pipeline management", use: "Git-like versioning for data" },
                    { name: "Kubeflow", desc: "ML workflows on Kubernetes", use: "Enterprise-scale deployment" },
                    { name: "Docker", desc: "Containerization for reproducibility", use: "Package models with dependencies" },
                ].map((tool, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{tool.name}</div>
                        <div className="text-sm text-gray-400 mb-1">{tool.desc}</div>
                        <div className="text-xs text-gray-500">→ {tool.use}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> MLOps is essential for production ML. Use tools like MLflow for tracking, Docker for packaging, and monitoring for detecting model drift.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/dl-frameworks">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/robotics-ai">
                    <Button className="gap-2">
                        Next: Robotics AI <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
