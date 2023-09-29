import { SiteLogo } from "../site-logo";
import { Buttons } from "./buttons";
import { Nav } from "./nav";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* SiteLogo */}
        <SiteLogo />

        {/* NavMenu */}
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* Buttons */}
        <Buttons />
      </div>
    </header>
  );
};

export default Header;
