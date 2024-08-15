import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiTiktokFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImage";
import Social from "./socials";
import ParticlesContainer from "./ParticelsContainers";

const Hero = () => {
  return (
    <section className="relative py-12 xl:py-24 h-[84vh] xl:pt-28 overflow-hidden">
      {/*  rm -rf .git */}
     
      <ParticlesContainer />
      <div className="container mx-auto relative z-10">
    
        <div className='flex justify-between gap-x-6'>
          {/* 1st Part with Animation */}
          <div className="animate-once hidden xl:flex relative">
       

            <DevImg
              containerStyle='bg-ovallogo1 w-[510px] h-[462px] bg-no-repeat bg-contain relative bg-bottom' imgSrc='/omararafa.png'
            />
          </div>

          {/* 2nd Part with Animation */}
          <div
            dir="rtl"
            className="animate-image-once flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-right"
          >
            <div className="text-xl uppercase font-semibold mb-4 text-primary tracking-[4px]">
            مدرس لغة عربية</div>

            <h1 className="h1 mb-4">
            مستر عمر عرفة
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            مستر عمر عرفة في اللغه العربية للثانوية العامة في القاهرة 
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="https://www.youtube.com/@omararafa-arabic">
                <Button className="gap-x-2">
                  اليوتيوب
                  <RiYoutubeFill size={18} />
                </Button>
              </Link>
              <Link href="https://www.tiktok.com/@omararafa95">
                <Button variant="secondary" className="gap-x-2">
                  التيك توك
                  <RiTiktokFill size={18} />
                </Button>
              </Link>
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute left-2/4 bottom-10 xl:bottom-12 animate-bounce z-10">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
