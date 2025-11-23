"use client";

import { Button } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DeploymentPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Deployment Basics</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Deploying AI models to production involves more than just training. You need to consider serving infrastructure, latency, scalability, monitoring, and maintenance.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Deployment Options</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Cloud APIs</h3>
                    <p className="text-sm text-gray-400 mb-3">Host model as REST/gRPC API</p>
                    <p className="text-xs text-gray-500">AWS SageMaker, Google Vertex AI, Azure ML</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Edge Deployment</h3>
                    <p className="text-sm text-gray-400 mb-3">Run on device (phone, IoT)</p>
                    <p className="text-xs text-gray-500">TensorFlow Lite, ONNX Runtime, Core ML</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Serverless</h3>
                    <p className="text-sm text-gray-400 mb-3">Auto-scaling, pay-per-use</p>
                    <p className="text-xs text-gray-500">AWS Lambda, Google Cloud Functions</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Model Optimization</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Quantization</h3>
                    <p className="text-sm text-gray-400">Reduce precision (FP32 &rarr; INT8). 4x smaller, faster inference, minimal accuracy loss.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Pruning</h3>
                    <p className="text-sm text-gray-400">Remove unnecessary weights. Can reduce model size by 50-90%.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Knowledge Distillation</h3>
                    <p className="text-sm text-gray-400">Train small model to mimic large model. Great for edge deployment.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Production Checklist</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <ul className="space-y-3 text-sm text-gray-300">
                    <li>✓ <strong>Model Versioning:</strong> Track which model version is deployed (MLflow, DVC)</li>
                    <li>✓ <strong>A/B Testing:</strong> Gradually roll out new models, compare performance</li>
                    <li>✓ <strong>Monitoring:</strong> Track latency, throughput, error rates, data drift</li>
                    <li>✓ <strong>Logging:</strong> Log predictions for debugging and retraining</li>
                    <li>✓ <strong>Fallback:</strong> Have a backup model or rule-based system</li>
                    <li>✓ <strong>Security:</strong> Validate inputs, rate limiting, authentication</li>
                    <li>✓ <strong>CI/CD:</strong> Automate testing and deployment pipeline</li>
                </ul>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Serving Frameworks</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-blue">
                    <h3 className="text-lg font-bold text-white mb-2">TensorFlow Serving</h3>
                    <p className="text-sm text-gray-400">Production-ready serving for TensorFlow models. High performance, gRPC/REST APIs.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-purple">
                    <h3 className="text-lg font-bold text-white mb-2">TorchServe</h3>
                    <p className="text-sm text-gray-400">Official PyTorch serving framework. Easy to use, supports multi-model serving.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-white mb-2">ONNX Runtime</h3>
                    <p className="text-sm text-gray-400">Cross-platform, framework-agnostic. Optimized for inference speed.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-400">
                    <h3 className="text-lg font-bold text-white mb-2">FastAPI + Custom</h3>
                    <p className="text-sm text-gray-400">Build your own API. Full control, easy to customize.</p>
                </div>
            </div>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Remember:</strong> Deployment is an iterative process. Start simple, monitor closely, and optimize based on real-world usage.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/hyperparameters">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/courses">
                    <Button className="gap-2">
                        Explore Courses
                    </Button>
                </Link>
            </div>
        </div>
    );
}
