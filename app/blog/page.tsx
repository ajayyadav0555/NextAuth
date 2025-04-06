
import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

 export default async function ResponsiveImages() {
  await new Promise((resolve)=>setTimeout(resolve,2000))

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 p-4">
      {/* <Link href={"/blog"} className={`p-2 rounded-full ${pathname==="/blog"? "bg-blue-600 text-white":"text-gray-700 hover:bg-gray-200"}`}>Blog</Link>
      <Link href={"/"} className={` p-2 bg-gray-500 rounded-full ${pathname==="/"? 'text-red-400 ':"text-green-500 hover:rounded-full hover:bg-red-500"}`}>Home</Link> */}
      <Image
        src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb"
        alt="Image 1"
        width={600}
        height={400}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <Image
src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb"  
      alt="Image 2"
        width={600}
        height={400}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
    </div>
  );
}
