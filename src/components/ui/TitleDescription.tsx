export default function TitleDescription({ title, description }: { title: string; description: string }) {
  return (
    <>
      <div>
        <h3 className="text-2xl text-color-black font-bold">{title}</h3>
        <p className="text-md text-second-color-text">{description}</p>
      </div>
    </>
  );
}
