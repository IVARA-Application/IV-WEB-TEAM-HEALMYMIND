import React, { useState } from "react";
import card1 from "../img/blogs-card1.png";
import card2 from "../img/blogs-card2.png";
import card3 from "../img/blogs-card3.png";
import card4 from "../img/blogs-card4.png";
import card5 from "../img/botw-card1.png";
import card6 from "../img/botw-card2.png";
import * as AiIcons from "react-icons/ai";

const staticBlogAsset = [
  {
    image: "https://picsum.photos/id/1000/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "30",
    month: "Jan",
  },
  {
    image: "https://picsum.photos/id/503/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "02",
    month: "Feb",
  },
  {
    image: "https://picsum.photos/id/669/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "13",
    month: "Feb",
  },
  {
    image: "https://picsum.photos/id/800/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "05",
    month: "Mar",
  },
  {
    image: "https://picsum.photos/id/777/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "05",
    month: "Apr",
  },
  {
    image: "https://picsum.photos/id/123/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "30",
    month: "May",
  },
  {
    image: "https://picsum.photos/id/875/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "30",
    month: "Dec",
  },
  {
    image: "https://picsum.photos/id/654/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "30",
    month: "Jul",
  },
  {
    image: "https://picsum.photos/id/221/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "30",
    month: "Jun",
  },
  {
    image: "https://picsum.photos/id/101/300/200",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus scelerisque arcu ut eros.",
    link: "",
    day: "30",
    month: "May",
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
                <img src={element.image} className="w-full object-contain" />
                <div className="flex items-center justify-center px-2 py-2">
                  <p>{element.text}</p>
                </div>
                <button className="blog-button px-2 py-1 rounded-md mx-4 ">
                  Read More
                </button>
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
          <div className="botw-card relative rounded-2xl shadow-2xl">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center w-16 h-16 top-0 left-0">
              30 <br /> Jan
            </span>
            <img src={card5} className="w-full object-contain" />
            <div className="flex items-center justify-center px-2 py-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                scelerisque arcu ut eros.
              </p>
            </div>
            <button className="blog-button px-2 py-1 rounded-md mx-4">
              Read More
            </button>
          </div>
          <div className="botw-card relative rounded-2xl shadow-2xl">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
              30 <br /> Jan
            </span>
            <img src={card6} className="w-full object-contain" />
            <div className="flex items-center justify-center px-2 py-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                scelerisque arcu ut eros.
              </p>
            </div>
            <button className="blog-button px-2 py-1 rounded-md mx-4 ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
