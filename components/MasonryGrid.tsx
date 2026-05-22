"use client"; // Required because Framer Motion uses React hooks

import { motion } from "framer-motion";
import { Images } from "@/types";

export default function MasonryGrid({ images }: { images: Images[] }) {
  return (
    <div className="w-full max-w-360 my-20 mx-auto flex flex-col gap-5">
      <h1 className="text-center text-4xl font-medium">Gallery</h1>
      <div className="px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            // 1. Start hidden and scaled down
            initial={{ opacity: 0, scale: 0.5 }}
            
            // 2. Animate to full size and opacity when it enters the viewport
            whileInView={{ opacity: 1, scale: 1 }}
            
            // 3. Only animate once, and trigger when 10% of the item is visible
            viewport={{ once: true, amount: 0.1 }}
            
            // 4. Use a spring transition for the "pop" effect
            // We use (index % 4) to stagger the delay row by row so they don't all pop at the exact same millisecond
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: (index % 4) * 0.1, 
            }}
            className="aspect-square bg-card rounded-lg border border-border overflow-hidden shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}