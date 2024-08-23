// components/ServicesSection.js

const services = [
    {
      title: 'Direito Empresarial',
      description: 'Somos um escritório de advocacia especialista em Direito Empresarial. Contamos com uma equipe multidisciplinar pronta para melhor defender nossos clientes.',
      icon: '🏢',
    },
    {
      title: 'Direito de Família',
      description: 'Relações familiares, por vezes, geram conflitos. Atuamos com perícia e cuidado nos assuntos advindos do Direito de Família. Ligue agora e agende uma reunião.',
      icon: '👪',
    },
    {
      title: 'Direito Criminal',
      description: 'O Direito Criminal se relaciona a atos dentro da esfera penal. Contamos com equipe capacitada na área para melhor defender os direitos de nossos clientes.',
      icon: '⚖️',
    },
    {
      title: 'Direito Imobiliário',
      description: 'Somos um escritório de advocacia especialista em Direito Imobiliário. Contamos com uma equipe multidisciplinar pronta para melhor defender nossos clientes.',
      icon: '🏠',
    },
    {
      title: 'Direito Digital',
      description: 'Novas tecnologias levam, também, a novos conflitos. Prestamos serviços jurídicos especializados em Direito Digital. Ligue e agende uma reunião.',
      icon: '💻',
    },
    {
      title: 'HDE Homologação',
      description: 'A homologação de sentença estrangeira concede eficácia no Brasil a um ato judicial estrangeiro, tornando-o válido e adequado à norma jurídica nacional.',
      icon: '✈️',
    },
    {
      title: 'Direito Médico',
      description: 'O Direito Médico está relacionado com a reparação civil, ou seja, indenização, em caso de erro médico. Nosso escritório conta com especialistas na área.',
      icon: '🏥',
    },
    {
      title: 'Inventário',
      description: 'Inventário é o processo de levantamento dos bens deixados pelo falecido para posterior partilha. Nosso escritório conta com advogados em inventário.',
      icon: '📜',
    },
  ];
  
  export default function ServicesSection() {
    return (
      <section className="py-12 cursor-default">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-800">Nossos Serviços</h2>
          <p className="text-center mb-16 text-yellow-800 font-semibold text-lg">Somos um escritório de advocacia "full service" em Brasília-DF, e estamos comprometidos com a excelência na atuação em diferentes áreas do direito.</p>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-800">{service.title}</h3>
                <p className="mb-4 text-yellow-900">{service.description}</p>
                <a href="#" className="text-yellow-600 hover:text-yellow-800 font-medium transition-all">Saiba mais</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  