import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ChatbotWidget from "./components/ChatbotWidget";
import { ModalProvider } from "./contexts/ModalContext";

import MedSpa from "./pages/MedSpa";
import SpecialityClinics from "./pages/SpecialityClinics";
import HighEndRealEstate from "./pages/HighEndRealEstate";

// This is your default homepage layout
import Hero from "./components/Hero";
import WhySolryn from "./components/WhySolryn";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import ComingSoon from "./components/ComingSoon";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NicheSplit from "./components/NicheSplit";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";

function HomePage() {
  return (
    <>
      <Hero />
      <NicheSplit />
      <WhySolryn />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <ComingSoon />
      <About />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Use lowercase paths for clean URLs */}
          <Route path="/medspa" element={<MedSpa />} />
          <Route path="/speciality-clinics" element={<SpecialityClinics />} />
          <Route path="/real-estate" element={<HighEndRealEstate />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <ChatbotWidget />
      </div>
    </ModalProvider>
  );
}

export default App;
