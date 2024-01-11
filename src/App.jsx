import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <div
        className={`scroll-smooth bg-gradient-to-b from-cyan-50 via-transparent to-cyan-100/90 bg-fixed ${
          isNavOpen ? "overflow-hidden h-screen" : "min-h-screen"
        } `}
      >
        <Navbar toggleNav={toggleNav} isNavOpen={isNavOpen} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
