export interface DataCorurses {
  id: string;
  img: string;
  by: string;
  title: string;
  time: number;
  students: number;
  priceBefore: string;
  priceAfter: string;
  priceFree: string;
  Photography: string;
  Lessons: number;
  Quizzes: number;
  levels: string;
  category: string;
  instructor: string;
  review: number;
}
export interface FilterParams {
  data: DataCorurses[];
  search: string;
  selectedCategories: string[];
}

export interface UseCoursesFilterProps {
  data: DataCorurses[];
  search: string;
  selectedCategories: string[];
  sliderIndex: number;
  setSliderIndex: React.Dispatch<React.SetStateAction<number>>;
}
