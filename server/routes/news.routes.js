// routes/news.routes.js
import express from "express";
import { getNewsByKeyword } from "../controllers/news.controller.js";

const router = express.Router();

router.get("/", getNewsByKeyword);

export default router;
