"use client"

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/images.jfif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative text-center px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-orange-100">
          Bem-vindo ao Exemplo Advogado Online<br/>
          <span className="text-orange-100 mt-24">
            <Typewriter
              words={['Seu Parceiro Jurídico!', 'Soluções Confiáveis!', 'Assistência Especializada!']}
              loop={true}
              cursor
              cursorStyle=''
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={3000}
            />
          </span>
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-orange-100">
          Nossa missão é oferecer suporte jurídico de alta qualidade, trazendo
          tranquilidade e resolução para todas as suas questões legais.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r font-semibold from-yellow-950 to-yellow-900 text-white px-8 py-3 rounded-full hover:from-orange-700 hover:to-orange-900 transition-all transition-colors text-sm md:text-lg"
        >
          Obtenha Ajuda Especializada Agora!
        </a>
      </div>
    </div>
  );
};

export default Banner;
