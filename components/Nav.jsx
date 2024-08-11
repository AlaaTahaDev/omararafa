'use client';
import React from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const links=[
   {path:'/contact',name:'التواصل'}, 
   {path:'/',name:'الصفحه الرئيسيه'}, 
];
const Nav=({containerstyles,linkStyle,underlinkStyles})=>{
   const path=usePathname(); 
return(
    <nav className= {`${containerstyles}`}>{
        links.map((link,index)=>{
            return <Link 
            href={link.path} 
            key={index} 
            className={`capitalize ${linkStyle}`}>
            {link.path===path&&(<motion.span
             initial={{y:'-100%'}} 
            animate={{y:0}} 
            transition={{type:'tween'}} 
            layoutId="underline" 
            className={`${underlinkStyles}`}/>)}   
            {link.name}
            </Link>
        })
    }</nav>
)
}

export default Nav;