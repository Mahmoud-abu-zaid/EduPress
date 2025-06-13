export default function TitleDescription({ title, description }: { title: string; description: string }) {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-md text-gray-600">{description}</p>
      </div>
    </>
  );
}
