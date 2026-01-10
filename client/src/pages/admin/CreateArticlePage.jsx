import { ArrowLeft, Image as ImageIcon, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateArticlePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 pb-20">
      {/* 1. Header - ใช้สไตล์เดียวกับ Article management */}
      <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-zinc-600" />
          </button>
          <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
            Create article
          </h2>
        </div>
        <div className="flex gap-3">
          {/* ปุ่มสไตล์เดียวกับหน้าแรกแต่คนละสี */}
          <button className="px-10 py-3 rounded-full border border-zinc-300 text-zinc-700 font-semibold hover:bg-zinc-50 transition-all active:scale-95 shadow-sm cursor-pointer">
            Save as draft
          </button>
          <button className="bg-[#26231E] text-white px-10 py-3 rounded-full font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200 cursor-pointer">
            Save and publish
          </button>
        </div>
      </div>

      <div className="max-w-5xl space-y-10">
        {/* 2. Thumbnail Upload */}
        <div className="space-y-4">
          <label className="block text-[17px] font-bold text-[#75716B] ml-1 mb-4">Thumbnail image</label>
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="w-full md:w-[480px] aspect-video bg-[#F9F8F6] rounded-2xl border-2 border-dashed border-zinc-300 flex flex-col items-center justify-center text-zinc-400 gap-3 group hover:border-[#75716B] transition-colors cursor-pointer">
              <ImageIcon size={48} className="group-hover:scale-110 transition-transform opacity-50" />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 text-zinc-600 font-semibold hover:bg-zinc-50 transition-all cursor-pointer">
              <Upload size={18} />
              <span>Upload thumbnail image</span>
            </button>
          </div>
        </div>

        {/* 3. Fields: Category & Author */}
        <div className="max-w-md space-y-8"> {/* จำกัดความกว้างให้ดูสมดุลกับฟอร์ม */}
  {/* Category */}
  <div className="space-y-3">
  <label className="text-[16px] font-bold text-[#75716B] ml-1">Category</label>
  <Select>
    <SelectTrigger className="w-full !h-12 py-0 bg-white border-zinc-200 rounded-xl focus:ring-[#75716B] shadow-sm text-[#75716B] cursor-pointer">
      <SelectValue placeholder="Select category" />
    </SelectTrigger>
    
    {/* 🔑 เพิ่ม bg-white และกำหนดขอบ/เงาให้ชัดเจน */}
    <SelectContent className="bg-white border border-zinc-200 rounded-xl shadow-xl overflow-hidden">
      <SelectItem value="cat" className="cursor-pointer focus:bg-[#F9F8F6] focus:text-black">
        Cat
      </SelectItem>
      <SelectItem value="general" className="cursor-pointer focus:bg-[#F9F8F6] focus:text-black">
        General
      </SelectItem>
      <SelectItem value="inspiration" className="cursor-pointer focus:bg-[#F9F8F6] focus:text-black">
        Inspiration
      </SelectItem>
    </SelectContent>
  </Select>
</div>

  {/* Author name (ย้ายลงมาไว้ข้างล่างแล้ว) */}
  <div className="space-y-3">
    <label className="text-[17px] font-bold text-[#75716B] ml-1">Author name</label>
    <Input 
      disabled 
      value="Thompson P." 
      className="h-12 bg-[#EFEEEB] border-none rounded-xl text-[#75716B] text-[16px] font-medium px-5"
    />
  </div>
</div>

        {/* 4. Title & Introduction */}
        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-[17px] font-bold text-[#75716B] ml-1">Title</label>
            <Input 
              placeholder="Article title" 
              className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[17px] font-bold text-[#75716B] ml-1">
              Introduction <span className="text-zinc-400 font-normal text-sm ml-1">(max 120 letters)</span>
            </label>
            <Textarea 
              placeholder="Introduction" 
              className="min-h-[120px] bg-white border-zinc-200 rounded-2xl focus-visible:ring-[#75716B] shadow-sm p-5 resize-none"
              maxLength={120}
            />
          </div>
        </div>

        {/* 5. Content Editor Area */}
        <div className="space-y-3">
          <label className="text-[17px] font-bold text-[#75716B] ml-1">Content</label>
          <div className="bg-white border border-zinc-200 rounded-[32px] shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-[#75716B] transition-all">
            <Textarea 
              placeholder="Write your story here..." 
              className="w-full min-h-[300px] border-none focus-visible:ring-0 p-8 text-lg leading-relaxed resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}