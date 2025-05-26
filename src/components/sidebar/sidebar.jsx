import { sidebarItems } from "../../data/index.jsx";
import HelpCenter from "../help-center/HelpCenter.jsx";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar grid">
      <div className="logo flex">
        <h2>Dashboard</h2>
      </div>
      <div>
        <ul className="menu-items grid">
          {sidebarItems.map((item, index) => {
            return (
              <li key={index} className="item">
                <a href="/#" className="link flex">
                  <span className="icon">{item.icon}</span>
                  <span className="title">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <HelpCenter />
    </div>
  );
};

export default Sidebar;
