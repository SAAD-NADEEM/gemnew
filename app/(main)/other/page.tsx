import OtherListing from "@/components/OtherListing";

export const metadata = {
  title: "Other Collections | Jilani International",
  description: "Explore our diverse collections including premium rugs, bags, shoes, and more traditional textiles.",
  alternates: {
    canonical: "/other",
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