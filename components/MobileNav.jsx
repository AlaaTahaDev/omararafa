import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./logo";
import Social from "./socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
        <div className='flex flex-col items-center gap-y-32'>
           <Logo/>
           <Nav containerstyles='flex flex-col items-center gap-y-6'
           linkStyle="text-2xl"
           />
        </div>
        <Social containerStyles="flex gap-x-4" iconStyles='text-2xl'/>

        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
