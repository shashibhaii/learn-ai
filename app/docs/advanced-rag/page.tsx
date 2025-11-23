"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AdvancedRAGPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Advanced RAG Techniques</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Basic RAG works well, but advanced techniques can significantly improve accuracy, relevance, and user experience. Here are the cutting-edge approaches.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">RAG Variations</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-blue">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">1. Naive RAG</h3>
                    <p className="text-sm text-gray-400 mb-3">Basic: Retrieve → Augment → Generate. Simple but effective baseline.</p>
                    <p className="text-xs text-gray-500">Use when: Simple Q&A, small knowledge base</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-purple">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">2. Sentence-Window RAG</h3>
                    <p className="text-sm text-gray-400 mb-3">Retrieve small chunks, but provide larger context window to LLM.</p>
                    <p className="text-xs text-gray-500">Use when: Need precise retrieval + broader context</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-green-400 mb-2">3. Auto-Merging RAG</h3>
                    <p className="text-sm text-gray-400 mb-3">Hierarchical chunks. Merge child chunks if multiple from same parent retrieved.</p>
                    <p className="text-xs text-gray-500">Use when: Long documents, need coherent sections</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-400">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">4. Fusion RAG</h3>
                    <p className="text-sm text-gray-400 mb-3">Generate multiple query variations, retrieve for each, fuse results.</p>
                    <p className="text-xs text-gray-500">Use when: Complex queries, need comprehensive coverage</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Query Transformation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Query Rewriting</h3>
                    <p className="text-sm text-gray-400">Use LLM to rephrase query for better retrieval.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        "How do I...?" → "Steps to..."
                    </code>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">HyDE</h3>
                    <p className="text-sm text-gray-400">Generate hypothetical document, use it for retrieval.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        Query → LLM generates answer → Embed → Search
                    </code>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Re-ranking</h2>
            <p className="text-gray-400 mb-6">
                After initial retrieval, use a specialized model to re-rank results for better relevance.
            </p>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
                    <li>Retrieve top-100 candidates (fast, approximate)</li>
                    <li>Re-rank with cross-encoder (slow, accurate)</li>
                    <li>Return top-5 to LLM</li>
                </ol>
                <p className="text-xs text-gray-500 mt-4">Popular: Cohere Rerank, bge-reranker</p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Agentic RAG</h2>
            <p className="text-gray-400 mb-6">
                Combine RAG with agent capabilities. Agent decides when to retrieve, what to retrieve, and how to use it.
            </p>

            <div className="space-y-3 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">✓ <strong>Routing:</strong> Direct query to appropriate knowledge source</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">✓ <strong>Multi-step:</strong> Break complex query into sub-queries</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">✓ <strong>Self-correction:</strong> Retrieve again if answer is insufficient</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Evaluation Metrics</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Retrieval Precision:</strong> % of retrieved docs that are relevant</li>
                <li><strong>Retrieval Recall:</strong> % of relevant docs that were retrieved</li>
                <li><strong>Answer Relevance:</strong> Does answer address the question?</li>
                <li><strong>Faithfulness:</strong> Is answer grounded in retrieved context?</li>
                <li><strong>Context Relevance:</strong> Is retrieved context actually useful?</li>
            </ul>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Framework:</strong> Use LlamaIndex or LangChain for implementing these advanced RAG patterns.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/vector-databases">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/ai-agents-intro">
                    <Button className="gap-2">
                        Next: AI Agents <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
