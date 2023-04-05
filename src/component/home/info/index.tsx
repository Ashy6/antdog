import React from "react";
import honest from "../../../assets/honest_icon.png";
import Safely from "../../../assets/safely_icon.png";
import heightRate from "../../../assets/height_rate_icon.png";

const Info: React.FC = () => (
  <div className="home-container-info">
    <span>
      <img className="home-container-info-img" src={honest} alt="" />
      Honest
    </span>

    <span>
      <img className="home-container-info-img" src={Safely} alt="" />
      Safely
    </span>

    <span>
      <img className="home-container-info-img" src={heightRate} alt="" />
      High rate
    </span>
  </div>
);

export default Info;
