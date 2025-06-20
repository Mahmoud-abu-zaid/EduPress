import Link from "next/link";

export default function BtnLinkAll({ path, title }: { path: string; title: string }) {
  return (
    <>
      <div className="my-6">
        <Link className="border-[1px] border-gray-600 py-2 px-4 bg-white text-black rounded-3xl" href={path}>
          {title}
        </Link>
      </div>
    </>
  );
}
