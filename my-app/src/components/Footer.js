import React from "react";
//import { ReactComponent as Logo } from "../../assets/github.svg";
//import { ReactComponent as Logo } from "../../assets/linkedin.svg";
//import { ReactComponent as Logo } from "../../assets/resume.svg";

const footer = () => {
  return (
    <div className="linksContainer">
      <a className="links" href="https://github.com/anun05" target="blank">
        <img src="" alt="Github icon" />
      </a>
      <a
        className="links"
        href="https://www.linkedin.com/in/alex-nunez-9252601b1/"
        target="blank"
      >
        <img src="./linkedin-logo-2430 (1).png" alt="LinkedIn icon" />
      </a>
      <a className="links" href="" target="blank">
        <img src="" alt="" />
      </a>
    </div>
  );
};

export default footer;
