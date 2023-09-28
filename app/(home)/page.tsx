import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ArrowRight } from "lucide-react";

import { dummyProductDescription } from "@/config/dummy";

import { SHomeHero } from "@/components/s-home-hero";
import { SJobPosition } from "@/components/s-job-position";
import { SWhatWeDo } from "@/components/s-what-we-do";
import { STheDoc } from "@/components/s-the-doc";
import { STheStudio } from "@/components/s-the-studio";
import { SUserStory } from "@/components/s-user-story";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <SHomeHero />
      {/* ./ Hero */}

      {/* JobPosition */}
      <SJobPosition />
      {/* ./JobPosition */}

      {/* #What We Do */}
      <SWhatWeDo />
      {/* ./ #What We Do */}

      {/* The Doc */}
      <STheDoc />
      {/* ./ The Doc */}

      {/* The Studio */}
      <STheStudio />
      {/* ./ The Studio */}

      {/* Customer stories */}
      <SUserStory />
      {/* ./ Customer stories */}

      {/* Product description */}
      <section className="py-16">
        <div className="container flex flex-col items-center gap-12">
          <h2 className="h2 text-center md:w-4/5">
            Twilio combines the best in communications and customer data
          </h2>

          <ul className="grid w-full gap-8 md:grid-cols-3 md:gap-12">
            {dummyProductDescription?.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="gap-12 space-y-4 overflow-hidden rounded-lg border bg-background p-4 transition duration-300 hover:shadow-lg md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <Badge className="rounded-full">{item.product}</Badge>

                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>

                <h3 className="h3">{item.title}</h3>

                <p>{item.desc}</p>
              </li>
            ))}

            {dummyProductDescription?.slice(3)?.map((item) => (
              <li
                key={item.id}
                className="grid overflow-hidden rounded-lg border bg-background transition duration-300 hover:shadow-lg md:col-span-3 md:grid-cols-2 md:gap-12"
              >
                {/* Col */}
                <div>
                  <Image
                    src={`/${item.media}`}
                    alt={item.title}
                    width={480}
                    height={480}
                    className="h-auto w-full"
                  />
                </div>

                {/* Col */}
                <div className="flex flex-col items-start justify-center space-y-4 p-4 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <Badge className="rounded-full">{item.product}</Badge>

                    {/* <ArrowRight className="h-4 w-4 text-muted-foreground" /> */}
                  </div>

                  <h3 className="h3">{item.title}</h3>

                  <p>{item.desc}</p>

                  <Link
                    href={item.url}
                    aria-label={item.title}
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "default",
                        className: "p-0 hover:bg-transparent",
                      }),
                    )}
                  >
                    {item.cta}
                    <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ./ Product description */}

      {/* Get started today */}
      <section className="bg-slate-100 py-16">
        <div className="container flex flex-col gap-12 text-center md:flex-row md:items-center md:justify-between md:text-start">
          {/* Col */}
          <div className="flex flex-col items-center md:w-5/12 md:items-start">
            <span className="subtitle text-destructive">Get started today</span>

            <h2 className="h2 mt-2">Start building with Twilio for free</h2>

            <p className="lead mt-4">
              Sign up and start building your ideal customer engagement
              experience today.
            </p>

            <Link
              href="/"
              aria-label="Start for free"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className: "mt-6",
                }),
              )}
            >
              Start for free
            </Link>

            <Link
              href="/"
              aria-label="View pay-as-you-go pricing"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className: "mt-4 h-max p-0 underline underline-offset-8",
                }),
              )}
            >
              View pay-as-you-go pricing
            </Link>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <Image
              src="/get-started-today.webp"
              alt="Get started todat"
              width={480}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ Get started today */}
    </>
  );
}
