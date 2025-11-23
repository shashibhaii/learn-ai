"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PandasPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Pandas DataFrames</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Pandas is a powerful library for data manipulation and analysis. The <strong>DataFrame</strong> is its primary data structure, similar to an Excel sheet or SQL table.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Creating a DataFrame</h2>
            <InteractiveCodeBlock
                language="python"
                initialCode={`import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Paris', 'London']
}

df = pd.DataFrame(data)

print("Full DataFrame:")
print(df)

print("\nJust the Ages:")
print(df['Age'].tolist())`}
                expectedOutput={`Full DataFrame:
      Name  Age      City
0    Alice   25  New York
1      Bob   30     Paris
2  Charlie   35    London

Just the Ages:
[25, 30, 35]`}
            />

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Filtering Data</h2>
            <p className="text-gray-400 mb-4">
                You can easily filter rows based on conditions.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Score': [85, 92, 78, 95]
}
df = pd.DataFrame(data)

# Filter students with score > 90
top_students = df[df['Score'] > 90]

print("Top Students:")
print(top_students)`}
                expectedOutput={`Top Students:
    Name  Score
1    Bob     92
3  David     95`}
            />

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/numpy-arrays">
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
