export default function Footer() {
  return (
    <footer className="w-full bg-[#1A202C] text-[#F4F2EC] pt-20 pb-12 mt-20" id="kontakt">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        {/* Massive Brand Footer */}
        <div className="border-b border-[#4A5568] pb-12 mb-16">
          <h2 className="font-serif text-[4rem] md:text-[8rem] lg:text-[12rem] leading-none tracking-tighter text-[#EFECE3] opacity-90">
            Vättern.
          </h2>
        </div>

        {/* Content Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-[#4A5568] pb-16">
          
          {/* Address */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6">Adress</h3>
            <p className="font-sans text-[#D1CDBC] leading-relaxed">
              Bispmotalagatan 4, <br/>
              591 35 Motala
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6">Kontakt</h3>
            <div className="space-y-2">
              <a href="tel:014155530" className="block font-serif italic text-2xl text-[#EFECE3] hover:text-[#7A8068] transition-colors">
                0141-555 30
              </a>
              <a href="mailto:vatterntandvard@ptj.se" className="block font-sans text-sm text-[#D1CDBC] hover:text-[#EFECE3] transition-colors">
                vatterntandvard@ptj.se
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6">Öppettider</h3>
            <ul className="font-sans text-[#D1CDBC] text-sm space-y-3 w-full max-w-[200px]">
              <li className="flex justify-between border-b border-[#4A5568] pb-2">
                <span>Mån - Tor</span>
                <span>07:40 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-[#4A5568] pb-2">
                <span>Fredag</span>
                <span>07:40 - 13:00</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="lg:pl-8">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#7A8068] mb-6">Länkar</h3>
            <ul className="font-sans text-[#D1CDBC] text-sm space-y-3">
              <li><a href="#" className="hover:text-[#EFECE3] transition-colors">Tillgänglighet</a></li>
              <li><a href="#" className="hover:text-[#EFECE3] transition-colors">Personuppgifter</a></li>
              <li><a href="#" className="hover:text-[#EFECE3] transition-colors">Synpunkter på vården</a></li>
              <li className="pt-4 mt-4 border-t border-[#4A5568]">
                <span className="text-[#7A8068] uppercase text-[10px] tracking-widest">En del av</span><br/>
                <span className="text-[#EFECE3]">Praktikertjänst</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[#7A8068] text-xs font-sans uppercase tracking-widest">
          <p>© 2026 Vättern Tandvård</p>
          <p className="mt-4 md:mt-0">Designad med omsorg</p>
        </div>

      </div>
    </footer>
  );
}
