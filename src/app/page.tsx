import HeroHome from "@/components/pages/HeroHome";

import Categories from "@/components/pages/Categories";
import FeaturedComponents from "./FeaturedCourses/[id]/page";

export default function Home() {
  return (
    <>
      <HeroHome />
      <div>
        <Categories />
        <FeaturedComponents />
      </div>
    </>
  );
}
