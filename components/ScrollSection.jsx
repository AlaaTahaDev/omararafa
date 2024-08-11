'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const data = [
  {
    image: "/video.svg",
    title: 'فيدوهات الشرح',
    subTitle: 'فيديوهات الشرح بسيطه وسهلة ومقسمه ',
  },
  {
    image: "/exam.svg",
    title: 'الامتحانات',
    subTitle: 'Residing in the deepest ocean trenches, the Abyssal Spirejaw has a translucent, spiral-shaped body, culminating in a jaw that resembles twisted spires, allowing it to snag and swallow unsuspecting prey.',
  },
  {
    image: "/review.svg",
    title: 'Abyssal Spirejaw',
    subTitle: 'Residing in the deepest ocean trenches, the Abyssal Spirejaw has a translucent, spiral-shaped body, culminating in a jaw that resembles twisted spires, allowing it to snag and swallow unsuspecting prey.',
  },
  {
    image: "/follow.svg",
    title: 'Abyssal Spirejaw',
    subTitle: 'Residing in the deepest ocean trenches, the Abyssal Spirejaw has a translucent, spiral-shaped body, culminating in a jaw that resembles twisted spires, allowing it to snag and swallow unsuspecting prey.',
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,   // Whether animation should happen only once - while scrolling down
    });

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner flex bg-red-100 dark:bg-transparent">
          {data.map((item, index) => (
            <div key={index} className="scroll-section container flex flex-col items-center justify-center p-8 text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                data-aos="fade-up" // Add the AOS animation type here
              />
              <h1 className="text-4xl font-bold mt-4">{item.title}</h1>
              <p className="mt-4 text-lg max-w-lg">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
