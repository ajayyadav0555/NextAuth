// "use client";

// import Component4 from "@/components/Component4";
// import Component5 from "@/components/Component5";
// import Component6 from "@/components/Component6";
// import Component7 from "@/components/Component7";
// import Component8 from "@/components/Component8";
// import Componet3 from "@/components/Components3";
// import Component9 from "@/components/Components9";
// import Componet2 from "@/components/Componet2";
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";


// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="overflow-x-hidden">
//       <div
//         className="flex flex-col w-screen h-screen"
//         style={{ backgroundImage: "url('/image.png')", backgroundSize: "cover", backgroundPosition: "center" }}
//       >
//         <div className="flex items-center justify-between w-full max-w-7xl px-6 mx-auto mt-4">
//           {/* Logo */}
//           <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border">P</div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-10">
//             {[
//               { href: "/", label: "Home" },
//               { href: "/about", label: "About" },
//               { href: "/services", label: "Services" },
//               { href: "/contact", label: "Contact" },
//             ].map((item) => (
//               <li key={item.href}>
//                 <Link href={item.href} className="hover:text-gray-300">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Get Started Button */}
//           <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Get Started
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden ml-auto"
//             onClick={toggleMenu}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="absolute top-16 left-0 min-w-screen z-50 md:hidden bg-blue-500 p-4 space-y-3 text-center">
//             {[
//               { href: "/", label: "Home" },
//               { href: "/about", label: "About" },
//               { href: "/services", label: "Services" },
//               { href: "/contact", label: "Contact" },
//             ].map((item) => (
//               <div key={item.href}>
//                 <Link href={item.href} onClick={toggleMenu} className="block py-2">
//                   {item.label}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Componet2/>
//       <Componet3/>
//       <Component4/>
//       <Component5/>
//       <Component6/>
//       <Component7/>
//       <Component8/>
//       <Component9/>
//     </div>
//   );
// }

"use server"
import { auth } from '@/auth'
import AuthButton from '@/components/AuthButton'
import Logout from '@/components/Logout'
import React from 'react'
import Private from '../api/_lib/page'

export default async function Home(){
  const session=await auth()

  if(session?.user){
    return <> 
    <h1>Signed in as {session?.user?.name}</h1>
    <Logout/>
    </>
  }
  return (
    <div><p>You are not signed In </p>
    <Private/>
    <AuthButton/>
    </div>
  )
}

