export default function OmPraktikertjanst() {
  return (
    <section className="bg-[#1A202C] text-[#EFECE3] py-24 mt-20" id="praktikertjanst">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <span className="font-sans text-[#D1CDBC] text-xs uppercase tracking-[0.2em] mb-4 block font-bold">
              En del av något större
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight mb-8">
              Om Praktikertjänst
            </h2>
            <div className="space-y-6 font-sans text-[#D1CDBC] leading-relaxed">
              <p>
                Från Karesuando i norr, till Ystad i söder, och med verksamheter i fler än 200 kommuner är vi hela Sveriges välfärd. En av fem vårdpatienter går till någon av våra mottagningar – och en av tre tandvårdspatienter väljer oss.
              </p>
              <p>
                Vår affärsidé är att skapa förutsättningar för att vi som arbetar inom vården ska kunna göra ett så bra jobb som möjligt – och skapa högsta värde för patienten. Det är vi som utför vården som gemensamt äger Praktikertjänst.
              </p>
              <p>
                Praktikertjänst har utvecklat Vårdsverige i 60 år och är Sveriges största vårdgivare inom privat tandvård och hälso- och sjukvård. Affärsmodellen är unik med 1 300 delägare som är både verksamhetsansvariga och anställda på mottagningar runt om i landet.
              </p>
            </div>
            
            <a href="#" className="inline-block mt-8 border border-[#4A5568] px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#EFECE3] hover:text-[#1A202C] transition-colors rounded-full">
              Läs mer på Praktikertjänsts webbplats
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#2A3441] p-8 rounded-2xl border border-[#4A5568]/50">
                <p className="font-sans font-bold text-4xl text-white mb-2">1/3</p>
                <p className="font-sans text-xs uppercase tracking-widest text-[#7A8068] leading-tight">
                  Tandvårdspatienter väljer oss
                </p>
              </div>

              <div className="bg-[#2A3441] p-8 rounded-2xl border border-[#4A5568]/50">
                <p className="font-sans font-bold text-4xl text-white mb-2">1 300</p>
                <p className="font-sans text-xs uppercase tracking-widest text-[#7A8068] leading-tight">
                  Delägare och verksamhetsansvariga
                </p>
              </div>

              <div className="bg-[#2A3441] p-8 rounded-2xl border border-[#4A5568]/50 md:col-span-2">
                <h3 className="font-sans font-bold text-lg text-white mb-2">Personuppgifter</h3>
                <p className="font-sans text-sm text-[#D1CDBC] leading-relaxed">
                  Vi värnar om individens integritet och strävar efter att personuppgifter alltid hanteras på bästa sätt och i enlighet med gällande dataskyddsbestämmelser.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
