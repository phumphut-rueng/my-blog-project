import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: "postgresql://postgres:APEapeape9989@db.ggtaytofawfpoxehkxyv.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => {
    console.log("✅ Connection Successful!");
    process.exit();
  })
  .catch(err => console.error("❌ Connection Error:", err));