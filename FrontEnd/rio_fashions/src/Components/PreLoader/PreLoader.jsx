import React from 'react'
import LoadingImg from '../../assets/Loading IMG/loading.png'
import "animate.css"

const PreLoader = () => {
    
  return (
    <div className='bg-[#d1d0d0] flex flex-col justify-center items-center w-[100%] h-[100vh] fixed top-0 left-0'>
        <div className=''>
            <img src={LoadingImg} alt="" className='hover:animate-spin animate__animated animate__infinite animate__swing animate__slow' />
        </div>
        <h2 className='font-[cookie,cursive] text-6xl absolute bottom-[40%] lg:bottom-[35%]'>
          <span className='animate__animated animate__infinite animate__fadeInUp animate__fast'>..</span>
          <span className='animate__animated animate__infinite animate__fadeInUp animate__slower'>..</span>
          <span className='animate__animated animate__infinite animate__fadeInUp animate__fast'>..</span>
        </h2>
    </div>
  )
}

export default PreLoader