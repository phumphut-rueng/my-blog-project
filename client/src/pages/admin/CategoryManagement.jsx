import { Search, Edit3, Trash2, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function CategoryManagement() {
  const categories = [
    { id: 1, name: "Cat" },
    { id: 2, name: "General" },
    { id: 3, name: "Inspiration" },
  ];

  const handleDelete = (id) => {
    toast.success("Category deleted successfully");
  };

  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      {/* 1. Header - ใช้เส้นขีดคั่นและปุ่มสีดำสไตล์เดียวกัน */}
      <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
        <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
          Category management
        </h2>
        <button
          onClick={() => navigate("/admin/category-management/create")}
          className="bg-[#26231E] text-white px-12 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200"
        >
          <Plus size={18} />
          <span className="text-[16px]">Create category</span>
        </button>
      </div>

      {/* 2. Filter Bar - ช่องค้นหาขนาดเท่าหน้า Article */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="relative w-full max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />
          <Input
            placeholder="Search category..."
            className="pl-10 h-11 bg-white border-zinc-200 rounded-lg focus-visible:ring-[#75716B] shadow-sm"
          />
        </div>
      </div>

      {/* 3. ตารางหมวดหมู่พร้อมแถวสลับสี (Zebra Stripes) */}
      <div className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#F9F8F6] border-b border-zinc-200/60 text-[#75716B] text-sm">
            <tr>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-[16px] text-[#75716B]">
                Category
              </th>
              <th className="px-6 py-4 w-24"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {categories.map((item) => (
              <tr
                key={item.id}
                className="group transition-colors border-none odd:bg-white even:bg-[#F9F8F6]"
              >
                {/* Category Name */}
                <td className="px-6 py-5 text-zinc-700 font-medium">
                  {item.name}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer">
                      <Edit3 size={18} />
                    </button>

                    {/* ใช้ ConfirmDialog ส่วนกลางที่เราสร้างไว้ */}
                    <ConfirmDialog
                      title="Delete category"
                      description={`Do you want to delete "${item.name}" category?`}
                      confirmText="Delete"
                      onConfirm={() => handleDelete(item.id)}
                    >
                      <button className="p-2 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer">
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
