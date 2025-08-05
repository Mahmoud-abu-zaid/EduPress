import FAQs from "@/components/ui/FAQs";
import Image from "next/image";

export default function Fags() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-wrap py-10 px-4 w-screen">
        <div className="flex flex-col gap-5 px-2 md:flex-1/2 w-full">
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <Image src="/img/Vector (4).png" alt="" width={556} height={317} />
        </div>
        <div className="flex flex-col gap-5 px-2  md:flex-1/2 w-full pt-5 md:pt-0">
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <FAQs background="bg-gray-100" taxtColor="text-black" />
          <FAQs background="bg-gray-100" taxtColor="text-black" />
        </div>
      </div>
    </div>
  );
}
