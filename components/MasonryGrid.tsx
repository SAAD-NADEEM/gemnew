const images = [
  { id: 1,  src: "https://picsum.photos/seed/a1/400/600", alt: "Photo 1" },
  { id: 2,  src: "https://picsum.photos/seed/b2/400/300", alt: "Photo 2" },
  { id: 3,  src: "https://picsum.photos/seed/c3/400/500", alt: "Photo 3" },
  { id: 4,  src: "https://picsum.photos/seed/d4/400/700", alt: "Photo 4" },
  { id: 5,  src: "https://picsum.photos/seed/e5/400/400", alt: "Photo 5" },
  { id: 6,  src: "https://picsum.photos/seed/f6/400/550", alt: "Photo 6" },
  { id: 7,  src: "https://picsum.photos/seed/g7/400/350", alt: "Photo 7" },
  { id: 8,  src: "https://picsum.photos/seed/h8/400/650", alt: "Photo 8" },
  { id: 9,  src: "https://picsum.photos/seed/i9/400/450", alt: "Photo 9" },
  { id: 10, src: "https://picsum.photos/seed/j10/400/500", alt: "Photo 10" },
  { id: 11, src: "https://picsum.photos/seed/k11/400/300", alt: "Photo 11" },
  { id: 12, src: "https://picsum.photos/seed/l12/400/600", alt: "Photo 12" },
];
 
export default function MasonryGrid() {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((img, index) => (
        <div key={index} className="break-inside-avoid">
          <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}