"use client";

import { Card } from "@/components/ui/Card";
import { Brain, Code, Trophy, Users } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Interactive Learning",
        description: "Learn by doing with our state-of-the-art interactive modules that adapt to your pace.",
    },
    {
        icon: Code,
        title: "AI Playground",
        description: "Experiment with real AI models in our browser-based sandbox environment.",
    },
    {
        icon: Trophy,
        title: "Industry Certification",
        description: "Earn recognized certificates upon completion to boost your career prospects.",
    },
    {
        icon: Users,
        title: "Global Community",
        description: "Connect with thousands of AI enthusiasts and experts from around the world.",
    },
];

export function Features() {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose <span className="text-neon-blue">AI Portal</span>?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience the next evolution of online education with our cutting-edge platform features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="hover:bg-white/5 transition-colors group border-white/5 hover:border-neon-blue/30">
                            <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-neon-blue" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
