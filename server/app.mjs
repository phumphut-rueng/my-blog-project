import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectionPool from './utils/db.mjs';

const app = express();
const port = process.env.PORT || 4001;

app.use(cors({
  origin: 'https://my-blog-project-sigma.vercel.app' // ใส่ URL ของหน้าเว็บคุณจาก Vercel
}));
app.use(express.json());

app.get("/profiles", (req, res) => {
  return res.json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

app.post("/posts", async (req, res) => {
  // ลอจิกในการเก็บข้อมูลของโพสต์ลงในฐานข้อมูล

  // 1) Access ข้อมูลใน Body จาก Request ด้วย req.body
  const newPost = req.body;

  // 2) เขียน Query เพื่อ Insert ข้อมูลโพสต์ ด้วย Connection Pool
  try {
    const query = `insert into posts (title, image, category_id, description, content, status_id)
    values ($1, $2, $3, $4, $5, $6)`;

    const values = [
      newPost.title,
      newPost.image,
      newPost.category_id,
      newPost.description,
      newPost.content,
      newPost.status_id,
    ];

    await connectionPool.query(query, values);
  } catch {
    return res.status(500).json({
      message: `Server could not create post because database connection`,
    });
  }

  // 3) Return ตัว Response กลับไปหา Client ว่าสร้างสำเร็จ
  return res.status(201).json({ message: "Created post successfully" });
});

// API สำหรับดึงข้อมูลบทความทั้งหมด
app.get("/posts", async (req, res) => {
  try {
    // ใช้ SQL Query เพื่อดึงข้อมูลจากตาราง posts
    // แนะนำให้ดึงข้อมูลจากตารางที่สัมพันธ์กันมาด้วย (JOIN)
    const query = `
      SELECT posts.*, categories.name AS category_name, statuses.status AS status_name
      FROM posts
      LEFT JOIN categories ON posts.category_id = categories.id
      LEFT JOIN statuses ON posts.status_id = statuses.id
      ORDER BY posts.date DESC
    `;
    
    const result = await connectionPool.query(query);

    return res.status(200).json({
      data: result.rows
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server could not fetch posts",
      error: err.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});