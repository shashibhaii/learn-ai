"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageClassificationPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Image Classification
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Image classification is the task of assigning a label to an entire image. It's one of the most fundamental computer vision tasks and powers applications from medical diagnosis to autonomous vehicles.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Goal:</strong> Given an image, predict which category it belongs to (e.g., cat, dog, car, airplane).
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">How It Works</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold">1</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Input Image</div>
                            <div className="text-sm text-gray-400">Raw pixels (e.g., 224×224×3 for RGB)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold">2</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Feature Extraction</div>
                            <div className="text-sm text-gray-400">CNN layers detect edges, textures, patterns</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold">3</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Classification</div>
                            <div className="text-sm text-gray-400">Fully connected layers predict class probabilities</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">4</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Output</div>
                            <div className="text-sm text-gray-400">Class label + confidence score</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular Architectures</h2>

            <div className="space-y-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-blue-500"
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-blue-400">ResNet</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">2015</span>
                    </div>
                    <p className="text-gray-400 mb-2">Residual connections allow training very deep networks (50-152 layers).</p>
                    <div className="text-xs text-gray-500">Use case: General-purpose image classification, transfer learning</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-purple-500"
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-purple-400">EfficientNet</h3>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">2019</span>
                    </div>
                    <p className="text-gray-400 mb-2">Balances depth, width, and resolution for optimal efficiency.</p>
                    <div className="text-xs text-gray-500">Use case: Mobile/edge devices, resource-constrained environments</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-green-500"
                >
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-green-400">Vision Transformer (ViT)</h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs">2020</span>
                    </div>
                    <p className="text-gray-400 mb-2">Applies transformer architecture to image patches instead of CNNs.</p>
                    <div className="text-xs text-gray-500">Use case: Large-scale datasets, state-of-the-art accuracy</div>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Simple Classification Example</h2>
            <p className="text-gray-400 mb-4">
                Using a pre-trained model with TensorFlow/Keras.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from tensorflow.keras.applications import ResNet50
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
import numpy as np

# Load pre-trained ResNet50
model = ResNet50(weights='imagenet')

# Load and preprocess image
img_path = 'cat.jpg'
img = image.load_img(img_path, target_size=(224, 224))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)

# Predict
preds = model.predict(x)
results = decode_predictions(preds, top=3)[0]

print("Top 3 predictions:")
for i, (imagenet_id, label, score) in enumerate(results, 1):
    print(f"{i}. {label}: {score*100:.2f}%")`}
                expectedOutput={`Top 3 predictions:
1. tabby_cat: 87.45%
2. tiger_cat: 8.32%
3. Egyptian_cat: 2.15%`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Training a Custom Classifier</h2>
            <p className="text-gray-400 mb-4">
                Fine-tune a pre-trained model for your own classes.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models

# Load pre-trained base (without top layer)
base_model = MobileNetV2(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze base layers
base_model.trainable = False

# Add custom classification head
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(3, activation='softmax')  # 3 classes
])

# Compile
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

print(model.summary())
print(f"\\nTotal params: {model.count_params():,}")
print(f"Trainable params: {sum([np.prod(v.shape) for v in model.trainable_weights]):,}")`}
                expectedOutput={`Model: "sequential"
...
Total params: 2,387,971
Trainable params: 132,099`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Real-World Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                    { icon: "🏥", title: "Medical Imaging", desc: "Detect diseases from X-rays, MRIs, CT scans" },
                    { icon: "🚗", title: "Autonomous Vehicles", desc: "Recognize pedestrians, traffic signs, obstacles" },
                    { icon: "🔒", title: "Security", desc: "Face recognition, anomaly detection" },
                    { icon: "🌾", title: "Agriculture", desc: "Crop disease detection, yield prediction" },
                    { icon: "🏭", title: "Manufacturing", desc: "Quality control, defect detection" },
                    { icon: "🛍️", title: "E-Commerce", desc: "Visual search, product categorization" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className="text-4xl mb-3">{app.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                        <p className="text-sm text-gray-400">{app.desc}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Use transfer learning—don't train from scratch",
                    "Augment data (rotation, flip, zoom) to prevent overfitting",
                    "Normalize pixel values (0-1 or standardize)",
                    "Use appropriate image size (224×224 is common)",
                    "Monitor validation accuracy to detect overfitting",
                    "Try different architectures for your specific task",
                ].map((tip, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">▹</span>
                        <span className="text-gray-300 text-sm">{tip}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Modern image classification relies on CNNs and transfer learning. Pre-trained models like ResNet can be fine-tuned for custom tasks with relatively small datasets.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/cnns">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/object-detection">
                    <Button className="gap-2">
                        Next: Object Detection <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
