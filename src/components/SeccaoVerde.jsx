"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SeccaoVerde() {
    return (
        <>
            <h1 className='text-center py-8 text-4xl bg-white to-green-500 font-semibold text-yellow-500'>Propostas</h1>
            <section className=" bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-[#003366]">

                    <motion.div
                        className="mx-auto order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}  // A animação será executada apenas uma vez quando o item entrar na visualização
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Image
                            src="/criancas3.png"
                            alt="Educação"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg mx-auto lg:mt-28"
                        />
                    </motion.div>
                    {/* Texto */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}  // A animação será executada apenas uma vez quando o item entrar na visualização
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-500">
                                PLANEJAMENTO URBANÍSTICO
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg mt-4 text-[#003366] font-semibold">
                                “A cidade e as Pessoas” Criar leis que fortaleçam o desenvolvimento urbano planejado para integração, como pedestres, veículos, e ampliação do transporte público sempre com ACESSIBILIDADE e SUSTENTABILIDADE. Desenvolver novo plano diretor e código de obra municipal permitindo verticalizar.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-500">
                                TECNOLOGIA
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg mt-4 text-[#003366] font-semibold">
                                “Tecnologia globalizada” Projeto de lei para integração da juventude à tecnologia, não somente ao dia-dia mas também focado no mercado de trabalho com incentivo aos cursos de informática básica, algoritmo, e desenvolvimento de software no contraturno das aulas como negócio.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-500">
                                EMPREGO
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg mt-4 text-[#003366] font-semibold">
                                “EMPRESARIZAÇÃO GERA EMPREGO” Para ocorrer a geração rápida de emprego é necessária a empresarização do lugar. Lei que incentiva a vinda das empresas para a nossa cidade, assim desenvolvendo o nosso setor de indústria.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>

    );
}
