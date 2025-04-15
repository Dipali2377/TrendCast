import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("TrendCast backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
