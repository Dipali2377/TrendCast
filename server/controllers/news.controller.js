// controllers/news.controller.js
import axios from "axios";

const API_KEY = "ea099907d8e944f2bbaf8f6adc7ac813";

const getNewsByKeyword = async (req, res) => {
  try {
    const keyword = decodeURIComponent(req.query.keyword || "trending");

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
};

export { getNewsByKeyword };
