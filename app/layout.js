import "./globals.css";
import { Montserrat } from "next/font/google";
import { ToastContainer } from 'react-toastify';

const montserrat = Montserrat({
  subsets: ["latin"],
});



export const metadata = {
  title: "LineUp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-black text-white  mx-auto`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
