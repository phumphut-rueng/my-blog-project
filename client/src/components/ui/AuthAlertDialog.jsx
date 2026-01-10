import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";

export function AuthAlert({ children }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      {/* เพิ่ม not-prose เพื่อกันสไตล์พังจากหน้าบทความ */}
      <AlertDialogContent className="not-prose !max-w-[600px] rounded-[40px] p-12 bg-white border-none shadow-2xl">
        <AlertDialogCancel className="absolute right-4 top-4 border-none bg-transparent hover:bg-zinc-100 rounded-full w-10 h-10 p-0 transition-colors text-xl">
          ✕
        </AlertDialogCancel>

        <AlertDialogHeader className="flex flex-col items-center text-center space-y-8">
          <AlertDialogTitle className="text-[40px] font-bold leading-[1.1] text-zinc-900 tracking-tight text-center w-full">
            {/* 🔑 ใส่ text-center และ w-full เพื่อบังคับให้ทุกบรรทัดอยู่ตรงกลาง */}
            Create an account to <br /> continue
          </AlertDialogTitle>

          {/* ส่วนปุ่มที่จัดกลางแล้ว */}
          <div className="w-full flex justify-center mb-6">
            {/* 🔑 ใช้ asChild ที่ปุ่ม Action เพื่อให้ Link ทำหน้าที่เป็นปุ่มแทน */}
            <AlertDialogAction asChild>
              <Link
                to="/signup"
                className="w-64 py-8 text-xl font-bold !rounded-full bg-[#1A1A1A] text-white hover:bg-black flex items-center justify-center no-underline"
              >
                Create account
              </Link>
            </AlertDialogAction>
          </div>

          <AlertDialogDescription asChild>
            <div className="text-[16px] text-zinc-500 font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline font-bold text-zinc-900 hover:text-black"
              >
                Log in
              </Link>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
