import { SiteLogo } from "../site-logo";
import { Buttons } from "./buttons";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* SiteLogo */}
        <SiteLogo />

        {/* NavMenu */}

        {/* Buttons */}
        <Buttons />
      </div>
    </header>
  );
};

export default Header;
