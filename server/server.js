
import dotenv from "dotenv";

dotenv.config({
  path: new URL("../.env", import.meta.url)
});

import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const port = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    await connectDatabase();

    const server = app.listen(port, "0.0.0.0", () => {
      console.log(`API listening on port ${port}`);
    });

    server.on("error", (error) => {
      console.error("Server error:", error);
    });

  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
}

startServer();
