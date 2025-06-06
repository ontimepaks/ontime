'use client';
import OrderCard from '@/components/OrderCard'
import { MyContext } from '@/context/context'
import UserNavbar from '@/sections/homePageSections/UserNavbar';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const cart = () => {
    let route = useRouter()
    let { userData } = useContext(MyContext)
    let [orderData, setOrderData] = useState(null)

    useEffect(() => {
        try {

            if (!userData) {
                alert("Login again")
                route.push("/")
            } else {
                async function getSeletedUserData() {

                    let response = await axios.post("/api/order/selectedUserOrders", { userId: userData._id })

                    if (response?.data?.success == true) {
                        setOrderData(response?.data?.orderData)
                    } else {
                        alert("Soemthing went wrong")
                    }
                }

                getSeletedUserData()
            }


        } catch (error) {
            console.log(error)
        }
    }, [])















    return (
        <div className="h-full w-screen overflow-x-hidden">



            <UserNavbar />


            <div className='h-max w-screen overflow-x-hidden p-10 flex flex-wrap justify-center items-center gap-5'>


                <h3>If order is suddenly removed from your cart then it mean it what not accepted by owner</h3>


                {
                    orderData && orderData?.length >= 1 ?

                        orderData?.map((eachOrderData, index) => {
                            return (
                                <div key={index} className="h-max">
                                    <OrderCard orderdata={eachOrderData} />
                                </div>
                            )

                        })


                        :
                        <div className="h-20 w-full flex justify-center items-center text-2xl font-extrabold mt-20">
                            <h1>No order are found yet</h1>
                        </div>
                }



            </div>


        </div>
    )
}

export default cart