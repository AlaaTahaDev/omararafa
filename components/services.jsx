'use client'
import { GanttChartSquare, House, Gem, Info, MapPinIcon, Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useRef } from "react";



const Services = () => {
   const serviceRefs = useRef([]);
 
   useEffect(() => {
     const handleScroll = () => {
       serviceRefs.current.forEach((ref) => {
         if (ref) {
           const rect = ref.getBoundingClientRect();
           const isInViewport =
             rect.top <= window.innerHeight && rect.bottom >= 0;
 
           if (isInViewport) {
             ref.classList.add("active");
           } else {
             ref.classList.remove("active");
           }
         }
       });
     };
 
     window.addEventListener("scroll", handleScroll);
     handleScroll(); // Trigger on mount
 
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
 
   const servicesData = [
     {
       icon: <Home size={72} strokeWidth={0.8} />,
       title: "اماكن تواجدنا",
       des: "",
     },
     {
       icon: <MapPinIcon size={72} strokeWidth={0.8} />,
       title: "موقعنا",
       des: "نحن متواجدين دائما في القاهرة وشبرا الخيمه",
     },
     {
       icon:<Info size={72} strokeWidth={0.8}/>,
       title: "تعريف",
       des: "مستر عمر عرفة خريج تربية جامعة الازهر في اللغه العربية للثانوية العامة",
     },
   ];
 
   return (
     <section className="mb-12 xl:mb-36">
       <div className="container mx-auto">
         <h2 className="section-title mb-12 mt-6 xl:mb-24 text-center mx-auto">
           احنا مين
         </h2>
         <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
           {servicesData.map((item, index) => (
             <Card
               className="slide-up w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
               key={index}
               ref={(el) => (serviceRefs.current[index] = el)}
             >
               <CardHeader className="text-primary absolute -top-[60px]">
                 <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                   {item.icon}
                 </div>
               </CardHeader>
               <CardContent className="text-center">
                 <CardTitle className="mb-4">{item.title}</CardTitle>
                 <CardDescription className="text-lg">
                   {item.des}
                 </CardDescription>
               </CardContent>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Services;

