import React from "react";

import ExampleImage from "../assets/markets.png";

export default function ProjectCard() {
  return (
    <div id="projects" className="w-screen h-screen container mx-auto">
      <h3 className="my-5 max-w-2xl  font-inter text-4xl text-footerColor  text-left">
        We work with you to build smarter products and businesses.
      </h3>
      <span className="container mx-auto border-t my-8 border-footerColor w-full block"></span>
      <div className="flex-col flex lg:flex-row justify-between  items-center gap-5">
        <div className="text-left p-5 ">
          <h4 className=" text-left">Project 1</h4>
          <img
            className="my-3 object-cover transform transition duration-300 hover:scale-110"
            src={ExampleImage}
            alt="exampleImage"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ut
            aspernatur. Et accusamus dicta sequi!
          </p>
          <div className="flex gap-4">
            <span className="rounded-2xl border-2 border-footerColor py-1 px-2 font-inter text-fontText ">
              AUTOMATIVE
            </span>
            <span className="rounded-2xl border-2 border-footerColor py-1 px-2 font-inter text-fontText ">
              GENERATIVE AI
            </span>
          </div>
        </div>
        <div className="text-left p-5 ">
          <h4 className="text-left">Project 1</h4>
          <img className="my-3" src={ExampleImage} alt="exampleImage" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ut
            aspernatur. Et accusamus dicta sequi!
          </p>

          <div className="flex gap-4">
            <span className="rounded-2xl border-2 border-footerColor py-1 px-2 font-inter text-fontText ">
              AUTOMATIVE
            </span>
            <span className="rounded-2xl border-2 border-footerColor py-1 px-2 font-inter text-fontText ">
              GENERATIVE AI
            </span>
          </div>
        </div>
        <div className="text-left p-5 ">
          <h4 className="">Project 1</h4>
          <img className="my-3" src={ExampleImage} alt="exampleImage" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ut
            aspernatur. Et accusamus dicta sequi!
          </p>
          <div className="flex gap-4">
            <span className="rounded-2xl border-2 border-footerColor py-1 px-2 font-inter text-fontText ">
              AUTOMATIVE
            </span>
            <span className="rounded-2xl border-2 border-footerColor py-1 px-2 font-inter text-fontText ">
              GENERATIVE AI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
