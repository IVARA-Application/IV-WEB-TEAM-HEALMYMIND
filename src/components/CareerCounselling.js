import React from "react";
import img from "../img/counselling.png";
import left from "../img/leaf-left.png";
import right from "../img/leaf-right.png";

function CareerCounselling() {
  return (
    <div className="counselling career min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl py-4">Career Counselling</h1>
      <div className="flex flex-col justify-center items-center lg:flex-row 2xl:w-4/5 px-4 mx-auto flex-wrap lg:py-20">
        <div className="counselling-left-text flex flex-col items-center justify-center">
          <p className="pr-12 text-lg px-8 xl:pr-36 main-text">
            With the rat race amongst the students regarding their careers, it
            is often seen that a child is in a dilemma regarding their careers.
            This is where HealMyMind's career counseling comes into service. We
            provide our students with the perfect guidance from our most
            experienced and talented counselors, and all the materials that are
            needed to go forward with.
          </p>
          <img src={img} alt="" className="pt-8 py-4" />
        </div>
        <div className="form-container relative">
          <div className="flex flex-col items-center relative justify-center py-10 rounded-md shadow-xl">
            <img
              src={left}
              alt=""
              className="absolute right-1/2 leaf leaf-left"
            />
            <img
              src={right}
              alt=""
              className="absolute left-1/2 leaf leaf-right"
            />
            <form action="" className="w-4/5 m-auto">
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
                <div className="col-span-1">
                  <p className="pointer-events-none bg-white py-1 px-2 text-gray-400 rounded-l-md">
                    PICK A DATE :
                  </p>
                </div>
                <input
                  type="Date"
                  className="col-span-1 py-1 text-gray-400 rounded-r-md shadow cursor-pointer"
                />
                <select
                  name=""
                  id=""
                  className="cursor-pointer col-span-2 py-1 px-1 text-gray-400 rounded-md shadow"
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

export default CareerCounselling;
