"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock, Star, BarChart, Search, Filter } from "lucide-react";
import Image from "next/image";

const courses = [
    {
        id: "ml-101",
        title: "Machine Learning Fundamentals",
        category: "Beginner",
        rating: 4.9,
        students: "12k+",
        duration: "8 weeks",
        image: "/course-ml.png",
        color: "from-blue-500 to-cyan-500",
        description: "Master the foundations of ML with hands-on projects"
    },
    {
        id: "dl-201",
        title: "Deep Learning & Neural Networks",
        category: "Intermediate",
        rating: 4.8,
        students: "8.5k+",
        duration: "10 weeks",
        image: "/course-dl.png",
        color: "from-purple-500 to-pink-500",
        description: "Build and train deep neural networks from scratch"
    },
    {
        id: "nlp-301",
        title: "Natural Language Processing",
        category: "Advanced",
        rating: 4.9,
        students: "5k+",
        duration: "12 weeks",
        image: "/course-nlp.png",
        color: "from-orange-500 to-red-500",
        description: "Process and understand human language with AI"
    },
    {
        id: "cv-201",
        title: "Computer Vision",
        category: "Intermediate",
        rating: 4.7,
        students: "7k+",
        duration: "10 weeks",
        image: "/course-cv.png",
        color: "from-green-500 to-teal-500",
        description: "Teach machines to see and interpret visual data"
    },
    {
        id: "rl-301",
        title: "Reinforcement Learning",
        category: "Advanced",
        rating: 4.8,
        students: "4.2k+",
        duration: "14 weeks",
        image: "/course-rl.png",
        color: "from-yellow-500 to-amber-500",
        description: "Train agents to make optimal decisions"
    },
    {
        id: "gen-ai",
        title: "Generative AI & LLMs",
        category: "Advanced",
        rating: 5.0,
        students: "9.8k+",
        duration: "12 weeks",
        image: "/course-gen.png",
        color: "from-fuchsia-500 to-violet-500",
        description: "Build cutting-edge generative models and chatbots"
    },
];

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-deep-black text-white selection:bg-neon-blue/30 pt-20">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Explore Courses</h1>
                        <p className="text-gray-400">Master the future with our comprehensive AI curriculum.</p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-blue transition-colors"
                            />
                        </div>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <Card key={index} className="p-0 overflow-hidden border-white/5 hover:border-neon-purple/30 group cursor-pointer">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-40 group-hover:opacity-20 transition-opacity`} />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-2 py-1 rounded bg-black/50 backdrop-blur text-xs font-medium text-white border border-white/10">
                                        {course.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span>{course.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BarChart className="w-4 h-4" />
                                        <span>{course.students}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">{course.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{course.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                    <Clock className="w-4 h-4" />
                                    <span>{course.duration}</span>
                                </div>
                                <Button className="w-full" variant="secondary" onClick={() => window.location.href = `/learn/${course.id}`}>
                                    Start Learning
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
