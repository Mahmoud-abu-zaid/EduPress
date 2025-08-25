import { useEffect } from "react";
import { BlogType, FilterParams, UseBlogsFilter } from "../types/typeBlog";

export default function filterBlog({ data, search }: FilterParams) {
  return data.filter((blog) => {
    const matchesSearch = blog.title?.toLowerCase().includes(search.toLowerCase()) || blog.Photography?.toLowerCase().includes(search.toLowerCase());

    return matchesSearch;
  });
}
export function filterBlogs({ data, search }: FilterParams) {
  return data.filter((blog) => {
    const matchesSearch = blog.title?.toLowerCase().includes(search.toLowerCase()) || blog.Photography?.toLowerCase().includes(search.toLowerCase());

    return matchesSearch;
  });
}

export function paginateBlogs(filteredData: BlogType[], sliderIndex: number, blogsPage = 6) {
  const startIndex = (sliderIndex - 1) * blogsPage;
  const endIndex = startIndex + blogsPage;

  return {
    paginatedData: filteredData.slice(startIndex, endIndex),
    totalPages: Math.ceil(filteredData.length / blogsPage),
  };
}

export function useBlogsFilter({ data, search, sliderIndex, setSliderIndex }: UseBlogsFilter) {
  const filteredData = filterBlogs({ data, search });
  const { paginatedData, totalPages } = paginateBlogs(filteredData, sliderIndex);

  useEffect(() => {
    setSliderIndex(1);
  }, [search, setSliderIndex]);

  return { paginatedData, totalPages };
}
