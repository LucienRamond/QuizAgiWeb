import React from "react";
import "./Indicator.css";
import Healthy from "../../assets/img/healthy.svg";
import Love from "../../assets/img/love.svg";
import Allergy from "../../assets/img/allergy.svg";
import Diet from "../../assets/img/diet.svg";
import Thumb from "../../assets/img/thumb.svg";
import { page } from "../../redux/reducers/quiz";
import { useSelector } from "react-redux";

export default function Indicator() {
  const pages = useSelector(page);

  const handleLine = () => {
    if (pages === 1) {
      return "line upper-line line-0";
    } else if (pages === 2) {
      return "line upper-line line-25";
    } else if (pages === 3) {
      return "line upper-line line-50";
    } else if (pages === 4) {
      return "line upper-line line-75";
    } else if (pages === 5) {
      return "line upper-line line-100";
    }
  };

  return (
    <>
      <div className="container-indicator">
        <div className="under-line"></div>
        <div className={handleLine()}></div>

        <div className="container-img">
          <div className="bloc-img">
            <img src={Healthy} />
          </div>
          <div className="bloc-img">
            <img src={Love} />
          </div>
          <div className="bloc-img">
            <img src={Allergy} alt="" />
          </div>
          <div className="bloc-img">
            <img src={Diet} alt="" />
          </div>
          <div className="bloc-img">
            <img src={Thumb} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
