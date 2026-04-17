export default function Priser() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-12 w-full mb-32" id="priser">
      <div className="bg-[#EFECE3] rounded-3xl p-8 md:p-16 border border-[#D1CDBC]/50 shadow-sm relative overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <svg className="w-64 h-64 text-[#1A202C]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-5">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#1A202C] tracking-tight mb-6">
              Priser & Stöd
            </h2>
            <p className="font-sans text-[#4A5568] text-lg leading-relaxed mb-8">
              Kostnaden varierar beroende på behandlingsalternativ och materialval. Därav kan det vara svårt för oss att ge specifik kostnadsinformation innan vi har undersökt din mun. Hos oss erbjuds du därför alltid en kostnadsberäkning efter din undersökning eller innan en behandling skall påbörjas.
            </p>
            <a href="#kontakt" className="inline-block bg-[#1A202C] text-[#EFECE3] px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#7A8068] transition-colors rounded-full shadow-md">
              Boka tid för prisförslag
            </a>
          </div>

          <div className="lg:col-span-7 space-y-12">
            
            {/* ATB block */}
            <div className="bg-white p-8 rounded-2xl border border-[#D1CDBC]/50 shadow-sm">
              <h3 className="font-sans font-bold text-xl text-[#1A202C] mb-4">Allmänt tandvårdsbidrag (ATB)</h3>
              <p className="font-sans text-[#4A5568] text-sm leading-relaxed mb-4">
                Du får ett allmänt tandvårdsbidrag i form av ett tillgodohavande hos Försäkringskassan. Du kan använda det som delbetalning.
              </p>
              <ul className="space-y-2 font-sans text-[#4A5568] text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A8068]"></span>
                  <span className="font-medium text-[#1A202C]">20-23 år:</span> 600 kr per år (1200 kr under två år)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A8068]"></span>
                  <span className="font-medium text-[#1A202C]">24-64 år:</span> 300 kr per år (600 kr under två år)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A8068]"></span>
                  <span className="font-medium text-[#1A202C]">65+ år:</span> 600 kr per år (1200 kr under två år)
                </li>
              </ul>
              <p className="font-sans text-xs text-[#7A8068] mt-4 italic">
                Du har pengarna tillgodo den 1 juli varje år.
              </p>
            </div>

            {/* Högkostnadsskydd */}
            <div className="bg-white p-8 rounded-2xl border border-[#D1CDBC]/50 shadow-sm">
              <h3 className="font-sans font-bold text-xl text-[#1A202C] mb-4">Tandvårdsersättning (Högkostnadsskydd)</h3>
              <p className="font-sans text-[#4A5568] text-sm leading-relaxed mb-4">
                För kostnader upp till 3 000 kr av referenspriset betalar du själv. Därefter gäller:
              </p>
              <div className="space-y-4 mb-4">
                <div className="bg-[#F4F2EC] p-4 rounded-xl flex justify-between items-center">
                  <span className="font-sans text-sm text-[#4A5568]">Kostnader 3 001 - 15 000 kr</span>
                  <span className="font-sans font-bold text-lg text-[#1A202C]">50% ersättning</span>
                </div>
                <div className="bg-[#F4F2EC] p-4 rounded-xl flex justify-between items-center">
                  <span className="font-sans text-sm text-[#4A5568]">Kostnader över 15 000 kr</span>
                  <span className="font-sans font-bold text-lg text-[#1A202C]">85% ersättning</span>
                </div>
              </div>
              <p className="font-sans text-xs text-[#7A8068]">
                Stödet gäller för behandling som gör dig fri från smärta/sjukdom, ej kosmetisk tandvård.
              </p>
            </div>

            {/* 67+ åringar */}
            <div className="bg-[#1A202C] text-[#EFECE3] p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#7A8068] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm">Nyhet</span>
                <h3 className="font-sans font-bold text-xl">För dig som är 67+</h3>
              </div>
              <p className="font-sans text-sm leading-relaxed text-[#D1CDBC] mb-4">
                Från och med det år du fyller 67 år får du ett förstärkt skydd mot höga tandvårdskostnader. Du betalar bara <strong className="text-white">10 procent av referenspriset</strong> för många vanliga behandlingar såsom lagningar, utdragningar, kronor och rotfyllningar. (Undersökningar och protetik längre bak täcks av det vanliga stödet).
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
