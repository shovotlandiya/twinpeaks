import React, { Component } from "react";

import FooterLogo from "../assets/Loggo.svg";
import Telegram from "../assets/telegram (3).svg";
import Faceebok from "../assets/facebook (4).svg";
import Instagram from "../assets/instagram (5).svg";
import FooterLayer from "../assets/Layer.svg";
import LinkId from "../assets/icons8-linkedin.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-footerColor p-6">
        <img
          className="h-auto max-w-sm w-full absolute left-0"
          src={FooterLayer}
          alt="LayerImage"
        />
        <div className="container mx-auto px-2 text-white flex justify-between items-center">
          <div>
            <img
              src={FooterLogo}
              className="h-auto "
              width={150}
              alt="FooterLogo"
            />
          </div>
          <nav className="hidden sm:block">
            <ul className="flex justify-between">
              <li>
                <a className="text-sm md:text-lg" href="/# ">
                  ABOUT US
                </a>
              </li>
              <li className="px-4 md:px-8">
                <a className="text-sm md:text-lg" href="/#">
                  WHAT WE DO
                </a>
              </li>
              <li>
                <a className="text-sm md:text-lg" href="/#">
                  PROJECTS
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <span className="container mx-auto border-t my-8 border-white w-full block"></span>
        <div className="container flex-row-reverse sm:flex-row mx-auto flex justify-between items-center mt-8">
          <h4 className="text-lg sm:text-xl font-inter text-white text-xl ">
            All rights reserved
          </h4>
          <ul className="flex justify-between items-center gap-6">
            {/* <li>
              <a href="" target="_blank">
                <img
                  className="h-auto max-w-12 w-full"
                  src={Telegram}
                  alt="telegram"
                />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.instagram.com/twinpeaks.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-auto max-w-12 w-full"
                  width={50}
                  src={Instagram}
                  alt="telegram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/twinpeaks-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-auto max-w-12 w-full"
                  width={50}
                  src={LinkId}
                  alt="telegram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
