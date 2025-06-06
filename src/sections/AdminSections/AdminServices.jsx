import ServiceCard from '@/components/ServiceCard'
import { MyContext } from '@/context/context'
import axios from 'axios'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

const AdminServices = () => {


  let { allServicesData, setAllServicesData } = useContext(MyContext)




  // console.log("AdminService is rendered")


  return (
    <div className='h-max w-full overflow-x-hidden p-10  flex flex-row flex-wrap gap-5 justify-center'>



        {
          allServicesData?.map((eachServiceData, index) => {
            return (
              <div 
              key={index}
              className="h-max w-max">

                <ServiceCard servicedata={eachServiceData} />

              </div>
            )
          })
        }




    </div>
  )
}

export default AdminServices