import Image from "next/image";
import { HeroParallaxDemo } from "./ui/hero";

import Footer from "./ui/footer";
import Navbar from "./ui/nav";
import Breaker from "./ui/breaker";
import Services from "./ui/services";


export default function Home() {
  return (
 
      <div className="h-max-screen">
        <Navbar />
        <HeroParallaxDemo />
        <Breaker />
        <Services />
        <Footer />
      </div>
   
  );
}
