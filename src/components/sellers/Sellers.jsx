import Button from "../button/Button";
import "./Sellers.css";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";

function Sellers() {
  return (
    <div className="sellers flex">
      <div className="top-sellers">
        <div className="heading flex">
          <h3>Top Sellers</h3>
          <Button />
        </div>
        <div className="card flex">
          <div className="users">
            <img src={user1} alt="user1" />
            <img src={user2} alt="user2" />
            <img src={user3} alt="user3" />
            <img src={user4} alt="user4" />
          </div>
          <div className="card-text">
            <span>
              537 Headphones Sold <br />{" "}
              <small>
                21 Sellers <span className="date">7 days</span>
              </small>
            </span>
          </div>
        </div>
      </div>
      <div className="featured-sellers">
        <div className="heading flex">
          <h3>Featured Sellers</h3>
          <Button />
        </div>
        <div className="card flex">
          <div className="users">
            <img src={user1} alt="user1" />
            <img src={user2} alt="user2" />
            <img src={user3} alt="user3" />
            <img src={user4} alt="user4" />
          </div>
          <div className="card-text">
            <span>
              1,346 Headphones Sold <br />{" "}
              <small>
                38 sellers <span className="date">31 Days</span>
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellers;
