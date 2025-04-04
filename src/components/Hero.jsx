import React, { useEffect, useState } from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []); // Added dependency array to prevent infinite re-renders

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white overflow-hidden px-4 md:px-6 lg:px-8 mt-0">
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            {/* Hero image with fade-in animation */}
            <img
                src={heroImg}
                className={`absolute inset-0 object-cover w-full h-full transition-all duration-1000 ease-in-out ${
                    isVisible ? "opacity-30 scale-105" : "opacity-0 scale-100"
                }`}
                alt="hero image"
            />

            {/* Content container with animations */}
            <div
                className={`relative z-20 max-w-4xl mx-auto text-center transition-all duration-1000 ease-in-out ${
                    isVisible
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-10"
                }`}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                    Amber Web Devs
                </h1>

                <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>

                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    porttitor malesuada felis, at volutpat velit molestie sit
                    amet.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Get Started
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
