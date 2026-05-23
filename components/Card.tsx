"use client"

import { Gem } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";


function Card({ gems }: { gems: Gem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group shadow-2xs rounded-md overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {gems.images && gems.images.length > 0 ? (
          <Image
            src={gems.images[0]}
            alt={gems.name}
            fill
            loading="eager"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
            No image
          </div>
        )}
        
        {/* Added z-10 and pointer-events-none so this overlay doesn't block the hover interaction */}
        <div className="absolute inset-0 bg-foreground/30 flex flex-col justify-end z-10 pointer-events-none">
          <div className="p-4">
            <h3 className="text-background text-2xl leading-6 font-medium tracking-tighter text-shadow-2xs">
              {gems.name}
            </h3>
            <p className="text-sm text-muted font-medium text-shadow-2xs">
              {gems.category}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;