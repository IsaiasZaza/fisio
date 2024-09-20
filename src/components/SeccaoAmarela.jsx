"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SeccaoAmarela() {
    return (
        <>
            {/* Seção amarela com as propostas */}
            <section className="bg-yellow-500 py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Imagem */}
                    <motion.div
                        className="mx-auto order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                    >
                        <Image
                            src="/criancas.png"
                            alt="Educação"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Texto de Saúde */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start">
                                <div className="w-1 bg-[#003366]"></div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                        SAÚDE
                                    </h2>
                                    <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                        Apresentação do projeto de lei que viabiliza a criação da Clínica da Família em nosso município.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Texto de Educação */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start">
                                <div className="w-1 bg-[#003366]"></div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                        EDUCAÇÃO
                                    </h2>
                                    <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                        Incentivar a profissionalização e o pleno emprego à população de nossa cidade e realizar projeto de lei que inclua a disciplina Educação Financeira na matriz curricular.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Texto de Segurança */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start">
                                <div className="w-1 bg-[#003366]"></div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                        SEGURANÇA
                                    </h2>
                                    <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                        A segurança pública é dever do Estado. Propor lei para reconhecer o guarda municipal (GCM) como Policial Militar Municipal, com armamento e treinamento adequados para todos os militares da categoria.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                </div>
            </section>
        </>
    );
}
