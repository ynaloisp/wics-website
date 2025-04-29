import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const images = [
    {
        id: 1,
        src: "/images/officers/Sarah-Levitan.jpg",
        alt: "Image 1",
        title: "Beautiful Landscape",
    },
    {
        id: 2,
        src: "/images/event/Behavioral-Interview-Prep.png",
        alt: "Image 2",
        title: "City Skyline",
    },
    {
        id: 3,
        src: "/images/event/BTT-Info-Session.png",
        alt: "Image 3",
        title: "Sunset Beach",
    },
    {
        id: 4,
        src: "/images/event/cookie-decorating-team.jpg",
        alt: "Image 4",
        title: "Mountain View",
    },
    {
        id: 5,
        src: "/images/event/cookie-decorating-team.jpg",
        alt: "Image 5",
        title: "Forest Trail",
    },
];
const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto space-y-4">
            {/* Main Carousel */}
            <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                {/* Main Image */}
                <div className="h-96 relative">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                                index === currentIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                            style={{
                                display:
                                    index === currentIndex ? "block" : "none",
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h3 className="text-xl font-bold">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="text-gray-800" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
                    aria-label="Next image"
                >
                    <ChevronRight className="text-gray-800" />
                </button>
            </div>

            {/* Mini Carousel */}
            <div className="flex items-center justify-center w-full space-x-2">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => handleThumbnailClick(index)}
                        className={`transition-all duration-200 rounded-md overflow-hidden ${
                            index === currentIndex
                                ? "ring-2 ring-blue-500 scale-110"
                                : "opacity-70 hover:opacity-100"
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-16 h-12 object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Control Bar */}
            <div className="flex items-center justify-center space-x-2">
                <button
                    onClick={toggleAutoPlay}
                    className={`px-4 py-2 rounded-md ${
                        isAutoPlaying
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                >
                    {isAutoPlaying ? "Pause" : "Auto Play"}
                </button>
            </div>
        </div>
    );
};
export default ImageCarousel;
