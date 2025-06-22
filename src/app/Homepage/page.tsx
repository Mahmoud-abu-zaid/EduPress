import Categories from "@/components/pages/Categories";
import HeroHome from "@/components/pages/HeroHome";
import FeaturedComponents from "../FeaturedCourses/[id]/page";

export default function HomePage() {
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
