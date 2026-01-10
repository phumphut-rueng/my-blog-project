import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function CreateCategoryPage() {
  const navigate = useNavigate();

  const handleSave = () => {
    // Logic การบันทึกข้อมูล
    toast.success("Category created successfully");
    navigate("/admin/category-management");
  };

  return (
    <div className="space-y-8">
      {/* 1. Header - ปรับให้มีปุ่ม Save สีดำด้านขวา */}
      <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft size={24} className="text-zinc-600" />
          </button>
          <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
            Create category
          </h2>
        </div>
        
        <button 
          onClick={handleSave}
          className="bg-[#26231E] text-white px-12 py-2.5 rounded-full font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200 cursor-pointer"
        >
          Save
        </button>
      </div>

      {/* 2. Form Section */}
      <div className="max-w-md mt-10 space-y-3">
        <label className="block text-[17px] font-bold text-[#75716B] ml-1">
          Category name
        </label>
        <Input 
          placeholder="Category name" 
          className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
        />
      </div>
    </div>
  );
}