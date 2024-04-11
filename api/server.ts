import path from "node:path";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { connectDB } from "./model/db";
import router from "./routes/index";
import { access } from "node:fs";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://book-it-app-six.vercel.app",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
  })
);
app.use(morgan("tiny"));

app.use("/api/hotels/uploads", express.static(__dirname + "\\uploads"));

app.use(router);

app.use("/", (req, res) => {
  res.send("server is running...");
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";
  return res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    status: errorStatus,
    stack: err.stack,
  });
});

app.use(express.static(path.join(__dirname, "static")));
app.use("*", express.static(path.join(__dirname, "static/index.html")));

const port = process.env.PORT || 3333;
// const port = "https://book-it-app-six.vercel.app";

connectDB().catch(() => process.exit(1));

app.listen(port, () => {
  console.log("App is listening at http://localhost:" + port);
});
