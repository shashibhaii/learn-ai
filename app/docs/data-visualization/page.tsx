"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DataVisualizationPage() {
    const chartTypes = [
        { name: "Line Chart", use: "Trends over time", icon: "📈", example: "Stock prices, temperature" },
        { name: "Bar Chart", use: "Compare categories", icon: "📊", example: "Sales by region" },
        { name: "Scatter Plot", use: "Relationships", icon: "⚫", example: "Height vs weight" },
        { name: "Histogram", use: "Distributions", icon: "📶", example: "Age distribution" },
        { name: "Box Plot", use: "Statistical summary", icon: "📦", example: "Salary ranges" },
        { name: "Heatmap", use: "Matrix data", icon: "🔥", example: "Correlation matrix" },
    ];

    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Data Visualization
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Data visualization transforms numbers into insights. Good visualizations reveal patterns, outliers, and relationships that are invisible in raw data.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Remember:</strong> A picture is worth a thousand data points. Visualization is essential for exploratory data analysis (EDA).
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Common Chart Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {chartTypes.map((chart, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">{chart.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1">{chart.name}</h3>
                                <p className="text-sm text-gray-400 mb-2">{chart.use}</p>
                                <div className="text-xs text-gray-500">Example: {chart.example}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Matplotlib Basics</h2>
            <p className="text-gray-400 mb-4">
                Matplotlib is Python's most popular plotting library.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import matplotlib.pyplot as plt
import numpy as np

# Sample data
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
sales = [45, 52, 48, 61, 58, 67]

# Create line plot
plt.figure(figsize=(10, 6))
plt.plot(months, sales, marker='o', linewidth=2, color='#00D9FF')
plt.title('Monthly Sales Trend', fontsize=16, fontweight='bold')
plt.xlabel('Month')
plt.ylabel('Sales (in thousands)')
plt.grid(True, alpha=0.3)

# Add value labels
for i, v in enumerate(sales):
    plt.text(i, v+1, str(v), ha='center')

plt.tight_layout()
plt.show()

print(f"Average sales: {np.mean(sales):.1f}k")
print(f"Peak month: {months[np.argmax(sales)]}")`}
                expectedOutput={`Average sales: 55.2k
Peak month: Jun`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Seaborn for Statistical Plots</h2>
            <p className="text-gray-400 mb-4">
                Seaborn builds on Matplotlib with beautiful statistical visualizations.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import seaborn as sns
import pandas as pd
import numpy as np

# Create sample dataset
np.random.seed(42)
data = pd.DataFrame({
    'Category': ['A']*50 + ['B']*50 + ['C']*50,
    'Value': np.concatenate([
        np.random.normal(50, 10, 50),
        np.random.normal(60, 12, 50),
        np.random.normal(55, 8, 50)
    ])
})

# Create violin plot
plt.figure(figsize=(10, 6))
sns.violinplot(data=data, x='Category', y='Value', palette='Set2')
plt.title('Distribution by Category', fontsize=16)
plt.ylabel('Value')
plt.show()

# Summary statistics
print(data.groupby('Category')['Value'].describe()[['mean', 'std']])`}
                expectedOutput={`         mean        std
Category                  
A        50.2       9.8
B        60.1      11.9
C        54.8       7.9`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Exploratory Data Analysis (EDA)</h2>
            <p className="text-gray-400 mb-4">
                EDA is the process of visually exploring data to understand its structure and patterns.
            </p>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-blue-400 mb-2">1. Understand Distributions</h3>
                    <p className="text-sm text-gray-400">Use histograms and box plots to see how data is spread.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-lg font-bold text-purple-400 mb-2">2. Find Relationships</h3>
                    <p className="text-sm text-gray-400">Scatter plots and correlation heatmaps reveal connections between variables.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-green-400 mb-2">3. Detect Outliers</h3>
                    <p className="text-sm text-gray-400">Box plots and scatter plots help identify unusual data points.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">4. Compare Groups</h3>
                    <p className="text-sm text-gray-400">Bar charts and violin plots show differences between categories.</p>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Correlation Heatmap</h2>
            <p className="text-gray-400 mb-4">
                Visualize relationships between multiple variables at once.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import seaborn as sns
import pandas as pd
import numpy as np

# Create sample dataset
np.random.seed(42)
df = pd.DataFrame({
    'Age': np.random.randint(20, 60, 100),
    'Income': np.random.randint(30000, 120000, 100),
    'Experience': np.random.randint(0, 30, 100),
    'Satisfaction': np.random.randint(1, 11, 100)
})

# Calculate correlation matrix
corr = df.corr()

# Create heatmap
plt.figure(figsize=(8, 6))
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0,
            square=True, linewidths=1, cbar_kws={"shrink": 0.8})
plt.title('Correlation Heatmap', fontsize=16)
plt.tight_layout()
plt.show()

print("\\nStrongest correlations:")
print(corr.unstack().sort_values(ascending=False)[1:6])`}
                expectedOutput={`Strongest correlations:
Age          Experience    0.89
Experience   Age           0.89
Income       Experience    0.45
Experience   Income        0.45
Age          Income        0.42`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { icon: "✓", text: "Choose the right chart for your data type", color: "green" },
                    { icon: "✓", text: "Use clear, descriptive titles and labels", color: "green" },
                    { icon: "✓", text: "Avoid 3D charts (they distort perception)", color: "green" },
                    { icon: "✓", text: "Use color purposefully, not decoratively", color: "green" },
                    { icon: "✓", text: "Start y-axis at zero for bar charts", color: "green" },
                    { icon: "✓", text: "Keep it simple—remove chart junk", color: "green" },
                ].map((practice, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className="text-green-400 text-xl">{practice.icon}</span>
                        <span className="text-gray-300 text-sm">{practice.text}</span>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Pro Tip:</strong> Always visualize your data before modeling. You'll catch errors, understand distributions, and get ideas for feature engineering.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/data-cleaning">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/feature-engineering">
                    <Button className="gap-2">
                        Next: Feature Engineering <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
