import { Search, ChevronDown, Edit3, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
export default function ArticleManagement() {
  const articles = [
    {
      id: 1,
      title:
        "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They D...",
      category: "Cat",
      status: "Published",
    },
    {
      id: 2,
      title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
      category: "Cat",
      status: "Published",
    },
    {
      id: 3,
      title:
        "Finding Motivation: How to Stay Inspired Through Life's Challenges",
      category: "General",
      status: "Published",
    },
    {
      id: 4,
      title:
        "The Science of the Cat's Purr: How It Benefits Cats and Humans Alike",
      category: "Cat",
      status: "Published",
    },
    {
      id: 5,
      title: "Top 10 Health Tips to Keep Your Cat Happy and Healthy",
      category: "Cat",
      status: "Published",
    },
    {
      id: 6,
      title: "Unlocking Creativity: Simple Habits to Spark Inspiration Daily",
      category: "Inspiration",
      status: "Published",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* 1. Header - ปรับให้มีเส้นขีดคั่นและระยะห่างที่เป๊ะขึ้น */}
      <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
        <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
          Article management
        </h2>
        <button
          onClick={() => navigate("/admin/articles/create")}
          className="bg-[#26231E] text-white px-12 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200"
        >
          <span className="text-[18px]">+</span>
          <span className="text-[16px]">Create article</span>
        </button>
      </div>

      {/* 2. Filter Bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="relative w-full max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />
          <Input
            placeholder="Search..."
            className="pl-10 h-11 bg-white border-zinc-200 rounded-lg focus-visible:ring-[#75716B] shadow-sm"
          />
        </div>

        <div className="flex gap-3">
          {/* Status Dropdown */}
          <div className="flex items-center justify-between w-50 bg-white pl-4 pr-3 py-2.5 rounded-lg border border-zinc-200 text-zinc-600 cursor-pointer hover:bg-zinc-50 shadow-sm transition-all">
            <span className="text-[16px] font-medium">Status</span>
            <ChevronDown size={16} className="text-zinc-400" />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center justify-between w-50 bg-white pl-4 pr-3 py-2.5 rounded-lg border border-zinc-200 text-zinc-600 cursor-pointer hover:bg-zinc-50 shadow-sm transition-all">
            <span className="text-[16px] font-medium">Category</span>
            <ChevronDown size={16} className="text-zinc-400" />
          </div>
        </div>
      </div>

      {/* 3. ตารางบทความพร้อมแถวสลับสี (Zebra Stripes) */}
      <div className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#F9F8F6] border-b border-zinc-200/60 text-[#75716B] text-sm">
            <tr>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[16px] text-[#75716B]">
                Article title
              </th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[16px] text-[#75716B] text-center">
                Category
              </th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[16px] text-[#75716B] text-center">
                Status
              </th>
              <th className="px-6 py-4 w-24"></th>
            </tr>
          </thead>
          {/* 🔑 ลบ divide-y ออกเพื่อให้การสลับสีดูคลีนแบบรูปภาพ */}
          <tbody className="bg-white">
            {articles.map((item, index) => (
              <tr
                key={item.id}
                className="group transition-colors border-none odd:bg-white even:bg-[#F9F8F6]"
              >
                {/* Article Title */}
                <td className="px-6 py-5 text-zinc-700 font-medium max-w-md truncate">
                  {item.title}
                </td>

                {/* Category */}
                <td className="px-6 py-5 text-zinc-500 text-center">
                  {item.category}
                </td>

                {/* Status */}
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-[#10b981] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    {item.status}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-3 opacity-10 group-hover:opacity-100 transition-all duration-200">
                    <button className="p-2 text-zinc-400 hover:text-zinc-900">
                      <Edit3 size={18} />
                    </button>
                    <ConfirmDialog
                      title="Delete article"
                      description="Do you want to delete this article?"
                      confirmText="Delete"
                      onConfirm={() => handleDelete(item.id)}
                    >
                      <button className="p-2 text-zinc-400 hover:text-red-500 transition-colors cursor-pointer">
                        <Trash2 size={18} />
                      </button>
                    </ConfirmDialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
