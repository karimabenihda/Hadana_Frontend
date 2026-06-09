import React from 'react';
import { Mail, Phone, Heart, Award } from 'lucide-react';

function Team() {
  const teamMembers = [
    {
      name: "Céline Dupont",
      role: "Directrice & Pédagogue",
      desc: "Veille au bien-être de tous et coordonne l'ensemble des activités pédagogiques avec passion.",
      tag: "Direction",
      color: "bg-[#5E9CEF]",
      lightColor: "bg-[#5E9CEF]/10",
      textColor: "text-[#5E9CEF]",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Amira Benali",
      role: "Éducatrice Jeunes Enfants",
      desc: "Supervise la section des tout-petits avec une douceur infinie et des méthodes innovantes.",
      tag: "Éducatrice",
      color: "bg-[#F48299]",
      lightColor: "bg-[#F48299]/10",
      textColor: "text-[#F48299]",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Sophie Martin",
      role: "Auxiliaire de Puériculture",
      desc: "Spécialiste de la petite enfance douce (bébés), elle crée un cocon rassurant très apprécié.",
      tag: "Auxiliaire",
      color: "bg-[#3BA172]",
      lightColor: "bg-[#3BA172]/10",
      textColor: "text-[#3BA172]",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "David Dubois",
      role: "Animateur Éveil",
      desc: "Plein d'énergie, David encadre les parcours moteurs et l'éveil corporel.",
      tag: "Intervenant",
      color: "bg-[#FFC740]",
      lightColor: "bg-[#FFC740]/10",
      textColor: "text-[#FFC740]",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0 py-16' id="equipe">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-block">
          <div className="text-sm font-semibold px-5 py-1.5 rounded-full text-white bg-[#F48299] shadow-sm uppercase tracking-wider flex items-center gap-2">
            <Heart className="w-4 h-4" /> Notre Super Équipe
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800">
          Les professionnels qui veillent sur vos amours
        </h1>
        <p className="text-gray-600 mb-8 mx-auto max-w-3xl leading-relaxed text-lg">
          Une équipe multiculturelle, diplômée et passionnée. Chaque membre a été choisi pour son expertise, sa bienveillance et son amour profond pour l'éducation des jeunes enfants.
        </p>
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            
            <div className={`h-24 ${member.color} bg-opacity-80 relative overflow-hidden`}>
              {/* Adorable top wave/blob shape */}
              <svg className="absolute bottom-0 w-full h-8 text-white scale-110 origin-bottom" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <path fill="currentColor" d="M0,192L80,181.3C160,171,320,149,480,149.3C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
            </div>

            <div className="flex flex-col items-center px-6 pb-6 relative -mt-14">
              <div className={`p-1.5 bg-white rounded-full ${member.textColor} shadow-lg mb-4 group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-300`}>
                <img 
                  className="h-24 w-24 rounded-full object-cover border-4 border-transparent bg-slate-100" 
                  style={{ borderColor: "currentColor" }}
                  src={member.image} 
                  alt={member.name} 
                />
              </div>
              
              <h2 className="text-xl font-bold text-slate-800 text-center">{member.name}</h2>
              <div className="flex items-center gap-1 mt-1 mb-3">
                <Award className={`w-4 h-4 ${member.textColor}`} />
                <p className="text-sm font-medium text-slate-500">{member.role}</p>
              </div>

              <div className={`${member.lightColor} text-xs font-bold ${member.textColor} px-3 py-1 rounded-full mb-4`}>
                {member.tag}
              </div>

              <p className="text-sm text-gray-500 text-center mb-6 flex-1 leading-relaxed">
                {member.desc}
              </p>

              <div className="flex items-center w-full gap-3 mt-auto">
                <button type="button" className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl ${member.lightColor} hover:${member.color} hover:text-white ${member.textColor} font-semibold text-sm transition-colors group/btn`}>
                  <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Message
                </button>
                <button type="button" className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl ${member.lightColor} hover:${member.color} hover:text-white ${member.textColor} font-semibold text-sm transition-colors group/btn`}>
                  <Phone className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Appel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default Team;
