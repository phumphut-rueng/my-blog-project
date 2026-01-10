import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthorBio } from "./AuthorBio";
import { Share } from "./Share";
import { Comment } from "./Comment"; 

export function Viewpost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const getPost = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `https://blog-post-project-api.vercel.app/posts/${postId}`
            );
            setPost(response.data);
        } catch (err) {
            console.error(err);
            setError("ไม่สามารถโหลดบทความได้");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (postId) {
            getPost();
        }
    }, [postId])

    if (isLoading) return <div className="text-center py-20">กำลังโหลด...</div>;
    if (error || !post) return <div className="text-center py-20 text-red-500">{error || "ไม่พบข้อมูล"}</div>;

  return (
    <div className="max-w-7xl mx-auto space-y-8 container md:px-8 pb-20 md:pb-28 md:pt-8 lg:pt-16">
      <div className="space-y-4 md:px-4">
        <img
          src={post.image}
          alt={post.title}
          className="md:rounded-lg object-cover w-full h-[260px] sm:h-[340px] md:h-[587px]"
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-3/4 space-y-8">
          <article className="px-4">
            <div className="flex">
              <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                {post.category}
              </span>
              <span className="px-3 py-1 text-sm font-normal text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-4 mb-10">{post.description}</p>
            <div className="markdown prose prose-lg max-w-none 
                    prose-headings:text-slate-700 
                    prose-h2:text-xl 
                    prose-h2:font-bold 
                    prose-h2:mt-4
                    prose-p:text-gray-600 
                    prose-p:leading-7">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
          <div className="xl:hidden px-4">
          <AuthorBio />
          </div>
          <Share likesAmount={post.likes}/>
          <Comment />
        </div>

        <div className="hidden xl:block xl:w-1/4">
          <div className="sticky top-4">
            <AuthorBio />
          </div>
        </div>
      </div>
    </div>
  );
}
