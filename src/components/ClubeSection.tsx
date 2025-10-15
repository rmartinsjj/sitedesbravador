import { Users, Heart, Target, Award } from 'lucide-react';

export function ClubeSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre o <span className="text-blue-600">Clube</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Os Desbravadores da Praia formam jovens com valores, propósito e amor pela natureza
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Formar jovens através de atividades ao ar livre, desenvolvimento de habilidades práticas e valores cristãos.
              Nosso clube trabalha para que cada desbravador desenvolva caráter, liderança e responsabilidade social.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser referência na formação de adolescentes e jovens, oferecendo experiências transformadoras que
              preparam para a vida através do aprendizado prático, aventura e valores sólidos.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Comunidade</h4>
            <p className="text-gray-600 text-sm">
              Ambiente acolhedor que promove amizades e trabalho em equipe
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Valores</h4>
            <p className="text-gray-600 text-sm">
              Formação baseada em princípios cristãos e respeito ao próximo
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Propósito</h4>
            <p className="text-gray-600 text-sm">
              Desenvolvimento de habilidades práticas para a vida
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Conquistas</h4>
            <p className="text-gray-600 text-sm">
              Especialidades, acampamentos e eventos especiais
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossas Atividades</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Atividades Regulares</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Reuniões semanais com classes progressivas</li>
                <li>• Desenvolvimento de especialidades</li>
                <li>• Ordem unida e cerimônias</li>
                <li>• Estudo bíblico e devocionais</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Eventos Especiais</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Acampamentos e bivouaques</li>
                <li>• Camporis regionais e nacionais</li>
                <li>• Projetos comunitários</li>
                <li>• Aventuras ao ar livre</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
