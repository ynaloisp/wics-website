import { Button } from "@/components/ui/button";

export default function HostEventCard() {
  return (
    <div className="bg-cardGradient rounded-2xl p-10 border border-1">
      <div className="flex flex-col gap-4 items-center text-center space-y-4">
        <h1 className="font-bold text-2xl">Want to Host an Event?</h1>
        <p className="font-medium text-grey">
          Have an idea for a workshop, tech talk, or any other event? We’d
          love to hear from you!
        </p>
        <a href="mailto:hunterwics@gmail.com">
          <Button>Contact Us</Button>
        </a>
      </div>
    </div>
  );
}
