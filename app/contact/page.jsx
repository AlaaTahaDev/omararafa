import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        <div className="hidden xl:flex w-full bg-contact dark:bg-contactdark bg-contain bg-top bg-left bg-no-repeat"></div>
          <div dir="rtl"  className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg text-right mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              مرحبا 👋
            </div>
            <h1 className="h1 max-w-md mb-8">تواصل معنا في اي وقت</h1>
            <p className="subtitle max-w-[400px]">
            هنقدر نجيب الدرجات النهائية ولو عندك مشاكل في اللغه العربية تواصل معنا وهنحلها ان شاء الله
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        <Form/>       
          <div dir="rtl" className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>alaatahadev048@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>مصر ,القاهرة .شبرا الخيمه</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className="text-primary" />
              <div>+201146525436</div>
            </div>
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default Contact;
