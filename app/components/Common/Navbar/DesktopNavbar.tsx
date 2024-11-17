import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsBuilding } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { usePathname } from "next/navigation";

const DesktopNavbar: React.FC = () => {
    const pathname = usePathname();

    // Function to determine active link
    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex items-center space-x-6 px-4 py-2">
            <NavLink
                href="/"
                icon={<AiOutlineHome />}
                label="Home"
                isActive={isActive("/")}
            />
            <NavLink
                href="/about"
                icon={<RiInformationLine />}
                label="About Us"
                isActive={isActive("/about")}
            />
            <NavLink
                href="/services"
                icon={<MdMiscellaneousServices />}
                label="Services"
                isActive={isActive("/services")}
            />
            <NavLink
                href="/industries"
                icon={<BsBuilding />}
                label="Industries"
                isActive={isActive("/industries")}
            />
            <NavLink
                href="/contact"
                icon={<HiOutlineMail />}
                label="Contact"
                isActive={isActive("/contact")}
            />
        </div>
    );
};

// A reusable NavLink component for consistency and simplicity
const NavLink: React.FC<{
    href: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
}> = ({ href, icon, label, isActive }) => {
    return (
        <Link href={href}>
            <p
                className={`relative flex items-center px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                    isActive
                        ? "text-white" // Active link color
                        : "text-gray-500 hover:text-white"
                }`}
            >
                <span className="text-lg mr-2">{icon}</span>
                <span>{label}</span>
                {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#5E17EB] to-[#1CDAFF] animate-pulse"></span>
                )}
            </p>
        </Link>
    );
};

export default DesktopNavbar;
