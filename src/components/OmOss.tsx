export default function OmOss() {
  const staff = [
    { name: "Jakob Attin", role: "Leg. Tandläkare" },
    { name: "Elin Attin", role: "Leg. Tandläkare" },
    { name: "Eva Nordström", role: "Leg. Tandläkare" },
    { name: "Ida Slänsby", role: "Leg. Tandhygienist" },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-12 w-full mb-32" id="om-oss">
      <div className="mb-12 border-b border-[#D1CDBC] pb-6">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#1A202C] tracking-tight">
          Om Oss
        </h2>
        <p className="font-sans text-[#4A5568] mt-4 max-w-2xl text-lg">
          Vi som jobbar på Vättern Tandvård. Vårt team består av erfarna och engagerade behandlare som sätter dig som patient i första rummet.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {staff.map((person, index) => (
          <div key={index} className="flex flex-col items-center group">
            {/* Staff Placeholder Image */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-[#EFECE3] border border-[#D1CDBC]/50 mb-6 flex items-center justify-center relative group-hover:shadow-md transition-shadow">
              <svg className="w-16 h-16 text-[#D1CDBC] group-hover:text-[#7A8068] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <h3 className="font-sans font-bold text-xl text-[#1A202C] mb-1">
              {person.name}
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-[#7A8068]">
              {person.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
