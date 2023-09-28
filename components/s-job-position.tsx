import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChevronRight } from "lucide-react";

// ContentJobPosition
const ContentJobPosition = [
  {
    label: "Developers",
    url: "/",
  },
  {
    label: "Marketers",
    url: "/",
  },
  {
    label: "Product Owners",
    url: "/",
  },
  {
    label: "Sales & Support",
    url: "/",
  },
];

export const SJobPosition = () => {
  return (
    <section className="bg-gradient-to-b from-[#121C2D] from-50% to-white to-5% py-16">
      <div className="container">
        <ul className="mx-auto grid grid-cols-2 gap-2 md:w-4/5 md:grid-cols-4 md:gap-4">
          {ContentJobPosition?.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                aria-label={item.label}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "default",
                    className:
                      "w-full justify-between text-sm shadow-lg max-md:px-4 md:text-base",
                  }),
                )}
              >
                {item.label}
                <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive text-white">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
