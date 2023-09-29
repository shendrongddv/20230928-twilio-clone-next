import Link from "next/link";
import { SiteLogo } from "../site-logo";
import { SheetClose } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const NavbarMobile = () => {
  return (
    <>
      {/* Header */}
      <div className="sticky left-0 top-0 h-16 w-full border-b p-4">
        <SheetClose asChild>
          <SiteLogo />
        </SheetClose>
      </div>

      {/* Main */}

      {/* Footer */}
      <div className="sticky bottom-0 left-0 mt-auto grid w-full grid-cols-2 gap-2 border-t p-4">
        <Link
          href="/"
          aria-label="Start for free"
          className={cn(
            buttonVariants({
              variant: "default",
              size: "default",
              className: "col-span-2",
            }),
          )}
        >
          Start for free
        </Link>

        <Link
          href="/"
          aria-label="Login"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className: "",
            }),
          )}
        >
          Login
        </Link>

        <Link
          href="/"
          aria-label="Contact sales"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className: "",
            }),
          )}
        >
          Contact sales
        </Link>
      </div>
    </>
  );
};
