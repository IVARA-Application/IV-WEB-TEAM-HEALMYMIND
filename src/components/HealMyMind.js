import React from "react";
import img1 from "../img/career-counselling.png";
import img2 from "../img/Individual-counselling.png";
import img3 from "../img/Therapeautic-videos.png";
import img4 from "../img/mind-soul.png";
import rectangle from "../img/Rectangle.png";

function HealMyMind() {
  return (
    <div className="relative overflow-hidden">
      <h1 className="text-center text-3xl py-4"> Healmymind Features</h1>
      <span className="circle"></span>
      <div className="flex space-x-8 justify-evenly place-items-end pt-40 pb-10">
        <img className="px-4 object-contain" src={img1} alt="" />
        <img className=" object-contain" src={img2} alt="" />
        <img className="px-4 object-contain" src={img3} alt="" />
        <img className="px-4 object-contain" src={img4} alt="" />
      </div>
      <span className="rectangle"></span>
      <img src={rectangle} className="w-full rectangle-texture" alt="" />
    </div>
  );
}

export default HealMyMind;
