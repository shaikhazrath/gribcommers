import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 fixed w-full top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="/favicon.ico" alt="Logo" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold "
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold "
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold "
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold "
              >
                Contact
              </a>
            </div>
          </div>
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            />
            <div className="absolute top-0 left-0 flex items-center h-full ml-2">
              <svg
                className="h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-5.5-5.5M18.5 10.5A5.5 5.5 0 106.45 6.45" />
              </svg>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform transition-transform ease-in-out duration-300`}
    >
      <div className="p-4">
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold "
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold "
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold "
        >
          Services
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold "
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
