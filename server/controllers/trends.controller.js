import fetchTrendingTopics from "../services/trends.services.js";

const getTrendingTopics = async (req, res) => {
  try {
    const region = req.query?.region || "us";
    const data = await fetchTrendingTopics(region);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export { getTrendingTopics };
