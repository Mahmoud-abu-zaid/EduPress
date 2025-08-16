import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className=" text-color-white bg-color-footer-gray mt-8">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start  gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 text-color-black text-2xl font-bold">
                <Image src="/img/Screenshot 2025-06-07 093836.png" alt="EduPress Logo" width={40} height={40} />
                EduPress
              </Link>
              <p className="text-color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-color-black">GET HELP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    Latest Articles
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-color-black">PROGRAMS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    Art & Design
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    IT & Software
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    Languages
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-second-color-text hover:text-main-color transition">
                    Programming
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-color-black">Contact Us</h3>
              <address className="not-italic text-second-color-text">
                <p>123 Business Ave</p>
                <p>San Francisco, CA 94107</p>
                <p className="mt-2">
                  Email:
                  <Link href="/" className="hover:text-main-color transition">
                    info@company.com
                  </Link>
                </p>
                <p>
                  Phone:
                  <Link href="/" className="hover:text-main-color transition">
                    +1 (123) 456-7890
                  </Link>
                </p>
              </address>
              <div className="flex space-x-4">
                <Link href="/" className="text-second-color-text hover:text-main-color transition">
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="/" className="text-second-color-text hover:text-main-color transition">
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="/" className="text-second-color-text hover:text-main-color transition">
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="/" className="text-second-color-text hover:text-main-color transition"></Link>
                <Link href="/" className="text-second-color-text hover:text-main-color transition">
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-second-color-text text-sm mb-4 md:mb-0">© 2025 Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
