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
import Autoplay from "embla-carousel-autoplay";

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
    <div className="w-full mt-[20px]  sm:mt-[40px] md:mt-[60px] lg:max-w-5xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="relative "
      >
        <div className="flex justify-center items-center">
          <button
            onClick={prevSlide}
            disabled={false}
            className="text-white text-[24px] md:text-[36px] size-6 rounded-xl z-10 mr-[-40px]"
          >
            ❮
          </button>
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
                    className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[440px] xl:h-[520px] object-cover scroll-smooth snap-center shadow-2xl"
                  />
                  <div className="flex gap-3 absolute z-5 bottom-[20px] ml-5">
                    <DialogOpen card={card} />
                    <div>
                      <button className="w-20 h-6 text-[12px] md:w-24 md:h-9 rounded font-medium md:text-[14px] bg-white">
                        Трейлер
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <button
            onClick={nextSlide}
            className="text-white text-[24px] md:text-[36px] size-6 rounded-xl z-10 ml-[-40px]"
          >
            ❯
          </button>
        </div>
      </Carousel>
      <div className="flex justify-center mt-3 ">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`size-2 mx-1 cursor-pointer rounded-full ${
              index === activeIndex ? "bg-red-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
