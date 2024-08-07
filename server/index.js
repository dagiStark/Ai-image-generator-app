import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";

import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)
app.get("/", async (req, res) => {
  res.send("hello from server");
});

const startServer = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`server listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
