'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Download, Send } from "lucide-react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Social from './socials';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import DevImg from './DevImage';

const logos = [
    "/coffe/hero1.png",
    "/coffe/coffee-mid.png",
];

export const Banner = () => {
    return (
        <div className='py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className='container mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 15000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index} className='cursor-pointer'>
                            <div className='container md:pt-20 md:pb-10'>
                                <div className='flex justify-between gap-x-6'>
                                    {/*1part*/}
                                    <div className='hidden xl:flex relative'>
                                        <DevImg
                                            containerStyle='w-[510px] h-[462px] relative' imgSrc={logo}
                                        />
                                    </div>
                                    {/*2part*/}
                                    <div dir="rtl" className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-right">
                                  
                                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                                            مدرس اول فزياء
                                        </div>

                                        <h1 className="h1 mb-4">مستر محمود حجاج مدرس اول فزياء للثانوية العامة</h1>
                                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                                            مستر محمود حجاج مدرس اول فزياء للثانوية العامة
                                        </p>
                                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                                            <Link href="/contact">
                                                <Button className="gap-x-2">
                                                    Contact Me
                                                    <Send size={18} />
                                                </Button>
                                            </Link>
                                            <Link href="https://www.mediafire.com/file/okjzop08zocf2s8/alaataha.apk/file">
                                                <Button variant="secondary" className="gap-x-2">
                                                    Download
                                                    <Download size={18} />
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
