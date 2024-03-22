"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselCards } from "./image";
import { Button } from "..";
import { useRouter } from "next/navigation";
import { DialogOpen } from "./dialog";

export function CarouselCard() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselCards.length - 1 : prevIndex - 1
    );
  };
  const images = carouselCards.map((card: any) => card.horizontalPoster);
  return (
    <div className="w-full pt-12 lg:max-w-5xl mx-auto">
      <Carousel className="relative">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {carouselCards.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <img
                  src={card.horizontalPoster}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] object-cover"
                />
                <div className="flex gap-3 absolute z-5 bottom-[20px] ml-5">
                  <DialogOpen card={card} />
                  <div>
                    <Button variant="secondary">Трейлер</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={prevSlide} disabled={false} />
        <CarouselNext onClick={nextSlide} />
      </Carousel>
      <div className="flex justify-center mt-4 ">
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
