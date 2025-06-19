import React, { useContext, useEffect, useRef, useState } from 'react'
import ServiceCard from '@/components/ServiceCard'
import { MyContext } from '@/context/context'







const Services = () => {


    const containerRef = useRef(null);
    let [servicesFilterVal, setServicesFilterVal] = useState("All")

    let {
        allServicesData
    } = useContext(MyContext)







    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
    
        const onWheel = (e) => {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        };
    
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
      }, []);

















    return (
        <div
            id='services'
            className='h-max w-full overflow-x-hidden py-10 px-10 mt-20 bg-zinc-50'>



            {/* heading container */}
            <div className="h-max w-full flex flex-col items-center justify-center md:items-start md:justify-between md:flex-row ">

                {/* heading */}
                <h1 className='h-max  text-4xl text-zinc-950 font-bold text-center flex gap-4 '>
                    <div className="flex items-center">
                        <div className="h-4 w-4 bg-red-500 rounded-full"></div>
                        <i className="ri-arrow-right-long-line     font-thin text-xl"></i>
                    </div>

                    <div className="">
                        <span className='text-red-600 mr-2'>Our</span>
                        Services
                    </div>
                </h1>



                {/* dropdonw to filter the catag wise products */}
                <div className="h-max w-max flex md:justify-end justify-between mt-5 ">
                    <select
                        onChange={(e) => { setServicesFilterVal(e.target.value) }}
                        className="w-56 border border-gray-300 rounded-lg pl-4 py-2 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="All">All</option>
                        <option value="graphicDesginAndBranding">Graphic Design & Branding</option>
                        <option value="webAndEcommerce">Web & Ecommerce</option>
                        <option value="3dModelingAndVisualization">3D Modeling & Visualization</option>
                        <option value="videoProductionAndAnimation">Video Production And Animation</option>
                        <option value="socialMediaManagementAndAds">Social Media Management & Ads</option>
                        <option value="printingAndPackaging">Printing And Packaging</option>
                        <option value="businessAutomation">Business Automation</option>
                        <option value="photographyAndVideoGraphy">Photography And Videography</option>
                        <option value="trandingAndCourses">Training And Courses</option>
                        <option value="artificialInteligenceServices">Artificial Intelligence Services</option>
                        <option value="consultingServices">Consulting Services</option>
                        <option value="accountingSoftwareIntegration">Accounting Software Integration</option>
                        <option value="instituteAndInternship">Institute & Internship</option>
                    </select>
                </div>
            </div>

            <div className="w-[70%] px-0 mt-2 text-center md:text-start mx-auto md:mx-0  text-lg text-zinc-500">
            Empowering Your Ambitions with Innovative Solutions and Unwavering Excellence
            </div>




            <div 
            ref={containerRef}
            className="h-max w-full flex justify-start  gap-2 px-10 mt-5 overflow-x-hidden py-10">
                {
                    allServicesData?.map((eachService, index) => {
                        if (servicesFilterVal == "All" || eachService?.catag == servicesFilterVal) {
                            return (
                                <div
                                    key={index}
                                    className="h-max w-max">
                                    <ServiceCard servicedata={eachService} />
                                </div>
                            )
                        }
                    })
                }
            </div>

        </div>
    )
}

export default Services