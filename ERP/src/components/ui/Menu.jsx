import close from '/imgs/close.png'

import insta from '/imgs/insta.png'
import x from '/imgs/x.png'
import facebook from '/imgs/facebook.png'
import tiktok from '/imgs/tiktok.png'

import React, { useState } from "react";
import { motion } from "framer-motion";
// import { useAuth } from "./AuthContext"

import { useNavigate } from "react-router"

export function Menu({menuOpen, setMenuOpen }){


  //   const {user, login, logout} = useAuth()

  // Animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // const navigate = useNavigate()

  function handleNavigation(path){
    navigate(path)
    setMenuOpen()
  }
   

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-white bg-opacity-100 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={ close } onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg text-fontColor font-poppins items-center">
          <div onClick={()=>{handleNavigation("/pages/blog")}} className="dark:text-white hover:underline">Blogs</div>
          <div onClick={()=>{handleNavigation("/pages/events")}}className="dark:text-white hover:underline">Events</div>
          <div onClick={()=>{handleNavigation("/pages/donate")}} className="dark:text-white hover:underline">Donate</div>
          <div onClick={()=>{handleNavigation("/aboutus")}} className="dark:text-white hover:underline">About Us</div>
          <div onClick={()=>{handleNavigation("/pages/churches")}} className="dark:text-white hover:underline">Churches</div>
          <div onClick={()=>{handleNavigation("/signup")}} className='dark:text-white'>Login/SignUp</div>
{/*            {IsLoggedIn ? <div onClick={()=>{handleNavigation(`profile/${ActiveUser}`)}}>Profile</div>:
                          <>
                            <div onClick={()=>{handleNavigation("/signup")}}>Login/SignUp</div>
                          </>
            }  */}
        </nav>
        <div className="flex space-x-4 mt-16 gap-5">
          <a href="#" className="w-8">
            <img src={ facebook } alt="facebook logo" className="" /> 
          </a>
          <a href="#" className="w-8">
            <img src={ x} alt="x logo" className="w-20" />           
          </a>
          <a href="#" className="w-8">
            <img src={insta} alt="insta logo" className="" />           
          </a>
          <a href="#" className="w-8">
            <img src={tiktok} alt="insta logo" className="" />           
          </a>
        </div>
      </motion.div>
    </>
  );
};
