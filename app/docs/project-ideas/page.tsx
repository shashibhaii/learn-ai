"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectIdeasPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI Project Ideas
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Build your AI portfolio with these project ideas, ranging from beginner to advanced. Hands-on projects are the best way to learn and demonstrate your skills.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Tip:</strong> Start simple, iterate, and deploy. A deployed project beats a perfect one that never ships.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Beginner Projects</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Spam Email Classifier", tech: "Scikit-learn, TF-IDF", desc: "Classify emails as spam or not spam" },
                    { title: "House Price Predictor", tech: "Linear Regression", desc: "Predict house prices from features" },
                    { title: "Handwritten Digit Recognition", tech: "CNN, MNIST", desc: "Classify 0-9 digits" },
                    { title: "Sentiment Analysis", tech: "BERT, Transformers", desc: "Analyze movie review sentiment" },
                    { title: "Image Classifier", tech: "Transfer Learning, ResNet", desc: "Classify cats vs dogs" },
                ].map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{project.title}</div>
                        <div className="text-sm text-gray-400 mb-1">{project.desc}</div>
                        <div className="text-xs text-neon-blue">Tech: {project.tech}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Intermediate Projects</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Chatbot", tech: "LLM API, RAG", desc: "Build a domain-specific chatbot" },
                    { title: "Object Detection App", tech: "YOLO, OpenCV", desc: "Real-time object detection from webcam" },
                    { title: "Recommendation System", tech: "Collaborative Filtering", desc: "Movie/product recommendations" },
                    { title: "Text Summarizer", tech: "T5, BART", desc: "Summarize long articles" },
                    { title: "Face Recognition System", tech: "FaceNet, dlib", desc: "Identify people from images" },
                ].map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{project.title}</div>
                        <div className="text-sm text-gray-400 mb-1">{project.desc}</div>
                        <div className="text-xs text-neon-purple">Tech: {project.tech}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Advanced Projects</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Fine-tune LLM", tech: "LoRA, QLoRA, Llama", desc: "Fine-tune open-source LLM on custom data" },
                    { title: "AI Agent", tech: "LangChain, Tools", desc: "Build autonomous agent with tool use" },
                    { title: "Image Segmentation", tech: "U-Net, Mask R-CNN", desc: "Segment medical images" },
                    { title: "Speech Recognition", tech: "Whisper, Wav2Vec", desc: "Transcribe audio to text" },
                    { title: "Generative Art", tech: "Stable Diffusion, GANs", desc: "Generate images from text" },
                ].map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{project.title}</div>
                        <div className="text-sm text-gray-400 mb-1">{project.desc}</div>
                        <div className="text-xs text-green-400">Tech: {project.tech}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Build projects that interest you. Start simple, deploy early, and iterate. Document your work on GitHub and write blog posts.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-regulations">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/career-paths">
                    <Button className="gap-2">
                        Next: Career Paths <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
