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
        <div className="text-center pb-15">
          <TitleDescription title="Student feedbacks" description="What Students Say About Academy LMS" />
        </div>

        <div className="flex justify-center md:justify-between items-center gap-7 px-10 flex-wrap">
          {feedbacks.map((feedbacks) => (
            <div key={feedbacks.id} className="md:w-[250px] min-w-[250px] min-h-[345px] md:h-[345px] hover:scale-105 transition-transform duration-300 ease-in-out py-4 px-6 border border-gray-200 rounded-lg shadow-lg ">
              <p className="text-5xl text-third-color py-3 ">{feedbacks.icon}</p>
              <p className="text-color-black">{feedbacks.comment}</p>
              <p className="text-xl font-semibold py-2 text-color-black">{feedbacks.name}</p>
              <p className="pb-2 text-third-color">{feedbacks.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
