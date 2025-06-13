import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Headers";
import HeroHome from "@/components/pages/HeroHome";
import ToggleLanguage from "@/components/utils/ToggleLanguage";

export default function Home() {
  return (
    <>
      <ToggleLanguage>
        <Header />
        <HeroHome />
        <Footer />
      </ToggleLanguage>
    </>
  );
}
