import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiSettings, FiInfo, FiPhone, FiX } from "react-icons/fi";
import { ThemeToggle } from './theme-toggle';

const TabletNavbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <FiHome size={20} /> },
    { href: "/services", label: "Services", icon: <FiSettings size={20} /> },
    { href: "/about", label: "About", icon: <FiInfo size={20} /> },
    { href: "/contact", label: "Contact", icon: <FiPhone size={20} /> },
  ];

  return (
    <>
      {/* Navbar Header */}
      <nav className="bg-gradient-to-r from-[#512153] via-[#492b72] to-[#342a59] px-6 py-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold text-white glow-text">InnoNexus</div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-white text-3xl hover:scale-110 transition-transform"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Drawer"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Left-Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#493270] text-white transform z-20 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#342a59] shadow-md">
          <div className="text-2xl font-bold">Menu</div>
          <button
            className="text-white text-3xl hover:scale-110 transition-transform"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Drawer"
          >
            <FiX />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 z-20">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`flex items-center gap-4 px-6 py-4 text-lg hover:bg-[#342a59] transition-colors ${
                  pathname === link.href ? "text-[#c69df1] glow-link" : ""
                }`}
                onClick={() => setDrawerOpen(false)}
              >
                {React.cloneElement(link.icon, {
                  className: `${
                    pathname === link.href ? "text-[#c69df1]" : "text-white"
                  }`,
                })}
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default TabletNavbar;

