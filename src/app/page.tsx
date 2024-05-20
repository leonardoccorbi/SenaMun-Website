import FirstBanner from "@/components/FirstBanner";
import SecretariatLetter from "@/components/SectretariatLetter";
import InformationsPart from "@/components/InformationsPart";
import CardsSection from "@/components/CardsSection";

export default function Home() {
  return (
    <section>
      <FirstBanner />
      <SecretariatLetter />
      <InformationsPart />
      <CardsSection />
    </section>
  );
}
