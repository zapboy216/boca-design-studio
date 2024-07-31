import Landing from '@components/Landing';
import Portfolio from '@components/Portfolio';
import CallToAction from '@components/CallToAction';
import FutureSoftwareRelease from '@components/FutureSoftwareRelease';
import AboutUs from '@components/AboutUs';
import VideoPresentation from '@components/VideoPresentation';
import ContactSection from '@components/ContactSection';

export default function HomePage() {
  return (
    <div>
      <Landing />
      <Portfolio />
      <CallToAction />
      <FutureSoftwareRelease />
      <AboutUs />
      <VideoPresentation />
      <ContactSection />
    </div>
  );
}
