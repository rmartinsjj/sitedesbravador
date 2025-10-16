import { Shield, Award, Target } from 'lucide-react';
import { Carousel } from './Carousel';

export function ClubeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Nossa <span className="text-blue-600">História</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16 text-justify">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Fundado em 2016, o Clube de Desbravadores da Praia iniciou com a missão de formar adolescentes
              em valores cristãos. Em 2020, nos reunimos com o Clube de Desbravadores de Itaparica, com o intuito de formar adolescentes
              que se tornariam agentes de transformação de suas comunidades e levaríamos conhecimento de Deus a toda Região.
            </p>
            <p>
              Ao longo de quase uma década de história, nosso club já foi o lar de dezenas de desbravadores.
              Hoje, mais de 50 jovens fazem parte do clube, prontos para descobrir o mundo e transformá-lo. Mas
              de todas essas jovens mentes, apenas 22 adolescentes estão ativos no clube.
            </p>
            <p>
              Mais do que uma cúpula, somos uma família. Aqui construímos pontes, geramos amizades que farão toda
              a diferença. A vida é uma caminhada com trilhas e desafios que nos elevam a grandes conquistas.
              Clube de Desbravadores da Praia: formando mentes que farão toda a diferença.
            </p>
          </div>
          <div className="relative">
            <img
              src="/WhatsApp Image 2025-08-20 at 17.42.38 (3).jpeg"
              alt="Clube Desbravadores"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Missão e <span className="text-green-600">Valores</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossos princípios fundamentais que guiam cada atividade e formam o caráter
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h4>
            <p className="text-gray-600 text-sm">
              Conduzir adolescentes a um relacionamento de salvação com Jesus, ajudá-los a desenvolver
              seu máximo potencial e leva-los a se tornarem membros responsáveis da Igreja e da sociedade
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Nossos Valores</h4>
            <p className="text-gray-600 text-sm">
              Amor a Deus, integridade, respeito, compaixão, justiça e compromisso. Estes valores cristãos
              moldam o comportamento e orientam as decisões na vida dos nossos adolescentes
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Nossa Visão</h4>
            <p className="text-gray-600 text-sm">
              Ser referência na formação de adolescentes, oferecendo atividades que promovam o desenvolvimento
              espiritual, físico, mental e social
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Momentos <span className="text-blue-600">Especiais</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Registros dos momentos marcantes da aventura, aprendizado e crescimento dos nossos desbravadores
          </p>
        </div>

        <Carousel
          images={[
            '/WhatsApp Image 2025-08-20 at 17.24.00.jpeg',
            '/WhatsApp Image 2025-08-18 at 14.40.28.jpeg',
            '/WhatsApp Image 2025-08-18 at 14.40.29 (1).jpeg',
            '/WhatsApp Image 2025-08-20 at 17.23.59.jpeg',
            '/WhatsApp Image 2025-08-20 at 17.27.23 (1).jpeg',
            '/WhatsApp Image 2025-08-20 at 17.24.02.jpeg',
            '/WhatsApp Image 2025-08-20 at 17.24.22.jpeg',
            '/WhatsApp Image 2025-08-20 at 17.24.23 (1).jpeg',
          ]}
        />

        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-4">
            Nossa <span className="text-yellow-500">Liderança</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça os líderes dedicados que fazem a diferença na vida de nossos desbravadores
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-300">
                <img
                  src="/momentos-especiais/mariana.jpeg.jpg"
                  alt="Luiz Kohler"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Luiz Kohler</h4>
              <p className="text-sm text-yellow-600 font-semibold mb-2">Diretor do Clube</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lidera e representa o clube, coordenando todas as atividades e equipes para cumprir a missão e os ideais dos Desbravadores
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-blue-300"></div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Cristiny Corrêa</h4>
              <p className="text-sm text-blue-600 font-semibold mb-2">Diretora Associada</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Auxilia o diretor na liderança e organização das atividades do clube, garantindo o bom funcionamento das unidades e eventos
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-blue-300"></div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Paulo Ferreira</h4>
              <p className="text-sm font-semibold mb-2">Diretor Associado</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Apoia o diretor no planejamento e condução dos acampamentos, assegurando a integração das unidades e o êxito das experiências do clube
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-blue-300"></div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Wagner Corrêa</h4>
              <p className="text-sm text-green-600 font-semibold mb-2">Secretário</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Responsável pela documentação, registros e comunicação oficial do clube, mantendo tudo organizado e atualizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
