'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import heroBgImg from '../../../public/laptop2.jpg'












const HeroSection = () => {
    const [translateX, setTranslateX] = useState(0) // in % of track-width



    const ImageUrl = [
        "https://res.cloudinary.com/dtygbyhnw/image/upload/v1749150333/WhatsApp_Image_2025-06-05_at_6.13.13_PM_pyxv2m.jpg",
        "https://res.cloudinary.com/dtygbyhnw/image/upload/v1749150327/WhatsApp_Image_2025-06-05_at_6.13.14_PM_uyglpe.jpg",
        "https://res.cloudinary.com/dtygbyhnw/image/upload/v1749150320/WhatsApp_Image_2025-06-05_at_6.13.15_PM_d7j7se.jpg",
        "https://res.cloudinary.com/dtygbyhnw/image/upload/v1749150312/WhatsApp_Image_2025-06-05_at_6.13.16_PM_vwkipa.jpg"

    ]








    const maxValue = ((ImageUrl.length) * 100) - 100

    function slideLeft() {
        if (translateX <= 0) {
            // console.log(translateX)
        } else {
            setTranslateX(prev => prev - 100)
        }
    }

    function slideRight() {
        if (translateX >= maxValue) {
            // wrap to first
            setTranslateX(0)
        } else {
            setTranslateX(prev => prev + 100)
        }
    }



    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTranslateX(prev => {
                if (prev >= maxValue) {
                    clearInterval(timeInterval);
                    return 0;
                }
                return prev + 100;
            });
        }, 6000);

        return () => clearInterval(timeInterval);
    }, []);



    // useEffect(() => {
    //     console.log(translateX)
    // }, [translateX])







    return (



        <div
        id='home'
        className="h-[100vh] w-screen overflow-x-hidden relative">


            {/* background image */}
            <div className="absolute h-full w-full top-0 right-0 backdrop-blur-sm ">
                <Image
                    src={heroBgImg}
                    alt='Image of hero section'
                    className='h-full w-full object-center '
                />
            </div>

            {/* Just for the blur on the image */}
            <div className="absolute h-full w-full top-0 right-0 backdrop-blur-sm z-10"></div>



            {/* real container of the image */}
            <div className="absolute text-center w-[70%] mt-32 top-1/3 right-1/2 -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl z-20 p-5  md:p-10 rounded-xl border-zinc-200 border-2  text-zinc-100  ">
                <h1 className='text-xl  sm:text-4xl font-extrabold mb-5'>Your Complete Digital & Print Partner</h1>
                <p className='text-sm sm:text-lg'>At Ontime Printers—based at Parasram Building, Pakistan Chowk, Karachi—we blend 25+ years of global experience with a one-stop suite of print, digital, and tech solutions. From high-end web and e‑commerce development to expert consulting and hands‑on training, plus full-scale digital and offset printing, we empower brands to stand out. Flexible, fast, and future‑focused.
                </p>
            </div>

        </div>





        // At Ontime Printers—based at Parasram Building, Pakistan Chowk, Karachi—we blend 25+ years of global experience with a one-stop suite of print, digital, and tech solutions. From high-end web and e‑commerce development to expert consulting and hands‑on training, plus full-scale digital and offset printing, we empower brands to stand out. Flexible, fast, and future‑focused.

    )
}

export default HeroSection
