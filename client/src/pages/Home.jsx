import { useState } from "react";

const Home = () => {
  const [region, setRegion] = useState("us");
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="home-container">
      <h2>
        🔥 Trending in <span>{region.toUpperCase()}</span>
      </h2>
    </div>
  );
};

export default Home;
