import { MyContext } from '@/context/context'
import React, { useContext, useEffect } from 'react'
import TeamCard from '@/components/TeamCard'
import axios from 'axios'






const AdminMember = () => {


  let {allMembersData, setAllMembersData}= useContext(MyContext)




// console.log("Adminmember is rendered")



  return (
    <div className='h-max w-full overflow-x-hidden p-10  flex flex-row flex-wrap gap-5 justify-center'>



{
      allMembersData?.map((eachMemberData, index) => {
        return (
          <div 
          key={index}
          className="h-max w-max">

            <TeamCard teamdata={eachMemberData} />

          </div>
        )
      })
    }




</div>
  )
}

export default AdminMember