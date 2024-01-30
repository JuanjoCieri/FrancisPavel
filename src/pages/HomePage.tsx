import Departaments from "@/sections/Departaments/Departaments";
import Home from "../sections/Home/Home";
import About from "@/sections/About/About";
import WhatWeDo from "@/sections/WhatWeDo/WhatWeDo";
import CTA from "@/sections/CTA/CTA";
import WhyUs from "@/sections/WhyUs/WhyUs";
import Footer from "@/sections/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Departaments />
      <WhatWeDo />
      <CTA />
      <WhyUs />
      <Footer />
    </>
  );
}
