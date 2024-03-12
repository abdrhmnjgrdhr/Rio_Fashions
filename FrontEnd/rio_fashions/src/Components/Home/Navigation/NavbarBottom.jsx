import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";

const NavbarBottom = () => {
    return (
      <section className='flex justify-between shadow-lg border-t-2 gap-7 p-5 bottom-0 sticky z-10  bg-white lg:hidden'>
          <Badge className=''>
              <NavLink to={'/shop'} className='text-center'>
                  <FaShoppingBag className='text-2xl mx-[auto]'/>
                  <p className='text-[.8rem]'>Shop</p>
              </NavLink>
          </Badge>
          <Badge count={1} className=''>
              <NavLink to={'wishlist'} className=''>
                  <FaRegHeart className='text-2xl mx-[auto]'/>
                  <p className='text-[.8rem]'>Wishlist</p>
              </NavLink>
          </Badge>
          <Badge count={1} className=''>
              <NavLink to={'cart'} className='text-center'>
                  <MdOutlineShoppingCart className='text-2xl mx-[auto]'/>
                  <p className='text-[.8rem]'>Cart</p>
              </NavLink>
          </Badge>
          <Badge className='pr-5'>
              <NavLink to={'login'} className='text-center'>
                  <FaRegUser className='text-2xl mx-[auto]'/>
                  <p className='text-[.8rem]'>Login</p>
              </NavLink>
          </Badge>
      </section>
    )
  }
  

export default NavbarBottom