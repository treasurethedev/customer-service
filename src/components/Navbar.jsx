import logoOne from "../assets/logos/Full Colour/Full Colour.png";
import PropTypes from "prop-types";
function Navbar({ toggleNav, isNavOpen }) {
  return (
    <>
      <header className="hidden md:block max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between w-[85%] mx-auto relative px-3 py-3 border border-slate-200 rounded-md top-6">
          <div>
            <img src={logoOne} className="w-44  object-cover" alt="" />
          </div>
          <nav className="2xl:text-xl space-x-4 justify-self-start">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#faqs">FAQ</a>
          </nav>
          <div className="justify-self-end">
            <button
              type="button"
              className="bg-primary hover:scale-105 transition-all px-3 py-2 md:px-5 md:py-3 rounded text-white font-medium mx-auto flex"
            >
              Get a quote
            </button>
          </div>
        </div>
      </header>

      <header className="relative md:hidden">
        <div className="flex items-end justify-between w-[90%] mx-auto relative px-3 py-3 border border-slate-200 rounded-md top-6">
          <img src={logoOne} className="w-40 object-cover" alt="" />
          <div onClick={toggleNav} className="transition-all  my-auto">
            {!isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6  ${
                  isNavOpen ? "z-[10000] fixed right-9 top-10" : "static"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
        <div
          className={`mobile-nav flex bg-gradient-to-b from-cyan-50 via-white to-cyan-200 items-center justify-center transition-all w-screen h-screen overflow-hidden fixed z-10 ${
            isNavOpen ? "left-0 top-0 pt-28" : "left-[100vw]"
          } `}
        >
          <div className="text-slate-800 text-xl w-full px-8">
            <nav className="flex flex-col space-y-8">
              <a onClick={toggleNav} href="#about">
                About
              </a>
              {/*  */}
              <a onClick={toggleNav} href="#services">
                Services
              </a>
              <a onClick={toggleNav} href="#pricing">
                Pricing
              </a>
              <a onClick={toggleNav} href="#faqs">
                FAQs
              </a>
            </nav>
            <div className="flex flex-col space-y-3 my-16">
              <a
                className="text-center rounded-lg px-4 py-3 bg-primary text-white"
                href=""
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};
