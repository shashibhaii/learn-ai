"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DLFrameworksPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                DL Frameworks (TensorFlow, PyTorch)
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Deep learning frameworks provide tools for building and training neural networks. PyTorch and TensorFlow are the industry standards, each with unique strengths.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Choice:</strong> PyTorch for research and flexibility, TensorFlow for production and deployment. Many use both!
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">PyTorch vs TensorFlow</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel p-6 rounded-xl border-2 border-blue-500/30">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">PyTorch</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <div>✓ Pythonic, intuitive API</div>
                        <div>✓ Dynamic computation graphs</div>
                        <div>✓ Excellent for research</div>
                        <div>✓ Strong community support</div>
                        <div>✓ Easy debugging</div>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-purple-500/30">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">TensorFlow</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <div>✓ Production-ready</div>
                        <div>✓ TensorFlow Lite for mobile</div>
                        <div>✓ TensorFlow.js for web</div>
                        <div>✓ Excellent deployment tools</div>
                        <div>✓ Google ecosystem integration</div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Features</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Automatic Differentiation", desc: "Compute gradients automatically for backpropagation" },
                    { title: "GPU Acceleration", desc: "Seamless GPU/TPU support for faster training" },
                    { title: "Pre-trained Models", desc: "Model zoos with state-of-the-art architectures" },
                    { title: "Distributed Training", desc: "Scale across multiple GPUs and machines" },
                    { title: "Model Deployment", desc: "Export models for production (ONNX, TorchScript, TF Serving)" },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-400">{feature.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Both frameworks are excellent. PyTorch is preferred for research due to its flexibility, while TensorFlow excels in production deployment.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ml-frameworks">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/mlops-tools">
                    <Button className="gap-2">
                        Next: MLOps Tools <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
