import Image from 'next/image'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import slideImg from '../../../public/laptopBg.jpg'

const About = () => {




  const keyPointArray = [
    "Our lean, six‑person team of specialists delivers end‑to‑end solutions: digital and offset printing, social media and video marketing, web development and hosting, plus consulting and hands‑on training.",
    "Driven by innovation, efficiency, and client satisfaction, we craft high‑impact print materials, dynamic digital campaigns, and bespoke web platforms tailored to your objectives."
  ]






  return (
    <div
      id='about'
      className='h-max w-full p-10 mt-20 bg-zinc-50 flex flex-col lg:flex-row items-center '>






      {/* the about images container */}
      <div className="w-full lg:w-1/2 h-max p-5 md:p-10">
        <Image
          src={slideImg}
          height={500}
          width={500}
          alt='About image'
          className='object-fill h-full w-full rounded-lg'
        />
      </div>








      {/* the abot content container */}
      <div className="w-full lg:w-1/2 px-5 md:px-10 mt-10 lg:mt-0 text-center lg:text-start flex lg:block flex-col items-center justify-center">


        <div>
          <h1
            className='h-max w-full text-4xl font-bold text-zinc-950 flex gap-5'
          >
            <div className="flex items-center">
              <div className="h-4 w-4 bg-red-500 rounded-full"></div>
              <i className="ri-arrow-right-long-line     font-thin text-xl"></i>
            </div>

        <div className="">
        About
        <span className='text-red-600'> Us</span>
        </div>
          </h1>
        </div>







        <p
          className='text-[16px] font-normal mt-5    text-zinc-900'
        >On Time Advertising Agency has led the industry for 25 years, with a 16‑year global presence in Dubai, Tanzania, and China. Founded by Kashif Khan—who began at Insignia Dubai as a graphic designer and mastered web development, interior design, AutoCAD, and SketchUp—we combine creative vision with technical expertise.</p>






        <div className="mt-10">

          {
            keyPointArray.map((eachKeyPoint, index) => {
              return (
                <div
                  key={index}
                  className="h-max w-full flex gap-5 text-sm md:text-lg font-normal items-center mt-5 sm:mt-3 md:mt-0">
                  <i className="ri-git-commit-fill   text-xl sm:text-2xl "></i>
                  <p className=' text-[15px] text-zinc-700'>{eachKeyPoint}</p>
                </div>
              )
            })
          }
        </div>




      </div>

    </div>
  )
}

export default About