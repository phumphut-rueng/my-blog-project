import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog"; // 🔑 นำเข้า ConfirmDialog
import { toast } from "sonner";

export default function AdminProfilePage() {
  const navigate = useNavigate();

  const handleConfirmSave = () => {
    // Logic สำหรับการส่งข้อมูลไปยัง Backend สามารถใส่ตรงนี้ได้
    toast.success("Profile updated successfully", {
      description: "Your information has been saved.",
    });
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. Header - ใช้สไตล์เดียวกับหน้าจัดการอื่นๆ */}
      <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
            Profile
          </h2>
        </div>
        <div className="flex gap-3">
          <ConfirmDialog
            title="Update profile"
            description="Do you want to save the changes to your profile?"
            confirmText="Save"
            onConfirm={handleConfirmSave}
          >
            <button className="bg-[#26231E] text-white px-12 py-3 rounded-full font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200 cursor-pointer">
              Save
            </button>
          </ConfirmDialog>
        </div>
      </div>

      <div className="max-w-5xl space-y-10">
        {/* 2. Profile Picture Upload */}
        <div className="space-y-4 border-b border-[#DAD6D1] pb-10">
          <div className="flex items-center gap-6">
            <div className="w-30 h-30 rounded-full overflow-hidden bg-zinc-200 border-2 border-zinc-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 text-zinc-600 font-semibold hover:bg-zinc-50 transition-all cursor-pointer">
              <Upload size={18} />
              <span>Upload profile picture</span>
            </button>
          </div>
        </div>

        {/* 3. Fields Area */}
        <div className="max-w-md space-y-8">
          {/* Name */}
          <div className="space-y-3">
            <label className="text-[16px] font-bold text-[#75716B] ml-1">Name</label>
            <Input 
              placeholder="Your name"
              defaultValue="Thompson P."
              className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            />
          </div>

          {/* Username */}
          <div className="space-y-3">
            <label className="text-[16px] font-bold text-[#75716B] ml-1">Username</label>
            <Input 
              placeholder="Username"
              defaultValue="thompson"
              className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <label className="text-[16px] font-bold text-[#75716B] ml-1">Email</label>
            <Input 
              type="email"
              placeholder="Email"
              defaultValue="thompson.p@gmail.com"
              className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            />
          </div>
        </div>

        {/* 4. Bio */}
        <div className="space-y-3">
          <label className="text-[16px] font-bold text-[#75716B] ml-1">
            Bio <span className="text-zinc-400 font-normal text-sm ml-1">(max 120 letters)</span>
          </label>
          <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-[#75716B] transition-all">
            <Textarea 
              placeholder="Write something about yourself..." 
              defaultValue="I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness."
              className="w-full min-h-[160px] border-none focus-visible:ring-0 p-6 text-[16px] leading-relaxed resize-none"
              maxLength={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}