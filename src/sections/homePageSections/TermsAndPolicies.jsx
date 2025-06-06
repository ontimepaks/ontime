import React from 'react'

const TermsAndPolicies = () => {


    const termsAndPoliciesArray = [
        "copyright@ontime",
        "Dev Contact: 03361917812"
    ]


    return (

            <div className="h-max w-full overflow-x-hidden flex flex-col md:flex-row gap-3 sm:gap-5 lg:gap-10 text-zinc-100 bg-zinc-950 p-5 justify-center items-center font-extrabold">

                {
                    termsAndPoliciesArray.map((eachTerm, index) => {
                        return (
                            <div key={index} className="">
                                {eachTerm}
                            </div>
                        )
                    })
                }

            </div>

    )
}

export default TermsAndPolicies