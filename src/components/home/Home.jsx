import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import Sellers from "../sellers/Sellers";
import Activity from "../activity/Activity";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Main />
      <div className="button flex">
        <div className="listing-section">
          <Products />
          <Sellers />
        </div>
        <span className="activity-desktop">
          <Activity />
        </span>
      </div>
      <span className="activity-mobile">
        <Activity />
      </span>
    </div>
  );
};

export default Home;
