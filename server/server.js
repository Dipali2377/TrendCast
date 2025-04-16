import express from "express";
import cors from "cors";
import newsRoutes from "../server/routes/news.routes.js";
import trendRoutes from "../server/routes/trends.route.js";
const app = express();

app.use(express.json());

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("TrendCast backend is running");
});
app.use("/api/news", newsRoutes);
app.use("/api/trends", trendRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
