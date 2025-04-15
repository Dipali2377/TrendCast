import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const fetchTrendingTopicsByRegion = async (region = "us") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trends?region=${region}`);
    return response.data.trends;
  } catch (error) {
    console.error("Error while fetching trends", error);
    throw error;
  }
};

export default fetchTrendingTopicsByRegion;
