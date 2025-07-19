import TitleDescription from "../ui/TitleDescription";

export default function FeedBacks() {
  const feedbacks = [
    {
      id: 1,
      icon: "//",
      comment: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      name: "Roe Smith",
      designation: "Designer",
    },
    {
      id: 2, 
      icon: "//",
      comment: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      name: "Roe Smith",
      designation: "Designer",
    },
    {
      id: 3,
      icon: "//",
      comment: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      name: "Roe Smith",
      designation: "Designer",
    },
    {
      id: 4,
      icon: "//",
      comment: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      name: "Roe Smith",
      designation: "Designer",
    },
  ];
  return (
    <>
      <div className="pb-10">
        <div className="text-center pb-5">

        <TitleDescription title="Student feedbacks" description="What Students Say About Academy LMS" />
        </div>
        <div className="flex  justify-center items-center gap-7 flex-wrap">
          {feedbacks.map((feedbacks) => (
            <div key={feedbacks.id} className="w-[250px] h-[345px] py-4 px-6 border border-gray-200 rounded-lg shadow-lg ">
              <p className="text-5xl text-gray-300 py-3 ">{feedbacks.icon}</p>
              <p>{feedbacks.comment}</p>
              <p className="text-xl font-semibold py-2">{feedbacks.name}</p>
              <p className="pb-2 text-gray-400">{feedbacks.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
