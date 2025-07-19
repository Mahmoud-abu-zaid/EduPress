import BlogList from "@/features/Blog/components/BlogList";
import getBlog from "@/features/Blog/services/getBlog";

export default async function Blog() {
  const data = await getBlog();
  return (
    <>
      <BlogList data={data} />
    </>
  );
}
