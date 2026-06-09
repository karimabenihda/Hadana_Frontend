import React from 'react'
import Navbar from './Navbar'
import Numbers from './Numbers'

function Hero() {
  // const router = useRouter();

  return (
    <div>
      <Navbar /> 
      {/* px-4 md:px-16 lg:px-24 xl:px-32 */}
      <section className="!max-w-6xl mx-auto flex flex-col max-md:gap-20 md:flex-row items-center justify-between mt-5">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-xs">
            <div className="flex items-center">
              <img className="size-7 rounded-full border-[3px] border-white"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=50" alt="parent1" />
              <img className="size-7 rounded-full border-[3px] border-white -translate-x-2"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50" alt="parent2" />
              <img className="size-7 rounded-full border-[3px] border-white -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="parent3" />
            </div>
            <p className="-translate-x-2 text-slate-900">Rejoignez 500+ familles heureuses</p>
          </div>
          <h1 className="text-center md:text-left text-4xl leading-[48px] md:text-6xl md:leading-[74px] font-medium max-w-xl text-slate-900">
            Une crèche bienveillante pour l'épanouissement de votre enfant
          </h1>
          <p className="text-center md:text-left text-sm text-slate-500 max-w-lg mt-2">
            Découvrez un environnement sécurisé et stimulant où chaque enfant grandit à son rythme. Notre équipe d'éducatrices qualifiées accompagne votre famille dans cette belle aventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 text-sm">
            <button 
              className="bg-[#F48299] hover:bg-[#f48299da] text-white active:scale-95 rounded-md px-7 h-11 border-none cursor-pointer transition-all">
              Inscrire mon enfant
            </button>
            <button className="flex items-center gap-2 active:scale-95 transition text-white rounded-md px-6 h-11 bg-[#5E9CEF] hover:bg-[#5e9defdf] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
              <span>Visite virtuelle</span>
            </button>
          </div>
        </div>

        {/* --- FIXED IMAGE WRAPPER WITH BLUE BACKGROUND SHAPE --- */}
        <div className="relative flex items-center justify-center p-6 max-w-xs sm:max-w-sm lg:max-w-md">
          {/* Circular background badge */}
          <div className="absolute inset-0 bg-[#5E9CEF] rounded-full scale-95 shadow-lg" />
          
          {/* The rounded mask child image sitting above the blue shape */}
          <img 
            src="/images/landing/hero4.jpg" 
            alt="hero" 
            className="relative z-10 rounded-full object-cover aspect-square transition-all duration-300 shadow-inner" 
          />
        </div>
        {/* ------------------------------------------------------ */}

      </section>
      <Numbers />
    </div>
  )
}

export default Hero