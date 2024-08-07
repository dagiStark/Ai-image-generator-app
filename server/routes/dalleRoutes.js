import express from "express";
import   Configuration  from "openai";
import   OpenAIApi  from "openai";
import  dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from dall-e");
});

export default router;
