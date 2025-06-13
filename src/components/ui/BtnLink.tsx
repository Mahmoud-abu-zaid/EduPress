import Link from "next/link";

export default function BtnLink({ path, title }: { path: string; title: string }) {
  return (
    <>
      <Link className="text-white bg-[#ff782d] rounded-3xl py-2 px-4" href={path}>{title}</Link>
    </>
  );
}
