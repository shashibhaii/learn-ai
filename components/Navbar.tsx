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
                    <Link href="/docs/intro-to-ai" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Docs
                    </Link>
                    <Link href="/courses" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Courses
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/community" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Community
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block">
                        Sign In
                    </Link>
                    <Button size="sm" variant="primary">
                        Get Started
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
