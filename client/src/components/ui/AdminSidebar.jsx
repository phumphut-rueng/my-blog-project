import { Bell, FileText, FolderOpen, Key, LogOut, User, Globe } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export function AdminSidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="w-72 bg-[#EFEEEB]/50 h-screen flex flex-col p-6 border-r border-zinc-200/50">
      {/* Brand Header */}
      <div className="mb-10 pl-2">
        <h1 className="text-3xl font-bold text-zinc-800">
          hh<span className="text-[#10b981]">.</span>
        </h1>
        <p className="text-orange-400 font-medium text-sm mt-0.5">Admin panel</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        {[
          { to: "/admin/articles", icon: FileText, label: "Article management" },
          { to: "/admin/category-management", icon: FolderOpen, label: "Category management" },
          { to: "/admin/profile", icon: User, label: "Profile" },
          { to: "/admin/notification", icon: Bell, label: "Notification" },
          { to: "/admin/reset-password", icon: Key, label: "Reset password" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive(item.to)
                ? "bg-[#DAD6D1] text-[#43403B] font-semibold shadow-sm"
                : "text-zinc-500 hover:bg-zinc-100/50 hover:text-zinc-800"
            }`}
          >
            <item.icon size={20} />
            <span className="text-[15px]">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Menu */}
      <div className="pt-6 border-t border-zinc-200 space-y-1">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-black">
          <Globe size={20} />
          <span className="text-[15px]">hh. website</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="text-[15px]">Log out</span>
        </button>
      </div>
    </aside>
  );
}