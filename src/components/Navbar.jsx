import React, { useEffect, useState } from "react";
import NavbarLogo from "../assets/Logo.svg";
import SwiperImg from "../assets/swiper-img.jpg";

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
    <div className="h-screen  bg-cover bg-center">
      <div
        className={`fixed top-0 left-0 w-full p-3 duration-300  ${navbarClasses} `}
      >
        <div className="container mx-auto px-2 text-white flex justify-between items-center ">
          <div className="text-black text-2xl">
            <img src={NavbarLogo} width={150} height={100} alt="" />
          </div>
          <nav>
            <ul className="flex justify-between">
              <li className="pr-12 text-lg text-text-color duration-300 font-inter hover:text-black">
                <a href="#about">ABOUT US</a>
              </li>
              <li className="text-text-color text-lg duration-300 font-inter hover:text-black">
                <a href="#whatwedo">WHAT WE DO</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container  mx-auto flex flex-col  items-center pt-60">
        <div className="flex justify-between items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-7xl text-left font-inter customColor">
              Your Bespoke AI Solutions
            </h1>
            <p className="text-xl text-left font-inter customColor pt-4">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
          </div>
          <div>
            <img src={SwiperImg} alt="SwiperImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
