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
      <main>
        <h2 className="h2">HomePageLayout</h2>
        {children}
      </main>
      <Footer />
    </>
  );
}
