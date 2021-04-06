import React from "react";
import { Link } from "react-router-dom";
import img from "../img/mainpage.png";

function MainPage() {
  return (
    <div className="main-page">
      <div className="lg:w-4/5 m-auto">
        <nav className="flex items-center justify-between px-4 py-2 pt-4">
          <h1 className="logo lg:text-3xl">LOGO</h1>
          <button className="bg-white py-2 px-8 rounded-lg lg:text-2xl">
            LOGIN
          </button>
        </nav>
        <div className="flex flex-col py-4">
          <h1 className="Tagline text-center pt-2 text-4xl">#WeForYou</h1>
          <span className="self-center"></span>
        </div>
        <div className="main-div flex items-center justify-center flex-wrap flex-col lg:flex-row">
          <div className="left-side-text flex-1">
            <p className="text-xl px-4 main-text">
              Welcome to HealMyMind, a safe place where you will get everything
              needed to become more content with life !
            </p>
          </div>
          <div className="right-side-img px-4 py-12 flex-1 flex items-center justify-center">
            <img src={img} className="object-contain w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;