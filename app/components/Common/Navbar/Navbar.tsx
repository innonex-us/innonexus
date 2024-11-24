"use client";
import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import TabletNavbar from "./TabletNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
    const [deviceType, setDeviceType] = useState<"desktop" | "tablet" | "mobile">(
        "desktop"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setDeviceType("desktop");
            } else if (window.innerWidth >= 768) {
                setDeviceType("tablet");
            } else {
                setDeviceType("mobile");
            }
        };

        // Initial check
        handleResize();

        // Resize listener
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {deviceType === "desktop" && <DesktopNavbar />}
            {deviceType === "tablet" && <TabletNavbar />}
            {deviceType === "mobile" && <MobileNavbar />}
        </>
    );
};

export default Navbar;

