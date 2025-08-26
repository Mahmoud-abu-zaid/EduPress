import { useState } from "react";
import { DateForComment } from "../types/courseTabsTypes";
import { useForm } from "react-hook-form";

export default function useCoursesTabs() {
  const [submitComment, setSubmitComment] = useState<DateForComment[]>([]);
  const [activeTab, setActiveTab] = useState("Overview");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DateForComment>();

  return { submitComment, setSubmitComment, activeTab, setActiveTab, register, handleSubmit, errors, reset };
}
