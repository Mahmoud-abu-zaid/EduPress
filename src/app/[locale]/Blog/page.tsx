import BlogList from "@/modules/Blog/components/BlogList";
import getBlog from "@/modules/Blog/services/getBlogservices";

export default async function Blog() {
  const data = await getBlog();
  return (
    <>
      <BlogList data={data} />
    </>
  );
}
