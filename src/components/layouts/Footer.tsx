import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" text-white bg-gray-50">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start  gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 text-black text-2xl font-bold">
                <Image src="/img/Screenshot 2025-06-07 093836.png" alt="EduPress Logo" width={40} height={40} />
                EduPress
              </Link>
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">GET HELP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    Latest Articles
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">PROGRAMS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    Art & Design
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    IT & Software
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    Languages
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                    Programming
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Contact Us</h3>
              <address className="not-italic text-gray-500">
                <p>123 Business Ave</p>
                <p>San Francisco, CA 94107</p>
                <p className="mt-2">
                  Email:
                  <Link href="/" className="hover:text-amber-500 transition">
                    info@company.com
                  </Link>
                </p>
                <p>
                  Phone:
                  <Link href="/" className="hover:text-amber-500 transition">
                    +1 (123) 456-7890
                  </Link>
                </p>
              </address>
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="/" className="text-gray-500 hover:text-amber-500 transition"></Link>
                <Link href="/" className="text-gray-500 hover:text-amber-500 transition">
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
