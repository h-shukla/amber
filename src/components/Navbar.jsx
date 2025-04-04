import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [navItems, setNavItems] = useState([]);

    // Handle scroll effect
    useEffect(() => {
        setNavItems(["About", "Services", "Pricing", "Contact", "Blog"]);

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`limelight-regular fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
                scrolled
                    ? "bg-indigo-900 shadow-lg py-2"
                    : "bg-indigo-900/80 backdrop-blur-sm py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - left on desktop, centered on mobile */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <div className="flex items-center">
                            <img src={logo} className="max-w-15" alt="logo" />
                            <span className="ml-2 text-white font-bold text-2xl">
                                Amber Developers
                            </span>
                        </div>
                    </Link>

                    {/* Desktop navigation links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Get a Quote button - right on both desktop and mobile */}
                    <div className="hidden md:block">
                        <Link
                            to="/quote"
                            className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-400 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-800">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-blue-500 block px-3 py-3 rounded-md text-lg font-medium border-b border-indigo-700 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="pt-4 pb-2">
                        <Link
                            to="/quote"
                            className="w-full h-10 bg-amber-500 hover:bg-amber-600 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
