
import React from 'react';
import ImageCarousel from '../ImageCarousel';

const beforeAfterImages = [
  {
    before: "https://images.pexels.com/photos/7319293/pexels-photo-7319293.jpeg",
    after: "https://images.pexels.com/photos/7319294/pexels-photo-7319294.jpeg",
    description: "Resultados após 21 dias de dedicação ao método"
  },
  {
    before: "https://images.pexels.com/photos/7319295/pexels-photo-7319295.jpeg",
    after: "https://images.pexels.com/photos/7319296/pexels-photo-7319296.jpeg",
    description: "Transformação natural e duradoura"
  },
  {
    before: "https://images.pexels.com/photos/7319297/pexels-photo-7319297.jpeg",
    after: "https://images.pexels.com/photos/7319298/pexels-photo-7319298.jpeg",
    description: "Mudança visível na postura e autoestima"
  }
];

const ResultsSection = () => {
  return (
    <div className="py-16 px-5 md:px-10 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Resultados Reais do Método Eleve™
        </h2>
        <ImageCarousel images={beforeAfterImages} className="max-w-4xl mx-auto" />
      </div>
    </div>
  );
};

export default ResultsSection;
