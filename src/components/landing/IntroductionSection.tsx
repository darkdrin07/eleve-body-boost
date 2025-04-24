
import React from 'react';
import AnimatedSection from '../AnimatedSection';

const IntroductionSection = () => {
  return (
    <div className="py-16 px-5 md:px-10 lg:px-20 bg-purple-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-800">
          Sabe quando evita abraços apertados ou usar uma blusa mais soltinha porque sente que seu seio não está mais no lugar? 
        </h2>
        <p className="text-lg text-gray-700 md:text-xl leading-relaxed">
          O desconforto de vestir um sutiã e ver o alto não preencher mais como antes, de não se sentir "segura" nas fotos ou encontros, faz parte da rotina de muitas mulheres — e não tem nada a ver com vaidade. É sobre identificação. E é possível mudar isso com respeito ao seu corpo!
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
