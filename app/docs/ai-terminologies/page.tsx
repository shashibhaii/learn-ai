"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AITerminologiesPage() {
    const terms = [
        {
            term: "Agent",
            definition: "An entity that perceives its environment through sensors and acts upon it through actuators to achieve goals.",
            example: "A chess-playing AI, a self-driving car, or a chatbot"
        },
        {
            term: "Environment",
            definition: "Everything outside the agent that it can perceive and interact with.",
            example: "The chessboard for a chess AI, the road for a self-driving car"
        },
        {
            term: "State",
            definition: "A configuration of the environment at a specific point in time.",
            example: "Current position of all chess pieces, current traffic situation"
        },
        {
            term: "Action",
            definition: "A choice the agent makes that changes the environment state.",
            example: "Moving a chess piece, steering the car left"
        },
        {
            term: "Heuristic",
            definition: "A rule of thumb or educated guess that helps solve problems faster but may not always be optimal.",
            example: "In chess: 'control the center' or 'develop pieces early'"
        },
        {
            term: "Inference",
            definition: "The process of deriving logical conclusions from available information.",
            example: "If it's raining and you have an umbrella, infer you should use it"
        },
        {
            term: "Model",
            definition: "A mathematical representation of a system learned from data.",
            example: "A neural network trained to recognize cats in images"
        },
        {
            term: "Training",
            definition: "The process of teaching a model by showing it examples and adjusting its parameters.",
            example: "Showing 10,000 cat images to teach the model what cats look like"
        },
        {
            term: "Feature",
            definition: "A measurable property or characteristic used as input to a model.",
            example: "For house prices: square footage, bedrooms, location"
        },
        {
            term: "Label",
            definition: "The correct answer or output for a training example.",
            example: "For an image of a cat, the label is 'cat'"
        }
    ];

    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                AI Terminologies
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Understanding AI terminology is essential for navigating the field. Here are the fundamental concepts you'll encounter throughout your AI journey.
            </p>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Core Concepts</h2>

            <div className="space-y-4 mb-12">
                {terms.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-xl hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-neon-blue mb-2">{item.term}</h3>
                        <p className="text-gray-300 mb-3">{item.definition}</p>
                        <div className="bg-black/40 p-3 rounded-lg border-l-2 border-neon-purple">
                            <span className="text-xs text-gray-500">Example: </span>
                            <span className="text-sm text-gray-400">{item.example}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Analytics Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="glass-panel p-8 rounded-xl border-2 border-blue-500/30">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Predictive Analytics</h3>
                    <p className="text-gray-400 mb-4">
                        Uses historical data to predict future outcomes. Answers "What will happen?"
                    </p>
                    <div className="bg-black/40 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-300 mb-2">Examples:</div>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>Weather forecasting</li>
                            <li>Stock price prediction</li>
                            <li>Customer churn prediction</li>
                            <li>Disease outbreak prediction</li>
                        </ul>
                    </div>
                    <div className="text-xs text-gray-500 italic">
                        Methods: Regression, time series, neural networks
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-xl border-2 border-purple-500/30">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Prescriptive Analytics</h3>
                    <p className="text-gray-400 mb-4">
                        Recommends actions to achieve desired outcomes. Answers "What should we do?"
                    </p>
                    <div className="bg-black/40 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-300 mb-2">Examples:</div>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>Route optimization</li>
                            <li>Resource allocation</li>
                            <li>Treatment recommendations</li>
                            <li>Investment strategies</li>
                        </ul>
                    </div>
                    <div className="text-xs text-gray-500 italic">
                        Methods: Optimization, simulation, reinforcement learning
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Agent-Environment Interaction</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="font-mono text-sm text-gray-300 space-y-3">
                    <div className="flex items-center gap-4">
                        <div className="w-32 text-right text-neon-blue">Environment</div>
                        <div className="flex-1 border-t-2 border-dashed border-white/20"></div>
                        <div className="text-gray-500">state</div>
                        <div className="flex-1 border-t-2 border-dashed border-white/20"></div>
                        <div className="w-32 text-neon-purple">Agent</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-32"></div>
                        <div className="flex-1 border-t-2 border-dashed border-white/20"></div>
                        <div className="text-gray-500">percept</div>
                        <div className="flex-1 border-t-2 border-dashed border-white/20"></div>
                        <div className="w-32"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-32 text-right text-neon-blue">Environment</div>
                        <div className="flex-1 border-t-2 border-dashed border-white/20"></div>
                        <div className="text-gray-500">action</div>
                        <div className="flex-1 border-t-2 border-dashed border-white/20"></div>
                        <div className="w-32 text-neon-purple">Agent</div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-6 text-center">
                    The agent perceives the environment state, decides on an action, and the environment responds with a new state
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Quick Reference</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {[
                    { term: "Supervised", desc: "Learning with labels" },
                    { term: "Unsupervised", desc: "Learning without labels" },
                    { term: "Reinforcement", desc: "Learning from rewards" },
                    { term: "Overfitting", desc: "Too specific to training data" },
                    { term: "Underfitting", desc: "Too simple to capture patterns" },
                    { term: "Bias", desc: "Systematic error" },
                    { term: "Variance", desc: "Sensitivity to data changes" },
                    { term: "Epoch", desc: "One pass through all data" },
                    { term: "Batch", desc: "Subset of training data" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white text-sm mb-1">{item.term}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-blue p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Pro Tip:</strong> Don't try to memorize all terms at once. They'll become natural as you work through examples and build projects.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-real-world">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/linear-algebra">
                    <Button className="gap-2">
                        Next: Linear Algebra <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
