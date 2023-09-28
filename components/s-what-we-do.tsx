import Image from "next/image";

// ContentBrandClouds
export const ContentBrandClouds = [
  {
    label: "JQuery",
    media: "JQuery.svg",
  },
  {
    label: "MongoDB",
    media: "MongoDB.svg",
  },
  {
    label: "NPM",
    media: "NPM.svg",
  },
  {
    label: "Strapi",
    media: "Strapi.svg",
  },
];

export const SWhatWeDo = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col gap-4 text-center md:w-3/4">
          <h2 className="h2">
            Build brand advocacy at every step of the customer journey
          </h2>
          <p className="lead">
            Twilio is the industry-leading and trusted platform that efficiently
            powers your customer engagement innovation.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Accordion */}
          <div className="md:w-5/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur distinctio nostrum repellat dolorum, fugit porro
              expedita asperiores deleniti pariatur nemo quis id repudiandae
              quibusdam!
            </p>
          </div>

          {/* Image */}
          <div className="md:w-6/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur distinctio nostrum repellat dolorum, fugit porro
              expedita asperiores deleniti pariatur nemo quis id repudiandae
              quibusdam!
            </p>
          </div>
        </div>

        {/* LogoClouds */}
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="shrink-0 md:w-3/12">
            <p className="lead text-center font-medium md:text-start">
              Join the 290,000+ brands that use Twilio to connect with their
              customers
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 md:w-8/12 md:flex-nowrap md:justify-between md:gap-8">
            {ContentBrandClouds?.map((item, index) => (
              <li key={index} className="flex items-center justify-center p-4">
                <Image
                  src={`/${item.media}`}
                  alt={item.label}
                  width={100}
                  height={100}
                  className="h-8 w-auto md:h-10"
                />
              </li>
            ))}
          </ul>
        </div>

        <h2 className="h2 mt-16 text-center">
          Loved by 10+ million developers
        </h2>
      </div>
    </section>
  );
};
