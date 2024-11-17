import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsBuilding } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { usePathname } from "next/navigation";

const BottomNavigation: React.FC = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="bg-white shadow-lg border-t border-gray-200 flex justify-between items-center px-4 py-2">
            <NavLink href="/" label="Home" icon={<AiOutlineHome />} isActive={isActive("/")} />
            <NavLink href="/about" label="About" icon={<RiInformationLine />} isActive={isActive("/about")} />
            <NavLink href="/services" label="Services" icon={<MdMiscellaneousServices />} isActive={isActive("/services")} />
            <NavLink href="/industries" label="Industries" icon={<BsBuilding />} isActive={isActive("/industries")} />
            <NavLink href="/contact" label="Contact" icon={<HiOutlineMail />} isActive={isActive("/contact")} />
        </div>
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
                className={`flex flex-col items-center justify-center text-sm ${
                    isActive
                        ? "text-[#5E17EB] font-bold"
                        : "text-gray-500 hover:text-gray-800"
                }`}
            >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
            </p>
        </Link>
    );
};

export default BottomNavigation;
