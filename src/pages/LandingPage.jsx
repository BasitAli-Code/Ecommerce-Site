import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features";
import ProductSection from "../components/ProductSection";
import { ProductImages, ArrivalImages } from "../data/ProductsData.js";
import CallToAction from "../components/CallToAction";
import ActionBanner from "../components/ActionBanner.jsx";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductSection
        isTitlePresent={true}
        titleFirst="Featured"
        titleSecond="Products"
        images={ProductImages}
      />
      <CallToAction />
      <ProductSection
        isTitlePresent={true}
        titleFirst="New"
        titleSecond="Arrivals"
        images={ArrivalImages}
      />
      <ActionBanner />
    </>
  );
};

export default LandingPage;
