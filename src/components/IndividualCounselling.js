import React from "react";
import img from "../img/counselling.png";
import left from "../img/leaf-left.png";
import right from "../img/leaf-right.png";

function IndividualCounselling() {
  return (
    <div className="counselling career min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl py-4">Individual Counselling</h1>
      <div className="flex flex-col justify-center items-center lg:flex-row 2xl:w-4/5 px-4 flex-wrap lg:py-20">
        <div className="counselling-left-text flex flex-col items-center justify-center">
          <p className="pr-12 px-8 xl:pr-36 main-text">
            With all the burden a student has to go through, it is important for
            a child to share his problems with someone, that someone from now on
            is HealMyMind. Here, the student can talk about anything and
            everything without the fear of being judged; be it family problems,
            issues with friends or teachers or any other thing, we provide full
            confidentiality and the support with our highly efficient team.
          </p>
          <img src={img} alt="" className="pt-8 py-4" />
        </div>
        <div className="form-container relative">
          <span className="absolute top-0 left-0 leaf">
            <img src={left} alt="" className="leaf-left" />
          </span>
          <span className="absolute top-0 leaf left-1/2">
            <img src={right} alt="" className="leaf-right" />
          </span>
          <div className="flex flex-col items-center  justify-center py-10 rounded-md shadow-xl">
            <form action="" className="w-4/5 m-auto z-10">
              <h1 className="text-center pb-12 text-xl">Register Here !</h1>
              <div className="grid grid-cols-2 space-y-4 text-black">
                <input
                  type="text"
                  placeholder="NAME"
                  className="col-span-2 px-2 rounded-md py-1 shadow"
                />
                <input
                  type="email"
                  placeholder="EMAIL ID"
                  className="col-span-2 px-2 py-1 rounded-md shadow"
                />
                <input
                  type="text"
                  placeholder="PHONE NUMBER"
                  className="col-span-2 px-2 py-1 rounded-md shadow"
                />
                <div className="col-span-1 ">
                  <p className="pointer-events-none bg-white py-1 px-2 text-gray-400 rounded-l-md">
                    PICK A DATE :
                  </p>
                </div>
                <input
                  type="Date"
                  className="col-span-1  py-1 text-gray-400 rounded-r-md shadow cursor-pointer"
                />
                <select
                  name=""
                  id=""
                  className="select-s cursor-pointer col-span-2 py-1 px-1 text-gray-400 rounded-md shadow"
                >
                  <option Defaultvalue>PICK SCHEDULE FOR SESSION</option>
                </select>
              </div>
              <p className="py-8 form-text">
                Session type: (Dropbox- Career Counselling, Personal Life,
                Parental Counselling)
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualCounselling;
