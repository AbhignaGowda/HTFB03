import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-2 gradient-bg-footer bottom-0 fixed">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-2">
      <div className="flex flex-[0.5] justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32" /> */}
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-2">
      <ul className="flex justify-center space-x-2">
        <li>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-400" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-gray-400" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-gray-400" />
          </a>
        </li>
        <li>
          <a href="mailto:info@example.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-gray-400" />
          </a>
        </li>
      </ul>
      <p className="text-white text-sm text-center">Experience the future of data access – join our network and elevate your insights!</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-2 " />
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-1">
      <p className="text-white text-left text-xs">@Nexxus2024</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
