'use client';
import React, { useState } from 'react'
import { createContext } from 'react'

const MyContext = createContext()





const ContextProvider = ({ children }) => {


  const [userRole, setUserRole]= useState("user")

  // current login user or admin data stored here
  const [userData, setUserData] = useState(null)

  // on admin side, the admin is present on which section is handled by here and its value is stored here
  const [currentAdminNav, setCurrentAdminNav] = useState("orders")

  // when user click the service then its data is stored here to used in order placement and others
  const [currentClickedServiceData, setCurrectClickedServiceData] = useState(null)

  // this store the services data 
  const [allServicesData, setAllServicesData] = useState(null)

  // this store the members data
  const [allMembersData, setAllMembersData] = useState(null)

  // this store the order data which is then render only on admin order side
  const [allOrderData, setAllOrdersData] = useState(null)

  // the order whic is only user related is store in it
  const [userRelatedOrders, setUserRelatedOrders]=useState(null)



 
 
  return ( 
    <MyContext.Provider
      value={{
        userRole, setUserRole,
        userData, setUserData,
        currentAdminNav, setCurrentAdminNav,
        currentClickedServiceData, setCurrectClickedServiceData,
        allServicesData, setAllServicesData,
        allMembersData, setAllMembersData,
        allOrderData, setAllOrdersData,
        userRelatedOrders, setUserRelatedOrders
      }}
    >

      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext }