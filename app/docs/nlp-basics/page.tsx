"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NLPBasicsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                NLP Basics & Tokenization
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. The first step is converting text into a format models can process: tokenization.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Challenge:</strong> Language is complex, ambiguous, and context-dependent. NLP bridges the gap between human communication and machine understanding.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Text Preprocessing Pipeline</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    {[
                        { step: "1. Lowercasing", desc: "Convert all text to lowercase for consistency" },
                        { step: "2. Tokenization", desc: "Split text into words or subwords" },
                        { step: "3. Remove Punctuation", desc: "Strip special characters (optional)" },
                        { step: "4. Remove Stop Words", desc: "Filter common words (the, is, at)" },
                        { step: "5. Stemming/Lemmatization", desc: "Reduce words to root form" },
                        { step: "6. Vectorization", desc: "Convert tokens to numbers" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center text-sm font-bold shrink-0">
                                {idx + 1}
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-white text-sm">{item.step.split('. ')[1]}</div>
                                <div className="text-xs text-gray-400">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Tokenization Methods</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Word Tokenization</h3>
                    <p className="text-gray-400 mb-3">Split by whitespace and punctuation.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Input: "Hello, world!"<br />
                        Output: ["Hello", ",", "world", "!"]
                    </div>
                    <p className="text-xs text-gray-500">✓ Simple, intuitive | ✗ Large vocabulary, can't handle unknown words</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Character Tokenization</h3>
                    <p className="text-gray-400 mb-3">Split into individual characters.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Input: "Hello"<br />
                        Output: ["H", "e", "l", "l", "o"]
                    </div>
                    <p className="text-xs text-gray-500">✓ Small vocabulary, no unknown words | ✗ Long sequences, loses word meaning</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Subword Tokenization (BPE, WordPiece)</h3>
                    <p className="text-gray-400 mb-3">Split into meaningful subword units. Best of both worlds!</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Input: "unhappiness"<br />
                        Output: ["un", "happiness"] or ["un", "happy", "ness"]
                    </div>
                    <p className="text-xs text-gray-500">✓ Handles unknown words, reasonable vocabulary size | Used in: BERT, GPT, T5</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import nltk
from nltk.tokenize import word_tokenize, sent_tokenize

# Download required data (run once)
# nltk.download('punkt')

text = "Hello! This is NLP. It's amazing, isn't it?"

# Sentence tokenization
sentences = sent_tokenize(text)
print("Sentences:")
for i, sent in enumerate(sentences, 1):
    print(f"  {i}. {sent}")

# Word tokenization
words = word_tokenize(text)
print(f"\\nWords: {words}")
print(f"Total tokens: {len(words)}")

# Lowercase and remove punctuation
words_clean = [w.lower() for w in words if w.isalnum()]
print(f"\\nCleaned: {words_clean}")`}
                expectedOutput={`Sentences:
  1. Hello!
  2. This is NLP.
  3. It's amazing, isn't it?

Words: ['Hello', '!', 'This', 'is', 'NLP', '.', 'It', "'s", 'amazing', ',', 'is', "n't", 'it', '?']
Total tokens: 14

Cleaned: ['hello', 'this', 'is', 'nlp', 'it', 's', 'amazing', 'is', 'it']`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Text Normalization</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Stemming</h3>
                    <p className="text-gray-400 mb-3">Chop off word endings to get root.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        running → run<br />
                        flies → fli<br />
                        better → better
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Fast but crude, may not be real words</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Lemmatization</h3>
                    <p className="text-gray-400 mb-3">Reduce to dictionary form (lemma).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        running → run<br />
                        flies → fly<br />
                        better → good
                    </div>
                    <p className="text-xs text-gray-500 mt-2">More accurate, uses linguistic knowledge</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Common NLP Tasks</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Text Classification", desc: "Categorize documents (spam, sentiment, topic)" },
                    { title: "Named Entity Recognition", desc: "Extract entities (person, location, organization)" },
                    { title: "Machine Translation", desc: "Translate between languages" },
                    { title: "Question Answering", desc: "Answer questions from text" },
                    { title: "Text Summarization", desc: "Generate concise summaries" },
                    { title: "Sentiment Analysis", desc: "Determine emotional tone" },
                ].map((task, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{task.title}</div>
                        <div className="text-sm text-gray-400">{task.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Challenges in NLP</h2>

            <div className="space-y-3 mb-8">
                {[
                    { challenge: "Ambiguity", example: "I saw her duck (bird or action?)" },
                    { challenge: "Context Dependence", example: "Bank (river or financial?)" },
                    { challenge: "Sarcasm & Irony", example: "Great, another meeting!" },
                    { challenge: "Multiple Languages", example: "Different grammar, scripts, idioms" },
                    { challenge: "Informal Text", example: "Slang, typos, abbreviations (lol, brb)" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-yellow-400 mb-1">⚠️ {item.challenge}</div>
                        <div className="text-sm text-gray-300">{item.example}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Tokenization is the foundation of NLP. Modern models use subword tokenization (BPE, WordPiece) to balance vocabulary size and coverage.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/image-segmentation">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/word-embeddings">
                    <Button className="gap-2">
                        Next: Word Embeddings <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
