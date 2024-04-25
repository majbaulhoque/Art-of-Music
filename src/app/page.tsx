import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection></HeroSection>
      <FeatureCourses></FeatureCourses>
      <WhyChooseUs></WhyChooseUs>
      <MusicSchoolTestimonial></MusicSchoolTestimonial>
      <UpcomingWebinars></UpcomingWebinars>
    </main>
  );
}
