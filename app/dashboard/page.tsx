import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlayCircle, Award, Target, CheckCircle2, Clock, BrainCircuit } from "lucide-react";
import Link from 'next/link';

export default function UserDashboard() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 font-sans">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white">Welcome back, Student.</h1>
          <p className="text-white/50 mt-2 text-lg">Continue your intellectual journey. You&apos;re 15% closer to your target score.</p>
        </div>
        <Button className="rounded-full bg-white text-black hover:bg-white/90">
          Resume Last Lesson <PlayCircle className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Enrolled Courses */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6 flex items-center text-white">
          <Award className="w-6 h-6 mr-3 text-blue-500" /> Active Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col">
            <div className="h-32 bg-gradient-to-br from-blue-900/40 to-[#050505] relative">
               <div className="absolute top-4 left-4 border border-blue-500/30 bg-blue-500/20 backdrop-blur-sm text-xs font-semibold text-blue-300 px-3 py-1 rounded-full">
                  STEM
               </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col text-[#e0e0e0]">
              <h3 className="font-display text-xl font-semibold mb-2 text-white">Mastering Advanced Physics</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">Quantum mechanics, relativity, and advanced thermodynamics.</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-blue-400">45% Completed</span>
                  <span className="text-slate-500">12/28 Modules</span>
                </div>
                <Progress value={45} className="h-2 bg-white/10" indicatorClassName="bg-blue-600" />
              </div>
              
              <Link href="/courses/physics-101">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-none">
                  Continue Learning
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col">
            <div className="h-32 bg-gradient-to-br from-blue-900/40 to-[#050505] relative">
               <div className="absolute top-4 left-4 border border-blue-500/30 bg-blue-500/20 backdrop-blur-sm text-xs font-semibold text-blue-300 px-3 py-1 rounded-full">
                  KEDINASAN
               </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col text-[#e0e0e0]">
              <h3 className="font-display text-xl font-semibold mb-2 text-white">Persiapan STAN & IPDN 2024</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">Comprehensive SKD, TWK, TIU, and TKP mastery.</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-blue-400">80% Completed</span>
                  <span className="text-slate-500">32/40 Modules</span>
                </div>
                <Progress value={80} className="h-2 bg-white/10" indicatorClassName="bg-blue-600" />
              </div>
              
              <Link href="/courses/kedinasan-2024">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-none">
                  Continue Learning
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* IQ Tracker Snapshot */}
      <div>
         <h2 className="font-display text-2xl font-bold mb-6 flex items-center text-white">
          <BrainCircuit className="w-6 h-6 mr-3 text-blue-500" /> Cognitive Profile
        </h2>
        <Card className="bg-white/5 border-white/10 rounded-2xl">
          <CardContent className="p-8 grid md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10 text-[#e0e0e0]">
            <div className="text-center">
              <div className="text-6xl font-display font-light text-blue-500 mb-2">125</div>
              <div className="text-sm uppercase tracking-widest text-slate-500 font-medium">Current IQ Estimate</div>
            </div>
            <div className="md:px-8 space-y-4">
               <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Logical Reasoning</span>
                    <span className="text-blue-400 font-mono">92nd Percentile</span>
                  </div>
                  <Progress value={92} className="h-1.5 bg-white/10" indicatorClassName="bg-blue-600" />
               </div>
               <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Spatial Recognition</span>
                    <span className="text-blue-400 font-mono">88th Percentile</span>
                  </div>
                  <Progress value={88} className="h-1.5 bg-white/10" indicatorClassName="bg-blue-600" />
               </div>
               <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Memory Retention</span>
                    <span className="text-blue-400 font-mono">75th Percentile</span>
                  </div>
                  <Progress value={75} className="h-1.5 bg-white/10" indicatorClassName="bg-blue-600" />
               </div>
            </div>
            <div className="md:px-8 flex flex-col items-center text-center">
              <Target className="w-10 h-10 text-white/20 mb-4" />
              <div className="text-sm text-slate-400">Take the spatial reasoning diagnostic test to unlock your next milestone.</div>
              <Button variant="outline" className="mt-4 border-white/20 rounded-full hover:bg-white/5 text-white">Take Diagnostic</Button>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
