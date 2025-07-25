import { DateForComment } from "../types/courseTabsTypes";

export function getCommit(): DateForComment[] {
  const commitMessage = localStorage.getItem("courseComments");
  return commitMessage ? JSON.parse(commitMessage) : [];
}

export function setCommit(comments: DateForComment[]): void {
  localStorage.setItem("courseComments", JSON.stringify(comments));
}

export function deleteCommit(comments: DateForComment[], indexToDelete: number): DateForComment[] {
  return comments.filter((_, index) => index !== indexToDelete);
}