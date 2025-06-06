import React from 'react'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'


const ContactCard = ({ contactdata }) => {



  function handleGotoBtnClick(directingUrl) {
    window.open(directingUrl, "_blank");
  }



  function handleCopyBtnClick(source){
    navigator.clipboard.writeText(source)
  }
  

  function handleContactBtnClick(type, contact) {
    switch (type) {
      case "call":
        // opens the phone dialer
        window.location.href = `tel:${contact}`;
        break;
      case "email":
        // opens the default mail client
        window.location.href = `mailto:${contact}`;
        break;
      case "whatsapp":
        // opens WhatsApp (web or app) in a new tab
        window.open(`https://wa.me/${contact}`, "_blank");
        break;
      default:
        // fallback: open as normal URL in a new tab
        // window.open(contact, "_blank");
    }
  }
  



  return (
    <div className='h-max w-56 hover:scale-105 transition-all duration-700 p-5 rounded-lg border-2 border-zinc-300 shadow-md shadow-zinc-600 text-center '>




      <div className="h-max overflow-hidden flex justify-center items-center">
        <i
          className={`${contactdata.iconClass} text-8xl`}
          style={{ color: contactdata.iconColor }}
        />
      </div>




      <h3 className='font-bold text-xl mt-5'>{contactdata?.name}</h3>




      <div className="h-max w-full mt-5 px-5">
        {
          contactdata?.directingUrl ?
            <button 
            onClick={()=>{handleGotoBtnClick(contactdata.directingUrl)}}
            className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-900 border-2 border-zinc-900 p-2 text-center rounded-full'>Go to</button>
            :
            contactdata?.directContact ?
            <div className="flex gap-2">
              <button onClick={()=>{handleCopyBtnClick(contactdata.source)}} className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-900 border-2 border-zinc-900 p-1 px-2 text-center rounded-full'>copy</button>
              <button onClick={()=>{handleContactBtnClick(contactdata.name,contactdata.directContact)}} className='h-max w-full hover:scale-105 transition-all duration-500 text-zinc-900 border-2 border-zinc-900 p-1 px-2 text-center rounded-full'>Contact</button>
           
            </div>
            :
              null
        }
      </div>




    </div>
  )
}

export default ContactCard