"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function RAGIntroPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Introduction to RAG</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Retrieval-Augmented Generation (RAG) combines the power of LLMs with external knowledge retrieval. Instead of relying solely on the model's training data, RAG fetches relevant information from a knowledge base in real-time.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Why RAG?</strong> LLMs have knowledge cutoffs and can hallucinate. RAG grounds responses in real, up-to-date information.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How RAG Works</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                1. User Query → Embed query into vector<br />
                2. Search → Find similar documents in vector DB<br />
                3. Retrieve → Get top-k most relevant chunks<br />
                4. Augment → Add retrieved context to prompt<br />
                5. Generate → LLM produces answer with context
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Retrieval</h3>
                    <p className="text-sm text-gray-400">Find relevant documents using semantic search (embeddings + vector DB).</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Augmentation</h3>
                    <p className="text-sm text-gray-400">Inject retrieved context into the LLM prompt as additional information.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Generation</h3>
                    <p className="text-sm text-gray-400">LLM generates answer based on both its knowledge and retrieved context.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simple RAG Pipeline</h3>
            <p className="text-gray-400 mb-4">
                Conceptual example of a RAG system (simplified).
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Simplified RAG Pipeline
class SimpleRAG:
    def __init__(self, documents):
        self.documents = documents
    
    def retrieve(self, query, top_k=2):
        # In reality: use embeddings + vector search
        # Here: simple keyword matching
        results = [doc for doc in self.documents 
                   if query.lower() in doc.lower()]
        return results[:top_k]
    
    def generate(self, query, context):
        # In reality: call LLM API
        prompt = f"Context: {context}\\n\\nQuestion: {query}"
        return f"Answer based on: {context[:50]}..."

# Example usage
docs = [
    "Python is a programming language created in 1991.",
    "RAG combines retrieval with generation.",
    "Vector databases store embeddings."
]

rag = SimpleRAG(docs)
query = "What is Python?"
context = rag.retrieve(query)
answer = rag.generate(query, str(context))

print(f"Query: {query}")
print(f"Retrieved: {len(context)} documents")
print(f"Answer: {answer}")`}
                expectedOutput={`Query: What is Python?
Retrieved: 1 documents
Answer based on: ['Python is a programming language created in 1...`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Benefits of RAG</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Up-to-date Information:</strong> Access latest data without retraining</li>
                <li><strong>Reduced Hallucinations:</strong> Grounded in real documents</li>
                <li><strong>Source Attribution:</strong> Can cite where information came from</li>
                <li><strong>Domain Expertise:</strong> Add specialized knowledge easily</li>
                <li><strong>Cost-effective:</strong> Cheaper than fine-tuning for knowledge updates</li>
            </ul>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/llm-evaluation">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/vector-databases">
                    <Button className="gap-2">
                        Next: Vector Databases <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
