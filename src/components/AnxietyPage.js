import React from "react";
import img from "../img/audioboy.png";
import * as faicons from "react-icons/fa";
import * as imicons from "react-icons/im";
import * as biicons from "react-icons/bi";

function anxietypage() {
  return (
    <div className="anxiety-page min-h-screen">
      <div className="lg:w-4/5 mx-auto">
        <h1 className="text-center text-xl lg:text-3xl py-4">
          Anxiety (Total number of 8 pages)
        </h1>
        <div className="flex flex-wrap justify-center items-center py-8 2xl:py-20">
          <div className="space-y-2 lg:space-y-8 py-2 flex-1 anxiety-left-side">
            <div className="bg-white mx-2 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center text-2xl px-4 space-x-2">
                  <h2 className="text-2xl">Audio1</h2>
                  <faicons.FaPlayCircle className="play-button" />
                </div>
                <div className="controls flex flex-col items-center justify-center">
                  <div className="flex text-3xl py-2 space-x-4">
                    <biicons.BiChevronsLeft className="seek-left" />
                    <imicons.ImPause className="pause-button" />
                    <biicons.BiChevronsRight className="seek-right" />
                  </div>
                  <div className="flex items-center">
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white mx-2 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center text-2xl px-4 space-x-2">
                  <h2 className="text-2xl">Audio2</h2>
                  <faicons.FaPlayCircle className="play-button" />
                </div>
                <div className="controls flex flex-col items-center justify-center">
                  <div className="flex text-3xl py-2 space-x-4">
                    <biicons.BiChevronsLeft className="seek-left" />
                    <imicons.ImPause className="pause-button" />
                    <biicons.BiChevronsRight className="seek-right" />
                  </div>
                  <div className="flex items-center">
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white mx-2 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center text-2xl px-4 space-x-2">
                  <h2 className="text-2xl">Audio3</h2>
                  <faicons.FaPlayCircle className="play-button" />
                </div>
                <div className="controls flex flex-col items-center justify-center">
                  <div className="flex text-3xl py-2 space-x-4">
                    <biicons.BiChevronsLeft className="seek-left" />
                    <imicons.ImPause className="pause-button" />
                    <biicons.BiChevronsRight className="seek-right" />
                  </div>
                  <div className="flex items-center">
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white mx-2 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center text-2xl px-4 space-x-2">
                  <h2 className="text-2xl">Audio4</h2>
                  <faicons.FaPlayCircle className="play-button" />
                </div>
                <div className="controls flex flex-col items-center justify-center">
                  <div className="flex text-3xl py-2 space-x-4">
                    <biicons.BiChevronsLeft className="seek-left" />
                    <imicons.ImPause className="pause-button" />
                    <biicons.BiChevronsRight className="seek-right" />
                  </div>
                  <div className="flex items-center">
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white mx-2 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center text-2xl px-4 space-x-2">
                  <h2 className="text-2xl">Audio5</h2>
                  <faicons.FaPlayCircle className="play-button" />
                </div>
                <div className="controls flex flex-col items-center justify-center">
                  <div className="flex text-3xl py-2 space-x-4">
                    <biicons.BiChevronsLeft className="seek-left" />
                    <imicons.ImPause className="pause-button" />
                    <biicons.BiChevronsRight className="seek-right" />
                  </div>
                  <div className="flex items-center">
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white mx-2 rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center text-2xl px-4 space-x-2">
                  <h2 className="text-2xl">Audio6</h2>
                  <faicons.FaPlayCircle className="play-button" />
                </div>
                <div className="controls flex flex-col items-center justify-center">
                  <div className="flex text-3xl py-2 space-x-4">
                    <biicons.BiChevronsLeft className="seek-left" />
                    <imicons.ImPause className="pause-button" />
                    <biicons.BiChevronsRight className="seek-right" />
                  </div>
                  <div className="flex items-center">
                    <input type="range" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="anxiety-right-side object-contain">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default anxietypage;
