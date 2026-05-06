import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import Link from "next/link"
import { Trophy } from "lucide-react"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (!session) redirect('/login')

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col font-sans">
      {/* Top Navbar */}
      <nav className="h-16 border-b border-white/5 bg-[#0a0a0a] flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">iQ</div>
            <span className="font-semibold text-xl tracking-tight text-white hidden md:inline">iQLabs.id</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link href="/dashboard" className="text-white">My Learning</Link>
            <Link href="/courses" className="text-slate-400 hover:text-white transition-colors">Catalog</Link>
            <Link href="/dashboard/iq" className="text-slate-400 hover:text-white transition-colors">IQ Tracker</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-blue-600/10 border border-blue-500/20 rounded-full px-3 py-1">
            <Trophy className="w-3 h-3 text-blue-400 mr-2" />
            <span className="text-xs font-medium text-blue-300">IQ Score: 125</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 hidden sm:inline">{session.user?.name}</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 border border-white/10"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        {children}
      </main>
    </div>
  )
}