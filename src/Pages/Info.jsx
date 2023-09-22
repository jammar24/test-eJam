import "react";
import "../Pages/styles/info.css";
import imgremove from '../assets/prdct.png'

const Info = () => {
  return (
    <div className="info">
      <div className="info__main">
        {" "}
        <span className="info__main-time">ONE TIME ONLY</span>
        <span className="info__main-price" > special price for 6 extra Clarifion for only</span>{" "}
        <span className="info__main-each">$14 each</span> <span className="info__main-name">($84.00 total!)</span>
      </div>
      <div  className="info__second">
        <img className="info__second-img"  src={imgremove} alt="" />
      </div>
    </div>
  );
};

export default Info;
