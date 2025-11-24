import { Brain, Code, Database, Globe, Layers, Layout, Lock, Terminal, Zap } from "lucide-react";

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    avatar: string;
    level: number;
    xp: number;
    nextLevelXp: number;
    streak: number;
    totalHours: number;
    coursesCompleted: number;
    badges: Badge[];
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: any; // Lucide icon
    color: "blue" | "purple" | "green" | "pink";
    earnedDate: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    progress: number; // 0-100
    totalLessons: number;
    completedLessons: number;
    lastAccessed: string;
    image: string;
    category: "AI Core" | "Development" | "Data Science";
    color: "blue" | "purple" | "green";
}

export interface Activity {
    date: string;
    count: number; // For heatmap
    intensity: 0 | 1 | 2 | 3 | 4;
}

export const MOCK_USER: User = {
    id: "u1",
    name: "Alex Cyber",
    email: "alex@cyber.net",
    title: "Neural Architect",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
    level: 12,
    xp: 12450,
    nextLevelXp: 15000,
    streak: 14,
    totalHours: 48,
    coursesCompleted: 3,
    badges: [
        { id: "b1", name: "Neural Novice", description: "Completed your first AI course", icon: Brain, color: "blue", earnedDate: "2023-10-15" },
        { id: "b2", name: "Code Weaver", description: "Submitted 50 code exercises", icon: Code, color: "purple", earnedDate: "2023-11-02" },
        { id: "b3", name: "Data Miner", description: "Processed 1GB of mock data", icon: Database, color: "green", earnedDate: "2023-11-20" },
        { id: "b4", name: "Streak Master", description: "Maintained a 7-day streak", icon: Zap, color: "pink", earnedDate: "2023-11-24" },
    ]
};

export const ENROLLED_COURSES: Course[] = [
    {
        id: "c1",
        title: "AI Terminologies: The Cybernetic Lexicon",
        description: "Master the fundamental language of artificial intelligence.",
        progress: 75,
        totalLessons: 12,
        completedLessons: 9,
        lastAccessed: "2 hours ago",
        image: "/images/course-ai-term.jpg", // Placeholder
        category: "AI Core",
        color: "blue"
    },
    {
        id: "c2",
        title: "Neural Networks Architecture",
        description: "Deep dive into the structure of modern deep learning models.",
        progress: 30,
        totalLessons: 20,
        completedLessons: 6,
        lastAccessed: "1 day ago",
        image: "/images/course-nn.jpg",
        category: "Development",
        color: "purple"
    },
    {
        id: "c3",
        title: "Python for Data Science",
        description: "Essential Python libraries for manipulating large datasets.",
        progress: 100,
        totalLessons: 15,
        completedLessons: 15,
        lastAccessed: "1 week ago",
        image: "/images/course-python.jpg",
        category: "Data Science",
        color: "green"
    }
];

export const RECOMMENDED_PATHS = [
    {
        id: "p1",
        title: "Generative AI Specialist",
        description: "Master LLMs, diffusion models, and prompt engineering.",
        courses: 5,
        duration: "40 hours",
        icon: Layers,
        color: "pink"
    },
    {
        id: "p2",
        title: "Computer Vision Engineer",
        description: "Teach machines to see and interpret the visual world.",
        courses: 4,
        duration: "32 hours",
        icon: Globe,
        color: "blue"
    }
];

// Generate last 365 days of activity
export const ACTIVITY_HISTORY: Activity[] = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (364 - i));
    const count = Math.random() > 0.7 ? Math.floor(Math.random() * 10) : 0;
    return {
        date: date.toISOString().split('T')[0],
        count,
        intensity: count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 9 ? 3 : 4
    };
});
