
import React from "react";
import Link from "next/link";

export default async function HomePage() {
  const handlecall=async()=>{
    await fetch("http://localhost:3000/api/hello",{cache:"no-store"})
    .then((res)=>res.json())
    .then((data)=>console.log(data))

  }

  handlecall();
    
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <nav>
        <ul className="flex space-x-4 mb-6 text-black">
          
          <Link href={`/about/id?lang=en`}>
            <li>Home</li>
          </Link>
          <Link href={`/about/id?lang=fr`}>
            <li>About</li>
          </Link>
          <Link href={`/about/id?lang=hi`}>
            <li>Profile</li>
          </Link>
          
        </ul>
      </nav>
      <h1 className="sm:text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Website
      </h1>
      <p className="sm:text-lg text-gray-700 mb-6">
        This is a simple homepage built with Next.js 15 and Tailwind CSS.
      </p>
      <Link
        href="/blog"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Blog
      </Link>
      <button>Go to About</button>
    </main>
  );
}
