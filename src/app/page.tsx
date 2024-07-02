"use client"
import React from "react";
import CountdownTimer from "@/app/components/CountdownTimer";
import Slideshow from "@/app/components/SliderImage";

export default function Home() {
  const beachTripDate = '2024-07-19T00:00:00'; // Set your beach trip date here

    const mobileImages = [
       '/beach_1.jpeg',
        '/beach_2.jpeg',
        '/beach_3.jpeg',
        '/beach_4.jpeg',
    ];

    const desktopImages = [
        '/gwt_main.jpg',
        '/ta_hr.png',
        '/pos_gold.png',
        '/fms.png'
    ];

  return (
      <main className="relative h-screen">
          <Slideshow mobileImages={mobileImages} desktopImages={desktopImages}/>
              <div className={`bg-transparent-grey absolute bottom-0 md:left-1/2 transform md:-translate-x-1/2 md:w-full lg:w-2/4 p-4 rounded-md`}>
                  <CountdownTimer targetDate={beachTripDate}/>
              </div>
      </main>
  );
}
