import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DummyAccordionAlpha } from "@/config/dummy";
import Image from "next/image";

export const WhatWeCanDoAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-4"
      defaultValue={DummyAccordionAlpha[0].id}
    >
      {DummyAccordionAlpha?.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="rounded-lg border px-4"
        >
          <AccordionTrigger className="hover:no-underline">
            <h3 className="h3">{item.title}</h3>
          </AccordionTrigger>
          <AccordionContent>
            {/* ##### */}
            <p>{item.desc}</p>

            {item.results?.map((item) => (
              <div
                key={item.id}
                className="mt-4 flex items-center gap-4 rounded-lg bg-slate-100 p-4"
              >
                <div className="h-8 w-8 shrink-0 rounded-full">
                  <Image
                    src={`/${item.media}`}
                    alt={item.label}
                    width={36}
                    height={36}
                    className="h-8 w-8 text-destructive"
                  />
                </div>
                <div>
                  <h4 className="h4">{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="mt-4 flex items-center justify-between gap-2">
              <h4 className="h4 shrink-0">Featured product</h4>
              <span className="h-[1px] flex-1 bg-slate-100"></span>
            </div>

            {item.features?.map((item) => (
              <div
                key={item.id}
                className="mt-4 flex items-center gap-4 rounded-lg p-4 hover:bg-slate-100"
              >
                <div className="h-8 w-8 shrink-0 rounded-full">
                  <Image
                    src={`/${item.media}`}
                    alt={item.label}
                    width={36}
                    height={36}
                    className="h-8 w-8 text-destructive"
                  />
                </div>
                <div>
                  <h4 className="h4">{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

            <p className="pt-4 text-xs italic text-muted-foreground">
              <b>*Source:</b> {item.note}
            </p>

            {/* ##### */}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
