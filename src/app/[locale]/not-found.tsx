import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="bg-fourth-color-gray-bg">
        <div>
          <p className="px-12 py-5 text-3xl font-bold">Error</p>
        </div>
        <div className="flex flex-col items-center justify-center  text-center pb-15 p-6">
          <Image src="/img/not-found-page.webp" alt="icon not found searchnp" className="sm:w-[50%] lg:w-[40%] h-fit" width={2500} height={1000} />
        </div>
      </div>
    </>
  );
}
