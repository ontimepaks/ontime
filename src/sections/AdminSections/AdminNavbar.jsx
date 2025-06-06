import { MyContext } from '@/context/context'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'


const AdminNavbar = () => {

    let route = useRouter()
    let { setCurrentAdminNav, setUserRole, setUserData } = useContext(MyContext)



    useEffect(() => {
        setUserRole("admin")
    }, [])












    function handleLogoutIconClick() {
        try {


            setUserData(null)

            localStorage.removeItem("ontimeUserData")

            route.push("/")

        } catch (error) {
            console.log(error)
        }
    }








    return (
        <div className='h-36 w-full relative overflow-hidden flex flex-col justify-center items-center bg-[#121212]'>




            <i
                onClick={() => { handleLogoutIconClick() }}
                className="ri-logout-box-r-line   absolute top-5 right-3  md:right-10 cursor-pointer text-lg md:text-2xl font-bold text-zinc-100"></i>




            <div className="h-14 w-max text-[#a87b51] text-3xl font-bold flex gap-5 items-center mt-4  ">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt='logo'
                    className='object-cover'
                />

            </div>


            <div className="h-max w-full flex gap-3 md:gap-10 text-zinc-200 justify-center mt-5 text-sm sm:text-xl font-bold">

                <div
                    onClick={() => { setCurrentAdminNav("orders") }}
                    className="px-4 py-2 text-zinc-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                    Orders
                </div>
                <div
                    onClick={() => { setCurrentAdminNav("services") }}
                    className="px-4 py-2 text-zinc-100 hover:scale-105 cursor-pointer">
                    Services
                </div>
                <div
                    onClick={() => { setCurrentAdminNav("members") }}
                    className="px-4 py-2 text-zinc-100 hover:scale-105 cursor-pointer">
                    Members
                </div>


            </div>



        </div>
    )
}

export default AdminNavbar