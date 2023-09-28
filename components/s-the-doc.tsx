import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

// Content
const DummyContent = [
  {
    title: "Official SDKs",
    desc: "Build quickly and confidently with our SDKs for Node.js, Python, C#, Java, PHP, Ruby, and Go.",
  },
  {
    title: "Twilio Functions",
    desc: "Bring ideas to life without having to host your own code by deploying with Twilio Functions.",
  },
  {
    title: "99.95%+ API uptime",
    desc: "Reliable availability you can trust to power your app’s most important features.",
  },
];

export const STheDoc = () => {
  return (
    <section className="bg-[#121C2D] py-16">
      <div className="container space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-6 md:w-5/12">
            <h2 className="h2 text-white">
              Send your first phone call in a matter of minutes
            </h2>

            <p className="text-white">
              Sign up for a free Twilio account and grab one of our seven
              official server-side SDKs to get started. Send your first text
              message, phone call, or email in minutes and when you&apos;re
              ready to launch your app, upgrade to a pay-as-you-go plan.
            </p>

            <div className="flex gap-4">
              <Link
                href="/"
                aria-label="View the docs"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
                    className: "bg-white text-foreground",
                  }),
                )}
              >
                View the docs
              </Link>

              <Link
                href="/"
                aria-label="Sign up"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "default",
                    className: "bg-transparent text-white",
                  }),
                )}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <ul className="grid w-full gap-8 md:grid-cols-3 md:gap-12">
          {DummyContent?.map((item, index) => (
            <li key={index} className="space-y-3 text-white">
              <h3 className="h3">{item.title}</h3>
              <p className="md:text-lg">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
