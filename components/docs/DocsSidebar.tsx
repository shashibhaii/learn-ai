"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const docLinks = [
    {
        category: "Getting Started",
        items: [
            { title: "Introduction to AI", href: "/docs/intro-to-ai" },
            { title: "What is Machine Learning?", href: "/docs/what-is-ml" },
            { title: "Deep Learning Basics", href: "/docs/deep-learning-basics" },
        ],
    },
    {
        category: "Python for AI",
        items: [
            { title: "Python Syntax", href: "/docs/python-syntax" },
            { title: "NumPy Arrays", href: "/docs/numpy-arrays" },
            { title: "Pandas DataFrames", href: "/docs/pandas-dataframes" },
        ],
    },
    {
        category: "Neural Networks",
        items: [
            { title: "Perceptrons", href: "/docs/perceptrons" },
            { title: "Activation Functions", href: "/docs/activation-functions" },
            { title: "Backpropagation", href: "/docs/backpropagation" },
        ],
    },
    {
        category: "Advanced Networks",
        items: [
            { title: "Convolutional Neural Networks", href: "/docs/cnns" },
            { title: "Recurrent Neural Networks", href: "/docs/rnns" },
            { title: "LSTMs & GRUs", href: "/docs/lstms-grus" },
        ],
    },
    {
        category: "Modern AI",
        items: [
            { title: "Transformers", href: "/docs/transformers" },
            { title: "Attention Mechanism", href: "/docs/attention" },
            { title: "Transfer Learning", href: "/docs/transfer-learning" },
        ],
    },
    {
        category: "Generative AI",
        items: [
            { title: "GANs", href: "/docs/gans" },
            { title: "Autoencoders", href: "/docs/autoencoders" },
            { title: "Diffusion Models", href: "/docs/diffusion-models" },
        ],
    },
    {
        category: "Practical AI",
        items: [
            { title: "Model Training Tips", href: "/docs/training-tips" },
            { title: "Hyperparameter Tuning", href: "/docs/hyperparameters" },
            { title: "Deployment Basics", href: "/docs/deployment" },
        ],
    },
];

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
    const pathname = usePathname();

    return (
        <div className="p-6">
            {docLinks.map((section, idx) => (
                <div key={idx} className="mb-8">
                    <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                        {section.category}
                    </h3>
                    <ul className="space-y-1">
                        {section.items.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={onLinkClick}
                                        className={cn(
                                            "block px-3 py-2 rounded-md text-sm transition-colors relative",
                                            isActive
                                                ? "text-white bg-neon-blue/10"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeDocLink"
                                                className="absolute left-0 top-0 bottom-0 w-1 bg-neon-blue rounded-l-md"
                                            />
                                        )}
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export function DocsSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-neon-blue text-black shadow-lg hover:shadow-neon-blue/50 transition-shadow"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                        />
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed left-0 top-16 bottom-0 w-64 border-r border-white/10 bg-black/95 backdrop-blur-xl overflow-y-auto z-40"
                        >
                            <SidebarContent onLinkClick={() => setIsOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl h-[calc(100vh-64px)] overflow-y-auto sticky top-16 hidden lg:block">
                <SidebarContent />
            </aside>
        </>
    );
}
