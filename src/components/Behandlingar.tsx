"use client";
import { useState } from "react";

const treatments = [
  {
    title: "Undersökning",
    content: "Vid en undersökning går vi igenom tänderna kliniskt med spegel och sond. Även tandköttet, munslemhinnan och käkfunktion undersöks. I de flesta fallen behöver vi ta några röntgenbilder och ibland kompletterar vi dokumenteringen med en intraoral kamera. Finns det något specifikt du vill ha hjälp med går vi igenom dina önskemål och förväntningar. Vi registrerar eventuella fynd och gör en åtgärdsplan. Du får en kostnadsberäkning och vi kan starta behandlingen efter att du givit samtycke till behandlingsförslaget."
  },
  {
    title: "Tandvårdsrädsla",
    content: "En vanlig missuppfattning är att undersökningar primärt görs för att upptäcka tandsjukdomar. Undersökningar är i verkligheten ännu viktigare för att förebygga tandsjukdomar. Det bästa botemedlet mot tandvårdsrädsla är alltså att göra regelbundna undersökningar. På så sätt kan man upplysa eller upptäcka eventuella skador innan de blir allt för problematiska. Med dagens förfinade teknik kan dessutom all behandling i princip ske helt smärtfritt. Vi lyssnar på dig och anpassar behandlingen efter din förmåga så låt det inte ta för lång tid mellan tandläkarbesöken."
  },
  {
    title: "Bettskenor och antiapnéskenor",
    content: "Det finns olika anledningar till att behöva en bettskena. Det kan bero på käkleds- och ansiktssmärtor eller på grund av aktiv tandslitage. Ibland är du som patient själv medveten om problem med tandgnissling och/eller tandpressning, men många gånger är det vi tandläkare som upptäcker eller har misstanke om detta vid undersökningstillfället. En bra bettskena gjuts efter dina tänder och justeras/slipas in efter sättet du biter ihop dina tänder på.\n\nMånga människor har problem med att de snarkar eller får andningsuppehåll när de sover, så kallad sömnapné. Har du misstanke om detta kan vi remittera dig till en sömnmottagning där du får göra en sömnregistrering. Om utredningen visar att du har sömnapnésyndrom kan ett av behandlingsalternativen vara en snarkskena, så kallad antiapnéskena. Då är du välkommen att utföra den behandlingen hos oss på vanlig sjukvårdstaxa."
  },
  {
    title: "Förebyggande tandvård",
    content: "Den icke lagade tanden kommer alltid att vara starkare än den lagade tanden så det är viktigt att sköta sin munhygien från tidig ålder. God munhygien och bra kostvanor minskar risken för restaurativa behandlingar eller omgörningar av befintliga konstruktioner. Men hur man behöver sköta sin munhygien är individuellt och därmed är det är viktigt att var och en får rätt rådgivning. Det kan både tandläkaren och tandhygienisten hjälpa dig med."
  },
  {
    title: "Implantat",
    content: "Tandimplantat kan vara det bästa sättet att ersätta förlorade tänder med. Efter en noggrann och utökad undersökning får du information om hur processen kan se ut för just dig. En implantatbehandling kan förenklat delas in i två steg; en kirurgisk del och en protetisk del. Den kirurgiska delen innebär en operation där man skruvar ner ett implantat av titan i käkbenet och den protetiska delen följer veckor eller månader efter då man skruvar en krona på implantatet. För den kirurgiska delen samarbetar vi med ledande kirurger, den protetiska delen görs av oss på praktiken."
  },
  {
    title: "Kosmetisk tandvård",
    content: "Kosmetisk tandvård syftar till att korrigera och förbättra färg och form av antingen enstaka tänder eller hela bett. Beroende på omfattningen av dina önskemål kan det göras i mer eller mindre avancerade former. Blekning, byte av missfärgade lagningar, tandreglering och skalfasader är olika exempel på åtgärder som kan ha en upplyftande effekt för ditt leende. Samspelet mellan estetik, form och bettfunktion är ytterst viktig för hållbara resultat och därför måste vi gå igenom dina förväntningar omsorgsfullt innan vi kan presentera behandlingsförslag."
  },
  {
    title: "Kronor och broar",
    content: "Om tanden har en stor skada är krona ibland det bästa alternativet. En krona omsluter helt eller delvis den skadade tanden och kan anpassas precis efter tandens ursprungliga färg och form. Broar, även kallad bryggor, görs för att ersätta flera intilliggande skadade tänder eller för att fylla ut en lucka där en tand saknas. Majoriteten av våra kronor och broar tillverkas i keramiska material och limmas fast över det som är kvar av tanden."
  },
  {
    title: "Lagningar",
    content: "Vi är rädda om dina tänder men en lagning kan behöva göras om du har en skada på tanden eller på en befintlig fyllning. Skadorna kan bland annat vara orsakade av karies, sprickor, frakturer eller slitage. Tänder kan lagas med kompositmaterial, glasjonomermaterial eller plastförstärkt glasjonomermaterial. Inför en lagning erbjuds du som patient alltid bedövning så att processen blir smärtfri."
  },
  {
    title: "Proteser",
    content: "En protes kan ersätta några enstaka eller alla tänder i en käke. En protes kan vara utformad för temporär användning eller som ett permanent alternativ. Proteser är avtagbara och upplevs därmed ofta som lite rörliga trots goda förankringselement."
  },
  {
    title: "Rotfyllningar",
    content: "En rotbehandling innebär att inflammerad, död eller infekterad pulpavävnad avlägsnas och ersätts med ett rotfyllningsmaterial, vanligtvis guttaperka. Tanden och gummiduken desinfekteras och sterila maskinella instrument används för att rensa kanalerna. En rotfylld tand är skörare än en frisk tand men med rätt överkonstruktion kan den hålla under många år framöver."
  },
  {
    title: "Tandblekning",
    content: "Metoden vi använder innebär att vi tar avtryck på dina tänder och därefter gjuter en mjuk plastskena att lägga blekningsmedlet i. Efter att vi har provat ut skenan och instruerat dig kan du påbörja tandblekningen hemma. Innan en blekningsbehandling påbörjas är det viktigt att tänderna undersöks för att säkerhetsställa att det inte finns skador som kan förvärras av blekningen."
  },
  {
    title: "Tandlossning",
    content: "Tandlossning, även kallad parodontit, är en våra vanligaste folksjukdomar och orsakas primärt av en inflammation i tandköttet. Om inflammationen inte stoppas i tid angrips käkbenet och tänderna kan få en ökad rörlighet. Vid varje undersökning kontrollerar vi tandköttet noggrant och mäter eventuella tandköttsfickor för att se om förändring sker över tid."
  },
  {
    title: "Tandskydd",
    content: "Risken för avslagna tänder och käkfrakturer minskar avsevärt med ett korrekt utformat tandskydd. Tillsammans med våra tandtekniker hjälper dig med individuellt gjutna tandskydd i CE-godkända material."
  },
  {
    title: "Tandutdragningar",
    content: "En tand kan ibland bli så pass skadad eller infekterad att den behöver tas bort. Det händer också att friska tänder behöver avlägsnas, exempelvis visdomständer som inte får plats. När tanden och tandköttet är ordentligt bedövade tas tanden försiktigt bort med tunna instrument."
  }
];

const TreatmentItem = ({ item, isOpen, onClick }: { item: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-[#EFECE3] pb-4 break-inside-avoid mb-4">
      <button 
        type="button"
        onClick={onClick}
        className="w-full text-left flex justify-between items-center py-2 focus:outline-none group cursor-pointer"
      >
        <span className={`font-sans font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-[#7A8068]' : 'text-[#1A202C] group-hover:text-[#7A8068]'}`}>
          {item.title}
        </span>
        <span className={`text-[#D1CDBC] text-2xl font-light transform transition-transform duration-300 w-6 text-center ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-sans text-[#4A5568] leading-relaxed whitespace-pre-line text-sm md:text-base">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default function Behandlingar() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const halfLength = Math.ceil(treatments.length / 2);
  const leftColumn = treatments.slice(0, halfLength);
  const rightColumn = treatments.slice(halfLength);

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-12 w-full mb-32" id="behandlingar">
      <div className="mb-12 border-b border-[#D1CDBC] pb-6">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#1A202C] tracking-tight">
          Våra Behandlingar
        </h2>
        <p className="font-sans text-[#4A5568] mt-4 max-w-2xl text-lg">
          Vi erbjuder komplett och modern tandvård i en lugnande miljö. Oavsett om det rör sig om enklare basvård eller avancerad kirurgi, så vill vi få dig att känna dig väl omhändertagen.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#D1CDBC]/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div className="space-y-2">
            {leftColumn.map((item, index) => (
              <TreatmentItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          <div className="space-y-2">
            {rightColumn.map((item, index) => {
              const actualIndex = index + halfLength;
              return (
                <TreatmentItem
                  key={actualIndex}
                  item={item}
                  isOpen={openIndex === actualIndex}
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
