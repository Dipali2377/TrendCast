import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/TrendDetail.css";

const TrendDetail = () => {
  const { keyword } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/news?keyword=${keyword}`
        );
        setNews(res.data.articles || []);
      } catch (err) {
        console.error("Error fetching trend details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendDetails();
  }, [keyword]);

  return (
    <div className="trend-detail-container">
      <h2>
        📰 News for: <span>{decodeURIComponent(keyword)}</span>
      </h2>

      {loading ? (
        <p>Loading articles...</p>
      ) : news.length > 0 ? (
        <div className="news-list">
          {news.map((article, index) => (
            <div key={index} className="news-card">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No news articles found for this trend.</p>
      )}
    </div>
  );
};

export default TrendDetail;
