import { useState } from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsBuilding } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { usePathname } from "next/navigation";

const TabletNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Hamburger Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:flex hidden text-white focus:outline-none p-3 rounded-md fixed top-4 right-4 z-50 shadow-lg"
            >
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 bg-white w-3/4 max-w-sm shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">
                    <span className="text-xl font-semibold">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex flex-col space-y-4 p-4">
                    <NavLink href="/" label="Home" icon={<AiOutlineHome />} isActive={isActive("/")} />
                    <NavLink
                        href="/about"
                        label="About"
                        icon={<RiInformationLine />}
                        isActive={isActive("/about")}
                    />
                    <NavLink
                        href="/services"
                        label="Services"
                        icon={<MdMiscellaneousServices />}
                        isActive={isActive("/services")}
                    />
                    <NavLink
                        href="/industries"
                        label="Industries"
                        icon={<BsBuilding />}
                        isActive={isActive("/industries")}
                    />
                    <NavLink
                        href="/contact"
                        label="Contact"
                        icon={<HiOutlineMail />}
                        isActive={isActive("/contact")}
                    />
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30"
                ></div>
            )}
        </>
    );
};

const NavLink: React.FC<{
    href: string;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
}> = ({ href, label, icon, isActive }) => {
    return (
        <Link href={href}>
            <p
                className={`flex items-center px-4 py-2 rounded-md text-lg transition-all duration-300 ${isActive
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-black"
                    }`}
            >
                <span className="text-xl mr-3">{icon}</span>
                {label}
            </p>
        </Link>
    );
};

export default TabletNavbar;
