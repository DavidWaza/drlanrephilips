import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Events & Gallery"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
