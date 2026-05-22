import { Images } from "@/types";




export default function MasonryGrid({ images }: { images: Images[] }) {
  return (
    <div className="w-full max-w-360 my-20 mx-auto flex flex-col gap-5">
      <h1 className="text-center text-4xl font-medium">Gallery</h1>
      <div className="px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="aspect-square bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}