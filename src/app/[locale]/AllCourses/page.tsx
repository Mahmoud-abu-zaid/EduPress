import CourseList from "@/modules/AllCourses/components/CourseList";
import { getCourses } from "@/modules/AllCourses/services/getCourses";
export const metadata = {
  title: "All Courses | EduPress - Explore Our Full Course Library",
  description: "Discover all courses on EduPress. Explore a wide range of topics including development, design, marketing, and more. Learn at your own pace from top instructors.",
  keywords: ["EduPress", "All Courses", "Online Learning", "E-learning Platform", "Web Development", "React", "Next.js", "Design", "Programming", "Skills", "Tech Education", "Full Course Library"],
  authors: [{ name: "EduPress Team", url: "https://edupress-neon.vercel.app/" }],
  creator: "EduPress",
  publisher: "EduPress",
  robots: "index, follow",
  openGraph: {
    title: "All Courses | EduPress - Explore Our Full Course Library",
    description: "Browse all EduPress courses and boost your skills in development, design, and more. Learn smarter and grow faster with top-rated instructors.",
    url: "https://edupress-neon.vercel.app/all-courses",
    siteName: "EduPress",
    images: [
      {
        url: "/img/all-courses-preview.png",
        width: 1200,
        height: 630,
        alt: "EduPress All Courses Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function AllCourses() {
  const data = await getCourses();

  return (
    <>
      <CourseList data={data} />
    </>
  );
}
