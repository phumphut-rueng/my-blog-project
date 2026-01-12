import pg from 'pg';
import 'dotenv/config'; // 🔑 บังคับโหลด .env ในไฟล์นี้เลย

const { Pool } = pg;

// ตรวจสอบค่าก่อนเชื่อมต่อ (ถ้าขึ้น undefined แสดงว่า .env วางผิดที่หรือชื่อไม่ตรง)
console.log("DB URL:", process.env.CONNECTION_STRING); 

const connectionPool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false // 🔑 เพิ่มส่วนนี้เพื่อให้เชื่อมต่อกับ Supabase ได้
  }
});

export default connectionPool;