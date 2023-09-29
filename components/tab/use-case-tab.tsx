import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DummyCaseStudy } from "@/config/dummy";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

export const UseCaseTab = () => {
  return (
    <Tabs defaultValue={DummyCaseStudy[0].id} className="w-full">
      <ScrollArea className="overflow-hidden rounded-full">
        <TabsList className="h-max p-1">
          {DummyCaseStudy?.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className:
                    "rounded-full border-none bg-transparent text-xs md:text-sm",
                }),
              )}
            >
              {item.field}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      {DummyCaseStudy?.map((item) => (
        <TabsContent
          key={item.id}
          value={item.id}
          className="mx-auto md:w-10/12"
        >
          <div className="flex flex-col items-stretch gap-4 overflow-hidden rounded-xl shadow-lg md:flex-row md:justify-between">
            {/* Col */}
            <div className="hidden flex-col items-center justify-center bg-slate-100 p-4 text-center md:flex md:w-2/5 md:p-8">
              <p className="text-base italic md:text-lg">
                &quot;{item.people.word}&quot;
              </p>

              <h3 className="mt-6 text-sm font-bold text-destructive md:text-base">
                {item.people.name}
              </h3>
              <span className="text-xs italic text-muted-foreground md:text-sm">
                {item.people.position}, {item.business.name}
              </span>
            </div>

            {/* Col */}
            <div className="flex flex-col items-start justify-center gap-4 p-4 md:w-3/5 md:p-8">
              <Image
                src={`/${item.business.media}`}
                alt={item.business.name}
                width={100}
                height={50}
                className="h-6 w-auto md:h-8"
              />
              <h3 className="h3">{item.plan.title}</h3>
              <p className="text-base md:text-lg">{item.plan.desc}</p>

              <button>Read the story</button>

              <ul className="grid w-full max-md:divide-y md:grid-cols-3 md:divide-x">
                {item.plan.stats?.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start py-4 text-center md:items-center md:px-4"
                  >
                    <span className="h3 text-destructive">{item.title}</span>
                    <p className="text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
