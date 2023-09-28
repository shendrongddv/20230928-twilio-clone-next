import { FooterNav, PrivacyNav } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121C2D] pb-8 pt-16">
      <div className="container flex flex-col items-center gap-12">
        {/* # */}
        <h2 className="text-center text-2xl font-light italic text-[#8891aa] md:text-[40px]">
          We can&apos;t wait to see what you build.
        </h2>

        {/* MainMenu */}
        <ul className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-4">
          {FooterNav?.map((item) => (
            <li key={item.id}>
              <h4 className="text-sm font-medium text-[#e1e3ea]">
                {item.label}
              </h4>

              <ul className="mt-3 grid grid-cols-2 gap-2 gap-x-4 sm:grid-cols-1">
                {item.links?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      aria-label={item.label}
                      className="text-[#8891aa] hover:text-[#e1e3ea]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* FooterMenu */}
        <div className="flex w-full flex-col items-center gap-2">
          <ul className="mb-6 grid w-full grid-cols-4 flex-wrap items-center justify-center gap-2 sm:flex md:gap-8">
            {PrivacyNav?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className="text-xs text-[#8891aa] hover:text-[#e1e3ea]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="text-xs text-[#e1e3ea]">
            Copyright © 2023 Twilio Inc.
          </span>
          <span className="text-xs text-[#e1e3ea]">All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
