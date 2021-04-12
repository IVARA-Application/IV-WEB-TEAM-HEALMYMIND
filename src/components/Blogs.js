import React, { useState } from "react";
import card5 from "../img/botw-card1.png";
import card6 from "../img/botw-card2.png";
import * as AiIcons from "react-icons/ai";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";
import img5 from "../img/img5.jpeg";
import img6 from "../img/img6.jpeg";

import { Link } from "react-router-dom";

const staticBlogAsset = [
  {
    image: img1,
    text: "Multitasking-Pros and Cons",
    link: "/Multitasking",
    day: "12",
    month: "Apr",
  },
  {
    image: img3,
    text: "Anxiety and Panic Attacks difference",
    link: "/AnxietyAndPanicAttacks",
    day: "12",
    month: "Apr",
  },
  {
    image: img2,
    text: "Tackling Stress at work",
    link: "/TacklingStress",
    day: "12",
    month: "Apr",
  },
  {
    image: img4,
    text: "7 Essentials to manage heavy workload",
    link: "/EssentialsToManage",
    day: "12",
    month: "Apr",
  },
];

function Blogs() {
  const [startFrom, setStartFrom] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState(
    staticBlogAsset.slice(startFrom, startFrom + 4)
  );

  function displayNextItems(currentStartingPoint) {
    let newStartingPoint = (currentStartingPoint + 4) % staticBlogAsset.length;
    let newBlogs = [];
    for (let i = 0; i < 4; i++) {
      newBlogs.push(
        staticBlogAsset[(newStartingPoint + i) % staticBlogAsset.length]
      );
    }
    setStartFrom(newStartingPoint);
    setCurrentBlogs(newBlogs);
  }
  function displayPreviousItems(currentStartingPoint) {
    let newStartingPoint = currentStartingPoint - 4;
    if (newStartingPoint < 0) newStartingPoint += staticBlogAsset.length;
    let newBlogs = [];
    for (let i = 0; i < 4; i++) {
      newBlogs.push(
        staticBlogAsset[(newStartingPoint + i) % staticBlogAsset.length]
      );
    }
    setStartFrom(newStartingPoint);
    setCurrentBlogs(newBlogs);
  }
  return (
    <div className="blogs-page min-h-screen">
      <h1 className="text-center text-3xl py-4">Blogs</h1>
      <div className="lg:w-4/5 lg:mx-auto">
        <div className="blog-cards flex flex-wrap gap-4 items-center justify-center xl:justify-evenly py-8">
          {currentBlogs.map((element) => {
            return (
              <div className="blog-card relative rounded-xl shadow-2xl">
                <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16">
                  {element.day} <br /> {element.month}
                </span>
                <img
                  src={element.image}
                  className="w-full rounded-t-xl object-contain"
                />
                <div className="flex items-center justify-center px-2 py-2">
                  <p>{element.text}</p>
                </div>
                <Link to={element.link}>
                  <button className="blog-button px-2 py-1 rounded-md mx-4">
                    Read More
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center space-x-20 text-2xl py-4">
          <div
            className="flex items-center space-x-2 previous cursor-pointer"
            onClick={() => {
              displayPreviousItems(startFrom);
            }}
          >
            <AiIcons.AiOutlineLeft />
            <p>Previous</p>
          </div>
          <div
            className="flex items-center space-x-2 next cursor-pointer"
            onClick={() => {
              displayNextItems(startFrom);
            }}
          >
            <p>Next</p>
            <AiIcons.AiOutlineRight />
          </div>
        </div>
        <h1 className="botw text-3xl text-center py-6">Blogs of the week</h1>
        <div className="blog-cards w-4/5 mx-auto lg:w-full lg:mx-0 flex flex-wrap gap-4 items-center justify-center lg:justify-evenly py-8">
          <div className="botw-card relative rounded-2xl shadow-2xl overflow-hidden">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center w-16 h-16 top-0 left-0">
              12 <br /> Apr
            </span>
            <img src={img6} className="w-full object-contain" />
            <div className="flex items-center justify-center px-2 py-2">
              <p className="text-xl">How Happy MindCan Create Wonders</p>
            </div>
            <Link to="/HowHappyMindCanCreateWonders">
              <button className="blog-button px-2 py-1 rounded-md mx-4">
                Read More
              </button>
            </Link>
          </div>
          <div className="botw-card relative rounded-2xl shadow-2xl overflow-hidden">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
              12 <br /> Apr
            </span>
            <img src={img5} className="w-full object-contain" />
            <div className="flex items-center justify-center px-2 py-2">
              <p className="text-xl">Healthy Lifestyle</p>
            </div>
            <Link to="/HealthyLifestyleOfAStudent">
              <button className="blog-button px-2 py-1 rounded-md mx-4 ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
