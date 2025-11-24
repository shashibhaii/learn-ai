"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, User, Settings, LogOut, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: FileText, label: "Docs", href: "/docs/what-is-ai" },
        { icon: BookOpen, label: "Courses", href: "/courses" },
        { icon: User, label: "Profile", href: "/profile" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden fixed top-20 left-4 z-50 bg-neon-blue text-black p-2 rounded-lg shadow-lg hover:bg-white transition-colors"
            >
                {isMobileOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <motion.div
                initial={false}
                animate={{
                    width: isCollapsed ? 80 : 240,
                }}
                className={`fixed left-0 top-16 bottom-0 z-40 bg-black/90 backdrop-blur-md border-r border-white/10 flex flex-col transition-transform duration-300 
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:bg-black/80
                `}
            >
                {/* Desktop Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="hidden md:block absolute -right-3 top-6 bg-neon-blue text-black p-1 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>

                <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.label === "Docs" && pathname.startsWith("/docs"));
                        return (
                            <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)}>
                                <div
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? "bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon
                                        className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-neon-blue" : "text-gray-400 group-hover:text-white"
                                            }`}
                                    />
                                    {(!isCollapsed || isMobileOpen) && (
                                        <span className="font-medium whitespace-nowrap overflow-hidden">
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-white/10">
                    <Link href="/login">
                        <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer group">
                            <LogOut className="w-5 h-5 flex-shrink-0" />
                            {(!isCollapsed || isMobileOpen) && <span className="font-medium">Sign Out</span>}
                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
