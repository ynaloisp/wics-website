"use client";

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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import ImageCarouselContent from "./imagecarousel";
import { useRouter } from "next/navigation";
import { blogPosts } from "./test";
import { useSearchParams } from "next/navigation";

const imageList = [
    "/images/officers/Sarah-Levitan.jpg",
    "/images/event/Behavioral-Interview-Prep.png",
    "/images/event/BTT-Info-Session.png",
    "/images/event/cookie-decorating-team.jpg",
    "/images/event/cookie-decorating-team.jpg",
];

interface CardProps {}

const Events: React.FC<CardProps> = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    const idFromRouter = slug ? parseInt(slug, 10) : 0; // Convert slug to a number

    const id = slug ? parseInt(slug, 10) : idFromRouter; // Use idFromRouter as fallback

    return (
        <div className="font-inter ml-[10%] mr-[10%] mt-[5%] mb-[13%] space-y-16">
            <div className="font-bold space-y-6">
                <h1 className="text-4xl">{blogPosts[id].title}</h1>
                <div className="flex flex-row gap-2 text-sm font-medium text-lightg">
                    <div className="flex items-center gap-2">
                        <Calendar strokeWidth={3} className="h-4 w-4 font-lg" />
                        <span>{blogPosts[id].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock strokeWidth={3} className="h-4 w-4" />
                        <span>{blogPosts[id].time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin strokeWidth={3} className="h-4 w-4" />
                        <span>{blogPosts[id].location}</span>
                    </div>
                </div>
                <Tabs defaultValue="highlights" className="w-full">
                    <TabsList className="bg-[#fdf2f8] text-grey">
                        <TabsTrigger value="highlights">Highlights</TabsTrigger>
                        <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    </TabsList>
                    <TabsContent value="highlights" className="space-y-4">
                        <Card className="space-y-3 border border-gray-300  items-center justify-center">
                            <CardContent className="space-y-4">
                                <div className="flex flex-row gap-4 w-[100%] h-[90vh] items-center justify-center padding-10">
                                    <div className="flex flex-col items-left gap-4 w-[45%]">
                                        <h2 className="text-2xl">
                                            Event Highlights
                                        </h2>
                                        <p className=" font-medium text-sm">
                                            {blogPosts[id].content}
                                        </p>
                                        <h2 className="text-xl">
                                            Key Takeaways
                                        </h2>
                                        <ul className="list-disc pl-5 space-y-2 font-medium text-sm">
                                            <li>
                                                Networking opportunities with
                                                industry professionals
                                            </li>
                                            <li>
                                                Insights into the latest
                                                technology trends
                                            </li>
                                            <li>
                                                Hands-on workshops and
                                                interactive sessions
                                            </li>
                                        </ul>
                                        <h2 className="text-xl">Speakers</h2>
                                        <ul className="list-disc pl-5 space-y-2 font-medium text-sm">
                                            {blogPosts[id].speakers.map(
                                                (speaker, index) => (
                                                    <li key={index}>
                                                        {speaker}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col items-right gap-4 w-[40%] h-[90%] justify-center">
                                        <Image
                                            src={blogPosts[id].coverImage}
                                            alt="External Image"
                                            unoptimized
                                            width={100}
                                            height={200}
                                            className="w-[90%] h-[100%] rounded-xl margin-0"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent
                        value="gallery"
                        className="space-y-4 items-center justify-center"
                    >
                        <Card className="space-y-3 border border-gray-300">
                            <CardContent className="space-y-4">
                                <div className="flex flex-col items-center gap-4 w-[100%] justify-center padding-10">
                                    <div className="flex flex-col items-center justify-center gap-4 ">
                                        <div className="flex flex-col  items-right justify-center padding-10 h-[65vh] top-10">
                                            <h2 className="text-2xl left-0 ">
                                                Event Gallery
                                            </h2>
                                            <Image
                                                src="https://th.bing.com/th/id/OIP.2N3yUqpMYG6VHxj1maGVpAHaEo?rs=1&pid=ImgDetMain"
                                                alt="External Image"
                                                unoptimized
                                                width={1000}
                                                height={200}
                                                className="w-[68vw] h-[55vh] rounded-xl items-center justify-center"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-4 w-[88%] h-[20%] justify-center">
                                            <ImageCarouselContent
                                                images={imageList}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Events;
