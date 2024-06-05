"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { LuShoppingBasket } from "react-icons/lu";

const Sidebar = () => {
  const route = usePathname();
  return (
    <div className=" w-[25vw] h-screen bg-blue-950 text-white flex flex-col gap-8 p-4">
      <div className=' flex gap-6 items-center'>
        <img className=" w-20 bg-white rounded-full" src="./nextjs-logo.svg" alt="Next" />
        <h1 className=" text-2xl">Pritam's App</h1>
      </div>
      <div className=" flex flex-col gap-1">
        <Link href='/' className={`flex gap-2 items-center text-xl w-full rounded-xl px-4 py-2 hover:bg-blue-900 cursor-pointer ${route === '/' ? 'bg-blue-900' : ''}`}><MdDashboard /> Dashboard</Link>
        <Link href='/users' className={`flex gap-2 items-center text-xl w-full rounded-xl px-4 py-2 hover:bg-blue-900 cursor-pointer ${route.includes('/users') ? 'bg-blue-900' : ''}`}><FaUsers /> Users</Link>
        <Link href='/products' className={`flex gap-2 items-center text-xl w-full rounded-xl px-4 py-2 hover:bg-blue-900 cursor-pointer ${route.includes('/products') ? 'bg-blue-900' : ''}`}><LuShoppingBasket /> Products</Link>
        <Link href='/transactions' className={`flex gap-2 items-center text-xl w-full rounded-xl px-4 py-2 hover:bg-blue-900 cursor-pointer ${route === '/transactions' ? 'bg-blue-900' : ''}`}><RiMoneyRupeeCircleFill /> Transactions</Link>
      </div>
    </div>
  )
}

export default Sidebar;