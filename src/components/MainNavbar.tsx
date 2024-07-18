import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/Logo.svg';

// Define the menu items in an array
const menuItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: 'bi-grid-fill', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: 'bi-sun', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'News',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon: 'bi-newspaper', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication.',
    icon: 'bi-people-fill', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'Support',
    description: 'Reach out to us for assistance or inquiries.',
    icon: 'bi-telephone-fill', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'Blog',
    description: 'Find the perfect solution for your needs.',
    icon: 'bi-file-text', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: 'bi-phone', // Use appropriate icon class
    link: '#'
  },
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles.',
    icon: 'bi-tag-fill', // Use appropriate icon class
    link: '#'
  }
];

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
      <nav className="bg-white border-gray-200 z-30 shadow drop-shadow-md">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-10" alt="TaxGuides360 Logo" />
            <span className="text-xl font-bold">TaxGuides360</span>
          </Link>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <Link to='/contactus'>
              <span className="text-white bg-[#197E37] hover:bg-[#156B2F] focus:ring-4 focus:ring-[#58E382] font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none cursor-pointer">Register</span>
            </Link>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                <Link to="/" className="block py-2 px-3 text-[#197E37] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#197E37] md:p-0" aria-current="page">Home</Link>
              </li>
              <li>
                <button
                  id="mega-menu-dropdown-button-mobile"
                  data-dropdown-toggle="mega-menu-dropdown-mobile"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#197E37] md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Resources <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-mobile" className={`md:hidden ${isMegaMenuOpen ? 'block' : 'hidden'} w-full text-sm bg-white border border-gray-100 rounded-lg`}>
                  {/* Mobile mega menu items */}
                </div>
              </li>
            </ul>
          </div>
          <div id="mega-menu" className={`hidden md:flex md:items-center md:w-auto md:order-1 ${isMegaMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="block py-2 px-3 text-[#197E37] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#197E37] md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <button
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#197E37] md:p-0"
                  onClick={toggleMegaMenu}
                >
                  Resources <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown" className={`absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[600px] z-30 grid ${isMegaMenuOpen ? 'grid' : 'hidden'} w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg md:grid-cols-3 shadow-xl border-2`}>
                  {menuItems.map((item, index) => (
                    <div key={index} className="p-4 pb-0 text-gray-900 md:pb-4">
                      <a href={item.link} className="flex items-center space-x-2 hover:text-[#197E37]">
                        <i className={`bi ${item.icon} text-lg`}></i>
                        <div>
                          <div className="font-bold font-lg">{item.title}</div>
                          <div className="text-sm opacity-75 leading-4 mt-2">{item.description}</div>
                        </div>
                      </a>
                    </div>
                  ))}
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
