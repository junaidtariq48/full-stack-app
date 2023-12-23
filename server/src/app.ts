import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import morgan from "morgan";
import itemRoutes from "./routes/itemRoutes";
import path from "path";

const cors = require("cors");
const app = express();
const config = require("../config.js");

// Use cors middleware
app.use(cors());
app.options("*", cors());

const port = process.env.PORT || 3000;

// MongoDB connection
if (process.env.DB_URL && process.env.DB_NAME) {
  mongoose.connect(process.env.DB_URL + process.env.DB_NAME);
} else {
  console.error("env variables not defined");
}

// Middleware
app.use(bodyParser.json());
// app.use(morgan("dev"));

// API Routes
app.use("/items", itemRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
