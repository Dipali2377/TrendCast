import { useEffect, useState } from "react";
import axios from "axios";
import TrendCard from "../components/TrendCard";
import "../styles/Home.css";

const Home = () => {
  const [region, setRegion] = useState("us");
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrends = async (regionCode) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/trends?region=${regionCode}`
      );
      setTrends(res.data.trends);
    } catch (err) {
      console.error("Error fetching trends:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends(region);
  }, [region]);

  return (
    <div className="home-container">
      <h2>
        🔥 Trending in <span>{region.toUpperCase()}</span>
      </h2>

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="us">United States</option>
        <option value="in">India</option>
        <option value="gb">United Kingdom</option>
        <option value="au">Australia</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="trend-grid">
          {trends.map((trend, index) => (
            <TrendCard key={index} trend={trend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
