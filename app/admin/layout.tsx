import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import Link from "next/link"
import { LayoutDashboard, Users, BookOpen, CreditCard, Settings, LogOut, Bell, Search } from "lucide-react"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  if (!session) redirect('/login')
  if ((session.user as any).role !== 'ADMIN') redirect('/dashboard')

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#080808] flex flex-col hidden md:flex shrink-0">
        <div className="p-6 h-16 flex items-center mb-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white mr-2 text-sm">iQ</div>
          <span className="font-semibold text-xl tracking-tight text-white">iQLabs.id</span>
        </div>

        <div className="flex-1 py-6 px-4 space-y-1">
          <div className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-4 px-2">Main Menu</div>
          {[
            { tag: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
            { tag: 'Users', icon: Users, href: '/admin/users' },
            { tag: 'Courses', icon: BookOpen, href: '/admin/courses' },
            { tag: 'Revenue', icon: CreditCard, href: '/admin/revenue' },
          ].map((item) => (
            <Link key={item.tag} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-sm font-medium">
              <item.icon className="w-5 h-5 opacity-80" />
              {item.tag}
            </Link>
          ))}

          <div className="text-xs uppercase tracking-widest text-slate-500 font-medium mt-8 mb-4 px-2">System</div>
          {[
            { tag: 'Settings', icon: Settings, href: '/admin/settings' },
            { tag: 'Log Out', icon: LogOut, href: '/api/auth/signout' },
          ].map((item) => (
            <Link key={item.tag} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-sm font-medium">
              <item.icon className="w-5 h-5 opacity-80" />
              {item.tag}
            </Link>
          ))}
        </div>

        <div className="p-6 mt-auto">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-xs text-blue-400 font-bold mb-1">AI ASSISTANT</p>
            <p className="text-[11px] text-blue-200 leading-relaxed">Platform conversion is up 12.4% this week. Focus on Kedinasan prep modules.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0a] z-10 sticky top-0">
          <div className="flex items-center bg-white/5 px-3 py-1.5 border border-white/10 rounded-full h-9 w-[300px]">
            <Search className="w-4 h-4 text-slate-500 mr-2" />
            <input
              type="text"
              placeholder="Search commands... (⌘K)"
              className="bg-transparent border-none outline-none text-xs text-slate-400 placeholder:text-slate-500 w-full"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full border border-[#0a0a0a]"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-medium text-white">{session.user?.name ?? 'Admin'}</p>
                <p className="text-[10px] text-slate-500">Super Admin</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 border border-white/10"></div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}