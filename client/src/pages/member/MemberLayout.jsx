import { Link, useLocation } from "react-router-dom";
import { User, Lock } from "lucide-react";

export default function MemberLayout({ children }) {
  const location = useLocation();

  const menuItems = [
    { name: "Profile", path: "/member/profile", icon: <User size={20} /> },
    {
      name: "Reset password",
      path: "/member/reset-password",
      icon: <Lock size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-2">
          <div className="flex items-center gap-3 mb-8 ml-2">
            <img
              src="/avatar-moodeng.png"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold text-lg text-zinc-700">Moodeng ja</span>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === item.path
                    ? "text-black font-bold"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 space-y-6">
          {/* 🔑 ส่วนที่ย้ายมาอยู่นอกกรอบสีเทา */}
          <h1 className="text-2xl font-bold text-[#26231E] ml-2">
            {location.pathname === "/member/profile"
              ? "Profile"
              : "Reset password"}
          </h1>

          {/* กรอบสีเทาเดิม */}
          <div className="bg-[#EFEEEB] rounded-[32px] max-w-2xl p-6 md:p-10 shadow-sm h-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
