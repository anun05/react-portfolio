// import React, { useState } from "react";
// import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navigation from "./components/Navigation";

// function App() {
//   const [currentPage, setCurrentPage] = useState("About Me");

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === "About Me") {
//       return <About />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     return <Resume />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Header />
//       <Navigation
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }
// export default App;
import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Resume />
      <Footer />
    </main>
  );
}
