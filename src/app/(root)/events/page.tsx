import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
  return (
    <div className="mx-20 mt-20 space-y-8">
      <div className="relative mr-20 ml-20 mt-20 ">
        <div className="absolute inset-0 rotate-3 rounded-2xl bg-gradient-to-br from-[#FBCEEC] to-white"></div>
        <div className="bg-white flex flex-col gap-5 rounded-2xl p-10 pb-[5%] -rotate-1">
          <h1 className="font-inter font-bold text-4xl">Upcoming Events</h1>
          <p className="font-inter text-lg">
            Join us for exciting workshops, talks, and networking opportunities!
          </p>
          <Button className="self-start w-fit">Submit an Event Idea</Button>
        </div>
      </div>

      <div className="bg-white font-inter font-bold rounded-2xl p-10 text-2xl">
        <h1>Upcoming Event</h1>
      </div>

      <div className="bg-white rounded-2xl p-10">Past Event Highlights</div>

      <div className="bg-white rounded-2xl p-10">Want to Host an Event?</div>
    </div>
  );
}
