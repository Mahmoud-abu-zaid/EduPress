import { DateForComment } from "../types/courseTabsTypes";

export function getComment(): DateForComment[] {
  const commitMessage = localStorage.getItem("courseComments");
  return commitMessage ? JSON.parse(commitMessage) : [];
}

export function setComment(comments: DateForComment[]): void {
  localStorage.setItem("courseComments", JSON.stringify(comments));
}

export function getCommentByCourse(id: string): DateForComment[] {
  return getComment().filter((c) => c.id === id);
}

export function addComment(id: string, data: Omit<DateForComment, "date">): DateForComment[] {
  const allComments = getComment();
  const newComment: DateForComment = {
    ...data,
    id,
    date: new Date().toLocaleDateString(),
  };
  const updated = [...allComments, newComment];
  setComment(updated);
  return updated.filter((c) => c.id === id);
}

export function deleteCommentByCourse(id: string, indexInFiltered: number): DateForComment[] {
  const allComments = getComment();
  const filteredForCourse = allComments.filter((c) => c.id === id);
  const commentToDelete = filteredForCourse[indexInFiltered];
  const updatedAll = allComments.filter((c) => c !== commentToDelete);
  setComment(updatedAll);
  return updatedAll.filter((c) => c.id === id);
}
