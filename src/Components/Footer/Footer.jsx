import React from "react";
import onlyLogo from "../assets/favilogo.png";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="reviews-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#495e57"
            fillOpacity="1"
            d="M0,96L80,80C160,64,320,32,480,53.3C640,75,800,149,960,154.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <footer className="footer" id="footer">
        <div className="footer-container">
          <div className="footer-details-container">
            <div className="footer-logo">
              <img src={onlyLogo} className="header_img" alt="Logo" />
            </div>
            <div className="footer-details">
              <div className="adress">
                <h1>Address:</h1>
                <p>6868 W. Pecan Ave., Suite #200, Chicago, IL 60654 USA.</p>
              </div>
              <div className="details">
                <h1>Details:</h1>
                <ul>
                  <li>Menu</li>
                  <li>Revervations</li>
                  <li>Time</li>
                </ul>
              </div>
              <div className="contactUs">
                <h1>Contact Us</h1>
                <p>+198-0183792</p>
                <p>LittleLemon@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div className="footer-socials">
            <div className="copyRights">
              <h1>
                © Copyright 2024 Powered By
                <a className='px-1' href="https://www.linkedin.com/in/abderaouf-khamoum-657527260/">
                  Khamoum Abderraouf
                </a>
              </h1>
            </div>

            <div className="socialMedia">
              <div className="facebook">
                <NavLink className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      fill="#f6f4fa"
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    />
                  </svg>
                </NavLink>
              </div>
              <div className="instagram">
                <NavLink className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#f5f5f5"
                      d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
                    />
                  </svg>
                </NavLink>
              </div>
              <div className="twitter">
                <NavLink className="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#fbfcfe"
                      d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}