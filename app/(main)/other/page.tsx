import OtherListing from "@/components/OtherListing";

export const metadata = {
  title: "Other Collections | Jilani International",
  description: "Explore our diverse collections including premium rugs, bags, shoes, and more traditional textiles.",
  alternates: {
    canonical: "/other",
  },
  openGraph: {
    title: "Other Collections | Jilani International",
    description: "Explore premium rugs, bags, shoes, and traditional Pakistani textiles from Jilani International.",
    url: "https://www.jilanigemsandminerals.com/other",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Other Collections — Jilani International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Collections | Jilani International",
    description: "Explore premium rugs, bags, shoes, and traditional Pakistani textiles.",
    images: ["/opengraph.png"],
  },
};

function page() {
  return (
    <main className='h-full w-full'>
      <OtherListing />
    </main>
  );
}

export default page;