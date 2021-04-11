import React from "react";
import we from "../img/about-us-24x7.png";
import chat from "../img/about-us-chat.png";
import live from "../img/about-us-live.png";
import events from "../img/about-us-events.png";

function AboutUs() {
  return (
    <div className="about-us lg:w-4/5 m-auto py-12">
      <h1 className="text-center text-2xl lg:text-3xl py-4">About Us</h1>
      <p className="text-lg lg:text-2xl px-4 pb-4 lg:w-1/2 lg:mx-auto text-center lg:main-text">
        HealMyMind is a platform that focuses on mental health and its
        attributes, which will in turn result in the overall development of a
        being. We provide full confidentiality to each of our students, so that
        they do not have a fear of bring judged by the society. Mental health
        being a very important aspect of a child's growth, HealMyMind focuses on
        covering every need of the child mentally with its programs.
      </p>
      <div className="cards flex flex-wrap items-center justify-evenly gap-2 text-center text-xl py-4 space-y-2 lg:space-y-0">
        <div className="card card1 flex flex-col items-center justify-center w-56 rounded-tl-3xl rounded-br-3xl rounded-md py-4 px-2">
          <img src={we} alt="" />
          <h1>We For You 24x7</h1>
        </div>
        <div className="card card2 flex flex-col items-center justify-center w-56 rounded-tl-3xl rounded-br-3xl rounded-md py-4 px-2">
          <img src={chat} alt="" />
          <h1>Chat Anonymously</h1>
        </div>
        <div className="card card3 flex flex-col items-center justify-center w-56 rounded-tl-3xl rounded-br-3xl rounded-md py-4 px-2">
          <img src={live} alt="" />
          <h1>Live Sessions</h1>
        </div>
        <div className="card card4 flex flex-col items-center justify-center w-56 rounded-tl-3xl rounded-br-3xl rounded-md py-4 px-2">
          <img src={events} alt="" />
          <h1>Events</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
