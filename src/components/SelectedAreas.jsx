import React, { Component } from "react";

import FirstImage from "../assets/icons web 1.png";
import SecondImage from "../assets/icons web 2.png";
import ThirdImage from "../assets/icons web 3.png";

export default class SelectedAreas extends Component {
  render() {
    return (
      <div id="whatwedo" className="w-screen h-screen">
        <div className="w-full">
          <div className="container mx-auto z-100 ">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl py-8 font-semibold font-inter text-center text-text-color">
              Selected Areas
            </h3>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="rounded-lg p-8 text-justify">
                <img
                  className="w-full  aspect-w-1 h-full object-cover  duration-300 hover:scale-105"
                  src={FirstImage}
                  alt=""
                />
                <h3 className="text-2xl my-2  font-semibold font-inter text-header-color">
                  Industrial Applications
                </h3>
                <p className="text-lg text-gray-500 text-opacity-75 font-inter">
                  Our AI solutions enhance operational efficiency and predictive
                  maintenance in industrial settings, ensuring seamless
                  production and higher uptime for critical machinery.
                </p>
              </div>
              <div className=" rounded-lg p-8 text-justify">
                {" "}
                <img
                  className="w-full aspect-w-1 h-full object-cover  duration-300 hover:scale-105"
                  src={SecondImage}
                  alt=""
                />
                <h3 className=" text-header-color text-2xl my-2  font-semibold font-inter">
                  Retail and Markets
                </h3>
                <p className="text-lg text-gray-500 text-opacity-75 font-inter">
                  We deliver AI-driven analytics and customer experience
                  enhancements for the retail sector, optimizing inventory
                  management and personalizing shopping experiences.
                </p>
              </div>
              <div className=" rounded-lg p-8 text-justify z-100000">
                {" "}
                <img
                  className="w-full aspect-w-1 h-full object-cover  duration-300 hover:scale-105"
                  src={ThirdImage}
                  alt="bnma"
                />
                <h3 className="text-2xl my-2 text-header-color font-semibold font-inter">
                  Service Providers
                </h3>
                <p className="text-lg text-gray-500 text-opacity-75 font-inter">
                  Our AI services extend to service-oriented businesses,
                  providing smart automation and data-driven decision support to
                  improve service delivery and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
