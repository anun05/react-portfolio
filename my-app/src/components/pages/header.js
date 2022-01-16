import React from "react";
import NavTabs from "./NavTabs";

const Header = ({ currentPage, handlePages }) => {
  return (
    <div className="headerContainer">
      <h1 className="headerH1">
        Hi .
        <br /> I am a <span className="span"> Junior Full-Stack Developer</span>
      </h1>
      <NavTabs currentPage={currentPage} handlePages={handlePages} />
    </div>
  );
};

export default Header;
