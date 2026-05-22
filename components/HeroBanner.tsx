"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function HeroBanner() {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col md:flex-row bg-background border-t-1 border-b-1 border-border shadow-2xs overflow-hidden">
      
      {/* LEFT COLUMN */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }} // Changed from animate
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16"
      >
        <h1 className="text-primary text-4xl md:text-5xl font-bold mb-6">The King of Gems</h1>
        <p className="text-justify mb-4 text-muted-foreground">
          The July birthstone, Ruby, is the red variety of corundum, coloured by trace amounts of chromium. Its name derives from 'ruber', Latin for red. The most prized colour is a vivid, medium-dark toned red known as "pigeon's blood."
        </p>
        <p className="text-justify mb-4 text-muted-foreground">
          Rubies are one of the hardest gemstones, sharing a Mohs rating of 9 with sapphires.
        </p>
        <p className="text-justify text-muted-foreground">
          The rarity of high-quality rubies, especially over one carat, often makes them more valuable per carat than diamonds of comparable size.
        </p>
      </motion.div>

      {/* RIGHT COLUMN */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }} // Changed from animate
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[400px] md:h-auto md:w-1/2"
      >
        {/* I kept priority here just in case, but if this is very far down the page, 
            you can remove `priority` so Next.js lazy-loads it. */}
        <Image src={'/banner22.png'} alt="ruby gem" fill className="object-cover" priority />
        <div className="absolute inset-0" />
      </motion.div>
      
    </div>
  );
}

export default HeroBanner;