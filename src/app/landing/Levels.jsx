import React from 'react';

function Levels() {
  const levels = [
    { color: "#5E9CEF", title: "La petite", badge: "Âge 1-2", image: "/images/landing/levels/1year.png" },
    { color: "#3BA172", title: "La moyenne", badge: "Âge 3-4", image: "/images/landing/levels/2years.png" },
    { color: "#F48299", title: "La grande", badge: "Âge 5-6", image: "/images/landing/levels/4years.png" },
    { color: "#FFC740", title: "La maternelle", badge: "Âge 7-8", image: "/images/landing/levels/5years.png" },
  ];

  return (
    <div>
      <div className="!max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        {levels.map((level, index) => (
          <div
            className="flex flex-col rounded-xl px-4 pt-4"
            style={{ backgroundColor: level.color }}
            key={index}
          >
             <h1 className="text-xl text-white text-left">{level.title}</h1>
        <div className="bg-white text-sm font-semibold text-gray-800  w-20 text-center  py-0.5 rounded-full">  {level.badge}</div>
 
            <img src={level.image} alt="" className="mt-2   !h-66" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Levels;