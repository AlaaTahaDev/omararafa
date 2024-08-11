'useClient';
import Link from "next/link";
import {
    RiYoutubeFill,
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill,
  } from "react-icons/ri";
 
 const icons=[
    {
      path:'https://www.facebook.com/profile.php?id=100080700740322',
      name:<RiFacebookFill/>  
    },
    {
        path:'https://www.youtube.com/@omararafa-arabic',
        name:<RiYoutubeFill/>  
      },
      {
        path:'https://www.instagram.com/omar_arafa_0?igsh=eTlncTMybjd2OHBo',
        name:<RiInstagramFill/>  
      },
      {
        path:'whatsapp://send?phone=+201146525436&text=السلام عليكم',
        name:<RiWhatsappFill/>  
      },
 ]; 
const Social=({containerStyles,iconStyles})=>{
    return(
        <div className={`${containerStyles}`}>{
          icons.map((icon,index)=>{
            return <Link href={icon.path} key={index}><div
            className={`${iconStyles}`}
            >{icon.name}</div></Link>
          })  
        }</div>
    )
    }
    
    export default Social;