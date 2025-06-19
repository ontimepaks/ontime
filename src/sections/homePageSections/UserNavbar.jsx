import { MyContext } from '@/context/context'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import logo from '../../../public/logo.png'


const UserNavbar = () => {

    const route = useRouter()
    let { userData, setUserData, setUserRole } = useContext(MyContext)
    let [screenWidth, setScreenWidth] = useState(null)
    let [smallScreenMenuIconVisibility, setSmallScreenMenuIconVisibility] = useState(false)
    let [smallScreenNavVisibility, setSmallScreenNavVisibility] = useState(false)
    let pathName = usePathname()
    const navArray = ["Home", "About", "Services", "Team", "Contact"]


    useEffect(() => {
        setUserRole("user")
        setScreenWidth(window.innerWidth)

    }, [])




    function handleLogoutIconClick() {
        try {

            signOut()

            setUserData(null)

            localStorage.removeItem("ontimeUserData")

            route.push("/")

        } catch (error) {
            console.log(error)
        }
    }






    function handleCartIconClick() {
        console.log("cart icon is clicked")
        route.push("/cart")
    }






    useEffect(() => {
        function handleReziseEvent() {
            // console.log(window.innerWidth)
            setScreenWidth(window.innerWidth)

            // if (window.innerWidth <= 650) {
            //     setSmallScreenNavIconVisibility(true)
            //     setSmallScreenNavVisibility(false)
            // }
        }

        window.addEventListener("resize", handleReziseEvent)

        return () => {
            window.removeEventListener("resize", handleReziseEvent)
        }
    }, [])

















    return (
        <div className='relative z-50'>
            <div className=' custom_low_blur_effect        h-20 md:h-24 w-full  overflow-hidden flex justify-between  md:justify-evenly  items-center z-50 fixed top-0 right-0'>








                {/* Logo of navbar */}
                <div className="h-full w-max text-[#a87b51] text-3xl font-bold flex gap-2 justify-center items-center ">
                    <Image
                        src={logo}
                        width={90}
                        height={90}
                        alt='logo'
                        className='h-14 object-cover'
                    />
                </div>







                {/* Navs which visible when screen is md or greater */}
                {
                    screenWidth >= 650 ?

                        <div className="h-full w-full flex gap-2 md:gap-10 text-zinc-200 justify-center items-center mt-0 text-sm md:text-md font-bold">

                            {
                                navArray.map((eachNav, index) => {
                                    return (
                                        <div
                                            onClick={() => { document.getElementById(eachNav.toLowerCase()).scrollIntoView({ behavior: 'smooth' }) }}
                                            key={index} className="h-max w-max hover:scale-105 transition-all duration-500 cursor-pointer hover:text-shadow-amber-200">
                                            {eachNav}
                                        </div>
                                    )
                                })
                            }

                        </div>


                        :

                        null
                }










                {/* The icons at the left side of the navbar */}
                <div className="h-full w-max flex justify-center items-center mr-10">
                    {/* to icon to direct to registration or login */}
                    {

                        pathName == "cart" ?


                            <i
                                onClick={() => { route.push("/") }}
                                className="ri-home-8-line    cursor-pointer text-md  md:text-2xl font-bold text-zinc-200"></i>


                            :



                            !userData
                                ?
                                <i
                                    onClick={() => { route.push("/registration") }}
                                    className="ri-user-add-line   cursor-pointer text-md  md:text-2xl font-bold text-zinc-200"></i>

                                :

                                <div className="h-max w-max flex gap-3">
                                    <i
                                        onClick={handleCartIconClick}
                                        className="ri-shopping-cart-line       cursor-pointer text-md  md:text-2xl font-bold text-zinc-200"></i>


                                    <i
                                        onClick={() => { handleLogoutIconClick() }}
                                        className="ri-logout-box-r-line    cursor-pointer text-md  sm:text-2xl font-bold text-zinc-200"></i>

                                </div>



                    }


                    {/* menu icon which show or hide accroding to screen width */}

                    {
                        screenWidth <= 650 ?

                            <i
                                onClick={() => { setSmallScreenNavVisibility(prev => !prev) }}
                                className={`ri-menu-line    cursor-pointer text-md ml-2  md:text-2xl font-bold text-zinc-200`}></i>
                            :

                            null
                    }

                </div>








            </div>













            {/* this is the small screen nav which only visible when the screen is small */}
            {
                window.innerWidth <= 650 && smallScreenNavVisibility ?
                    <div className="w-full mt-5 absolute top-20 backdrop-blur-md p-5">
                        {
                            navArray.map((eachNav, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="mb-2">

                                        <div
                                            onClick={() => { document.getElementById(eachNav.toLowerCase()).scrollIntoView({ behavior: 'smooth' }) }}
                                            className="h-max w-full text-center text-zinc-200 hover:scale-105 transition-all duration-500 cursor-pointer hover:text-shadow-amber-200">
                                            {eachNav}
                                        </div>

                                        {/* <hr></hr> */}

                                    </div>
                                )
                            })
                        }
                    </div>

                    :
                    null
            }





        </div>
    )
}

export default UserNavbar