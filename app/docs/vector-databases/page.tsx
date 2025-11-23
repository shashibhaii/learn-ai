"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function VectorDatabasesPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Vector Databases</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Vector databases are specialized databases designed to store and search high-dimensional vectors (embeddings). They're essential for RAG, semantic search, and recommendation systems.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What are Embeddings?</h2>
            <p className="text-gray-400 mb-6">
                Embeddings are numerical representations of text, images, or other data. Similar items have similar vectors, enabling semantic search.
            </p>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <code className="text-sm text-gray-300">
                    "cat" → [0.2, 0.8, 0.1, ...]  (768 dimensions)<br />
                    "dog" → [0.3, 0.7, 0.2, ...]  (similar to cat!)<br />
                    "car" → [0.9, 0.1, 0.8, ...]  (different)
                </code>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Popular Vector Databases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Pinecone</h3>
                    <p className="text-sm text-gray-400 mb-2">Fully managed, serverless. Easy to use, scales automatically.</p>
                    <p className="text-xs text-gray-500">Best for: Production apps, no ops</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">Weaviate</h3>
                    <p className="text-sm text-gray-400 mb-2">Open-source, GraphQL API. Built-in vectorization.</p>
                    <p className="text-xs text-gray-500">Best for: Flexibility, self-hosting</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Chroma</h3>
                    <p className="text-sm text-gray-400 mb-2">Lightweight, Python-first. Great for prototyping.</p>
                    <p className="text-xs text-gray-500">Best for: Local dev, quick start</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Qdrant</h3>
                    <p className="text-sm text-gray-400 mb-2">Rust-based, high performance. Advanced filtering.</p>
                    <p className="text-xs text-gray-500">Best for: Speed, complex queries</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Vector Search Example</h3>
            <p className="text-gray-400 mb-4">
                Simplified example of similarity search using cosine similarity.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Simplified embeddings (in reality: 768+ dimensions)
embeddings = {
    "Python tutorial": [0.8, 0.2, 0.1],
    "JavaScript guide": [0.7, 0.3, 0.2],
    "Cooking recipe": [0.1, 0.1, 0.9],
    "Programming basics": [0.9, 0.1, 0.1]
}

# Query
query = "Learn Python"
query_vec = [0.85, 0.15, 0.05]

# Find most similar
results = []
for doc, vec in embeddings.items():
    score = cosine_similarity(query_vec, vec)
    results.append((doc, score))

results.sort(key=lambda x: x[1], reverse=True)

print("Query:", query)
print("\\nTop Results:")
for doc, score in results[:3]:
    print(f"  {doc}: {score:.3f}")`}
                expectedOutput={`Query: Learn Python

Top Results:
  Programming basics: 0.997
  Python tutorial: 0.995
  JavaScript guide: 0.986`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key Concepts</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>ANN (Approximate Nearest Neighbors):</strong> Fast search algorithm (HNSW, IVF)</li>
                <li><strong>Indexing:</strong> Organize vectors for efficient retrieval</li>
                <li><strong>Metadata Filtering:</strong> Combine vector search with traditional filters</li>
                <li><strong>Hybrid Search:</strong> Combine semantic (vector) + keyword (BM25) search</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/rag-intro">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/advanced-rag">
                    <Button className="gap-2">
                        Next: Advanced RAG <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
