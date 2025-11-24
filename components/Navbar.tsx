"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10"
        >
            <div className="w-full px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                    AI<span className="text-neon-blue">Portal</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/docs/intro-to-ai" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Docs
                    </Link>
                    <Link href="/courses" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Courses
                    </Link>
                    <Link href="/community" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Community
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/profile" className="flex items-center gap-2 group">
                        <div className="text-right hidden sm:block">
                            <div className="text-xs text-gray-400 group-hover:text-white transition-colors">Alex Cyber</div>
                            <div className="text-[10px] text-neon-blue">Lvl 12</div>
                        </div>
                        <div className="w-9 h-9 rounded-full border border-neon-blue/30 p-0.5 group-hover:border-neon-blue transition-colors">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4"
                                alt="Profile"
                                className="w-full h-full rounded-full bg-black"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
