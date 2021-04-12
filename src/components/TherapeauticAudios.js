import React from "react";
import { Howl, Howler } from "howler";
const audioArray = [
  new Howl({
    src: "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/aud1.aac",
    html5: true,
    format: ["aac"],
  }),
  new Howl({
    src: "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/aud2.aac",
    html5: true,
    format: ["aac"],
  }),
  new Howl({
    src: "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/aud3.aac",
    html5: true,
    format: ["aac"],
  }),
  new Howl({
    src: "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/aud4.aac",
    html5: true,
    format: ["aac"],
  }),
];
const audioStatusArray = [];
audioArray.forEach((_) => {
  audioStatusArray.push(false);
});

function playAudio(number, element) {
  if (audioStatusArray[number]) {
    audioArray[number].pause();
    audioStatusArray[number] = false;
    element.classList.remove("font-bold");
    return;
  }
  audioArray[number].play();
  audioStatusArray[number] = true;
  element.classList.add("font-bold");
}

function TherapeauticAudios() {
  return (
    <div className="therapeautic min-h-auto">
      <h1 className="text-center text-xl md:text-3xl py-4 md:py-8 xl:py-8">
        Therapeautic Audios
      </h1>
      <div className="py-8 md:py-20 lg:py-12 xl:py-16 2xl:py-28 w-4/5 mx-auto">
        <p className="text-center text-lg pb-2 main-text xl:px-40">
          Sometimes, we don't wish to talk to anyone regarding our problems. All
          we need is something soothing to get through the phase alone.
          HealMyMind presents Therapeutic audios for each mental health problem
          you may be going through, or even when you just want to relief your
          stress of work, home, etc.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 gap-4 py-12 2xl:py-28 text-xl">
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(0, event.currentTarget);
            }}
          >
            Stress
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(1, event.currentTarget);
            }}
          >
            Anxiety
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(2, event.currentTarget);
            }}
          >
            Depression
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(3, event.currentTarget);
            }}
          >
            Anger-Management
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(0, event.currentTarget);
            }}
          >
            Feel-good
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(1, event.currentTarget);
            }}
          >
            Meditation
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(2, event.currentTarget);
            }}
          >
            Calming oneself
          </button>
          <button
            className="bg-white py-2 rounded-lg"
            onClick={(event) => {
              playAudio(3, event.currentTarget);
            }}
          >
            When Under Pressure
          </button>
        </div>
      </div>
    </div>
  );
}

export default TherapeauticAudios;
