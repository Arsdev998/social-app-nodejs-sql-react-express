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
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/liked", likedRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
