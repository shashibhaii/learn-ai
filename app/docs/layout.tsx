import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-deep-black text-white selection:bg-neon-blue/30">
            <Navbar />
            <Sidebar />
            <div className="flex pt-16 ml-0 md:ml-20 lg:ml-60 transition-all duration-300">
                <DocsSidebar />
                <main className="flex-1 min-w-0">
                    <div className="container max-w-4xl mx-auto px-6 py-12">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
