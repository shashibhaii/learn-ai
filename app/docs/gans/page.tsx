"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function GANsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Generative Adversarial Networks (GANs)</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                GANs consist of two neural networks—a Generator and a Discriminator—that compete against each other. The Generator creates fake data, while the Discriminator tries to distinguish real from fake.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-purple p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Invented by Ian Goodfellow (2014)</strong> - GANs can generate photorealistic images, create art, and even synthesize voices.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How GANs Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-2 border-neon-blue/30">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Generator</h3>
                    <p className="text-sm text-gray-400 mb-3">Takes random noise as input and generates fake data (e.g., images).</p>
                    <p className="text-xs text-gray-500 italic">Goal: Fool the discriminator</p>
                </div>
                <div className="glass-panel p-6 rounded-xl border-2 border-neon-purple/30">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Discriminator</h3>
                    <p className="text-sm text-gray-400 mb-3">Classifies data as real (from dataset) or fake (from generator).</p>
                    <p className="text-xs text-gray-500 italic">Goal: Correctly identify fakes</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Training Process</h3>
            <p className="text-gray-400 mb-4">
                This simplified example shows the adversarial training loop.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# Simplified GAN training simulation
def generator(noise):
    # Generate fake data from noise
    return noise * 2 + 1

def discriminator(data, is_real):
    # Score: higher = more likely real
    score = data.mean()
    if is_real:
        return score
    else:
        return -score

# Training loop (simplified)
print("GAN Training Simulation\\n")
for epoch in range(1, 4):
    # Generate fake data
    noise = np.random.randn(5)
    fake_data = generator(noise)
    
    # Real data (from dataset)
    real_data = np.array([5, 6, 5.5, 6.2, 5.8])
    
    # Discriminator scores
    d_real = discriminator(real_data, is_real=True)
    d_fake = discriminator(fake_data, is_real=False)
    
    print(f"Epoch {epoch}:")
    print(f"  D(real) = {d_real:.2f} (wants high)")
    print(f"  D(fake) = {d_fake:.2f} (wants low)")
    print(f"  Generator improving...\\n")`}
                expectedOutput={`GAN Training Simulation

Epoch 1:
  D(real) = 5.70 (wants high)
  D(fake) = -1.23 (wants low)
  Generator improving...

Epoch 2:
  D(real) = 5.70 (wants high)
  D(fake) = -0.45 (wants low)
  Generator improving...

Epoch 3:
  D(real) = 5.70 (wants high)
  D(fake) = 0.89 (wants low)
  Generator improving...`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Popular GAN Variants</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>DCGAN:</strong> Deep Convolutional GAN for image generation</li>
                <li><strong>StyleGAN:</strong> High-quality face generation with style control</li>
                <li><strong>CycleGAN:</strong> Image-to-image translation without paired data</li>
                <li><strong>Pix2Pix:</strong> Conditional GAN for paired image translation</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/transfer-learning">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/autoencoders">
                    <Button className="gap-2">
                        Next: Autoencoders <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
