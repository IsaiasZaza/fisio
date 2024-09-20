"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <nav className="bg-green-500 w-full z-10">
                <div className="container mx-auto px-4 flex justify-between items-center h-16">
                    {/* Responsiveness for title */}
                    <h1 className="lg:block hidden text-blue-800 font-bold italic text-sm md:text-xl lg:text-2xl">
                        Mauro Abadia Jr
                    </h1>

                    {/* Responsiveness for the call to action */}
                    <div className="flex items-center space-x-4">
                        <div className="ml-4 text-blue-800 font-bold italic text-xl md:text-lg lg:text-2xl">
                            <h1>Vamos renovar nossa política?</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
