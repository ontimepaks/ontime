import ContactCard from '@/components/ContactCard';
import Image from 'next/image';
import React from 'react'

const Contact = () => {


    const onlineContactArray = [
        {
            iconClass: "ri-whatsapp-fill",
            name: "whatsapp",
            source: "03398983943",
            iconColor: "#25D366",
            directContact: "https://wa.me/+923161325007",
        },
        {
            iconClass: "ri-phone-fill",
            name: "call",
            source: "03398983943",
            iconColor: "#4CAF50",
            directContact: "tel:+923161325007",
        },
        {
            iconClass: "ri-mail-fill",
            name: "email",
            source:"info@ontime.pk",
            iconColor: "#D44638",
            directContact: "mailto:info@ontime.pk"
        },
        {
            iconClass: "ri-facebook-fill",
            name: "facebook",
            iconColor: "#1877F2",
            directingUrl: "https://www.facebook.com/ontimeaa",
        },
        {
            iconClass: "ri-tiktok-line",
            name: "tiktok",
            iconColor: "#000000",
            directingUrl: "https://www.tiktok.com/@ontimeaa",
        },
        {
            iconClass: "ri-instagram-fill",
            name: "instagram",
            iconColor: "#E1306C",
            directingUrl: "https://www.instagram.com/ontimeaa/",
        },
        {
            iconClass: "ri-linkedin-fill",
            name: "linkedin",
            iconColor: "#0077B5",
            directingUrl: "https://www.linkedin.com/in/ontimeaa/"
        },

        {
            iconClass: "ri-pinterest-fill",
            name: "pinterest",
            iconColor: "#E60023",
            directingUrl: "https://www.pinterest.com/ontimeaa/"
        },
        {
            iconClass: "ri-youtube-fill",
            name: "youtube",
            iconColor: "#FF0000",
            directingUrl: "https://www.youtube.com/channel/UCmTomDF3Hoae35Ba3PEqTTw"
        },
       
    ];








    return (
        <div
            id='contact'
            className='h-full w-full overflow-x-hidden p-10'>



            <div className="h-max w-full">
                <h1 className='h-max w-full text-4xl md:text-5xl text-zinc-800 font-extrabold mb-10 mt-20 text-center md:text-start'>Contact</h1>
            </div>





            <div className="h-auto w-full p-10 flex flex-col md:flex-row bg-zinc-900 text-zinc-100 rounded-lg">
             
                <div className="w-full  ">
                <h1 className='text-3xl md:text-4xl font-extrabold mb-5'>Physical Location:</h1>
                    <h2>Parasram Building, Pakistan Chowk, next to desi Tarka, New Chali, Karachi, Sindh 74200, Pakistan</h2>
                   
                </div>
            </div>







            <div className="h-max w-full flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
                {
                    onlineContactArray.map((eachContact, index) => {
                        return (
                            <div
                                key={index}
                                className="h-max w-max">
                                <ContactCard contactdata={eachContact} />
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default Contact