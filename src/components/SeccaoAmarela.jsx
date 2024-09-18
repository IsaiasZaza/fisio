// components/SeccaoAmarela.js
import Image from 'next/image';

export default function SeccaoAmarela() {
    return (
        <>
            {/* Seção amarela com as propostas */}
            <section className="bg-[#f4a000] py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Imagem */}
                    <div className="md:order-1">
                        <Image
                            src="/criancas.png"
                            alt="Educação"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Conteúdo de texto */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-1 bg-[#003366] mr-4"></div>
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                    SAÚDE
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                    Apresentação do projeto de lei que viabiliza a criação da Clínica da Família em nosso município.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-1 bg-[#003366] mr-4"></div>
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                    EDUCAÇÃO
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                    Incentivar a profissionalização e o pleno emprego à população de nossa cidade e realizar projeto de lei que inclua a disciplina Educação Financeira na matriz curricular.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-1 bg-[#003366] mr-4"></div>
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                    SEGURANÇA
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                    A segurança pública é dever do Estado. Propor lei para reconhecer o guarda municipal (GCM) como Policial Militar Municipal, com armamento e treinamento adequados para todos os militares da categoria.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-1 bg-[#003366] mr-4"></div>
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#003366]">
                                    ESPORTE
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg mt-4 text-black">
                                    Projeto "Esporte para todos": elaborar projeto de lei para a criação de Centros Olímpicos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
