import React, { Component } from "react";

import FooterLogo from "../assets/Loggo.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-customColor p-6">
        <div className="container mx-auto px-2 text-white flex justify-between items-center">
          <div>
            <img src={FooterLogo} width={150} height={100} alt="FooterLogo" />
          </div>
          <nav>
            <ul className="flex justify-between">
              <li className="pr-12">
                <a href="/# pr-2">ABOUT US</a>
              </li>
              <li>
                <a href="/#">WHAT WE DO</a>
              </li>
            </ul>
          </nav>
        </div>
        <span className="container mx-auto border-t my-8 border-white w-full block"></span>
        <div className="container mx-auto flex justify-between items-center mt-8">
          <h4 className="font-inter text-white text-xl ">
            All rights reserved
          </h4>
          <ul className="flex justify-between items-center gap-6">
            <li>
              <a href="" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="text-white hover:text-pink-700 transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c-2.137 0-2.398.009-3.241.047-.84.038-1.414.177-1.935.37A3.906 3.906 0 0 0 1.519 1.52c-.192.52-.332 1.094-.37 1.934C1.112 4.296 1.103 4.558 1.103 6.696v2.608c0 2.137.009 2.398.047 3.241.038.84.177 1.414.37 1.935.195.52.458.978.928 1.448.47.47.928.733 1.448.928.52.195 1.095.333 1.935.371.844.038 1.104.047 3.241.047 2.137 0 2.398-.009 3.241-.047.84-.038 1.414-.176 1.935-.371.52-.195.978-.458 1.448-.928.47-.47.733-.928.928-1.448.195-.52.333-1.095.371-1.935.038-.843.047-1.104.047-3.241V6.696c0-2.137-.009-2.398-.047-3.241-.038-.84-.177-1.414-.37-1.935-.195-.52-.458-.978-.928-1.448A3.906 3.906 0 0 0 13.518.415c-.52-.193-1.095-.332-1.935-.37C10.398.009 10.137 0 8 0zm0 1.45c2.106 0 2.36.01 3.197.048.733.034 1.133.159 1.394.28.393.182.673.408.955.689.283.282.507.562.69.955.12.26.246.66.28 1.394.038.836.047 1.09.047 3.197s-.01 2.36-.047 3.197c-.034.733-.159 1.133-.28 1.394-.182.393-.408.673-.689.955-.282.283-.562.507-.955.69-.26.12-.66.246-1.394.28-.836.038-1.09.047-3.197.047s-2.36-.01-3.197-.047c-.733-.034-1.133-.159-1.394-.28a2.924 2.924 0 0 1-.955-.69 2.924 2.924 0 0 1-.689-.955c-.12-.26-.246-.66-.28-1.394-.038-.836-.047-1.09-.047-3.197s.01-2.36.047-3.197c.034-.733.159-1.133.28-1.394.182-.393.408-.673.689-.955.282-.283.562-.507.955-.69.26-.12.66-.246 1.394-.28C5.64 1.46 5.894 1.45 8 1.45zM8 3.898A4.102 4.102 0 1 0 8 12.1 4.102 4.102 0 0 0 8 3.898zm0 1.45a2.652 2.652 0 1 1 0 5.304A2.652 2.652 0 0 1 8 5.347zm3.766-.966a.959.959 0 1 1-1.919 0 .959.959 0 0 1 1.919 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourTwitterHandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="text-white hover:text-blue-600 transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14-.005-.281-.014-.42A6.684 6.684 0 0 0 16 3.542a6.573 6.573 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.59 6.59 0 0 1-2.084.797A3.281 3.281 0 0 0 7.88 6.029a9.32 9.32 0 0 1-6.767-3.431 3.266 3.266 0 0 0 1.015 4.367A3.281 3.281 0 0 1 .64 6.575v.041A3.283 3.283 0 0 0 3.277 9.86a3.28 3.28 0 0 1-1.485.056 3.283 3.283 0 0 0 3.067 2.282A6.588 6.588 0 0 1 0 13.026a9.29 9.29 0 0 0 5.031 1.473" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourLinkedInHandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="text-white hover:text-blue-900 transition-colors duration-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.725.725 0 0 1 0 14.854V1.146zm4.943 12.248V5.169H2.542v8.225h2.401zM3.743 4.21c-.837 0-1.357-.554-1.357-1.248 0-.703.533-1.248 1.387-1.248.855 0 1.357.546 1.369 1.248 0 .694-.514 1.248-1.369 1.248zM12.296 9.03c0-2.355-1.257-3.448-2.932-3.448-1.352 0-1.982.74-2.325 1.259V5.169H4.644c.03.827 0 8.225 0 8.225h2.395v-4.6c0-.245.018-.49.09-.662.196-.49.644-1.004 1.396-1.004.984 0 1.38.757 1.38 1.868v4.399h2.401V9.03h-.01z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
