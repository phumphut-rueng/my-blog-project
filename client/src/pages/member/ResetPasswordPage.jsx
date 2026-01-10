import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

export default function ResetPasswordPage() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleConfirmReset = () => {
    // 🔑 ตรวจสอบ Logic เบื้องต้นก่อน (เช่น รหัสใหม่ตรงกันไหม)
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Logic การเปลี่ยนรหัสผ่านจริง
    toast.success("Password updated");
  };

  return (
    <div className="max-w-xl">
      {/* 🔑 เปลี่ยน onSubmit ให้เรียก e.preventDefault() เพื่อไม่ให้หน้า Refresh */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        
        {/* Input: Current Password */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-500 ml-1">Current password</label>
          <Input
            name="currentPassword"
            type="password"
            placeholder="Current password"
            className="h-12 bg-white rounded-xl border-none text-lg px-5 shadow-sm"
            onChange={handleChange}
          />
        </div>

        {/* Input: New Password */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-500 ml-1">New password</label>
          <Input
            name="newPassword"
            type="password"
            placeholder="New password"
            className="h-12 bg-white rounded-xl border-none text-lg px-5 shadow-sm"
            onChange={handleChange}
          />
        </div>

        {/* Input: Confirm New Password */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-500 ml-1">Confirm new password</label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            className="h-12 bg-white rounded-xl border-none text-lg px-5 shadow-sm"
            onChange={handleChange}
          />
        </div>

        {/* 🔑 ส่วนของปุ่มพร้อม Dialog */}
        <div className="pt-4">
        <ConfirmDialog 
            title="Reset password"
            description="Do you want to reset your password?"
            confirmText="Reset"
            onConfirm={handleConfirmReset}
          >
            <button
              type="button"
              className="bg-[#26231E] text-white px-10 py-3 rounded-full font-semibold hover:bg-black transition-all active:scale-95 shadow-md shadow-zinc-200"
            >
              Reset password
            </button>
          </ConfirmDialog>
        </div>
      </form>
    </div>
  );
}