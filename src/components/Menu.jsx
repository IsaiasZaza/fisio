"use client"
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-yellow-400 w-full z-10">
                <div className="container mx-auto px-4 flex justify-between items-center h-16">
                    {/* Texto estático para Desktop com CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-4 text-blue-800 text-2xl font-bold italic mx-auto flex justify-center">
                            <Typewriter
                                words={['Mauro Abadia Jr - Vote 10.000', 'Vamos renovar nossa política?  ']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={2000}
                            />
                        </div>
                    </div>

                    {/* Efeito de digitação para Mobile */}
                    <div className="block md:hidden text-blue-800 text-lg font-bold italic justify-center w-full">
                        <Typewriter
                            words={['Mauro Abadia Jr - Vote 10.000', 'Vamos renovar nossa política?  ']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                    </div>

                    {/* Links do menu para Desktop */}
                    <div className="hidden md:flex space-x-4 text-blue-800 font-semibold">
                        <Link href="#" className="hover:text-blue-800">Propostas</Link>
                        <Link href="#sobre" className="hover:text-blue-800">Sobre</Link>
                        <Link href="#produtos" className="hover:text-blue-800">Clientes</Link>
                    </div>

                    {/* Menu Icon para Mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-orange-100">
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Menu Dropdown para Mobile */}
                {isOpen && (
                    <div className="md:hidden font-semibold bg-yellow-400 text-blue-800 transition-all px-4  text-start">
                        <Link href="#" className="block px-4 py-2 hover:bg-pink-300">Propostas</Link>
                        <Link href="#sobre" className="block px-4 py-2 hover:bg-pink-300">Sobre</Link>
                        <Link href="#produtos" className="block px-4 py-2 hover:bg-pink-300">Clientes</Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
