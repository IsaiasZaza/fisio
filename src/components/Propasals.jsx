import Image from 'next/image';
import Link from 'next/link';

const proposals = [
  {
    id: 1,
    title: 'Saúde',
    description: [
      'Destinar recursos para a criação da Clínica da Família',
      'Com exames laboratoriais e de imagem',
    ],
    imageUrl: '/saude.png',
  },
  {
    id: 2,
    title: 'Educação',
    description: [
      'Incentivar a profissionalização e o pleno emprego da população goiana',
    ],
    imageUrl: '/educacao.png',
  },
  {
    id: 3,
    title: 'Segurança',
    description: [
      'Propor lei para reconhecer a Guarda Municipal (GCM) como Polícia Militar Municipal, com armamento e treinamento adequados para todos os militares da categoria',
    ],
    imageUrl: '/seguranca.png',
  },
  {
    id: 4,
    title: 'Tecnologia Globalizada',
    description: [
      'Projeto de lei para a integração da juventude à tecnologia',
    ],
    imageUrl: '/ti.png',
  },
];

const Proposals = () => {
    return (
      <div className="bg-yellow-300 py-8">
        <h1 className='text-center lg:text-3xl text-xl mb-8 font-bold text-blue-800'>Nossas Propostas & Objetivos</h1>
        <div className="max-w-7xl mx-auto lg:px-5 px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={proposal.imageUrl}
                  alt={proposal.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-blue-950 mb-4">{proposal.title}</h2>
                <ul className="text-left text-blue-800 text-base">
                  {proposal.description.map((item, index) => (
                    <li key={index} className="mb-2">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-16">
          <a
            href="/propostas.jpg"
            download
            className="bg-blue-500 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Baixe nossas propostas
          </a>
        </div>
      </div>
    );
  };
  
  export default Proposals;
