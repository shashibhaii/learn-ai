import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-deep-black py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">AI<span className="text-neon-blue">Portal</span></h3>
                        <p className="text-gray-400 text-sm">
                            Empowering the next generation of AI engineers with interactive learning experiences.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/courses" className="hover:text-neon-blue transition-colors">Courses</Link></li>
                            <li><Link href="/playground" className="hover:text-neon-blue transition-colors">Playground</Link></li>
                            <li><Link href="/community" className="hover:text-neon-blue transition-colors">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-neon-blue transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-neon-blue transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-neon-blue transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/privacy" className="hover:text-neon-blue transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-neon-blue transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} AI Portal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
