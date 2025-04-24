
import React from 'react';
import { Heart } from 'lucide-react';
import CTAButton from '../CTAButton';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative pt-16 pb-16 px-5 md:px-9 min-h-[70vh] flex flex-col justify-center items-center bg-black overflow-hidden">
      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center">
        <div className="flex justify-center items-center mb-2 gap-3">
          <h2 className="font-serif font-bold text-xl md:text-2xl text-pink-200">
            Eleve
            <span className="mx-1 text-purple-200">™: Despertar do Peitoral</span>
          </h2>
          <Heart className="ml-2 text-rose-400" />
        </div>

        <h1 className="font-sans font-extrabold uppercase text-2xl md:text-4xl lg:text-5xl tracking-wide text-white mb-3 text-center leading-tight">
          <span>
            <span className="text-rose-500 font-extrabold">
              Recupere a firmeza natural
            </span>
            {" "}sua postura e sua confiança em 21 dias
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto font-sans text-center">
          Método feminino, sem academia, sem cirurgias, resultados reais para o seu alto — com leveza.
        </p>

        <div className="w-full flex justify-center mb-8">
          <img 
            src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
            alt="Método Eleve"
            className="rounded-xl w-full max-w-[600px] h-auto object-cover shadow-lg"
          />
        </div>

        <div className="my-2 w-full flex flex-col items-center">
          <CTAButton
            size="lg"
            variant="primary"
            className="uppercase bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white border-none font-bold text-lg px-10 py-3 shadow-xl rounded-full transition-all"
            onClick={() => onScrollToSection("muscle-info")}
          >
            Descubra o segredo da transformação!
          </CTAButton>
        </div>

        <div className="mt-5 flex justify-center">
          <img
            src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Compra Segura, Satisfação Garantida, Privacidade Protegida"
            className="max-h-12 w-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
