"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoboticsAIPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Robotics AI
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                AI enables robots to perceive their environment, make decisions, and perform complex tasks autonomously. From self-driving cars to warehouse automation, robotics AI is transforming industries.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Challenge:</strong> Robots must operate in the real world—unpredictable, dynamic, and safety-critical.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Key Components</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { icon: "👁️", title: "Perception", desc: "Computer vision, LIDAR, sensors to understand environment" },
                    { icon: "🧠", title: "Planning", desc: "Path planning, motion planning, task planning" },
                    { icon: "🎮", title: "Control", desc: "Execute actions, maintain stability, handle dynamics" },
                    { icon: "🤖", title: "Learning", desc: "Reinforcement learning, imitation learning, sim-to-real" },
                ].map((component, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-lg"
                    >
                        <div className="text-4xl mb-3">{component.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{component.title}</h3>
                        <p className="text-sm text-gray-400">{component.desc}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Applications</h2>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Autonomous Vehicles", desc: "Self-driving cars, delivery robots, drones" },
                    { title: "Manufacturing", desc: "Assembly, welding, quality inspection" },
                    { title: "Warehouse Automation", desc: "Picking, packing, sorting (Amazon, Ocado)" },
                    { title: "Healthcare", desc: "Surgical robots, rehabilitation, elderly care" },
                    { title: "Agriculture", desc: "Harvesting, weeding, crop monitoring" },
                    { title: "Exploration", desc: "Space rovers, underwater robots, disaster response" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Robotics AI combines perception (vision, sensors), planning (path finding), and control (execution). Applications range from autonomous vehicles to warehouse automation.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/mlops-tools">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/healthcare-ai">
                    <Button className="gap-2">
                        Next: Healthcare AI <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
