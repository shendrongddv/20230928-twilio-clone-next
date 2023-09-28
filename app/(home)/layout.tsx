import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
