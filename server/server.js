
import dotenv from "dotenv";

dotenv.config({
  path: new URL("../.env", import.meta.url)
});

import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const port = Number(process.env.PORT) || 5000;

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on port ${port}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});

connectDatabase().catch((error) => {
  console.error("Database connection failed; API remains available:", error.message);
});
