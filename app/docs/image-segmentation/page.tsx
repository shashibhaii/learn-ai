"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageSegmentationPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Image Segmentation
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Image segmentation assigns a class label to every pixel in an image. It's pixel-level classification, providing precise object boundaries instead of just bounding boxes.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Goal:</strong> Understand the image at pixel level—what class does each pixel belong to?
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Types of Segmentation</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl border-2 border-blue-500/30"
                >
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Semantic Segmentation</h3>
                    <p className="text-gray-400 mb-3">Classify each pixel by class.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        All "person" pixels get same label<br />
                        No distinction between instances
                    </div>
                    <p className="text-xs text-gray-500">Example: Road, sky, building</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl border-2 border-purple-500/30"
                >
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Instance Segmentation</h3>
                    <p className="text-gray-400 mb-3">Separate different instances.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        Person 1, Person 2, Person 3<br />
                        Each instance gets unique ID
                    </div>
                    <p className="text-xs text-gray-500">Example: Count individual objects</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl border-2 border-green-500/30"
                >
                    <h3 className="text-xl font-bold text-green-400 mb-3">Panoptic Segmentation</h3>
                    <p className="text-gray-400 mb-3">Combines both approaches.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        Semantic for stuff (sky, road)<br />
                        Instance for things (cars, people)
                    </div>
                    <p className="text-xs text-gray-500">Example: Complete scene understanding</p>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular Architectures</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">U-Net</h3>
                    <p className="text-gray-400 mb-3">Encoder-decoder with skip connections. Originally for medical imaging.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Encoder: downsample to capture context<br />
                        Decoder: upsample to recover spatial resolution<br />
                        Skip connections: preserve fine details
                    </div>
                    <p className="text-xs text-gray-500">✓ Excellent for medical images, works with small datasets</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">DeepLab</h3>
                    <p className="text-gray-400 mb-3">Uses atrous (dilated) convolutions for multi-scale context.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Atrous Spatial Pyramid Pooling (ASPP)<br />
                        Captures multi-scale information<br />
                        Maintains resolution
                    </div>
                    <p className="text-xs text-gray-500">✓ State-of-the-art semantic segmentation</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Mask R-CNN</h3>
                    <p className="text-gray-400 mb-3">Extends Faster R-CNN for instance segmentation.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Detect objects (bounding boxes)<br />
                        Generate pixel-level masks for each instance<br />
                        Combines detection + segmentation
                    </div>
                    <p className="text-xs text-gray-500">✓ Best for instance segmentation</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Segment Anything (SAM)</h3>
                    <p className="text-gray-400 mb-3">Foundation model for segmentation (Meta AI, 2023).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Trained on 1 billion masks<br />
                        Zero-shot segmentation<br />
                        Interactive prompting (points, boxes, text)
                    </div>
                    <p className="text-xs text-gray-500">✓ Generalizes to any image, no fine-tuning needed</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Loss Functions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Dice Loss</h3>
                    <p className="text-gray-400 mb-3">Measures overlap between prediction and ground truth.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Dice = 2|A ∩ B| / (|A| + |B|)<br />
                        Range: 0 to 1
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Good for imbalanced classes</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">IoU Loss</h3>
                    <p className="text-gray-400 mb-3">Intersection over Union.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        IoU = |A ∩ B| / |A ∪ B|<br />
                        Loss = 1 - IoU
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Directly optimizes evaluation metric</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Focal Loss</h3>
                    <p className="text-gray-400 mb-3">Handles class imbalance.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Down-weights easy examples<br />
                        Focuses on hard examples
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Useful when background dominates</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Combined Loss</h3>
                    <p className="text-gray-400 mb-3">Mix multiple losses.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Loss = α·CE + β·Dice<br />
                        Combines strengths
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Often works best in practice</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { icon: "🏥", title: "Medical Imaging", desc: "Tumor segmentation, organ delineation" },
                    { icon: "🚗", title: "Autonomous Driving", desc: "Road, lane, pedestrian segmentation" },
                    { icon: "🛰️", title: "Satellite Imagery", desc: "Land use classification, change detection" },
                    { icon: "📹", title: "Video Editing", desc: "Background removal, green screen replacement" },
                    { icon: "🏭", title: "Agriculture", desc: "Crop monitoring, disease detection" },
                    { icon: "🎨", title: "AR/VR", desc: "Scene understanding, object manipulation" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="text-3xl mb-2">{app.icon}</div>
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Evaluation Metrics</h2>

            <div className="space-y-3 mb-8">
                {[
                    { metric: "IoU (Intersection over Union)", desc: "Overlap between predicted and true masks" },
                    { metric: "Dice Coefficient", desc: "Similar to IoU, 2×overlap / (pred + true)" },
                    { metric: "Pixel Accuracy", desc: "Percentage of correctly classified pixels" },
                    { metric: "Mean IoU (mIoU)", desc: "Average IoU across all classes" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{item.metric}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Segmentation provides pixel-level understanding. U-Net for medical images, Mask R-CNN for instances, SAM for general-purpose segmentation.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/object-detection">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/nlp-basics">
                    <Button className="gap-2">
                        Next: NLP Basics <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
