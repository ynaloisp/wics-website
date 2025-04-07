import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ImageProps {
    images: string[]; // Array of image URLs
}

const ImageCarouselContent: React.FC<ImageProps> = ({ images }) => {
    return (
        <Carousel className="w-full ">
            <CarouselContent>
                {images.map((imageUrl, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/4"
                    >
                        <div className="items-center justify-center flex">
                            <Image
                                width={500}
                                height={200}
                                src={imageUrl}
                                alt={`Image ${index + 1}`}
                                className="w-[13.5vw] h-[20vh] rounded-md object-cover"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
export default ImageCarouselContent;
