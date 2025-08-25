import { useState } from "react";
export function useBlogList() {
  const [search, setSearch] = useState("");

  const [sliderIndex, setSliderIndex] = useState(1);

  const [isGridView, setIsGridView] = useState(true);
  return { search, setSearch, sliderIndex, setSliderIndex, isGridView, setIsGridView };
}
export function useBlogFilter({}) {

}