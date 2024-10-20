import React, { Component } from "react";

import AIImage from "../assets/icons web 4.png";
import Triangle from "../assets/triangle.png";

export default class Welcome extends Component {
  render() {
    return (
      <div id="about" className="w-screen flex items-center bg-white p-8">
        <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center">
          <div>
            <img
              width={550}
              src={AIImage}
              alt="Image"
              className="shadow-custom object-cover"
            />
          </div>
          <div className="max-w-2xl  text-start">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left pb-4 font-semibold font-inter text-text-color">
              Welcome to TwinPeaks.ai{" "}
            </h2>
            <p className="text-sm lg:text-lg font-inter  text-text-value text-center lg:text-left text-opacity-75">
              At TwinPeaks.ai, we are pioneers in providing innovative AI
              solutions and systems across a range of industries. Our expertise
              in artificial intelligence empowers businesses to not only meet
              the ever-evolving demands of the digital age but to excel at them.
              From enhancing operational efficiency to unlocking new growth
              opportunities, our tailored AI services are designed to bring your
              company to the forefront of technology.
            </p>
            <div>
              <div className="flex justify-between items-center flex-col gap-4 mt-4">
                <div className="shadow-custom-multi p-3 rounded-md p-3 duration-500 border-2 hover:border-text-color">
                  <h3 className="text-xl text-center lg:text-left font-semibold font-inter mb-1 text-header-color">
                    Our mission
                  </h3>
                  <p className="text-sm lg:text-lg  font-inter text-gray-500 text-opacity-75 duration-500 hover:text-text-color">
                    Our mission is to transform businesses through AI. We create
                    custom solutions that enhance performance and drive growth,
                    utilizing cutting-edge technology to solve complex
                    challenges.
                  </p>
                </div>
                <div className="shadow-custom-multi rounded-md p-3 duration-500 border-2 hover:border-text-color">
                  <h3 className="text-xl text-center lg:text-left  font-semibold font-inter mb-1 text-header-color">
                    Our values
                  </h3>
                  <p className="text-sm lg:text-lg font-inter text-gray-500 text-opacity-75 duration-500 hover:text-text-color">
                    Innovation, reliability, and excellence are at the core of
                    TwinPeaks.ai. We strive for the highest standards in every
                    project, ensuring sustainable success and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
