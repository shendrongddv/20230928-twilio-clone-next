import { UseCaseTab } from "./tab/use-case-tab";

export const SUserStory = () => {
  return (
    <section className="bg-[#FDF7F4] bg-[url(/bg-2.svg)] bg-contain bg-top bg-no-repeat py-16">
      <div className="container flex flex-col items-center gap-12">
        {/* Title */}
        <div className="mx-auto flex flex-col text-clip text-center md:w-3/4">
          <span className="subtitle text-destructive">Customer stories</span>
          <h2 className="h2">Powered by Twilio</h2>
          <p className="lead mt-4">
            Explore what the world&apos;s leading businesses, from startups to
            global enterprises, have achieved with the Twilio Customer
            Engagement Platform.
          </p>
        </div>

        {/* Tabs */}
        <UseCaseTab />
      </div>
    </section>
  );
};
