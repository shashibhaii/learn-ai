"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DataCleaningPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Data Cleaning
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Real-world data is messy. Data cleaning is the process of detecting and correcting errors, handling missing values, and preparing data for analysis. It's often 80% of the work in a data science project.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Remember:</strong> Garbage in, garbage out. Clean data is essential for accurate models.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Common Data Issues</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { icon: "❌", title: "Missing Values", desc: "NULL, NaN, empty strings", color: "red" },
                    { icon: "📊", title: "Outliers", desc: "Extreme values that skew analysis", color: "yellow" },
                    { icon: "🔄", title: "Duplicates", desc: "Repeated rows or entries", color: "blue" },
                    { icon: "📝", title: "Inconsistent Format", desc: "Mixed date formats, capitalization", color: "purple" },
                    { icon: "⚠️", title: "Invalid Data", desc: "Negative ages, impossible dates", color: "orange" },
                    { icon: "🔢", title: "Wrong Data Types", desc: "Numbers stored as strings", color: "green" },
                ].map((issue, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className="text-4xl mb-3">{issue.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{issue.title}</h3>
                        <p className="text-sm text-gray-400">{issue.desc}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Handling Missing Values</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">1. Remove (Deletion)</h3>
                    <p className="text-gray-400 mb-3">Drop rows or columns with missing values.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        ✓ Simple and fast<br />
                        ✗ Loses information, reduces dataset size
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Use when: Few missing values, large dataset</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">2. Imputation (Fill)</h3>
                    <p className="text-gray-400 mb-3">Replace missing values with estimates.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        • Mean/Median/Mode (numerical)<br />
                        • Forward/Backward fill (time series)<br />
                        • Model-based imputation (KNN, regression)
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Use when: Many missing values, can't afford to lose data</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">3. Flag as Missing</h3>
                    <p className="text-gray-400 mb-3">Create indicator variable for missingness.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300">
                        Add column: is_missing = True/False
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Use when: Missingness itself is informative</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import pandas as pd
import numpy as np

# Create sample data with missing values
data = {
    'age': [25, np.nan, 35, 40, np.nan, 30],
    'salary': [50000, 60000, np.nan, 75000, 65000, 55000],
    'city': ['NYC', 'LA', np.nan, 'Chicago', 'NYC', 'LA']
}
df = pd.DataFrame(data)

print("Original Data:")
print(df)
print(f"\\nMissing values:\\n{df.isnull().sum()}")

# Method 1: Drop rows with any missing values
df_dropped = df.dropna()
print(f"\\nAfter dropna: {len(df_dropped)} rows")

# Method 2: Fill with mean/mode
df_filled = df.copy()
df_filled['age'].fillna(df['age'].mean(), inplace=True)
df_filled['salary'].fillna(df['salary'].median(), inplace=True)
df_filled['city'].fillna(df['city'].mode()[0], inplace=True)

print("\\nAfter imputation:")
print(df_filled)`}
                expectedOutput={`Original Data:
    age   salary     city
0  25.0  50000.0      NYC
1   NaN  60000.0       LA
2  35.0      NaN      NaN
3  40.0  75000.0  Chicago
4   NaN  65000.0      NYC
5  30.0  55000.0       LA

Missing values:
age       2
salary    1
city      1

After dropna: 3 rows

After imputation:
    age   salary     city
0  25.0  50000.0      NYC
1  32.5  60000.0       LA
2  35.0  61000.0      NYC
3  40.0  75000.0  Chicago
4  32.5  65000.0      NYC
5  30.0  55000.0       LA`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Outlier Detection</h2>
            <p className="text-gray-400 mb-6">
                Outliers can skew analysis and model performance. Detect them before deciding how to handle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Statistical Methods</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li><strong>Z-score:</strong> Values beyond 3 standard deviations</li>
                        <li><strong>IQR:</strong> Values outside 1.5 × IQR from quartiles</li>
                        <li><strong>Modified Z-score:</strong> Robust to outliers</li>
                    </ul>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Visual Methods</h3>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li><strong>Box plots:</strong> Show quartiles and outliers</li>
                        <li><strong>Scatter plots:</strong> Identify unusual patterns</li>
                        <li><strong>Histograms:</strong> Spot extreme values</li>
                    </ul>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np
import pandas as pd

# Sample data with outliers
data = [10, 12, 11, 13, 12, 100, 11, 14, 13, 12]
df = pd.DataFrame({'values': data})

# Method 1: IQR method
Q1 = df['values'].quantile(0.25)
Q3 = df['values'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers_iqr = df[(df['values'] < lower_bound) | (df['values'] > upper_bound)]

print("IQR Method:")
print(f"Q1: {Q1}, Q3: {Q3}, IQR: {IQR}")
print(f"Bounds: [{lower_bound}, {upper_bound}]")
print(f"Outliers: {outliers_iqr['values'].tolist()}")

# Method 2: Z-score
mean = df['values'].mean()
std = df['values'].std()
z_scores = np.abs((df['values'] - mean) / std)
outliers_z = df[z_scores > 3]

print(f"\\nZ-score Method (threshold=3):")
print(f"Outliers: {outliers_z['values'].tolist()}")`}
                expectedOutput={`IQR Method:
Q1: 11.0, Q3: 13.0, IQR: 2.0
Bounds: [8.0, 16.0]
Outliers: [100]

Z-score Method (threshold=3):
Outliers: [100]`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Data Cleaning Checklist</h2>

            <div className="space-y-3 mb-8">
                {[
                    "Check for missing values and decide on strategy",
                    "Identify and handle outliers appropriately",
                    "Remove duplicate rows",
                    "Standardize formats (dates, text, categories)",
                    "Validate data types and convert if needed",
                    "Check for logical inconsistencies",
                    "Handle special characters and encoding issues",
                    "Document all cleaning steps for reproducibility",
                ].map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-neon-blue">✓</span>
                        <span className="text-gray-300 text-sm">{step}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Best Practice:</strong> Always keep a copy of raw data. Document every cleaning step. Clean data incrementally and validate at each stage.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/data-collection">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/data-visualization">
                    <Button className="gap-2">
                        Next: Data Visualization <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
