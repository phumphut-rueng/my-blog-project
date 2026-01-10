// App.jsx
import { Toaster } from "sonner";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"; // 🔑 เพิ่ม useLocation
import HomePage from "./pages/HomePage.jsx";
import ViewPostPage from "./pages/ViewPostPage.jsx";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import { Nav } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MemberLayout from "./pages/member/MemberLayout.jsx";
import ProfilePage from "./pages/member/ProfilePage.jsx";
import ResetPasswordPage from "./pages/member/ResetPasswordPage.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import ArticleManagement from "./pages/admin/ArticleManagement.jsx";
import { Navigate } from "react-router-dom";
import CreateArticlePage from "./pages/admin/CreateArticlePage.jsx";
import CategoryManagement from "./pages/admin/CategoryManagement.jsx";
import CreateCategoryPage from "./pages/admin/CreateCategoryPage.jsx";
import AdminProfilePage from "./pages/admin/AdminProfilePage.jsx";
import NotificationPage from "./pages/admin/NotificationPage.jsx";
import AdminResetPasswordPage from "./pages/admin/ResetPasswordPage.jsx";

//สร้าง Component ย่อยเพื่อจัดการการแสดงผล Footer
// AppContent.jsx (อยู่ภายใน App.jsx)
function AppContent() {
  const location = useLocation();

  // 🔑 เช็คว่าเป็นหน้า Admin หรือหน้า Auth หรือไม่
  const isAdminPath = location.pathname.startsWith("/admin");
  const isAuthPath =
    location.pathname === "/login" || location.pathname === "/signup";

  // 🔑 กำหนดเงื่อนไข: ไม่แสดง Nav และ Footer ถ้าอยู่หน้า Admin หรือ Auth
  const shouldHideUI = isAdminPath || isAuthPath;

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="bottom-right" richColors />

      {/* 🔑 ซ่อน Navbar ถ้าเป็นหน้า Admin หรือ Auth */}
      {!isAdminPath && <Nav />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<ViewPostPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Member Section */}
          <Route
            path="/member/profile"
            element={
              <MemberLayout>
                <ProfilePage />
              </MemberLayout>
            }
          />
          <Route
            path="/member/reset-password"
            element={
              <MemberLayout>
                <ResetPasswordPage />
              </MemberLayout>
            }
          />

          {/* Admin Section */}
          <Route path="/admin" element={<Navigate to="/admin/articles" />} />
          <Route
            path="/admin/articles"
            element={
              <AdminLayout>
                <ArticleManagement />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/articles/create"
            element={
              <AdminLayout>
                <CreateArticlePage />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/category-management"
            element={
              <AdminLayout>
                <CategoryManagement />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/category-management/create"
            element={
              <AdminLayout>
                <CreateCategoryPage />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <AdminLayout>
                <AdminProfilePage />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/notification"
            element={
              <AdminLayout>
                <NotificationPage />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/reset-password"
            element={
              <AdminLayout>
                <AdminResetPasswordPage />
              </AdminLayout>
            }
          />
        </Routes>
      </main>

      {/* 🔑 ซ่อน Footer ถ้าเป็นหน้า Admin หรือ Auth */}
      {!shouldHideUI && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
