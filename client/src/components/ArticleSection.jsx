import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {BlogCard} from "./BlogCart";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function formatDate(isoDateString) {
  if (!isoDateString) return '';
  const date = new Date(isoDateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); 
}
export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  const [searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL = "https://blog-post-project-api.vercel.app";
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const navigate = useNavigate();

  const fetchPosts = async (categoryFilter, keywordFilter, pageNumber = 1) => {
    if (pageNumber === 1) {
      setIsLoading(true);
      setPosts([]); 
  } else {
    setIsLoading(true);
  }
    setError(null);
    const params = {
      page: pageNumber, 
      limit: 4, 
    };
    if (categoryFilter && categoryFilter !== "Highlight") {
      params.category = categoryFilter; 
    }
    if (keywordFilter && keywordFilter.trim() !== "") {
      params.keyword = keywordFilter.trim();
    }
    try{
      const response = await axios.get(`${API_BASE_URL}/posts`, { params });
      setTotalPages(response.data.totalPages);

      const processedPosts = response.data.posts.map(post => ({
        ...post,
        date: formatDate(post.date) // 👈 แปลงวันที่
      }));
      setPosts(prevPosts => {
        if (pageNumber === 1) {
            return processedPosts; // หน้าแรก: แทนที่
        } else {
            return [...prevPosts, ...processedPosts]; // หน้าถัดไป: เพิ่มต่อ
        }
    });
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load articles. Please try again.");
      setPosts([]);
    }finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // ตั้งเวลาหน่วง 500 มิลลิวินาที
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
  
    // 🔑 สำคัญมาก: ถ้ามีการพิมพ์ใหม่ (searchTerm เปลี่ยน) ก่อนครบ 500ms 
    // ฟังก์ชันจะรัน return (cleanup) เพื่อล้าง Timer เก่าทิ้ง
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    fetchPosts(selectedCategory, debouncedTerm, currentPage);
  }, [selectedCategory, debouncedTerm, currentPage]);

  const handleLoadMore = () => {
    // เพิ่มหมายเลขหน้า และเรียก fetchPosts ด้วยหน้าใหม่
    setCurrentPage(prevPage => prevPage + 1); 
  };
  
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };


  useEffect(() => {
    if (debouncedTerm.trim().length > 0) {
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(debouncedTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setIsDropdownOpen(true);
    } else {
      setSuggestions([]);
      setIsDropdownOpen(false);
    }
  }, [debouncedTerm, posts]);
  

  let content;
  
  if (isLoading) {
    content = <p className="text-center col-span-full py-10 text-lg text-blue-600">กำลังโหลดบทความ...</p>; 
  } else if (error) {
    content = <p className="text-center col-span-full py-10 text-lg text-red-600">Error: {error}</p>;
  } else if (posts.length === 0 && !isLoading) {
    content = <p className="text-center col-span-full py-10 text-lg text-gray-500">ไม่พบข้อมูลบทความ</p>;
  } else {
    content = posts.map((post) => (
      <div key={post.id} className="">
        <BlogCard {...post} />
      </div>
    ));
  }
  return (
    <>
    <div className="max-w-7xl mx-auto lg:px-8 mb-10">
      <p className="text-xl font-bold mb-4 px-4">Latest articles</p>
      <div className="bg-gray-100 max-w-7xl mx-auto flex flex-col gap-4 p-4 sm:p-6 lg:p-4 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-6 rounded-md">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="h-12 pr-10 bg-white text-gray-600 rounded-lg border-gray-200 focus:ring-2 focus:ring-black"
            value={searchTerm}
            onChange={handleSearchChange}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // ปิดเมื่อเลิกโฟกัส
          />
          {isDropdownOpen && suggestions.length > 0 && (
    <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl max-h-80 overflow-y-auto py-2">
      {suggestions.map((post) => (
        <div
          key={post.id}
          onClick={() => navigate(`/post/${post.id}`)}
          className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b last:border-0 border-gray-50"
        >
          <p className="text-sm font-semibold text-gray-900 line-clamp-1">
            {post.title}
          </p>
        </div>
      ))}
    </div>
  )}
        </div>
        <div className="md:hidden w-full">
          <p className="text-l text-gray-600 mb-1">Category</p>
          <Select
            value={selectedCategory}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full !h-12 bg-white text-gray-600 mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category,index) => (
                <SelectItem key={index} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden md:flex space-x-2">
          {categories.map((category,index) => {
            const isActive = selectedCategory === category;
            return(
            <div key={index}>
              <button 
              onClick={() => handleCategoryChange(category)}
              disabled={isActive}
              className={`px-4 py-3 transition-colors rounded-xl text-sm font-medium hover:cursor-pointer 
                ${isActive  
                  ? 'bg-gray-200 text-gray-900 shadow-inner'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}>
                {category}
              </button>
            </div>
          )})}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 md:px-8 mb-10">
    {content}
    </div>
    {/* 🔑 ส่วนปุ่ม View More */}
    {currentPage < totalPages && !isLoading && !error && (
        <div className="flex justify-center mb-10">
            <button
                onClick={handleLoadMore}
                className="px-6 py-3 text-black rounded-lg underline hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                // 💡 แสดง Loading ในปุ่มเมื่อกำลังโหลดหน้าถัดไป
                disabled={isLoading}
            >
                {isLoading && currentPage > 1 ? 'Loading More...' : 'View more'}
            </button>
        </div>
    )}
    </>
  );
}
