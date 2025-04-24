
import React from 'react';
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
  return (
    <div className="py-16 px-5 md:px-10 lg:px-20 bg-purple-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-10 text-center text-gray-800">
          Mulheres reais, resultados reais:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Mariana S."
            text="Comecei o método há 3 semanas e já estou usando roupas que ficavam no fundo do armário. A melhor parte é que posso fazer tudo em casa, sem precisar de equipamentos!"
            className="p-6"
            rating={5}
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard
            name="Camila R."
            text="O que mais gostei foi a praticidade. São apenas alguns minutos por dia e os resultados aparecem gradualmente. Minha postura melhorou muito também."
            className="p-6"
            rating={5}
            avatarUrl="https://randomuser.me/api/portraits/women/65.jpg"
          />
          <TestimonialCard
            name="Juliana F."
            text="Por anos evitei certos tipos de roupa. Com o método Eleve, recuperei minha confiança e os exercícios são super tranquilos de fazer. Recomendo demais!"
            className="p-6"
            rating={5}
            avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
