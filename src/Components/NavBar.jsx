import React from "react";
import logo from "../assets/img/logo.svg";
import { IoMenuSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { Power4 } from "gsap/all";
 
const NavBar = () => {
  return (
    <div className="navbar flex fixed w-full z-[999] top-0 left-0 items-center justify-between py-8 px-7 sm:px-24 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: Power4.easeInOut , duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="nav_logo shrink-0 "
      >
        <img className="w-26 sm:w-20 " src={logo} alt="" />
      </motion.div>

      <motion.div  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: Power4.easeInOut , duration: 1, delay: 0.5 }}
        viewport={{ once: true }} className="nav_txt flex items-center gap-1 font2  sm:gap-5  text-[17px] sm:text-[14px]">
        <div className="tab lg:hidden flex items-center gap-2  ">
          Menu <IoMenuSharp className="h-5 w-5" />{" "}
        </div>
        <p className="sm:block hidden">Work</p>
        <p className="sm:block hidden">Studio</p>
        <p className="sm:block hidden">News</p>
        <p className="sm:block hidden">Contact</p>
      </motion.div>
    </div>
  );
};

export default NavBar;
