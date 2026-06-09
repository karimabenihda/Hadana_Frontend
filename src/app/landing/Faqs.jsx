"use client"
import React, { useState } from 'react'

export function Faqs () {
    const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "À partir de quel âge puis-je inscrire mon enfant à la crèche ?",
    answer:
      "Nous accueillons les enfants dès 3 mois jusqu'à 6 ans. Nos groupes sont organisés par tranches d'âge pour adapter les activités au développement de chaque enfant.",
  },
  {
    question: "Comment se déroule l'adaptation de mon enfant à la crèche ?",
    answer:
      "L'adaptation se fait progressivement sur plusieurs jours. Vous accompagnez votre enfant au début, puis nous réduisons progressivement votre présence pour favoriser son autonomie et créer un lien de confiance avec l'équipe.",
  },
  {
    question: "Quelle est la qualification de votre équipe éducative ?",
    answer:
      "Toutes nos éducatrices sont diplômées (CAP AEPE, DEEJE ou équivalent) et formées aux premiers secours. Elles suivent régulièrement des formations continues pour rester à jour sur les meilleures pratiques éducatives.",
  },
  {
    question: "Comment communiquez-vous avec les parents au quotidien ?",
    answer:
      "Nous utilisons une application mobile pour partager des photos, des repas et des moments de la journée. Un carnet de liaison est également disponible et des réunions parents-éducatrices sont organisées régulièrement.",
  },
];

    return (
        <>
            <div className="max-w-6xl mx-auto" >

             <p  className="text-sm  w-15 text-center  py-0.5 rounded-full text-white bg-[#5E9CEF] hover:bg-[#5e9defdf] ">FAQ’s</p>

<h1 className="text-3xl font-bold my-4 text-center md:text-left">
  Questions Fréquentes sur Notre Crèche
</h1>

<p className="text-sm text-slate-500 mt-2 pb-8 text-left">
  Trouvez des réponses sur l'inscription, l'adaptation, notre équipe éducative et la communication avec les parents.  
  We’re here to help you create a space that feels like home.
</p>
            <div className="flex flex-col items-center justify-center  ">
                {faqs.map((faq, index) => (
                  <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
                      </div>
        </>
    );
};

export default Faqs
