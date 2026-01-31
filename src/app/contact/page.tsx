"use client";

import { useState } from "react";

export default function Contact() {
    return (
        <div className="bg-[#FDFBF7] min-h-screen">

            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Decorative Background Circles */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E7D2A9]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#38634A]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

                <div className="pattern-tattoo-overlay opacity-5" />

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">

                    {/* Text Side */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="font-arabic text-6xl text-[#4E342E] mb-4">تواصل معنا</h1>
                            <p className="font-serif text-2xl text-[#4E342E]/70 leading-relaxed">
                                "Pour discuter de tradition, de commandes spéciales, ou simplement nous rendre visite."
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-organic hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#E7D2A9]/20 rounded-full flex items-center justify-center text-[#4E342E]">📍</div>
                                <div>
                                    <p className="uppercase text-xs tracking-widest text-[#4E342E]/50">Atelier</p>
                                    <p className="font-serif text-xl text-[#4E342E]">Medina Quedima, Tanger</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-organic hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#38634A]/20 rounded-full flex items-center justify-center text-[#38634A]">✉️</div>
                                <div>
                                    <p className="uppercase text-xs tracking-widest text-[#4E342E]/50">Email</p>
                                    <p className="font-serif text-xl text-[#4E342E]">contact@ghriba.ma</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white p-12 shadow-2xl rounded-organic border-t-8 border-[#2C4F3A]">
                        <form className="space-y-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#4E342E]/70">Prénom</label>
                                    <input type="text" className="w-full bg-[#FDFBF7] border-0 rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#9E3B2F] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#4E342E]/70">Nom</label>
                                    <input type="text" className="w-full bg-[#FDFBF7] border-0 rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#9E3B2F] transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#4E342E]/70">Email</label>
                                <input type="email" className="w-full bg-[#FDFBF7] border-0 rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#9E3B2F] transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#4E342E]/70">Message</label>
                                <textarea rows={4} className="w-full bg-[#FDFBF7] border-0 rounded-lg px-4 py-4 focus:ring-2 focus:ring-[#9E3B2F] transition-all resize-none"></textarea>
                            </div>

                            <button className="w-full bg-[#2C4F3A] text-[#E7D2A9] py-5 rounded-lg uppercase tracking-[0.2em] text-sm hover:bg-[#38634A] transition-colors duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-heading">
                                Envoyer
                            </button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
}
