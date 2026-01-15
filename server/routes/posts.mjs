import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import { validatePostData } from "../middlewares/postValidation.mjs";

const postsRouter = Router();

// สร้างบทความใหม่
postsRouter.post("/", validatePostData, async (req, res) => {
  const newPost = req.body;
  try {
    const query = `insert into posts (title, image, category_id, description, content, status_id)
    values ($1, $2, $3, $4, $5, $6)`;
    const values = [newPost.title, newPost.image, newPost.category_id, newPost.description, newPost.content, newPost.status_id];

    await connectionPool.query(query, values);
    return res.status(201).json({ message: "Created post successfully" });
  } catch {
    return res.status(500).json({ message: `Server could not create post because database connection` });
  }
});

// ดึงข้อมูลบทความทั้งหมด (Pagination)
postsRouter.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const offset = (page - 1) * limit;

  try {
    const postsQuery = `
      SELECT posts.*, categories.name AS category_name, statuses.status AS status_name
      FROM posts
      LEFT JOIN categories ON posts.category_id = categories.id
      LEFT JOIN statuses ON posts.status_id = statuses.id
      ORDER BY posts.date DESC
      LIMIT $1 OFFSET $2
    `;
    const countQuery = `SELECT COUNT(*) FROM posts`;

    const [postsResult, countResult] = await Promise.all([
      connectionPool.query(postsQuery, [limit, offset]),
      connectionPool.query(countQuery)
    ]);

    const totalPosts = parseInt(countResult.rows[0].count);
    return res.status(200).json({
      data: postsResult.rows,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page
    });
  } catch (err) {
    return res.status(500).json({ message: "Server could not fetch posts", error: err.message });
  }
});

// ดึงข้อมูลบทความรายอัน
postsRouter.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    const query = `
      SELECT posts.*, categories.name AS category_name, statuses.status AS status_name
      FROM posts
      LEFT JOIN categories ON posts.category_id = categories.id
      LEFT JOIN statuses ON posts.status_id = statuses.id
      WHERE posts.id = $1
    `;
    const result = await connectionPool.query(query, [postId]);
    if (result.rows.length === 0) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ data: result.rows[0] });
  } catch (err) {
    return res.status(500).json({ message: "Server could not fetch the post", error: err.message });
  }
});

// แก้ไขบทความ
postsRouter.put("/:postId", validatePostData, async (req, res) => {
  const postId = req.params.postId;
  const updatedPost = req.body;
  try {
    const query = `UPDATE posts SET title = $1, image = $2, category_id = $3, description = $4, content = $5, status_id = $6, date = NOW() WHERE id = $7`;
    const values = [...Object.values(updatedPost), postId];
    const result = await connectionPool.query(query, [updatedPost.title, updatedPost.image, updatedPost.category_id, updatedPost.description, updatedPost.content, updatedPost.status_id, postId]);
    if (result.rowCount === 0) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ message: "Updated post successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server could not update the post", error: err.message });
  }
});

// ลบบทความ
postsRouter.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    const result = await connectionPool.query("DELETE FROM posts WHERE id = $1", [postId]);
    if (result.rowCount === 0) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ message: "Deleted post successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server could not delete the post", error: err.message });
  }
});

export default postsRouter;