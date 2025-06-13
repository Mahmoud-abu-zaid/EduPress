import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Headers";
import ToggleLanguage from "@/components/utils/ToggleLanguage";
import HomePage from "./Homepage/page";

export default function Home() {
  return (
    <>
      <ToggleLanguage>
        <Header />
        <HomePage />
        <Footer />
      </ToggleLanguage>
    </>
  );
}
