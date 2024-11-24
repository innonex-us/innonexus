import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiSettings, FiInfo, FiPhone } from "react-icons/fi";
import { ThemeToggle } from './theme-toggle';

const MobileNavbar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <FiHome size={24} /> },
    { href: "/services", label: "Services", icon: <FiSettings size={24} /> },
    { href: "/about", label: "About", icon: <FiInfo size={24} /> },
    { href: "/contact", label: "Contact", icon: <FiPhone size={24} /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#512153] via-[#492b72] to-[#342a59] px-4 py-2 shadow-md flex justify-between items-center z-20">
        <div className="text-xl font-bold text-white glow-text">InnoNexus</div>
        <ThemeToggle />
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#342a59] via-[#492b72] to-[#512153] text-white py-3 shadow-lg z-20 flex justify-around items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={`flex flex-col items-center text-sm ${
                pathname === link.href
                  ? "text-[#c69df1] glow-link"
                  : "text-gray-300 hover:text-[#c69df1]"
              }`}
            >
              {React.cloneElement(link.icon, {
                className: `${
                  pathname === link.href
                    ? "text-[#c69df1] glow-icon"
                    : "text-gray-300 hover:text-[#c69df1]"
                }`,
              })}
              <span>{link.label}</span>
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MobileNavbar;

