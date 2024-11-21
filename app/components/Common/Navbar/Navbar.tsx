"use client";

import DesktopNavbar from "./DesktopNavbar";
import BottomNavigation from "./BottomNavigation"; // Mobile Navbar
import TabletNavbar from "./TabletNavbar"; // Tablet Drawer Navbar
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <>
            {/* Top Navigation */}
            <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white shadow-lg backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 items-center">
                        <Link href="/" className="text-2xl font-bold flex items-center">
                            <Image
                                src="/logo.png"
                                alt="InnoNexus Logo"
                                className="mr-2"
                                height={40}
                                width={40}
                            />
                            <span className="tracking-wide text-white">InnoNexus</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex">
                        <DesktopNavbar />
                    </div>
                </nav>
            </header>

            {/* Tablet Navigation Drawer */}
            <div className="hidden md:flex lg:hidden">
                <TabletNavbar />
            </div>

            {/* Bottom Navigation for Mobile */}
            <div className="lg:hidden md:hidden fixed bottom-0 w-full bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg z-20">
                <BottomNavigation />
            </div>
        </>
    );
};

export default Navbar;
