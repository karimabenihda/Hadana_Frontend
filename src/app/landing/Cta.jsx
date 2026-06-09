import React from 'react'

export default function Cta() {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-4 max-w-5xl w-full text-center rounded-3xl py-20 md:py-24 bg-gradient-to-br from-[#5E9CEF] to-[#80B3FF] shadow-lg overflow-hidden my-16">
                {/* Cute background elements */}
                <div className="absolute top-4 left-6 text-white opacity-20 text-6xl">✿</div>
                <div className="absolute bottom-6 right-8 text-white opacity-20 text-6xl">⭐</div>
                <div className="absolute top-12 right-12 text-[#FFC740] opacity-90 text-5xl animate-bounce hidden sm:block">🎈</div>
                
                <div className="bg-white/20 px-5 py-1.5 rounded-full text-white text-sm font-bold tracking-wide uppercase mb-6 shadow-sm border border-white/40 backdrop-blur-md">
                    Offre Spéciale Famille
                </div>
                
                <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl drop-shadow-sm px-4 leading-tight">
                    Économisez 40% sur la 2ème inscription !
                </h1>
                
                <div className="h-[4px] w-24 my-8 bg-gradient-to-r from-transparent via-[#FFC740] to-transparent"></div>
                
                <p className="text-lg md:text-xl text-white max-w-3xl px-4 font-medium mb-10 leading-relaxed shadow-sm">
                    Inscrivez deux enfants de même âge ou du même nom de famille et bénéficiez de <strong className="text-[#FFC740] font-bold bg-white/10 px-2 py-0.5 rounded">40% de réduction</strong> sur le tarif mensuel de la deuxième inscription.
                </p>
                
                <button className="bg-[#F48299] hover:bg-[#e06b83] text-white text-lg font-bold tracking-wide active:scale-95 rounded-full px-8 py-3 shadow-xl hover:shadow-2xl cursor-pointer transition-all ring-4 ring-white/20">
                    Profiter de l'offre
                </button>
            </section>
        </>
    );
};