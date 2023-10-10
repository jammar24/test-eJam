import "react";
import "../Pages/styles/info.css";
import imgremove from '../assets/prdct.png'

const Info = () => {
  return (
    <>
    <div className="info">
      <div className="info__main">
        {" "}
        <span className="info__main-time"><p>ONE TIME ONLY</p></span><span className="info__main-price" ><p> special price for 6 </p> </span> 

         
      </div>
      <div className="info__two">
      <span className="info__main-prie-one"  > <p>  extra Clarifion for only</p></span>{" "}
        
      </div> 
      <span className="info__main-each"><p>$14 each</p></span> 
      <span className="info__main-name"><p>($84.00 total!)</p></span>
      <div  className="info__second">
        <img className="info__second-img"  src={imgremove} alt="" />
      </div>
    </div>
    </>
  );
};

export default Info;
