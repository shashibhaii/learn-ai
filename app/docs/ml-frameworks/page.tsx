"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MLFrameworksPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                ML Frameworks (Scikit-learn, XGBoost)
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Machine learning frameworks provide pre-built algorithms and tools for building ML models. Scikit-learn is the go-to for classical ML, while XGBoost dominates tabular data competitions.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Best For:</strong> Tabular data, structured datasets, traditional ML tasks. For deep learning, use PyTorch or TensorFlow.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Scikit-learn</h2>
            <p className="text-gray-400 mb-6">
                The most popular Python library for classical machine learning. Simple, consistent API.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Predict
y_pred = clf.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")`}
                expectedOutput={`Accuracy: 1.00`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">XGBoost</h2>
            <p className="text-gray-400 mb-6">
                Gradient boosting framework. Wins most Kaggle competitions on tabular data.
            </p>

            <div className="space-y-4 mb-8">
                {[
                    { title: "Speed", desc: "Highly optimized, parallel processing" },
                    { title: "Accuracy", desc: "State-of-the-art on structured data" },
                    { title: "Regularization", desc: "Built-in L1/L2 to prevent overfitting" },
                    { title: "Missing Values", desc: "Handles missing data automatically" },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <div>
                            <div className="font-bold text-white">{feature.title}</div>
                            <div className="text-sm text-gray-400">{feature.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Use Scikit-learn for classical ML and XGBoost for tabular data competitions. Both have simple APIs and excellent documentation.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/llm-apis">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/dl-frameworks">
                    <Button className="gap-2">
                        Next: DL Frameworks <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
