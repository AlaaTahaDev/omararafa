import Link from "next/link";
import Image from "next/image";

const Logo=()=>{
return(
    <Link href='/'><Image src='/graduate.png' width={70} height={70}/></Link>
)
}

export default Logo;