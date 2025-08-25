import { useEffect, useState } from "react";
import { UseCoursesFilterProps } from "../types/typeCourses";
import { filterCourses, paginateCourses } from "../services/filterCourses";

export function useCourseList() {
  const [search, setSearch] = useState("");

  const [sliderIndex, setSliderIndex] = useState(1);

  const [isGridView, setIsGridView] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return { search, setSearch, sliderIndex, setSliderIndex, isGridView, setIsGridView, selectedCategories, setSelectedCategories };
}

export function useCoursesFilter({ data, search, selectedCategories, sliderIndex, setSliderIndex }: UseCoursesFilterProps) {
  const filteredData = filterCourses({ data, search, selectedCategories });
  const { paginatedData, totalPages } = paginateCourses(filteredData, sliderIndex);

  useEffect(() => {
    setSliderIndex(1);
  }, [search, selectedCategories, setSliderIndex]);

  return { filteredData, paginatedData, totalPages };
}
