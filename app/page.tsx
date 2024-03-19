import Image from "next/image";
import { HeroParallaxDemo } from "./ui/hero";
import { NavbarDemo } from "./ui/nav";
import { TextGenerateEffectDemo } from "./ui/text";


export default function Home() {
  return (
 
      <div className="h-max-screen">
        <NavbarDemo />
        <HeroParallaxDemo />
        <TextGenerateEffectDemo />
      </div>
   
  );
}
