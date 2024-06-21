import React, { useState } from "react";
import { Navbar, Contributors, Footer } from "./components";
import {
  HeroSection,
  ContactUsSection,
  PrimaryFeatures,
  SecondaryFeatures,
  BatchSection,
  PricingSection,
  GallerySection,
} from "./sections";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <SecondaryFeatures />
        <PrimaryFeatures />
        <BatchSection />
        <PricingSection />
        <ContactUsSection />
        <Contributors />
      </main>
      <Footer />
    </div>
  );
}
