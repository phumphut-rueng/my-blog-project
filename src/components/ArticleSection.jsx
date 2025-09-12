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
  return (
    <div className="w-full max-w-7xl mx-auto lg:px-8 mb-10">
      <p className="text-xl font-bold mb-4 px-4">Latest articles</p>

      <div className="bg-gray-100 container mx-auto flex flex-col p-4 pt-6 lg:p-3 lg:flex-row-reverse lg:items-center lg:justify-between lg:px-8 rounded-md space-y-4 lg:space-y-0">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-4" />
          <Input
            type="text"
            placeholder="Search"
            className="h-12 pr-10 bg-white text-gray-600"
          />
        </div>
        <div className="md:hidden w-full">
          <p className="text-l text-gray-600 mb-1">Category</p>
          <Select>
            <SelectTrigger className="w-full !h-12 bg-white text-gray-600 mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highlight">Highlight</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden md:flex space-x-2">
          <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium focus:bg-gray-200 focus:text-gray-900 hover:cursor-pointer">
            Highlight
          </button>
          <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium focus:bg-gray-200 focus:text-gray-900 hover:cursor-pointer">
            Cat
          </button>
          <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium focus:bg-gray-200 focus:text-gray-900 hover:cursor-pointer">
            Inspiration
          </button>
          <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium focus:bg-gray-200 focus:text-gray-900 hover:cursor-pointer">
            General
          </button>
        </div>
      </div>
    </div>
  );
}
