import { useState } from 'react';

interface PartnerCardProps {
  partner: {
    id: number;
    name: string;
    shortDescription?: string;
    fullDescription?: string;
    discount: string;
    link: string;
  };
  image?: string;
}

export function PartnerCard({ partner, image }: PartnerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isComingSoon = partner.discount.toLowerCase().includes('em breve');

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const renderPartnerLogo = () => {
    if (partner.name === 'CASAS BAHIA') {
      return (
        <div className="text-center">
          <div className="text-xl font-bold text-blue-600">CASAS</div>
          <div className="text-xl font-bold text-yellow-500">BAHIA</div>
        </div>
      );
    }
    if (partner.name === 'HOPE') {
      return <div className="text-3xl font-bold text-gray-900">HOPE</div>;
    }
    if (partner.name === 'cashbanx') {
      return (
        <div className="text-2xl font-bold">
          <span className="text-gray-900">cash</span>
          <span className="text-green-500">banx</span>
        </div>
      );
    }
    if (partner.name === 'Hablas') {
      return (
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-1"></div>
          <div className="text-lg font-bold text-red-600">Hablas</div>
        </div>
      );
    }
    if (partner.name === 'English Fluency') {
      return (
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600">English</div>
          <div className="text-lg font-bold text-blue-600">Fluency</div>
        </div>
      );
    }
    if (partner.name === 'Shopee') {
      return (
        <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
          <div className="text-xl font-bold text-white">S</div>
        </div>
      );
    }
    if (partner.name === 'RDC VIAGENS') {
      return (
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-700">RDC</div>
          <div className="text-xs text-blue-700">VIAGENS</div>
        </div>
      );
    }
    if (partner.name === 'Panasonic') {
      return <div className="text-xl font-bold text-blue-600">Panasonic</div>;
    }

    if (image) {
      return (
        <img
          src={image}
          alt={partner.name}
          className="w-full h-full object-contain rounded"
        />
      );
    }

    return (
      <div className="text-lg font-bold text-gray-900 text-center">{partner.name}</div>
    );
  };

  return (
    <div
      className={`flip-card bg-white border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:shadow-md transition-all ${isComingSoon ? 'opacity-70 blur-sm' : ''} ${isFlipped ? 'flipped' : ''}`}
      style={{ minHeight: '300px' }}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white rounded-xl p-3 sm:p-4">
          <div className={`h-32 sm:h-40 flex items-center justify-center mb-2 sm:mb-3 bg-gray-50 rounded-lg p-2 overflow-hidden ${isComingSoon ? 'blur-sm' : ''}`}>
            {renderPartnerLogo()}
          </div>
          <p className="text-xs text-gray-600 mb-3 text-center min-h-[40px] flex items-center justify-center leading-tight">
            {partner.shortDescription}
          </p>
          <div className={`${isComingSoon ? 'bg-gray-500' : 'bg-green-600'} text-white px-3 py-1.5 rounded-lg text-center font-bold text-sm`}>
            {partner.discount}
          </div>
        </div>
        <div className="flip-card-back bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-between text-white">
          <h3 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 text-center leading-tight">{partner.name}</h3>
          <p className="text-xs sm:text-sm text-center mb-2 sm:mb-4 leading-snug px-1 sm:px-2 flex-1 flex items-center">
            {partner.fullDescription}
          </p>
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-sm flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}
