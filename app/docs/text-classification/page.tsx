"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TextClassificationPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Text Classification
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Text classification assigns predefined categories to text documents. It's one of the most common NLP tasks, powering spam filters, sentiment analysis, topic categorization, and more.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Task:</strong> Given text input, predict which category it belongs to (binary or multi-class).
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Common Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { icon: "📧", title: "Spam Detection", desc: "Spam vs Ham (legitimate email)" },
                    { icon: "😊", title: "Sentiment Analysis", desc: "Positive, Negative, Neutral" },
                    { icon: "📰", title: "Topic Classification", desc: "Sports, Politics, Tech, etc." },
                    { icon: "🏷️", title: "Intent Detection", desc: "User intent in chatbots" },
                    { icon: "⭐", title: "Review Rating", desc: "1-5 stars from review text" },
                    { icon: "🚨", title: "Content Moderation", desc: "Toxic, offensive, safe" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="text-3xl mb-2">{app.icon}</div>
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Approaches</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Traditional ML (Feature Engineering)</h3>
                    <p className="text-gray-400 mb-3">Extract features manually, then use ML classifiers.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        1. TF-IDF or Bag of Words for features<br />
                        2. Train: Naive Bayes, Logistic Regression, SVM<br />
                        3. Fast, interpretable, works with small data
                    </div>
                    <p className="text-xs text-gray-500">✓ Simple, fast, good baseline | ✗ Manual feature engineering</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">Deep Learning (End-to-End)</h3>
                    <p className="text-gray-400 mb-3">Learn features automatically from raw text.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        1. Embeddings (Word2Vec, GloVe, BERT)<br />
                        2. Neural networks: CNN, RNN, LSTM, Transformer<br />
                        3. State-of-the-art performance
                    </div>
                    <p className="text-xs text-gray-500">✓ Automatic features, high accuracy | ✗ Needs more data, slower</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Traditional ML Pipeline</h2>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Sample data
texts = [
    "I love this product, it's amazing!",
    "Terrible experience, very disappointed",
    "Great quality, highly recommend",
    "Waste of money, don't buy",
    "Excellent service and fast delivery",
    "Poor quality, broke after one use"
]
labels = [1, 0, 1, 0, 1, 0]  # 1=positive, 0=negative

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    texts, labels, test_size=0.33, random_state=42
)

# TF-IDF vectorization
vectorizer = TfidfVectorizer(max_features=100)
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train Naive Bayes
clf = MultinomialNB()
clf.fit(X_train_vec, y_train)

# Predict
y_pred = clf.predict(X_test_vec)

print("Predictions:", y_pred)
print("Actual:     ", y_test)
print(f"\\nAccuracy: {accuracy_score(y_test, y_pred):.2f}")`}
                expectedOutput={`Predictions: [0 1]
Actual:      [0, 1]

Accuracy: 1.00`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Deep Learning Architectures</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">CNN for Text</h3>
                    <p className="text-gray-400 mb-3">Convolutional filters capture local patterns (n-grams).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Fast, parallelizable, good for short texts<br />
                        Captures local features well
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">RNN/LSTM</h3>
                    <p className="text-gray-400 mb-3">Process text sequentially, capture long-range dependencies.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Good for sequences, context-aware<br />
                        Slower to train than CNNs
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Transformers (BERT, RoBERTa)</h3>
                    <p className="text-gray-400 mb-3">Attention mechanism, bidirectional context.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        State-of-the-art on most benchmarks<br />
                        Pre-trained models available (transfer learning)
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Transfer Learning with BERT</h2>

            <div className="bg-black/40 p-8 rounded-xl border border-white/10 mb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold">1</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Load Pre-trained BERT</div>
                            <div className="text-sm text-gray-400">Use model trained on billions of words</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold">2</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Add Classification Head</div>
                            <div className="text-sm text-gray-400">Add dense layer for your classes</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center font-bold">3</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Fine-tune on Your Data</div>
                            <div className="text-sm text-gray-400">Train on task-specific dataset</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">4</div>
                        <div className="flex-1">
                            <div className="font-bold text-white mb-1">Achieve SOTA Performance</div>
                            <div className="text-sm text-gray-400">Often with relatively small datasets</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Handling Imbalanced Data</h2>

            <div className="space-y-3 mb-8">
                {[
                    { technique: "Class Weights", desc: "Penalize misclassifying minority class more" },
                    { technique: "Oversampling", desc: "Duplicate minority class examples (SMOTE)" },
                    { technique: "Undersampling", desc: "Reduce majority class examples" },
                    { technique: "Data Augmentation", desc: "Paraphrase, back-translate minority examples" },
                    { technique: "Focal Loss", desc: "Focus on hard examples, down-weight easy ones" },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{item.technique}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Start with simple baseline (Naive Bayes + TF-IDF)",
                    "Clean text: lowercase, remove special chars, handle contractions",
                    "Use pre-trained embeddings (Word2Vec, GloVe) or BERT",
                    "Try both traditional ML and deep learning",
                    "Cross-validate to avoid overfitting",
                    "Monitor precision, recall, F1 (not just accuracy)",
                    "Use class weights for imbalanced data",
                    "Fine-tune BERT for state-of-the-art results",
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
                    <strong className="text-neon-purple">Key Takeaway:</strong> Text classification is fundamental to NLP. Start with simple baselines (Naive Bayes + TF-IDF), then move to deep learning (BERT) for best performance.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/word-embeddings">
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
