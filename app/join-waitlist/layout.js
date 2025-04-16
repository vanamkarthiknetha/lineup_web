"use client"
import { JoinWaitListState } from "@/context/JoinWaitListContext";
import Image from "next/image";


export default function JoinWaitlistLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen p-4 md:p-12">
      <Image
        src="/LineUp_Logo_White 1.png"
        width={82}
        height={75}
        alt="logo"
        className=""
      />
    <JoinWaitListState>
      {children}
    </JoinWaitListState>
    </main>
  );
}
