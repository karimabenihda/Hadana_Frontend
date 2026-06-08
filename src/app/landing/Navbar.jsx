"use client"
import React, { useState } from 'react'
function Navbar() {
      const [open, setOpen] = useState(false)

  return (
    <div>
         <nav className=" flex justify-between items-center !max-w-6xl mx-auto py-3.5 border-b border-slate-200/20 w-full">
            <img src="/images/logo/logo.png"  className='h-10  ' />
 
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="/">Home</a>
                <a href="/">Niveaux</a>
                <a href="/">Contact</a>
  <button 
                        // onClick={() => router.push('/delivery-person')} 
                        className="bg-[#F48299] hover:bg-[#f48299da] text-white active:scale-95 rounded-md px-7 h-11 border-none cursor-pointer transition-all">
  Inscrire Mon Enfant
                         </button>
 
            </div>

            <button onClick={() => setOpen(!open)} aria-label="Menu" className="px-4 md:px-1 sm:hidden hover:cursor-pointer">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} space-y-2 text-[#1e3753] absolute top-[60px] left-0 w-full bg-white z-14 shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
<button>
  Inscrire Mon Enfant
</button>
                 
                <a href="/">Home</a>
                <a href="/">Niveaux</a>
                <a href="/">Contact</a>

            </div>
        </nav>
    </div>
  )
}

export default Navbar
