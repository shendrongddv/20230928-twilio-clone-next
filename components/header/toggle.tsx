import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavbarMobile } from "./navbar-mobile";

export const Toggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex h-full w-4/5 flex-col p-0">
        {/* SheetContent */}
        <NavbarMobile />
        {/* ./ SheetContent */}
      </SheetContent>
    </Sheet>
  );
};
