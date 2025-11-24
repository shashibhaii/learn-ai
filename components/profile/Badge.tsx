"use client";

import { Badge as BadgeType } from "@/lib/mockData";
import { motion } from "framer-motion";
import { useState } from "react";

interface BadgeProps {
    badge: BadgeType;
    index: number;
}

export function Badge({ badge, index }: BadgeProps) {
    const [isHovered, setIsHovered] = useState(false);

    const colorStyles = {
        blue: { bg: "bg-blue-500/20", border: "border-blue-500/50", icon: "text-blue-400", glow: "shadow-blue-500/50" },
        purple: { bg: "bg-purple-500/20", border: "border-purple-500/50", icon: "text-purple-400", glow: "shadow-purple-500/50" },
        green: { bg: "bg-green-500/20", border: "border-green-500/50", icon: "text-green-400", glow: "shadow-green-500/50" },
        pink: { bg: "bg-pink-500/20", border: "border-pink-500/50", icon: "text-pink-400", glow: "shadow-pink-500/50" },
    }[badge.color];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`w-24 h-24 rounded-full ${colorStyles.bg} border-2 ${colorStyles.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${isHovered ? colorStyles.glow : ""}`}>
                <badge.icon className={`w-10 h-10 ${colorStyles.icon}`} />
            </div>

            {/* Tooltip */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 bg-black/90 border border-white/20 p-3 rounded-lg z-50 pointer-events-none backdrop-blur-md"
                >
                    <div className={`text-sm font-bold mb-1 ${colorStyles.icon}`}>{badge.name}</div>
                    <div className="text-xs text-gray-400">{badge.description}</div>
                    <div className="text-[10px] text-gray-500 mt-2 text-right">Earned: {badge.earnedDate}</div>
                </motion.div>
            )}
        </motion.div>
    );
}
