import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"; // ใช้ Input เดิมที่มีอยู่

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center px-4 py-12">
      {/* Container หลักสีเทาอ่อนแบบในรูป */}
      <div className="w-full max-w-[800px] bg-[#EFEEEB] rounded-[32px] p-12 md:p-20 shadow-sm">
        <h1 className="text-[40px] font-bold text-center mb-10 text-[#26231E]">Sign up</h1>

        <form className="space-y-7">
          {/* ส่วนของ Name */}
          <div className="space-y-3">
            <label className="text-lg font-medium text-[#75716B] ml-1">Name</label>
            <Input
              name="name"
              placeholder="Full name"
              className="h-12 bg-white rounded-xl border-none text-2xl px-5 placeholder:text-[#A3A3A3] placeholder:text-lg"
              onChange={handleChange}
            />
          </div>

          {/* ส่วนของ Username */}
          <div className="space-y-3">
            <label className="text-lg font-medium text-[#75716B] ml-1">Username</label>
            <Input
              name="username"
              placeholder="Username"
              className="h-12 bg-white rounded-xl border-none text-lg px-5 placeholder:text-[#A3A3A3] placeholder:text-lg"
              onChange={handleChange}
            />
          </div>

          {/* ส่วนของ Email */}
          <div className="space-y-3">
            <label className="text-lg font-medium text-[#75716B] ml-1">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="h-12 bg-white rounded-xl border-none text-lg px-5 placeholder:text-[#A3A3A3] placeholder:text-lg"
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
              className="h-12 bg-white rounded-xl border-none text-lg px-5 placeholder:text-[#A3A3A3] placeholder:text-lg"
              onChange={handleChange}
            />
          </div>

          {/* ปุ่ม Sign up สีดำมน */}
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="w-45 py-4 bg-[#262626] text-white text-xl font-semibold rounded-full hover:bg-black transition-colors"
            >
              Sign up
            </button>
          </div>
        </form>

        {/* ลิงก์ไปหน้า Log in */}
        <p className="text-center mt-10 text-[#75716B] text-lg">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-[#26231E] underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}