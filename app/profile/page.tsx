"use client";

import { ACTIVITY_HISTORY, MOCK_USER } from "@/lib/mockData";
import { Badge } from "@/components/profile/Badge";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { motion } from "framer-motion";
import { Calendar, Clock, Award, Zap, Github } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Sidebar />
            <div className="w-full p-4 md:p-12 ml-0 md:ml-20 lg:ml-60 transition-all duration-300 overflow-x-hidden">
                <div className="max-w-5xl mx-auto">
                    {/* Profile Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-center gap-8 mb-16"
                    >
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-neon-blue p-1 shadow-neon-blue-glow">
                                <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full rounded-full bg-black" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-black border border-neon-blue text-neon-blue px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                Lvl {MOCK_USER.level}
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-grow">
                            <h1 className="text-4xl font-bold mb-2">{MOCK_USER.name}</h1>
                            <p className="text-xl text-neon-purple-light mb-4 font-mono">{MOCK_USER.title}</p>

                            {/* XP Bar */}
                            <div className="max-w-md mx-auto md:mx-0">
                                <div className="flex justify-between text-xs text-gray-400 mb-1">
                                    <span>{MOCK_USER.xp} XP</span>
                                    <span>{MOCK_USER.nextLevelXp} XP</span>
                                </div>
                                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(MOCK_USER.xp / MOCK_USER.nextLevelXp) * 100}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-right">
                                    {MOCK_USER.nextLevelXp - MOCK_USER.xp} XP to Level {MOCK_USER.level + 1}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { label: "Courses Completed", value: MOCK_USER.coursesCompleted, icon: Award, color: "text-yellow-400" },
                            { label: "Hours Learned", value: MOCK_USER.totalHours, icon: Clock, color: "text-blue-400" },
                            { label: "Current Streak", value: MOCK_USER.streak, icon: Zap, color: "text-orange-500" },
                            { label: "Badges Earned", value: MOCK_USER.badges.length, icon: Award, color: "text-purple-400" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-colors"
                            >
                                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Badges Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Award className="w-6 h-6 text-neon-purple" /> Achievements
                        </h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-8">
                            {MOCK_USER.badges.map((badge, idx) => (
                                <Badge key={badge.id} badge={badge} index={idx} />
                            ))}
                        </div>
                    </section>

                    {/* Activity Heatmap */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-neon-green" /> Learning Activity
                        </h2>
                        <div className="bg-black/40 border border-white/10 p-6 rounded-xl overflow-x-auto">
                            <div className="flex gap-1 min-w-max">
                                {/* Render columns of weeks */}
                                {Array.from({ length: 52 }).map((_, weekIdx) => (
                                    <div key={weekIdx} className="flex flex-col gap-1">
                                        {Array.from({ length: 7 }).map((_, dayIdx) => {
                                            const dayIndex = weekIdx * 7 + dayIdx;
                                            const activity = ACTIVITY_HISTORY[dayIndex];
                                            if (!activity) return null;

                                            const intensityColors = [
                                                "bg-white/5",
                                                "bg-neon-green/20",
                                                "bg-neon-green/40",
                                                "bg-neon-green/60",
                                                "bg-neon-green"
                                            ];

                                            return (
                                                <div
                                                    key={dayIdx}
                                                    className={`w-3 h-3 rounded-sm ${intensityColors[activity.intensity]} hover:ring-1 ring-white/50 transition-all`}
                                                    title={`${activity.date}: ${activity.count} contributions`}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-500">
                                <span>Less</span>
                                <div className="w-3 h-3 bg-white/5 rounded-sm"></div>
                                <div className="w-3 h-3 bg-neon-green/20 rounded-sm"></div>
                                <div className="w-3 h-3 bg-neon-green/40 rounded-sm"></div>
                                <div className="w-3 h-3 bg-neon-green/60 rounded-sm"></div>
                                <div className="w-3 h-3 bg-neon-green rounded-sm"></div>
                                <span>More</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
