import About from "./components/About";
import Collaborations from "./components/Collaborations";
import Hero from "./components/Hero";
import KeyAchievement from "./components/KeyAchievement";
import KeyAreas from "./components/Keyareas";
import KeyExpertise from "./components/KeyExpertise";
import Testimonial from "./components/Testimonial";
import VideoBlock from "./components/VideoBlock";

export default function Home() {
  const youtubeId = process.env.YOUTUBE_VIDEO_ID;

  return (
    <main>
      <Hero />
      <About />
      <KeyExpertise />
      <VideoBlock youtubeId={`${youtubeId}`} />
      <KeyAreas />
      <KeyAchievement />
      <Collaborations />
      <Testimonial />
    </main>
  );
}
