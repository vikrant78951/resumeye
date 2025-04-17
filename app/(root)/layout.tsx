import Header from "@/src/root/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETIN",
  description: "Everything i need in one application ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Header/>

   <main>
   {children}
   </main>

   
   </>
  );
}
