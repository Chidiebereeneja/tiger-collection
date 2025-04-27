import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from './Button';

const TextDisplay = function() {
    return (
        <div className="absolute top-[20%] left-[15%] flex flex-col gap-3 ">
            <h5 className="text-[32px] text-primaryCol-100 font-normal leading-[37.77px] tracking-[0.16px] ">T-shirt / Tops</h5>
            <h1 className="text-[68px] text-primaryCol-100 leading-[83.62px] font-normal tracking-[0.31px] w-[60%] ">Summer Value Pack</h1>
            <h4 className="text-[32px] text-primaryCol-100 font-normal leading-[37.77px] tracking-[0.16px] ">cool / colorful / comfy</h4>
            <Button contentStr={"Shop Now"}style={"bg-primaryCol-100 h-[44px] w-[268px] rounded-[8px] mt-3 "} />
        </div>
    )
}

export default function LandingPage() {
  return (
    <section className="w-full h-screen relative">
        <div className="w-full h-screen overflow-hidden">
            <Splide
                aria-label="landing page slide"
                options={{
                type: 'loop',          // infinite loop
                autoplay: true,        // autoplay enabled
                interval: 60000,        // 3 seconds interval
                speed: 1000,           // 1 second transition
                pauseOnHover: false,   // don't pause on hover
                resetProgress: false,  // keep progress bar consistent
                width: '100%',         // full width
                height: '100vh',       // full viewport height
                arrows: true,         // hide navigation arrows (optional)
                pagination: true,     // hide dots (optional)
                }}
                className="h-full"
            >
                <SplideSlide>
                <img
                    src="src/assets/images/background_carousel.png"
                    alt="background-1"
                    className="object-cover object-center w-full h-screen"
                />
                </SplideSlide>
                <SplideSlide>
                <img
                    src="src/assets/images/limeelight_2.jpeg"
                    alt="background-2"
                    className="object-cover object-center w-full h-screen"
                />
                </SplideSlide>
            </Splide>
        </div>
        
        <TextDisplay/>

    </section>
  );
}
