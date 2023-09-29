import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

// Content
const DummyContent = [
  {
    title: "Launch a proof of concept quickly",
    desc: "Test out your ideas for voice, messaging, and communication apps in a drag-and-drop visual editor that’s easy to use.",
  },
  {
    title: "Build IVRs for every user, any channel",
    desc: "Create dynamic IVRs that respond intelligently to customer inputs using AI and flexible APIs.",
  },
  {
    title: "Start for free. Pay as you go.",
    desc: "Keep your costs low. With Serverless on Twilio, you pay as you go so you can control costs and scale up as your use case grows.",
  },
];

export const STheStudio = () => {
  return (
    <section className="bg-[#FDF7F4] py-16">
      <div className="container space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start md:w-5/12">
            <h2 className="h2 ">No coding experience? No problem.</h2>

            <p className="mt-4">
              You don&apos;t have to be a developer to use Twilio. You can
              visually create, edit, and manage communication workflows too.
            </p>

            <div className="mt-8 flex gap-2">
              <Link
                href="/"
                aria-label="The Studio"
                className={cn(
                  buttonVariants({
                    variant: "primary",
                    size: "default",
                    className: "",
                  }),
                )}
              >
                The Studio
              </Link>

              <Link
                href="/"
                aria-label="View Studio user guide
"
                className={cn(
                  buttonVariants({
                    variant: "primaryOutline",
                    size: "default",
                    className: "",
                  }),
                )}
              >
                View Studio user guide
              </Link>
            </div>
          </div>

          <div className="md:w-6/12">
            <Image
              src="/twilio-studio.webp"
              alt="Twilio Studio"
              width={480}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </div>

        <ul className="grid w-full gap-8 md:grid-cols-3 md:gap-12">
          {DummyContent?.map((item, index) => (
            <li key={index} className="space-y-2">
              <h3 className="h3">{item.title}</h3>
              <p className="md:text-lg">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
