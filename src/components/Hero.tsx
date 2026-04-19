import Image from "next/image";
import Link from "next/link";
import HeroFrameSequence from "./HeroFrameSequence";

export default function Hero() {
  const links = [
    { name: "Kontakt & öppettider", href: "#kontakt" },
    { name: "Våra behandlingar", href: "#behandlingar" },
    { name: "Prislista", href: "#priser" },
    { name: "Om Vättern Tandvård", href: "#om-oss" },
    { name: "Om Praktikertjänst", href: "#praktikertjanst" },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-12 w-full pt-0 md:pt-2 mb-20">
      
      {/* Slightly softer grid structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Typography & Navigation */}
        <div className="lg:col-span-7 pt-4 pb-12 lg:pt-2 lg:pb-16 flex flex-col justify-between">
          
          <div className="space-y-6 mb-12">
            <h2 className="text-[#7A8068] font-sans tracking-[0.2em] text-xs uppercase font-bold bg-[#EFECE3] px-3 py-1 inline-block rounded-md w-fit">
              Din tandläkare i Motala
            </h2>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-[5.5rem] leading-[1.05] tracking-tight text-[#1A202C]">
              Ett leende <br />
              <span className="text-[#7A8068]">förändrar</span> allt.
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#4A5568] max-w-lg leading-relaxed pt-6 mb-8">
              Välkomna till vår tandläkarmottagning i Motala. Vi erbjuder högkvalitativ tandvård med ett orubbligt fokus på patientnöjdhet.
            </p>
          </div>

          <div className="w-full max-w-sm bg-[#EFECE3] p-8 rounded-2xl">
            <h3 className="text-xs uppercase tracking-widest text-[#7A8068] mb-6 font-bold">Navigera</h3>
            <ul className="flex flex-col space-y-2">
              {links.map((link) => (
                <li key={link.name} className="border-b border-[#D1CDBC] pb-2 last:border-0 last:pb-0">
                  <Link 
                    href={link.href}
                    className="group flex justify-between items-center py-4 text-[#1A202C] font-sans hover:text-[#7A8068] transition-colors"
                  >
                    <span className="text-sm md:text-base font-medium">{link.name}</span>
                    <span className="text-lg opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Imagery & Floating Data */}
        <div className="lg:col-span-5 relative flex flex-col justify-end min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-sm">
          
          <div className="absolute inset-0">
            <div className="relative w-full h-full overflow-hidden bg-[#EFECE3]">
              <HeroFrameSequence />
            </div>
          </div>

          {/* Softer floating data block */}
          <div className="relative z-10 bg-[#F4F2EC] p-6 m-6 md:m-8 max-w-[280px] rounded-2xl shadow-md border border-[#D1CDBC]/50">
            <p className="font-sans font-bold text-4xl text-[#1A202C]">83%</p>
            <p className="font-sans text-xs uppercase tracking-wider text-[#7A8068] mt-2 leading-tight">
              Av våra patienter känner sig helt nöjda med sin vård
            </p>
          </div>

        </div>

      </div>
      
    </section>
  );
}
