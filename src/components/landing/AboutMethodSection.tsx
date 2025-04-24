
import React from 'react';
import { Icon } from 'lucide-react';
import GlassCard from '../GlassCard';
import CTAButton from '../CTAButton';

const AboutMethodSection = () => {
  return (
    <div className="py-16 px-5 md:px-10 lg:px-20 bg-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans font-bold mb-8 text-rose-500 text-center">
          Sobre o Método Eleve™
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <ul className="list-disc ml-5 mb-4 text-gray-700 space-y-2">
              <li><b>O que é?</b> Um método exclusivo de exercícios e autocuidado projetado para mulheres que desejam valorizar a região do alto, recuperar firmeza e a própria autoestima, sem procedimentos invasivos.</li>
              <li><b>O que contém?</b> PDF completo, passo a passo, cronograma de 21 dias, ilustrações práticas, além de bônus no plano Premium.</li>
              <li><b>Benefícios:</b> Firmeza natural, postura melhorada, confiança ao se vestir, mais autoestima.</li>
              <li><b>Como funciona?</b> Exercícios diários rápidos, práticos e sem equipamentos, podendo ser feitos no conforto de casa e adaptados à sua rotina.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-rose-500 font-semibold shadow">
                Acesso vitalício
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-rose-500 font-semibold shadow">
                Transforme seu alto em 21 dias
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8437043/pexels-photo-8437043.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Conteúdo Eleve™"
              className="rounded-2xl shadow-lg w-full h-full object-cover border-4 border-pink-300"
            />
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Já ajudamos 92,462 mil mulheres em todo Brasil
            </h3>
            <p className="text-lg text-gray-600">
              Vamos dar o melhor para ajudar você a chegar nos seus objetivos.
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="italic">
              "Me sinto presa em um ciclo sem fim... Nada parece funcionar! Minhas roupas não servem mais como antes, e cheguei ao ponto de evitar espelhos porque dói ver meu reflexo."
            </p>
            <p>
              Sei exatamente como elas se sentem, porque eu vivi essa mesma dor.
            </p>
            <p>
              Aquela sensação de impotência quando o sutiã não é mais suficiente... A ansiedade antes de momentos íntimos... O desconforto de sentir que seu corpo te traiu.
            </p>
            <p>
              Porém, o 'Eleva' não é mais uma daquelas promessas vazias.
            </p>
            <p>
              Ele trabalha nos 3 pilares da sustentação dos seios, uma descoberta fascinante que não apenas transformou minha vida, mas já devolveu a liberdade total de nunca mais precisar esconder o corpo para mais de 92 mil mulheres.
            </p>
          </div>
        </div>

        <div id="muscle-info" className="bg-black text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-500 mb-8 text-center">
            Descubra o Segredo Para Seios Firmes e Naturalmente Elevados
          </h2>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Os músculos ptoses mamários são o segredo para levantar os seios
          </h3>
          <div className="space-y-6 text-gray-300">
            <p>
              Assim como qualquer parte do corpo, os seios também têm músculos que podem ser fortalecidos para melhorar sua firmeza e aparência!
            </p>
            <p>
              Esses músculos são conhecidos como os "ptoses mamários", e seu fortalecimento é a chave para eliminar a flacidez e trazer de volta aquele aspecto "empinado e durinho" que faz você se sentir 10 anos mais jovem.
            </p>
            <p className="font-semibold">
              Por isso, batizei esse grupo muscular de "Os 3 Pilares de Sustentação".
            </p>
            <div className="my-8">
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
                alt="Ilustração dos músculos"
                className="rounded-xl mx-auto max-w-full h-auto"
              />
            </div>
            <h4 className="text-xl font-bold mb-4">Como funciona?</h4>
            <p>
              Pense nos músculos do seu corpo, como os do abdômen ou das pernas. Quando você os exercita corretamente, eles se tornam mais firmes e definidos, criando uma base sólida para sustentar a pele e dar forma àquela região.
            </p>
            <p>
              Com os músculos dos seios, o princípio é o mesmo. Eles funcionam como "traves", que dão sustentação natural e ajudam a manter o formato firme e elevado.
            </p>
            <div className="bg-rose-900 bg-opacity-30 p-6 rounded-lg mt-8 border border-rose-800">
              <h4 className="text-xl font-bold mb-4 text-rose-300">Mas aqui está o ponto importante:</h4>
              <p>
                Os exercícios tradicionais não fortalecem essas "traves". Enquanto exercícios como flexões ou supinos atingem apenas a camada superficial dos peitorais – e até mesmo, em muitos casos, pioram a flacidez – o método 'Eleva Up' foi projetado para ativar profundamente o grupo muscular-chave que permite que você experimente a liberdade total de nunca mais precisar esconder seu corpo.
              </p>
            </div>
            <h4 className="text-xl font-bold mt-8 mb-4">Por que os ptoses mamários são tão importantes?</h4>
            <p>
              Imagine uma rede que sustenta algo delicado, como frutas maduras. Se os fios da rede estão frouxos, ela cede e não consegue manter as frutas no lugar. Agora imagine que esses fios são os músculos ptoses mamários.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Quando estão enfraquecidos, eles deixam os seios "cederem", agravando o problema a cada dia.</li>
              <li>Quando fortalecidos, criam uma base firme, como uma pilar bem ajustado, que sustenta e eleva os seios naturalmente.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMethodSection;
