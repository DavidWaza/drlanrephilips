import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import AboutContent from "../components/AboutContent";
import BackgroundAndExpertise from "../components/BackgroundAndExpertise";
import KeyExpertise from "../components/KeyExpertise";
import ProfessionalHighlights from "../components/ProfessionalHighlights";
import NotableRecognition from "../components/NotableRecognition";
import Collaborations from "../components/Collaborations";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About Dr. Lanre Philips"
          breadcrumbs={[{ label: "About", href: "/about" }]}
        />
        <AboutContent />
        <BackgroundAndExpertise />
        <KeyExpertise />
        <ProfessionalHighlights />
        <NotableRecognition />
        <Collaborations />
      </main>
      <Footer />
    </>
  );
}
