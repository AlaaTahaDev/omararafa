import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Themeprovider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const cairo = Cairo({ subsets: ["latin"] });
export const metadata = {
  title: "OmarArafa",
  description: "Teacher Arabic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <meta charSet="utf-8"/>
      <meta name="description" content="Omar Arafa is an Arabic language teacher"/>
      <meta name="keywords" content="Omar Arafa arabic, عمر عرفه, عمر عرفة عربي , عمر عرفه مدرس لغه عربيه, عمر عرفه نحو , عمر عرفه لغه عربيه ,"/>
      <meta name="author" content="Alaa Taha"/>
    </head>
      <body className={cairo.className}>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
