"use client";

import { toast } from "react-toastify";
import { BsReply } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { DateForComment } from "@/modules/CourseTabs/types/courseTabsTypes";

const getComment = (): DateForComment[] => JSON.parse(localStorage.getItem("blogComments") || "[]");

const saveComment = (comment: DateForComment[]) => localStorage.setItem("blogComments", JSON.stringify(comment));

export default function CommentComponent({ id }: { id: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<DateForComment, "date">>();
  const [comment, setComment] = useState<DateForComment[]>([]);

  useEffect(() => {
    setComment(getComment());
  }, []);

  const onSubmit = (data: Omit<DateForComment, "date" | "id">) => {
    const allComments = getComment();
    const newComment = { ...data, id, date: new Date().toLocaleDateString() };
    const updated = [...allComments, newComment];
    setComment(updated);
    saveComment(updated);
    reset();
    toast.success("Comment added successfully");
  };

  const deleteComment = (indexInFiltered: number) => {
    const allComments = getComment();
    const filteredForBlog = allComments.filter((c) => c.id === id);
    const commentToDelete = filteredForBlog[indexInFiltered];

    const updated = allComments.filter((c) => c !== commentToDelete);
    setComment(updated);
    saveComment(updated);
    toast.success("Comment deleted successfully");
  };

  return (
    <>
      <div>
        <div>
          {comment
            .filter((c) => c.id === id)
            .map((c, index) => (
              <div key={index} className="flex gap-3 py-2">
                <div className="h-10 w-10 min-w-[40px] min-h-[40px] rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold">{c.name}</p>
                    <div className="text-gray-600 text-sm flex-shrink-0">
                      {c.date ? (
                        (() => {
                          const date = new Date(c.date);
                          const month = date.toLocaleDateString("en-US", { month: "long" });
                          const day = String(date.getDate()).padStart(2, "0");
                          const year = date.getFullYear();
                          return (
                            <p className="text-gray-600 whitespace-nowrap">
                              {month} {day}, {year}
                            </p>
                          );
                        })()
                      ) : (
                        <p>error</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 break-words whitespace-pre-wrap mt-1">{c.comment}</p>
                  <div className="flex items-center justify-between mt-2">
                    <button className="flex items-center gap-2 text-gray-600 cursor-pointer">
                      <BsReply className="text-red-500" /> Reply
                    </button>
                    <button onClick={() => deleteComment(index)} className="cursor-pointer text-2xl text-red-500">
                      <TiDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex w-full  pb-4">
          <div className=" w-full ">
            <h3 className="text-2xl">Leave a comment</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
              <div className="md:flex gap-2 mt-2 w-full">
                <div className="w-full pb-2">
                  <input
                    type="text"
                    placeholder="Name*"
                    {...register("name", {
                      required: "Enter your name",
                      pattern: {
                        value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,20}$/,
                        message: "Name must be 2-15 letters",
                      },
                      maxLength: {
                        value: 20,
                        message: "The maximum character limit is 20 char",
                      },
                      minLength: {
                        value: 2,
                        message: "The minimum number of characters is 2",
                      },
                    })}
                    className=" border-[1px] block border-gray-400 px-1 py-1 rounded-md w-full"
                  />
                  <p className="text-red-500 text-sm">{typeof errors?.name?.message === "string" ? errors?.name?.message : ""}</p>
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="Email*"
                    className=" border-[1px] border-gray-400 px-1 py-1 rounded-md w-full"
                  />
                  <p className="text-red-500 text-sm">{typeof errors?.email?.message === "string" ? errors?.email?.message : ""}</p>
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Comment"
                  {...register("comment", {
                    required: "Enter your message",

                    minLength: {
                      value: 20,
                      message: "The minimum number of characters is 20",
                    },
                  })}
                  className=" border-[1px] border-gray-400 px-1 py-1 rounded-md w-full h-50"
                ></textarea>
                <p className="text-red-500 text-sm">{typeof errors?.comment?.message === "string" ? errors?.comment?.message : ""}</p>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <p>Save my name, email in this brower for the next time I comment</p>
                </div>
                <button type="submit" className="py-2 px-3 bg-amber-500 text-white mt-3 rounded-3xl cursor-pointer">
                  Posts comment
                </button>
              </div>
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
