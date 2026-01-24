import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import GlobalPresence from "../components/GlobalPresence";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950">
        <PageHero
          title="Get In Touch"
          breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        />
        <ContactForm />
        <GlobalPresence />
      </main>
      <Footer />
    </>
  );
}
