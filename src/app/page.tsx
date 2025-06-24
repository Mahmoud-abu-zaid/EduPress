import HeroHome from "@/components/pages/HeroHome";
import Categories from "@/components/pages/Categories";
import FeaturedCoursesAll from "@/components/pages/FeaturedCoursesAll";
import BannerExplorerCourse from "@/components/ui/BannerExplorerCourse";

export default function Home() {
  return (
    <>
      <HeroHome />
      <div>
        <Categories />
        <FeaturedCoursesAll />
        <BannerExplorerCourse />
      </div>
    </>
  );
}
