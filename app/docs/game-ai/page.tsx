"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GameAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Game AI
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                AI in games creates intelligent opponents, generates content, and enhances player experience. From chess-playing algorithms to procedurally generated worlds, game AI pushes the boundaries of what's possible.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Milestone:</strong> AlphaGo defeated world champion Lee Sedol in 2016. AlphaStar reached Grandmaster level in StarCraft II.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Types of Game AI</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "NPC Behavior", desc: "Pathfinding, decision trees, behavior trees for realistic characters" },
                    { title: "Game Playing", desc: "AI that plays games at superhuman level (Chess, Go, Dota 2)" },
                    { title: "Procedural Generation", desc: "Generate levels, terrain, quests automatically" },
                    { title: "Player Modeling", desc: "Adapt difficulty, personalize experience" },
                    { title: "Testing & QA", desc: "AI agents test games, find bugs" },
                ].map((type, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{type.title}</div>
                        <div className="text-sm text-gray-400">{type.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Notable AI Achievements</h2>

            <div className="space-y-3 mb-8">
                {[
                    { game: "Chess", achievement: "Deep Blue (1997), Stockfish, AlphaZero" },
                    { game: "Go", achievement: "AlphaGo (2016), superhuman performance" },
                    { game: "Poker", achievement: "Libratus, Pluribus beat top pros" },
                    { game: "StarCraft II", achievement: "AlphaStar reached Grandmaster" },
                    { game: "Dota 2", achievement: "OpenAI Five beat world champions" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-neon-blue mb-1">{item.game}</div>
                        <div className="text-sm text-gray-300">{item.achievement}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Game AI creates intelligent opponents, generates content, and tests games. Reinforcement learning has achieved superhuman performance in complex games.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/finance-ai">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/perceptrons">
                    <Button className="gap-2">
                        Next: Perceptrons <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
