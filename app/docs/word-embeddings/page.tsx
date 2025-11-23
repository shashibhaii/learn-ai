"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WordEmbeddingsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Word Embeddings
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Word embeddings represent words as dense vectors in continuous space, where similar words are close together. They capture semantic meaning and relationships between words.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Key Insight:</strong> "You shall know a word by the company it keeps" — Words appearing in similar contexts have similar meanings.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Why Embeddings?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel p-6 rounded-xl border-2 border-red-500/30">
                    <h3 className="text-xl font-bold text-red-400 mb-3">One-Hot Encoding ✗</h3>
                    <p className="text-gray-400 mb-3">Traditional approach: sparse, high-dimensional.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        cat: [1, 0, 0, 0, ..., 0]<br />
                        dog: [0, 1, 0, 0, ..., 0]<br />
                        Vocabulary size: 50,000+
                    </div>
                    <p className="text-xs text-gray-500">✗ No semantic similarity, huge dimensions</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-green-500/30">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Word Embeddings ✓</h3>
                    <p className="text-gray-400 mb-3">Dense vectors in low-dimensional space.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        cat: [0.2, -0.5, 0.8, ...]<br />
                        dog: [0.3, -0.4, 0.7, ...]<br />
                        Dimensions: 100-300
                    </div>
                    <p className="text-xs text-gray-500">✓ Captures meaning, similar words are close</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Popular Embedding Methods</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Word2Vec (2013)</h3>
                    <p className="text-gray-400 mb-3">Learn embeddings by predicting context words.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        <strong>CBOW:</strong> Predict word from context<br />
                        <strong>Skip-gram:</strong> Predict context from word<br />
                        Trained on large text corpus
                    </div>
                    <p className="text-xs text-gray-500">Fast, captures semantic relationships (king - man + woman ≈ queen)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">GloVe (2014)</h3>
                    <p className="text-gray-400 mb-3">Global Vectors for Word Representation.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Uses word co-occurrence statistics<br />
                        Combines global matrix factorization + local context<br />
                        Pre-trained on Wikipedia, Common Crawl
                    </div>
                    <p className="text-xs text-gray-500">Good for capturing word analogies and relationships</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">FastText (2016)</h3>
                    <p className="text-gray-400 mb-3">Extension of Word2Vec with subword information.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Represents words as bag of character n-grams<br />
                        Example: "where" → ["wh", "whe", "her", "ere", "re"]<br />
                        Handles out-of-vocabulary words
                    </div>
                    <p className="text-xs text-gray-500">✓ Works with rare words, morphologically rich languages</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Contextual Embeddings (BERT, GPT)</h3>
                    <p className="text-gray-400 mb-3">Different embeddings for same word in different contexts.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        "bank" in "river bank" vs "savings bank" → different vectors<br />
                        Generated by transformer models<br />
                        State-of-the-art for most NLP tasks
                    </div>
                    <p className="text-xs text-gray-500">✓ Captures context, polysemy | ✗ Computationally expensive</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Embedding Properties</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Semantic Similarity</h3>
                    <p className="text-gray-400 mb-3">Similar words have similar vectors.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        cosine_similarity(cat, dog) ≈ 0.8<br />
                        cosine_similarity(cat, car) ≈ 0.2
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Analogies (Vector Arithmetic)</h3>
                    <p className="text-gray-400 mb-3">Relationships encoded in vector space.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        king - man + woman ≈ queen<br />
                        Paris - France + Italy ≈ Rome<br />
                        walking - walk + swim ≈ swimming
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Clustering</h3>
                    <p className="text-gray-400 mb-3">Related words cluster together.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Animals: cat, dog, bird, fish<br />
                        Colors: red, blue, green, yellow<br />
                        Countries: USA, France, Japan, Brazil
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Using Pre-trained Embeddings</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <h3 className="text-lg font-bold text-white mb-3">Popular Pre-trained Models</h3>
                <div className="space-y-2 text-sm text-gray-300">
                    <div><strong className="text-neon-blue">Word2Vec:</strong> Google News (3B words, 300d)</div>
                    <div><strong className="text-neon-purple">GloVe:</strong> Wikipedia + Gigaword (6B tokens, 50-300d)</div>
                    <div><strong className="text-green-400">FastText:</strong> Common Crawl (600B tokens, 300d)</div>
                    <div><strong className="text-yellow-400">BERT:</strong> Contextual, 768d (base) or 1024d (large)</div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Text Classification", desc: "Use embeddings as features for classifiers" },
                    { title: "Semantic Search", desc: "Find similar documents using vector similarity" },
                    { title: "Recommendation", desc: "Recommend similar items based on embeddings" },
                    { title: "Machine Translation", desc: "Map words across languages" },
                    { title: "Named Entity Recognition", desc: "Input features for sequence models" },
                    { title: "Sentiment Analysis", desc: "Capture emotional nuances" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Choosing Embeddings</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Static embeddings (Word2Vec, GloVe): Fast, good for simple tasks",
                    "FastText: Best for morphologically rich languages, rare words",
                    "Contextual (BERT, GPT): State-of-the-art, but slower and heavier",
                    "Dimension size: 100-300 for static, 768+ for contextual",
                    "Always try pre-trained embeddings before training from scratch",
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
                    <strong className="text-neon-purple">Key Takeaway:</strong> Word embeddings transform words into meaningful vectors. Word2Vec and GloVe are classics, but contextual embeddings (BERT) are now state-of-the-art for most tasks.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/nlp-basics">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/text-classification">
                    <Button className="gap-2">
                        Next: Text Classification <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
