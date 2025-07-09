import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB ON");
  })
  .catch((err) => {
    console.log("DB FAILED", err);
  });
  
const __dirname = path.resolve();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(express.json());
app.use(cookieParser());

// API Routes should go here BEFORE static files and catch-all

// Static files for production
app.use(express.static(path.join(__dirname, "client", "dist")));

// Catch-all handler should be LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const name = err.name || "ServerError";
  const details = err.details || null;
  res.status(status).json({
    success: false,
    error: {
      name,
      message,
      ...(details && { details }),
    }
  });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`SERVER ON ${port}`);
});