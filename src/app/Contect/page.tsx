import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contect() {
  return (
    <div className="py-7 flex justify-center flex-wrap gap-8 px-4">
      <div>
        <h1 className="text-3xl font-semibold">Need a direct line?</h1>
        <p className="text-gray-600">
          Cras massa et odio donec faucibus in. Vitae pretium <br />
          massa dolor ullamcorper lectus elit quam.
        </p>
        <div className="flex items-center gap-6 pt-3">
          <div className="bg-[#f5f5f5] p-3 text-2xl rounded-xl text-amber-500">
            <FaPhone />
          </div>
          <div>
            <p className="text-gray-700">Phone</p>
            <p>(123) 456 7890</p>
          </div>
        </div>
        <div className="flex items-center gap-6 py-4">
          <div className="bg-[#f5f5f5] p-3 text-2xl rounded-xl text-amber-500">
            <MdEmail />
          </div>
          <div>
            <p className="text-gray-700">Email</p>
            <p>contact@thimpress.com</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] w-full">
        <iframe
          className=" rounded-2xl w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27521.352442556912!2d31.056867683515865!3d30.43130918651475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587983dbcc1fbd%3A0x4b3aee20a2067b8a!2z2KfZhNio2KfYrNmI2LHYjCDZhdiv2YrZhtipINin2YTYqNin2KzZiNix2Iwg2KfZhNio2KfYrNmI2LHYjCDZhdit2KfZgdi42Kkg2KfZhNmF2YbZiNmB2YrYqQ!5e0!3m2!1sar!2seg!4v1753476776018!5m2!1sar!2seg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
