import React from 'react';

function Program() {
  const programs = [
    { nbr: "1", description: "lorem12", image: "/images/programs/img1" },
    { nbr: "2", description: "Années d'expérience", image: "/images/programs/img2" },
    { nbr: "3", description: "Heures de garde par mois", image: "/images/programs/img3" },
    { nbr: "4", description: "Taux de satisfaction des parents", image: "/images/programs/img3" },
  ];

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {programs.map((p, index) => (
        <div key={index} className="flex items-center gap-4">
          {index % 2 === 0 ? (
            <>
              <div className="bg-[#5E9CEF] p-4 rounded-full">
                <img src={p.image} alt="" className="w-16 h-16" />
              </div>
              <div>
                <div className="text-2xl font-bold">{p.nbr}</div>
                <p>{p.description}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="text-2xl font-bold">{p.nbr}</div>
                <p>{p.description}</p>
              </div>
              <div className="bg-[#5E9CEF] p-4 rounded-full">
                <img src={p.image} alt="" className="w-16 h-16" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Program;