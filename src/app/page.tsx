import HeroHome from "@/components/pages/HeroHome";
import FeedBacks from "@/components/pages/Feedbacks";
import GrowSkils from "@/components/pages/GrowSkils";
import Categories from "@/components/pages/Categories";
import Statistics from "@/components/pages/Statistics";
import LatestArticles from "@/components/pages/LatestArticles";
import FeaturedCoursesAll from "@/components/pages/FeaturedCoursesAll";


export const metadata = {
  title: "EduPress | Learn Smarter, Grow Faster",
  description: "EduPress is a modern e-learning platform offering high-quality courses in development, design, marketing, and more. Learn from industry experts and level up your skills today.",
  keywords: ["EduPress", "Online Learning", "E-learning Platform", "Courses", "Web Development", "React", "Next.js", "Design", "Programming", "Skills", "Tech Education"],
  authors: [{ name: "EduPress Team", url: "https://edupress-neon.vercel.app/" }],
  creator: "EduPress",
  publisher: "EduPress",
  robots: "index, follow",
  openGraph: {
    title: "EduPress | Learn Smarter, Grow Faster",
    description: "Join thousands of learners on EduPress — the smart way to master development, design, and tech skills with top-rated courses.",
    url: "https://edupress-neon.vercel.app/",
    siteName: "EduPress",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "EduPress Home Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <div className="container mx-auto px-4">
        <Categories />
        <FeaturedCoursesAll />
        {/* <BannerExplorerCourse /> */}
        <Statistics />
        <GrowSkils />
        <FeedBacks />
        <LatestArticles />
      </div>
    </>
  );
}
