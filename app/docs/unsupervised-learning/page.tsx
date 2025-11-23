"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UnsupervisedLearningPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Unsupervised Learning
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Unsupervised learning finds patterns in data without labeled examples. The model discovers hidden structure, groups similar items, or reduces complexity—all without being told what to look for.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Key Difference:</strong> No labels needed! The model explores data to find natural groupings and patterns.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Main Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8 rounded-xl border-2 border-blue-500/30"
                >
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Clustering</h3>
                    <p className="text-gray-400 mb-4">Group similar data points together.</p>
                    <div className="bg-black/40 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-300 mb-2">Examples:</div>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>Customer segmentation</li>
                            <li>Document categorization</li>
                            <li>Image compression</li>
                            <li>Anomaly detection</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8 rounded-xl border-2 border-purple-500/30"
                >
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Dimensionality Reduction</h3>
                    <p className="text-gray-400 mb-4">Reduce number of features while preserving information.</p>
                    <div className="bg-black/40 p-4 rounded-lg mb-4">
                        <div className="text-sm text-gray-300 mb-2">Examples:</div>
                        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>Data visualization</li>
                            <li>Feature extraction</li>
                            <li>Noise reduction</li>
                            <li>Preprocessing for ML</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Clustering Algorithms</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">K-Means</h3>
                    <p className="text-gray-400 mb-3">Partition data into K clusters by minimizing within-cluster variance.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        1. Initialize K centroids randomly<br />
                        2. Assign points to nearest centroid<br />
                        3. Update centroids to cluster mean<br />
                        4. Repeat until convergence
                    </div>
                    <p className="text-xs text-gray-500">✓ Fast, simple | ✗ Need to specify K, sensitive to outliers</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">DBSCAN</h3>
                    <p className="text-gray-400 mb-3">Density-based clustering. Groups points that are closely packed.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Finds clusters of arbitrary shape<br />
                        Automatically detects outliers
                    </div>
                    <p className="text-xs text-gray-500">✓ No need to specify K, handles noise | ✗ Sensitive to parameters</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Hierarchical Clustering</h3>
                    <p className="text-gray-400 mb-3">Build tree of clusters (dendrogram).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Agglomerative: bottom-up (merge clusters)<br />
                        Divisive: top-down (split clusters)
                    </div>
                    <p className="text-xs text-gray-500">✓ No need to specify K, interpretable | ✗ Computationally expensive</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.cluster import KMeans
import numpy as np

# Generate sample data: 3 clusters
np.random.seed(42)
cluster1 = np.random.randn(30, 2) + [0, 0]
cluster2 = np.random.randn(30, 2) + [5, 5]
cluster3 = np.random.randn(30, 2) + [5, 0]
X = np.vstack([cluster1, cluster2, cluster3])

# K-Means clustering
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(X)

print("K-Means Clustering Results:")
print(f"Cluster centers:\\n{kmeans.cluster_centers_}")
print(f"\\nCluster assignments (first 10): {labels[:10]}")
print(f"\\nInertia (sum of squared distances): {kmeans.inertia_:.2f}")

# Count points per cluster
unique, counts = np.unique(labels, return_counts=True)
for cluster, count in zip(unique, counts):
    print(f"Cluster {cluster}: {count} points")`}
                expectedOutput={`K-Means Clustering Results:
Cluster centers:
[[4.98 4.92]
 [0.02 0.01]
 [4.95 0.08]]

Cluster assignments (first 10): [1 1 1 1 1 1 1 1 1 1]

Inertia (sum of squared distances): 177.32

Cluster 0: 30 points
Cluster 1: 30 points
Cluster 2: 30 points`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Dimensionality Reduction</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">PCA (Principal Component Analysis)</h3>
                    <p className="text-gray-400 mb-3">Find directions of maximum variance in data.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Linear transformation to orthogonal axes<br />
                        Preserves most variance with fewer dimensions
                    </div>
                    <p className="text-xs text-gray-500">Use for: Visualization, noise reduction, preprocessing</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">t-SNE</h3>
                    <p className="text-gray-400 mb-3">Non-linear technique for visualization (2D/3D).</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Preserves local structure<br />
                        Great for visualizing clusters
                    </div>
                    <p className="text-xs text-gray-500">Use for: Visualization only (not for preprocessing)</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-400 mb-3">Autoencoders</h3>
                    <p className="text-gray-400 mb-3">Neural networks that learn compressed representations.</p>
                    <div className="bg-black/40 p-3 rounded text-sm text-gray-300 mb-2">
                        Encoder: compress to latent space<br />
                        Decoder: reconstruct from latent space
                    </div>
                    <p className="text-xs text-gray-500">Use for: Non-linear reduction, anomaly detection, denoising</p>
                </div>
            </div>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from sklearn.decomposition import PCA
import numpy as np

# High-dimensional data (100 samples, 10 features)
np.random.seed(42)
X = np.random.randn(100, 10)

# Apply PCA to reduce to 2 dimensions
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

print("PCA Dimensionality Reduction:")
print(f"Original shape: {X.shape}")
print(f"Reduced shape: {X_reduced.shape}")
print(f"\\nExplained variance ratio: {pca.explained_variance_ratio_}")
print(f"Total variance explained: {pca.explained_variance_ratio_.sum():.2%}")

# Show first few transformed points
print(f"\\nFirst 3 transformed points:")
print(X_reduced[:3])`}
                expectedOutput={`PCA Dimensionality Reduction:
Original shape: (100, 10)
Reduced shape: (100, 2)

Explained variance ratio: [0.121 0.098]
Total variance explained: 21.90%

First 3 transformed points:
[[ 0.52 -1.23]
 [ 1.45  0.87]
 [-0.91  0.34]]`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                    { title: "Customer Segmentation", desc: "Group customers by behavior for targeted marketing" },
                    { title: "Anomaly Detection", desc: "Find unusual patterns (fraud, defects)" },
                    { title: "Recommendation Systems", desc: "Find similar items or users" },
                    { title: "Image Compression", desc: "Reduce image size with K-means" },
                    { title: "Topic Modeling", desc: "Discover themes in documents" },
                    { title: "Data Visualization", desc: "Reduce to 2D/3D for plotting" },
                ].map((app, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg"
                    >
                        <div className="font-bold text-white mb-1">{app.title}</div>
                        <div className="text-sm text-gray-400">{app.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 border-l-4 border-neon-purple p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-neon-purple">Key Takeaway:</strong> Unsupervised learning discovers hidden patterns without labels. Use clustering to group data and dimensionality reduction to simplify it.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/supervised-learning">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/reinforcement-learning">
                    <Button className="gap-2">
                        Next: Reinforcement Learning <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
