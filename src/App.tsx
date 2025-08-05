import Header from './components/Header';
import Hero from './components/Hero';
import WhySolryn from './components/WhySolryn';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import ComingSoon from './components/ComingSoon';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import NicheSplit from './components/NicheSplit';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-black">
        <Header />
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
        <ChatbotWidget />
      </div>
    </ModalProvider>
  );
}

export default App;

