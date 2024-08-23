import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Ajudar = () => {
    return (
        <>
            <div className="bg-slate-900 text-white py-4 lg:flex block justify-center lg:gap-10 gap-4 items-center px-8">
                <h1 className="lg:text-lg text-sm font-semibold text-center lg:text-left">
                    Nós podemos te ajudar!
                </h1>
                <a
                    href="https://wa.me/5561999044771"
                    className="flex items-center bg-amber-800 text-white rounded px-4 py-2 hover:bg-amber-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="mr-2" />
                    <span>(61) 99904-4771</span>
                </a>
            </div>
        </>
    );
}

export default Ajudar;
