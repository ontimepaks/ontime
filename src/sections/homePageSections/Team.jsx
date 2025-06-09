import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import { MyContext } from '@/context/context'
import React, { useContext } from 'react'

const Team = () => {



    let {
        allMembersData
    }= useContext(MyContext)



    const teamData = [
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyHHO3puXrrOt5cMV3kk6udeYWTzSMPjn8Q&s",
            name: "Next.js Course",
            desc: "This next.js course which elevates your next.js development skills"

        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyHHO3puXrrOt5cMV3kk6udeYWTzSMPjn8Q&s",
            name: "Next.js Course",
            desc: "This next.js course which elevates your next.js development skills"

        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyHHO3puXrrOt5cMV3kk6udeYWTzSMPjn8Q&s",
            name: "Next.js Course",
            desc: "This next.js course which elevates your next.js development skills"

        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyHHO3puXrrOt5cMV3kk6udeYWTzSMPjn8Q&s",
            name: "Next.js Course",
            desc: "This next.js course which elevates your next.js development skills"

        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyHHO3puXrrOt5cMV3kk6udeYWTzSMPjn8Q&s",
            name: "Next.js Course",
            desc: "This next.js course which elevates your next.js development skills"

        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyHHO3puXrrOt5cMV3kk6udeYWTzSMPjn8Q&s",
            name: "Next.js Course",
            desc: "This next.js course which elevates your next.js development skills"

        },

    ]




    











  return (
    <div
    id='team'
    className='h-max w-full overflow-x-hidden p-10 mt-20 bg-zinc-50'>

    <div className="h-max w-full">
        <h1 className='h-max w-full text-4xl text-zinc-800 font-bold text-center'><span className='text-red-600'>Our </span>Team</h1>
    </div>




            <div className="h-max w-full flex justify-center flex-wrap gap-5 mt-10">
                {
                    allMembersData?.map((eachMember, index) => {
                        return (
                            <div 
                            key={index}
                            className="h-max w-max">
                                <TeamCard teamdata={eachMember} />
                            </div>
                        )
                    })
                }
            </div>





    </div>
  )
}

export default Team