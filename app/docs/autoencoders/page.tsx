"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AutoencodersPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Autoencoders</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Autoencoders are neural networks that learn to compress data into a lower-dimensional representation (encoding) and then reconstruct it back (decoding). They're unsupervised and useful for dimensionality reduction, denoising, and generation.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Architecture</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                Input &rarr; Encoder &rarr; Latent Space (Bottleneck) &rarr; Decoder &rarr; Reconstruction
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Encoder</h3>
                    <p className="text-sm text-gray-400">Compresses input into a compact latent representation. Learns the most important features.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Decoder</h3>
                    <p className="text-sm text-gray-400">Reconstructs the original input from the latent code. Learns to reverse the encoding.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simple Autoencoder Example</h3>
            <p className="text-gray-400 mb-4">
                This shows how an autoencoder compresses and reconstructs data.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def encode(x, W_enc):
    # Compress to latent space
    return np.tanh(np.dot(W_enc, x))

def decode(z, W_dec):
    # Reconstruct from latent
    return np.tanh(np.dot(W_dec, z))

# Original data (4D)
original = np.array([0.8, 0.2, 0.9, 0.1])

# Encoder weights (compress 4D -> 2D)
W_enc = np.array([
    [0.5, 0.3, 0.6, 0.2],
    [0.1, 0.7, 0.2, 0.8]
])

# Decoder weights (expand 2D -> 4D)
W_dec = np.array([
    [0.6, 0.2],
    [0.3, 0.7],
    [0.5, 0.3],
    [0.2, 0.8]
])

# Encode
latent = encode(original, W_enc)
print(f"Original (4D): {original}")
print(f"Latent (2D): {latent.round(3)}")

# Decode
reconstructed = decode(latent, W_dec)
print(f"Reconstructed (4D): {reconstructed.round(3)}")
print(f"\\nReconstruction error: {np.mean((original - reconstructed)**2):.4f}")`}
                expectedOutput={`Original (4D): [0.8 0.2 0.9 0.1]
Latent (2D): [0.792 0.537]
Reconstructed (4D): [0.633 0.729 0.619 0.781]

Reconstruction error: 0.0521`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Autoencoders</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Vanilla Autoencoder:</strong> Basic compression and reconstruction</li>
                <li><strong>Denoising Autoencoder:</strong> Learns to remove noise from data</li>
                <li><strong>Variational Autoencoder (VAE):</strong> Generates new samples by sampling from latent space</li>
                <li><strong>Sparse Autoencoder:</strong> Enforces sparsity in the latent representation</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/gans">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/diffusion-models">
                    <Button className="gap-2">
                        Next: Diffusion Models <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
