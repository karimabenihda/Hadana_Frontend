"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
      const [open, setOpen] = useState(false)

  return (
    <div>
         <nav className=" flex justify-between items-center !max-w-6xl mx-auto px-4 md:px-0 border-b border-slate-200/20 w-full py-4 relative">
            <Link href="/">
                <img src="/images/logo/logo.png"  className='h-15' alt="Logo Crèche" />
            </Link>
 
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-[#1e3753] font-medium">
                <Link href="/" className="hover:text-[#5E9CEF] transition-colors">Accueil</Link>
                <Link href="/#niveaux" className="hover:text-[#5E9CEF] transition-colors">Niveaux</Link>
                <Link href="/contact" className="hover:text-[#5E9CEF] transition-colors">Contact</Link>
                <button 
                  className="bg-[#F48299] hover:bg-[#e06b83] text-white active:scale-95 rounded-md px-7 h-11 border-none cursor-pointer transition-all shadow-md">
                  Inscrire Mon Enfant
                </button>
            </div>

            <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 md:hidden hover:cursor-pointer z-50 rounded-md bg-slate-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#426287" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} space-y-2 text-[#1e3753] absolute top-full left-0 w-full bg-white z-50 shadow-lg flex-col items-center gap-4 py-8 text-base md:hidden border-t border-slate-100`}>
                <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#5E9CEF] transition-colors font-medium">Accueil</Link>
                <Link href="/#niveaux" onClick={() => setOpen(false)} className="hover:text-[#5E9CEF] transition-colors font-medium">Niveaux</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#5E9CEF] transition-colors font-medium">Contact</Link>
                <button 
                  className="bg-[#F48299] hover:bg-[#e06b83] text-white active:scale-95 rounded-md px-7 h-11 border-none cursor-pointer transition-all mt-4 font-semibold w-[80%] max-w-[250px] shadow-md">
                  Inscrire Mon Enfant
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
