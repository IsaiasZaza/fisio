import Image from 'next/image';

export default function SeccaoVerde() {
    return (
        <section className="bg-gradient-to-b from-green-600 to-green-500 py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-white">
                
                {/* Texto */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500">
                            PLANEJAMENTO URBANÍSTICO
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg mt-4 text-white">
                            “A cidade e as Pessoas” Criar leis que fortaleçam o desenvolvimento urbano planejado para integração, como pedestres, veículos, e ampliação do transporte público sempre com ACESSIBILIDADE e SUSTENTABILIDADE. Desenvolver novo plano diretor e código de obra municipal permitindo verticalizar.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500">
                            MEIO AMBIENTE
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg mt-4 text-white">
                            Por mais Sustentabilidade Projeto de lei que apoia o serviço de reciclagem, catadores, compostagem, coleta e destinação dos resíduos em local apropriado. "Reciclar é vida".
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500">
                            TECNOLOGIA
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg mt-4 text-white">
                            “Tecnologia globalizada” Projeto de lei para integração da juventude à tecnologia, não somente ao dia-dia mas também focado no mercado de trabalho com incentivo aos cursos de informática básica, algoritmo, e desenvolvimento de software no contraturno das aulas como negócio.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500">
                            EMPREGO
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg mt-4 text-white">
                            “EMPRESARIZAÇÃO GERA EMPREGO” Para ocorrer a geração rápida de emprego é necessária a empresarização do lugar. Lei que incentiva a vinda das empresas para a nossa cidade, assim desenvolvendo o nosso setor de indústria.
                        </p>
                    </div>
                </div>

                {/* Imagem */}
                <div className="mx-auto order-2 md:order-1">
                    <Image
                        src="/criancas2.png"
                        alt="Educação"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
