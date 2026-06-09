import React from 'react';
import { Baby, Palette, BookOpen, Music, Heart, Puzzle, Users, Sparkles } from 'lucide-react';

function Program() {
  const programs = [
    { 
      age: "3 mois - 1 an", 
      title: "Les Bébés Explorateurs", 
      color: "bg-[#5E9CEF]",
      textColor: "text-[#5E9CEF]",
      lightBg: "bg-[#5E9CEF]/10",
      icon: <Baby className="w-8 h-8 text-white" />,
      description: "Notre objectif premier est d'offrir un environnement rassurant, à l'image du cocon familial. Nous favorisons l'éveil sensoriel, le développement moteur et l'attachement sécurisant.", 
      learnings: ["Éveil musical et tactile", "Développement motricité douce", "Langage des signes pour bébés", "Rythme de sommeil respecté"],
      image: "/images/landing/programs/baby.png" 
    },
    { 
      age: "1 - 3 ans", 
      title: "Les Tout-Petits Actifs", 
      color: "bg-[#3BA172]",
      textColor: "text-[#3BA172]",
      lightBg: "bg-[#3BA172]/10",
      icon: <Puzzle className="w-8 h-8 text-white" />,
      description: "Une phase clé pour l'autonomie et la sociabilité. Nous encourageons votre enfant à explorer le monde, interagir avec les autres et développer sa confiance en lui par le jeu libre et dirigé.", 
      learnings: ["Premières amitiés enfants", "Propreté et autonomie", "Ateliers sensoriels et artistiques", "Parcours de motricité globale"],
      image: "/images/landing/programs/toddler.png" 
    },
    { 
      age: "3 - 6 ans", 
      title: "La Section Préscolaire", 
      color: "bg-[#F48299]",
      textColor: "text-[#F48299]",
      lightBg: "bg-[#F48299]/10",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      description: "Préparation douce à l'école primaire. Nous stimulons la curiosité intellectuelle, le langage, et les premiers apprentissages mathématiques dans un cadre ludique et sans pression.", 
      learnings: ["Compréhension et pré-lecture", "Jeux logiques et mathématiques", "Gestion des émotions", "Projets artistiques collectifs"],
      image: "/images/landing/programs/preschool.png" 
    },
    { 
      age: "Ouvert à tous", 
      title: "Activités Éducatives", 
      color: "bg-[#FFC740]",
      textColor: "text-[#FFC740]",
      lightBg: "bg-[#FFC740]/10",
      icon: <Palette className="w-8 h-8 text-white" />,
      description: "La crèche Hadana enrichit le quotidien par des ateliers spécialisés menés par des intervenants ou nos éducatrices passionnées, permettant aux enfants de découvrir de nouveaux horizons.", 
      learnings: ["Initiations aux langues", "Ateliers jardinage et nature", "Éveil rythmique et danse", "Cuisine et nutrition par le jeu"],
      image: "/images/landing/programs/activities.png" 
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0 py-16' id="programmes">
      <div className="mb-16 text-center md:text-left">
        <div className="mb-4 inline-block">
          <div className="text-sm font-semibold px-5 py-1.5 rounded-full text-white bg-[#5E9CEF] shadow-sm uppercase tracking-wider">
            Notre Pédagogie
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-800 relative z-10">
          Ce que vos enfants apprennent chez Hadana
        </h1>
        
        <p className="text-gray-600 mb-4 mx-auto md:mx-0 max-w-3xl leading-relaxed text-lg">
          Nous ne faisons pas que garder vos enfants. Nous leur offrons un cadre d'épanouissement riche, structuré et joyeux. Chaque étape de développement a son programme dédié pour grandir à son rythme.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {programs.map((p, index) => (
          <div key={index} className="flex flex-col bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            
            {/* Header / Age Ribbon */}
            <div className="flex items-start justify-between mb-6">
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${p.color} shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                {p.icon}
              </div>
              <div className={`${p.lightBg} ${p.textColor} px-4 py-2 rounded-full font-bold text-sm border-2 border-transparent hover:border-current transition-colors`}>
                {p.age}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-500 transition-colors">
              {p.title}
            </h2>
            
            <p className="text-gray-600 mb-6 flex-1 text-sm sm:text-base leading-relaxed">
              {p.description}
            </p>

            {/* List of learnings */}
            <div className={`${p.lightBg} p-5 rounded-2xl mb-6 flex-1 hover:scale-[1.02] transition-transform`}>
              <h3 className={`font-bold ${p.textColor} mb-3 flex items-center gap-2`}>
                <Sparkles className="w-5 h-5" /> Au programme :
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {p.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-2 font-medium">
                    <div className={`w-2 h-2 mt-1.5 shrink-0 rounded-full ${p.color}`}></div>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image mask at the bottom */}
            <div className="w-full h-56 overflow-hidden rounded-[1.5rem] relative">
               <img 
                src={p.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                alt={p.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;