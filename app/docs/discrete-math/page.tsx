"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DiscreteMathPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Discrete Mathematics
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Discrete mathematics deals with countable, distinct objects. While not as central as calculus or linear algebra, it's valuable for understanding algorithms, complexity, and certain AI architectures.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Why it matters:</strong> Graph neural networks, combinatorial optimization, and algorithm analysis all rely on discrete math concepts.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Logic & Proofs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-neon-blue mb-3">Propositional Logic</h3>
                    <p className="text-gray-400 mb-3">Statements that are true or false.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        P: "It is raining"<br />
                        Q: "I have an umbrella"<br />
                        P ∧ Q: Both are true<br />
                        P ∨ Q: At least one is true
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-bold text-neon-purple mb-3">Logical Operators</h3>
                    <p className="text-gray-400 mb-3">Combine and modify propositions.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        ∧ (AND), ∨ (OR), ¬ (NOT)<br />
                        → (implies), ↔ (if and only if)<br />
                        ⊕ (XOR)
                    </div>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Graph Theory</h2>
            <p className="text-gray-400 mb-6">
                Graphs model relationships between objects. Essential for social networks, knowledge graphs, and Graph Neural Networks (GNNs).
            </p>

            <div className="space-y-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-blue-500"
                >
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Graph Basics</h3>
                    <p className="text-gray-400 mb-3">
                        G = (V, E) where V is vertices (nodes) and E is edges (connections).
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                        <div><strong>Directed:</strong> Edges have direction</div>
                        <div><strong>Undirected:</strong> Edges are bidirectional</div>
                        <div><strong>Weighted:</strong> Edges have values</div>
                        <div><strong>Cyclic:</strong> Contains loops</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-purple-500"
                >
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Graph Algorithms</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                        <div><strong>BFS:</strong> Breadth-first search</div>
                        <div><strong>DFS:</strong> Depth-first search</div>
                        <div><strong>Dijkstra:</strong> Shortest path</div>
                        <div><strong>PageRank:</strong> Node importance</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl border-l-4 border-green-500"
                >
                    <h3 className="text-xl font-bold text-green-400 mb-3">AI Applications</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Graph Neural Networks (GNNs) for molecular property prediction</li>
                        <li>Knowledge graphs for reasoning and QA systems</li>
                        <li>Social network analysis</li>
                        <li>Recommendation systems (user-item graphs)</li>
                    </ul>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Combinatorics</h2>
            <p className="text-gray-400 mb-6">
                The mathematics of counting. Important for understanding complexity and probability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Permutations</h3>
                    <p className="text-gray-400 mb-3">Arrangements where order matters.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        P(n, k) = n! / (n-k)!<br />
                        Example: 5 people, 3 positions<br />
                        P(5, 3) = 60 ways
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Combinations</h3>
                    <p className="text-gray-400 mb-3">Selections where order doesn't matter.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        C(n, k) = n! / (k!(n-k)!)<br />
                        Example: Choose 3 from 5<br />
                        C(5, 3) = 10 ways
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Set Theory</h2>
            <p className="text-gray-400 mb-6">
                Foundation of mathematics. Sets are collections of distinct objects.
            </p>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div><strong>∪ (Union):</strong> A ∪ B = all elements in A or B</div>
                    <div><strong>∩ (Intersection):</strong> A ∩ B = elements in both</div>
                    <div><strong>− (Difference):</strong> A − B = in A but not B</div>
                    <div><strong>⊆ (Subset):</strong> A ⊆ B = all of A is in B</div>
                    <div><strong>∅ (Empty set):</strong> Set with no elements</div>
                    <div><strong>|A| (Cardinality):</strong> Number of elements</div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Complexity Theory</h2>
            <p className="text-gray-400 mb-6">
                Understanding algorithm efficiency using Big O notation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                    { notation: "O(1)", name: "Constant", example: "Array access" },
                    { notation: "O(log n)", name: "Logarithmic", example: "Binary search" },
                    { notation: "O(n)", name: "Linear", example: "Loop through array" },
                    { notation: "O(n log n)", name: "Linearithmic", example: "Merge sort" },
                    { notation: "O(n²)", name: "Quadratic", example: "Nested loops" },
                    { notation: "O(2ⁿ)", name: "Exponential", example: "Recursive fib" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-mono text-neon-blue font-bold mb-1">{item.notation}</div>
                        <div className="text-sm text-white mb-1">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.example}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">AI Relevance</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Graph Neural Networks use graph theory",
                    "Complexity analysis for algorithm efficiency",
                    "Combinatorics in search spaces and optimization",
                    "Logic in knowledge representation and reasoning",
                    "Set theory in data structures and databases",
                    "Boolean algebra in neural network activations",
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">▹</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> While less central than calculus or linear algebra, discrete math is essential for graph-based AI, algorithm design, and computational complexity.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/probability-statistics">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/data-collection">
                    <Button className="gap-2">
                        Next: Data Collection <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
