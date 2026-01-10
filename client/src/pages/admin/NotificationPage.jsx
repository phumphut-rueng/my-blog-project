import { useNavigate } from "react-router-dom";

export default function NotificationPage() {
  const navigate = useNavigate();

  // ข้อมูลจำลองสำหรับการแจ้งเตือน
  const notifications = [
    {
      id: 1,
      user: "Jacob Lash",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      action: "Commented on your article:",
      target: "The Fascinating World of Cats: Why We Love Our Furry Friends",
      content: "“I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.”",
      time: "4 hours ago",
    },
    {
      id: 2,
      user: "Jacob Lash",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      action: "liked your article:",
      target: "The Fascinating World of Cats: Why We Love Our Furry Friends",
      content: null,
      time: "4 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header - ใช้สไตล์เดียวกับหน้าอื่นๆ */}
      <div className="pb-6 border-b border-zinc-200">
        <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
          Notification
        </h2>
      </div>

      {/* 2. Notification List */}
      <div className="max-w-5xl">
        {notifications.map((item) => (
          <div 
            key={item.id} 
            className="flex items-start gap-4 py-8 border-b border-zinc-200 last:border-0"
          >
            {/* User Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={item.avatar} 
                alt={item.user} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Content Area */}
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-start">
                <p className="text-zinc-800 text-[16px]">
                  <span className="font-bold">{item.user}</span>{" "}
                  <span className="text-[#75716B]">{item.action}</span>{" "}
                  <span className="font-medium text-[#75716B]">{item.target}</span>
                </p>
                {/* View Link */}
                <button 
                  onClick={() => navigate(`/admin/articles/view/${item.id}`)}
                  className="text-zinc-800 font-bold underline text-sm hover:text-black transition-colors cursor-pointer"
                >
                  View
                </button>
              </div>

              {/* Comment Content (ถ้ามี) */}
              {item.content && (
                <p className="text-zinc-600 font-medium italic py-1">
                  {item.content}
                </p>
              )}

              {/* Time Ago */}
              <p className="text-[#F2B68C] text-sm font-medium">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}