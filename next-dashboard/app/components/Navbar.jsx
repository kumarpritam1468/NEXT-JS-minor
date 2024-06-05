"use client"

import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className=" w-[75vw] p-4">
            <div className="navbar bg-blue-950 rounded-xl ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl uppercase text-white">{pathname === '/' ? 'Dashboard' : pathname.split('/').pop()}</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered bg-blue-900 text-gray-300 w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 bg-white rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="/nextjs-logo.svg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Messages</a></li>
                            <li><a>Notifications</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar