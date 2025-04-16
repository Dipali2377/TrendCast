import { Link } from "react-router-dom";
import "../styles/TrendCard.css";

const TrendCard = ({ trend }) => {
  return (
    <div className="trend-card">
      <h3>{trend.source}</h3>
      <p>
        {trend.description
          ? trend.description.slice(0, 100) + "..."
          : "No description available."}
      </p>
      <Link to={`/trend/${encodeURIComponent(trend.source)}`}>
        <button className="view-detail-btn">View Detail</button>
      </Link>
    </div>
  );
};

export default TrendCard;
