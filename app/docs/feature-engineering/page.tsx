"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeatureEngineeringPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Feature Engineering
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Feature engineering is the art of creating better input features for machine learning models. Good features can make the difference between a mediocre model and a great one.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Key Insight:</strong> Better features beat better algorithms. A simple model with great features outperforms a complex model with poor features.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Feature Encoding</h2>
            <p className="text-gray-400 mb-6">
                Convert categorical variables into numerical format that models can understand.
            </p>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Label Encoding</h3>
                    <p className="text-gray-400 mb-3">Assign each category a unique integer.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        ['red', 'blue', 'green'] → [0, 1, 2]
                    </div>
                    <p className="text-xs text-gray-500">⚠️ Use for ordinal data only (implies order)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">One-Hot Encoding</h3>
                    <p className="text-gray-400 mb-3">Create binary column for each category.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        'red' → [1, 0, 0]<br />
                        'blue' → [0, 1, 0]<br />
                        'green' → [0, 0, 1]
                    </div>
                    <p className="text-xs text-gray-500">✓ No ordinal assumption, works for nominal data</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Target Encoding</h3>
                    <p className="text-gray-400 mb-3">Replace category with mean of target variable.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        'NYC' → average salary in NYC<br />
                        'LA' → average salary in LA
                    </div>
                    <p className="text-xs text-gray-500">✓ Captures relationship with target, ⚠️ risk of overfitting</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import pandas as pd
from sklearn.preprocessing import LabelEncoder, OneHotEncoder

# Sample data
data = pd.DataFrame({
    'color': ['red', 'blue', 'green', 'red', 'blue'],
    'size': ['S', 'M', 'L', 'M', 'S']
})

print("Original Data:")
print(data)

# Label Encoding
le = LabelEncoder()
data['color_label'] = le.fit_transform(data['color'])

print("\\nLabel Encoded:")
print(data[['color', 'color_label']])

# One-Hot Encoding
one_hot = pd.get_dummies(data['color'], prefix='color')

print("\\nOne-Hot Encoded:")
print(one_hot)`}
                expectedOutput={`Original Data:
   color size
0    red    S
1   blue    M
2  green    L
3    red    M
4   blue    S

Label Encoded:
   color  color_label
0    red            2
1   blue            0
2  green            1
3    red            2
4   blue            0

One-Hot Encoded:
   color_blue  color_green  color_red
0           0            0          1
1           1            0          0
2           0            1          0
3           0            0          1
4           1            0          0`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Feature Scaling</h2>
            <p className="text-gray-400 mb-6">
                Normalize features to similar ranges so no single feature dominates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Standardization (Z-score)</h3>
                    <p className="text-gray-400 mb-3">Mean = 0, Std = 1</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        x_scaled = (x - mean) / std
                    </div>
                    <p className="text-xs text-gray-500">Use for: Most ML algorithms, when data is normally distributed</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Normalization (Min-Max)</h3>
                    <p className="text-gray-400 mb-3">Scale to [0, 1] range</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        x_scaled = (x - min) / (max - min)
                    </div>
                    <p className="text-xs text-gray-500">Use for: Neural networks, when you need bounded values</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.preprocessing import StandardScaler, MinMaxScaler
import numpy as np

# Sample data
data = np.array([[100], [200], [300], [400], [500]])

print("Original Data:")
print(data.flatten())

# Standardization
scaler_std = StandardScaler()
data_std = scaler_std.fit_transform(data)

print("\\nStandardized (mean=0, std=1):")
print(data_std.flatten())
print(f"Mean: {data_std.mean():.2f}, Std: {data_std.std():.2f}")

# Normalization
scaler_norm = MinMaxScaler()
data_norm = scaler_norm.fit_transform(data)

print("\\nNormalized [0, 1]:")
print(data_norm.flatten())
print(f"Min: {data_norm.min():.2f}, Max: {data_norm.max():.2f}")`}
                expectedOutput={`Original Data:
[100 200 300 400 500]

Standardized (mean=0, std=1):
[-1.41 -0.71  0.    0.71  1.41]
Mean: 0.00, Std: 1.00

Normalized [0, 1]:
[0.   0.25 0.5  0.75 1.  ]
Min: 0.00, Max: 1.00`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Feature Creation</h2>
            <p className="text-gray-400 mb-6">
                Create new features from existing ones to capture relationships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Polynomial Features", desc: "x² x³, x₁×x₂ for non-linear relationships" },
                    { title: "Binning", desc: "Group continuous values into categories" },
                    { title: "Date Features", desc: "Extract day, month, year, day of week" },
                    { title: "Text Features", desc: "Length, word count, TF-IDF" },
                    { title: "Aggregations", desc: "Sum, mean, max by group" },
                    { title: "Ratios", desc: "price/sqft, clicks/impressions" },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-400">{feature.desc}</div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Feature Selection</h2>
            <p className="text-gray-400 mb-6">
                Choose the most important features to reduce dimensionality and improve performance.
            </p>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Filter Methods</h3>
                    <p className="text-sm text-gray-400">Select features based on statistical tests (correlation, chi-square, mutual information)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">Wrapper Methods</h3>
                    <p className="text-sm text-gray-400">Use model performance to select features (forward selection, backward elimination, RFE)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Embedded Methods</h3>
                    <p className="text-sm text-gray-400">Feature selection during model training (Lasso, Ridge, tree-based feature importance)</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Understand your data before engineering features",
                    "Create features based on domain knowledge",
                    "Avoid data leakage (don't use future information)",
                    "Scale features after train/test split",
                    "Document feature engineering steps",
                    "Test feature importance and remove low-value features",
                    "Iterate: create, test, refine",
                ].map((practice, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">▹</span>
                        <span className="text-gray-300 text-sm">{practice}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Feature engineering is both art and science. Combine domain expertise with experimentation to create features that help your model learn better.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/data-visualization">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/supervised-learning">
                    <Button className="gap-2">
                        Next: Supervised Learning <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
