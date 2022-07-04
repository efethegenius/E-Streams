import React from "react";
import { TbMovie } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { RiSlideshow3Line } from "react-icons/ri";
import { BsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <BsFullscreen />
        <div className="nav-links">
          <Link to="/">
            <MdDashboard />
          </Link>

          <Link to="/movies">
            <TbMovie />
          </Link>
          <Link to="/series">
            <RiSlideshow3Line />
          </Link>
        </div>

        <div className="dp"></div>
      </div>
    </>
  );
};
