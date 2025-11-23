"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NumpyPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">NumPy Arrays</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                NumPy (Numerical Python) is the fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Why NumPy?</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Speed:</strong> NumPy operations are much faster than standard Python lists.</li>
                <li><strong>Vectorization:</strong> Apply operations to entire arrays without loops.</li>
                <li><strong>Math:</strong> Built-in linear algebra functions.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Creating Arrays</h3>
            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

# 1D Array (Vector)
vector = np.array([1, 2, 3])

# 2D Array (Matrix)
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(f"Vector shape: {vector.shape}")
print(f"Matrix shape: {matrix.shape}")
print(f"Matrix element [1,2]: {matrix[1, 2]}")`}
                expectedOutput={`Vector shape: (3,)
Matrix shape: (2, 3)
Matrix element [1,2]: 6`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Array Operations</h3>
            <p className="text-gray-400 mb-4">
                Notice how we can multiply arrays directly without writing a loop. This is called <strong>broadcasting</strong>.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import numpy as np

a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

# Element-wise addition
add = a + b

# Element-wise multiplication
mult = a * b

# Dot product
dot = np.dot(a, b)

print(f"Addition: {add}")
print(f"Multiplication: {mult}")
print(f"Dot Product: {dot}")`}
                expectedOutput={`Addition: [11 22 33]
Multiplication: [10 40 90]
Dot Product: 140`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/python-syntax">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/pandas-dataframes">
                    <Button className="gap-2">
                        Next: Pandas DataFrames <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
