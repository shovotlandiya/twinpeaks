import React, { useEffect, useState } from "react";
import NavbarLogo from "../assets/TwinPeaks.ai_logo_ 133d4a.svg";
import SwiperImg from "../assets/swiper-img.jpg";
import Triangle from "../assets/triangle.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrolled ? "bg-white shadow-lg" : "bg-transparent";
  return (
    <div className="h-screen  bg-cover bg-center ">
      <img className="absolute right-0 " src={Triangle} alt="triangle" />
      <div
        className={`fixed top-0 left-0 w-full p-3 duration-300  ${navbarClasses} `}
      >
        <div className="container mx-auto px-2 text-white flex justify-between items-center ">
          <div className="text-black text-2xl">
            <img src={NavbarLogo} width={150} height={100} alt="" />
          </div>
          <nav>
            <ul className="flex justify-between">
              <li className=" text-lg text-text-color duration-300 font-inter hover:text-black">
                <a href="#about">ABOUT US</a>
              </li>
              <li className="text-text-color mx-6 text-lg duration-300 font-inter hover:text-black">
                <a href="#whatwedo">WHAT WE DO</a>
              </li>
              <li className="text-text-color  text-lg duration-300 font-inter hover:text-black">
                <a href="#projects">PROJECTS</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container  mx-auto flex flex-col  items-center pt-72">
        <div className="flex justify-between items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-7xl text-left font-inter customColor">
              Your Bespoke AI Solutions
            </h1>
          </div>
          <div className="text-left ">
            <p className="text-xl text-left font-inter customColor pt-4 mb-4">
              Transforming industries with AI: from smart infrastructure to
              advanced automation, we drive innovation and growth through
              tailored AI solutions
            </p>
            <button className="bg-footerColor py-2 px-6  text-white rounded-sm">
              Get in Touch
            </button>
          </div>
        </div>
        <span className="container mx-auto border-t my-8 border-footerColor w-full block"></span>
        {/* <div className="flex items-center justify-around">
          <div>
            <p>World-class expertise</p>
          </div>
          <div>
            <p>Tailored AI solutions</p>
          </div>
          <div>
            <p>Highly skilled professionals</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
