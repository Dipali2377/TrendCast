import express, { Router } from "express";
import { getTrendingTopics } from "../controllers/trends.controller.js";

const router = Router();

router.get("/", getTrendingTopics);

export default router;
