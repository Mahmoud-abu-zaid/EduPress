
interface BannerProps {
  locale: string;
  changeLanguage: (language: string) => void;
}

export default function Banner({ locale, changeLanguage }: BannerProps) {
  return (
    <>
      <div className="flex justify-around items-center gap-5 p-2 bg-color-footer-gray">
        <p className="text-color-black sm:text-lg text-sm">Welcome to Eduperss to change language </p>
        <select className="outline-none " value={locale} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="ar">Arabic</option>
          <option value="en">English</option>
        </select>
      </div>
    </>
  );
}
