import {BlogCard} from "./BlogCart";
import { blogPosts } from "@/data/blogpost";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <>
    <div className="max-w-7xl mx-auto lg:px-8 mb-10">
      <p className="text-xl font-bold mb-4 px-4">Latest articles</p>
      <div className="bg-gray-100 max-w-7xl mx-auto flex flex-col gap-4 p-4 sm:p-6 lg:p-4 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-6 rounded-md">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4" />
          <Input
            type="text"
            placeholder="Search"
            className="h-12 pr-10 bg-white text-gray-600 "
          />
        </div>
        <div className="md:hidden w-full">
          <p className="text-l text-gray-600 mb-1">Category</p>
          <Select>
            <SelectTrigger className="w-full !h-12 bg-white text-gray-600 mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category,index) => (
                <SelectItem key={index} value={category.toLowerCase()}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden md:flex space-x-2">
          {categories.map((category,index) => (
            <div key={index}>
              <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium focus:bg-gray-200 focus:text-gray-900 hover:cursor-pointer">
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 md:px-8 mb-10">
      {blogPosts.map((post) => (
        <div key={post.id} className="">
          <BlogCard {...post} />
        </div>
      ))}
    </div>
    </>
  );
}
