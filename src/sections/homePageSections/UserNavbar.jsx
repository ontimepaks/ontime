import { MyContext } from '@/context/context'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import logo from '../../../public/logo.png'


const UserNavbar = () => {

    const route = useRouter()
    let { userData, setUserData, setUserRole } = useContext(MyContext)
    let pathName = usePathname()


    useEffect(() => {
        setUserRole("user")
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




    console.log(pathName)







    return (
        <div className='h-32 w-full relative overflow-hidden flex flex-col justify-center items-center bg-[#121212]'>



            {/* to icon to direct to registration or login */}
            {

                pathName == "cart" ?


                    <i
                        onClick={() => { route.push("/") }}
                        className="ri-home-8-line   absolute top-5 right-5 md:right-10 cursor-pointer text-md  md:text-2xl font-bold text-zinc-200"></i>


                    :



                    !userData
                        ?
                        <i
                            onClick={() => { route.push("/registration") }}
                            className="ri-user-add-line   absolute top-5 right-5 md:right-10 cursor-pointer text-md  md:text-2xl font-bold text-zinc-200"></i>

                        :

                        <div className="h-max w-max flex gap-3 md:gap-5 absolute top-5 right-3 md:right-10">
                            <i
                                onClick={handleCartIconClick}
                                className="ri-shopping-cart-line       cursor-pointer text-md  md:text-2xl font-bold text-zinc-200"></i>


                            <i
                                onClick={() => { handleLogoutIconClick() }}
                                className="ri-logout-box-r-line    cursor-pointer text-md  sm:text-2xl font-bold text-zinc-200"></i>

                        </div>



            }







            {/* Heading of navbar */}
            <div className="h-14 w-max text-[#a87b51] text-3xl font-bold flex gap-2 justify-center items-center ">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt='logo'
                    className='object-cover'
                />

                {/* <h1>  Ontime Agency</h1> */}
            </div>


            <div className="h-max w-full flex gap-5 md:gap-10 text-zinc-200 justify-center mt-5 text-sm sm:text-lg md:text-xl font-bold">

                {
                    ["Home", "About", "Services", "Team", "Contact"].map((eachNav, index) => {
                        return (
                            <div
                                onClick={() => { document.getElementById(eachNav.toLowerCase()).scrollIntoView({ behavior: 'smooth' }) }}
                                key={index} className="hover:scale-105 transition-all duration-500 cursor-pointer hover:text-shadow-amber-200">
                                {eachNav}
                            </div>
                        )
                    })
                }

            </div>



        </div>
    )
}

export default UserNavbar