'use client'
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useRef } from "react";

const Exploer = () => {
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
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "البلاغه",
      des: "كورسات نحو مستمره مع امثله وحل قطع كبيره مع امتحانات مستمره لتقييم الطالب والحصول علي الدرجات النهائيه",
    },
    {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: "محاضرات النحو",
      des: "كورسات نحو مستمره مع امثله وحل قطع كبيره مع امتحانات مستمره لتقييم الطالب والحصول علي الدرجات النهائيه",
    },
    {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: "المناهج",
      des: "شرح المناهج بطريقه سلسه وبسيطه مه امتحانات مستمره ومتابعه مع ولي الامر",
    },
  ];

  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 mt-6 xl:mb-24 text-center mx-auto">
          محتوانا
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative hover:cursor-pointer"
              style={{
                transform: "perspective(1000px)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) scale(1)";
              }}
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <CardHeader className="text-primary flex justify-center items-center">
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

export default Exploer;
