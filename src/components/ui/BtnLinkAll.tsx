import Link from "next/link";

export default function BtnLinkAll({ path, title }: { path: string; title: string }) {
  return (
    <>
      <div className="my-6">
        <Link className="border-[1px] border-second-color-text py-2 px-4 bg-white-bg hover:bg-hover-butten-gray duration-300 text-black-text rounded-3xl" href={path}>
          {title}
        </Link>
      </div>
    </>
  );
}
