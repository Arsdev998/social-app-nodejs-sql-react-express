import express from "express";
const app = express();

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/post.js";
import commentRoutes from "./routes/comment.js";
import likedRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/liked", likedRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));
