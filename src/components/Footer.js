import React from "react";

const footer = () => {
  return (
    <div className="divBox flex justify-around h-screen w-screen">
      <a
        className="flex justify-around h-1/4 w-1/4"
        href="https://github.com/anun05"
        target="blank"
      >
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
          alt="Github icon"
        />
      </a>
      <a
        className="flex justify-around h-1/4 w-1/4"
        href="https://www.linkedin.com/in/alex-nunez-9252601b1/"
        target="blank"
      >
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
          alt="LinkedIn icon"
        />
      </a>
      <a
        className="flex justify-around h-1/4 w-1/4"
        href="mailto:alexnunez957@gmail.com"
        target="blank"
      >
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg"
          alt="gmail"
        />
      </a>
    </div>
  );
};

export default footer;
