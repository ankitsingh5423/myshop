import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./utils/db.utils.js";
import { logger } from "./utils/logger.utils.js";

dotenv.config();

const PORT = process.env.PORT ?? 3000;
const BACKEND_URL = process.env.BACKEND_URL ?? "";

app.get("/api/v1/", (req, res) => {
  res.send("Welcome to the backend server!");
});

(async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      logger.info(`Server is running on ${BACKEND_URL}`);
    });
  } catch (error) {
    logger.error("Error establishing server %s", error.message, {
      stack: error.stack,
    });
  }
})();
