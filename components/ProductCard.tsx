"use client"

import { Gem } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import Stack from "./Stack";
import Card from "./Card";
import { useState } from "react";
import { ImageIcon, Play } from "lucide-react";
import Link from "next/link";



function ProductCard({ gems }: { gems: Gem }) {

  const [showVideo, setShowVideo] = useState(false);
  const images = gems.images || []
  console.log('video url', gems.video)

  return (
    <Drawer>
      <DrawerTrigger >
        <div className="w-full h-full cursor-pointer">
          <Card gems={gems} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-w-[600px] md:mx-auto mx-2 bg-background/20 backdrop-blur-lg border border-border border-b-0 shadow-2xs">
        <DrawerHeader>
          <DrawerTitle>Details</DrawerTitle>
          <DrawerDescription className="text-background">Contact our dealer</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className='w-full h-[70vh] [&_[data-radix-scroll-area-scrollbar]]:hidden'>
          <div className="w-full mx-auto flex flex-col p-5 pt-0">
            {gems.video && (
              <Button
                variant="outline"
                className="w-full max-w-[350px] mx-auto mb-4 bg-background/50 backdrop-blur-sm"
                onClick={() => setShowVideo(!showVideo)}
              >
                {showVideo ? (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    View Images
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video
                  </>
                )}
              </Button>
            )}
            {/* <ProductSlider images={images} /> */}
            <div className="w-full max-w-[350px] aspect-square mx-auto">
              {showVideo && gems.video ? (
                <video
                  src={gems.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover rounded-md"
                />
              ) :
                <Stack
                  randomRotation={false}
                  sensitivity={200}
                  sendToBackOnClick={true}
                  cards={images.length > 0 ? images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`card-${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )) : [
                    <div key="no-image" className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground rounded-xl border border-border">
                      No images
                    </div>
                  ]}
                  autoplay={false}
                  autoplayDelay={3000}
                  pauseOnHover={false}
                />
              }
            </div>
            <Separator className='my-3' />
            <div className="w-full flex flex-col justify-center">
              <p className="text-muted-foreground">{gems.category}</p>
              <h1 className="text-3xl leading-8 font-medium uppercase">{gems.name}</h1>
              <Button className="mt-5 mb-5 w-full h-10 ">
                <Link
                  href="https://wa.me/923219299828"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;