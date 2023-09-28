import Image from "next/image";
import Link from "next/link";

export const SiteLogo = () => {
  return (
    <Link href="/" aria-label="Twilio">
      <Image
        src="/twilio.svg"
        alt="Twilio"
        width={107}
        height={39}
        className="h-[38px] w-auto"
      />
    </Link>
  );
};
