import React from 'react';

function Numbers() {
  const nbrs = [
    { nbr: "500+", title: "Enfants accueillis" },
    { nbr: "10", title: "Années d'expérience" },
    { nbr: "12K", title: "Heures de garde par mois" },
    { nbr: "95%", title: "Taux de satisfaction des parents" }
  ];

  return (
    // <div className='bg-[#fff9ecfe]'>
    <div className='bg-[#ffff]'>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center ">
      {nbrs.map((n, index) => (
          <div className='flex flex-col items-center justify-center  rounded-xl p-4' key={index}>
          <h1 className='text-4xl font-bold text-[#FFC740]'>{n.nbr}</h1>
          <p className='text-lg text-[#ffd485] text-sm'>{n.title}</p>
        </div>
      ))}
    </div>
      </div>
  );
}

export default Numbers;