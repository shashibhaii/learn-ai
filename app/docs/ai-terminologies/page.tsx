
"use client";

import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, Brain, Sparkles, Database, Code, Lightbulb, TrendingUp, Compass, Target, Layers, Workflow, Scale, GitPullRequestDraft, Factory, CircuitBoard, Network, BookOpen, Atom } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";

export default function AITerminologiesPage() {
    // Define a more comprehensive list of terms
    const coreTerms = [
        {
            icon: Factory,
            term: "Agent",
            definition: "An autonomous entity (software or hardware) that perceives its environment through sensors and acts upon it through actuators, striving to achieve specific goals or maximize a utility function.",
            example: "A self-driving car (perceives road conditions, acts by steering/accelerating); a trading bot (perceives market data, acts by buying/selling shares); a chatbot (perceives user input, acts by generating responses).",
            category: "Foundational"
        },
        {
            icon: Network,
            term: "Environment",
            definition: "The external world within which an AI agent operates. It defines the context, observable states, and the consequences of the agent's actions.",
            example: "For a weather forecasting AI: global climate data, satellite imagery, historical patterns. For a factory robot: the assembly line, specific components, human operators.",
            category: "Foundational"
        },
        {
            icon: GitPullRequestDraft, // Represents a snapshot or a draft state
            term: "State",
            definition: "A complete description of the environment at a specific moment in time. It encapsulates all relevant information needed for the agent to decide its next action.",
            example: "The current positions of all pieces on a chess board; the GPS coordinates, speed, and detected objects for a self-driving car.",
            category: "Foundational"
        },
        {
            icon: Code,
            term: "Action",
            definition: "A move or operation performed by the agent that changes the state of the environment. Actions are the means by which an agent influences its world.",
            example: "Moving a piece in a board game; applying brakes or turning the wheel in a vehicle; formulating and sending a text reply in a conversational AI.",
            category: "Foundational"
        },
        {
            icon: Lightbulb,
            term: "Percept",
            definition: "The agent's sensory input from the environment at a given instant. It's how the agent 'sees', 'hears', or otherwise 'experiences' its surroundings.",
            example: "A camera image of a pedestrian; a microphone recording a user's voice command; a sensor reading indicating temperature.",
            category: "Foundational"
        },
        {
            icon: Target,
            term: "Goal",
            definition: "The desired outcome or objective that an AI agent is designed to achieve. Goals drive the agent's decision-making process and are often associated with maximizing a 'reward' or 'utility'.",
            example: "Winning a game of Go; delivering a package safely and efficiently; providing accurate and helpful information to a user.",
            category: "Foundational"
        },
        {
            icon: Layers,
            term: "Model",
            definition: "A mathematical representation or abstract framework learned from data, designed to capture patterns, make predictions, or generate outputs based on inputs.",
            example: "A neural network trained to classify images; a linear regression model predicting house prices; a large language model generating human-like text.",
            category: "Machine Learning Core"
        },
        {
            icon: Database,
            term: "Dataset",
            definition: "A collection of related data points used for training, validating, and testing machine learning models. It typically consists of features and, for supervised tasks, corresponding labels.",
            example: "A CSV file containing customer demographics and purchase history; a directory of images with their corresponding object labels; a vast corpus of text documents for language models.",
            category: "Machine Learning Core"
        },
        {
            icon: TrendingUp,
            term: "Feature",
            definition: "An individual measurable property or characteristic of a phenomenon being observed. Features are the inputs to a machine learning model, representing attributes of the data.",
            example: "For house price prediction: number of bedrooms, square footage, postal code, year built. For facial recognition: distance between eyes, nose width, jawline shape.",
            category: "Machine Learning Core"
        },
        {
            icon: Compass,
            term: "Label",
            definition: "The target variable or correct answer that a supervised machine learning model is trying to predict or classify. Also known as the 'ground truth' or 'output variable'.",
            example: "For an image, its classification ('cat', 'dog'). For a house price prediction, the actual sale price. For medical diagnosis, the presence or absence of a disease.",
            category: "Machine Learning Core"
        },
        {
            icon: Workflow,
            term: "Training",
            definition: "The iterative process of teaching a machine learning model by exposing it to a dataset and adjusting its internal parameters (weights and biases) to minimize errors or optimize a specific objective function.",
            example: "Feeding thousands of labeled images to a neural network, allowing it to learn the distinguishing features of different objects by adjusting its connections.",
            category: "Machine Learning Core"
        },
        {
            icon: Scale,
            term: "Inference",
            definition: "The process of using a trained machine learning model to make predictions or decisions on new, unseen data. It's the 'application' phase where the model generates outputs based on new inputs.",
            example: "Using a trained spam detection model to classify a new incoming email as 'spam' or 'not spam'. A deployed recommendation system generating movie suggestions for a live user.",
            category: "Machine Learning Core"
        },
        {
            icon: Brain,
            term: "Neural Network",
            definition: "A computational model inspired by the structure and function of biological neural networks. It consists of interconnected 'neurons' organized in layers, processing information through weighted connections.",
            example: "A Convolutional Neural Network (CNN) for image recognition; a Recurrent Neural Network (RNN) for processing sequential data like text; a Transformer for advanced language understanding.",
            category: "Deep Learning"
        },
        {
            icon: CircuitBoard,
            term: "Activation Function",
            definition: "A non-linear function applied to the output of a neuron in a neural network. It introduces non-linearity, enabling the network to learn complex patterns and map non-linear relationships.",
            example: "ReLU (Rectified Linear Unit), Sigmoid, Tanh. For instance, ReLU outputs the input directly if positive, otherwise zero, preventing vanishing gradients.",
            category: "Deep Learning"
        },
        {
            icon: Atom,
            term: "Loss Function",
            definition: "A function that quantifies the discrepancy between a model's predicted output and the true (labeled) output. The goal of training is to minimize this loss.",
            example: "Mean Squared Error (MSE) for regression tasks; Cross-Entropy Loss for classification tasks. A high loss value indicates a poor prediction.",
            category: "Deep Learning"
        },
        {
            icon: BookOpen,
            term: "Backpropagation",
            definition: "The core algorithm for training neural networks. It calculates the gradient of the loss function with respect to the network's weights, allowing the weights to be adjusted to minimize the loss.",
            example: "During training, after making a prediction, the error is 'propagated backward' through the network to update each layer's weights, refining the model's accuracy.",
            category: "Deep Learning"
        }
    ];

    const mlParadigms = [
        {
            title: "Supervised Learning",
            description: "Training a model on a labeled dataset, where the model learns a mapping from input features to output labels. It's like learning from an instructor who provides the correct answers.",
            examples: [
                "Image Classification (e.g., identifying objects like 'cat' or 'car' in images)",
                "Sentiment Analysis (e.g., classifying text as 'positive', 'negative', or 'neutral')",
                "Spam Detection (e.g., flagging emails as 'spam' or 'not spam')",
                "Regression (e.g., predicting continuous values like house prices or stock trends)"
            ],
            icon: Lightbulb,
            color: "blue"
        },
        {
            title: "Unsupervised Learning",
            description: "Discovering hidden patterns or intrinsic structures in unlabeled data. The model is given inputs without explicit outputs and must find relationships on its own, often for data exploration or generation.",
            examples: [
                "Clustering (e.g., grouping similar customers for market segmentation without prior groups)",
                "Dimensionality Reduction (e.g., simplifying complex data for visualization or efficiency)",
                "Anomaly Detection (e.g., identifying unusual patterns in network traffic for security breaches)"
            ],
            icon: Sparkles,
            color: "purple"
        },
        {
            title: "Reinforcement Learning",
            description: "An agent learns to make decisions by performing actions in an environment and receiving rewards or penalties. It learns through trial and error, aiming to maximize cumulative rewards over time.",
            examples: [
                "Game Playing (e.g., AlphaGo mastering Go, game AI in complex environments)",
                "Robotics (e.g., teaching robots to walk, grasp objects, or navigate)",
                "Autonomous Navigation (e.g., optimizing routes and avoiding obstacles in dynamic environments)",
                "Resource Management (e.g., optimizing energy consumption in data centers)"
            ],
            icon: Brain,
            color: "green"
        }
    ];

    const codeSnippet = `import pandas as pd
from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import accuracy_score

# --- 1. Dataset Creation(Simulating sensor readings and a classification label)-- -
# Imagine data from a cyber - physical system, where 'target_event' is what we want to predict.
    data = {
    'processor_load_avg': [0.7, 0.85, 0.6, 0.9, 0.75, 0.95, 0.55, 0.88, 0.72, 0.92],
    'memory_utilization_perc': [65, 78, 58, 85, 68, 92, 53, 81, 62, 89],
    'network_latency_ms': [15, 22, 12, 28, 18, 35, 10, 25, 14, 30],
    'target_anomaly': [0, 0, 0, 1, 0, 1, 0, 1, 0, 1] # 0 = Normal, 1 = Anomaly Detected
}
df = pd.DataFrame(data)

# -- - 2. Feature and Label Identification-- -
# 'Features'(X) are the input characteristics; 'Label'(y) is the target variable.
    X = df[['processor_load_avg', 'memory_utilization_perc', 'network_latency_ms']] # Input Features
y = df['target_anomaly']                                                        # Target Label

# -- - 3. Data Splitting(Training and Test Sets)-- -
# We split the data to ensure the model learns from one part and is evaluated on unseen data.
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state = 42)
print("Dataset Split:")
print(f"  Training samples: {len(X_train)}")
print(f"  Testing samples: {len(X_test)}\\n")

# -- - 4. Model Initialization and Training-- -
# Here, a simple Logistic Regression model is 'trained' on the training data.
# The model learns the relationship between features and the target label.
    model = LogisticRegression(solver = 'liblinear', random_state = 42)
model.fit(X_train, y_train) # The 'Training' process

print("Model Training Complete.\\n")

# -- - 5. Making Predictions(Inference) on the Test Set-- -
# After training, the model performs 'Inference' on the unseen test data.
    y_pred = model.predict(X_test)

# -- - 6. Model Evaluation-- -
# The model's performance is evaluated by comparing its predictions to the actual labels.
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy on Test Data: {accuracy:.2f}\\n")

# -- - 7. Real - time Inference Example(New Percept)-- -
# Simulate a 'Percept' from a live system and use the model for real - time 'Inference'.
    new_percept_data = pd.DataFrame([[0.82, 75, 20]], columns = ['processor_load_avg', 'memory_utilization_perc', 'network_latency_ms'])
realtime_prediction = model.predict(new_percept_data)
print(f"Live System Percept: {new_percept_data.values[0]}")
print(f"Real-time Inference: {'ANOMALY DETECTED' if realtime_prediction[0] == 1 else 'System Normal'} (Target Anomaly = {realtime_prediction[0]})")
    `;


    return (
        <div className="prose prose-invert max-w-none px-4 sm:px-6 lg:px-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold text-neon-blue mb-4 leading-tight tracking-wider font-cyberpunk"
            >
                AI Terminologies: The Cybernetic Lexicon
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-300 leading-relaxed text-lg mb-8 border-l-4 border-neon-purple pl-4"
            >
                Venture deep into the core syntax of artificial intelligence. To command the future, one must first grasp its language. This lexicon decrypts the essential terms, concepts, and paradigms that form the bedrock of AI. Prepare to augment your understanding.
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl font-bold text-white mt-12 mb-6 border-b border-white/20 pb-3"
            >
                Core AI/ML Concepts <span className="text-neon-blue">// Foundational Protocols</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {coreTerms.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="glass-panel p-6 rounded-xl border border-blue-600/20 bg-gradient-to-br from-gray-900/40 to-black/40 hover:border-neon-blue-light hover:shadow-neon-blue-glow transition-all duration-300"
                    >
                        <div className="flex items-center mb-3">
                            {item.icon && <item.icon className="w-8 h-8 text-neon-blue mr-3 flex-shrink-0" />}
                            <h3 className="text-2xl font-bold text-neon-blue-light leading-tight">{item.term}</h3>
                        </div>
                        <p className="text-gray-300 mb-4 text-sm">{item.definition}</p>
                        <div className="bg-white/5 p-3 rounded-lg border-l-2 border-neon-purple-dark text-xs italic text-gray-400">
                            <span className="text-neon-purple-light mr-2">{"// Example Protocol:"}</span>
                            <span>{item.example}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-4xl font-bold text-white mt-12 mb-6 border-b border-white/20 pb-3"
            >
                AI Learning Paradigms <span className="text-neon-purple">// Training Regimens</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                {mlParadigms.map((paradigm, idx) => {
                    const colorStyles = {
                        blue: {
                            border: "border-blue-500/20",
                            hoverBorder: "hover:border-neon-blue",
                            hoverShadow: "hover:shadow-neon-blue-glow",
                            icon: "text-neon-blue",
                            title: "text-neon-blue-light",
                            marker: "marker:text-neon-blue",
                            scenariosBorder: "border-blue-500/30",
                            scenariosTitle: "text-neon-blue-light",
                            gradient: "from-blue-900/20 to-black/40"
                        },
                        purple: {
                            border: "border-purple-500/20",
                            hoverBorder: "hover:border-neon-purple",
                            hoverShadow: "hover:shadow-neon-purple-glow",
                            icon: "text-neon-purple",
                            title: "text-neon-purple-light",
                            marker: "marker:text-neon-purple",
                            scenariosBorder: "border-purple-500/30",
                            scenariosTitle: "text-neon-purple-light",
                            gradient: "from-purple-900/20 to-black/40"
                        },
                        green: {
                            border: "border-green-500/20",
                            hoverBorder: "hover:border-neon-green",
                            hoverShadow: "hover:shadow-neon-green-glow",
                            icon: "text-neon-green",
                            title: "text-neon-green-light",
                            marker: "marker:text-neon-green",
                            scenariosBorder: "border-green-500/30",
                            scenariosTitle: "text-neon-green-light",
                            gradient: "from-green-900/20 to-black/40"
                        }
                    }[paradigm.color as "blue" | "purple" | "green"] || {
                        border: "border-purple-500/20",
                        hoverBorder: "hover:border-neon-purple",
                        hoverShadow: "hover:shadow-neon-purple-glow",
                        icon: "text-neon-purple",
                        title: "text-neon-purple-light",
                        marker: "marker:text-neon-purple",
                        scenariosBorder: "border-purple-500/30",
                        scenariosTitle: "text-neon-purple-light",
                        gradient: "from-purple-900/20 to-black/40"
                    };

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                            className={`glass-panel p-8 rounded-xl border ${colorStyles.border} bg-gradient-to-br ${colorStyles.gradient} ${colorStyles.hoverBorder} ${colorStyles.hoverShadow} transition-all duration-300 flex flex-col group relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorStyles.gradient} opacity-50`}></div>

                            <div className="flex items-center mb-4 relative z-10">
                                {paradigm.icon && <paradigm.icon className={`w-10 h-10 ${colorStyles.icon} mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`} />}
                                <h3 className={`text-2xl font-bold ${colorStyles.title} leading-tight`}>{paradigm.title}</h3>
                            </div>

                            <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed relative z-10">{paradigm.description}</p>

                            <div className={`bg-black/40 p-5 rounded-lg border border-dashed ${colorStyles.scenariosBorder} relative z-10`}>
                                <div className={`text-xs font-mono ${colorStyles.scenariosTitle} mb-3 uppercase tracking-wider flex items-center`}>
                                    <span className="mr-2 opacity-70">_&gt;</span> Operative Scenarios
                                </div>
                                <ul className={`text-sm text-gray-400 space-y-2 list-disc list-inside ${colorStyles.marker}`}>
                                    {paradigm.examples.map((ex, exIdx) => (
                                        <li key={exIdx} className="hover:text-gray-300 transition-colors duration-200">{ex}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-4xl font-bold text-white mt-12 mb-6 border-b border-white/20 pb-3"
            >
                Actionable Intelligence <span className="text-neon-green">// Code Manifestation</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-gray-400 leading-relaxed mb-6"
            >
                Observe how these terminologies coalesce within a practical Python script. From data perception to model inference, witness the AI lifecycle in action. This example simulates anomaly detection in a cyber-physical system.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="my-8 rounded-xl overflow-hidden shadow-lg shadow-green-500/20 border border-green-600/30"
            >
                <InteractiveCodeBlock
                    initialCode={codeSnippet}
                    language="python"
                    title="Simple AI Data Processing and Inference"
                    description="This Python example demonstrates feature extraction, data splitting (training/testing), model training, and making predictions (inference) on new data, encapsulating several core AI terms."
                />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="text-4xl font-bold text-white mt-12 mb-6 border-b border-white/20 pb-3"
            >
                The Agent-Environment Loop <span className="text-neon-blue">// The Feedback Matrix</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-gray-400 leading-relaxed mb-6"
            >
                At the heart of any autonomous system is the continuous interaction loop between the agent and its operational environment. Data flows, decisions are made, and the world reshapes. This cycle is fundamental to understanding intelligent systems.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-blue-600/30 p-8 rounded-xl shadow-lg mb-12 font-mono text-sm relative overflow-hidden"
            >
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-neon-blue opacity-10 rounded-full blur-xl animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-neon-purple opacity-10 rounded-full blur-xl animate-pulse-slow delay-500"></div>
                </div>
                <div className="relative z-10 space-y-6">
                    {/* Agent Perceives */}
                    <div className="flex items-center justify-between animate-fade-in-up delay-1">
                        <span className="text-neon-blue-light font-bold text-lg w-1/4 text-left">ENVIRONMENT</span>
                        <div className="flex-grow flex items-center mx-4">
                            <span className="text-gray-600 text-xs mr-2">--&gt;</span>
                            <div className="flex-1 h-0.5 bg-blue-500/30 rounded-full relative">
                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-neon-blue-light text-xs bg-gray-900 px-2 rounded">PERCEPT</span>
                            </div>
                            <span className="text-gray-600 text-xs ml-2">--&gt;</span>
                        </div>
                        <span className="text-neon-purple-light font-bold text-lg w-1/4 text-right">AGENT</span>
                    </div>

                    {/* Agent Thinks/Processes */}
                    <div className="flex items-center justify-center animate-fade-in-up delay-2">
                        <div className="w-1/2 text-center text-gray-500 text-xs mt-2 relative">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-neon-green-light px-2 rounded-full bg-gray-900 border border-green-700/50">DECISION CYCLE</span>
                            <div className="h-0.5 bg-green-500/30 rounded-full w-2/3 mx-auto"></div>
                        </div>
                    </div>

                    {/* Agent Acts */}
                    <div className="flex items-center justify-between animate-fade-in-up delay-3">
                        <span className="text-neon-blue-light font-bold text-lg w-1/4 text-left">ENVIRONMENT</span>
                        <div className="flex-grow flex items-center mx-4">
                            <span className="text-gray-600 text-xs mr-2">&lt;--</span>
                            <div className="flex-1 h-0.5 bg-purple-500/30 rounded-full relative">
                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-neon-purple-light text-xs bg-gray-900 px-2 rounded">ACTION</span>
                            </div>
                            <span className="text-gray-600 text-xs ml-2">&lt;--</span>
                        </div>
                        <span className="text-neon-purple-light font-bold text-lg w-1/4 text-right">AGENT</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-6 text-center pt-4 border-t border-white/10">
                        This continuous cycle drives autonomous behavior: the <strong className="text-neon-blue-light">Agent</strong> senses the <strong className="text-neon-blue-light">Environment's state</strong> (Percept), processes information, decides on an <strong className="text-neon-purple-light">Action</strong>, and executes it, altering the Environment and initiating the next cycle.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="bg-white/5 border-l-4 border-neon-blue-light p-6 my-8 rounded-r-xl shadow-lg shadow-blue-500/10"
            >
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue-light">{"// PROTOCOL ADVICE:"}</strong> Don't try to download the entire data stream at once. Focus on understanding each core concept, then observe how they interconnect. Mastery comes through practical application in your own cybernetic endeavors.
                </p>
            </motion.div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-real-world">
                    <Button variant="ghost" className="gap-2 text-neon-blue-light hover:text-white hover:bg-white/10 transition-colors duration-200">
                        <ChevronLeft className="w-5 h-5" /> <span className="text-lg">Previous Module</span>
                    </Button>
                </Link>
                <Link href="/docs/linear-algebra">
                    <Button className="gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:from-neon-blue-light hover:to-neon-purple-light transition-all duration-300 shadow-lg shadow-purple-500/30">
                        <span className="text-lg">Next Module: Linear Algebra</span> <ChevronRight className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
