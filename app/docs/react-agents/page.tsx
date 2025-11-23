"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ReActAgentsPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">ReAct & Tool Use</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                ReAct (Reasoning + Acting) is a powerful paradigm where agents alternate between reasoning about what to do and taking actions. It combines chain-of-thought reasoning with tool use.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Paper:</strong> "ReAct: Synergizing Reasoning and Acting in Language Models" (2023)
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The ReAct Pattern</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                Thought: I need to find the current weather<br />
                Action: search("weather in San Francisco")<br />
                Observation: Sunny, 72°F<br />
                Thought: Now I can answer the question<br />
                Action: respond("It's sunny and 72°F")<br />
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Tool Calling</h2>
            <p className="text-gray-400 mb-6">
                Modern LLMs (GPT-4, Claude) have native function calling. The model outputs structured JSON to invoke tools.
            </p>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">1. Define Tools</h3>
                    <p className="text-sm text-gray-400">Describe available functions with parameters and types.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">2. LLM Decides</h3>
                    <p className="text-sm text-gray-400">Model chooses which tool to call and with what arguments.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">3. Execute Tool</h3>
                    <p className="text-sm text-gray-400">Your code runs the function and returns results.</p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">4. Continue Loop</h3>
                    <p className="text-sm text-gray-400">Feed results back to LLM, which can call more tools or respond.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Tool Definition Example</h3>
            <p className="text-gray-400 mb-4">
                How to define tools for function calling.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Tool definitions (OpenAI format)
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g. San Francisco"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"]
                    }
                },
                "required": ["location"]
            }
        }
    }
]

# Simulated tool execution
def execute_tool(tool_name, args):
    if tool_name == "get_weather":
        return f"Weather in {args['location']}: Sunny, 72°F"
    return "Unknown tool"

# Example
result = execute_tool("get_weather", {"location": "NYC"})
print(result)`}
                expectedOutput={`Weather in NYC: Sunny, 72°F`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Common Tools</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Search:</strong> Google, Bing, DuckDuckGo for web search</li>
                <li><strong>Calculator:</strong> Precise math calculations</li>
                <li><strong>Code Interpreter:</strong> Execute Python code</li>
                <li><strong>Database Query:</strong> SQL queries to fetch data</li>
                <li><strong>API Calls:</strong> REST APIs for external services</li>
                <li><strong>File Operations:</strong> Read/write files</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Best Practices</h3>
            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>✓ <strong>Clear Descriptions:</strong> Tool descriptions should be precise and unambiguous</li>
                    <li>✓ <strong>Error Handling:</strong> Return helpful error messages when tools fail</li>
                    <li>✓ <strong>Limit Iterations:</strong> Set max steps to prevent infinite loops</li>
                    <li>✓ <strong>Validate Inputs:</strong> Check tool arguments before execution</li>
                    <li>✓ <strong>Logging:</strong> Track which tools are called and why</li>
                </ul>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/ai-agents-intro">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/multi-agent">
                    <Button className="gap-2">
                        Next: Multi-Agent Systems <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
