import Image from "next/image";

function HeroBanner() {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col md:flex-row bg-background">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-primary text-4xl md:text-5xl font-bold mb-6">The King of Gems</h1>
        <p className="text-justify mb-4 text-muted-foreground">The July birthstone, Ruby, is the red variety of corundum, coloured by trace amounts of chromium. Its name derives from 'ruber', Latin for red. The most prized colour is a vivid, medium-dark toned red known as "pigeon's blood."</p>
        <p className="text-justify mb-4 text-muted-foreground">Rubies are one of the hardest gemstones, sharing a Mohs rating of 9 with sapphires.</p>
        <p className="text-justify text-muted-foreground">The rarity of high-quality rubies, especially over one carat, often makes them more valuable per carat than diamonds of comparable size.</p>
      </div>
      <div className="relative w-full h-[400px] md:h-auto md:w-1/2">
        <Image src={'/banner22.png'} alt="ruby gem" fill className="object-cover"/>
        <div className="absolute inset-0 "/>
      </div>
    </div>
  );
}

export default HeroBanner;