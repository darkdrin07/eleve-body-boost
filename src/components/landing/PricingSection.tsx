import React from 'react';
import AnimatedSection from '../AnimatedSection';
import BadgeRibbon from '../BadgeRibbon';
import GlassCard from '../GlassCard';
import CTAButton from '../CTAButton';

interface PricingSectionProps {
  dataOferta: string;
  onPlanClick: () => void;
}

const PricingSection = ({ dataOferta, onPlanClick }: PricingSectionProps) => {
  return (
    <AnimatedSection id="pricing" className="py-16 px-5 md:px-10 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-12 text-center text-gray-800">
          Comece no seu ritmo:
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Premium Plan */}
          <div className="relative md:w-1/2">
            <BadgeRibbon text="PLANO MAIS VENDIDO" />
            <GlassCard className="border-2 border-rose-500 bg-gradient-to-tr from-pink-200 via-purple-100 to-white shadow-lg pt-8">
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
                alt="Eleve Premium"
                className="w-full h-48 object-cover rounded-t-xl mb-6"
              />
              <div className="text-center mb-4 bg-red-600 py-3 px-4">
                <p className="text-white font-bold">
                  Esta promoção só é válida até o dia {dataOferta}
                </p>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-serif font-bold text-2xl mb-2 text-rose-500">Eleve Premium™</h3>
                <div className="text-3xl font-bold text-rose-500 mb-4">R$19,90</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  <p>Método em PDF</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  <p>Cronograma de 21 dias</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  <p>Acesso vitalício</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-rose-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                  <p>Diário da Autoimagem</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-rose-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                  <p>Checklist de Rotina</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-rose-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                  <p>Audioguia da Confiança</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-rose-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                  <p>Mini Guia Estético</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-rose-500 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">🎁</div>
                  <p>Acesso ao grupo de suporte no Telegram</p>
                </div>
              </div>
              <CTAButton
                fullWidth
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold shadow-lg text-lg border-none rounded-lg"
                onClick={onPlanClick}
              >
                Quero a Experiência Completa
              </CTAButton>
            </GlassCard>
          </div>

          {/* Basic Plan */}
          <div className="relative md:w-1/2">
            <GlassCard className="bg-gray-100 border border-gray-300 shadow-sm">
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                alt="Eleve Essencial"
                className="w-full h-48 object-cover rounded-t-xl mb-6"
              />
              <div className="text-center mb-6">
                <h3 className="font-serif font-bold text-2xl mb-2 text-gray-700">Eleve Essencial™</h3>
                <div className="text-3xl font-bold text-gray-500 mb-4">R$10</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  <p>Método em PDF</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  <p>Cronograma de 21 dias</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  <p>Acesso vitalício</p>
                </div>
              </div>
              <CTAButton
                fullWidth
                variant="outline"
                className="bg-gray-200 text-gray-600 border-gray-400 hover:bg-gray-300 font-medium rounded-lg"
                onClick={onPlanClick}
              >
                Quero Começar Agora
              </CTAButton>
            </GlassCard>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PricingSection;
