import { MyContext } from '@/context/context'
import axios from 'axios'
import React, { useContext } from 'react'
import Image from 'next/image'









const OrderCard = ({ orderdata }) => {


  let {
    setAllOrdersData
  } = useContext(MyContext)



  async function handleCompletedBtnClick(orderDataParam) {
    try {

      console.log("complete clicked")
      let response = await axios.post("/api/order/statusChange", { changedTo: "completed", orderId: orderDataParam?._id })
      console.log(response.data)

      if (response?.data?.status == true) {
        setAllOrdersData(response?.data?.allOrders)
      }

    } catch (error) {
      console.log(error)
    }
  }









  async function handleDeleteBtnClick(orderDataParam) {
    try {

      console.log("delete is clicked")
      console.log(orderDataParam)

      let response = await axios.post("/api/order/statusChange", { changedTo: "cancel", orderId: orderDataParam?._id })

      console.log(response.data)
      if (response?.data?.status == true) {
        setAllOrdersData(response?.data?.allOrders)
      }

    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div className=" h-max w-max border-2 border-zinc-500 shadow-md shadow-zinc-600 bg-white rounded-xl p-6 mb-4 ">
      {/* Order Info */}

      <div className="h-48 w-full  overflow-hidden flex justify-center items-center">
        <Image
          src={orderdata?.serviceImg? orderdata?.serviceImg:null}
          height={200}
          width={200}
          alt='ordered service img'
          className='object-cover '
        />
      </div>

      <h2 className=" text-indigo-600  text-2xl mb-2 mt-2 font-extrabold ">{orderdata?.serviceName}</h2>
      <p className="text-gray-800 text-sm"><span className="font-semibold">Name:</span> {orderdata?.username}</p>
      <p className="text-gray-800 text-sm"><span className="font-semibold">Phone:</span> {orderdata?.phoneNo}</p>
      <p className="text-gray-800 text-sm"><span className="font-semibold">Email:</span> {orderdata?.email}</p>
      <p className="text-gray-800 text-sm"><span className="font-semibold">Price:</span> {orderdata?.price} PKR</p>



      {
        orderdata?.cart !== true ?
          <div className="w-full flex gap-2">
            <button
              onClick={() => { handleDeleteBtnClick(orderdata) }}
              className="flex-1 mt-4 px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition flex justify-center items-center">
              <i className="ri-delete-bin-line    text-lg"></i>
            </button>
            {
              orderdata?.orderStatus == "pending" ?
                <button
                  onClick={() => { handleCompletedBtnClick(orderdata) }}
                  className=" flex-1 mt-4 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition flex justify-center items-center">
                  <i className="ri-checkbox-circle-line   text-xl"></i>
                </button>
                :
                null
            }
          </div>

          :


          null
      }



    </div>
  )
}

export default OrderCard