import axios from "axios";

const API_KEY = "ea099907d8e944f2bbaf8f6adc7ac813";

const fetchTrendingTopics = async (region) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: region.toLowerCase(),
        apiKey: API_KEY,
        pageSize: 10,
      },
    });

    const articles = response.data.articles.map((article) => ({
      keyword: article.keyword,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      source: article.source.name,
      publishedAt: article.publishedAt,
    }));
    return { region, trends: articles };
  } catch (error) {
    console.error("Error fetching Google Trends:", error);
    return {
      region,
      trends: [],
      error: "Failed to fetch trends",
    };
  }
};

export default fetchTrendingTopics;

// api key
// ea099907d8e944f2bbaf8f6adc7ac813;
