import { useState, useEffect } from 'react';
import { Heart, Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export function ClubeSection() {
  const [currentMomentSlide, setCurrentMomentSlide] = useState(0);
  const [currentLeaderSlide, setCurrentLeaderSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const momentImages = [
    '/momentos-especiais/20set2025-batismo-desbravadores-163.jpg',
    '/momentos-especiais/20set2025-batismo-desbravadores-194.jpg',
    '/momentos-especiais/DSC02617.jpg',
    '/momentos-especiais/WhatsApp Image 2025-08-18 at 14.40.28.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-18 at 14.40.29 (1) copy.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.23.59 copy.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.24.00 copy.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.24.02 copy.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.24.22.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.24.23 (1).jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.27.23 (1).jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.27.43 (1).jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.31.00 (2).jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.31.00.jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.32.30 (2).jpeg',
    '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.41.58 (1).jpeg'
  ];

  useEffect(() => {
    const images = [
      ...momentImages,
      '/momentos-especiais/WhatsApp Image 2025-08-20 at 17.42.38 (3).jpeg',
      '/IMG_7462-fotor-20251009173044.png',
      '/momentos-especiais/WhatsApp Image 2025-10-09 at 18.07.26-fotor-2025100918841 copy.png'
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const imagesPerSlide = isMobile ? 1 : 3;
  const totalMomentSlides = Math.ceil(momentImages.length / imagesPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMomentSlide((prev) => (prev + 1) % totalMomentSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalMomentSlides]);

  const nextMomentSlide = () => {
    setCurrentMomentSlide((prev) => (prev + 1) % totalMomentSlides);
  };

  const prevMomentSlide = () => {
    setCurrentMomentSlide((prev) => (prev - 1 + totalMomentSlides) % totalMomentSlides);
  };

  const getImagesForSlide = (slideIndex: number) => {
    const start = slideIndex * imagesPerSlide;
    const end = start + imagesPerSlide;
    return momentImages.slice(start, end);
  };

  const leaders = [
    {
      name: 'Luiz Kohler',
      role: 'Diretor do Clube',
      color: 'yellow',
      image: '/IMG_7462-fotor-20251009173044.png',
      description: 'Lidera e representa o clube, coordenando todas as atividades e equipes para cumprir a missão e os ideais dos Desbravadores'
    },
    {
      name: 'Cristiny Corrêa',
      role: 'Diretora Associada',
      color: 'blue',
      image: '/WhatsApp Image 2025-10-09 at 17.35.24-fotor-2025100917366 copy.png',
      description: 'Auxilia o diretor na liderança e organização das atividades do clube, garantindo o bom funcionamento das unidades e eventos'
    },
    {
      name: 'Paulo Ferreira',
      role: 'Diretor Associado',
      color: 'orange',
      image: '/paulo-ferreira/WhatsApp Image 2025-08-20 at 17.27.58-fotor-2025101002427.png',
      description: 'Apoia o diretor no planejamento e condução dos acampamentos, assegurando a integração das unidades e o êxito das experiências do clube'
    },
    {
      name: 'Wagner Corrêa',
      role: 'Secretário',
      color: 'green',
      image: '/WhatsApp Image 2025-10-09 at 19.56.10.jpeg',
      description: 'Responsável pela documentação, registros e comunicação oficial do clube, mantendo tudo organizado e atualizado'
    }
  ];

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentLeaderSlide((prev) => (prev + 1) % leaders.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile, leaders.length]);

  const nextLeaderSlide = () => {
    setCurrentLeaderSlide((prev) => (prev + 1) % leaders.length);
  };

  const prevLeaderSlide = () => {
    setCurrentLeaderSlide((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <>
      {/* Nossa História */}
      <section className="py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-orange-500">História</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  Fundado em 2018, na cidade de Vila Velha – Espírito Santo, o Clube de Desbravadores da Praia nasceu com a missão de formar adolescentes fiéis a Deus, úteis à comunidade e prontos para servir, seguindo os princípios do movimento dos Desbravadores.
                </p>
                <p>
                  Ao longo de quase uma década de história, temos sido um farol de esperança e crescimento espiritual para crianças e adolescentes, oferecendo atividades que desenvolvem disciplina, coragem, solidariedade e amor à natureza.
                </p>
                <p>
                 Mais do que um clube, somos uma família unida pela fé, determinada a salvar do pecado e guiar no serviço, levando a mensagem de Deus através de cada gesto e cada missão.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/momentos-especiais/WhatsApp Image 2025-08-20 at 17.42.38 (3).jpeg"
                alt="Desbravadores na praia"
                className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-12 lg:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Missão e <span className="text-green-600">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos princípios fundamentais que guiam cada atividade e formam o caráter de nossos desbravadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-600 text-sm">
                Conduzir adolescentes a uma experiência verdadeira com Jesus Cristo, desenvolvendo suas habilidades para o serviço e liderança.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossos Valores</h3>
              <p className="text-gray-600 text-sm">
                Fé, integridade, respeito, compaixão, justiça, responsabilidade e compromisso com a excelência em tudo que fazemos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Visão</h3>
              <p className="text-gray-600 text-sm">
                Ser reconhecidos como um clube que forma adolescentes íntegros, preparados para impactar positivamente suas comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos Especiais */}
      <section className="py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Momentos <span className="text-blue-600">Especiais</span>
            </h2>
            <p className="text-lg text-gray-600">
              Registros dos nossos melhores momentos de aventura, aprendizado e conhecimento
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${currentMomentSlide * 100}%)` }}
              >
                {Array.from({ length: totalMomentSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6 px-4 max-w-md mx-auto md:max-w-none`}>
                      {getImagesForSlide(slideIndex).map((image, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          <img
                            src={image}
                            alt={`Momento especial ${slideIndex * imagesPerSlide + index + 1}`}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {totalMomentSlides > 1 && (
              <>
                <button
                  onClick={prevMomentSlide}
                  className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextMomentSlide}
                  className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalMomentSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMomentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentMomentSlide
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Nossa Liderança */}
      <section className="py-12 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-yellow-500">Liderança</span>
            </h2>
            <p className="text-lg text-gray-600">
              Conheça os líderes dedicados que fazem a diferença na vida de nossos desbravadores
            </p>
          </div>

          {isMobile ? (
            <div className="relative max-w-md mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentLeaderSlide * 100}%)` }}
                >
                  {leaders.map((leader, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className={`w-full h-full rounded-full object-cover ring-4 ring-${leader.color}-400`}
                            loading="lazy"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                        <p className={`text-${leader.color}-600 font-semibold text-sm mb-2`}>{leader.role}</p>
                        <p className="text-gray-600 text-sm">
                          {leader.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevLeaderSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Líder anterior"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={nextLeaderSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Próximo líder"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {leaders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLeaderSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentLeaderSlide
                        ? 'bg-yellow-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para líder ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={`w-full h-full rounded-full object-cover ring-4 ring-${leader.color}-400`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className={`text-${leader.color}-600 font-semibold text-sm mb-2`}>{leader.role}</p>
                  <p className="text-gray-600 text-sm">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </>
  );
}
