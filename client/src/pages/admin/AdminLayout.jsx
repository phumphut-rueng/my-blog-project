import { AdminSidebar } from "@/components/ui/AdminSidebar";
export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F9F8F6]">
      {/* 1. ส่วน Sidebar ที่เรียกใช้ Component ที่คุณสร้างไว้ */}
      <AdminSidebar />

      {/* 2. ส่วนเนื้อหาหลัก (Main Content) */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* คุณสามารถเพิ่ม Header เล็กๆ ด้านบนตรงนี้ได้ถ้าต้องการ */}
        <div className="flex-1 overflow-y-auto p-10">
          {children}
        </div>
      </main>
    </div>
  );
}