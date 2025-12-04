import { useState, useEffect } from 'react';
import { Star, Package, Calendar, Users, Facebook, Instagram, Mail, MapPin, Check, X, ChevronLeft, ChevronRight, MessageCircle, ChevronDown, Search, Menu, Shield, ArrowRight } from 'lucide-react';
import { ClubeSection } from './components/ClubeSection';
import { PartnerCard } from './components/PartnerCard';

function App() {
  const getInitialSection = () => {
    const hash = window.location.hash.replace('#', '') || 'inicio';
    return ['inicio', 'clube', 'planos', 'beneficios'].includes(hash) ? hash : 'inicio';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection());
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'inicio';
      if (['inicio', 'clube', 'planos', 'beneficios'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Julia Siqueira',
      role: 'Sócia Platinum há 1 mês',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'Ser Sócio Desbravador me faz sentir parte de algo maior. Saber que minha contribuição ajuda o clube a formar adolescentes com valores e propósito é uma satisfação enorme'
    },
    {
      id: 2,
      name: 'Sergio Otone',
      role: 'Sócio Gold há 1 mês',
      image: "/sergio-otone/WhatsApp Image 2025-09-20 at 13.18.49 (3)-fotor-20251009181529.png",
      text: 'Mesmo fazendo parte da diretoria, decidi também ser Sócio Desbravador, porque acredito no exemplo. Contribuir financeiramente é mais uma forma de mostrar meu amor pelo clube'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const partnerCompanies = [
    {
      id: 1,
      name: 'Mariana Prado',
      shortDescription: 'Especialista em Literatura Infantil',
      fullDescription: 'Programa de curadoria com duração de 3 meses com um desconto de 10% para sócios',
      discount: '10% na Curadoria',
      searchTerms: 'mariana prado curadoria literatura infantil',
      link: 'https://www.instagram.com/maridabolsamagica/'
    },
    {
      id: 2,
      name: 'Usaflex Praia da Costa',
      shortDescription: 'Calçados femininos com conforto e elegância',
      fullDescription: 'Referência em moda e conforto, oferecendo calçados que unem design moderno, qualidade e bem-estar para o dia a dia. Válido apenas para o Shopping Praia da Costa',
      discount: '10%',
      searchTerms: 'calçados usaflex shopping',
      link: 'https://www.instagram.com/usaflex_vv/'
    },
    {
      id: 3,
      name: 'Melissa Praia da Costa',
      shortDescription: 'Calçados e acessórios icônicos, design brasileiro e sustentabilidade',
      fullDescription: 'Moda de alto estilo, com designs exclusivos, coleções limitadas e compromisso sustentável. Válido apenas para o Shopping Praia da Costa',
      discount: '10%',
      searchTerms: 'calçados melissa infantil',
      link: 'https://www.instagram.com/melissapraiadacosta/'
    },
    {
      id: 4,
      name: 'Sass Glasses',
      shortDescription: 'Óculos exclusivos e com estilo',
      fullDescription: 'Óculos exclusivos e com estilo para valorizar seu visual',
      discount: '20%',
      searchTerms: 'sass glasses ôculos',
      link: 'https://www.instagram.com/sass_glasses/'
    },
    {
      id: 5,
      name: 'Studio Marlon Castro',
      shortDescription: 'Academia personalizada',
      fullDescription: 'Academia com treinos personalizados e acompanhamento profissional para seus objetivos',
      discount: '10% no plano semestral',
      searchTerms: 'studio marlon castro personal saude treino',
      link: 'https://www.instagram.com/marlonncastroo/'
    },
    {
      id: 6,
      name: 'Sallen Almeida',
      shortDescription: 'Centro de Treinamento de Futevolei',
      fullDescription: 'Centro de Treinamento de Futevolei com instrutores especializados e treinos para todos os níveis',
      discount: '10% no 1° mês',
      searchTerms: 'sallen almeida personal futevolei saude',
      link: 'https://www.instagram.com/sall3ncosta/'
    },
    {
      id: 7,
      name: 'Amanda Hastenreiter',
      shortDescription: 'Consultora de estilo',
      fullDescription: 'Serviços Selecionados: Consultoria completa, travel planner (consultoria de mala de viagem), armário cápsula personal shopper',
      discount: '10% selecionados',
      searchTerms: 'amanda hastenreiter estilo consultora imagem',
      link: 'https://www.instagram.com/amandahastenreiter/'
    },
    {
      id: 8,
      name: 'Gráfica Cromia',
      shortDescription: 'Gráfica especializada em impressões e embalagens personalizadas',
      fullDescription: 'Produzimos embalagens, bolsas de papel e impressos gráficos com qualidade profissional e acabamento premium',
      discount: '5%',
      searchTerms: 'grafica cromia',
      link: 'https://www.instagram.com/graficacromia'
    },
    {
      id: 9,
       name: 'HRJ Consultoria Tributária',
      shortDescription: 'Soluções tributárias e auditoria estratégica para grandes empresas',
      fullDescription: 'Atuamos na recuperação de créditos fiscais e no compliance tributário, garantindo eficiência e segurança para grandes empresas',
      discount: '5%',
      searchTerms: 'consultoria tributaria',
      link: 'https://www.instagram.com/hrjinteligenciatributaria/'
    },
     {
      id: 10,
      name: 'Carol Toledo',
      shortDescription: 'Contratos Estratégicos e Registro de Marcas',
      fullDescription: 'Advocacia especializada em Contratos Estratégicos e Registro de Marcas',
      discount: '10% em registro',
      searchTerms: 'Carol Toledo advogada marcas assessoria',
      link: 'https://www.instagram.com/carolctoledo/'
    },
     {
      id: 11,
      name: 'Rafael Martins',
      shortDescription: 'Aprenda a vender produtos físicos online',
      fullDescription: 'Cursos e consultoria para vender produtos físicos com uma loja virtual',
      discount: '10% em cursos',
      searchTerms: 'rafael martins ecommerce digital',
      link: 'https://www.instagram.com/rafaelmartinsecom/'
    },
     {
      id: 12,
      name: 'HomeTech',
      shortDescription: 'Deixamos sua casa totalmente tecnológica',
      fullDescription: 'Automação residencial deixando sua casa totalmente tecnológica e conectada',
      discount: '5% em serviços',
      searchTerms: 'home tech automação residencial',
      link: 'https://www.instagram.com/hometechvix/'
    },
     {
      id: 13,
      name: 'Andressa Vasconcelos',
      shortDescription: 'Nutrição Infantil',
      fullDescription: 'Nutricionista especializada em Nutrição Infantil com atendimento personalizado',
      discount: '15% na 1° consulta',
      searchTerms: 'andressa vasconcelos saude nutrição infantil',
      link: 'https://www.instagram.com/nutriandressavasconcelos/'
    },
     {
      id: 14,
      name: 'Luciane Segatto',
      shortDescription: 'Terapia capilar',
      fullDescription: 'Especialista em terapia capilar com tratamentos avançados para seus cabelos',
      discount: '10% em serviços',
      searchTerms: 'luciane segatto tratento capilar',
      link: 'https://www.instagram.com/luciane.segatto/'
    },
     {
      id: 15,
      name: 'Vw Segatto',
      shortDescription: 'Serviços Automotivos em geral',
      fullDescription: 'Vw Segatto: Serviços Automotivos especializados em mecânica e manutenção de veículos',
      discount: '10%',
      searchTerms: 'vw segatto automotivo',
      link: 'https://www.instagram.com/vwsegatto/'
    },
     {
      id: 16,
      name: 'Tatico Soluções Empresariais',
      shortDescription: 'Consultoria empresarial e mentoria personalizada',
      fullDescription: 'Especialista em impulsionar negócios de sucesso',
      discount: '10% no Diagnóstico',
      searchTerms: 'taty costa consultoria empresarial mentora',
      link: 'https://www.instagram.com/tatycosta.mentora/'
    }, {
      id: 17,
      name: 'Portal Madeiras',
      shortDescription: 'Especialistas em Tábuas e Maderites',
      fullDescription: 'Portal Madeiras: Somos especialistas em Tábuas e Maderites com qualidade garantida',
      discount: '5%',
      searchTerms: 'portal madeiras',
      link: 'https://www.instagram.com/port.madeiras/'
    },
     {
      id: 18,
      name: 'Nadyne Passos',
      shortDescription: 'Psicóloga',
      fullDescription: 'Nadyne Passos: Psicóloga ajudando você a descobrir seu valor e potencial interior',
      discount: '10% na 1° consulta',
      searchTerms: 'nadyne passos psicologa saude',
      link: 'https://www.instagram.com/nadyne_psi'
    },
     {
      id: 19,
      name: 'Anfora',
      shortDescription: 'Locação de itens',
      fullDescription: 'Locação de itens para festas e eventos, oferecendo qualidade e praticidade',
      discount: '5% todos itens',
      searchTerms: 'anfora locação itens',
      link: 'https://www.instagram.com/__anfora/'
    },
     {
      id: 20,
      name: 'Auto Fera Shopcar',
      shortDescription: 'Loja de produtos automotivos',
      fullDescription: 'Loja completa de produtos automotivos com qualidade e bom preço',
      discount: '5%',
      searchTerms: 'auto fera shopcar automotivo',
      link: 'https://www.instagram.com/autofera_shopcar/'
    },
     {
      id: 21,
       name: 'Juliana Otone',
      shortDescription: "Fonoaudióloga",
      fullDescription: 'Fonoaudióloga especializada em terapia da fala e comunicação',
      discount: '5% na 1° consulta',
      searchTerms: 'juliana otone fonodióloga saude',
      link: 'https://www.instagram.com/afonopira/'
    },
     {
      id: 22,
      name: 'Vanessa Regly',
      shortDescription: 'Advogada & Consultora em Inclusão',
      fullDescription: 'Advogada & Consultora especializada em Inclusão e acessibilidade',
      discount: '5% serviços',
      searchTerms: 'vanessa regly advogada consultora saude',
      link: 'https://www.instagram.com/dra.vanessaregly/'
    },
     {
      id: 23,
      name: 'Renan Brindes Personalizados',
      shortDescription: 'Brindes Personalizados',
      fullDescription: 'Criação de Brindes Personalizados para empresas e eventos',
      discount: '5%',
      searchTerms: 'renan brindes personalizados',
      link: 'https://www.instagram.com/renanbrindes/'
    },
     {
      id: 24,
      name: 'Chess Lab',
      shortDescription: 'Aceleradora de Ecommerce',
      fullDescription: 'Aceleradora de Ecommerce para impulsionar seu negócio digital',
      discount: '20% na 1° mês',
      searchTerms: 'chess lab ecommerce digital',
      link: 'https://www.instagram.com/chess.lab/'
    },
     {
      id: 25,
      name: 'Julio Frutas',
      shortDescription: 'O rei das frutas',
      fullDescription: 'O rei das frutas com produtos frescos e de qualidade direto da feira',
      discount: 'Em Breve',
      searchTerms: 'julio frutas',
      link: 'https://www.instagram.com/barracadojulio/'
    },
    {
      id: 26,
      name: 'Carioca Sucos',
      shortDescription: 'Point de sucos naturais',
      fullDescription: 'Point de sucos naturais frescos e saudáveis para seu dia a dia',
      discount: 'Em Breve',
      searchTerms: 'carioca sucos naturais',
      link: 'https://www.instagram.com/carioca.sucos/'
    },
    {
      id: 27,
      name: 'WorkFlow',
      shortDescription: 'Centralize o atendimento da sua empresa',
      fullDescription: 'Centralize o atendimento da sua empresa com tecnologia e eficiência',
      discount: 'Em Breve',
      searchTerms: 'workflow empresarial atendimento',
      link: 'https://www.instagram.com/workflow.app_chatbot'
    },
    {
      id: 28,
      name: 'MD Refrigeração',
      shortDescription: 'Instalação e manutenção de ar condicionado',
      fullDescription: 'Instalação e manutenção de ar condicionado com profissionais qualificados',
      discount: 'Em Breve',
      searchTerms: 'refrigeracao ar condicionado',
      link: 'https://www.instagram.com/mdrefrigeracao19/'
    },
    {
      id: 29,
      name: 'Paulo Mota',
      shortDescription: 'Fotografia como posicionamento de imagem',
      fullDescription: 'Paulo Mota: Fotografia profissional como posicionamento de imagem para empresas',
      discount: 'Em Breve',
      searchTerms: 'paulo mota fotografia posicionamento',
      link: 'https://www.instagram.com/paulomotafotografia/'
    },
    {
      id: 30,
      name: 'Barão do Açai',
      shortDescription: "Distribuidora de polpa de Açaí",
      fullDescription: 'Venda de polpa de Açaí e complementos',
      discount: 'Em Breve',
      searchTerms: 'barao açai comida',
      link: 'https://www.instagram.com/baraodoacaidistribuidora/'
    },
    {
      id: 31,
      name: 'Primazia',
      shortDescription: 'HOF e Odontologia',
      fullDescription: 'HOF e Odontologia unidas para valorizar o seu melhor sorriso',
      discount: 'Em Breve',
      searchTerms: 'primazia dentista odontologia',
      link: 'https://www.instagram.com/clinica.primazia/'
    },
    {
      id: 32,
      name: 'Play School',
      shortDescription: 'Escola especializada em inglês',
      fullDescription: 'Escola especializada em inglês para crianças com método lúdico e eficiente',
      discount: 'Em Breve',
      searchTerms: 'play school ingles educação',
      link: 'https://www.instagram.com/playschoolbrasil/'
    },
    {
      id: 33,
      name: 'Delicias do Tirol',
      shortDescription: 'Produtos direto da roça',
      fullDescription: 'Produtos direto da roça com sabor caseiro e autêntico',
      discount: 'Em Breve',
      searchTerms: 'delicias tirol comida produtos roça',
      link: 'https://www.instagram.com/delicias.do.tirol/'
    },
    {
      id: 34,
      name: 'Alynie Will',
      shortDescription: 'Emagrecimento, Cardiologia e Nutrologia',
      fullDescription: 'Nutróloga especializada em Emagrecimento, Cardiologia e Nutrologia',
      discount: 'Em Breve',
      searchTerms: 'alynie will emagrecimento nutrologa saude',
      link: 'https://www.instagram.com/dra.alyniewill/'
    },
    {
      id: 35,
      name: 'Erick Personal',
      shortDescription: 'Treinos Personalizados e Consultoria Online',
      fullDescription: 'Treinos Personalizados e Consultoria Online para atingir seus objetivos',
      discount: 'Em Breve',
      searchTerms: 'erick personal fitness',
      link: 'https://www.instagram.com/erickmeirelespersonal/'
    },
    {
      id: 36,
      name: 'Perfil Restaurantes',
      shortDescription: 'Self-service, rodízio e à la carte',
      fullDescription: 'Self-service, rodízio e à la carte com comida de qualidade',
      discount: 'Em Breve',
      searchTerms: 'perfil restaurantes comida',
      link: 'https://www.instagram.com/restauranteperfil/'
    },
    {
      id: 37,
      name: 'MIDHU Cosméticos',
      shortDescription: 'Seu momento, seu respiro, seu cuidado',
      fullDescription: 'Venda de Cosméticos e cuidados pessoais para seu bem-estar e beleza',
      discount: 'Em Breve',
      searchTerms: 'midhu cosméticos beleza',
      link: 'https://www.instagram.com/midhucosmeticos/'
    },
    {
      id: 38,
      name: 'Essenza Squadra',
      shortDescription: 'Material Esportivo e Fitness',
      fullDescription: 'Venda de Material Esportivo e Fitness de alta qualidade para seus treinos',
      discount: 'Em Breve',
      searchTerms: 'essenza squadra roupa fitness',
      link: 'https://www.instagram.com/essenzasquadra/'
    },
    {
      id: 39,
      name: 'Loop Kids',
      shortDescription: 'Mesas de Jogos e Brinquedos',
      fullDescription: 'Loop Kids: Locação de Mesas de Jogos e Brinquedos para festas infantis inesquecíveis',
      discount: 'Em Breve',
      searchTerms: 'loop kids locação brinquedos',
      link: 'https://www.instagram.com/loop.kids/'
    },
    {
      id: 40,
      name: 'Rodrigo Corcino',
      shortDescription: 'Neuropediatra especialista em Autismo',
      fullDescription: 'Neuropediatra especialista em Autismo, oferecendo atendimento personalizado e acompanhamento para crianças',
      discount: 'Em Breve',
      searchTerms: 'rodrigo corcino neuropediatra saude autismo',
      link: 'https://www.instagram.com/drrodrigocorcinoneuroped/'
    },
  ];

  const partners = partnerCompanies
    .filter(partner => !partner.discount.toLowerCase().includes('em breve'))
    .map(partner => ({
      name: partner.name,
      discount: partner.discount,
      shortDescription: partner.shortDescription,
      fullDescription: partner.fullDescription,
      link: partner.link,
      image: getPartnerImage(partner.name)
    }));

  function getPartnerImage(partnerName: string): string | undefined {
    const imageMap: { [key: string]: string } = {
      'MIDHU Cosméticos': '/520281855_17846432826526076_2978160867539881913_n. copy.jpg',
      'Mariana Prado': '/mariana-prado/mariana.jpeg.jpg',
      'Taty Costa': '/taty-costa/1.jpg',
      'Rodrigo Corcino': '/rodrigo-corcino/325185493_475832904741174_6009653405693186822_n..jpg',
      'Anfora': '/anfora/489744502_1699564817612603_6487046323882617235_n. copy copy.jpg',
      'Studio Marlon Castro': '/studio-marlon/2 copy.jpg',
      'Amanda Hastenreiter': '/amanda-hastenreiter/3 copy.jpg',
      'Sallen Almeida': '/sallen-almeida/Move on !!!!! .Vestindo serie ouro da @squadra_oficial . Descrevo esse material em uma palavra-  copy copy.jpg',
      'Essenza Squadra': '/essenza-squadra/475756504_668226198872119_5342152064430325660_n. copy.jpg',
      'Carol Toledo': '/carol-toledo/474641049_18482749879048892_1106793479925009027_n. copy.jpg',
      'Rafael Martins': '/rafael-martins/4 copy.jpg',
      'HomeTech': '/home-tech/534303763_17910260268192549_4749112964959181747_n. copy copy copy.jpg',
      'Andressa Vasconcelos': '/andressa-vasconcelos/443844919_1186275459206420_5915919741446610902_n. copy copy.jpg',
      'Luciane Segatto': '/luciane-segatto/466982877_533766872815234_7756966585948765596_n. copy copy.jpg',
      'Vw Segatto': '/vw-segatto/10 copy.jpg',
      'Loop Kids': '/loop-kids/424926422_3728554757433634_5123167556507636003_n. copy.jpg',
      'Portal Madeiras': '/portal-madeira/5.jpg',
      'Nadyne Passos': '/nadyne-passos/489608387_475746338865716_5661852849399704938_n. copy copy.jpg',
      'Play School': '/home-play-school/9re.png',
      'Auto Fera Shopcar': '/auto-fera-shopcar/117176420_114022000249893_2885753175732531306_n copy.jpg',
      'MD Refrigeração': '/md-refrigeracao/11.jpg',
      'Vanessa Regly': '/vanessa-regly/535341484_18535831426057241_3867467237104827410_n. copy.jpg',
      'Renan Brindes Personalizados': '/renan-brindes-personalizados/558688327_18058308911544250_2997466184651862813_n..jpg',
      'Carioca Sucos': '/carioca-sucos/240395499_554685985724720_4968891582518352115_n..jpg',
      'Julio Frutas': '/julio-frutas/166362046_150646506958892_4614088629412609334_n..jpg',
      'Chess Lab': '/chess-lab/8.jpeg',
      'Juliana Otone': '/renan-juliana-otone/94834216_1152469451768950_3492402787877126144_n. copy.jpg',
      'Paulo Mota': '/paulo-mota/541935506_18525254353057356_2439450865202977761_n..jpg',
      'Barão do Açai': '/barao-do-acai/6re.png',
      'Primazia': '/primazia/519256270_17967980879925704_6207942635767733048_n..jpg',
      'Sass Glasses': '/renan-sass-glasses/275980996_489521845959260_7398789839727510852_n. copy.jpg',
      'Delicias do Tirol': '/delicias-do-tirol/363958022_3152991514845720_5735694861385267132_n..jpg',
      'Alynie Will': '/alynie-will/463803311_794934405994545_6591379054908915588_n..jpg',
      'Erick Personal': '/erick-personal/361540602_291216966790631_5639134789293009669_n..jpg',
      'WorkFlow': '/renan-workflow/Com o Workflow.jpg',
      'Perfil Restaurantes': '/perfil-restaurantes/531270448_18418127812104049_6830252492835395672_n..jpg',
      'HRJ Consultoria Tributária': '/hrj-consultoria-tributaria/111hj copy.jpg',
      'Gráfica Cromia': '/grafica-cromia/111cr copy.jpg',
      'Usaflex Praia da Costa': '/usaflex-praia-da-costa/111 copy.jpg',
      'Melissa Praia da Costa': '/melissa-praia-da-costa/1112 copy.jpg',
      'Tatico Soluções Empresariais': '/tatico-solucoes-empresariais/111tat copy copy.png'
    };
    return imageMap[partnerName];
  }

  const filteredPartners = partnerCompanies.filter(partner =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.searchTerms.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const partnersPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(partners.length / partnersPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % totalPages);
    }, 10000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const nextPartnerSlide = () => {
    setCurrentPartnerSlide((prev) => (prev + 1) % totalPages);
  };

  const prevPartnerSlide = () => {
    setCurrentPartnerSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPartnerSlide();
    }
    if (isRightSwipe) {
      prevPartnerSlide();
    }
  };

  const getPartnersForPage = (pageIndex: number) => {
    const start = pageIndex * partnersPerPage;
    const end = start + partnersPerPage;
    return partners.slice(start, end);
  };

  const navigateToSection = (section: string) => {
    window.location.hash = section;
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateToSection('inicio')}>
              <img
                src="/logodbv copy.png"
                alt="Desbravadores da Praia"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-bold text-gray-900 leading-tight">Sócio Desbravador</span>
                <span className="text-xs text-gray-600 leading-tight">Dbv da Praia</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <button
                onClick={() => navigateToSection('inicio')}
                className={`${activeSection === 'inicio' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600`}
              >
                Início
              </button>
              <button
                onClick={() => navigateToSection('clube')}
                className={`${activeSection === 'clube' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600`}
              >
                Clube
              </button>
              <button
                onClick={() => navigateToSection('planos')}
                className={`${activeSection === 'planos' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600`}
              >
                Planos
              </button>
              <button
                onClick={() => navigateToSection('beneficios')}
                className={`${activeSection === 'beneficios' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600`}
              >
                Benefícios
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => {
                  navigateToSection('inicio');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${activeSection === 'inicio' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'} hover:bg-gray-50`}
              >
                Início
              </button>
              <button
                onClick={() => {
                  navigateToSection('clube');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${activeSection === 'clube' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'} hover:bg-gray-50`}
              >
                Clube
              </button>
              <button
                onClick={() => {
                  navigateToSection('planos');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${activeSection === 'planos' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'} hover:bg-gray-50`}
              >
                Planos
              </button>
              <button
                onClick={() => {
                  navigateToSection('beneficios');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg ${activeSection === 'beneficios' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'} hover:bg-gray-50`}
              >
                Benefícios
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Seção Início */}
      {activeSection === 'inicio' && (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/20set2025-batismo-desbravadores-275 (1).jpg"
            alt="Desbravadores"
            className="w-full h-full object-cover object-center opacity-40 md:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 md:from-black/30 md:via-black/10 md:to-black/30"></div>
        </div>
        <div className="relative text-center px-4 py-20 max-w-4xl z-10 -mt-16 sm:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Apoie quem está <span className="text-yellow-400">desbravando</span> um futuro melhor
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/40 mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Junte-se ao movimento que transforma vidas através da aventura e propósito. Seja um Sócio Desbravador e faça parte dessa missão
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigateToSection('planos')}
              className="group relative bg-yellow-600 text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-700 transition-colors text-base flex items-center gap-2 shadow-2xl"
            >
              Quero ser Sócio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

{/* Seu apoio faz a diferença */}
      <section className="py-8 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">
                  Seu apoio faz a <span className="text-green-600">diferença</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify">
                  Cada contribuição ajuda a proporcionar experiências transformadoras para nossos jovens desbravadores, desde uniformes e equipamentos até eventos especiais e acampamentos
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Eventos e Acampamentos</h4>
                      <p className="text-gray-600 text-sm">
                        Organizamos atividades que desenvolvem habilidades e valores
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ações Comunitárias</h4>
                      <p className="text-gray-600 text-sm">
                        Promovemos projetos sociais que beneficiam toda a comunidade
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">+ de 70 Adolescentes</h4>
                      <p className="text-gray-600 text-sm">
                        Participam ativamente das atividades do clube
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/20set2025-batismo-desbravadores-057 (1).jpg"
                  alt="Desbravadores em ação"
                  className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Parceiros - Carrossel */}
      <section className="py-8 sm:py-12 lg:py-14 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nossos <span className="text-blue-600">Parceiros</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Benefícios exclusivos para sócios através de uma rede de parceiros selecionados
            </p>
          </div>

          <div className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPartnerSlide * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8 px-4 max-w-md mx-auto md:max-w-none`}>
                      {getPartnersForPage(pageIndex).map((partner, index) => {
                        const PartnerCard = partner.link ? 'a' : 'div';
                        const linkProps = partner.link ? { href: partner.link, target: '_blank', rel: 'noopener noreferrer' } : {};
                        const isComingSoon = partner.discount.toLowerCase().includes('em breve');

                        return (
                          <PartnerCard key={index} {...linkProps} className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer ${isComingSoon ? 'opacity-70 blur-sm' : ''}`}>
                            {partner.image ? (
                              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                <img
                                  src={partner.image}
                                  alt={partner.name}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            ) : (
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-blue-600" />
                              </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{partner.name}</h3>
                            <p className={`${isComingSoon ? 'text-gray-500' : 'text-green-600'} font-semibold text-center mb-4`}>
                              {partner.discount}
                            </p>
                            <p className="text-gray-600 text-sm text-center">
                              {partner.description}
                            </p>
                          </PartnerCard>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <>
                <button
                  onClick={prevPartnerSlide}
                  className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextPartnerSlide}
                  className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Próxima página"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                <div className="hidden">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPartnerSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                        index === currentPartnerSlide
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para página ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
        </>
      )}

      {/* Seção Clube */}
      {activeSection === 'clube' && <ClubeSection />}

      {/* Seção Planos */}
      {activeSection === 'planos' && (
        <section className="py-8 sm:py-12 lg:py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Planos de <span className="text-blue-600">Sócios</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Escolha o plano que melhor se adequa às suas possibilidades e comece a apoiar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
            {/* Silver Plan */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow relative flex flex-col">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Silver</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 50</span>
                <span className="text-gray-600">/mês</span>
              </div>


              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cartão de sócio</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Copo Térmico Personalizado 473ml</span>
                 </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Desconto em Empresas Parceiras</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Relatórios trimestral de atividades</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Acesso ao grupo exclusivo</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Convites para eventos especiais</span>
                </li>
              </ul>

              <a
                href="https://www.asaas.com/c/qhw157lzaut2cynm"
                className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors mt-auto block text-center"
              >
                Quero ser Sócio Silver
              </a>
            </div>

            {/* Gold Plan - Popular */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-shadow relative border-4 border-yellow-400 transform md:-translate-y-4 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                  Mais Popular
                </span>
              </div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Gold</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 100</span>
                <span className="text-gray-600">/mês</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Todos os benefícios do Silver</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Copo Térmico Personalizado 500ml</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">15% Desconto nas Campanhas Mensais do Clube (pizza, cantina, lava jato, etc)</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Acesso VIP nas Campanhas Mensais (entrega antecipada, mesa reservada)</span>
                </li>
              </ul>

              <a
                href="https://www.asaas.com/c/gkwmocty07g5kn14"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors mt-auto block text-center"
              >
                Quero ser Sócio Gold
              </a>
            </div>

            {/* Platinum Plan */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow relative flex flex-col">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Platinum</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 150</span>
                <span className="text-gray-600">/mês</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Todos os benefícios do Gold</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Garrafa Térmica Personalizada 800ml</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">30% Desconto nas Campanhas Mensais do Clube (pizza, cantina, laja jato, etc)</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Acesso VIP nas Campanhas Mensais (fila preferencial)</span>
                </li>
              </ul>

              <a
                href="https://www.asaas.com/c/8sgqbgbv5lhmyppp"
                className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors mt-auto block text-center"
              >
                Quero ser Sócio Platinum
              </a>
            </div>
          </div>

          {/* Compare Plans Table */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Compare os planos</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-900 font-semibold">Benefícios</th>
                    <th className="text-center py-4 px-4 text-gray-900 font-semibold">Silver</th>
                    <th className="text-center py-4 px-4 text-gray-900 font-semibold">Gold</th>
                    <th className="text-center py-4 px-4 text-gray-900 font-semibold">Platinum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Cartão de sócio personalizado</td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Copo/Garrafa Térmica Personalizada</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">473ml</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">500ml</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">800ml</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Relatórios de atividades</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">Trimestral</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">Trimestral</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">Trimestral</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Desconto em Empresas Parceiras</td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Acesso ao grupo exclusivo</td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Convites para eventos especiais</td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Desconto nas Campanhas Mensais</td>
                    <td className="text-center py-4 px-4">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">15%</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-sm text-gray-700">30%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Acesso VIP nas Campanhas</td>
                    <td className="text-center py-4 px-4">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* O que dizem nossos sócios */}
          <div className="mb-8 sm:mb-12 mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">
              O que dizem nossos sócios
            </h3>

            {isMobile ? (
              <div className="relative max-w-md mx-auto px-4">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                          <div className="flex items-start mb-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-14 h-14 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonialSlide
                          ? 'bg-orange-500 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
                    <div className="flex items-start mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8 px-4">Perguntas frequentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Posso cancelar meu sócio a qualquer momento?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 0 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      ❌ Não. A adesão ao Sócio Desbravador é anual e não pode ser cancelada antes do término do período contratado. O valor garante todos os benefícios durante os 12 meses de vigência.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Como recebo os benefícios do meu plano?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Os benefícios digitais são enviados por email, enquanto os físicos são entregues pessoalmente. Os descontos em empresas parceiras devem ser visualizados no proprio site.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Posso mudar de plano depois?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      ❌ Não. Após a adesão, o plano escolhido permanece o mesmo até o fim do período anual. A mudança só pode ser feita na renovação do próximo ano.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">O que está incluso em cada plano?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Cada categoria (Silver, Gold, Platinum) oferece benefícios exclusivos como descontos e participação em ações especiais do clube. Veja os detalhes na página "Planos de Sócios".
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Como funciona o pagamento?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      O pagamento pode ser feito à vista via Pix ou parcelado em até 12x no cartão de crédito, conforme opção escolhida no momento da adesão.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Os benefícios são pessoais ou posso transferir?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 5 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Os benefícios são pessoais e intransferíveis, válidos apenas para o titular cadastrado.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Quando começa a valer meu plano?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 6 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 6 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Seu plano começa a valer a partir da confirmação do pagamento. A carteirinha e os benefícios são liberados em seguida, conforme sua categoria.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Os benefícios valem em qualquer clube?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 7 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 7 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Não. Os benefícios são válidos apenas para o Clube Desbravadores da Praia e empresas/parceiros participantes do projeto Sócio Desbravador.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">O que acontece quando meu plano termina?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 8 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 8 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Você será avisado sobre a renovação antes do fim do período. Assim, pode decidir se deseja renovar e continuar recebendo os benefícios.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 9 ? null : 9)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">O projeto tem fins lucrativos?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 9 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 9 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Não. O valor da adesão é totalmente revertido para apoio às atividades, eventos e manutenção do Clube Desbravadores da Praia.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 10 ? null : 10)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Posso apoiar sem ser desbravador ativo?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 10 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 10 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Sim! O Sócio Desbravador é aberto à comunidade, apoiadores, familiares e simpatizantes do clube.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 11 ? null : 11)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Há limite de vagas ou planos disponíveis?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 11 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 11 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Sim, alguns planos possuem quantidade limitada de adesões para garantir a entrega dos benefícios. Quando um plano esgota, novas adesões ficam em lista de espera.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 12 ? null : 12)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">Como sei se minha adesão foi confirmada?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 12 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 12 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Você receberá um comprovante digital e instruções logo após o pagamento, além da confirmação oficial pelo WhatsApp ou e-mail cadastrado.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 13 ? null : 13)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 text-sm pr-2">O valor da contribuição pode mudar?</h4>
                  <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === 13 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 13 && (
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Sim. Os valores podem ser ajustados anualmente, mas sempre com aviso prévio antes da renovação.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-6 sm:p-8 text-center text-white shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Ainda tem dúvidas?</h3>
            <p className="text-sm sm:text-base mb-5 text-blue-50">
              Entre em contato conosco e tire todas as suas dúvidas.
            </p>
            <a
              href="https://wa.me/5527988243901?text=Estou%20com%20duvida%20no%20s%C3%B3cio%20desbravador%20do%20clube%20desbravadores%20da%20praia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </a>
          </div>
        </div>
      </section>
      )}

      {/* Seção Benefícios */}
      {activeSection === 'beneficios' && (
        <section className="py-6 sm:py-8 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Empresas <span className="text-blue-600">Parceiras</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
              Descontos e benefícios exclusivos para sócios em estabelecimentos parceiros
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-4 sm:mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar Parceiro"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 pl-10 sm:pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 bg-gray-50 transition-colors text-sm sm:text-base"
                />
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Empresas Parceiras */}
          <div className="mb-6 sm:mb-8">

            {filteredPartners.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {filteredPartners.map((partner) => (
                  <PartnerCard
                    key={partner.id}
                    partner={partner}
                    image={getPartnerImage(partner.name)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">Nenhum parceiro encontrado.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      )}


      {/* Footer - Aparece em todas as seções */}
      <footer className="bg-gray-900 text-white py-2 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3"> 
              </div>
              <p className="text-gray-400 text-xs mb-3 max-w-md">
                Apoie o movimento dos Desbravadores e faça parte da formação de jovens com valores de união, aventura, fé e propósito.
              </p>
              <div className="flex space-x-2">
                <a href="https://www.instagram.com/dbvdapraia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/DBVdaPraia/?ref=_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://wa.me/5527988243901?text=Estou%20com%20duvida%20no%20s%C3%B3cio%20desbravador%20do%20clube%20desbravadores%20da%20praia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="mailto:dbvdapraia@gmail.com" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://www.google.com/maps/place/Clube+Liban%C3%AAs/@-20.3301087,-40.2847691,17z" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
