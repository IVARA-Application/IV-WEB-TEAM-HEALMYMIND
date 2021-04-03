import React from "react";
import card1 from "../img/blogs-card1.png";
import card2 from "../img/blogs-card2.png";
import card3 from "../img/blogs-card3.png";
import card4 from "../img/blogs-card4.png";
import card5 from "../img/botw-card1.png";
import card6 from "../img/botw-card2.png";
import * as AiIcons from "react-icons/ai";

function Blogs() {
  return (
    <div className="blogs-page min-h-screen">
      <h1 className="text-center text-3xl py-4">Blogs</h1>
      <div className="lg:w-4/5 lg:mx-auto">
        <div className="blog-cards flex flex-wrap gap-4 items-center justify-center xl:justify-evenly py-8">
          <div className="blog-card relative rounded-xl shadow-2xl">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16">
              30 <br /> Jan
            </span>
            <img src={card1} className="w-full object-contain" />
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
          <div className="blog-card relative rounded-xl shadow-2xl">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
              30 <br /> Jan
            </span>
            <img src={card2} className="w-full object-contain" />
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
          <div className="blog-card relative rounded-xl shadow-2xl">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
              30 <br /> Jan
            </span>
            <img src={card3} className="w-full object-contain" />
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
          <div className="blog-card relative rounded-xl shadow-2xl">
            <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
              30 <br /> Jan
            </span>
            <img src={card4} className="w-full object-contain" />
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
        <div className="flex justify-center space-x-20 text-2xl py-4">
          <div className="flex items-center space-x-2 previous">
            <AiIcons.AiOutlineLeft />
            <p>Previous</p>
          </div>
          <div className="flex items-center space-x-2 next">
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
