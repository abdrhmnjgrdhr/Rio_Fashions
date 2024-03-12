import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import MainLogo from '../../../assets/Logo/BrandLogo.jpg'
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { BiLogOut } from "react-icons/bi";


export const NavBar = () => {

    let [sideNav,setSideNav] = useState(false)
    let [clsOff, setClsOff] = useState(false)

    function handleSideNavOpen(){
        setSideNav(!sideNav)
    }

    function handleClsOff(){
        setClsOff(!clsOff)
        console.log("true");
    }
    const counts = 10

  return (
    
    

    <section className='sticky top-0 bg-white border-b-2 z-50'>
        <div className={clsOff? "hidden" :'flex items-center justify-center gap-3 bg-[#222] text-[#fff] p-2  text-[0.8rem] lg:text-[1rem] w-full'}>
            <marquee className="">Free shipping for standard order over <span className='text-red-500'>Rs.999/-</span></marquee>
            <IoMdCloseCircle onClick={handleClsOff} className='text-2xl'/>
        </div>
        <nav className='flex items-center justify-between p-3'>
            <div className='flex items-center gap-4'>
                <img src={MainLogo} width={'40px'} alt="" />
                <h1 className='text-[1.5rem] md:text-4xl font-[times] font-bold'><a href="/"><span className='text-red-600'>Rio</span> Fashions</a></h1>
            </div>
            <div className='hidden lg:block md:bl'>
                <ul className='flex gap-4 text-[1.1rem]'>
                    <li className='hover:text-[#dc2626] transition-all duration-300 font-semibold'><Link to={'/'}>Home</Link></li>
                    <li className='relative group '>
                        <a className='hover:text-[#dc2626]  transition-all duration-300 font-semibold cursor-pointer'>Shop</a>
                        <div className='absolute -left-10 top-[100%] bg-white pt-5 ps-5 pe-5 pb-2 hidden group-hover:block'>
                            <ul className='block '>
                                <li className='text-[1rem] hover:text-[#dc2626]'><NavLink to={'/mens_wears'}>Men's Wear</NavLink></li>
                                <li className='text-[1rem] hover:text-[#dc2626]'><NavLink to={"/mens_accessories"}>Men's Accessories</NavLink></li>
                                <li className='text-[1rem] hover:text-[#dc2626]'><NavLink to={"/watches"}>Watches</NavLink></li>
                                <li className='text-[1rem] hover:text-[#dc2626]'><NavLink to={'/gadgets'}>Gadgets</NavLink></li>
                                <li className='text-[1rem] hover:text-[#dc2626]'><NavLink to={'/shoes'}>Shoes</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className='hover:text-[#dc2626] transition-all duration-300 font-semibold'><NavLink to={'/blog'}>Blog</NavLink></li>
                    <li className='hover:text-[#dc2626] transition-all duration-300 font-semibold'><NavLink to={'/about'}>About us</NavLink></li>
                    <li className='hover:text-[#dc2626] transition-all duration-300 font-semibold'><NavLink to={'/contact'}>Contact us</NavLink></li>
                </ul>
                
            </div>
            <div className='flex gap-12 justify-center items-center'>
                <div className='hidden lg:flex gap-8 text-2xl '>
                    
                   
                        <Badge  size="small"  count={counts }>
                            <NavLink to={'/cart'}>
                                <ShoppingCartOutlined className='hover:text-[#dc2626] transition-all duration-300 font-semibold text-2xl'/>
                            </NavLink>
                        </Badge>
                   
                    
                        <Badge  size="small"  count={counts}>
                            <NavLink to={'/wishlist'}>
                                <HeartOutlined className='hover:text-[#dc2626] transition-all duration-300 font-semibold text-2xl' />
                            </NavLink>
                        </Badge>
                </div>
                <div className='flex gap-4'>
                    <div>
                    <div className='text-center bg-[black] text-white rounded-xl hover:bg-[#dc2626] hover:text-white transition-all'>
                            <Link className=' duration-300 font-semibold flex gap-2 p-2 ' to={'login'}><IoSearch className='text-2xl mx-[auto]'/><span className='text-[1rem] hidden lg:block00'>Search</span></Link>
                        </div>
                    </div>
                    {/* <div className='pr-5 hidden lg:block'>
                        <div className='text-center bg-[#dc2626] text-white rounded-xl hover:bg-black hover:text-white transition-all'>
                            <Link className=' duration-300 font-semibold flex gap-2 p-2 ' to={'logout'}><BiLogOut className='text-2xl mx-[auto]'/><span className='text-[1rem]'>Logout</span></Link>
                        </div>
                    </div> */}
                        <div className='pr-5 hidden lg:block'>
                            <div className='text-center bg-[#dc2626] text-white rounded-xl hover:bg-black hover:text-white transition-all'>
                                <Link className=' duration-300 font-semibold flex gap-2 p-2 ' to={'profile'}><FaRegUser className='text-2xl mx-[auto]'/><span className='text-[1rem]'>Profile</span></Link>
                            </div>
                        </div>
                    <div  className='lg:hidden flex items-center'>
                        <FaBars onClick={handleSideNavOpen} className='text-2xl' />
                    </div>
                </div>
            </div>
            
        </nav>


        <sidenav className={sideNav? "absolute top-0 left-0 bg-gray-200 h-[100vh] w-[80vw] z-[99] text-center" : "absolute top-0 left-[-400%] bg-gray-200 h-[100vh] w-[100vw] z-[99] text-center transition-all duration-1000"}>
            
            <CgClose onClick={handleSideNavOpen} className='absolute mt-7 mr-7 text-3xl right-0'/>
            <div className='mt-[5rem]'>
                <h1 className='text-3xl font-bold'><a href="#"><span className='text-red-600'>Rio</span> Apparels</a></h1>
            </div>
            <div className=''>
                <ul className='flex flex-col font-semibold gap-4 text-[1.1rem] mt-[3rem]'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                    <li><Link to={'/contact'}>Contact us</Link></li>
                </ul>
            </div>
            
        </sidenav>
    </section>
    
  )
}
