import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { toast } from "sonner";
import { useState } from "react";

export default function AdminResetPasswordPage() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleConfirmReset = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    // Logic การเปลี่ยนรหัสผ่านจริง
    toast.success("Password reset successfully");
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. Header - ใช้สไตล์เดียวกับหน้าอื่น */}
      <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft size={24} className="text-zinc-600" />
          </button>
          <h2 className="text-[26px] font-bold text-zinc-800 tracking-tight">
            Reset password
          </h2>
        </div>
        <div className="flex gap-3">
          {/* 🔑 ใช้ ConfirmDialog หุ้มปุ่ม Reset password */}
          <ConfirmDialog
            title="Reset password"
            description="Do you want to reset your password?"
            confirmText="Reset"
            onConfirm={handleConfirmReset}
          >
            <button className="bg-[#26231E] text-white px-10 py-3 rounded-full font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200 cursor-pointer text-[15px]">
              Reset password
            </button>
          </ConfirmDialog>
        </div>
      </div>

      <div className="max-w-md mt-10 space-y-8">
        {/* Input: Current Password */}
        <div className="space-y-3">
          <label className="text-[16px] font-bold text-[#75716B] ml-1">Current password</label>
          <Input
            name="currentPassword"
            type="password"
            placeholder="Current password"
            className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            onChange={handleChange}
          />
        </div>

        {/* Input: New Password */}
        <div className="space-y-3">
          <label className="text-[16px] font-bold text-[#75716B] ml-1">New password</label>
          <Input
            name="newPassword"
            type="password"
            placeholder="New password"
            className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            onChange={handleChange}
          />
        </div>

        {/* Input: Confirm New Password */}
        <div className="space-y-3">
          <label className="text-[16px] font-bold text-[#75716B] ml-1">Confirm new password</label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            className="h-12 bg-white border-zinc-200 rounded-xl focus-visible:ring-[#75716B] shadow-sm px-5"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}