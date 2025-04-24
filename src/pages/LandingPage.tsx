import React from 'react';
import { Heart, Star, Sparkles, Target, Zap, Crown, Shield, CheckCircle2, Headphones, Book, Calendar, Sparkle, Palette, ListChecks } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTAButton from '../components/CTAButton';
import GlassCard from '../components/GlassCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import BadgeRibbon from '../components/BadgeRibbon';
import { formatDate } from '../utils/dateUtils';
import ImageCarousel from '../components/ImageCarousel';

const LandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePlanClick = () => {
    window.open('https://www.google.com', '_blank');
  };

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

  const valuePropositions = [
    {
      title: "Consulta Personalizada de Postura",
      normalPrice: "R$297,00",
      description: "Avaliação individual da sua postura e recomendações específicas"
    },
    {
      title: "Programa de Exercícios Premium",
      normalPrice: "R$197,00",
      description: "21 dias de exercícios específicos para fortalecimento"
    },
    {
      title: "Guia de Alimentação Funcional",
      normalPrice: "R$147,00",
      description: "Cardápio completo para otimizar seus resultados"
    },
    {
      title: "Suporte VIP por 30 dias",
      normalPrice: "R$297,00",
      description: "Acesso direto para tirar suas dúvidas"
    },
    {
      title: "Workshop Online de Autoestima",
      normalPrice: "R$197,00",
      description: "Técnicas comprovadas para aumentar sua confiança"
    },
    {
      title: "Diário de Progresso Digital",
      normalPrice: "R$97,00",
      description: "Acompanhamento detalhado da sua evolução"
    }
  ];

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

  const totalValue = valuePropositions.reduce((acc, item) => {
    const price = parseFloat(item.normalPrice.replace("R$", "").replace(",", "."));
    return acc + price;
  }, 0);

  const totalBonusValue = bonusItems.reduce((acc, item) => {
    const price = parseFloat(item.value.replace("R$", "").replace(",", "."));
    return acc + price;
  }, 0);

  const dataOferta = formatDate(new Date());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              onClick={() => scrollToSection("muscle-info")}
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

      {/* Introduction Section */}
      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-800">
            Sabe quando evita abraços apertados ou usar uma blusa mais soltinha porque sente que seu seio não está mais no lugar? 
          </h2>
          <p className="text-lg text-gray-700 md:text-xl leading-relaxed">
            O desconforto de vestir um sutiã e ver o alto não preencher mais como antes, de não se sentir "segura" nas fotos ou encontros, faz parte da rotina de muitas mulheres — e não tem nada a ver com vaidade. É sobre identificação. E é possível mudar isso com respeito ao seu corpo!
          </p>
        </div>
      </AnimatedSection>

      {/* About Method Section */}
      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-pink-50">
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

          {/* Goals Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              É para mulheres determinadas a:
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-rose-500 animate-pulse" />
                <p className="text-lg">
                  Sentir novamente o desejo acender nos olhos dele cada vez que você tira a roupa
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Crown className="w-8 h-8 text-rose-500 animate-pulse" />
                <p className="text-lg">
                  Usar aquele vestido dos sonhos sem precisar de truques ou artifícios
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-rose-500 animate-pulse" />
                <p className="text-lg">
                  Sentir-se jovem por dentro e por fora como se o tempo tivesse voltado uma década
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="w-8 h-8 text-rose-500 animate-pulse" />
                <p className="text-lg">
                  Libertar-se da vergonha que te impedia de aproveitar plenamente sua intimidade
                </p>
              </div>
            </div>
          </div>

          {/* Muscle Information Section */}
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
      </AnimatedSection>

      {/* Value Anchoring Section */}
      <AnimatedSection className="py-20 px-5 md:px-10 lg:px-20" style={{ backgroundColor: '#fef9f9' }}>
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
              const isCore = index <= 1; // First two items are core features
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
              onClick={() => scrollToSection("pricing")}
            >
              QUERO O MÉTODO ELEVE
            </CTAButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Results Section */}
      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Resultados Reais do Método Eleve™
          </h2>
          <ImageCarousel images={beforeAfterImages} className="max-w-4xl mx-auto" />
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-purple-100">
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
      </AnimatedSection>

      {/* Pricing Section */}
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
                  onClick={handlePlanClick}
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
                  onClick={handlePlanClick}
                >
                  Quero Começar Agora
                </CTAButton>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Guarantee Section */}
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

      {/* FAQ Section */}
      <AnimatedSection className="py-16 px-5 md:px-10 lg:px-20 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-2xl md:text-3xl mb-8 text-center text-gray-800">
            Perguntas Frequentes
          </h2>
          <FAQAccordion items={faqItems} className="bg-white rounded-xl p-6" />
        </div>
      </AnimatedSection>

      {/* Footer */}
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
    </div>
  );
};

export default LandingPage;
