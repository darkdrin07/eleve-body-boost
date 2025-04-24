
import React from 'react';
import { Shield } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const GuaranteeSection = () => {
  return (
    <AnimatedSection className="py-12 px-5 md:px-10 lg:px-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Shield className="w-16 h-16 text-emerald-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
          Garantia Incondicional de 7 Dias
        </h2>
        <p className="text-lg text-emerald-700 mb-6">
          Se você não ficar 100% satisfeita com o método, devolvemos seu dinheiro integralmente em até 7 dias após a compra. Sem perguntas, sem complicações!
        </p>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-gray-600 italic">
            "Acreditamos tanto no poder de transformação do Método Eleve™ que oferecemos esta garantia para que você possa experimentar sem riscos."
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GuaranteeSection;
