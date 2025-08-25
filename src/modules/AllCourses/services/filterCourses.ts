import { DataCorurses, FilterParams } from "../types/typeCourses";

export function filterCourses({ data, search, selectedCategories }: FilterParams) {
  return data.filter((course) => {
    const matchesSearch =
      course.title?.toLowerCase().includes(search.toLowerCase()) ||
      course.Photography?.toLowerCase().includes(search.toLowerCase()) ||
      course.by?.toLowerCase().includes(search.toLowerCase()) ||
      course.priceFree?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category || "") ||
      selectedCategories.includes(course.instructor || "") ||
      selectedCategories.includes(course.levels || "") ||
      (course.review !== undefined && selectedCategories.includes(course.review.toString()));

    return matchesSearch && matchesCategory;
  });
}

export function paginateCourses(filteredData: DataCorurses[], sliderIndex: number, coursesPage = 6) {
  const startIndex = (sliderIndex - 1) * coursesPage;
  const endIndex = startIndex + coursesPage;

  return {
    paginatedData: filteredData.slice(startIndex, endIndex),
    totalPages: Math.ceil(filteredData.length / coursesPage),
  };
}
