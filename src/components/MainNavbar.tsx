import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className=" bg-white border-gray-200 z-30 shadow drop-shadow-md">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">TaxGuides360</span>
        </Link>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none">Register</a>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link to="/"  className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Home</Link>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button-mobile"
                  data-dropdown-toggle="mega-menu-dropdown-mobile"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-mobile" className={`md:hidden ${isMegaMenuOpen ? 'block' : 'hidden'} w-full text-sm bg-white border border-gray-100 rounded-lg  `}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button-mobile">
                      <li>
                        <a href="#" className="text-gray-500 z-30 hover:text-blue-600">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button-mobile"
                  data-dropdown-toggle="mega-menu-dropdown-mobile"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-mobile" className={`md:hidden ${isMegaMenuOpen ? 'block' : 'hidden'} w-full text-sm bg-white border border-gray-100 rounded-lg  `}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button-mobile">
                      <li>
                        <a href="#" className="text-gray-500 z-30 hover:text-blue-600">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button-mobile"
                  data-dropdown-toggle="mega-menu-dropdown-mobile"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-mobile" className={`md:hidden ${isMegaMenuOpen ? 'block' : 'hidden'} w-full text-sm bg-white border border-gray-100 rounded-lg  `}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button-mobile">
                      <li>
                        <a href="#" className="text-gray-500 z-30 hover:text-blue-600">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div id="mega-menu" className={`hidden md:flex md:items-center md:w-auto md:order-1 ${isMegaMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 " aria-current="page">Home</a>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 "
                  onClick={toggleMegaMenu}
                >
                  Product <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown" className={`absolute z-30 grid ${isMegaMenuOpen ? 'grid' : 'hidden'} w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg   md:grid-cols-3 `}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          GST
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button-mobile"
                  data-dropdown-toggle="mega-menu-dropdown-mobile"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-mobile" className={`md:hidden ${isMegaMenuOpen ? 'block' : 'hidden'} w-full text-sm bg-white border border-gray-100 rounded-lg`}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button-mobile">
                      <li>
                        <Link to="/about" className="text-gray-500 z-30 hover:text-blue-600">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button-mobile"
                  data-dropdown-toggle="mega-menu-dropdown-mobile"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-mobile" className={`md:hidden ${isMegaMenuOpen ? 'block' : 'hidden'} w-full text-sm bg-white border border-gray-100 rounded-lg  `}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button-mobile">
                      <li>
                        <a href="#" className="text-gray-500 z-30 hover:text-blue-600">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500  hover:text-blue-600 ">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
