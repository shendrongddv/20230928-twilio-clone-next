import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Toggle } from "./toggle";

export const Buttons = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="ghost" size="icon" className="hidden md:flex">
        <SearchIcon className="h-4 w-4" />
      </Button>

      <Link
        href="/"
        aria-label="Contact sales"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "default",
            className: "hidden md:flex",
          }),
        )}
      >
        Contact sales
      </Link>

      <Link
        href="/"
        aria-label="Start for free"
        className={cn(
          buttonVariants({
            variant: "default",
            size: "default",
            className: "",
          }),
        )}
      >
        Start for free
      </Link>

      <Toggle />
    </div>
  );
};
