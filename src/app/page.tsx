import Header from '@/components/Header';
import Footer from '@/components/Footer';

import IntroSection from '@/sections/IntroSection';
import ReasonSection from '@/sections/ReasonSection';
import FeatureSection from '@/sections/FeatureSection';
import DownloadSection from '@/sections/DownloadSection';

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <main className="pt-16">
        <IntroSection />
        <ReasonSection />
        <FeatureSection />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
}