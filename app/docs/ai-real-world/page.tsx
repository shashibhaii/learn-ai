"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import {
    ChevronRight,
    ChevronLeft,
    Brain,
    Bot,
    ShieldCheck,
    Globe,
    Building,
    Leaf,
    MessageSquare,
    Monitor,
    FlaskConical,
    Banknote,
    GraduationCap,
    Gamepad,
    ShoppingCart,
    HeartPulse,
    Lightbulb,
    Lock,
    Scale,
    Code,
    Sparkles,
    Handshake,
    Rocket,
    Network,
    Cpu,
    Fingerprint,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIRealWorldPage() {
    const industryApplications = [
        {
            icon: HeartPulse,
            title: "Healthcare & Biotech",
            color: "from-rose-600 to-purple-600",
            description: "Revolutionizing diagnostics, treatment, and drug discovery for a healthier tomorrow.",
            examples: [
                "Early disease detection (e.g., cancer, retinopathy from scans)",
                "Accelerated drug discovery and molecular modeling",
                "Personalized medicine and treatment plans based on genetics",
                "Robotic surgery assistance and precision operations",
                "Predictive analytics for hospital readmissions and outbreak monitoring",
            ],
            techniques: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning"],
        },
        {
            icon: Banknote,
            title: "Finance & Fintech",
            color: "from-emerald-500 to-blue-600",
            description: "Securing transactions, optimizing investments, and personalizing financial services.",
            examples: [
                "Real-time fraud detection and anomaly analysis",
                "High-frequency algorithmic trading and market prediction",
                "Automated credit scoring and risk assessment for loans",
                "Personalized financial advice chatbots and virtual assistants",
                "Portfolio optimization and wealth management",
            ],
            techniques: ["Machine Learning", "Time Series Analysis", "NLP", "Anomaly Detection"],
        },
        {
            icon: Bot,
            title: "Autonomous Systems & Robotics",
            color: "from-purple-500 to-indigo-600",
            description: "Empowering machines to perceive, decide, and act independently in complex environments.",
            examples: [
                "Self-driving vehicles (cars, trucks, drones) for navigation and perception",
                "Automated warehouses and logistics robots for sorting/packing",
                "Precision agriculture robots for planting, harvesting, and pest control",
                "Exploration robots for hazardous environments (space, deep sea)",
                "Delivery drones and last-mile logistics optimization",
            ],
            techniques: ["Computer Vision", "Reinforcement Learning", "Sensor Fusion", "Path Planning"],
        },
        {
            icon: Monitor,
            title: "Media & Entertainment",
            color: "from-orange-500 to-red-600",
            description: "Creating immersive experiences, personalized content, and new forms of digital artistry.",
            examples: [
                "Content recommendation engines (Netflix, Spotify, YouTube)",
                "Procedural content generation in video games and virtual worlds",
                "Deepfake technology for visual effects and media synthesis",
                "Automated content moderation and sentiment analysis",
                "Personalized news feeds and adaptive storytelling",
            ],
            techniques: ["Recommendation Systems", "Generative AI", "Computer Vision", "NLP"],
        },
        {
            icon: ShoppingCart,
            title: "E-Commerce & Retail",
            color: "from-yellow-500 to-amber-600",
            description: "Enhancing customer experiences, optimizing operations, and predicting market trends.",
            examples: [
                "Personalized product recommendations and dynamic pricing",
                "Visual search and reverse image lookup for products",
                "Intelligent chatbots for customer support and personalized shopping assistants",
                "Demand forecasting and inventory management",
                "Fraud detection in online transactions",
            ],
            techniques: ["Recommendation Systems", "Computer Vision", "NLP", "Predictive Analytics"],
        },
        {
            icon: Building,
            title: "Smart Cities & Infrastructure",
            color: "from-sky-500 to-teal-600",
            description: "Building more efficient, sustainable, and responsive urban environments.",
            examples: [
                "Intelligent traffic management and optimized public transport",
                "Predictive maintenance for infrastructure (bridges, roads, utilities)",
                "Smart energy grids and demand-side management",
                "Waste management optimization and recycling sorting",
                "Environmental monitoring and pollution control",
            ],
            techniques: ["IoT Integration", "Predictive Analytics", "Computer Vision", "Optimization Algorithms"],
        },
    ];

    const coreConcepts = [
        {
            icon: Brain,
            title: "Machine Learning (ML)",
            description: "Algorithms that learn from data to make predictions or decisions.",
            color: "text-sky-400",
        },
        {
            icon: Network,
            title: "Deep Learning (DL)",
            description: "Neural networks with many layers, excelling in complex pattern recognition.",
            color: "text-fuchsia-400",
        },
        {
            icon: Monitor,
            title: "Computer Vision (CV)",
            description: "Enabling machines to 'see' and interpret visual information.",
            color: "text-emerald-400",
        },
        {
            icon: MessageSquare,
            title: "Natural Language Processing (NLP)",
            description: "Allowing computers to understand, interpret, and generate human language.",
            color: "text-orange-400",
        },
        {
            icon: Bot,
            title: "Reinforcement Learning (RL)",
            description: "Training agents to make a sequence of decisions in an environment to maximize rewards.",
            color: "text-indigo-400",
        },
        {
            icon: Cpu,
            title: "Generative AI",
            description: "Creating new, original content like images, text, and code.",
            color: "text-rose-400",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const neonGlow = "shadow-[0_0_8px_rgba(0,255,255,0.6),0_0_12px_rgba(0,255,255,0.4)]";
    const purpleGlow = "shadow-[0_0_8px_rgba(255,0,255,0.6),0_0_12px_rgba(255,0,255,0.4)]";

    const GlassPanel = ({ children, className = "" }) => (
        <motion.div
            className={`glass-panel bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );

    return (
        <div className="prose prose-invert max-w-none text-gray-300">
            {/* Header Section */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-600 mb-6 tracking-tight ${neonGlow}`}
            >
                AI in the Cybernetic Realm
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 border-l-4 border-sky-500 pl-4"
            >
                Beyond the flickering screens of dystopian futures, Artificial Intelligence has seamlessly woven itself into the fabric of our present. It's not just a tool; it's the invisible neural network powering the modern world, making decisions, predicting outcomes, and interacting with us at every turn.
            </motion.p>

            {/* Daily AI Interactions */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="bg-gradient-to-br from-gray-900/40 to-black/30 border border-fuchsia-600/30 p-8 mb-12 rounded-xl relative overflow-hidden group hover:border-sky-500/50 transition-all duration-300"
            >
                <div className="absolute inset-0 bg-fuchsia-600/5 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-400 mb-6 z-10 relative">
                    Neural Nexus: Your Daily AI Touchpoints
                </h3>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6 text-sm text-gray-400 relative z-10"
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <Fingerprint className="w-5 h-5 text-sky-400" /> Biometric Authentication
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-fuchsia-400" /> Smart Virtual Assistants
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-emerald-400" /> Predictive Text & Autocorrect
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-orange-400" /> GPS Navigation Optimization
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-indigo-400" /> Personalized Media Feeds
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-rose-400" /> E-commerce Recommendations
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-cyan-400" /> Spam & Fraud Filters
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-400" /> Smart Home Automation
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Core AI Concepts */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 mt-16 mb-8">
                The AI Undercurrent: Foundational Techniques
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
                At the core of every real-world AI application lies a set of powerful techniques. Understanding these fundamental concepts helps demystify how AI systems achieve their remarkable feats.
            </p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
                {coreConcepts.map((concept, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="glass-panel p-6 rounded-xl border-l-4 border-white/20 hover:border-sky-500 transition-all duration-300 group"
                    >
                        <concept.icon className={`w-10 h-10 mb-4 ${concept.color} group-hover:scale-110 transition-transform`} />
                        <h3 className="text-xl font-bold text-white mb-2">{concept.title}</h3>
                        <p className="text-sm text-gray-400">{concept.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Industry Applications */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-500 mt-16 mb-8">
                Industry Manifestations: Where AI Thrives
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
                From saving lives to powering commerce, AI's impact spans nearly every sector, driving innovation and efficiency.
            </p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
                {industryApplications.map((app, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${app.color} opacity-20 blur-xl group-hover:scale-125 transition-all duration-500`}></div>
                        <div className={`flex items-center gap-4 mb-4 relative z-10`}>
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${app.color} flex items-center justify-center text-white text-3xl group-hover:ring-2 ring-white/20 transition-all duration-300`}>
                                <app.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 group-hover:from-sky-300 group-hover:to-fuchsia-400 transition-all duration-300">
                                {app.title}
                            </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4 relative z-10">{app.description}</p>
                        <h4 className="text-lg font-semibold text-sky-400 mb-2 relative z-10">Key Applications:</h4>
                        <ul className="space-y-2 mb-4 relative z-10">
                            {app.examples.map((example, i) => (
                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                    <span className="text-fuchsia-400 mt-1">▹</span>
                                    <span>{example}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                            {app.techniques.map((tech, i) => (
                                <span key={i} className={`px-3 py-1 bg-white/10 text-xs rounded-full border border-white/20 text-gray-400 group-hover:text-white group-hover:border-sky-500 transition-all duration-300`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Code Example: Simple Recommendation Engine (Conceptual) */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mt-16 mb-8">
                Code Manifestation: A Glimpse into AI Logic
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
                While real-world AI systems are immensely complex, many operate on foundational principles. Here's a simplified Python example of a content recommendation engine, a ubiquitous AI application.
            </p>
            <InteractiveCodeBlock
                code={`import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

# Sample data: User ratings for movies
data = {
    'User': ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice', 'Charlie'],
    'Movie': ['Inception', 'Matrix', 'Interstellar', 'Inception', 'Interstellar', 'Dune', 'Matrix'],
    'Rating': [5, 4, 4, 5, 5, 3, 3]
}
df = pd.DataFrame(data)

# Create a user-item matrix
user_movie_matrix = df.pivot_table(index='User', columns='Movie', values='Rating').fillna(0)

# Calculate similarity between users (cosine similarity)
user_similarity = cosine_similarity(user_movie_matrix)
user_similarity_df = pd.DataFrame(user_similarity, index=user_movie_matrix.index, columns=user_movie_matrix.index)

def recommend_movies(user_name, matrix, similarity_df, num_recommendations=2):
    user_ratings = matrix.loc[user_name]
    
    # Find similar users
    similar_users = similarity_df[user_name].sort_values(ascending=False).index[1:] # Exclude self
    
    recommended_movies = []
    for other_user in similar_users:
        if other_name == user_name:
            continue
        # Movies rated by other user but not by current user
        unrated_movies = user_ratings[user_ratings == 0].index
        
        for movie in unrated_movies:
            if matrix.loc[other_user, movie] > 0 and movie not in recommended_movies:
                recommended_movies.append(movie)
                if len(recommended_movies) >= num_recommendations:
                    return recommended_movies
    return recommended_movies

# Example Usage:
print(f"User-Movie Matrix:\\n{user_movie_matrix}\\n")
print(f"User Similarity Matrix:\\n{user_similarity_df}\\n")
print(f"Recommended movies for Alice: {recommend_movies('Alice', user_movie_matrix, user_similarity_df)}")
print(f"Recommended movies for Bob: {recommend_movies('Bob', user_movie_matrix, user_similarity_df)}")
`}
                language="python"
                title="Simplified Collaborative Filtering Recommendation"
                description="This code snippet demonstrates a basic collaborative filtering algorithm. It recommends movies to a user based on the preferences of similar users."
            />

            {/* Case Studies */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 mt-16 mb-8">
                Epochal Achievements: Landmark Case Studies
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
                These groundbreaking projects exemplify AI's transformative power and its potential to push the boundaries of human capability.
            </p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-8 mb-16"
            >
                <motion.div variants={itemVariants} className={`glass-panel p-8 rounded-xl border-l-4 border-emerald-500 hover:border-emerald-400 transition-all duration-300 group relative overflow-hidden ${purpleGlow}`}>
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-3 relative z-10">AlphaFold: Decoding the Proteome</h3>
                    <p className="text-gray-400 mb-4 relative z-10">
                        DeepMind's AlphaFold, a revolutionary AI system, cracked the 50-year-old 'protein folding problem' by accurately predicting protein 3D structures. This breakthrough is accelerating drug discovery, disease understanding, and biotechnology.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm relative z-10">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30">Healthcare</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30">Deep Learning</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30">Biotechnology</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className={`glass-panel p-8 rounded-xl border-l-4 border-sky-500 hover:border-sky-400 transition-all duration-300 group relative overflow-hidden ${neonGlow}`}>
                    <div className="absolute inset-0 bg-sky-500/5 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-sky-400 mb-3 relative z-10">Tesla Autopilot: Towards Autonomous Mobility</h3>
                    <p className="text-gray-400 mb-4 relative z-10">
                        Tesla's Full Self-Driving (FSD) system utilizes a sophisticated array of cameras and neural networks to perceive its environment, navigate complex road scenarios, and make real-time driving decisions. It's a leading example of AI in autonomous robotics.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm relative z-10">
                        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/30">Robotics</span>
                        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/30">Computer Vision</span>
                        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/30">Reinforcement Learning</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className={`glass-panel p-8 rounded-xl border-l-4 border-fuchsia-500 hover:border-fuchsia-400 transition-all duration-300 group relative overflow-hidden ${purpleGlow}`}>
                    <div className="absolute inset-0 bg-fuchsia-500/5 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-fuchsia-400 mb-3 relative z-10">ChatGPT: The Conversational AI Frontier</h3>
                    <p className="text-gray-400 mb-4 relative z-10">
                        OpenAI's ChatGPT, based on large language models (LLMs), redefined human-computer interaction. It demonstrates remarkable capabilities in generating coherent text, answering complex questions, coding, and engaging in nuanced dialogue, highlighting the power of Generative AI and NLP.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm relative z-10">
                        <span className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-400 rounded-full border border-fuchsia-500/30">NLP</span>
                        <span className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-400 rounded-full border border-fuchsia-500/30">Generative AI</span>
                        <span className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-400 rounded-full border border-fuchsia-500/30">Large Language Models</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Impact & Statistics */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-green-400 mt-16 mb-8">
                The Data Stream: Impact & Projections
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
                AI's economic and societal footprint is rapidly expanding, promising unprecedented growth and transformation.
            </p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
                {[
                    { value: "$15.7T", label: "Projected AI contribution to global economy by 2030 (PwC)" },
                    { value: "97M", label: "New AI-driven jobs created by 2025 (WEF)" },
                    { value: "80%", label: "Enterprises exploring or implementing AI (IBM)" },
                    { value: "37%", label: "Average productivity increase with AI adoption (Accenture)" },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`glass-panel p-6 rounded-xl text-center border-b-4 border-sky-500/50 hover:border-fuchsia-500 transition-all duration-300`}
                    >
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Ethical Considerations & Future */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600 mt-16 mb-8">
                The Ethical Circuitry & Future Trajectories
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
                As AI becomes more integral, so do the considerations around its responsible development and deployment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <GlassPanel className="border-l-4 border-rose-500">
                    <h3 className="text-2xl font-bold text-rose-400 mb-3 flex items-center gap-2">
                        <Lock className="w-6 h-6" /> Key Challenges
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-rose-400 mt-1">▹</span>
                            <span><strong>Bias & Fairness:</strong> Ensuring AI systems do not perpetuate or amplify societal biases from data.</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-rose-400 mt-1">▹</span>
                            <span><strong>Privacy & Security:</strong> Protecting sensitive data processed by AI and preventing malicious use.</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-rose-400 mt-1">▹</span>
                            <span><strong>Accountability & Transparency:</strong> Understanding how AI decisions are made, especially in critical applications.</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-rose-400 mt-1">▹</span>
                            <span><strong>Job Displacement:</strong> Managing the societal impact of automation on the workforce.</span>
                        </li>
                    </ul>
                </GlassPanel>

                <GlassPanel className="border-l-4 border-sky-500">
                    <h3 className="text-2xl font-bold text-sky-400 mb-3 flex items-center gap-2">
                        <Rocket className="w-6 h-6" /> The Path Forward
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-sky-400 mt-1">▹</span>
                            <span><strong>Ethical AI Frameworks:</strong> Developing guidelines for responsible AI design and deployment.</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-sky-400 mt-1">▹</span>
                            <span><strong>Human-AI Collaboration:</strong> Fostering synergy where AI augments human capabilities.</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-sky-400 mt-1">▹</span>
                            <span><strong>Explainable AI (XAI):</strong> Creating models whose decisions can be understood by humans.</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-400">
                            <span className="text-sky-400 mt-1">▹</span>
                            <span><strong>Global Governance:</strong> International cooperation to navigate the complex future of AI.</span>
                        </li>
                    </ul>
                </GlassPanel>
            </div>


            {/* Key Takeaways */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-gradient-to-r from-fuchsia-600/10 to-sky-600/10 border border-fuchsia-600/30 p-8 my-16 rounded-xl relative overflow-hidden group hover:border-sky-500/50 transition-all duration-300"
            >
                <div className="absolute inset-0 bg-sky-600/5 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <p className="text-gray-200 m-0 relative z-10 text-lg">
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-400 text-2xl">Key Takeaway:</strong> AI is not merely a tool but a fundamental force reshaping our world. Understanding its applications, challenges, and potential is paramount for navigating the evolving digital landscape of tomorrow.
                </p>
            </motion.div>


            {/* Navigation */}
            <div className="flex justify-between items-center mt-20 pt-8 border-t border-white/10">
                <Link href="/docs/what-is-ai" passHref>
                    <Button variant="ghost" className="gap-2 text-gray-300 hover:text-sky-400 hover:bg-white/5 transition-colors duration-200">
                        <ChevronLeft className="w-4 h-4 text-sky-400" /> Previous: What is AI?
                    </Button>
                </Link>
                <Link href="/docs/ai-terminologies" passHref>
                    <Button className="gap-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white hover:from-sky-400 hover:to-fuchsia-400 transition-colors duration-200">
                        Next: AI Terminologies <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}