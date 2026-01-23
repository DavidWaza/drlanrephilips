import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import AboutContent from "../components/AboutContent";
import AchievementsRecognition from "../components/AchievementRecognition";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About Dr. Phillips"
          breadcrumbs={[{ label: "About", href: "/about" }]}
        />
        <AboutContent />
        {/* <AchievementsRecognition /> */}
      </main>
      <Footer />
    </>
  );
}
