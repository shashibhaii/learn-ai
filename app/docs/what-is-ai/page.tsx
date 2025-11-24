"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, Cpu, Brain, Atom, Sparkles, Eye, MessageSquareText, Bot, LineChart, FlaskConical, Stethoscope, Building, Car, Brush, Banknote, History, Lightbulb, Scale, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock"; // Assuming this path

// Define Cyberpunk-themed color palette for Tailwind (these should ideally be in tailwind.config.js)
// For demonstration, I'm using direct Tailwind classes that approximate these.
// neon-blue: text-cyan-400, border-cyan-500
// neon-purple: text-fuchsia-400, border-fuchsia-500
// cyber-green: text-lime-400, border-lime-500
// glitch-red: text-rose-500, border-rose-600
// dark-bg-800: bg-gray-900 (or darker custom color)
// dark-bg-700: bg-gray-800

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

const slideInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
};

const cardHoverEffect = {
    hover: { scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.4)", transition: { duration: 0.2 } },
};

export default function WhatIsAIPage() {
    return (
        <div className="prose prose-invert max-w-none text-gray-300">
            <MotionH1
                {...fadeIn}
                className="text-5xl font-extrabold text-cyan-400 mb-8 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            >
                <Cpu className="inline-block h-12 w-12 mr-4 align-middle" />
                What is Artificial Intelligence?
            </MotionH1>

            <MotionP {...fadeIn} transition={{ delay: 0.2 }} className="text-xl leading-relaxed mb-8">
                In the digital tapestry of our future, Artificial Intelligence is the thread weaving through every innovation. It's not just a concept from science fiction; AI is the engine powering our smart devices, driving autonomous vehicles, and even helping us discover new medicines. But what precisely is this intelligence we're building?
            </MotionP>

            {/* Core Definition Box */}
            <MotionDiv
                {...slideInLeft}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-900/40 to-fuchsia-900/40 border-l-4 border-cyan-500 p-8 mb-12 rounded-r-xl shadow-lg relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-xl -ml-12 -mb-12"></div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center">
                    <Brain className="h-6 w-6 mr-3" /> Core Definition
                </h2>
                <p className="text-gray-200 leading-relaxed text-lg m-0">
                    <strong className="text-cyan-400">Artificial Intelligence (AI)</strong> is a broad field of computer science dedicated to creating machines that can perform tasks typically requiring human intelligence. This involves capabilities like learning, reasoning, problem-solving, perception, and language understanding. Essentially, it's about making machines "smart."
                </p>
            </MotionDiv>

            <MotionH1 {...fadeIn} transition={{ delay: 0.4 }} className="text-4xl font-bold text-white mt-12 mb-8">
                The Digital Frontier: Why AI Matters
            </MotionH1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { icon: Sparkles, title: "Innovation Catalyst", description: "Drives breakthroughs in science, technology, and art, opening new possibilities." },
                    { icon: Globe, title: "Global Problem Solver", description: "Tackles complex challenges from climate change to disease detection with data-driven insights." },
                    { icon: LineChart, title: "Unprecedented Efficiency", description: "Automates repetitive tasks, optimizes processes, and enhances productivity across industries." },
                    { icon: Lightbulb, title: "Enhanced Human Potential", description: "Augments human capabilities, providing tools for creativity, analysis, and personalized experiences." },
                ].map((item, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                        whileHover="hover"
                        variants={cardHoverEffect}
                        className="glass-panel p-6 rounded-xl border-2 border-fuchsia-700/30 hover:border-cyan-500 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <item.icon className="h-10 w-10 text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]" />
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                    </MotionDiv>
                ))}
            </div>

            <MotionH1 {...fadeIn} transition={{ delay: 0.8 }} className="text-4xl font-bold text-white mt-12 mb-8">
                Core Pillars of AI: Understanding the Spectrum
            </MotionH1>

            <MotionP {...fadeIn} transition={{ delay: 0.9 }} className="text-lg leading-relaxed mb-8">
                Artificial Intelligence is an umbrella term encompassing various disciplines and techniques. Here are the foundational pillars that drive modern AI.
            </MotionP>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                    {
                        icon: Brain,
                        title: "Machine Learning (ML)",
                        description: "Enables systems to learn from data, identify patterns, and make decisions with minimal human intervention. It's the 'how' for many AI applications.",
                        examples: ["Recommendation Engines", "Fraud Detection", "Predictive Analytics"],
                        color: "cyan",
                    },
                    {
                        icon: Atom,
                        title: "Deep Learning (DL)",
                        description: "A subset of ML that uses neural networks with many layers (deep networks) to learn complex patterns from vast amounts of data. Powers advanced recognition tasks.",
                        examples: ["Image Recognition", "Natural Language Generation", "Self-Driving Cars"],
                        color: "fuchsia",
                    },
                    {
                        icon: MessageSquareText,
                        title: "Natural Language Processing (NLP)",
                        description: "Gives computers the ability to understand, interpret, and generate human language. Bridges the gap between human communication and computer comprehension.",
                        examples: ["Voice Assistants", "Translation Software", "Sentiment Analysis"],
                        color: "lime",
                    },
                    {
                        icon: Eye,
                        title: "Computer Vision (CV)",
                        description: "Allows machines to 'see' and interpret visual information from the world, like images and videos. Essential for autonomous systems and visual data analysis.",
                        examples: ["Facial Recognition", "Object Detection", "Medical Image Analysis"],
                        color: "rose",
                    },
                    {
                        icon: Bot,
                        title: "Robotics",
                        description: "Focuses on designing, building, operating, and applying robots. Often integrates AI for perception, navigation, and decision-making in physical environments.",
                        examples: ["Industrial Automation", "Surgical Robots", "Exploration Drones"],
                        color: "purple",
                    },
                    {
                        icon: FlaskConical,
                        title: "Reinforcement Learning (RL)",
                        description: "An ML approach where an agent learns to make decisions by performing actions in an environment and receiving rewards or penalties. Learns through trial-and-error.",
                        examples: ["Game Playing (AlphaGo)", "Robot Control", "Optimizing Supply Chains"],
                        color: "yellow",
                    },
                ].map((pillar, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 + idx * 0.08, duration: 0.6 }}
                        whileHover="hover"
                        variants={cardHoverEffect}
                        className={`glass-panel p-6 rounded-xl border-2 border-${pillar.color}-700/30 hover:border-${pillar.color}-500 transition-all duration-300 relative group overflow-hidden`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br from-${pillar.color}-500/5 to-${pillar.color}-900/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <pillar.icon className={`h-8 w-8 text-${pillar.color}-400 mb-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]`} />
                        <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{pillar.description}</p>
                        <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                            {pillar.examples.map((ex, i) => (
                                <li key={i}>{ex}</li>
                            ))}
                        </ul>
                    </MotionDiv>
                ))}
            </div>

            <MotionH1 {...fadeIn} transition={{ delay: 1.5 }} className="text-4xl font-bold text-white mt-12 mb-8">
                A Deeper Dive: How AI Works (The Algorithmic Core)
            </MotionH1>
            <MotionP {...fadeIn} transition={{ delay: 1.6 }} className="text-lg leading-relaxed mb-8">
                At its heart, most modern AI, particularly Machine Learning, operates on a fundamental principle: learning from data to make informed decisions or predictions.
            </MotionP>

            {/* Conceptual Diagram */}
            <MotionDiv {...slideInLeft} transition={{ delay: 1.7 }} className="my-12 relative flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
                    <div className="glass-panel p-6 rounded-xl border-2 border-cyan-500/30 flex flex-col items-center w-48 md:w-64 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                        <div className="text-5xl mb-3">🔢</div>
                        <h4 className="text-xl font-semibold text-cyan-300">Input Data</h4>
                        <p className="text-xs text-gray-400">Images, text, numbers, sounds - the raw material.</p>
                    </div>

                    <div className="my-4 md:my-0 md:mx-6 text-cyan-400 text-5xl font-bold">
                        <ChevronRight className="h-12 w-12 rotate-90 md:rotate-0" />
                    </div>

                    <div className="glass-panel p-6 rounded-xl border-2 border-fuchsia-500/30 flex flex-col items-center w-48 md:w-64 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                        <div className="text-5xl mb-3">🧠</div>
                        <h4 className="text-xl font-semibold text-fuchsia-300">AI Model</h4>
                        <p className="text-xs text-gray-400">Algorithms that learn patterns during training.</p>
                    </div>

                    <div className="my-4 md:my-0 md:mx-6 text-fuchsia-400 text-5xl font-bold">
                        <ChevronRight className="h-12 w-12 rotate-90 md:rotate-0" />
                    </div>

                    <div className="glass-panel p-6 rounded-xl border-2 border-lime-500/30 flex flex-col items-center w-48 md:w-64 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                        <div className="text-5xl mb-3">💡</div>
                        <h4 className="text-xl font-semibold text-lime-300">Output/Decision</h4>
                        <p className="text-xs text-gray-400">Prediction, classification, generation, or action.</p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-8 max-w-2xl text-center italic">
                    AI models ingest vast amounts of data, find intricate correlations, and then apply that learned knowledge to new, unseen data to generate insights or perform tasks.
                </p>
            </MotionDiv>

            <MotionH1 {...fadeIn} transition={{ delay: 2.0 }} className="text-4xl font-bold text-white mt-12 mb-8">
                Hands-on: A Simple AI Example with Python
            </MotionH1>
            <MotionP {...fadeIn} transition={{ delay: 2.1 }} className="text-lg leading-relaxed mb-8">
                Let's illustrate a very basic machine learning concept: linear regression. This AI model learns a simple relationship between two variables to predict one based on the other.
            </MotionP>

            <MotionDiv {...slideInLeft} transition={{ delay: 2.2 }} className="mb-12">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Predicting House Prices with Scikit-learn</h3>
                <p className="text-gray-400 mb-6">
                    Imagine we want to predict a house's price based on its size. A linear regression model can learn this relationship from historical data.
                </p>
                <InteractiveCodeBlock
                    code={`
import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# 1. Sample Data (e.g., house size in sqft vs. price in $1000s)
# Each inner list is a data point: [Size]
X = np.array([[1000], [1200], [1500], [1800], [2000]]) 
y = np.array([250, 300, 380, 450, 500]) # Corresponding prices

# 2. Create and Train the Model
model = LinearRegression()
model.fit(X, y) # The model learns the relationship here

# 3. Make a Prediction
new_house_size = np.array([[1600]]) # A new house size
predicted_price = model.predict(new_house_size)

print(f"Model Intercept (b0): {model.intercept_:.2f}")
print(f"Model Coefficient (b1): {model.coef_[0]:.2f}")
print(f"Predicted price for 1600 sqft: $" + "{predicted_price[0]*1000:.2f}")

# Optional: Visualize the regression line
plt.scatter(X, y, color='cyan', label='Actual Data')
plt.plot(X, model.predict(X), color='fuchsia', label='Regression Line')
plt.scatter(new_house_size, predicted_price, color='lime', marker='X', s=100, label='Prediction')
plt.xlabel("House Size (sqft)")
plt.ylabel("Price ($1000s)")
plt.title("Simple Linear Regression for House Prices")
plt.legend()
plt.grid(True, linestyle='--', alpha=0.6)
plt.show()
`}
                    language="python"
                    fileName="house_price_predictor.py"
                    description="This Python script uses `scikit-learn` to train a simple linear regression model. It takes house sizes and prices as input, learns a linear relationship, and then predicts the price for a new house size."
                />
            </MotionDiv>

            <MotionH1 {...fadeIn} transition={{ delay: 2.4 }} className="text-4xl font-bold text-white mt-12 mb-8">
                AI in Action: Real-World Manifestations
            </MotionH1>
            <MotionP {...fadeIn} transition={{ delay: 2.5 }} className="text-lg leading-relaxed mb-8">
                AI is no longer confined to research labs; it's interwoven into the fabric of our daily lives, often operating silently in the background.
            </MotionP>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                    { icon: Stethoscope, title: "Healthcare & Medicine", examples: ["Disease diagnosis (e.g., cancer detection from images)", "Drug discovery & development", "Personalized treatment plans"], color: "rose" },
                    { icon: Car, title: "Autonomous Systems", examples: ["Self-driving vehicles", "Drones for delivery & inspection", "Automated robotic assistants"], color: "cyan" },
                    { icon: Banknote, title: "Finance & Trading", examples: ["Fraud detection & prevention", "Algorithmic trading", "Credit scoring & risk assessment"], color: "lime" },
                    { icon: MessageSquareText, title: "Language & Communication", examples: ["Real-time language translation", "Voice assistants (Siri, Alexa)", "Chatbots for customer service"], color: "fuchsia" },
                    { icon: Eye, title: "Security & Surveillance", examples: ["Facial recognition for access control", "Anomaly detection in surveillance footage", "Cyber threat intelligence"], color: "orange" },
                    { icon: Brush, title: "Creative Arts & Content", examples: ["AI-generated art & music", "Automated content writing (news, marketing)", "Deepfakes and virtual avatars"], color: "purple" },
                ].map((app, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.6 + idx * 0.08, duration: 0.6 }}
                        whileHover="hover"
                        variants={cardHoverEffect}
                        className={`glass-panel p-6 rounded-xl border-2 border-${app.color}-700/30 hover:border-${app.color}-500 transition-all duration-300 group`}
                    >
                        <app.icon className={`h-8 w-8 text-${app.color}-400 mb-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]`} />
                        <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            {app.examples.map((ex, i) => (
                                <li key={i}>{ex}</li>
                            ))}
                        </ul>
                    </MotionDiv>
                ))}
            </div>


            <MotionH1 {...fadeIn} transition={{ delay: 3.0 }} className="text-4xl font-bold text-white mt-12 mb-8">
                The Evolution of Intelligence: A Timeline
            </MotionH1>
            <MotionP {...fadeIn} transition={{ delay: 3.1 }} className="text-lg leading-relaxed mb-8">
                AI's journey is marked by periods of fervent optimism, challenging "winters," and spectacular breakthroughs.
            </MotionP>

            <div className="space-y-6 mb-12 relative pl-8 border-l-2 border-fuchsia-700/50">
                {[
                    { year: "1950s: The Dawn", title: "Foundations & Birth", desc: "Alan Turing proposes the 'Turing Test.' John McCarthy coins 'Artificial Intelligence' at the Dartmouth Conference (1956), marking the official birth of the field.", color: "cyan" },
                    { year: "1960s-70s: Early Hopes", title: "Symbolic AI & Enthusiasm", desc: "Development of rule-based 'expert systems' and early chatbots like ELIZA. High expectations for 'general AI' clash with limited computing power and data.", color: "fuchsia" },
                    { year: "1980s-90s: AI Winters", title: "Disappointment & Retreat", desc: "Funding cuts and reduced interest due to unmet promises and high costs. Focus shifts to niche applications and less ambitious goals.", color: "rose" },
                    { year: "2000s: Machine Learning Ascendant", title: "Data-Driven Resurgence", desc: "Rise of statistical Machine Learning, fueled by increased data availability ('Big Data') and improved computational power. IBM's Watson wins Jeopardy! (2011).", color: "lime" },
                    { year: "2010s-Present: Deep Learning Revolution", title: "Breakthroughs & Mainstream Adoption", desc: "Deep Neural Networks achieve superhuman performance in vision (AlexNet 2012) and game playing (AlphaGo 2016). Generative models like GPT become widely accessible, making AI mainstream.", color: "yellow" },
                ].map((event, idx) => (
                    <MotionDiv
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3.2 + idx * 0.1, duration: 0.5 }}
                        className="glass-panel p-6 rounded-xl border-l-4 border-fuchsia-500 relative before:content-[''] before:absolute before:left-[-1.1rem] before:top-6 before:w-4 before:h-4 before:rounded-full before:bg-fuchsia-500 before:border-2 before:border-gray-900 shadow-lg"
                    >
                        <h3 className={`text-xl font-bold text-${event.color}-400 mb-2`}>{event.year}</h3>
                        <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                        <p className="text-sm text-gray-400">{event.desc}</p>
                    </MotionDiv>
                ))}
            </div>

            <MotionH1 {...fadeIn} transition={{ delay: 3.8 }} className="text-4xl font-bold text-white mt-12 mb-8">
                Classifying Intelligence: Types of AI
            </MotionH1>
            <MotionP {...fadeIn} transition={{ delay: 3.9 }} className="text-lg leading-relaxed mb-8">
                AI can be categorized by its capabilities, ranging from specific task performance to hypothetical human-level or even superior intelligence.
            </MotionP>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.0, duration: 0.6 }}
                    whileHover="hover"
                    variants={cardHoverEffect}
                    className="glass-panel p-8 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-colors relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-900/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrow AI (Weak AI)</h3>
                    <p className="text-gray-400 mb-4">
                        Designed and trained for a <strong className="text-cyan-300">specific task</strong>. It can perform that task exceptionally well, often outperforming humans, but cannot generalize its intelligence to other domains. This is the AI we currently have.
                    </p>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Voice Assistants (Siri, Alexa, Google Assistant)</li>
                        <li>Recommendation Systems (Netflix, Spotify, Amazon)</li>
                        <li>Image Recognition Software</li>
                        <li>Game-playing AI (Deep Blue, AlphaGo)</li>
                    </ul>
                    <div className="mt-6 px-4 py-2 bg-cyan-500/10 rounded-full text-sm text-cyan-300 inline-block font-mono">
                        <Cpu className="inline-block h-4 w-4 mr-2" /> Current Reality
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.1, duration: 0.6 }}
                    whileHover="hover"
                    variants={cardHoverEffect}
                    className="glass-panel p-8 rounded-xl border-2 border-fuchsia-500/30 hover:border-fuchsia-500 transition-colors relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-fuchsia-900/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">General AI (AGI or Strong AI)</h3>
                    <p className="text-gray-400 mb-4">
                        A hypothetical AI that possesses <strong className="text-fuchsia-300">human-level cognitive abilities</strong> across a wide range of tasks. It could learn, understand, and apply knowledge flexibly, similar to a human being.
                    </p>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>General problem-solving and reasoning</li>
                        <li>Learning from limited examples (like humans)</li>
                        <li>Common sense understanding</li>
                        <li>Ability to perform any intellectual task a human can</li>
                    </ul>
                    <div className="mt-6 px-4 py-2 bg-fuchsia-500/10 rounded-full text-sm text-fuchsia-300 inline-block font-mono">
                        <Brain className="inline-block h-4 w-4 mr-2" /> Future Goal (Theoretical)
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.2, duration: 0.6 }}
                    whileHover="hover"
                    variants={cardHoverEffect}
                    className="glass-panel p-8 rounded-xl border-2 border-lime-500/30 hover:border-lime-500 transition-colors relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-lime-900/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold text-lime-400 mb-4">Superintelligence (ASI)</h3>
                    <p className="text-gray-400 mb-4">
                        An AI that <strong className="text-lime-300">surpasses human intelligence</strong> in virtually every field, including scientific creativity, general wisdom, and social skills. This remains entirely speculative.
                    </p>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>Unfathomable processing speed and memory</li>
                        <li>Rapid self-improvement and learning</li>
                        <li>Solving currently intractable global problems</li>
                        <li>Potentially revolutionary or catastrophic impact</li>
                    </ul>
                    <div className="mt-6 px-4 py-2 bg-lime-500/10 rounded-full text-sm text-lime-300 inline-block font-mono">
                        <Atom className="inline-block h-4 w-4 mr-2" /> Distant Horizon (Speculative)
                    </div>
                </MotionDiv>
            </div>

            <MotionH1 {...fadeIn} transition={{ delay: 4.4 }} className="text-4xl font-bold text-white mt-12 mb-8">
                Ethical Algorithms & The Path Ahead
            </MotionH1>
            <MotionP {...fadeIn} transition={{ delay: 4.5 }} className="text-lg leading-relaxed mb-8">
                As AI capabilities expand, so do the discussions around its ethical implications. Issues like bias in algorithms, privacy concerns, job displacement, and the ultimate control over advanced AI systems are crucial considerations. Building responsible AI is as important as building powerful AI.
            </MotionP>

            <MotionH1 {...fadeIn} transition={{ delay: 4.6 }} className="text-4xl font-bold text-white mt-12 mb-8">
                Key Takeaways
            </MotionH1>
            <MotionDiv {...slideInLeft} transition={{ delay: 4.7 }} className="glass-panel p-6 rounded-xl border-2 border-fuchsia-500/30 mb-12">
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                    <li><strong className="text-cyan-400">AI is the simulation of human intelligence</strong> by machines for tasks like learning and problem-solving.</li>
                    <li>It's driven by fields like <strong className="text-fuchsia-400">Machine Learning, Deep Learning, NLP, and Computer Vision</strong>.</li>
                    <li>AI operates by <strong className="text-lime-400">learning patterns from data</strong> to make predictions or decisions.</li>
                    <li>From <strong className="text-rose-400">voice assistants to self-driving cars</strong>, AI is already transforming industries and daily life.</li>
                    <li>The journey from <strong className="text-cyan-400">Narrow AI (current) to General AI and Superintelligence (future)</strong> presents both immense opportunities and significant ethical challenges.</li>
                </ul>
            </MotionDiv>


            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/intro-to-ai"> {/* Assuming there's a previous page */}
                    <Button variant="ghost" className="gap-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Previous: Introduction to AI
                    </Button>
                </Link>
                <Link href="/docs/ai-real-world">
                    <Button className="gap-2 bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-500/40 transition-all duration-300">
                        Next: AI in the Real World <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}