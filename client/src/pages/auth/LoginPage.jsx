import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"; 

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // จัดการ Logic การ Login ที่นี่
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-start px-4 py-12">
      {/* Container หลักสีเทาอ่อน ปรับความกว้างตามดีไซน์หน้า Login */}
      <div className="w-full max-w-[800px] bg-[#EFEEEB] rounded-[32px] p-12 md:p-20 shadow-sm">
        <h1 className="text-[40px] font-bold text-center mb-10 text-[#26231E]">Log in</h1>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* ส่วนของ Email */}
          <div className="space-y-3">
            <label className="text-lg font-medium text-[#75716B] ml-1">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="h-12 bg-white rounded-xl border-none text-lg px-5 placeholder:text-[#A3A3A3] placeholder:text-lg focus-visible:ring-1 focus-visible:ring-gray-300"
              onChange={handleChange}
            />
          </div>

          {/* ส่วนของ Password */}
          <div className="space-y-3">
            <label className="text-lg font-medium text-[#75716B] ml-1">Password</label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="h-12 bg-white rounded-xl border-none text-lg px-5 placeholder:text-[#A3A3A3] placeholder:text-lg focus-visible:ring-1 focus-visible:ring-gray-300"
              onChange={handleChange}
            />
          </div>

          {/* ปุ่ม Log in สีดำมน */}
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="w-45 py-4 bg-[#262626] text-white text-xl font-semibold rounded-full hover:bg-black transition-colors"
            >
              Log in
            </button>
          </div>
        </form>

        {/* ลิงก์ไปหน้า Sign up */}
        <p className="text-center mt-10 text-[#75716B] text-lg">
          Don't have any account?{" "}
          <Link to="/signup" className="font-bold text-[#26231E] underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}