import React from 'react';
import { Star,Heart,Puzzle ,Rocket ,GraduationCap , Palette, Lightbulb, Trophy } from 'lucide-react';

function Levels() {
 const levels = [
  { 
    color: "bg-[#5E9CEF]", 
    title: "Petite Enfance", 
    subtitle: "Douce",
    badge: "0-1 ans", 
    icon: <Star className="w-9 h-9 text-[#FFC740] fill-[#FFC740] right-6 top-16 absolute floating drop-shadow-md" />, 
    icon2: <Heart className="w-8 h-8 text-white left-6 top-32 absolute floating-delayed drop-shadow-md" />,
    image: "/images/landing/levels/level_baby.png" 
  },
  { 
    color: "bg-[#3BA172]", 
    title: "Moyenne Section", 
    subtitle: "Active",
    badge: "1-3 ans", 
    icon: <Palette className="w-9 h-9 text-white right-6 top-28 absolute floating drop-shadow-md" />,
    icon2: <Puzzle className="w-8 h-8 text-[#FFC740] left-6 top-16 absolute floating-delayed drop-shadow-md" />,
    image: "/images/landing/levels/level_toddler.png" 
  },
  { 
    color: "bg-[#F48299]", 
    title: "Grande Section", 
    subtitle: "Créative",
    badge: "3-4 ans", 
    icon: <Lightbulb className="w-9 h-9 text-[#FFC740] fill-[#FFC740] left-6 top-28 absolute floating drop-shadow-md" />,
    icon2: <Rocket className="w-8 h-8 text-white right-6 top-12 absolute floating-delayed drop-shadow-md" />,
       image: "/images/landing/levels/4years.png" 
  },
  { 
    color: "bg-[#FFC740]", 
    title: "La Maternelle", 
    subtitle: "Épanouissante",
    badge: "4-5 ans", 
    icon: <Trophy className="w-9 h-9 text-white left-6 top-16 absolute floating drop-shadow-md" />,
    icon2: <GraduationCap className="w-9 h-9 text-[#5E9CEF] right-6 top-32 absolute floating-delayed drop-shadow-md" />,
       image: "/images/landing/levels/5years.png" 
  },
];

  return (
    <div id="niveaux" className='max-w-6xl mx-auto px-4 md:px-0 py-16 overflow-hidden'>
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-800 relative z-10">
          Nos Niveaux d'Apprentissage
        </h1>
        <p className="text-gray-600 mb-4 mx-auto md:mx-0 max-w-3xl leading-relaxed text-lg">
          Un programme parfaitement adapté au stade de développement de chaque enfant.
          Découvrez la section correspondante au rythme et à l'âge de votre petit trésor.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes floating-delayed {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .floating { animation: floating 3s ease-in-out infinite; }
        .floating-delayed { animation: floating-delayed 4s ease-in-out infinite; }
      `}} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-center relative mt-10">
        {levels.map((level, index) => (
          <div
            className={`flex flex-col rounded-[2.5rem] pt-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-[500px] relative ${level.color}`}
            key={index}
          >
            {/* Header Content */}
            <div className="px-8 flex-1 z-10 relative text-left">
              <h2 className="text-2xl font-bold text-white mb-0 leading-tight tracking-wide">{level.title}</h2>
              <p className="text-white/90 text-lg font-medium mb-4">{level.subtitle}</p>

              <div className="bg-white text-sm font-bold text-slate-800 px-4 py-1.5 rounded-full inline-block shadow-sm">
                {level.badge}
              </div>
            </div>

            {/* Floating Icons */}
            {level.icon}
            {level.icon2}

            {/* Child Image Area inside half-circle frame at the bottom */}
            <div className="h-64 w-[85%] relative z-10 mt-auto rounded-t-full mx-auto ">
              <img
                src={level.image}
                alt={level.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Levels;