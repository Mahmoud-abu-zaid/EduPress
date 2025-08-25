export interface BlogType {
  id: string;
  img: string;
  title: string;
  data: string;
  discription: string;
  Photography: string;
}
export interface UseBlogsFilter {
  data: BlogType[];
  search: string;
  sliderIndex: number;
  setSliderIndex: React.Dispatch<React.SetStateAction<number>>;
}
export interface FilterParams {
  data: BlogType[];
  search: string;
}