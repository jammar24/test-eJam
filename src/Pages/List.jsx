import "react";
import "../Pages/styles/lists.css";
const List = () => {
  return (
    <div   className="list__continer">
      <ul  className="list__lt">
        <li>
          {" "}
          <span className="list__cn">Negative Ion Technology may</span>{" "}
          <span className="list__hp">help with allergens</span>{" "}
        </li>
        <li>
          {" "}
          <span className="list__for">Designed for</span> <span className="list__air">air rejuvenation</span>{" "}
        </li>
        <li>
          {" "}
          <span  className="list__ev">Perfect for every room</span>{" "}
          <span  className="list__ty">in all types of places.</span>{" "}
        </li>
      </ul>
      <div  className="lst">
        <li className="lst__circle"></li>
        <div  className=" lst__container">
          {" "}
          <span className="lst__sv">Save</span>
          <span className="lst__sn">53%</span>
          <span className="lst__gt">and get </span>
          <span className="lst__et">6 extra Clarifision</span>
          <span className="lst__ol">for only </span>
          <span className="lst__ch" >$14 Each</span>
          <span className="lst__p" >.</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default List;
