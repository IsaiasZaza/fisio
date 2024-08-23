"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black w-full z-10">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <Image
                        src="/advogado.png"
                        width={50}
                        height={50}
                        alt="Logo da MM"
                    />
                </div>
                <div className="hidden md:flex space-x-4 text-white font-semibold">
                    <Link href="#" className="hover:text-orange-100">Sobre Fulano</Link>
                    <Link href="#sobre" className="hover:text-orange-100">Especialidades</Link>
                    <Link href="#produtos" className="hover:text-orange-100">Clientes</Link>
                    <Link href="#contato" className="hover:text-orange-100">Contato</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-orange-100">
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black text-white transition-all">
                    <Link href="#" className="block px-4 py-2 hover:bg-pink-300">Sobre Fulano</Link>
                    <Link href="#sobre" className="block px-4 py-2 hover:bg-pink-300">Especialidades</Link>
                    <Link href="#produtos" className="block px-4 py-2 hover:bg-pink-300">Clientes</Link>
                    <Link href="#contato" className="block px-4 py-2 hover:bg-pink-300">Contato</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
