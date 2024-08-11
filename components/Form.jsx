'use client';

import { User,MailIcon,ArrowRightIcon,MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
 
const Form=()=>{
    return <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='الاسم'/>
        <User className="absolute right-6" size={20}/> 
      </div>
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='الايميل'/>
        <MailIcon className="absolute right-6" size={20}/> 
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder='اكتب شيئا....'/>
        <MessageSquare className="absolute top-4 right-6" size={20}/> 
      </div>
      <Link href='whatsapp://send?phone=+201146525436&text=السلام عليكم'>
      <Button  className='flex items-center max-w-[166px]'>
        تواصل
        <ArrowRightIcon size={20}/>
        </Button>
      </Link>
      
    </form>
 }
 
 export default Form;