
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-10 px-5 md:px-10 bg-gray-100 text-gray-700">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif font-bold text-lg mb-3">Eleve™</h3>
            <p className="text-sm">Método de autoestima e autocuidado feminino</p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Contato</h4>
            <p className="text-sm mb-1">Suporte: suporte@eleve.com.br</p>
            <p className="text-sm">WhatsApp: (11) 99999-9999</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          <div className="text-sm mb-4 md:mb-0">
            <a href="#" className="mr-4 hover:text-rose-500">Termos de uso</a>
            <a href="#" className="hover:text-rose-500">Política de privacidade</a>
          </div>
          <div className="text-sm text-gray-600">
            Copyright © 2025 – Projeto Eleve™
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
