"use client";

import { Button } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function MultiAgentPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Multi-Agent Systems</h1>

            <p className="text-gray-400 leading-relaxed mb-6">
                Multi-agent systems involve multiple AI agents working together, each with specialized roles and capabilities. They can collaborate, delegate, and solve complex problems that single agents struggle with.
            </p>

            <div className="bg-white/5 border-l-4 border-neon-purple p-4 mb-8 rounded-r-lg">
                <p className="text-gray-300 m-0">
                    <strong>Key Insight:</strong> Specialized agents working together often outperform a single generalist agent.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Agent Roles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">Researcher</h3>
                    <p className="text-sm text-gray-400">Gathers information from web, databases, documents. Expert at finding relevant data.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">Analyst</h3>
                    <p className="text-sm text-gray-400">Processes data, identifies patterns, draws insights from information.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">Writer</h3>
                    <p className="text-sm text-gray-400">Creates content, reports, summaries. Optimized for clear communication.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Critic</h3>
                    <p className="text-sm text-gray-400">Reviews outputs, provides feedback, ensures quality and accuracy.</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Collaboration Patterns</h2>

            <div className="space-y-4 mb-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-blue">
                    <h3 className="text-lg font-bold text-neon-blue mb-2">Sequential</h3>
                    <p className="text-sm text-gray-400 mb-2">Agents work in order: A → B → C. Each agent's output feeds the next.</p>
                    <p className="text-xs text-gray-500">Example: Research → Analyze → Write → Review</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-neon-purple">
                    <h3 className="text-lg font-bold text-neon-purple mb-2">Hierarchical</h3>
                    <p className="text-sm text-gray-400 mb-2">Manager agent delegates tasks to worker agents.</p>
                    <p className="text-xs text-gray-500">Example: CEO → Team Leads → Specialists</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-green-400">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Collaborative</h3>
                    <p className="text-sm text-gray-400 mb-2">Agents discuss and debate to reach consensus.</p>
                    <p className="text-xs text-gray-500">Example: Multiple experts voting on best solution</p>
                </div>

                <div className="glass-panel p-6 rounded-xl border-l-4 border-yellow-400">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Competitive</h3>
                    <p className="text-sm text-gray-400 mb-2">Agents compete, best output is selected.</p>
                    <p className="text-xs text-gray-500">Example: Multiple agents generate code, best one wins</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Communication</h2>
            <p className="text-gray-400 mb-6">
                Agents need to communicate effectively. Common approaches:
            </p>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 mb-8">
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><strong>Shared Memory:</strong> All agents access common context/database</li>
                    <li><strong>Message Passing:</strong> Agents send structured messages to each other</li>
                    <li><strong>Blackboard:</strong> Central knowledge base agents read/write to</li>
                    <li><strong>Direct Handoff:</strong> One agent explicitly passes control to another</li>
                </ul>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Frameworks</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">CrewAI</h3>
                    <p className="text-sm text-gray-400 mb-2">Role-based multi-agent orchestration. Define crews with specific roles.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        crew = Crew(agents=[researcher, writer])
                    </code>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">AutoGen</h3>
                    <p className="text-sm text-gray-400 mb-2">Microsoft's framework. Agents can be human or AI, with flexible conversation patterns.</p>
                    <code className="text-xs bg-black/40 px-2 py-1 rounded block mt-2">
                        chat = GroupChat(agents=[agent1, agent2])
                    </code>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Use Cases</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li><strong>Content Creation:</strong> Research + Write + Edit + Fact-check</li>
                <li><strong>Software Development:</strong> Architect + Coder + Tester + Reviewer</li>
                <li><strong>Customer Support:</strong> Classifier + Specialist + Escalation</li>
                <li><strong>Data Analysis:</strong> Collector + Cleaner + Analyst + Visualizer</li>
                <li><strong>Research:</strong> Multiple researchers covering different sources</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Challenges</h2>
            <div className="space-y-3 mb-8">
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">⚠️ <strong>Coordination Overhead:</strong> More agents = more complexity</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">⚠️ <strong>Cost:</strong> Multiple LLM calls can get expensive</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">⚠️ <strong>Latency:</strong> Sequential agents take longer</p>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                    <p className="text-sm text-gray-300">⚠️ <strong>Debugging:</strong> Harder to trace issues across agents</p>
                </div>
            </div>

            <div className="bg-white/5 border-l-4 border-neon-blue p-4 my-8 rounded-r-lg">
                <p className="text-gray-300 m-0 text-sm">
                    <strong>Best Practice:</strong> Start with a single agent. Add more only when specialization provides clear benefits.
                </p>
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/react-agents">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/training-tips">
                    <Button className="gap-2">
                        Back to Practical AI
                    </Button>
                </Link>
            </div>
        </div>
    );
}
