import Navbar from '@/app/landing/Navbar'
import Footer from '@/app/landing/Footer'
import React from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-0 py-16">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold px-5 py-1.5 rounded-full text-white bg-[#5E9CEF] shadow-sm uppercase tracking-wider inline-block mb-4">Contactez-nous</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Nous sommes à votre écoute</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vous avez des questions sur nos programmes, nos tarifs ou vous souhaitez visiter la crèche ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 relative overflow-hidden">
             <div className="absolute top-4 right-4 text-[#FFC740] text-5xl opacity-30">📞</div>
             
             <h2 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">Nos Coordonnées</h2>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#5E9CEF]/10 rounded-full flex items-center justify-center shrink-0">
                   <span className="text-2xl">📍</span>
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-800">Adresse</h3>
                   <p className="text-gray-600">123 Rue de la Petite Enfance<br/>75000 Paris</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#3BA172]/10 rounded-full flex items-center justify-center shrink-0">
                   <span className="text-2xl">📱</span>
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-800">Téléphone</h3>
                   <p className="text-gray-600">01 23 45 67 89</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#F48299]/10 rounded-full flex items-center justify-center shrink-0">
                   <span className="text-2xl">✉️</span>
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-800">Email</h3>
                   <p className="text-gray-600">contact@notrecreche.fr</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-[#FFC740]/10 rounded-full flex items-center justify-center shrink-0">
                   <span className="text-2xl">⏰</span>
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-800">Horaires</h3>
                   <p className="text-gray-600">Du Lundi au Vendredi<br/>De 7h30 à 18h30</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E9CEF] focus:border-transparent outline-none transition-all" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E9CEF] focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E9CEF] focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E9CEF] focus:border-transparent outline-none transition-all bg-white">
                  <option>Demande d'inscription</option>
                  <option>Renseignements sur les tarifs</option>
                  <option>Demande de rendez-vous</option>
                  <option>Autre question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E9CEF] focus:border-transparent outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#5E9CEF] hover:bg-[#4a85d3] text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md mt-4">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}
