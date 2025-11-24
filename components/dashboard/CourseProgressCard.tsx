"use client";

import { Course } from "@/lib/mockData";
import { motion } from "framer-motion";
import { PlayCircle, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CourseProgressCardProps {
    course: Course;
    index: number;
}

export function CourseProgressCard({ course, index }: CourseProgressCardProps) {
    const colorStyles = {
        blue: {
            border: "border-blue-500/30",
            glow: "shadow-neon-blue-glow",
            text: "text-neon-blue",
            bg: "bg-blue-500",
            gradient: "from-blue-900/40 to-black/60"
        },
        purple: {
            border: "border-purple-500/30",
            glow: "shadow-neon-purple-glow",
            text: "text-neon-purple",
            bg: "bg-purple-500",
            gradient: "from-purple-900/40 to-black/60"
        },
        green: {
            border: "border-green-500/30",
            glow: "shadow-neon-green-glow",
            text: "text-neon-green",
            bg: "bg-green-500",
            gradient: "from-green-900/40 to-black/60"
        }
    }[course.color] || {
        border: "border-blue-500/30",
        glow: "shadow-neon-blue-glow",
        text: "text-neon-blue",
        bg: "bg-blue-500",
        gradient: "from-blue-900/40 to-black/60"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-xl border ${colorStyles.border} bg-gradient-to-br ${colorStyles.gradient} p-6 transition-all duration-300 hover:border-opacity-80 hover:shadow-lg ${colorStyles.glow}`}
        >
            {/* Background Glow */}
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${colorStyles.bg} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-mono uppercase tracking-wider ${colorStyles.text} border border-white/10 px-2 py-1 rounded bg-black/40`}>
                        {course.category}
                    </span>
                    {course.progress === 100 && (
                        <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                            COMPLETED
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {course.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-grow">
                    {course.description}
                </p>

                <div className="space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-black/50 border border-white/5 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className={`h-full rounded-full ${colorStyles.bg} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>{course.completedLessons}/{course.totalLessons} Lessons</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{course.lastAccessed}</span>
                        </div>
                    </div>

                    <Link href={course.progress === 0 ? `/checkout/${course.id}` : `/learn/${course.id}`} className="block">
                        <Button className={`w-full ${colorStyles.bg} hover:opacity-90 text-white border-none shadow-lg shadow-black/20`}>
                            {course.progress === 0 ? "Enroll Now" : "Continue Learning"} <PlayCircle className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
