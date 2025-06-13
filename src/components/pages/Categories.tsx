import BtnLinkAll from "../ui/BtnLinkAll";
import TitleDescription from "../ui/TitleDescription";

export default function Categories() {
  return (
    <>
      <div className="py-9 px-7 flex flex-wrap justify-between items-center">
        <TitleDescription title="Top Categories" description="Explore our Popular Categories" />
        <BtnLinkAll path="/" title="All categories" />
      </div>
    </>
  );
}
