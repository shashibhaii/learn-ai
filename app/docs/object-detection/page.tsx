"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ObjectDetectionPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Object Detection
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Object detection goes beyond classification—it finds and localizes multiple objects in an image. Each detection includes a bounding box and class label.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Task:</strong> For each object in an image, predict: (1) What it is (class), (2) Where it is (bounding box coordinates).
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Concepts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Bounding Box</h3>
                    <p className="text-gray-400 mb-3">Rectangle around object.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Format: (x, y, width, height)<br />
                        or (x1, y1, x2, y2)
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">IoU (Intersection over Union)</h3>
                    <p className="text-gray-400 mb-3">Overlap between predicted and ground truth boxes.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        IoU = Area of Overlap / Area of Union<br />
                        Range: 0 to 1
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Confidence Score</h3>
                    <p className="text-gray-400 mb-3">How confident the model is about detection.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Combines: objectness + classification confidence
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">NMS (Non-Max Suppression)</h3>
                    <p className="text-gray-400 mb-3">Remove duplicate detections.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Keep highest confidence box<br />
            Suppress overlapping boxes (IoU > threshold)
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Detection Approaches</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Two-Stage Detectors (R-CNN Family)</h3>
                    <p className="text-gray-400 mb-3">First propose regions, then classify them.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        1. Region Proposal Network (RPN) suggests candidate boxes<br />
                        2. Classify and refine each proposal<br />
                        Examples: R-CNN, Fast R-CNN, Faster R-CNN, Mask R-CNN
                    </div>
                    <p className="text-xs text-gray-500">✓ High accuracy | ✗ Slower (two stages)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">One-Stage Detectors (YOLO, SSD)</h3>
                    <p className="text-gray-400 mb-3">Predict boxes and classes in single pass.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Divide image into grid<br />
                        Each cell predicts bounding boxes + class probabilities<br />
                        Examples: YOLO (v1-v8), SSD, RetinaNet
                    </div>
                    <p className="text-xs text-gray-500">✓ Very fast (real-time) | ✗ Slightly lower accuracy</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">YOLO (You Only Look Once)</h2>
            <p className="text-gray-400 mb-6">
                Most popular real-time object detector. Treats detection as regression problem.
            </p>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold">1</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Divide Image</div>
                            <div className="text-sm text-gray-400">Split into S×S grid (e.g., 7×7)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold">2</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Predict Boxes</div>
                            <div className="text-sm text-gray-400">Each cell predicts B bounding boxes</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold">3</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Predict Classes</div>
                            <div className="text-sm text-gray-400">Each cell predicts class probabilities</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">4</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Apply NMS</div>
                            <div className="text-sm text-gray-400">Remove duplicate detections</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-white mb-3">YOLO Versions</h3>
                <div className="space-y-2 text-sm text-gray-300">
                    <div><strong className="text-neon-blue">YOLOv1-v3:</strong> Original versions, progressively faster and more accurate</div>
                    <div><strong className="text-neon-purple">YOLOv4-v5:</strong> Community improvements, optimizations</div>
                    <div><strong className="text-green-400">YOLOv6-v7:</strong> Industrial applications, edge devices</div>
                    <div><strong className="text-yellow-400">YOLOv8:</strong> Latest, state-of-the-art performance</div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Evaluation Metrics</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">mAP (mean Average Precision)</h3>
                    <p className="text-gray-400 mb-3">Primary metric for object detection.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Calculate AP for each class, then average<br />
                        AP = area under precision-recall curve<br />
                        Common: mAP@0.5, mAP@0.5:0.95
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">FPS (Frames Per Second)</h3>
                    <p className="text-gray-400 mb-3">Speed metric for real-time applications.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Real-time: 30+ FPS<br />
                        YOLO: 30-150 FPS depending on version<br />
                        Faster R-CNN: 5-10 FPS
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { icon: "🚗", title: "Autonomous Driving", desc: "Detect cars, pedestrians, traffic signs" },
                    { icon: "📹", title: "Surveillance", desc: "Track people, detect suspicious activity" },
                    { icon: "🏭", title: "Manufacturing", desc: "Quality control, defect detection" },
                    { icon: "🏥", title: "Medical Imaging", desc: "Detect tumors, lesions in scans" },
                    { icon: "🛒", title: "Retail", desc: "Checkout-free stores, inventory management" },
                    { icon: "🎮", title: "AR/VR", desc: "Real-time object tracking" },
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

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Object detection localizes and classifies multiple objects. YOLO is the go-to for real-time applications, while Faster R-CNN offers higher accuracy when speed isn't critical.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/image-classification">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/image-segmentation">
                    <Button className="gap-2">
                        Next: Image Segmentation <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
