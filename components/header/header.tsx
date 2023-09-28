import { SiteLogo } from "../site-logo";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center justify-between">
        {/* SiteLogo */}
        <SiteLogo />
      </div>
    </header>
  );
};

export default Header;
