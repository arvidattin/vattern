import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Behandlingar from "@/components/Behandlingar";
import Priser from "@/components/Priser";
import OmOss from "@/components/OmOss";
import OmPraktikertjanst from "@/components/OmPraktikertjanst";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <Behandlingar />
      <Priser />
      <OmOss />
      <OmPraktikertjanst />
    </>
  );
}
