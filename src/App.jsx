import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Statistics from "./components/Statistics";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openDemo = () => {
    setSelectedPlan(null);
    setDemoOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setDemoOpen(true);
  };

  const closeDemo = () => {
    setDemoOpen(false);
  };

  return (
    <div className="nova-app">
      <Navbar onDemo={openDemo} />

      <main>
        <Hero onDemo={openDemo} />

        <TrustedBy />

        <Features />

        <Product />

        <HowItWorks />

        <Statistics />

        <Solutions />

        <Testimonials />

        <Pricing onSelectPlan={handleSelectPlan} />

        <FAQ />

        <CTA onDemo={openDemo} />
      </main>

      <Footer />

      <BackToTop />

      <DemoModal
        open={demoOpen}
        onClose={closeDemo}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}