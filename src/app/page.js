import Image from "next/image";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 inline-block mr-2" />
        </div>
        <nav className="space-x-1">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Meus Serviços</a>
          <a href="#" className="hover:underline">Sobre Mim</a>
          <a href="#" className="hover:underline">Contato</a>
        </nav>
      </header>
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4 md:px-8"
        style={{ backgroundImage: "url('/images.jfif')" }}
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 shadow-2xl text-center">
          Bem-vindo ao serviços Thiago Advogado Online - Seu Parceiro Jurídico!
        </h1>
        <p className="text-base md:text-lg lg:text-2xl mb-4 text-center">
          Seja bem-vindo(a) à Thiago, seu destino para soluções jurídicas confiáveis e personalizadas.
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-8 text-center max-w-2xl">
          Estamos aqui para oferecer suporte jurídico de alta qualidade, trazendo tranquilidade e resolução para as suas questões legais.
        </p>
        <a
          href="#"
          className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 text-center text-sm md:text-base"
        >
          Consiga ajuda Jurídica especializada agora!
        </a>
      </div>
      <Sobre />

      <section className="relative h-96 flex items-center justify-center text-white mt-8">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('/adv.jpg')", // Certifique-se de usar o caminho correto da imagem
          }}
        ></div>

        <div className="relative z-10 p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            DIREITO COM RESPONSABILIDADE
          </h1>
          <p className="text-lg md:text-2xl">
            Conte com os melhores profissionais para defender seus interesses
          </p>
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-white">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/adv.jpg" // Certifique-se de que o caminho para a imagem esteja correto
            width={400}
            height={600}
            alt="Izaquiel Souza"
            className="border-none"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Izaquiel Souza - Sócio Fundador
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Estatuto Humanizado
          </h3>
          <p className="text-gray-700 mb-4">
            O Escritório Izaquiel Advogados & Associados pauta seu labor
            profissional lastreado em uma atuação alinhada à objetividade na
            solução de conflitos e almeja a efetividade da prestação
            jurisdicional.
          </p>
          <p className="text-gray-700 mb-4">
            O Escritório possui como diferencial a presteza e zelo no
            atendimento, dando observância a cada detalhe do direito de seus
            clientes, fornecendo assim clareza e transparência durante todo curso
            do processo.
          </p>
          <ul className="text-gray-700 list-none space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔️</span>
              Profissionais Qualificados
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔️</span>
              Transparência do início ao fim
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔️</span>
              Comprometimento com seus Clientes
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔️</span>
              Foco Absoluto na vitória do seu caso
            </li>
          </ul>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Seção de Links Rápidos */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Links Rápidos</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">Início</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Sobre Nós</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Serviços</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contato</a>
              </li>
            </ul>
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
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Ícone do Facebook */}
                  <path d="M22.675 0h-21.35c-0.73 0-1.325 0.594-1.325 1.325v21.351c0 0.73 0.595 1.324 1.325 1.324h11.495v-9.301h-3.13v-3.622h3.13v-2.671c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463 0.099 2.795 0.143v3.238h-1.918c-1.505 0-1.797 0.715-1.797 1.763v2.315h3.592l-0.467 3.622h-3.125v9.301h6.125c0.73 0 1.325-0.594 1.325-1.325v-21.35c0-0.73-0.595-1.324-1.325-1.324z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Ícone do Twitter */}
                  <path d="M24 4.557c-0.883 0.392-1.832 0.656-2.828 0.775 1.017-0.609 1.798-1.574 2.165-2.723-0.951 0.564-2.005 0.974-3.127 1.194-0.897-0.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.205-4.924 4.924 0 0.386 0.043 0.762 0.127 1.124-4.09-0.206-7.719-2.165-10.148-5.144-0.424 0.728-0.666 1.574-0.666 2.476 0 1.708 0.869 3.216 2.188 4.099-0.807-0.026-1.566-0.248-2.229-0.616v0.062c0 2.385 1.696 4.374 3.946 4.826-0.413 0.111-0.848 0.171-1.296 0.171-0.317 0-0.626-0.031-0.928-0.089 0.626 1.953 2.444 3.376 4.6 3.415-1.68 1.318-3.799 2.105-6.102 2.105-0.397 0-0.788-0.023-1.174-0.069 2.178 1.396 4.768 2.209 7.548 2.209 9.054 0 14.004-7.498 14.004-13.986 0-0.213-0.005-0.425-0.015-0.637 0.962-0.694 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Ícone do LinkedIn */}
                  <path d="M22.225 0h-20.451c-0.978 0-1.774 0.797-1.774 1.775v20.451c0 0.978 0.797 1.774 1.774 1.774h20.451c0.978 0 1.775-0.797 1.775-1.774v-20.451c0-0.978-0.797-1.775-1.775-1.775zm-13.538 20.452h-3.692v-10.706h3.692v10.706zm-1.846-12.213c-1.184 0-2.144-0.96-2.144-2.143 0-1.183 0.96-2.144 2.144-2.144s2.143 0.961 2.143 2.144c0 1.183-0.96 2.143-2.143 2.143zm14.384 12.213h-3.692v-5.56c0-1.328-0.026-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.938v5.66h-3.693v-10.706h3.548v1.464h0.051c0.495-0.938 1.705-1.927 3.511-1.927 3.755 0 4.447 2.471 4.447 5.681v5.488z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Seu Escritório de Advocacia. Todos os direitos reservados.
        </div>
      </footer>

    </>
  );
}
