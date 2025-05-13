"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { blogPosts } from "./test";
import { useParams } from "next/navigation";

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
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log("Slug:", slug);
  const post = blogPosts.find((post) => post.slug === slug);

  const id = post ? blogPosts.indexOf(post) : 1;

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

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
            <Card className="space-y-3 border border-gray-300">
              <CardContent className="space-y-4 pt-4">
                <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center p-4">
                  {/* Content section */}
                  <div className="flex flex-col items-left gap-4 w-full md:w-[55%] order-1 md:order-1">
                    <h2 className="text-2xl">Event Highlights</h2>
                    <p className="font-medium text-sm">
                      {blogPosts[id].content}
                    </p>
                    <h2 className="text-xl">Key Takeaways</h2>
                    <ul className="list-disc pl-5 space-y-2 font-medium text-sm">
                      <li>
                        Networking opportunities with industry professionals
                      </li>
                      <li>Insights into the latest technology trends</li>
                      <li>Hands-on workshops and interactive sessions</li>
                    </ul>
                    <h2 className="text-xl">Speakers</h2>
                    <ul className="list-disc pl-5 space-y-2 font-medium text-sm">
                      {blogPosts[id].speakers.map((speaker, index) => (
                        <li key={index}>{speaker}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Image section */}
                  <div className="flex flex-col items-center w-full md:w-[40%] order-2 md:order-2">
                    <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-[0px_0px_10px_#db277760]">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={blogPosts[id].coverImage}
                          alt="Event Image"
                          fill
                          unoptimized
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
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
              <CardContent className="space-y-4 py-8 container mx-auto">
                <h2 className="text-2xl text-center mb-4">Event Gallery</h2>
                <div className="flex flex-col items-center gap-4 w-full justify-center">
                  {/* Main Image Carousel */}
                  <div className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-[0px_0px_10px_#db277760]">
                      <Image
                        src={imageList[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        fill
                        unoptimized
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button
                        onClick={goToPreviousImage}
                        className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6 text-[#db2777]" />
                      </button>
                      <button
                        onClick={goToNextImage}
                        className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6 text-[#db2777]" />
                      </button>
                    </div>
                  </div>

                  {/* Dot indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {imageList.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          currentImageIndex === index
                            ? "bg-[#db2777]"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 mt-4 w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-[16/9] cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                          currentImageIndex === index
                            ? "border-[#db2777]"
                            : "border-transparent hover:border-[#db277780]"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
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
