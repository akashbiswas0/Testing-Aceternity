import Image from "next/image";
import { HeroParallaxDemo } from "./ui/hero";
import { TextGenerateEffectDemo } from "./ui/text";
import Footer from "./ui/footer";
import Navbar from "./ui/nav";
import Breaker from "./ui/breaker";


export default function Home() {
  return (
 
      <div className="h-max-screen">
        <Navbar />
        <HeroParallaxDemo />
        <TextGenerateEffectDemo />
        <Breaker />
        <Footer />
      </div>
   
  );
}
