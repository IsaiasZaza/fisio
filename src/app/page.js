import Image from "next/image";
import Menu from "@/components/Menu";
import Banner from "@/components/Banner";
import Proposals from "@/components/Propasals"; // Corrigido o nome do componente para "Proposals"

export default function Home() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Banner />
        <Proposals />
      </main>
      <section className="relative h-96 flex items-center justify-center text-white">
        {/* Imagem de fundo com sobreposição e ajuste de opacidade */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('/faixa01.jpg')", // Verifique o caminho correto da imagem
          }}
        ></div>

        {/* Conteúdo principal com texto */}
        <div className="relative z-10 p-4 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 text-white">
            Mauro Abadia Jr - O Seu Vereador
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-yellow-400">
            Fé, União e Trabalho
          </p>
        </div>

        {/* Sobreposição com ajuste de opacidade */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-8 bg-white">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/perfil.png" // Verifique o caminho correto da imagem
            width={400}
            height={600}
            alt="Mauro Abadia Jr"
            className="border-none"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-start md:text-left">
          <h1 className="text-xl md:text-xl lg:text-3xl font-bold text-blue-800 mb-2">
            Mauro Abadia Jr <span className="block text-base">Candidato a Vereador</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
            Mauro Abadia Jr é um candidato comprometido com o futuro da nossa cidade. <span className="font-bold text-blue-900">Com uma visão clara e
              estratégias eficazes</span>, ele busca transformar desafios em oportunidades para todos.
          </p>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4">
            <span className="font-bold text-blue-900">Sua candidatura é baseada em princípios de transparência, dedicação e compromisso com o bem-estar
              de todos os cidadãos.</span> Conheça mais sobre suas propostas e ajude a construir um futuro melhor para
            nossa cidade.
          </p>
          <ul className="text-gray-700 list-none space-y-2">
            <li className="flex items-center lg:text-xl text-base font-bold text-blue-900">
              <span className="text-yellow-500 mr-2 ">✔️</span>
              Faça a escolha certa, vote 10.000 para Mauro Abadia Jr e garanta um futuro melhor!
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Seção de Frase de Efeito */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-yellow-400">"Juntos Construindo o Futuro da Nossa Cidade."</h2>
            <p className="text-base">Vote - Mauro Abadia Jr</p>
            <h2 className="text-sm mt-4 font-semibold text-yellow-400">"Fe, Uniao e Trabalho"</h2>
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
              <a href="#" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Ícone do Facebook */}
                  <path d="M22.675 0h-21.35c-0.73 0-1.325 0.594-1.325 1.325v21.351c0 0.73 0.595 1.324 1.325 1.324h11.495v-9.301h-3.13v-3.622h3.13v-2.671c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463 0.099 2.795 0.143v3.238h-1.918c-1.505 0-1.797 0.715-1.797 1.763v2.315h3.592l-0.467 3.622h-3.125v9.301h6.125c0.73 0 1.325-0.594 1.325-1.325v-21.35c0-0.73-0.595-1.324-1.325-1.324z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Ícone do Twitter */}
                  <path d="M24 4.557c-0.883 0.392-1.832 0.656-2.828 0.775 1.017-0.609 1.798-1.574 2.165-2.723-0.951 0.564-2.005 0.974-3.127 1.194-0.897-0.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.205-4.924 4.924 0 0.386 0.043 0.762 0.127 1.124-4.09-0.206-7.719-2.165-10.148-5.144-0.424 0.728-0.666 1.574-0.666 2.476 0 1.708 0.869 3.216 2.188 4.099-0.807-0.026-1.566-0.248-2.229-0.616v0.062c0 2.385 1.696 4.374 3.946 4.826-0.413 0.111-0.848 0.171-1.296 0.171-0.317 0-0.626-0.031-0.928-0.089 0.626 1.953 2.444 3.376 4.6 3.415-1.68 1.318-3.799 2.105-6.102 2.105-0.397 0-0.788-0.023-1.174-0.069 2.178 1.396 4.768 2.209 7.548 2.209 9.054 0 14.004-7.498 14.004-13.986 0-0.213-0.005-0.425-0.015-0.637 0.962-0.694 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Ícone do LinkedIn */}
                  <path d="M22.225 0h-20.451c-0.978 0-1.774 0.797-1.774 1.775v20.451c0 0.978 0.797 1.774 1.774 1.774h20.451c0.978 0 1.775-0.797 1.775-1.774v-20.451c0-0.978-0.797-1.775-1.775-1.775zm-13.538 20.452h-3.692v-10.706h3.692v10.706zm-1.846-12.213c-1.184 0-2.144-0.96-2.144-2.143 0-1.183 0.96-2.144 2.144-2.144s2.143 0.961 2.143 2.144c0 1.183-0.96 2.143-2.143 2.143zm14.384 12.213h-3.692v-5.56c0-1.328-0.026-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.938v5.66h-3.693v-10.706h3.548v1.464h0.051c0.495-0.938 1.705-1.927 3.511-1.927 3.755 0 4.447 2.471 4.447 5.681v5.488z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto mt-8 text-center text-sm text-gray-400">
          CNPJ: 56.456.740/0001-91 <span>COLIGACAO: JUNTOS PELA CIDADE - PSB, PDT, PV, REDE</span>
        </div>
      </footer>


    </>
  );
}
