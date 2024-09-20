"use client";

import Image from "next/image";
import Banner from "@/components/Banner";
import Proposals from "@/components/Propasals";
import SeccaoAmarela from "@/components/SeccaoAmarela";
import SeccaoVerde from "@/components/SeccaoVerde";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>

      <main className="font-sans">
        <Banner />
        <div className="bg-yellow-500">
          <motion.p
            className="text-center lg:text-xl text-xl font-semibold py-4 text-white"
            initial={{ x: -100 }}
            whileInView={{ x: 100 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3
            }}
            viewport={{ once: true }}
          >
            Vamos renovar nossa politica?
          </motion.p>
        </div>
        <div className="font-sans">
          <SeccaoVerde />
          <SeccaoAmarela />
        </div>
      </main>

      <motion.section
        className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Imagem com animação */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/perfil.png"
            width={250}
            height={400}
            alt="Mauro Abadia Jr"
            className="border-none"
          />
        </motion.div>

        {/* Conteúdo de texto com animação */}
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-start md:text-left font-sans"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl md:text-xl lg:text-3xl text-yellow-500 mb-2 font-extrabold">
            Mauro Abadia Jr
            <span className="block text-base text-yellow-500">
              A sua melhor opção para candidato a Vereador
            </span>
          </h1>
          <p className="text-[#003366] text-base md:text-lg lg:text-xl mb-4 mt-3">
            Mauro Abadia Jr é um candidato comprometido com o futuro da nossa cidade.
            <span className="font-bold text-[#003366]"> Com uma visão clara e estratégias eficazes</span>,
            ele busca transformar desafios em oportunidades para todos.
          </p>
          <p className="text-[#003366] text-base md:text-lg lg:text-xl mb-4">
            <span className="font-bold text-[#003366]">
              Sua candidatura é baseada em princípios de transparência, dedicação e compromisso
              com o bem-estar de todos os cidadãos.
            </span>
            Conheça mais sobre suas propostas e ajude a construir um futuro melhor para nossa cidade.
          </p>
          <ul className="text-[#003366] list-none space-y-2">
            <li className="flex items-center lg:text-xl text-base font-bold text-[#003366]">
              Faça a escolha certa, vote 10.000 para Mauro Abadia Jr e garanta um futuro melhor!
            </li>
          </ul>
        </motion.div>
      </motion.section>

      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Seção de Frase de Efeito */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-yellow-500">"Juntos Construindo o Futuro da Nossa Cidade."</h2>
            <p className="text-base">Vote - Mauro Abadia Jr</p>
            <h2 className="text-sm mt-4 font-semibold text-yellow-500">"Fe, Uniao e Trabalho"</h2>
          </div>

          {/* Seção de Informações de Contato */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contato</h2>
            <p className="mb-2">Endereço: Rua Exemplo, 123 - Bairro, Cidade, Estado</p>
            <p className="mb-2">Telefone: (11) 1234-5678</p>
            <p className="mb-2">Email: contato@exemplo.com</p>
          </div>

          {/* Seção de Redes Sociais */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Siga-nos</h2>
            <div className="flex space-x-4">
              {/* Ícones de Redes Sociais */}
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-8 text-center text-sm text-gray-400">
          CNPJ: 56.456.740/0001-91 <span>COLIGACAO: JUNTOS PELA CIDADE - PSB, PDT, PV, REDE</span>
        </div>
      </footer>
    </>
  );
}
