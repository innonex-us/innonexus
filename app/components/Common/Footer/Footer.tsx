"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-[#5E17EB] to-[#1CDAFF] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Tagline */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/logo.png"
                                alt="InnoNexus Logo"
                                className="mr-3"
                                width={40}
                                height={40}
                            />
                            <h2 className="text-2xl font-bold">InnoNexus</h2>
                        </div>
                        <p className="text-sm">
                            Empowering Innovation Across the Digital Spectrum.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/">
                                    <p className="hover:underline">Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p className="hover:underline">About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <p className="hover:underline">Services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries">
                                    <p className="hover:underline">Industries</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p className="hover:underline">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media and Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2">
                            <li>Email: <a href="mailto:info@innonexus.com" className="hover:underline">info@innonexus.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (123) 456-7890</a></li>
                            <li>Address: 1128 Vine Street, Waukegan, IL 60085</li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://twitter.com/inn0nexus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/company/inno-nexus/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/innonex-us"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
                    © {new Date().getFullYear()} InnoNexus. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
