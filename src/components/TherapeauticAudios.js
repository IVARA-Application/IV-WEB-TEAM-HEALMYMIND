import React from "react";

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
          <button className="bg-white py-2 rounded-lg">Stress</button>
          <button className="bg-white py-2 rounded-lg">Anxiety</button>
          <button className="bg-white py-2 rounded-lg">Depression</button>
          <button className="bg-white py-2 rounded-lg">Anger-Management</button>
          <button className="bg-white py-2 rounded-lg">Feel-good</button>
          <button className="bg-white py-2 rounded-lg">Meditation</button>
          <button className="bg-white py-2 rounded-lg">Calming oneself</button>
          <button className="bg-white py-2 rounded-lg">
            When Under Pressure
          </button>
        </div>
      </div>
    </div>
  );
}

export default TherapeauticAudios;
