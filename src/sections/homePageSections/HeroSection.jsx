'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'













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



    useEffect(() => {
        console.log(translateX)
    }, [translateX])







    return (
        <div
            id='home'
            className="h-max w-full relative mt-5  sm:h-max  overflow-hidden">



            <div className="">



                {/* Controls (optional) */}
                <button
                    onClick={slideLeft}
                    className="absolute left-2 top-1/2 z-10 px-2 text-zinc-100 text-4xl font-extrabold py-1 rounded"
                >
                    <i className="ri-arrow-left-s-line"></i>
                </button>
                <button
                    onClick={slideRight}
                    className="absolute right-2 top-1/2 z-10 text-zinc-100 text-4xl font-extrabold px-2 py-1 rounded"
                >
                    <i className="ri-arrow-right-s-line"></i>
                </button>






                {/* Track (width = 2 slides = 200vw) */}
                <div
                    className="w-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${translateX}%)` }}
                >


                    {
                        ImageUrl.map((eachImageUrl, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" w-full relative  flex-shrink-0">
                                    <Image
                                        src={eachImageUrl}
                                        alt="Hero image 2"
                                        // layout="fill"
                                        height={700}
                                        width={2000}
                                        // objectFit="cover"
                                        className='object-cover '
                                    />
                                </div>
                            )
                        })
                    }



                </div>

                

            </div>




        </div>
    )
}

export default HeroSection
