import React, { useState } from "react";
import { TbMovie } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { RiSlideshow3Line } from "react-icons/ri";
import { BsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaGithubAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import Avatar from "../Photos/image-avatar.jpeg";
import Home from "../Photos/logo512.png";

export const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img src={Home} alt="home" className="home-btn" />
        </Link>

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

        <img
          src={Avatar}
          alt="avatar"
          className="avatar"
          onClick={() => setShowProfile(!showProfile)}
        />
        <div
          className={
            showProfile ? "profile-container show-profile" : "profile-container"
          }
          onClick={() => setShowProfile(!showProfile)}
        >
          <div className="profile-wrapper">
            <img src={Avatar} alt="avatar" className="avatar profile-avatar" />
            <h1>Efe Samuel</h1>
            <p>
              <GoPrimitiveDot />
            </p>
            <p>
              <a
                href="https://efesamuel.tech/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit my portfolio <FaExternalLinkAlt />
              </a>
            </p>
            <p>
              <a
                href="https://github.com/efethegenius/E-Streams"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit Github Repo of this project <FaExternalLinkAlt />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
