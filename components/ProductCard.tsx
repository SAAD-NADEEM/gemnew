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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollArea } from "./ui/scroll-area";
import ProductSlider from "./ProductSlider";
import { Separator } from "./ui/separator";

function Card({ gems }: { gems: Gem }) {
  return (
    <div className="relative shadow-2xs rounded-md overflow-hidden cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={gems.image}
          alt={gems.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/30 flex flex-col justify-end">
          <div className="p-4">
            <h3 className="text-background text-2xl leading-6 font-medium tracking-tighter text-shadow-2xs">{gems.name}</h3>
            <p className="text-sm text-muted font-medium text-shadow-2xs">{gems.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      <DrawerTrigger asChild>
        <Card gems={gems} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Details</DrawerTitle>
          <DrawerDescription>Contact our dealer</DrawerDescription>
        </DrawerHeader>
        <div className="w-fit h-screen mx-auto flex flex-col justify-center">
          <ProductSlider images={images} />
          <Separator className='mt-3' />
          <div className="w-full flex flex-col justify-center">
            <p className="text-muted-foreground">{gems.category}</p>
            <h1 className="text-3xl leading-8 font-medium uppercase">{gems.name}</h1>
            <Button className="mt-5 mb-10 w-full">Contact Us</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;