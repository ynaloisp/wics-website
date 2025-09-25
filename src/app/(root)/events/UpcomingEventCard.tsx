import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingEventCard() {
  return (
    <Card className="space-y-3 border-none">
      <CardHeader className="p-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="https://th.bing.com/th/id/OIP.2N3yUqpMYG6VHxj1maGVpAHaEo?rs=1&pid=ImgDetMain"
            alt="External Image"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-hotpink font-medium text-sm">Workshop</p>
          <h2 className="text-xl">Web Development Fundamentals</h2>
        </div>
        <div className="flex flex-col gap-2 text-sm font-medium text-lightg">
          <div className="flex items-center gap-2">
            <Calendar strokeWidth={3} className="h-4 w-4 font-lg" />
            <span>March 15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock strokeWidth={3} className="h-4 w-4" />
            <span>2:00 PM - 4:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin strokeWidth={3} className="h-4 w-4" />
            <span>W605</span>
          </div>
        </div>
        <p className="text-sm font-medium text-lightg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="self-start w-full">Register Now</Button>
      </CardFooter>
    </Card>
  );
}
