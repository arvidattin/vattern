import Link from "next/link";

export default function Navbar() {
  // Navigation links are moved to the Hero section for an editorial layout.
  // This navbar remains hyper-minimalistic, serving only as the brand anchor.
  return (
    <nav className="w-full relative z-50 py-6 md:py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-serif text-3xl md:text-4xl text-[#1A202C] tracking-tighter leading-none">
            Vättern
          </span>
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-[#7A8068] group-hover:text-[#1A202C] transition-colors duration-300">
            Tandvård
          </span>
        </Link>

        {/* Minimalist Contact Prompt */}
        <div className="hidden md:flex flex-col items-end">
          <span className="text-xs uppercase tracking-widest text-[#7A8068] mb-1">Mottagning Motala</span>
          <a href="tel:014155530" className="font-serif italic text-lg text-[#1A202C] hover-underline">
            0141-555 30
          </a>
        </div>
        
      </div>
    </nav>
  );
}
