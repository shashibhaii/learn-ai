"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TransferLearningPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Transfer Learning</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Transfer Learning leverages knowledge from pre-trained models on large datasets and adapts them to new, related tasks. It's how most modern AI applications are built.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Why Transfer Learning?</strong> Training from scratch requires massive data and compute. Transfer learning lets you achieve great results with limited resources.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Common Approaches</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Feature Extraction</h3>
                    <p className="text-sm text-gray-400 mb-3">Freeze pre-trained layers and only train new layers on top.</p>
                    <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                        <li>Fast training</li>
                        <li>Works with small datasets</li>
                        <li>Example: Use BERT embeddings</li>
                    </ul>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Fine-Tuning</h3>
                    <p className="text-sm text-gray-400 mb-3">Unfreeze some layers and retrain with a lower learning rate.</p>
                    <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                        <li>Better performance</li>
                        <li>Needs more data</li>
                        <li>Example: Fine-tune GPT for chatbot</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Transfer Learning Workflow</h3>
            <p className="text-gray-400 mb-4">
                This pseudocode shows the typical transfer learning process.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Pseudocode for Transfer Learning

# Step 1: Load pre-trained model
pretrained_model = load_model("ImageNet_ResNet50")
print("Loaded model trained on 1M images")

# Step 2: Freeze base layers
for layer in pretrained_model.layers[:-5]:
    layer.trainable = False
print("Froze first 45 layers")

# Step 3: Add custom layers for new task
model = Sequential([
    pretrained_model,
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(10, activation='softmax')  # 10 classes
])
print("Added custom classification head")

# Step 4: Train on new dataset (e.g., cats vs dogs)
model.compile(optimizer='adam', loss='categorical_crossentropy')
model.fit(new_dataset, epochs=10)

print("\\nTransfer learning complete!")
print("Achieved 95% accuracy with only 1000 images")`}
                expectedOutput={`Loaded model trained on 1M images
Froze first 45 layers
Added custom classification head

Transfer learning complete!
Achieved 95% accuracy with only 1000 images`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Popular Pre-trained Models</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Vision:</strong> ResNet, EfficientNet, Vision Transformer (ViT)</li>
                <li><strong>NLP:</strong> BERT, GPT, T5, RoBERTa</li>
                <li><strong>Multimodal:</strong> CLIP, Flamingo</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/attention">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/gans">
                    <Button className="gap-2">
                        Next: GANs <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
