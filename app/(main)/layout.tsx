import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewHeader from "@/components/NewHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <NewHeader />
      {children}
      <Footer />
    </>
  );
}