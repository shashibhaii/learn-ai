const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Check for API key
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error('❌ Error: GEMINI_API_KEY environment variable is not set.');
    console.error('Please set it using: set GEMINI_API_KEY=your_key_here (Windows) or export GEMINI_API_KEY=your_key_here (Mac/Linux)');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

const DOCS_DIR = path.join(__dirname, '../app/docs');

// System prompt to guide the content generation
const SYSTEM_PROMPT = `
You are an expert AI educator and frontend developer specializing in Next.js, Tailwind CSS, and Framer Motion.
Your task is to rewrite documentation pages for an "AI Learning Portal" to make them comprehensive, engaging, and visually stunning.

**Design Philosophy:**
- **Theme:** Dark Futuristic / Cyberpunk (Neon blues, purples, dark backgrounds).
- **UI Components:** Use glassmorphism, gradients, and smooth animations.
- **Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Lucide React.

**Content Requirements:**
1.  **Comprehensive:** Cover the topic in depth. Explain "What", "Why", "How", and "Key Concepts".
2.  **Examples:** Provide clear, practical examples (Python code for AI/ML concepts).
3.  **Interactive:** Use the \`InteractiveCodeBlock\` component for code snippets where appropriate.
4.  **Visuals:** Use icons (Lucide React) and styled divs to create visual aids (e.g., diagrams represented by CSS/HTML structure).
5.  **Structure:**
    -   Title (H1) with animation.
    -   Introduction (engaging hook).
    -   Key Concepts (Cards/Grid layout).
    -   Deep Dive (Detailed explanation).
    -   Code Example (InteractiveCodeBlock).
    -   Real-world Applications.
    -   Summary/Key Takeaways.

**Component Structure:**
-   Keep it as a default export function.
-   Use \`"use client";\` at the top.
-   Import necessary components:
    -   \`import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";\`
    -   \`import { Button } from "@/components/ui/Button";\`
    -   \`import { motion } from "framer-motion";\`
    -   \`import { ChevronRight, ChevronLeft, ... } from "lucide-react";\` (Import relevant icons).
    -   \`import Link from "next/link";\`

**Output Format:**
Return ONLY the raw code for the \`page.tsx\` file. Do not include markdown code fences (\`\`\`tsx). Just the code.
`;

async function processFile(filePath) {
    const dirName = path.basename(path.dirname(filePath));
    const topic = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    console.log(`\n🚀 Processing: ${topic} (${filePath})...`);

    try {
        const currentContent = fs.readFileSync(filePath, 'utf8');

        const prompt = `
    Rewrite the following Next.js page content for the topic "${topic}".
    Make it more comprehensive, add better examples, and improve the UI to match the Cyberpunk aesthetic.
    
    Current Content (for reference):
    ${currentContent}
    
    ${SYSTEM_PROMPT}
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let newContent = response.text();

        // Clean up markdown fences if present
        newContent = newContent.replace(/^```tsx\n/, '').replace(/^```typescript\n/, '').replace(/^```\n/, '').replace(/\n```$/, '');

        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Successfully updated: ${topic}`);
    } catch (error) {
        console.error(`❌ Failed to process ${topic}:`, error.message);
    }
}

async function main() {
    // Get all page.tsx files
    const files = [];

    function scanDir(dir) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                scanDir(fullPath);
            } else if (item === 'page.tsx') {
                files.push(fullPath);
            }
        }
    }

    scanDir(DOCS_DIR);

    console.log(`Found ${files.length} documentation pages.`);

    // Ask user which file to process (or all)
    // For simplicity in this script, we'll process a specific file passed as an argument, or the first one for testing.
    // Usage: node scripts/enhance-docs.js [relative_path_to_file]

    const targetFile = process.argv[2];

    if (targetFile) {
        const fullPath = path.resolve(targetFile);
        if (fs.existsSync(fullPath)) {
            await processFile(fullPath);
        } else {
            console.error("File not found:", fullPath);
        }
    } else {
        console.log("No file specified. Usage: node scripts/enhance-docs.js app/docs/topic/page.tsx");
        console.log("Processing all files is disabled for safety. Please specify a file.");
    }
}

main();
