"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#4E342E] text-[#FDFBF7] pt-24 pb-8 relative border-t border-[#E7D2A9]/20 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E7D2A9]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38634A]/5 rounded-full blur-3xl" />

            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
                <div className="md:col-span-4 space-y-6">
                    <Image src="/images/logo ghriba.png" alt="Logo" width={100} height={100} className="brightness-0 invert opacity-90" />
                    <p className="font-serif text-[#E7D2A9]/80 leading-relaxed max-w-xs text-lg">
                        Une tradition de Tanger. <br />
                        Halwa dyal l'kerama.<br />
                        Depuis 1974.
                    </p>
                </div>

                <div className="md:col-span-2 md:col-start-7">
                    <h4 className="font-heading text-[#FDFBF7] text-xl mb-8 uppercase tracking-widest">Navigation</h4>
                    <ul className="space-y-4 font-serif text-[#E7D2A9]/70 text-base">
                        <li><Link href="/" className="hover:text-[#E7D2A9] transition-colors hover:pl-2 transition-all">Accueil</Link></li>
                        <li><Link href="/histoire" className="hover:text-[#E7D2A9] transition-colors hover:pl-2 transition-all">Notre Histoire</Link></li>
                        <li><Link href="/mi-fatima" className="hover:text-[#E7D2A9] transition-colors hover:pl-2 transition-all">Mi Fatima</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="font-heading text-[#FDFBF7] text-xl mb-8 uppercase tracking-widest">Contact</h4>
                    <ul className="space-y-4 font-serif text-[#E7D2A9]/70 text-base">
                        <li>Medina Quedima, Tanger</li>
                        <li>contact@ghriba.ma</li>
                        <li>+212 6 00 00 00 00</li>
                    </ul>
                </div>
            </div>

            <div className="text-center pt-8 border-t border-[#E7D2A9]/10 flex flex-col items-center gap-4">
                <p className="text-[#E7D2A9]/40 text-xs uppercase tracking-widest font-heading">
                    &copy; {currentYear} Ghriba. Fait avec le cœur par Mi Fatima.
                </p>
            </div>
        </footer>
    );
}
