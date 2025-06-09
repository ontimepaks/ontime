'use client'
import React, { useContext, useEffect } from 'react'
import HeroSection from '@/sections/homePageSections/HeroSection'
import UserNavbar from '@/sections/homePageSections/UserNavbar'
import About from '@/sections/homePageSections/About'
import Services from '@/sections/homePageSections/Services'
import Team from '@/sections/homePageSections/Team'
import Contact from '@/sections/homePageSections/Contact'
import Footer from '@/sections/homePageSections/Footer'
import TermsAndPolicies from '@/sections/homePageSections/TermsAndPolicies'
import axios from 'axios'
import { trusted } from 'mongoose'
import { MyContext } from '@/context/context'






const Home = () => {



  let {
    setUserData,
    setAllServicesData,
    setAllMembersData
  } = useContext(MyContext)



  // just to check that is user is already registered on my app or not with localstorage
  useEffect(() => {
    try {

      const data = localStorage.getItem("ontimeUserData")
      let ontimeUserData = JSON.parse(data)
      if (ontimeUserData) {

        console.log("ONtimeuserData: ", ontimeUserData)

        async function userAuth() {
          let response = await axios.post("/api/user/userAuth", { email: ontimeUserData?.email })
          // console.log(response?.data)
          if (response?.data?.success == true) {
            setUserData(ontimeUserData)
          }
        }
        userAuth()
      } else {
        // console.log("User is not authenticated")
      }

    } catch (error) {
      console.log(error)
    }
  }, [])







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









  return (
    <div className='min-h-screen w-screen overflow-x-hidden bg-zinc-200 '>


      <UserNavbar />



      <HeroSection />




      <About />



      <Services />



      <Team />



      <Contact />


      <Footer />


      <TermsAndPolicies />




    </div>
  )
}

export default Home