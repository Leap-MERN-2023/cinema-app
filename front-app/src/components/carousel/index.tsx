"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://via.placeholder.com/1200x400?text=Slide%201",
  "https://via.placeholder.com/1200x400?text=Slide%202",
  "https://via.placeholder.com/1200x400?text=Slide%203",
  "https://via.placeholder.com/1200x400?text=Slide%204",
  "https://via.placeholder.com/1200x400?text=Slide%205",
];

export function CarouselCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full pt-12 lg:max-w-5xl mx-auto">
      <Carousel className="relative">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={prevSlide} />
        <CarouselNext onClick={nextSlide} />
      </Carousel>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${
              index === activeIndex ? "bg-red-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
