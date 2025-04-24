
import React from 'react';
import { Book, Calendar, Sparkle, Headphones, Palette, ListChecks } from 'lucide-react';
import GlassCard from '../GlassCard';
import CTAButton from '../CTAButton';

const bonusItems = [
  {
    icon: Book,
    title: "Método Eleve™ – Despertar do Peitoral",
    description: "Guia completo com técnicas para ativar sua firmeza natural e elevar sua postura.",
    value: "R$49,90"
  },
  {
    icon: Calendar,
    title: "Cronograma de 21 Dias",
    description: "Um plano leve e realista, feito pra caber na sua rotina.",
    value: "R$19,90"
  },
  {
    icon: Sparkle,
    title: "Diário da Autoimagem",
    description: "Um espaço seguro para você registrar sua jornada de transformação interna e externa.",
    value: "R$29,90"
  },
  {
    icon: Headphones,
    title: "Audioguia da Confiança",
    description: "Áudio de reconexão diária com sua voz interna, pra fortalecer sua presença.",
    value: "R$24,90"
  },
  {
    icon: Palette,
    title: "Mini Guia Estético",
    description: "Truques simples pra realçar sua beleza natural com roupas e postura.",
    value: "R$19,90"
  },
  {
    icon: ListChecks,
    title: "Checklist de Rotina Feminina",
    description: "Pequenos rituais diários que fortalecem sua autoestima e bem-estar.",
    value: "R$14,90"
  }
];

const ValueAnchoringSection = () => {
  const totalBonusValue = bonusItems.reduce((acc, item) => {
    const price = parseFloat(item.value.replace("R$", "").replace(",", "."));
    return acc + price;
  }, 0);

  return (
    <div className="py-20 px-5 md:px-10 lg:px-20" style={{ backgroundColor: '#fef9f9' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Já pensou quanto custaria transformar sua imagem, postura e autoestima?
            <span className="block text-rose-500">Com o Eleve™, você recebe tudo isso — e mais — como um presente.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Para você que escolhe se cuidar de forma leve e autêntica, o Eleve™ entrega mais do que um método. Ele entrega uma jornada completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bonusItems.map((item, index) => {
            const Icon = item.icon;
            const isCore = index <= 1;
            return (
              <div
                key={index}
                className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-100 transform hover:-translate-y-1 transition-all duration-300"
              >
                {!isCore && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-400 to-purple-400 text-white text-sm font-bold py-1 px-3 rounded-full">
                    Bônus
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <p className="text-rose-500 font-bold">
                      Valor real: <span className="line-through">{item.value}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl p-8 text-white text-center mb-12 shadow-xl">
          <h3 className="text-2xl font-serif font-bold mb-4">
            VALOR TOTAL DOS BÔNUS: <span className="line-through">R$ {totalBonusValue.toFixed(2).replace(".", ",")}</span>
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Mas fique tranquila, que nosso objetivo é ajudar o máximo de mulheres, por um preço acessível, e hoje você irá pagar muito menos que esse valor. Aliás, quanto vale essa transformação?
          </p>
        </div>

        <div className="text-center">
          <CTAButton
            size="lg"
            variant="primary"
            className="bg-gradient-to-r from-rose-400 to-purple-500 hover:from-rose-500 hover:to-purple-600 text-white text-xl px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO O MÉTODO ELEVE
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ValueAnchoringSection;
