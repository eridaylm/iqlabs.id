"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Users, BookOpen, Target, Sparkles, TrendingUp, Cpu } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 7500 },
  { name: 'Jul', value: 8500 },
];

const growthData = [
  { name: 'Mon', stem: 20, kedinasan: 40, iq: 10 },
  { name: 'Tue', stem: 25, kedinasan: 45, iq: 15 },
  { name: 'Wed', stem: 30, kedinasan: 50, iq: 20 },
  { name: 'Thu', stem: 28, kedinasan: 55, iq: 25 },
  { name: 'Fri', stem: 35, kedinasan: 60, iq: 30 },
  { name: 'Sat', stem: 40, kedinasan: 70, iq: 45 },
  { name: 'Sun', stem: 45, kedinasan: 80, iq: 60 },
];

export default function AdminDashboard() {
  return (
    <div className="animate-in fade-in duration-500 font-sans">
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Total Students</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">12,402</span>
            <span className="text-[10px] text-green-400">+14.2%</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Active Modules</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">1,284</span>
            <span className="text-[10px] text-blue-400">Steady</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Monthly Revenue</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">$48,910</span>
            <span className="text-[10px] text-green-400">+5.8%</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Avg IQ Improvement</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">12.4 pts</span>
            <span className="text-[10px] text-blue-400">High</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-white">Platform Engagement Matrix</h3>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-white/10 rounded text-slate-300">Last 30 Days</span>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'rgba(5,5,5,0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
          <h3 className="text-sm font-semibold text-white mb-4">IQ Leaderboard</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500/20 text-amber-500 flex items-center justify-center rounded-full text-xs font-bold">1</div>
                <span className="text-xs text-slate-300">Zaky Al-Fath</span>
              </div>
              <span className="text-xs font-mono text-blue-400">142 pts</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-400/20 text-slate-400 flex items-center justify-center rounded-full text-xs font-bold">2</div>
                <span className="text-xs text-slate-300">Budi Santoso</span>
              </div>
              <span className="text-xs font-mono text-blue-400">139 pts</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-700/20 text-orange-700 flex items-center justify-center rounded-full text-xs font-bold">3</div>
                <span className="text-xs text-slate-300">Siti Aminah</span>
              </div>
              <span className="text-xs font-mono text-blue-400">138 pts</span>
            </div>
            <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Your Standing</span>
                <span className="text-[10px] text-blue-500 font-bold">TOP 0.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="px-6 py-3 text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Instructor</th>
              <th className="px-6 py-3 text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Enrollments</th>
              <th className="px-6 py-3 text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Rating</th>
              <th className="px-6 py-3 text-[10px] uppercase text-slate-500 font-semibold tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-6 py-3 text-white font-medium">Quantum Physics for STEM</td>
              <td className="px-6 py-3 text-slate-400">Dr. Raditya</td>
              <td className="px-6 py-3 text-slate-300">2,410</td>
              <td className="px-6 py-3 text-amber-400 font-medium">4.9/5</td>
              <td className="px-6 py-3"><span className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-[10px] font-medium">Live</span></td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="px-6 py-3 text-white font-medium">Kedinasan 2024: Master SKD</td>
              <td className="px-6 py-3 text-slate-400">Ir. Bambang</td>
              <td className="px-6 py-3 text-slate-300">8,124</td>
              <td className="px-6 py-3 text-amber-400 font-medium">4.8/5</td>
              <td className="px-6 py-3"><span className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-[10px] font-medium">Live</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
