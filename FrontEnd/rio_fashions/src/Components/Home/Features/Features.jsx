import React from 'react'
import { IoCarSportOutline } from "react-icons/io5";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoRefreshOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";



function Features() {
  return (
    <section className='flex flex-col md-[600px]:flex-row gap-10 justify-center md:flex-wrap ms-[10%] md:ms-0 mb-16'>
        <div className='flex items-center gap-5'>
            <IoCarSportOutline className='text-5xl text-[#b6b6b6]'/>
            <div>
                <h6 className='font-semibold'>FREE SHIPPING</h6>
                <p className='text-[#b6b6b6] text-[0.7rem]'>For all oder over Rs.999</p>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <IoHelpBuoyOutline className='text-5xl text-[#b6b6b6]'/>
            <div>
                <h6 className='font-semibold'>SUPPORT 24/7</h6>
                <p className='text-[#b6b6b6] text-[0.7rem]'>Dedicated support</p>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <IoRefreshOutline className='text-5xl text-[#b6b6b6]'/>
            <div>
                <h6 className='font-semibold'>07 DAYS RETURN</h6>
                <p className='text-[#b6b6b6] text-[0.7rem]'>Terms & Conditions</p>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <RiSecurePaymentLine className='text-5xl text-[#b6b6b6]'/>
            <div>
                <h6 className='font-semibold'>100% PAYMENT SECURE</h6>
                <p className='text-[#b6b6b6] text-[0.7rem]'>We ensure secure payment</p>
            </div>
        </div>
    </section>
  )
}

export default Features