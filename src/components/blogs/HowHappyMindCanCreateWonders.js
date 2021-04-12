import React from "react";
import img from "../../img/img6.jpeg";
import * as AiIcons from "react-icons/ai";

function Blog1() {
  return (
    <div className="blog min-h-screen xl:relative bg-yellow-400 flex items-center justify-center">
      <span className="yellow-line hidden xl:block h-screen w-1/4 float-left"></span>
      <span className="red-line h-screen hidden xl:block w-1/4 float-left"></span>
      <span className="yellow-line h-screen hidden xl:block w-1/4 float-left"></span>
      <span className="red-line h-screen hidden xl:block w-1/4 float-right"></span>
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            30 <br /> Jan
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl">
            How Happy Mind Can Create Wonders
          </h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                <strong>
                  The one who radiates happiness is the one who's very next to
                  being the happiest.
                </strong>
              </p>
              <p>
                Are you also one of them who seeks paradise on earth? Well, it
                might be hard to picture a specific place as such. But,
                happiness is the road as well as the method to it. Happiness can
                do wonders!
              </p>
              <p>
                Many intellectuals and thinkers already explored the roots to
                happiness. Wherein, many of them portray it with their own
                glitters. Some shiny, some amazing. Also, the great psychologist
                Tal Ben-Shahar was one of the many thinkers to define
                'happiness'. "The overall experience of pleasure and meaning",
                as defined by him.
              </p>
              <p>
                Well, to be precise, happiness cannot stand alone without these
                two. As beautiful as it sounds, pleasure adds a meaning to
                happiness. Yet, it's very rare to find the appropriate mixture
                of the two. Let's see if we can get it.
              </p>
              <p>
                <strong> Happiness can be felt as well as radiated.</strong>
              </p>
              <p>
                Happiness isn't really on faces. Ironically, a smiling face may
                hide stories of gloom. But if you're truly happy, it can be
                reflected on your face too. Obviously, your smiles would be true
                and shining.
              </p>
              <p className="border-t-2 border-gray-400 border-b-2 italic">
                If you are facing certain traumas and mental illnesses, this may
                not help. Please remember to approach the respective
                authorities. Take help, take care!
              </p>
              <p className="italic">
                The one who radiates happiness is the one who's very next to
                being the happiest.
              </p>
              <p>
                This is almost one of the best sayings ever. Which is, very much
                misinterpreted and misguided. Well, don't you think it's time to
                really see some of the wonders of being happy? That way, you
                could see why it's important for you to be happy. Also, always
                remember that everyone is capable of being happy. In spite of
                certain illnesses, this can prove to be quite true.{" "}
              </p>
              <p>
                <strong>Happiness can do wonders! </strong>
              </p>
              <p>
                <strong>How it impacts your health</strong>
              </p>
              <p>
                I bet you must have already been panicking about getting aged.
                Well, who's not? I mean, who even wants to have wrinkles and
                lines on their skin? Exactly, that's why you should be happy!
                Happiness can turn away some years for you! Yes, that's right.{" "}
              </p>
              <p>
                I bet you must have already been panicking about getting aged.
                Well, who's not? I mean, who even wants to have wrinkles and
                lines on their skin? Exactly, that's why you should be happy!
                Happiness can turn away some years for you! Yes, that's right.{" "}
              </p>
              <p>
                <strong>Happy mind and mental health</strong>
              </p>
              <p>
                It was on a news page. I still remember how amazing it was to
                see that. Well, it said that being happy can grow new neural
                circuits in the brain. Eventually, this helps to provide more
                gratitude, enthusiasm, resilience and optimism. Isn't it amazing
                how everything is connected! From your blood cells to your
                thoughts, which is what makes you up.{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center py-6 border-t-4 my-2 border-yellow-400">
            <textarea
              placeholder="Comment Here"
              name=""
              id=""
              cols="25"
              rows="1"
              className="resize-none rounded-md shadow-md"
            ></textarea>
            <button className="text-3xl rounded-md">
              <AiIcons.AiOutlineCaretRight />
            </button>
          </div>
        </div>
        <div className="right-side-blog flex flex-col items-center justify-center flex-1 py-4 lg:py-0">
          <img src={img} alt="" className="rounded-md" />
          <div className="flex space-x-16 lg:space-x-32 items-center text-2xl py-8">
            <div
              className="flex items-center space-x-2 next cursor-pointer"
              //   onClick={() => {
              //     displayPreviousItems(startFrom);
              //   }}
            >
              <AiIcons.AiOutlineLeft />
              <p>Previous</p>
            </div>
            <div
              className="flex items-center space-x-2 text-white cursor-pointer"
              //   onClick={() => {
              //     displayNextItems(startFrom);
              //   }}
            >
              <p>Next</p>
              <AiIcons.AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
