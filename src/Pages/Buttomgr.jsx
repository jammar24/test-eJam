import "react";
import "../Pages/styles/buttomgr.css";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import shoppay from "../assets/shoppay.png";
import amex from "../assets/amex.png";
import mastercard from "../assets/mastercard.png";
import applepay from "../assets/applepay.png";
import satisfaction from "../assets/satisfaction.png";

const Buttomgr = () => {
  return (
    <div className="buttomgr">
      <button className="buttomgr__btn">Yes - Claim my discount</button>
      <div className="buttom__sp">
        <div className="buttom__sp-free">Free shipping</div>
        <div className="buttom__line-one"></div>
        <div className="buttom__sp-ssl">Secure 256-bit SSL encryption.</div>
         <div className="buttom__line-one"></div>
        <ul className="buttom__sp-list">
          <li>
            <img src={visa} alt="" />
          </li>
          <li>
            <img src={paypal} alt="" />
          </li>
          <li>
            <img src={shoppay} alt="" />
          </li>
          <li>
            <img src={amex} alt="" />
          </li>
          <li>
            <img src={mastercard} alt="" />
          </li>
          <li>
            <img src={applepay} alt="" />
          </li>
        </ul>
      </div>
      <div className="buttom__thanks">No thanks, I don’t want this.</div>

      <div>
        <img src={satisfaction} alt="" />
        <div>
          {" "}
          <span className="buttom__container">
            If you are not completely thrilled with your Clarifion - We have a{" "}
          </span>{" "}
          <span className="buttom__container-we">
            We have a 30 day satisfaction guarantee
          </span>{" "}
          <span className="buttom__container-to">
            . Please refer to our return policy at the bottom of the page for
            more details. Happy Shopping!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Buttomgr;
