import { useEffect, useState } from "react";
import { VEHICLE_DATABASE, type VehicleYear } from "../data/specs";
import type { Achievement } from "../data/siteContent";
import { AchievementModal } from "../components/AchievementModal";
import { DecryptModal } from "../components/DecryptModal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { AboutKumaSection } from "../sections/AboutKumaSection";
import { AchievementsSection } from "../sections/AchievementsSection";
import { ContactSection } from "../sections/ContactSection";
import { GallerySection } from "../sections/GallerySection";
import { HeroSection, type CountdownTime } from "../sections/HeroSection";
import { InstagramFeedSection } from "../sections/InstagramFeedSection";
import { NewsSection } from "../sections/NewsSection";
import { SponsorshipSection } from "../sections/SponsorshipSection";
import { VehicleSpecsSection } from "../sections/VehicleSpecsSection";

export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState<VehicleYear>("2026");
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isDecryptOpen, setIsDecryptOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const selectedVehicle = VEHICLE_DATABASE[selectedYear] ?? VEHICLE_DATABASE["2026"];

  useEffect(() => {
    const targetDate = new Date("2027-08-27T00:00:00").getTime();
    const updateCountdown = () => {
      const difference = targetDate - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-racing-dark text-zinc-100 selection:bg-racing-blue selection:text-white font-sans">
      <SiteHeader onOpenDecrypt={() => setIsDecryptOpen(true)} />
      <DecryptModal isOpen={isDecryptOpen} onClose={() => setIsDecryptOpen(false)} />
      <main>
        <HeroSection timeLeft={timeLeft} onOpenDecrypt={() => setIsDecryptOpen(true)} />
        <AboutKumaSection />
        <VehicleSpecsSection selectedYear={selectedYear} setSelectedYear={setSelectedYear} selectedVehicle={selectedVehicle} />
        <AchievementsSection setSelectedAchievement={setSelectedAchievement} />
        <NewsSection />
        <GallerySection />
        <SponsorshipSection />
        <ContactSection />
        <InstagramFeedSection />
      </main>
      <SiteFooter />
      <AchievementModal achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} onSelectVehicle={setSelectedYear} />
    </div>
  );
}
