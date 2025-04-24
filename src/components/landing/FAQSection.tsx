
import React from 'react';
import FAQAccordion from '../FAQAccordion';

const faqItems = [
  {
    question: "Como vou receber o produto?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com instruções de acesso à área de membros, onde poderá baixar todos os materiais do método Eleve™."
  },
  {
    question: "Em quanto tempo terei acesso?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você poderá acessar todo o conteúdo em segundos."
  },
  {
    question: "É seguro comprar aqui?",
    answer: "Absolutamente! Utilizamos os mais avançados sistemas de segurança para proteger suas informações. Suas informações financeiras são criptografadas e nunca armazenadas em nossos servidores."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Seu acesso é vitalício! Uma vez adquirido o método, você poderá acessá-lo sempre que desejar, sem mensalidades ou cobranças adicionais."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de satisfação de 7 dias. Se você não estiver completamente satisfeita com o método, basta nos enviar um e-mail solicitando o reembolso, sem perguntas ou complicações."
  }
];

const FAQSection = () => {
  return (
    <div className="py-16 px-5 md:px-10 lg:px-20 bg-purple-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif font-bold text-2xl md:text-3xl mb-8 text-center text-gray-800">
          Perguntas Frequentes
        </h2>
        <FAQAccordion items={faqItems} className="bg-white rounded-xl p-6" />
      </div>
    </div>
  );
};

export default FAQSection;
