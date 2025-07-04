"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* ABOUT */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/constrcution/logo.jpg"
                  alt="Company Logo"
                  width={140}
                  height={30}
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="Southern Underground Logo"
                  width={140}
                  height={30}
                  className="hidden dark:block"
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Southern Underground delivers cutting-edge directional boring, utility installation, and civil construction solutions nationwide. Founded in 2015 in Zachary, LA, we’re committed to safety, integrity, and community.
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.linkedin.com/company/southern-underground-ofla/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  {/* LinkedIn Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.22h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.34 6 7.68V24h-5v-7.08c0-1.69 0-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.73V24h-5V8z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/SouthernUndergroundLA"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  {/* Facebook Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.3 3-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/SouthernUnderground"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  {/* Twitter Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.6a9.6 9.6 0 01-2.8.8 4.9 4.9 0 002.1-2.7 9.8 9.8 0 01-3.1 1.2A4.9 4.9 0 0016.6 3c-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.2C7.7 8.9 4.1 6.8 1.7 3.8a4.9 4.9 0 00-.7 2.5c0 1.7.9 3.3 2.3 4.1A4.9 4.9 0 01.96 9v.1c0 2.3 1.6 4.3 3.7 4.7a4.9 4.9 0 01-2.2.1 4.9 4.9 0 004.6 3.4A9.8 9.8 0 010 19.5a13.8 13.8 0 007.5 2.2c9.1 0 14.1-7.5 14.1-14.1 0-.2 0-.4 0-.6A10 10 0 0024 4.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Quick Links
              </h2>
              <ul>
                <li className="mb-4">
                  <Link href="/" className="text-body-color hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="text-body-color hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/services" className="text-body-color hover:text-primary">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects" className="text-body-color hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-body-color hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* TERMS */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Terms
              </h2>
              <ul>
                <li className="mb-4">
                  <Link href="/terms" className="text-body-color hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/privacy" className="text-body-color hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-body-color hover:text-primary">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Support & Help
              </h2>
              <ul>
                <li className="mb-4">
                  <Link href="/contact" className="text-body-color hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/faq" className="text-body-color hover:text-primary">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-body-color hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E1]/50 to-transparent dark:via-[#959CB1]/50"></div>

        {/* Bottom */}
        <div className="text-center pb-8">
          <p className="text-base text-body-color dark:text-white">
            © {new Date().getFullYear()} Southern Underground of Louisiana. All rights reserved.
          </p>
          <p className="text-sm text-body-color dark:text-body-color-dark mt-1">
            4922 Rankin Street, Zachary, Louisiana 70791 | (225) XXX-XXXX | info@southernunderground.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
