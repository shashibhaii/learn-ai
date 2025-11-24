"use client";

import { ENROLLED_COURSES, MOCK_USER, RECOMMENDED_PATHS } from "@/lib/mockData";
import { CourseProgressCard } from "@/components/dashboard/CourseProgressCard";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { motion } from "framer-motion";
import { Flame, Trophy, Target, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Sidebar />
            <div className="w-full p-4 md:p-12 ml-0 md:ml-20 lg:ml-60 transition-all duration-300 overflow-x-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
                    >
                        <div>
                            <h1 className="text-4xl font-bold mb-2">
                                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{MOCK_USER.name}</span>
                            </h1>
                            <p className="text-gray-400 flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-mono uppercase text-neon-blue-light border border-neon-blue/30">
                                    {MOCK_USER.title}
                                </span>
                                <span>Level {MOCK_USER.level} • {MOCK_USER.xp} XP</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="flex flex-col items-center px-4 border-r border-white/10">
                                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Streak</span>
                                <div className="flex items-center gap-1 text-orange-500 font-bold text-xl">
                                    <Flame className="w-5 h-5 fill-current animate-pulse" /> {MOCK_USER.streak}
                                </div>
                            </div>
                            <div className="flex flex-col items-center px-4">
                                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Next Goal</span>
                                <div className="flex items-center gap-1 text-neon-green font-bold text-xl">
                                    <Target className="w-5 h-5" /> {MOCK_USER.nextLevelXp - MOCK_USER.xp} XP
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Enrolled Courses */}
                            <section>
                                <div className="flex justify-between items-end mb-6">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-neon-blue" /> Enrolled Courses
                                    </h2>
                                    <Link href="/courses" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        View All
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {ENROLLED_COURSES.map((course, index) => (
                                        <CourseProgressCard key={course.id} course={course} index={index} />
                                    ))}
                                </div>
                            </section>

                            {/* Recommended Paths */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <Trophy className="w-6 h-6 text-neon-purple" /> Recommended Paths
                                </h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {RECOMMENDED_PATHS.map((path, idx) => (
                                        <motion.div
                                            key={path.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + idx * 0.1 }}
                                            className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 transition-all cursor-pointer"
                                        >
                                            <div className={`p-3 rounded-lg bg-${path.color}-500/20 text-${path.color}-400 mr-4 group-hover:scale-110 transition-transform`}>
                                                <path.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-lg group-hover:text-neon-purple-light transition-colors">{path.title}</h3>
                                                <p className="text-sm text-gray-400">{path.description}</p>
                                            </div>
                                            <div className="text-right hidden sm:block">
                                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{path.courses} Courses</div>
                                                <div className="text-sm font-mono">{path.duration}</div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-600 ml-4 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Daily Quest Widget */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-white/10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                                    <Target className="w-5 h-5 text-neon-green" /> Daily Quest
                                </h3>

                                <div className="space-y-4 relative z-10">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-neon-green/30 transition-colors">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300">Complete 2 Lessons</span>
                                            <span className="text-neon-green font-mono">1/2</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-neon-green w-1/2 shadow-[0_0_8px_rgba(0,255,153,0.5)]"></div>
                                        </div>
                                    </div>

                                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-neon-green/30 transition-colors">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300">Solve 1 Challenge</span>
                                            <span className="text-gray-500 font-mono">0/1</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-700 w-0"></div>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full mt-6 bg-white/5 hover:bg-white/10 text-neon-green border border-neon-green/20 hover:border-neon-green/50 transition-all">
                                    View All Quests
                                </Button>
                            </motion.div>

                            {/* Quick Stats / Leaderboard Preview could go here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
