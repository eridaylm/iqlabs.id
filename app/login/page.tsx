"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      // Role-based redirect handled server-side via session
      // Fetch session to determine redirect
      const sessionRes = await fetch('/api/auth/session');
      const session = await sessionRes.json();
      if (session?.user?.role === 'ADMIN') {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } else {
      setIsLoading(false);
      setError("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl animate-in slide-in-from-bottom-8 duration-700">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">iQ</div>
            <span className="font-semibold text-2xl tracking-tight text-white">iQLabs.id</span>
          </Link>
          <h1 className="font-display text-2xl font-semibold text-white">Welcome Back</h1>
          <p className="text-slate-400 text-sm mt-2 text-center">Log in to continue your intellectual journey.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email Address</label>
            <Input
              type="email"
              required
              placeholder="your@email.com"
              className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 h-12 rounded-xl focus-visible:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Password</label>
            <Input
              type="password"
              required
              minLength={8}
              placeholder="••••••••"
              className="bg-black/50 border-white/10 text-white placeholder:text-slate-600 h-12 rounded-xl focus-visible:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center">{error}</p>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-white text-black hover:bg-slate-200 rounded-xl font-medium mt-4"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}