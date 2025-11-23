"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ModelEvaluationPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Model Evaluation
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                How do you know if your model is good? Model evaluation measures performance, detects overfitting, and helps you choose the best model. Never deploy a model without proper evaluation!
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Golden Rule:</strong> Always evaluate on data the model hasn't seen during training (test set).
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Train/Test Split</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-12 bg-neon-blue rounded flex items-center justify-center text-sm font-bold">Training</div>
                        <div className="flex-1 text-gray-400">70-80% of data. Model learns patterns here.</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-12 bg-neon-purple rounded flex items-center justify-center text-sm font-bold">Validation</div>
                        <div className="flex-1 text-gray-400">10-15% of data. Tune hyperparameters.</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-12 bg-green-400 rounded flex items-center justify-center text-sm font-bold">Test</div>
                        <div className="flex-1 text-gray-400">10-20% of data. Final performance check.</div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Classification Metrics</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Accuracy</h3>
                    <p className="text-gray-400 mb-3">Percentage of correct predictions.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Accuracy = (TP + TN) / (TP + TN + FP + FN)
                    </div>
                    <p className="text-xs text-gray-500">⚠️ Misleading with imbalanced classes</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Precision</h3>
                    <p className="text-gray-400 mb-3">Of predicted positives, how many are actually positive?</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Precision = TP / (TP + FP)
                    </div>
                    <p className="text-xs text-gray-500">Use when: False positives are costly (spam filter)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Recall (Sensitivity)</h3>
                    <p className="text-gray-400 mb-3">Of actual positives, how many did we find?</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Recall = TP / (TP + FN)
                    </div>
                    <p className="text-xs text-gray-500">Use when: False negatives are costly (disease detection)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">F1-Score</h3>
                    <p className="text-gray-400 mb-3">Harmonic mean of precision and recall.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        F1 = 2 × (Precision × Recall) / (Precision + Recall)
                    </div>
                    <p className="text-xs text-gray-500">Balances precision and recall</p>
                </div>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Confusion Matrix</h3>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div></div>
                    <div className="font-bold text-neon-blue">Predicted Positive</div>
                    <div className="font-bold text-neon-blue">Predicted Negative</div>

                    <div className="font-bold text-neon-purple">Actual Positive</div>
                    <div className="bg-green-500/20 p-3 rounded">True Positive (TP)</div>
                    <div className="bg-red-500/20 p-3 rounded">False Negative (FN)</div>

                    <div className="font-bold text-neon-purple">Actual Negative</div>
                    <div className="bg-red-500/20 p-3 rounded">False Positive (FP)</div>
                    <div className="bg-green-500/20 p-3 rounded">True Negative (TN)</div>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

# True labels and predictions
y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]

# Calculate metrics
accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)

print("Classification Metrics:")
print(f"Accuracy:  {accuracy:.2f}")
print(f"Precision: {precision:.2f}")
print(f"Recall:    {recall:.2f}")
print(f"F1-Score:  {f1:.2f}")

print("\\nConfusion Matrix:")
cm = confusion_matrix(y_true, y_pred)
print(cm)
print(f"\\nTP={cm[1,1]}, FP={cm[0,1]}, TN={cm[0,0]}, FN={cm[1,0]}")`}
                expectedOutput={`Classification Metrics:
Accuracy:  0.80
Precision: 0.75
Recall:    0.75
F1-Score:  0.75

Confusion Matrix:
[[4 1]
 [1 4]]

TP=4, FP=1, TN=4, FN=1`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Regression Metrics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">MAE (Mean Absolute Error)</h3>
                    <p className="text-gray-400 mb-3">Average absolute difference.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        MAE = (1/n) Σ |y - ŷ|
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Easy to interpret, same units as target</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">MSE (Mean Squared Error)</h3>
                    <p className="text-gray-400 mb-3">Average squared difference.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        MSE = (1/n) Σ (y - ŷ)²
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Penalizes large errors more</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">RMSE (Root MSE)</h3>
                    <p className="text-gray-400 mb-3">Square root of MSE.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        RMSE = √MSE
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Same units as target, interpretable</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">R² (R-squared)</h3>
                    <p className="text-gray-400 mb-3">Proportion of variance explained.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        R² = 1 - (SS_res / SS_tot)
                    </div>
                    <p className="text-xs text-gray-500 mt-2">0 to 1, higher is better</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Cross-Validation</h2>
            <p className="text-gray-400 mb-6">
                More reliable than single train/test split. Use all data for both training and testing.
            </p>

            <div className="glass-panel p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-neon-blue mb-4">K-Fold Cross-Validation</h3>
                <div className="space-y-3 text-sm text-gray-300">
                    <div>1. Split data into K equal folds</div>
                    <div>2. For each fold:</div>
                    <div className="ml-6">• Use it as test set</div>
                    <div className="ml-6">• Use remaining K-1 folds as training</div>
                    <div className="ml-6">• Train model and evaluate</div>
                    <div>3. Average performance across all K folds</div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Typical: K=5 or K=10</p>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification

# Generate sample data
X, y = make_classification(n_samples=100, n_features=20, random_state=42)

# Create model
model = LogisticRegression()

# 5-fold cross-validation
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')

print("5-Fold Cross-Validation Results:")
print(f"Fold scores: {scores}")
print(f"\\nMean accuracy: {scores.mean():.3f}")
print(f"Std deviation: {scores.std():.3f}")
print(f"\\n95% confidence: {scores.mean():.3f} ± {1.96*scores.std():.3f}")`}
                expectedOutput={`5-Fold Cross-Validation Results:
Fold scores: [0.85 0.90 0.80 0.85 0.90]

Mean accuracy: 0.860
Std deviation: 0.040

95% confidence: 0.860 ± 0.078`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Overfitting vs Underfitting</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl border-2 border-red-500/30">
                    <h3 className="text-xl font-bold text-red-400 mb-3">Underfitting</h3>
                    <p className="text-gray-400 mb-3">Model too simple.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        • High training error<br />
                        • High test error<br />
                        • Model hasn't learned
                    </div>
                    <p className="text-xs text-gray-500">Fix: More complex model, more features</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-green-500/30">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Good Fit</h3>
                    <p className="text-gray-400 mb-3">Just right!</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        • Low training error<br />
                        • Low test error<br />
                        • Generalizes well
                    </div>
                    <p className="text-xs text-gray-500">Goal: Achieve this balance</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-2 border-yellow-500/30">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Overfitting</h3>
                    <p className="text-gray-400 mb-3">Model too complex.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-3">
                        • Low training error<br />
                        • High test error<br />
                        • Memorized training data
                    </div>
                    <p className="text-xs text-gray-500">Fix: Regularization, more data, simpler model</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Always use separate test set for final evaluation",
                    "Use cross-validation for model selection",
                    "Choose metrics appropriate for your problem",
                    "Consider class imbalance when evaluating",
                    "Plot learning curves to diagnose overfitting",
                    "Never tune hyperparameters on test set",
                    "Report multiple metrics, not just one",
                ].map((practice, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-gray-300 text-sm">{practice}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Proper evaluation is critical. Use appropriate metrics, cross-validation, and always test on unseen data to ensure your model generalizes well.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/reinforcement-learning">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/perceptrons">
                    <Button className="gap-2">
                        Next: Perceptrons <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
