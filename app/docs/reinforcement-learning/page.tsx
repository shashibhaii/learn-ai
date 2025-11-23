"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReinforcementLearningPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Reinforcement Learning
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Reinforcement Learning (RL) is learning through trial and error. An agent learns to make decisions by interacting with an environment, receiving rewards for good actions and penalties for bad ones.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Key Idea:</strong> Learn optimal behavior through experience, not from labeled examples. Like teaching a dog tricks with treats!
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Core Concepts</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-12">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center font-bold shrink-0">A</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Agent</div>
                            <div className="text-sm text-gray-400">The learner/decision maker (e.g., game player, robot)</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-neon-purple flex items-center justify-center font-bold shrink-0">E</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Environment</div>
                            <div className="text-sm text-gray-400">The world the agent interacts with</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center font-bold shrink-0">S</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">State</div>
                            <div className="text-sm text-gray-400">Current situation/configuration</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold shrink-0">A</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Action</div>
                            <div className="text-sm text-gray-400">What the agent can do</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center font-bold shrink-0">R</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Reward</div>
                            <div className="text-sm text-gray-400">Feedback signal (positive or negative)</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">The RL Loop</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold">1</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Observe State</div>
                            <div className="text-sm text-gray-400">Agent sees current state of environment</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold">2</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Choose Action</div>
                            <div className="text-sm text-gray-400">Agent selects action based on policy</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold">3</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Receive Reward</div>
                            <div className="text-sm text-gray-400">Environment gives reward signal</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">4</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Update Policy</div>
                            <div className="text-sm text-gray-400">Agent learns to improve future decisions</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center font-bold">5</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Repeat</div>
                            <div className="text-sm text-gray-400">Continue until goal is achieved</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Algorithms</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Q-Learning</h3>
                    <p className="text-gray-400 mb-3">Learn value of state-action pairs (Q-values).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Q(s,a) = expected total reward from state s, taking action a<br />
                        Update: Q(s,a) ← Q(s,a) + α[r + γ max Q(s',a') - Q(s,a)]
                    </div>
                    <p className="text-xs text-gray-500">Model-free, off-policy learning</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Deep Q-Network (DQN)</h3>
                    <p className="text-gray-400 mb-3">Use neural network to approximate Q-function.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Combines Q-learning with deep learning<br />
                        Experience replay + target network for stability
                    </div>
                    <p className="text-xs text-gray-500">Breakthrough: Atari games, Go</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Policy Gradient</h3>
                    <p className="text-gray-400 mb-3">Directly learn policy (action probabilities).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Optimize policy parameters to maximize expected reward<br />
                        Works for continuous action spaces
                    </div>
                    <p className="text-xs text-gray-500">Examples: REINFORCE, PPO, A3C</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Actor-Critic</h3>
                    <p className="text-gray-400 mb-3">Combine value-based and policy-based methods.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Actor: learns policy (what to do)<br />
                        Critic: learns value function (how good is state)
                    </div>
                    <p className="text-xs text-gray-500">Best of both worlds: stable and efficient</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Exploration vs Exploitation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="glass-panel p-6 rounded-xl border-2 border-blue-500/30">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Exploration</h3>
                    <p className="text-gray-400 mb-3">Try new actions to discover better strategies.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        "Should I try a new restaurant?"
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-purple-500/30">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Exploitation</h3>
                    <p className="text-gray-400 mb-3">Use current knowledge to maximize reward.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        "Should I go to my favorite restaurant?"
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-white mb-3">ε-Greedy Strategy</h3>
                <p className="text-gray-400 mb-3">Balance exploration and exploitation.</p>
                <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                    With probability ε: explore (random action)<br />
                    With probability 1-ε: exploit (best known action)<br />
                    Typically start with high ε, decrease over time
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { icon: "🎮", title: "Game Playing", desc: "Chess, Go, Atari, Dota 2" },
                    { icon: "🤖", title: "Robotics", desc: "Walking, grasping, navigation" },
                    { icon: "🚗", title: "Autonomous Vehicles", desc: "Self-driving cars" },
                    { icon: "💰", title: "Finance", desc: "Trading, portfolio optimization" },
                    { icon: "🏭", title: "Resource Management", desc: "Data center cooling, energy" },
                    { icon: "🎯", title: "Recommendation", desc: "Personalized content delivery" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="text-3xl mb-2">{app.icon}</div>
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Challenges</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Sample inefficiency: needs many interactions",
                    "Credit assignment: which action led to reward?",
                    "Sparse rewards: feedback is delayed or rare",
                    "Exploration: finding good strategies is hard",
                    "Stability: training can be unstable",
                ].map((challenge, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-yellow-400">⚠️</span>
                        <span className="text-gray-300 text-sm">{challenge}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> RL learns through interaction and rewards. It's powerful for sequential decision-making but requires careful design of rewards and exploration strategies.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/unsupervised-learning">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/model-evaluation">
                    <Button className="gap-2">
                        Next: Model Evaluation <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
