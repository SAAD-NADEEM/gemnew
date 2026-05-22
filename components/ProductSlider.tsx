"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

function ProductSlider({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();


  function handleClick(index: number) {
    if (!api) {
      return;
    }


    console.log("index is: ", index);
    api.scrollTo(index);
  }

  return (
    <div className="flex flex-col justify-between w-full max-h-[440px] gap-3 overflow-hidden">
      <div className="md:max-h-[340px]">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            dragFree: false,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {images?.map((image, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="h-[320px] border-1 border-main-primary overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={image}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-main-secondary border-none text-main-background" />
          <CarouselNext className="bg-main-secondary border-none text-main-background" />
        </Carousel>
      </div>

      <Carousel className="w-full" opts={{
        align: "start"
      }}>
        <CarouselContent className="-ml-3">
          {images.map((img, i) => (
            <CarouselItem key={i} className="pl-3 basis-1/4">
              <button onClick={() => handleClick(i)} className="w-full">
                <Image
                  src={img}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-md border aspect-square border-main-primary w-full object-cover"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div >
  );
}

export default ProductSlider;
