import { BsQuestionCircle } from "react-icons/bs";
import "./HelpCenter.css";

const HelpCenter = () => {
  return (
    <div className="helpCenter">
      <BsQuestionCircle className="icon" />
      <div className="content">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Help Center</h3>
        <p>Having any troubles, please contact us for more questions</p>
        <button className="btn">Go to help center</button>
      </div>
    </div>
  );
};

export default HelpCenter;
