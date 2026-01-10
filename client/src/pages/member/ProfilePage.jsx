import { Input } from "@/components/ui/input";
import { toast } from "sonner";
export default function ProfilePage() {

    const handleSave = () => {
        toast.success('Saved profile', {
          description: 'Your profile has been successfully updated.',
          duration: 3000,
        });
      };

  return (
    <div className="max-w-xl">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img 
          src="profile.jpg"
          className="w-32 h-32 rounded-full border-4 border-white shadow-sm object-cover" 
        />
        <button className="px-6 py-2.5 bg-white border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-colors shadow-sm">
          Upload profile picture
        </button>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#75716B] ml-1">Name</label>
          <Input defaultValue="Moodeng ja" className="h-12 bg-white rounded-xl border-none text-lg px-5" />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-[#75716B] ml-1">Username</label>
          <Input defaultValue="moodeng.cute" className="h-12 bg-white rounded-xl border-none text-lg px-5" />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-[#75716B] ml-1">Email</label>
          <Input 
            disabled 
            defaultValue="moodeng.cute@gmail.com" 
            className="h-12 bg-transparent border-none text-[#75716B] text-lg px-1 cursor-not-allowed" 
          />
        </div>

        <div className="pt-4">
          <button className="px-10 py-3.5 bg-[#262626] text-white font-bold rounded-full hover:bg-black transition-all active:scale-95"
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}