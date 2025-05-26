import { BsArrowRightShort } from "react-icons/bs";
import "./Main.css";
import HelpCenter from "../help-center/HelpCenter";
import banner from "../../assets/banner.jpg";

function Main() {
  return (
    <div className="main-container flex">
      <div className="banner flex">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        <div className="buttons flex">
          <button className="btn">Explore more</button>
          <button className="btn transparent">Top Sellers</button>
        </div>
        <div className="banner-image">
          <img src={banner} alt="banner" />
        </div>
      </div>
      <div className="main-content flex">
        <div className="stat flex">
          <div className="stat-text">
            <h1>My Stat</h1>
            <div className="flex">
              <span>
                Today <br /> <small>5 Orders</small>
              </span>
              <span>
                This Month <br />
                <small>135 Orders</small>
              </span>
            </div>
            <span className="flex link">
              Go to my orders <BsArrowRightShort className="icon" />
            </span>
          </div>
        </div>
        <HelpCenter />
      </div>
    </div>
  );
}

export default Main;
