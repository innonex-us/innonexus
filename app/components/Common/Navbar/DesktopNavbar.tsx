import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiSettings, FiInfo, FiPhone } from "react-icons/fi";
import { ThemeToggle } from './theme-toggle';

const DesktopNavbar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <FiHome size={20} /> },
    { href: "/services", label: "Services", icon: <FiSettings size={20} /> },
    { href: "/about", label: "About", icon: <FiInfo size={20} /> },
    { href: "/contact", label: "Contact", icon: <FiPhone size={20} /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#512153] via-[#492b72] to-[#342a59] px-8 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white glow-text">InnoNexus</div>

        {/* Navigation Links */}
        <div className="flex space-x-8 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`flex items-center gap-3 text-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#c69df1] glow-link"
                    : "text-gray-300 hover:text-[#c69df1] hover:glow-link"
                }`}
              >
                {React.cloneElement(link.icon, {
                  size: 24,
                  className: `${
                    pathname === link.href
                      ? "text-[#c69df1] glow-icon"
                      : "text-gray-300 hover:text-[#c69df1] glow-icon"
                  }`,
                })}
                {link.label}
              </span>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

