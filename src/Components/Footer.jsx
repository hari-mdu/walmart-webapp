import React from "react";
import { footLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto bg-[#0071dc] p-6 ">
        <div>
          <ul className="flex flex-wrap gap-x-5 justify-center text-white text-sm font-light">
            {footLinks.map((item) => (
              <Link to={item.path} key={item.id}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex justify-center py-5 text-white">
          <p>@ 2024 Walmart. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
