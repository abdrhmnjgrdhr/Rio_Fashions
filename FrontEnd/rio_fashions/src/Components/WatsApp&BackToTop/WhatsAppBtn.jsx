import React from 'react'
import WhatsAppLogo from '../../assets/Logo/WhatsApp.png'

const WhatsAppBtn = () => {
  return (
    <div title='Click To Start Whatsapp chat..' className='fixed bottom-[50%] animate-pulse hover:scale-[1.1] transition-all duration-300 left-3'>
        <a href="http://wa.me/918524994484?text=Hello How can I Help you ?" target='_blank'>
            <img src={WhatsAppLogo} width={60} alt="aaaa" />
        </a>
    </div>
  )
}

export default WhatsAppBtn