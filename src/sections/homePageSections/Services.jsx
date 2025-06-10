import React, { useContext, useState } from 'react'
import ServiceCard from '@/components/ServiceCard'
import { MyContext } from '@/context/context'







const Services = () => {



    let [servicesFilterVal, setServicesFilterVal] = useState("All")

    let {
        allServicesData
    } = useContext(MyContext)















    return (
        <div
            id='services'
            className='h-max w-full overflow-x-hidden p-10 mt-20 bg-zinc-50'>


<div className="h-max w-full flex flex-col gap-5">

<h1 className='h-max flex-1 text-4xl text-zinc-950 font-bold text-center '> <span className='text-red-600'>Our</span> Services</h1>


<div className="h-max w-full flex md:justify-end justify-between ">
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




            <div className="h-max w-full flex justify-center  flex-wrap gap-5 mt-10">
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