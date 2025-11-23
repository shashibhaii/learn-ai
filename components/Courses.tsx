"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock, Star, BarChart } from "lucide-react";
import Image from "next/image";

const courses = [
    {
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

export function Courses() {
    return (
        <section className="py-24 bg-black/20 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Popular <span className="text-neon-purple">Courses</span></h2>
                        <p className="text-gray-400">Explore our highest-rated learning paths.</p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">View All Courses</Button>
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
                                <Button className="w-full" variant="secondary">Enroll Now</Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline">View All Courses</Button>
                </div>
            </div>
        </section>
    );
}
