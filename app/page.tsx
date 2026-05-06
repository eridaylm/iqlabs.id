import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, BookOpen, Target, Sparkles, ChevronRight, BarChart3, Users, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-blue-500/20 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">iQ</div>
            <span className="font-semibold text-xl tracking-tight text-white">iQLabs.id</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#programs" className="hover:text-white transition-colors">Programs</Link>
            <Link href="#features" className="hover:text-white transition-colors">Platform</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Success Stories</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-white text-black hover:bg-slate-200">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
          
          <Badge variant="outline" className="mb-6 border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-blue-400">
            <Sparkles className="w-3 h-3 mr-2 inline-flex" />
            OMNILEARN ACADEMY
          </Badge>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl text-white">
            Engineer Your Future Intellect.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light">
            The most advanced STEM education, Kedinasan preparation, and cognitive enhancement platform. Built for the elite minds of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-black hover:bg-slate-200 rounded-full px-8 h-12 text-sm font-semibold tracking-wide">
                Start Learning
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-sm border-white/20 hover:bg-white/5 text-white">
                View Admin Demo
              </Button>
            </Link>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Mastery in Every Field</h2>
            <p className="text-slate-400 max-w-xl">Curated curriculums designed by industry experts to guarantee your success in every cognitive endeavor.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "STEM Excellence",
                desc: "Advanced physics, quantum computing, and mathematics. The foundation of modern technology.",
                color: "text-blue-500"
              },
              {
                icon: Target,
                title: "Kedinasan Prep",
                desc: "Rigorous SKD, TWK, and TIU modules to secure your spot at STAN, IPDN, and more.",
                color: "text-blue-500"
              },
              {
                icon: BrainCircuit,
                title: "IQ Development",
                desc: "Scientific cognitive training to improve memory, spatial reasoning, and logic.",
                color: "text-blue-500"
              }
            ].map((prog, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden text-[#e0e0e0]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <prog.icon className={`w-8 h-8 ${prog.color} mb-6`} />
                <h3 className="font-display text-xl font-semibold mb-3 text-white">{prog.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white/5 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Active Students", value: "24,000+" },
              { label: "Success Rate", value: "94%" },
              { label: "Average IQ Boost", value: "+15 PTS" },
              { label: "Video Modules", value: "1,200" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-display text-4xl md:text-5xl font-light tracking-tight mb-2 text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
