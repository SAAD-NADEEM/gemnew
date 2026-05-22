"use client"

import { Gem } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";


function Card({ gems }: { gems: Gem }) {
  return (
    <motion.div
      // 1. Starts invisible and slightly pushed down
      initial={{ opacity: 0, y: 30 }}
      
      // 2. Animates to fully visible and original position when scrolled into view
      whileInView={{ opacity: 1, y: 0 }}
      
      // 3. Triggers once when 20% of the card is visible
      viewport={{ once: true, amount: 0.2 }}
      
      // 4. Smooth transition timing
      transition={{ duration: 0.6, ease: "easeOut" }}
      
      // Note: Added 'group' here so the image hover effect works
      className="relative group shadow-2xs rounded-md overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={gems.image}
          alt={gems.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
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