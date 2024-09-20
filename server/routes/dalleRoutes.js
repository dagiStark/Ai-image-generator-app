import express from "express";
import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEYS,
});

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Hello from dall-e");
  })
  .post(async (req, res) => {
    try {
      const { prompt } = req.body;
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        size: "1024x1024",
        quality: "standard",
        n: 1,
        response_format: "b64_json",
      });
      const image = response.data[0].b64_json;
      console.log(image);
      res.status(200).json({ photo: image });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .send(error?.response?.data?.error?.message || "An error occurred");
    }
  });

export default router;
