import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const imageLinks = [
    "/images/officers/Sarah-Levitan.jpg",
    "/images/event/Behavioral-Interview-Prep.png",
    "/images/event/BTT-Info-Session.png",
    "/images/event/cookie-decorating-team.jpg",
    "/images/event/cookie-decorating-team.jpg",
];
export function PrimaryCarousel() {
    return (
        <div>
            <Carousel className="w-[65vw]">
                <CarouselContent>
                    {imageLinks.map((link, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="w-[65vw] h-[55vh] rounded-2xl border-none shadow-md transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={link}
                                        alt={`Carousel image ${index + 1}`}
                                        className="w-full object-cover"
                                        width={1000}
                                        height={300}
                                    />
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
