import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-5 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-green-600 text-4xl">DSA Explorer 🧑‍💻</h1>
        </div>

        {/* Menu section for large screens */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-4 text-lg hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-full group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <IoMdMenu className="text-4xl" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-40 flex flex-col items-center justify-center"
        >
          {/* Dark overlay to emphasize focus */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsMenuOpen(false)}></div>

          <ul className="relative z-40 flex flex-col items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-lg">
                <a
                  href={menu.path}
                  className="block py-2 px-6 text-lg font-semibold hover:bg-gray-100 rounded-lg transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <button className="primary-btn px-8 py-2" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
