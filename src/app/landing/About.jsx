import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
     <div className="relative md:w-1/3 flex items-center justify-center p-4">
  
   <img 
    src="/images/landing/shapes/shape1.png" /* Remplace par le nom de ton fichier shape */
    className="absolute inset-0 w-full h-full object-contain transform translate-x-3 translate-y-3 z-0" 
    alt="Forme décorative"
  />

   <img 
    src="/images/landing/about.png" 
    className="relative z-10 w-full mb-3 object-cover" 
    alt="Enfants à la crèche" 
  />

</div>
      <div className="md:w-2/3">
        <div className="mb-4">
 
          <div className="text-sm  w-20 text-center  py-0.5 rounded-full text-white bg-[#5E9CEF] hover:bg-[#5e9defdf] ">À propos</div>
         </div>
        <h1 className="text-3xl font-bold mb-4">Notre Crèche : Un Second Foyer pour Votre Enfant</h1>
        <p className="text-gray-600 mb-4">
          Depuis plus de 10 ans, nous accompagnons les familles dans le développement épanoui de leurs enfants. Notre crèche offre un environnement sécurisant, stimulant et bienveillant où chaque petit peut grandir à son rythme.
        </p>
        <p className="text-gray-600 mb-8">
          Notre équipe d'éducatrices diplômées met tout en œuvre pour créer un lien de confiance avec chaque enfant et chaque famille. Nous croyons fermement que la qualité de la relation parent-enfant est la base d'un développement harmonieux.
        </p>
          <button            className="bg-[#F48299] hover:bg-[#f48299da] text-white active:scale-95 rounded-md px-7 h-11 border-none cursor-pointer transition-all">
          Découvrir notre équipe
             </button>
         
                       
      </div>
    </div>
  );
}

export default About;