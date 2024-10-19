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
            <a href="/#">
              <img src={NavbarLogo} width={150} height={100} alt="" />
            </a>
          </div>
          <nav>
            <ul className="flex justify-between  ">
              <li className="text-xs sm:text-lg text-text-color duration-300 font-inter hover:text-black">
                <a href="#about">ABOUT US</a>
              </li>
              <li className="text-text-color sm:text-lg mx-6 text-xs duration-300 font-inter hover:text-black">
                <a href="#whatwedo">WHAT WE DO</a>
              </li>
              <li className="text-text-color sm:text-lg  text-xs duration-300 font-inter hover:text-black">
                <a href="#projects">PROJECTS</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container  mx-auto flex flex-col  items-center pt-72">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-left font-inter customColor">
              Your Bespoke AI Solutions
            </h1>
          </div>
          <div className="text-center lg:text-left ">
            <p className="text-sm lg:text-xl text-center lg:text-left font-inter customColor lg:pt-4 mb-4">
              Transforming industries with AI: from smart infrastructure to
              advanced automation, we drive innovation and growth through
              tailored AI solutions
            </p>
            <button className="bg-footerColor py-2 px-6  text-white rounded-sm">
              Get in Touch
            </button>
          </div>
        </div>

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
