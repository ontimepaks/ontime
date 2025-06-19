'use client';

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { MyContext } from '@/context/context'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import blankUserImage from '../../public/blankUserImage.webp'
import { CldUploadWidget } from 'next-cloudinary';







const ServiceCard = ({ servicedata }) => {


  const [resource, setResource] = useState(null)
  const [serviceDataLocal, setServiceDataLocal] = useState(null)


  let route = useRouter()
  let {
    setCurrectClickedServiceData,
    setUserData,
    userRole,
    setAllServicesData
  } = useContext(MyContext)
















  useEffect(() => {
    // // console.log(memberDataLocal)
    // // console.log(resource)

    try {

      if (resource || serviceDataLocal) {
        async function updateServicesImg() {

          // console.log("From inside of the updateServiceImage: ", resource, serviceDataLocal)

          let response = await axios.post("/api/services/imageUpdate", { serviceId: servicedata?._id, imgUrl: resource?.secure_url })
          // console.log(response?.data)

          if (response?.data?.success == true) {
            // console.log("The image update is successfull")
            setAllServicesData(response?.data?.allServicesData)
          }

        }
        updateServicesImg()
      }

    } catch (error) {
      console.log(error)
    }

  }, [resource, serviceDataLocal])
















  async function handleOrderNowButtonClick(clickedServiceData) {
    try {

      const data = localStorage.getItem("ontimeUserData")
      let ontimeUserData = JSON.parse(data)
      if (ontimeUserData) {

        // console.log("ONtimeuserData: ", ontimeUserData)

        async function userAuth() {
          let response = await axios.post("/api/user/userAuth", { email: ontimeUserData?.email })
          // console.log(response?.data)


          if (response?.data?.success == true) {
            setUserData(ontimeUserData)
            setCurrectClickedServiceData(clickedServiceData)
            route.push("/orderPlacement")

          } else {

            alert("You are not logged In. Fist Login your self.")
            route.push("/login")

          }


        }
        userAuth()



      } else {

        alert("You are not logged In. Fist Login your self.")
        route.push("/login")

      }



    } catch (error) {
      console.log(error)
    }

  }



















  async function handleDeleteMemberBtnClick(serviceId) {
    try {

      let ask = confirm("Are you realy want to delete this service")

      if (ask) {
        let response = await axios.post("/api/services/deleteService", { serviceId: serviceId })

        if (response?.data) {
          setAllServicesData(response?.data?.allServices)
        }
      }



    } catch (error) {
      console.log(error)
    }
  }






















  return (
    <div className='h-max w-52 hover:scale-105 transition-all duration-700 p-2 py-2 rounded-xl border-2 border-zinc-200  text-center '>


      <div className="h-44  overflow-hidden flex justify-center items-center rounded-lg">
        <Image
          src={servicedata?.imgUrl ? servicedata?.imgUrl : blankUserImage}
          alt='service image'
          height={200}
          width={200}
          className='rounded-md hover:scale-110 hover:rotate-2 transition-all duration-800 m-auto'
        />
      </div>

      <h3 className='font-bold text-lg mt-5'>{servicedata.name}</h3>
      <p className='h-10 overflow-hidden font-normal text-[13px] mt-2 text-wrap'>{servicedata.desc}</p>


      {/* the button  */}
      <div className="h-max w-full mt-5 px-5">
        {
          userRole == "user" ?
            <button
              onClick={() => { handleOrderNowButtonClick(servicedata) }}
              className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-800 border-2 border-zinc-200 p-2 text-center rounded-full'>Order Now!</button>

            :
            <div className="flex gap-2">
              <button
                onClick={() => { handleDeleteMemberBtnClick(servicedata) }}
                className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-100 p-2 text-center rounded-full bg-red-600'>
                  <i className="ri-delete-bin-line"></i>
                  </button>

              <CldUploadWidget
                className='h-max w-full bg-red-200 p-10'
                uploadPreset="ml_default"
                onSuccess={(result, { widget }) => {
                  setResource(result?.info);  // { public_id, secure_url, etc }
                }}
                onQueuesEnd={(result, { widget }) => {
                  // setMemberDataLocal(null)
                  widget.close();
                }}
              >
                {({ open }) => {

                  function handleFileUploadClick(servicedataParam) {
                    setServiceDataLocal(servicedataParam)
                    setResource(null)
                    open()
                  }


                  return (
                    <button
                      className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-100 p-2 text-center rounded-full bg-blue-600'
                      onClick={() => { handleFileUploadClick(servicedata) }}>
                      <i className="ri-image-add-line  "></i>
                    </button>
                  );
                }}
              </CldUploadWidget>


            </div>
        }
      </div>

    </div>
  )
}

export default ServiceCard