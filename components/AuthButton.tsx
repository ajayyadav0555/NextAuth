"use client"; // Ensure this runs on the client side

import { login } from "@/lib/actions/action";
// import { useState } from "react";
// import { signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  // const [box,setBox]=useState<number[][]>(Array.from({length:3},()=>Array(3).fill(100)))
console.log("auth button")
  return (
    <div>
      <button onClick={() => login()}>Sign in with GitHub</button>
    {/* {
      box.map((item,index)=>(
        <div key={index} className="">{item}</div>
      ))
    } */}
    </div>
  );
}
