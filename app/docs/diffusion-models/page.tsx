"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DiffusionModelsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Diffusion Models</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Diffusion Models are the technology behind DALL-E 2, Stable Diffusion, and Midjourney. They generate high-quality images by learning to reverse a gradual noising process.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Key Insight:</strong> If you can learn to denoise images step-by-step, you can generate new images by starting from pure noise.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-2 border-red-500/30">
                    <h3 className="text-lg font-bold text-red-400 mb-3">Forward Process (Training)</h3>
                    <p className="text-sm text-gray-400">Gradually add noise to real images over T steps until they become pure noise.</p>
                    <p className="text-xs text-gray-500 mt-2 font-mono">Image &rarr; Noisy &rarr; Noisier &rarr; Pure Noise</p>
                </div>
                <div className="glass-panel p-6 rounded-xl border-2 border-green-500/30">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Reverse Process (Generation)</h3>
                    <p className="text-sm text-gray-400">Learn to denoise step-by-step. Start from noise and gradually remove it to create images.</p>
                    <p className="text-xs text-gray-500 mt-2 font-mono">Pure Noise &rarr; Less Noisy &rarr; Clear Image</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simplified Denoising Step</h3>
            <p className="text-gray-400 mb-4">
                This demonstrates a single denoising step (highly simplified).
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def denoise_step(noisy_image, noise_level, model_prediction):
    # Remove predicted noise
    denoised = noisy_image - (noise_level * model_prediction)
    return denoised

# Simulated noisy image (1D for simplicity)
noisy = np.array([0.8, 1.2, 0.5, 1.5, 0.9])
noise_level = 0.3

# Model predicts the noise
predicted_noise = np.array([0.2, 0.8, -0.1, 1.0, 0.3])

# Denoise
result = denoise_step(noisy, noise_level, predicted_noise)

print("Noisy image:", noisy)
print("Predicted noise:", predicted_noise)
print("After denoising:", result.round(2))
print("\\nIn practice, this happens 1000+ times!")
print("Each step removes a tiny bit of noise.")`}
                expectedOutput={`Noisy image: [0.8 1.2 0.5 1.5 0.9]
Predicted noise: [ 0.2  0.8 -0.1  1.   0.3]
After denoising: [0.74 0.96 0.53 1.2  0.81]

In practice, this happens 1000+ times!
Each step removes a tiny bit of noise.`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Why Diffusion Models Excel</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Quality:</strong> Generate extremely high-quality, diverse images</li>
                <li><strong>Stability:</strong> More stable training than GANs</li>
                <li><strong>Controllability:</strong> Easy to guide with text prompts (CLIP guidance)</li>
                <li><strong>Scalability:</strong> Performance improves with model size</li>
            </ul>

            <div className="bg-white/5 border-l-4 border-neon-purple p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Popular Models:</strong> Stable Diffusion, DALL-E 2, Imagen, Midjourney
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/autoencoders">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/training-tips">
                    <Button className="gap-2">
                        Next: Training Tips <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
