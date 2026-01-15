import express from "express";
import cors from "cors";
import 'dotenv/config';
import postsRouter from "./routes/posts.mjs"; // 🔑 Import router

const app = express();
const port = process.env.PORT || 4001;

app.use(cors({
  origin: 'https://my-blog-project-sigma.vercel.app'
}));
app.use(express.json());

// 🚀 ใช้งาน Router
// ทุกเส้นทางที่ขึ้นต้นด้วย /posts จะวิ่งไปหา postsRouter
app.use("/posts", postsRouter);

app.get("/profiles", (req, res) => {
  return res.json({ data: { name: "john", age: 20 } });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});