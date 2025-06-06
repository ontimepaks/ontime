'use client'
import { MyContext } from '@/context/context'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const page = () => {


    const route= useRouter()

    let {
        currentClickedServiceData,
        userData,
        setAllOrdersData,
        setUserRelatedOrders
    } = useContext(MyContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNo: "",
    })












    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    // currentClickedServiceData








    async function handleSubmit(e) {
        e.preventDefault()
        try {

            // console.log("Service ID: ", currentClickedServiceData)


            if (currentClickedServiceData) {
                const formDataToSend = {
                    ...formData,
                    serviceId: currentClickedServiceData?._id,
                    userId: userData?._id
                }

                async function creatingOrder(){
                    let response= await axios.post("/api/order/createOrder", formDataToSend);
                    // console.log(response.data)
                    if(response?.data?.success==true){
                       setUserRelatedOrders(response?.data?.userRelatedOrders)
                       alert("Your order is placed and send to ontime institute. Soon they will contact you.")
                       route.push("/")
                    }
                }

                creatingOrder()


            }else{
                // console.log("Service data is not present")
            }


        } catch (error) {
            console.log(error)
        }
    }















    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">





            {/* Form contianer */}
            <div
                className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">



                {/* Heading */}
                <h2 className="text-2xl font-semibold text-center">Order Placement</h2>













                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">


                    {/* Email */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter you name.."
                            required
                        />
                    </div>




                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>





                    {/* Email */}
                    <div>
                        <label
                            htmlFor="phoneNo"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            name="phoneNo"
                            id="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="+92 3357845765"
                            required
                        />
                    </div>








                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                    >
                        Order Now
                    </button>
                </form>
















            </div>






        </div>
    )
}

export default page