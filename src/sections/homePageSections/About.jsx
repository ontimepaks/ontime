import React from 'react'
import 'remixicon/fonts/remixicon.css'

const About = () => {




  const keyPointArray = [
   "At On Time Advertising Agency, our concept revolves around delivering comprehensive advertising and marketing solutions tailored to your specific needs. With a focus on innovation, efficiency, and client satisfaction, we strive to exceed expectations in every project. Whether it's captivating print materials, dynamic digital campaigns, or innovative web solutions, we are dedicated to delivering excellence.",
   "At On Time Advertising Agency, our concept revolves around delivering comprehensive advertising and marketing solutions tailored to your specific needs. With a focus on innovation, efficiency, and client satisfaction, we strive to exceed expectations in every project. Whether it's captivating print materials, dynamic digital campaigns, or innovative web solutions, we are dedicated to delivering excellence."
  ]






  return (
    <div 
    id='about'
    className='h-max w-full p-10 mt-20'>





      <div>
        <h1
          className='h-max w-full font-extrabold text-zinc-900 text-4xl sm:text-5xl text-center md:text-start '
        >About Us
        </h1>
      </div>







      <p
        className='text-sm sm:text-lg font-semibold mt-5 text-center md:text-start'
      >On Time Advertising Agency has been a pioneer in the advertising industry for the past 25 years, with a global footprint spanning 16 years in Dubai, Tanzania, and China. Founded by Kashif Khan, who began his journey as a graphic designer and expanded his expertise to encompass web development, interior designing, AutoCAD, and Max SketchUp, our agency boasts a diverse portfolio of services. With a wealth of experience gained from working at renowned agencies like Insignia in Dubai, Kashif Khan now leads a dynamic team of six individuals, each a specialist in their respective fields. From digital and offset printing to digital marketing encompassing social media influencers and video production, as well as web development and hosting services, our agency delivers comprehensive solutions tailored to meet the unique needs of our clients. With a focus on quality, innovation, and client satisfaction, On Time Advertising Agency is your trusted partner for all your advertising and marketing needs.</p>






      <div className="mt-10">

        {
          keyPointArray.map((eachKeyPoint, index) => {
            return (
              <div
                key={index}
                className="h-max w-full flex gap-5 text-sm md:text-lg font-normal items-center mt-5 sm:mt-3 md:mt-0">
                <i className="ri-git-commit-fill   text-xl sm:text-2xl "></i>
                <p>{eachKeyPoint}</p>
              </div>
            )
          })
        }
      </div>





    </div>
  )
}

export default About