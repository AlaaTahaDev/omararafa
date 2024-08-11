import React from 'react';

export const Youtube = () => {
  return (
    <div className="container mx-auto">
        <h2 className="section-title mb-8 mt-12 xl:mb-16 text-center mx-auto">
        اليوتيوب
        </h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="md:w-1/2 space-y-4">
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              title="YouTube Video 1"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/1SiEzYRn2J4?si=nrp2ocT33pR8pCND"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              title="YouTube Video 2"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/K6QnxSTR2qU?si=ugtYriJ7uD8O6BrP"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="relative overflow-hidden pb-[56.25%] h-0 md:w-1/2 mt-4 md:mt-0">
          <iframe
            title="YouTube Video 3"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Ck33wpfu1ks?si=BrQX3K2Kn2xn89Hz"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

