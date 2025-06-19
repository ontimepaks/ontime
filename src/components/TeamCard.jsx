'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import blankUserImage from '../../public/blankUserImage.webp'
import { MyContext } from '@/context/context'
import { CldUploadWidget } from 'next-cloudinary';
import axios from 'axios'



const   TeamCard = ({ teamdata }) => {

  const [resource, setResource] = useState(null);
  const [memberDataLocal, setMemberDataLocal] = useState(null)
  let {
    userRole, setAllMembersData
  } = useContext(MyContext)




  useEffect(() => {
    // // console.log(memberDataLocal)
    // // console.log(resource)

    try {

      if (resource || memberDataLocal) {
        async function updatedMemberImage() {

          // console.log("From inside of the updateMemberImage: ", resource, memberDataLocal)

          let response = await axios.post("/api/member/imageUpdate", { memberId: teamdata?._id, imgUrl: resource?.secure_url })
          // console.log(response?.data)

          if (response?.data?.success == true) {
            // console.log("The image update is successfull")
            setAllMembersData(response?.data?.allMembersData)
          }

        }
        updatedMemberImage()
      }

    } catch (error) {
      console.log(error)
    }

  }, [resource, memberDataLocal])








  function handleContactButtonClick() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }








  async function handleDeleteMemberBtnClick(teamMemberDataId) {
    try {

      let ask = confirm("Are you realy want to delete the member")

      if (ask) {
        let response = await axios.post("/api/member/deleteMember", { memberId: teamMemberDataId })

        if (response?.data) {
          setAllMembersData(response?.data?.allMembers)
        }
      }



    } catch (error) {
      console.log(error)
    }
  }


























  return (
    <div className='h-max w-max hover:scale-105 transition-all duration-700 p-2 rounded-xl border-2 border-zinc-100 shadow-sm shadow-zinc-600 text-center '>


      <div className="h-48   overflow-hidden flex items-center justify-center rounded-lg">
        <Image
          src={teamdata?.imgUrl ? teamdata?.imgUrl : blankUserImage}
          alt='team member image'
          height={200}
          width={200}
          className=' rounded-md hover:scale-110 hover:rotate-2 transition-all duration-800 object-contain m-auto'
        />
      </div>

      <h3 className='font-bold text-xl mt-5'>{teamdata.name}</h3>
      <p className=' h-max w-52 font-normal text-[14px] text-wrap mt-2'>{teamdata.desc} </p>



      {
        userRole == "user" ?
          <button
            onClick={() => { handleContactButtonClick() }}
            className='h-max w-full mt-10 hover:scale-105 transition-all duration-500 text-zinc-900 border-2 border-zinc-300 p-2 text-center rounded-full'>Contact Now!</button>

          :
          <div className="flex gap-2 mt-5">
            <button
              onClick={() => { handleDeleteMemberBtnClick(teamdata._id) }}
              className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-100 p-2 text-center rounded-full bg-red-600'><i className="ri-delete-bin-line"></i></button>





            <CldUploadWidget
              className='h-max w-full bg-red-200 p-10'
              uploadPreset="ml_default"
              onSuccess={(result, { widget }) => {
                setResource(result?.info);  // { public_id, secure_url, etc }
              }}
              onQueuesEnd={(result, { widget }) => {
                // setMemberDataLocal(null)
                widget.close();
              }}
            >
              {({ open }) => {

                function handleFileUploadClick(teamDataParam) {
                  setMemberDataLocal(teamDataParam)
                  setResource(null)
                  open()
                }


                return (
                  <button
                    className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-100 p-2 text-center rounded-full bg-blue-600'
                    onClick={() => { handleFileUploadClick(teamdata) }}>
                    <i className="ri-image-add-line  "></i>
                  </button>
                );
              }}
            </CldUploadWidget>



          </div>
      }

    </div>
  )
}

export default TeamCard