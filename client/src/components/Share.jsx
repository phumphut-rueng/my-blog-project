import { ThumbsUp, Copy, Facebook, Twitter, Linkedin} from 'lucide-react';
import { toast } from 'sonner';
import { AuthAlert } from './ui/AuthAlertDialog';

export function Share({ likesAmount }) {
    const shareLink = encodeURI(window.location.href);
    const handleCopyLink = () => {
      // 🔑 2. สร้างฟังก์ชันจัดการการ Copy
      navigator.clipboard.writeText(shareLink);
      
      // 🔑 3. เรียกใช้งานการแจ้งเตือน
      toast.success('Link copied to clipboard!', {
        description: 'You can now share this article with others.',
        duration: 3000,
      });
    };

    return (
      <div className="md:px-4">
        <div className="bg-[#EFEEEB] py-4 px-4 md:rounded-sm flex flex-col space-y-4 md:gap-16 md:flex-row md:items-center md:space-y-0 md:justify-between mb-10">
          <AuthAlert>
          <button className="bg-white flex items-center justify-center space-x-2 px-11 py-3 rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors group">
            <ThumbsUp className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
            <span className="text-foreground group-hover:text-muted-foreground font-medium transition-colors">
              {likesAmount}
            </span>
          </button>
          </AuthAlert>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="bg-white flex flex-1 items-center justify-center space-x-2 px-11 py-3 rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors group"
            >
              <Copy className="w-5 h-5 text-foreground transition-colors group-hover:text-muted-foreground" />
              <span className="text-foreground font-medium transition-colors group-hover:text-muted-foreground">
                Copy
              </span>
            </button>
            <a
              href={`https://www.facebook.com/share.php?u=${shareLink}`}
              target="_blank"
              className="bg-white p-3 rounded-full border text-foreground border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareLink}`}
              target="_blank"
              className="bg-white p-3 rounded-full border text-foreground border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`https://www.twitter.com/share?&url=${shareLink}`}
              target="_blank"
              className="bg-white p-3 rounded-full border text-foreground border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    );
  }