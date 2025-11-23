"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareerPathsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI Career Paths
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                AI offers diverse career opportunities across research, engineering, and applied roles. Find the path that matches your interests and skills.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Demand:</strong> AI roles are among the fastest-growing and highest-paid in tech. Average salaries: $120K-$250K+.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">AI Roles</h2>

            <div className="space-y-4 mb-8">
                {[
                    { role: "ML Engineer", focus: "Build and deploy ML systems", skills: "Python, PyTorch/TensorFlow, MLOps, Cloud", salary: "$130K-$200K" },
                    { role: "AI Research Scientist", focus: "Advance state-of-the-art", skills: "PhD, Math, Research, Publications", salary: "$150K-$300K+" },
                    { role: "Data Scientist", focus: "Extract insights from data", skills: "Statistics, SQL, Python, Visualization", salary: "$110K-$170K" },
                    { role: "NLP Engineer", focus: "Language understanding systems", skills: "Transformers, LLMs, Linguistics", salary: "$130K-$190K" },
                    { role: "Computer Vision Engineer", focus: "Image/video analysis", skills: "CNNs, OpenCV, Object Detection", salary: "$130K-$190K" },
                    { role: "MLOps Engineer", focus: "ML infrastructure and deployment", skills: "Docker, Kubernetes, CI/CD, Monitoring", salary: "$120K-$180K" },
                    { role: "AI Product Manager", focus: "Define AI product strategy", skills: "ML knowledge, Product, Communication", salary: "$140K-$220K" },
                ].map((job, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-white">{job.role}</div>
                            <div className="text-xs text-green-400">{job.salary}</div>
                        </div>
                        <div className="text-sm text-gray-400 mb-1">{job.focus}</div>
                        <div className="text-xs text-gray-500">Skills: {job.skills}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">How to Break In</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Build a strong foundation in math (linear algebra, calculus, probability)",
                    "Master Python and key libraries (NumPy, Pandas, Scikit-learn)",
                    "Complete online courses (Coursera, fast.ai, DeepLearning.AI)",
                    "Build and deploy 3-5 portfolio projects",
                    "Contribute to open-source ML projects",
                    "Write technical blog posts to demonstrate knowledge",
                    "Network on LinkedIn, Twitter, attend meetups",
                    "Apply to internships and junior roles",
                ].map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center text-sm font-bold shrink-0">
                            {idx + 1}
                        </div>
                        <span className="text-gray-300 text-sm">{step}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> AI careers are diverse and lucrative. Build projects, learn continuously, and network. Focus on fundamentals first, then specialize.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/project-ideas">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/intro-to-ai">
                    <Button className="gap-2">
                        Back to Start <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
