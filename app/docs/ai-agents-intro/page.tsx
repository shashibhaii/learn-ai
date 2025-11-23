"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AIAgentsIntroPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">What are AI Agents?</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                AI Agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve goals. Unlike simple chatbots, agents can use tools, plan multi-step workflows, and adapt to changing situations.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Key Difference:</strong> Chatbot responds to prompts. Agent pursues goals autonomously using available tools.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Agent Components</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Brain (LLM)</h3>
                    <p className="text-sm text-gray-400">The reasoning engine. Decides what to do next based on observations and goals.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Tools</h3>
                    <p className="text-sm text-gray-400">Functions the agent can call: search, calculator, API calls, code execution, etc.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Memory</h3>
                    <p className="text-sm text-gray-400">Short-term (conversation) and long-term (vector DB) memory for context.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Planning</h3>
                    <p className="text-sm text-gray-400">Ability to break down complex tasks into sub-tasks and execute them.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Agent Loop</h2>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8 font-mono text-sm text-gray-300">
                1. Observe: Get current state/user input<br />
                2. Think: Reason about what to do (LLM)<br />
                3. Act: Use a tool or respond<br />
                4. Observe: See result of action<br />
                5. Repeat until goal achieved
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Simple Agent Example</h3>
            <p className="text-gray-400 mb-4">
                Conceptual agent that can use a calculator tool.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`# Simplified Agent
class SimpleAgent:
    def __init__(self, tools):
        self.tools = tools
    
    def think(self, query):
        # In reality: LLM decides which tool to use
        if "calculate" in query.lower():
            return "calculator"
        return "respond"
    
    def act(self, tool_name, query):
        if tool_name == "calculator":
            # Extract numbers (simplified)
            nums = [int(s) for s in query.split() if s.isdigit()]
            if len(nums) == 2:
                return f"Result: {nums[0] + nums[1]}"
        return "I don't know how to help with that."

# Example usage
agent = SimpleAgent(tools=["calculator", "search"])

query = "Calculate 15 plus 27"
tool = agent.think(query)
result = agent.act(tool, query)

print(f"Query: {query}")
print(f"Tool used: {tool}")
print(result)`}
                expectedOutput={`Query: Calculate 15 plus 27
Tool used: calculator
Result: 42`}
            />

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Types of Agents</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>ReAct Agents:</strong> Reason and Act in interleaved steps</li>
                <li><strong>Plan-and-Execute:</strong> Plan entire workflow upfront, then execute</li>
                <li><strong>Reflexion Agents:</strong> Self-reflect on failures and improve</li>
                <li><strong>Multi-Agent Systems:</strong> Multiple specialized agents collaborate</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Popular Frameworks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">LangChain</h4>
                    <p className="text-xs text-gray-400">Most popular. Rich ecosystem of tools and integrations.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">AutoGPT</h4>
                    <p className="text-xs text-gray-400">Autonomous agent that can work towards goals independently.</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <h4 className="font-bold text-white mb-2">CrewAI</h4>
                    <p className="text-xs text-gray-400">Multi-agent orchestration with role-based collaboration.</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/advanced-rag">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/react-agents">
                    <Button className="gap-2">
                        Next: ReAct & Tool Use <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
