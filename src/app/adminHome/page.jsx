'use client';
import { MyContext } from '@/context/context'
import AdminMember from '@/sections/AdminSections/AdminMember'
import AdminNavbar from '@/sections/AdminSections/AdminNavbar'
import AdminOrders from '@/sections/AdminSections/AdminOrders'
import AdminServices from '@/sections/AdminSections/AdminServices'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {


  let route= useRouter()

  let { currentAdminNav,
    setAllMembersData,
    setAllServicesData,
    setAllOrdersData
  } = useContext(MyContext)






  // this is for getting all services data from backend 
  useEffect(() => {
    try {

      async function getAllServicesData() {

        let response = await axios.get("/api/services/getAllServices")
        // console.log(response.data)

        if (response?.data?.success == true) {
          setAllServicesData(response?.data?.allServices)
        } else {
          // console.log("something wend worng in getting all services data")
        }

      }

      getAllServicesData()

    } catch (error) {
      console.log(error)
    }
  }, [])












  // this is for getting all member data from backend 
  useEffect(() => {
    // console.log("useffect of member is running")
    try {

      async function getAllMembersData() {

        let response = await axios.get("/api/member/getMembers")
        // console.log(response.data)

        if (response?.data?.success == true) {
          setAllMembersData(response?.data?.allMembers)
        } else {
          // console.log("something wend worng in getting all services data")
        }

      }

      getAllMembersData()

    } catch (error) {
      console.log(error)
    }
  }, [])











  // this is for getting all services data from backend 
  useEffect(() => {
    // console.log("useffect of member is running")
    try {

      async function getAllOrdersData() {

        let response = await axios.get("/api/order/getAllOrders")
        console.log(response.data)

        if (response?.data?.success == true) {
          setAllOrdersData(response?.data?.allOrdersArray)
        } 

      }

      getAllOrdersData()

    } catch (error) {
      console.log(error)
    }
  }, [])






















  return (
    <div >



      <AdminNavbar />


      {

        currentAdminNav == "orders" ? (<AdminOrders />) :

          currentAdminNav == "services" ? (<AdminServices />) :

            currentAdminNav == "members" ? (<AdminMember />) :

              <h1>Soemthing went wrong. Please refresh the page or contact with developer</h1>

      }







      <div
      onClick={()=>{route.push("/adminServiceOrMemberCreate");  console.log("icon is clicked")}}
      className="h-12 w-12  rounded-full fixed bottom-10 right-10 flex justify-center items-center">
      <i className="ri-add-circle-line    text-4xl font-extrabold text-green-700"></i>
      </div>






    </div>
  )
}

export default page