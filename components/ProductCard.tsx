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


function SmallCarousel({ images }: { images: string[] }) {
  return (
    <ScrollArea className="h-[300px]">
      {images.map((image, i) => (
        <div key={i} className="relative aspect-video flex-1 mb-3">
          <Image src={image} alt={image} fill className="object-cover" />
        </div>
      ))}
    </ScrollArea>
  )
}

function ProductCard({ gems }: { gems: Gem }) {

  const images = gems.images

  return (
    <Drawer>
      <DrawerTrigger >
        <div className="w-full h-full cursor-pointer">
          <Card gems={gems} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-w-[600px] md:mx-auto mx-2 bg-transparent backdrop-blur-lg border border-border border-b-0 shadow-2xs">
        <DrawerHeader>
          <DrawerTitle>Details</DrawerTitle>
          <DrawerDescription className="text-background">Contact our dealer</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className='w-full h-[70vh] [&_[data-radix-scroll-area-scrollbar]]:hidden'>
          <div className="w-full mx-auto flex flex-col p-5 pt-0">
            {/* <ProductSlider images={images} /> */}
            <div className="w-full max-w-[350px] aspect-square mx-auto">
              <Stack
                randomRotation={false}
                sensitivity={200}
                sendToBackOnClick={true}
                cards={images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`card-${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ))}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={false}
              />
            </div>
            <Separator className='my-3' />
            <div className="w-full flex flex-col justify-center">
              <p className="text-muted-foreground">{gems.category}</p>
              <h1 className="text-3xl leading-8 font-medium uppercase">{gems.name}</h1>
              <Button className="mt-5 mb-5 w-full h-10 ">Contact Us</Button>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;