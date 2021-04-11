import React from "react";
import img from "../img/blog.png";
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
          <h1 className="py-16 text-2xl">How Happy Mind Can Create Wonders</h1>
          <div className="overflow-y-scroll">
            <p className="px-4 max-h-96">
              The one who radiates happiness is the one who's very next to being
              the happiest. Are you also one of them who seeks paradise on
              earth? Well, it might be hard to picture a specific place as such.
              But, happiness is the road as well as the method to it. Happiness
              can do wonders! Many intellectuals and thinkers already explored
              the roots to happiness. Wherein, many of them portray it with
              their own glitters. Some shiny, some amazing. Also, the great
              psychologist Tal Ben-Shahar was one of the many thinkers to define
              'happiness'. "The overall experience of pleasure and meaning", as
              defined by him. Well, to be precise, happiness cannot stand alone
              without these two. As beautiful as it sounds, pleasure adds a
              meaning to happiness. Yet, it's very rare to find the appropriate
              mixture of the two. Let's see if we can get it. Happiness can be
              felt as well as radiated. Happiness isn't really on faces.
              Ironically, a smiling face may hide stories of gloom. But if
              you're truly happy, it can be reflected on your face too.
              Obviously, your smiles would be true and shining.
              <br />
              <span className="overline underline font-semibold">
                If you are facing certain traumas and mental illnesses, this may
                not help. Please remember to approach the respective
                authorities. Take help, take care!
              </span>
              The one who radiates happiness is the one who's very next to being
              the happiest. This is almost one of the best sayings ever. Which
              is, very much misinterpreted and misguided. Well, don't you think
              it's time to really see some of the wonders of being happy? That
              way, you could see why it's important for you to be happy. Also,
              always remember that everyone is capable of being happy. In spite
              of certain illnesses, this can prove to be quite true. Happiness
              can do wonders! How it impacts your health I bet you must have
              already been panicking about getting aged. Well, who's not? I
              mean, who even wants to have wrinkles and lines on their skin?
              Exactly, that's why you should be happy! Happiness can turn away
              some years for you! Yes, that's right. A happy mind reflects happy
              faces. Well, maybe not sure of the other way around. Actually, a
              happy mind decreases the rate of your ageing. Both mentally and
              physically. Have you seen old age people getting all the glow and
              smoothness of a person in her early 20s? This has been studied,
              experimented and proven by scientists. Now make sure you add this
              on your to-do list. That is, be happy. Happy mind and mental
              health It was on a news page. I still remember how amazing it was
              to see that. Well, it said that being happy can grow new neural
              circuits in the brain. Eventually, this helps to provide more
              gratitude, enthusiasm, resilience and optimism. Isn't it amazing
              how everything is connected! From your blood cells to your
              thoughts, which is what makes you up. Everyone has the capability
              to be resilient and happy at the same time. Unfortunately, not
              everyone can afford that. Well, there are reasons for that and not
              excuses. But, a happy mind assists all. It reduces stress, keeps
              you forward, physically healthy and above all, happy. That's what,
              happiness can do wonders! The way to success As said above, a
              happy mind leads the way towards resilience and optimism. An
              optimistic as well as a resilient approach towards anything can
              guarantee almost half the success to it. And, hardwork is a
              sidekick. If you're resilient enough, then you'll consequently be
              hard working. And thus, this is quite a pretty good and apt
              mixture of qualities. Certainly, it will lead you to succeed.
              Also, it's been published in "The How of Happiness" by Sonia
              Lyubomirsky. She well laid the connection between happiness and
              success. Indeed, it's worth the read! Do give it a read someday.
              Happiness can as well be the consequence of success. Of course, a
              well successful story will bring in happiness. But never forget,
              happiness is quite the cause of being successful. The cause can
              work in many arrays of life. Surely, it does have its
              consequences. A lifetime warranty Happiness will last forever,
              once figured out. It is, as said, a life-long pursuit. There
              exists a temporary form of happiness. Well, so does the life-long.
              Your work achievements and pay raise are temporary happiness. The
              life-long is hard to earn but not impossible though. Happily ever
              after, needs quite a long term commitment and hard work.
              Technically, it's not impossible. Literally, it's hard to achieve.
              Happiness is indeed contagious We have already talked a bit about
              happiness getting radiated. Now let's come in the details of it. A
              positive environment that you set for your people is a
              pleasure-to-be for many. We have no idea what exactly a person is
              going through. Certainly, there are so many of them who are
              suffering. Maybe, a little smile and comfort will make this place
              a bit bearable for them. It's your happiness that counts to make
              mine. Turns out, this is quite the reality for many. And these
              many are the ones who make happiness a contagious one. People find
              happiness in other beings or animals or things, which is quite
              healthy. Find yours and stay happy for the world counts on your
              happiness too. Of course, happiness can do wonders!
            </p>
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
            <button className="text-3xl shadow-md rounded-md">
              <AiIcons.AiOutlineCaretRight />
            </button>
          </div>
          <p className="px-12 py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            natus voluptatum, reprehenderit cupiditate mollitia rem ducimus
            laborum temporibus nobis veniam?
          </p>
        </div>
        <div className="right-side-blog flex flex-col items-center justify-center flex-1">
          <img src={img} alt="" />
          <div className="flex space-x-32 items-center text-2xl py-8">
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
