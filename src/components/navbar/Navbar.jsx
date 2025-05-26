import { BiSearchAlt } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import user1 from "../../assets/user1.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="header flex">
        <div className="title">
          <h1>Welcome to Dashboard</h1>
          <p>Hello John, Welcome Back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search..." />
          <BiSearchAlt />
        </div>
        <div className="admin flex">
          <TbMessageCircle className="icon" />
          <MdNotificationsNone className="icon" />
          <div className="admin-image">
            <img src={user1} alt="user" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
