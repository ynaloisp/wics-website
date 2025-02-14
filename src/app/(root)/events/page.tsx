import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
  return (
    <div className="bg-background-gradient mx-20 mt-20 mr-20 ml-20 space-y-8">
      <div className="relative mr-20 ml-20 mt-20">
        <div className="absolute inset-0 rotate-3 rounded-2xl bg-gradient-to-br from-[#FBCEEC] to-[#fef8f8]"></div>
        <div className="bg-white flex flex-col gap-5 rounded-2xl p-10 pb-[5%] -rotate-1">
          <h1 className="font-inter font-bold text-4xl">Upcoming Events</h1>
          <p className="font-inter text-lg">
            Join us for exciting workshops, talks, and networking opportunities!
          </p>
          <Button className="self-start w-fit">Submit an Event Idea</Button>
        </div>
      </div>

      <div className="font-inter font-bold p-10 text-2xl space-y-4">
        <h1>Upcoming Event</h1>
        <Card className="space-y-3">
          <CardHeader className="p-0">
            <Image
              src="https://th.bing.com/th/id/OIP.2N3yUqpMYG6VHxj1maGVpAHaEo?rs=1&pid=ImgDetMain"
              alt="External Image"
              unoptimized
              width={100}
              height={200}
              className="w-full h-[40vh] rounded-2xl"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-hotpink font-medium text-sm">Workshop</p>
              <h2 className="font-[inter]">Web Development Fundamentals</h2>
            </div>
            <div className="flex flex-col gap-2 text-sm text-500 text-lightg">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>2:00 PM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>W605</span>
              </div>
            </div>
            <p className="text-sm text-600 text-lightg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="self-start w-fit">Register Now</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="font-inter font-bold p-10 text-2xl space-y-4">
        Past Event Highlights
      </div>

      <div className="rounded-2xl p-10">Want to Host an Event?</div>
    </div>
  );
}
