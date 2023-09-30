import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavbarNav } from "@/config/site";
import { SheetClose } from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";

export const NavMobile = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {NavbarNav?.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-b-0">
          <AccordionTrigger className="px-4 py-2">
            {item.label}
          </AccordionTrigger>
          <AccordionContent asChild>
            <ul className="grid grid-cols-2">
              {item.links?.map((item) => (
                <li key={item.id}>
                  <SheetClose asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        buttonVariants({
                          variant: "link",
                          size: "default",
                          className: "w-full justify-start",
                        }),
                      )}
                    >
                      <ChevronRight className="mr-2 h-4 w-4" />
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
