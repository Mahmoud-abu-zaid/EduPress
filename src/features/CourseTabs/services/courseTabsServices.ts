import { DateForComment } from "../types/courseTabsTypes";


export function getCommit():DateForComment[] {
  const commitMessage = localStorage.getItem("commitMessage");

  return commitMessage ? JSON.parse(commitMessage) : [];
}
export function setCommit(commitMessage: DateForComment[]) {
  localStorage.setItem("commitMessage", JSON.stringify(commitMessage));
}
export function daleteCommit(commit: DateForComment[], indexToDalete: number): DateForComment[] {
  return commit.filter((_, index) => index !== indexToDalete);
}

