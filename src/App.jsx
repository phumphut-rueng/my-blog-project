import "./App.css";
import { Toaster } from 'sonner';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ViewPostPage from "./pages/ViewPostPage.jsx";
import { Nav } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
function App() {
  return (
    <>
    <Toaster position="bottom-right" richColors />
    <Router>
      <Nav /> 
      <main className="flex-grow"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<ViewPostPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
    </>
  );
}

export default App;
