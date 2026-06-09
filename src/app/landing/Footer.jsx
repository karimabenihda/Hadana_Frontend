import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail,   Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="w-full bg-[#fcfdfe] relative pt-16 mt-16 border-t border-slate-100">
            {/* Cute top wave */}
            <div className="absolute top-0 left-0 w-full -mt-4 overflow-hidden leading-none z-10 pointer-events-none opacity-50 text-[#fcfdfe]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-10 rotate-180">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-0 text-slate-600 relative z-20">
                <div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-slate-200 pb-10">
                    
                    {/* Brand Info */}
                    <div className="lg:max-w-sm">
                        <Link href="/">
                            <img src="/images/logo/logo.png" alt='Hadana' className='h-16 -ml-3 mb-6'/>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            La Crèche <strong className="text-[#F48299]">Hadana</strong> accompagne vos enfants dans leurs premiers pas avec amour et bienveillance. Un environnement stimulant et sécurisé pour grandir, apprendre et s'épanouir en toute confiance.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* <a href="#" className="w-10 h-10 rounded-full bg-[#5E9CEF]/10 text-[#5E9CEF] flex items-center justify-center hover:bg-[#5E9CEF] hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a> */}
                            {/* <a href="#" className="w-10 h-10 rounded-full bg-[#F48299]/10 text-[#F48299] flex items-center justify-center hover:bg-[#F48299] hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a> */}
                        </div>
                    </div>

                    {/* Links & Contact */}
                    <div className="flex-1 flex flex-col sm:flex-row lg:justify-end gap-10 sm:gap-16">
                        
                        {/* Navigation */}
                        <div>
                            <h2 className="font-bold mb-6 text-slate-800 text-lg flex items-center gap-2">
                                <Heart className="w-4 h-4 text-[#FFC740]" />
                                Navigation
                            </h2>
                            <ul className="text-sm space-y-3 font-medium">
                                <li><Link href="/" className="hover:text-[#5E9CEF] transition-colors">Accueil</Link></li>
                                <li><Link href="/#programmes" className="hover:text-[#5E9CEF] transition-colors">Nos Programmes</Link></li>
                                <li><Link href="/#equipe" className="hover:text-[#5E9CEF] transition-colors">Notre Équipe</Link></li>
                                <li><Link href="/#niveaux" className="hover:text-[#5E9CEF] transition-colors">Les Niveaux</Link></li>
                                <li><Link href="/contact" className="hover:text-[#5E9CEF] transition-colors">Contactez-nous</Link></li>
                            </ul>
                        </div>

                        {/* Informatiques pratiques */}
                        <div>
                            <h2 className="font-bold mb-6 text-slate-800 text-lg">Informations</h2>
                            <div className="text-sm space-y-4 font-medium">
                                <p className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#3BA172] shrink-0" />
                                    <span>123 Rue de la Petite Enfance<br/>75000 Paris</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#5E9CEF] shrink-0" />
                                    <span>01 23 45 67 89</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-[#F48299] shrink-0" />
                                    <span>contact@hadana.fr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="py-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm font-medium">
                    <p>Copyright 2024 © <span className="text-[#5E9CEF] font-bold">Hadana</span>. Tous droits réservés.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-[#5E9CEF] transition-colors">Mentions Légales</Link>
                        <Link href="/" className="hover:text-[#5E9CEF] transition-colors">Politique de Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
