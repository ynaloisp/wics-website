import { Button } from "@/components/ui/button";

export default function UpcomingEventsBanner() {
  return (
    <div className="relative group transition-transform duration-500 hover:rotate-0">
      <div className="absolute inset-0 rotate-3 rounded-2xl bg-bannerGradient transition-transform duration-300 group-hover:rotate-0"></div>
      <div className="bg-white flex flex-col gap-5 rounded-2xl p-10 pb-[5%] -rotate-1 transition-transform duration-300 group-hover:rotate-0">
        <h1 className="font-bold text-4xl">Upcoming Events</h1>
        <p className="text-lg">
          Join us for exciting workshops, talks, and networking opportunities!
        </p>
        <Button className="self-start w-fit">Submit an Event Idea</Button>
      </div>
    </div>
  );
}
