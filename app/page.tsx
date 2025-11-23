import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black text-white selection:bg-neon-blue/30">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Footer />
    </main>
  );
}
