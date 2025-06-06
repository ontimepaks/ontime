import OrderCard from '@/components/OrderCard'
import { MyContext } from '@/context/context'
import React, { useContext, useState } from 'react'

const AdminOrders = () => {


  let {
    allOrderData
  } = useContext(MyContext)

  let [filterVal, setFilterVal] = useState("pending")


  return (
    <div className='h-max w-screen overflow-x-hidden p-10 flex flex-wrap justify-center items-center gap-5'>

      <div className="h-max w-full flex justify-end">
        <select onChange={(e) => { setFilterVal(e.target.value) }}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {
        allOrderData && allOrderData?.length >= 1 ?

          allOrderData?.map((eachOrderData, index) => {
            if (eachOrderData.orderStatus == filterVal) {
              return (
                <div key={index} className="h-max">
                  <OrderCard orderdata={eachOrderData} />
                </div>
              )
            } else {
              return null;
            }
          })


          :
          <div className="h-20 w-full flex justify-center items-center text-2xl font-extrabold mt-20">
            <h1>No order are found yet</h1>
          </div>
      }



    </div>
  )
}

export default AdminOrders