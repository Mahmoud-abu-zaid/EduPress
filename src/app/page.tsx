import HeroHome from "@/components/pages/HeroHome";

import Categories from "@/components/pages/Categories";

import BannerExplorerCourse from "@/components/ui/BannerExplorerCourse";
import FeaturedCoursesAll from "./FeaturedCoursesAll/page";

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
