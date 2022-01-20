import React from "react";
import Alex from "../images/Alex Nunez.jpg";
// import resume from "file:///C:/Users/alexn/Downloads/resume%202.0.docx.pdf";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey! My name is Alejandro.
            <br className="hidden lg:inline-block" />I am a Software FullStack
            Web-Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I graudated from the University of California, Los Angeles, also
            known as UCLA, and received my BA in Polistcal Science. From here, I
            attened the Univeristy of Calidornia Riverside's Full
            Stack-developer Bootcamp and received a certification from here!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              I would love to get to know everyone, reach out to me, I am open
              to work!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              These are my past Projects's I have worked on. Some are done by
              me, others in groups.
            </a>
            {/* <a
              href="#resume"
              className=" ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Check out my<a href={resume}> Resume</a>
            </a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="this is me"
            src={Alex}
          />
        </div>
      </div>
    </section>
  );
}
