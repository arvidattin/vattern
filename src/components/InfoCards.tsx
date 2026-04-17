export default function InfoCards() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-12 w-full mb-32" id="information">
      
      {/* Softer Title */}
      <div className="mb-12 border-b border-[#D1CDBC] pb-6 flex justify-between items-end">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#1A202C] tracking-tight">
          Viktig <span className="italic font-light">Information</span>
        </h2>
        <span className="hidden md:block font-sans text-xs uppercase tracking-widest text-[#7A8068]">
          Uppdateringar & Råd
        </span>
      </div>

      {/* Featured News Alert: Softer Style */}
      <div className="bg-[#1A202C] text-[#F4F2EC] p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-8 lg:gap-16 items-start rounded-3xl shadow-md">
        <div className="md:w-1/3 md:border-r border-[#4A5568] pb-6 md:pb-0 md:pr-8">
          <span className="font-sans text-[#D1CDBC] text-xs uppercase tracking-[0.2em] mb-4 block font-bold">
            Reform 1 Jan
          </span>
          <h3 className="font-sans font-bold text-3xl md:text-4xl leading-tight">
            Förstärkt högkostnadsskydd <br className="hidden lg:block"/> (67+ år)
          </h3>
        </div>
        <div className="md:w-2/3 flex flex-col justify-center">
          <p className="font-sans text-[#D1CDBC] leading-relaxed md:text-lg mb-8 max-w-2xl">
            Regeringen har beslutat att högkostnadsskyddet i tandvården förstärks för patienter som är 67 år och äldre. Patientgruppen ska från och med den 1 januari inte betala mer än en tiondel av referenspriset för en rad olika åtgärder och behandlingar. Kontakta oss gärna för mer information.
          </p>
          <a href="#kontakt" className="inline-block bg-[#EFECE3] text-[#1A202C] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#D1CDBC] transition-colors w-fit rounded-full">
            Kontakta oss
          </a>
        </div>
      </div>

      {/* Standard Grid Cards - Softened */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Card 1 */}
        <div className="p-8 md:p-10 bg-white border border-[#D1CDBC]/50 rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6 block">Arbetsplats</span>
            <h3 className="font-sans font-bold text-2xl text-[#1A202C] mb-4 transition-all">
              Sveriges bästa arbetsgivare
            </h3>
            <p className="font-sans text-[#4A5568] text-sm leading-relaxed mb-12">
              När undersökningsföretaget Universum presenterar listan över Sveriges bästa arbetsgivare placerar sig Praktikertjänst på plats fyra – i hela Sverige. Och bäst av alla inom vården.
            </p>
          </div>
          <button className="text-left font-sans text-xs font-bold uppercase tracking-widest text-[#1A202C] hover-underline w-fit">
            Läs mer +
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-8 md:p-10 bg-[#EFECE3] border border-[#D1CDBC]/50 rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6 block">Kvalitet</span>
            <h3 className="font-sans font-bold text-2xl text-[#1A202C] mb-4 transition-all">
              Unik Ägarmodell
            </h3>
            <p className="font-sans text-[#4A5568] text-sm leading-relaxed mb-12">
              Vi har en unik ägarmodell där vi som utför vården också äger företaget. Det är en stark bidragande orsak till varför 83% av våra patienter uppger att de är mycket nöjda.
            </p>
          </div>
          <button className="text-left font-sans text-xs font-bold uppercase tracking-widest text-[#1A202C] hover-underline w-fit">
            Läs mer +
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-8 md:p-10 bg-white border border-[#D1CDBC]/50 rounded-2xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6 block">Kunskap</span>
            <h3 className="font-sans font-bold text-2xl text-[#1A202C] mb-4 transition-all">
              Tips & Råd om munnen
            </h3>
            <p className="font-sans text-[#4A5568] text-sm leading-relaxed mb-12">
              Undrar du något om dina tänder eller hälsan? Här hittar du tips, råd och svar på redan ställda frågor. Läs mer om tänder, munhälsa och olika behandlingsalternativ.
            </p>
          </div>
          <button className="text-left font-sans text-xs font-bold uppercase tracking-widest text-[#1A202C] hover-underline w-fit">
            Till Guiden +
          </button>
        </div>

      </div>

    </section>
  );
}
