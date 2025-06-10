// import ContactCard from '@/components/ContactCard';
// import Image from 'next/image';
// import React from 'react'

// const Contact = () => {


//     const onlineContactArray = [
//         {
//             iconClass: "ri-whatsapp-fill",
//             name: "whatsapp",
//             source: "03398983943",
//             iconColor: "#25D366",
//             directContact: "https://wa.me/+923161325007",
//         },
//         {
//             iconClass: "ri-phone-fill",
//             name: "call",
//             source: "03398983943",
//             iconColor: "#4CAF50",
//             directContact: "tel:+923161325007",
//         },
//         {
//             iconClass: "ri-mail-fill",
//             name: "email",
//             source:"info@ontime.pk",
//             iconColor: "#D44638",
//             directContact: "mailto:info@ontime.pk"
//         },
//         {
//             iconClass: "ri-facebook-fill",
//             name: "facebook",
//             iconColor: "#1877F2",
//             directingUrl: "https://www.facebook.com/ontimeaa",
//         },
//         {
//             iconClass: "ri-tiktok-line",
//             name: "tiktok",
//             iconColor: "#000000",
//             directingUrl: "https://www.tiktok.com/@ontimeaa",
//         },
//         {
//             iconClass: "ri-instagram-fill",
//             name: "instagram",
//             iconColor: "#E1306C",
//             directingUrl: "https://www.instagram.com/ontimeaa/",
//         },
//         {
//             iconClass: "ri-linkedin-fill",
//             name: "linkedin",
//             iconColor: "#0077B5",
//             directingUrl: "https://www.linkedin.com/in/ontimeaa/"
//         },

//         {
//             iconClass: "ri-pinterest-fill",
//             name: "pinterest",
//             iconColor: "#E60023",
//             directingUrl: "https://www.pinterest.com/ontimeaa/"
//         },
//         {
//             iconClass: "ri-youtube-fill",
//             name: "youtube",
//             iconColor: "#FF0000",
//             directingUrl: "https://www.youtube.com/channel/UCmTomDF3Hoae35Ba3PEqTTw"
//         },

//     ];








//     return (
//         <div
//             id='contact'
//             className='h-full w-full overflow-x-hidden p-10'>



//             <div className="h-max w-full">
//                 <h1 className='h-max w-full text-4xl md:text-5xl text-zinc-800 font-extrabold mb-10 mt-20 text-center md:text-start'>Contact</h1>
//             </div>





//             <div className="h-auto w-full p-10 flex flex-col md:flex-row bg-zinc-900 text-zinc-100 rounded-lg">

//                 <div className="w-full  ">
//                 <h1 className='text-3xl md:text-4xl font-extrabold mb-5'>Physical Location:</h1>
//                     <h2>Parasram Building, Pakistan Chowk, next to desi Tarka, New Chali, Karachi, Sindh 74200, Pakistan</h2>

//                 </div>
//             </div>







//             <div className="h-max w-full flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
//                 {
//                     onlineContactArray.map((eachContact, index) => {
//                         return (
//                             <div
//                                 key={index}
//                                 className="h-max w-max">
//                                 <ContactCard contactdata={eachContact} />
//                             </div>
//                         )
//                     })
//                 }
//             </div>



//         </div>
//     )
// }

// export default Contact











'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';





export default function ContactPage() {



    const [formData, setFormData] = useState({
        username: '',
        userEmail: '',
        userMsg: '',
    });
    const [status, setStatus] = useState('');
    const [userLength, setUserLength] = useState(0)



    const onlineContactArray = [

        {
            iconClass: "ri-twitter-fill",
            name: "twitter",
            iconColor: "#1DA1F2",
            directingUrl: "https://twitter.com/ontimeaa"
        },
        {
            iconClass: "ri-facebook-fill",
            name: "facebook",
            iconColor: "#1877F2",
            directingUrl: "https://www.facebook.com/ontimeaa"
        },
        {
            iconClass: "ri-instagram-fill",
            name: "instagram",
            iconColor: "#E1306C",
            directingUrl: "https://www.instagram.com/ontimeaa/"
        },
        {
            iconClass: "ri-tiktok-line",
            name: "tiktok",
            iconColor: "#000000",
            directingUrl: "https://www.tiktok.com/@ontimeaa"
        },
        {
            iconClass: "ri-youtube-fill",
            name: "youtube",
            iconColor: "#FF0000",
            directingUrl: "https://www.youtube.com/channel/UCmTomDF3Hoae35Ba3PEqTTw"
        },
        {
            iconClass: "ri-pinterest-fill",
            name: "pinterest",
            iconColor: "#E60023",
            directingUrl: "https://www.pinterest.com/ontimeaa/"
        },
        {
            iconClass: "ri-linkedin-fill",
            name: "linkedin",
            iconColor: "#0077B5",
            directingUrl: "https://www.linkedin.com/in/ontimeaa/"
        },
        {
            iconClass: "ri-patreon-fill",
            name: "patreon",
            iconColor: "#F96854",
            directingUrl: "https://www.patreon.com/ontimeaa"
        },
        {
            iconClass: "ri-twitch-fill",
            name: "twitch",
            iconColor: "#9146FF",
            directingUrl: "https://www.twitch.tv/ontimeaa"
        },
        {
            iconClass: "ri-reddit-fill",
            name: "reddit",
            iconColor: "#FF4500",
            directingUrl: "https://www.reddit.com/user/ontimeaa/"
        },
        {
            iconClass: "ri-skype-fill",
            name: "skype",
            iconColor: "#00AFF0",
            directingUrl: "https://join.skype.com/invite/sChLGGp8GkEp"
        },
        {
            iconClass: "ri-telegram-fill",
            name: "telegram",
            iconColor: "#0088CC",
            directingUrl: "https://www.telegram.org/ontimeaa"
        },
        {
            iconClass: "ri-discord-fill",
            name: "discord",
            iconColor: "#5865F2",
            directingUrl: "https://discord.gg/SYeQ2tjp"
        },
        {
            iconClass: "ri-snapchat-fill",
            name: "snapchat",
            iconColor: "#FFFC00",
            directingUrl: "#"
        },


    ];






    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };






    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending…');
        try {
            let response = await axios.post('/api/user/emailContact', formData);
            console.log(response.data)
            if (response?.data?.success == true) {
                setStatus('Message sent!');
                setFormData({ username: '', userEmail: '', userMsg: '' });
            } else {
                alert(response?.data?.reason || response?.data?.msg)
            }

        } catch (err) {
            console.error(err);
            setStatus('Error sending message.');
        }
    };







    useEffect(() => {
        async function getAllUserLength() {
            try {
                let response = await axios.get("/api/user/getAllUserLength")
                console.log(response.data)
                if (response?.data?.success) {
                    setUserLength(response?.data?.userLength)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getAllUserLength()
    }, [])





    function handlePhoneNoClick() {
        window.location.href = "tel:+923161325007"
    }




    function handleEmailClick() {
        window.location.href = "mailto:ontimepaks@gmail.com"
    }



    function handleWhatsAppChatClick() {
        let phoneNo = encodeURIComponent("+923161325007")
        let defaultTextMsg = encodeURIComponent("Hello, I found your contact from your website. Would you like to talk to me@")
        window.location.href = `https://wa.me/${phoneNo}?text=${defaultTextMsg}`
    }



    function openLocationInMap() {
        const lat = 24.85364369546579;
        const lon = 67.01224482227269;
        // bingmaps URI that asks for directions from “here” (~) to the target coords
        //   const uri = `bingmaps:?rtp=~pos.${lat}_${lon}_Destination`
        // navigate there (will open Maps app on Windows)
        const uri = "https://maps.app.goo.gl/8j1j1WUGkvnopcow8"
        window.open(uri, "_blank")
    };






    return (
        // main container
        <main
            id='contact'
            className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 mt-20">



            {/* Heading */}
            <h2 className="text-4xl mb-10 font-semibold text-center md:text-left ">
                CONTACT <span className="text-red-600">US</span>
            </h2>


            {/* form and address+links container */}
            <div className="max-w-5xl w-full  shadow rounded-lg p-8 flex flex-col-reverse lg:flex-row lg:justify-between gap-10">





                {/* Left: Form */}
                <div>


                    <p className="text-gray-600 mb-6 text-center md:text-left">
                        Get in touch with us. Feel free to use the contact form below.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                            <input
                                type="text"
                                name="username"
                                placeholder="Your Name"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            <input
                                type="text"
                                name="userEmail"
                                placeholder="Your Email"
                                value={formData.userEmail}
                                onChange={handleChange}
                                required
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <textarea
                            name="userMsg"
                            placeholder="Your Message"
                            value={formData.userMsg}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />

                        <button
                            type="submit"
                            className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition px-6 py-2 rounded font-medium"
                        >
                            send
                        </button>
                        {status && <p className="mt-2 text-sm text-center md:text-left">{status}</p>}
                    </form>
                </div>







                {/* Right: Contact Info */}
                <div className="space-y-2 flex flex-col items-center md:items-start justify-center md:justify-start py-5 text-center md:text-start ">
                    <div className="flex items-start space-x-3">
                        <div>
                            Ontime printers,Parasram Building, Pakistan Chowk, next to desi Tarka, New Chali, Karachi, Sindh 74200, Pakistan
                            <span onClick={openLocationInMap} className=' ml-2 text-red-500 text-sm cursor-pointer'>see on map</span>
                        </div>
                    </div>

                    <div
                        onClick={handlePhoneNoClick}
                        className="flex items-center space-x-3">
                        <i className="ri-phone-fill text-red-500"></i>
                        <span className="text-gray-800  cursor-pointer">+92 316 1325007</span>
                    </div>

                    <div
                        onClick={handleWhatsAppChatClick}
                        className="flex items-center space-x-3">
                        <i className="ri-whatsapp-line text-red-500"></i>
                        <span className="text-gray-800 cursor-pointer">+92 316 1325007</span>
                    </div>


                    <div
                        onClick={handleEmailClick}
                        className="flex items-center space-x-3">
                        <i className="ri-mail-line text-red-500"></i>
                        <span className="text-gray-800 cursor-pointer">ontimepaks@gmail.com</span>
                    </div>

                </div>








            </div>







            {/* social links */}
            <div className="flex gap-5 mt-10 flex-wrap">
                {
                    onlineContactArray?.map((eachContact, index) => {
                        return (
                            <div
                                onClick={() => { window.open(eachContact.directingUrl) }}
                                key={index}>
                                <i className={`${eachContact.iconClass} text-2xl cursor-pointer`}
                                    style={{ color: eachContact.iconColor }}></i>
                            </div>
                        )
                    })
                }
            </div>







            {/* Visitor counter */}
            <div className="mt-20 font-bold text-2xl text-red-500 flex flex-col items-center ">

                <div className="text-2xl mb-2 font-semibold">
                    Registered Users
                </div>

                <div className="flex gap-1">

                    <div className="h-10 w-10 flex justify-center items-center from-zinc-200 to-zinc-950 rounded-md">
                        0
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center bg-amber-200 rounded-md">
                        0
                    </div>
                    <div className="h-10 w-10 flex justify-center items-center bg-amber-200 rounded-md">
                        0
                    </div>


                    {
                        userLength.toString().split("").map((eachLetter, index) => {

                            return (
                                <div key={index} className="h-10 w-10 flex justify-center items-center bg-amber-200 rounded-md">
                                    {eachLetter}
                                </div>
                            )
                        })
                    }

                </div>
                {/* Registered User: <span className='text-zinc-700 font-semibold ml-4 text-xl'>{userLength.toString()}</span> */}
            </div>




        </main>
    );
}
