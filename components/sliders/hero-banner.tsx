"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { DummyBannerHero } from "@/config/dummy";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const HeroBanner = () => {
  const items = DummyBannerHero;

  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      centeredSlides={true}
      slidesPerView="auto"
      spaceBetween={0}
      className="AAA"
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id} className="BBB h-auto">
          <div className="container">
            <div className="CCC flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
              {/* Col */}
              <div className="flex flex-col items-center gap-6 text-center md:w-6/12 md:items-start md:text-start">
                <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {item.title}
                </h1>

                <p className="text-lg text-white md:text-xl">{item.desc}</p>

                <div className="mt-2 flex w-max gap-4">
                  {item.link && (
                    <Link
                      href={item.link.url}
                      aria-label={item.link.label}
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          size: "default",
                          className:
                            "border-2 border-[#0263E0] bg-[#0263E0] text-white",
                        }),
                      )}
                    >
                      {item.link.label}
                    </Link>
                  )}

                  {item.link2 && (
                    <Link
                      href={item.link2.url}
                      aria-label={item.link2.label}
                      className={cn(
                        buttonVariants({
                          variant: "link",
                          size: "default",
                          className: "p-0 text-white hover:text-white",
                        }),
                      )}
                    >
                      {item.link2.label}
                    </Link>
                  )}
                </div>
              </div>

              {/* Col */}
              <div className="md:w-5/12">
                <Image
                  src={`/${item.media}`}
                  alt={item.title}
                  width={480}
                  height={480}
                  className="mx-auto h-auto w-4/5 md:w-full"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const BannerItem = () => {
  return (
    <div className="CCC flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      {/* Col */}
      <div className="flex flex-col items-center gap-4 text-center md:w-6/12 md:items-start md:text-start">
        <h1 className="font-display text-4xl font-bold leading-snug tracking-tight text-white md:text-6xl">
          Gartner names Twilio a Leader in CPaaS
        </h1>

        <p className="text-lg text-white md:text-xl">
          The 2023 Gartner® Magic Quadrant™ for CPaaS recognizes Twilio based
          on its completeness of vision and ability to execute.
        </p>
      </div>

      {/* Col */}
      <div className="md:w-5/12">
        <Image
          src="/banner-1.webp"
          alt="Banner 1"
          width={480}
          height={480}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};
