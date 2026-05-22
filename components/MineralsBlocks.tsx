"use client"; // Required for Framer Motion

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// 1. Define the parent grid animation (handles the staggered timing)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
    },
  },
};

// 3. Add ": Variants" here too
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 }, 
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } // TypeScript now knows this is valid!
  },
};

function Card({ info }: { info: { image: string, name: string, desc: string } }) {
  return (
    <div className="space-y-7">
      {/* I added rounded-md and overflow-hidden here to make the image corners look clean */}
      <div className="relative aspect-video rounded-md overflow-hidden">
        <Image src={info.image} alt={info.name} fill className="object-cover"/>
      </div>
      <h2 className="text-2xl leading-6 font-bold tracking-tighter text-center">{info.name}</h2>
      <p className="text-muted-foreground text-center ">{info.desc}</p>
    </div>
  )
}

function MineralsBlocks() {
  const data = [
    {
      image: '/minerals/IMG-20251128-WA0389.jpg.jpeg',
      name: 'Gold Ore',
      desc: 'Gold ore is often found near quartz veins, iron staining, and sulfide minerals like pyrite and arsenopyrite.'
    },
    {
      image: '/minerals/IMG-20260407-WA0759.jpg.jpeg',
      name: 'Tungsten Ore',
      desc: 'Tungsten ore deposits are predominantly magmatic or hydrothermal in origin and are associated with felsic igneous intrusions.'
    },
    {
      image: '/minerals/IMG-20260430-WA0176.jpg.jpeg',
      name: 'Copper Ore',
      desc: 'Copper ore is defined as a type of mineral deposit that contains economically valuable copper minerals.'
    },
  ]

  return (
    <div className="w-full max-w-360 mx-auto py-20 mb-20 space-y-7 px-5 xl:px-0">
      
      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl lg:text-5xl font-medium text-center mb-10"
      >
        Featured Minerals
      </motion.h1>
      
      {/* Animated Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is visible
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {data.map((info, i) => (
          // Wrap the Card component in a motion.div that uses the child variants
          <motion.div key={i} variants={cardVariants}>
            <Card info={info} />
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  );
}

export default MineralsBlocks;