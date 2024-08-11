import { Banner } from "@/components/Banner";
import Exploer from "@/components/Exploer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import ScrollSection from "@/components/ScrollSection";
import { Youtube } from "@/components/Youtube";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
        <>
        
         <Hero/>
         <Services/>
         <Youtube/>
         <ScrollSection/>
         <Exploer/>
         <Reviews/>
        </>
      
  );
}
