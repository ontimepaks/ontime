import React from 'react'

const Footer = () => {


    const quickLink = [
        "Home", "Services","About", "Team", "Contact"
    ]












    return (
        <div className='h-max w-full overflow-x-hidden bg-zinc-700 p-10 mt-20 text-zinc-100 text-center'>



            <div className="h-max w-full text-center">
                <h1 className='h-max w-full text-3xl  font-extrabold mb-10 '>Quik Links</h1>
            </div>


            <div className="w-full flex justify-center gap-x-3 md:gap-x-10">

                {
                    quickLink.map((eachlink, index) => {
                        return (
                            <div 
                            onClick={()=>{document.getElementById(eachlink.toLowerCase()).scrollIntoView({behavior:"smooth"})}}
                            key={index} className="">
                                {eachlink}
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Footer